import { TextColor } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledStockStatus = styled.div<{
  withMarginBottom?: boolean;
}>`
  display: flex;
  gap: ${({ theme }) => theme.sizes['4xs'].value};
  align-items: center;
  margin-bottom: ${({ theme, withMarginBottom }) => withMarginBottom && theme.sizes['2xs'].value};
`;

export const StyledStockStatusInfo = styled.div<{
  infoColor?: TextColor;
}>`
  width: ${({ theme }) => theme.sizes['3xs'].value};
  height: ${({ theme }) => theme.sizes['3xs'].value};
  background-color: ${({ theme, infoColor }) => infoColor && theme.colors['text-colours'][infoColor].value};
  border-radius: 50%;
`;
