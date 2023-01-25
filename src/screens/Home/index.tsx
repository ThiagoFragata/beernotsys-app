import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

import { HomeImage } from '../../assets';
import { Stack } from '../../styles/commonStyles';

import { Button } from '../../components/Button';
import * as styles from './styles';


export function Home() {
  const modalizeRef = useRef<Modalize>(null);
  const navigation = useNavigation()

  const [controlButton, setControl] = useState(false)

  const stopSearch = () => {
    setControl(true)
  }

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <styles.SafeContainer>
        <styles.Title>
          Por favor <styles.Strong>conecte-se</styles.Strong> com a garrafa!
        </styles.Title>

        <HomeImage />

        <Button type='primary' title='Conectar' onPress={onOpen} />
      </styles.SafeContainer>

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        withHandle={true}
      >
        <styles.ModalContent>
          <Stack direction='column'>
            <styles.HeaderModal>Dispositivos encontrados</styles.HeaderModal>
            <TouchableOpacity onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'Waiter' }],
            })}>
              <styles.TextModal>
                Garrafa 13d4
              </styles.TextModal>
            </TouchableOpacity>
          </Stack>

          {!controlButton && < Button type='primary' title='Parar' onPress={stopSearch} />}

        </styles.ModalContent>
      </Modalize>
    </>
  )
}