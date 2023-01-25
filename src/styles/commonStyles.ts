import { View } from "react-native";
import styled from "styled-components";

interface StackProps {
  align?: 'flex-start' | 'flex-end' | 'center';
  justify?: 'flex-start' | 'flex-end' | 'space-between' | 'center';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  padding?: string | number;
}

export const Stack = styled(View) <StackProps>`
  width: 100%;
  align-items: ${({ align }) => align ? align : 'flex-start'};
  justify-content: ${({ justify }) => justify ? justify : 'flex-start'};
  flex-direction: ${({ direction }) => direction ? direction : 'row'};

  padding: ${({ padding }) => padding ? padding : '0'};
`
