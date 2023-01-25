import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { Clock } from '../../assets'
import { Button } from '../../components/Button';
import { Stack } from '../../styles/commonStyles';

import * as styles from './styles';

export function Waiter() {
  const navigation = useNavigation()

  return (
    <styles.SafeContainer>
      <Stack direction='column'>
        <styles.Title>Status Garrafa</styles.Title>
        <styles.Subtitle>Garrafa 13d4</styles.Subtitle>
      </Stack>

      <Image source={Clock} />

      <Stack direction='column' >
        <Stack justify='space-between' >
          <View>
            <styles.Text>Temperatura</styles.Text>
          </View>
          <styles.Temperature>24°</styles.Temperature>
        </Stack>

        <Stack direction='column' >
          <styles.LabelText>Sugestão</styles.LabelText>
          <styles.Text>Servir outra bebida gelada!</styles.Text>
        </Stack>
      </Stack>

      <Button
        type='secondary'
        title='Desconectar'
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })} />
    </styles.SafeContainer>
  )
}
