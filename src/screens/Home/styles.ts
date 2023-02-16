import styled from "styled-components";
import theme from '../../styles/theme';

import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-gesture-handler";

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
export const ModalContent = styled(ScrollView)`
  /* justify-content: space-between; */

  height: ${RFValue(400)}px;

  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(16)}px;
  padding-bottom: ${RFValue(16)}px;
  padding-top: ${RFValue(16)}px;
`;

export const HeaderModal = styled(Text)`
  width: 100%;
  text-transform: uppercase;
  text-align: center;

  margin: ${RFValue(8)}px ${RFValue(8)}px ${RFValue(16)}px;

  color: ${theme.colors.subtitle};
`

export const TextModal = styled(Text)`
  padding: ${RFValue(16)}px ${RFValue(0)}px;;
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.title};
`