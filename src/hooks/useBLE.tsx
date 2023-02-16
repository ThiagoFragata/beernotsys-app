import { useState } from 'react'
import { Alert, PermissionsAndroid, Platform } from 'react-native'
import { PERMISSIONS, requestMultiple } from 'react-native-permissions'

import { BleManager, Device } from 'react-native-ble-plx'

import DeviceInfo from 'react-native-device-info'
import { DefaultError } from '../@types/errorDefault'

type PermissionCallback = (result: boolean) => void

const bleManager = new BleManager()

const BleID = '24:62:AB:D7:2A:56'

interface BluetoothLowEnergyApi {
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  onStopSearch: boolean
  setStopSearch: React.Dispatch<React.SetStateAction<boolean>>
  allDevices: Device[]

  requestPermissions(callback: PermissionCallback): Promise<void>
  onScanDevices(): void
  onStopScan(): void
  connectToDevice(device: Device): Promise<void>
  onConnectDevice(): void
}

export default function useBLE(): BluetoothLowEnergyApi {
  const [modalVisible, setModalVisible] = useState(false)
  const [onStopSearch, setStopSearch] = useState(false)

  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null)

  const [allDevices, setAllDevices] = useState<Device[]>([])
  const [Device, setDevice] = useState<Device | null>(null)

  const requestPermissions = async (callback: PermissionCallback) => {
    if (Platform.OS === 'android') {
      const apiLevel = await DeviceInfo.getApiLevel()
      if (apiLevel < 31) {
        const grantedStatus = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de localização',
            message: 'Bluetooth precisa de permissão de localização',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
            buttonNeutral: 'Talvez mais tarde',
          }
        )
        callback(grantedStatus === PermissionsAndroid.RESULTS.GRANTED)
      } else {
        const result = await requestMultiple([
          PERMISSIONS.ANDROID.BLUETOOTH_SCAN,
          PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ])

        const isAllPermissions =
          result['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
          result['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED

        callback(isAllPermissions)
      }
    } else {
      callback(true)
    }
  }

  const isDuplicateDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex(device => nextDevice.id === device.id) > -1

  const onScanDevices = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log('Erro ao procurar dispositivos', error)

        if (error.message === 'BluetoothLE is powered off') {
          Alert.alert(
            'Error',
            'O Bluetooth está desligado'
          )
        }
      }
      if (device) {
        console.log('Dispositivo encontrado', device.id)

        setAllDevices((prevState) => {
          if (!isDuplicateDevice(prevState, device)) {
            return [...prevState, device]
          }
          return prevState
        })
      }
    })
  }

  const onStopScan = () => {
    try {
      const stopScan = bleManager.stopDeviceScan()
      console.log(stopScan)
    } catch (error) {
      const _error = error as DefaultError
      console.log('Erro ao parar a busca por dispositivos', _error?.response.data.message)
    }
  }

  const connectToDevice = async (device: Device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id)
      setConnectedDevice(deviceConnection)
      bleManager.stopDeviceScan()
    } catch (error) {
      const _error = error as DefaultError
      console.warn(error)
      console.log('Erro ao conectar ao dispositivo', _error?.response.data.message)
    }
  }

  const onConnectDevice = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log('Erro ao procurar dispositivos', error)

        if (error.message === 'BluetoothLE is powered off') {
          Alert.alert(
            'Error',
            'O Bluetooth está desligado'
          )
        }
      }

      console.log(device)

      if (device?.id === BleID) {
        console.log('Dispositivo encontrado', device.id)
        Alert.alert('Dispositivo encontrado', device.id)

        bleManager.connectToDevice(BleID)
          .then((device) => {
            console.log('Connected to device', device.id);
            Alert.alert('Connected to device', device.id)
            setDevice(device)
          })
          .catch((error) => {
            console.log('Error connecting to device', error);
            Alert.alert('Error connecting to device', error);
          });
      } else {
        Alert.alert('Opa', 'Dispositivo não encontrado')
        bleManager.stopDeviceScan()
      }
    })
  }

  return {
    modalVisible,
    setModalVisible,
    onStopSearch,
    setStopSearch,
    allDevices,
    requestPermissions,
    onScanDevices,
    onStopScan,
    connectToDevice,
    onConnectDevice
  }
}