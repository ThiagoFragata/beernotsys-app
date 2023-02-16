import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { HomeImage } from '../../assets';
import { Button } from '../../components/Button';

import * as styles from './styles';

export function Home() {
  const navigation = useNavigation()

  return (
    <>
      <styles.SafeContainer>
        <styles.Title>
          Olá seja bem-vindo entre e <styles.Strong>veja suas garrafas!</styles.Strong>
        </styles.Title>

        <HomeImage />

        <Button type='primary' title='Entrar' onPress={() => navigation.navigate('Waiter')} />
      </styles.SafeContainer>
    </>
  )
}