import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Bottle } from '../../assets'
import api from '../../services/axios';
import { Stack } from '../../styles/commonStyles';

import * as styles from './styles';

const INTERVAL_TIME = 5000;

interface TemperatureProps {
  Temperature: string;
  Time: string;
  id: string;
}

export function Waiter() {
  const [loading, setLoading] = useState(true);
  const [suggestion, setSuggestion] = useState("");
  const [temperature, setTemperature] = useState<TemperatureProps>({
    Temperature: "?",
    Time: "?",
    id: "?",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      api
        .get("/Temperatura/Receber")
        .then((response) => {
          setLoading(true);
          setTemperature(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const temp = parseFloat(temperature.Temperature)

    if (temp < 10) {
      setSuggestion("Cerveja estupidamente gelada, famosa canela de pedreiro, estalando!")
    } else if (temp > 20 && temp < 30) {
      setSuggestion("Cerveja está esquentando, acho que está na hora de oferecer outra cerveja!")
    } else {
      setSuggestion("Cerveja quente ou possivelmente vazia, ta fazendo chá?")
    }
  }, [temperature.Temperature])

  return (
    <styles.SafeContainer>
      {!loading ?
        <KeyboardAwareScrollView>
          <Stack direction='column'>
            <styles.Title>Status Garrafa</styles.Title>
            <styles.Subtitle>{temperature.id}</styles.Subtitle>
          </Stack>

          <Image source={Bottle} />

          <Stack direction='column'>
            <Stack align='center' justify='space-between' >
              <View>
                <styles.Text>Temperatura</styles.Text>
              </View>
              <styles.Temperature>{temperature.Temperature}°C</styles.Temperature>
            </Stack>

            <Stack direction='column' >
              <styles.LabelText>Sugestão</styles.LabelText>
              <styles.Text>{suggestion}</styles.Text>
            </Stack>
          </Stack>
        </KeyboardAwareScrollView> :
        <ActivityIndicator size='large' />
      }
    </styles.SafeContainer >
  )
}
