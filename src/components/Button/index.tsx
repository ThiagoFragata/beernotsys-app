import React from "react";
import { TouchableProps } from "react-native-svg";
import { ButtonStyled, BorderStyled, TextStyled, ButtonContainer } from "./styles";

interface ButtonProps extends TouchableProps {
  type?: 'primary' | 'secondary';
  title: string;
}

export function Button({ type = 'primary', title, ...res }: ButtonProps) {
  return (
    <ButtonContainer {...res}>
      <ButtonStyled
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#FFC727', '#F4B000']}
        locations={[0, 1]}>
        <BorderStyled typeButton={type}>
          <TextStyled typeButton={type}>
            {title}
          </TextStyled>
        </BorderStyled>
      </ButtonStyled>
    </ButtonContainer >
  )
}