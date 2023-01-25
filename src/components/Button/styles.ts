import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";
import theme from "../../styles/theme";

interface StyledProps {
  typeButton: string | undefined;
}

export const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  max-height: ${RFValue(56)}px;
`

export const ButtonStyled = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;  
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(2)}px;
`
export const BorderStyled = styled(View) <StyledProps>`
  flex: 1;
  width: 100%;
  align-items: center;  
  justify-content: center;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ typeButton }) => typeButton === 'secondary' ? '#fffafa' : 'transparent'};
`
export const TextStyled = styled(Text) <StyledProps>`
  font-size: ${RFValue(16)}px;
  text-align: center;
  font-weight: 600;
  color: ${theme.colors.dark};
  color: ${({ typeButton }) => typeButton === 'secondary' ? theme.colors.primary : theme.colors.dark};
`