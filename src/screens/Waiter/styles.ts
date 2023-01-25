import styled from 'styled-components';
import theme from '../../styles/theme';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text as RNText, View, ViewProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(16)}px;
`

export const Title = styled(RNText)`
  color: ${theme.colors.title};
  font-weight: 600;
  font-size: ${RFValue(32)}px;
`
export const Subtitle = styled(RNText)`
  color: ${theme.colors.subtitle};
  font-weight: 400;
  font-size: ${RFValue(16)}px;
`
export const Text = styled(RNText)`
  color: ${theme.colors.title};
  font-weight: 400;
  font-size: ${RFValue(16)}px;
`

export const Temperature = styled(RNText)`
  color: ${theme.colors.subtitle};
  font-weight: 500;
  font-size: ${RFValue(32)}px;
`
export const LabelText = styled(Text)`
  text-transform: uppercase;
  color: ${theme.colors.subtitle};
  font-weight: 400;
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(8)}px;
`