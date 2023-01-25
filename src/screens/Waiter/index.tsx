import React from 'react';
import { Image, View } from 'react-native';
import {
  SafeContainer,
  Stack,
  Subtitle,
  Text,
  Title
} from './styles';

import { Clock } from '../../assets'
import { Button } from '../../components/Button';

export function Waiter() {
  return (
    <SafeContainer>
      <Stack direction='column'>
        <Title>Status Garrafa</Title>
        <Subtitle>Garrafa 13d4</Subtitle>
      </Stack>

      <Image source={Clock} />

      <Stack direction='column' >
        <Stack justify='space-between' >
          <View>
            <Text>Temperatura</Text>
          </View>
          <Text>24°</Text>
        </Stack>

        <Stack direction='column' >
          <Text>Sugestão</Text>
          <Text>Servir outra bebida gelada!</Text>
        </Stack>
      </Stack>

      <Button type='secondary' title='Desconectar' />
    </SafeContainer>
  )
}
