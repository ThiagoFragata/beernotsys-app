import styled from "styled-components";
import theme from '../../styles/theme';

import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(16)}px;
`

export const Title = styled(Text)`
  color: ${theme.colors.dark};
  font-weight: 600;
  font-size: ${RFValue(32)}px;
  text-align: center;

  margin-top: ${RFValue(88)}px;
`
export const Strong = styled(Text)`
  color: ${theme.colors.primary};
`