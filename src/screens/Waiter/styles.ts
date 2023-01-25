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
  color: ${theme.colors.subtitle};
  font-weight: 400;
  font-size: ${RFValue(16)}px;
`
export const Strong = styled(Text)`
  color: ${theme.colors.primary};
`

interface StackProps {
  align?: 'flex-start' | 'flex-end' | 'center';
  justify?: 'flex-start' | 'flex-end' | 'space-between' | 'center';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const Stack = styled(View) <StackProps>`
  width: 100%;
  align-items: ${({ align }) => align ? align : 'flex-start'};
  justify-content: ${({ justify }) => justify ? justify : 'flex-start'};
  flex-direction: ${({ direction }) => direction ? direction : 'row'};;
`
