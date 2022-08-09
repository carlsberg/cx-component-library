import styled, { css, keyframes } from 'styled-components';
import { AlertBannerType } from './AlertBanner.types';

const simpleFadeAnimation = keyframes`
     0% {
       visibility: visible;
       opacity: 1;
     } 
     100% {
       visibility: visible;
        opacity: 0;
     }
`;

export const Container = styled.div<{
  type?: AlertBannerType;
}>`
  background-color: ${({ type, theme }) => {
    if (type === AlertBannerType.Information) {
      return theme.colors.colours.system['notification-strong'].value;
    }
    if (type === AlertBannerType.Error) {
      return theme.colors.colours.system.fail.value;
    }
    if (type === AlertBannerType.Warning) {
      return theme.colors.colours.system['alert-strong'].value;
    }
    return theme.colors.colours.system['notification-strong'].value;
  }};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
`;

export const FadeWrapper = styled.div<{
  show: boolean;
  offsetY: number;
  triggerYPosition: number;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  opacity: 1;
  height: ${({ theme }) => theme.sizes.xl.value};
  transition: height 0.2s ease-in-out;
  & > div {
    width: 100%;
  }
  ${({ show, offsetY, triggerYPosition }) => {
    if (show && offsetY > triggerYPosition) {
      return css`
        transition: height 0.35s ease-in-out;
        animation: ${simpleFadeAnimation} 0.3s ease-in-out;
        visibility: hidden;
        height: 0px;
      `;
    }
  }}
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  min-height: ${({ theme }) => theme.sizes.xl.value};
  padding-left: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const MessageContainer = styled.div<{
  breakpoint: number;
}>`
  padding: 8px 0px;
  display: flex;
  align-items: center;
  @media (min-width: ${({ breakpoint }) => breakpoint}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    max-width: calc(100% - 300px);
  }
  svg {
    min-height: ${({ theme }) => theme.sizes.m.value};
    min-width: ${({ theme }) => theme.sizes.m.value};
    padding-right: ${({ theme }) => theme.sizes.xs.value};
  }
  div:not(:last-child) {
    padding-right: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const StyledMessage = styled.div<{ hideText: boolean }>`
  overflow: hidden;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ hideText }) => (hideText ? 1 : 3)};
  line-clamp: ${({ hideText }) => (hideText ? 1 : 3)};
  transition: all 0.2s ease-in-out;
`;

export const StyledAction = styled.div<{
  breakpoint: number;
}>`
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin-left: auto;
  button {
    text-decoration: underline;
  }
  @media (max-width: ${({ breakpoint }) => breakpoint}px) {
    margin-right: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const CloseButtonContainer = styled.div<{ triggerFadeAnimation: boolean }>`
  cursor: Pointer;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
  display: flex;
  align-items: center;
  ${({ triggerFadeAnimation }) =>
    triggerFadeAnimation &&
    css`
      animation: ${simpleFadeAnimation} 0.2s ease-in-out;
      transition-delay: visibility 0.2s;
      visibility: hidden;
    `}
`;
