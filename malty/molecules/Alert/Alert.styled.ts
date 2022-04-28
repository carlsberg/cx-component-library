import styled from 'styled-components';
import { AlertColor, AlertSize } from './Alert.types';

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const StyledAlertInLineWrapper = styled(StyledWrapper)`
  margin-top: ${({ theme }) => theme.sizes['2xs'].value}; ;
`;

export const StyledContainer = styled.div<{
  color?: AlertColor;
  size?: AlertSize;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  row-gap: ${({ theme }) => theme.sizes['4xs'].value};
  word-break: break-all;

  svg {
    flex-shrink: 0;
  }
`;

export const StyledAlertInLine = styled(StyledContainer)<{
  color: AlertColor;
  size?: AlertSize;
  hasTitle?: boolean;
  hasActions?: boolean;
  hasIcon?: boolean;
}>`
  background-color: ${({ color, theme }) => theme.colors.colours.system[color].value};

  padding: ${({ theme, hasTitle, hasActions, hasIcon, size }) => {
    if (hasTitle || hasActions) {
      return theme.sizes.xs.value;
    }
    if (!hasTitle && !hasActions && !hasIcon && size === AlertSize.Small) {
      return `${theme.sizes['4xs'].value} ${theme.sizes['2xs'].value}`;
    }

    return theme.sizes['2xs'].value;
  }};
`;

export const StyledAlertInLineWithActions = styled(StyledAlertInLine)`
  height: auto;
`;

export const StyledTextContainer = styled.div`
  min-width: 30px;
  overflow: hidden;
`;

export const StyledActionContainer = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.sizes['2xs'].value};
  justify-content: flex-end;
  box-sizing: border-box;
  height: 100%;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledActionItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  button {
    text-decoration: 'underline';
  }
`;

export const StyledButton = styled.button`
  font-family: inherit;
  display: flex;
  cursor: pointer;
  text-align: left;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  outline: none;
  text-decoration: underline;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
`;
