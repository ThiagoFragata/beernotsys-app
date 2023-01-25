import React from 'react';
import { HomeImage } from '../../assets';
import { Button } from '../../components/Button';

import { SafeContainer, Strong, Title } from './styles';

export function Home() {
  return (
    <SafeContainer>
      <Title>
        Por favor <Strong>conecte-se</Strong> com a garrafa!
      </Title>

      <HomeImage />

      <Button type='primary' title='Conectar' />
    </SafeContainer>)
}