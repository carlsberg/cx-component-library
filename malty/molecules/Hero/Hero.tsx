import { Button, ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Headline, HeadlineAlign, HeadlineColor, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { Device, useMatchMedia } from '@carlsberggroup/malty.utils.hooks';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledActionsWrapper,
  StyledContentWrapper,
  StyledHero,
  StyledScroll,
  StyledText,
  StyledTitleWrapper
} from './Hero.styled';
import { ActionButtonProps, HeroProps } from './Hero.types';

export const Hero = ({
  title,
  description,
  imageSrc,
  actions,
  scrollText,
  dataTestId = 'hero-component',
  height
}: HeroProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const isDesktop = useMatchMedia(Device.Desktop);
  const isMobile = useMatchMedia(Device.Mobile);

  return (
    <StyledHero imageSrc={imageSrc} data-testid={dataTestId} theme={theme} height={height}>
      <StyledContentWrapper theme={theme} withScroll={!!scrollText}>
        <StyledTitleWrapper theme={theme}>
          <Headline
            headlineStyle={isDesktop ? HeadlineStyle.Display : HeadlineStyle.Huge}
            color={HeadlineColor.White}
            align={HeadlineAlign.Center}
          >
            {title}
          </Headline>
        </StyledTitleWrapper>
        <Headline
          headlineStyle={isDesktop ? HeadlineStyle.MediumLarge : HeadlineStyle.Medium}
          color={HeadlineColor.White}
          align={HeadlineAlign.Center}
        >
          {description}
        </Headline>
        {actions && Array.isArray(actions) ? (
          <StyledActionsWrapper theme={theme}>
            {actions.slice(0, 2).map((action: ActionButtonProps, index) => (
              <Button {...action} key={action.key || index} size={ButtonSize.Large} fullWidth={isMobile} />
            ))}
          </StyledActionsWrapper>
        ) : (
          actions
        )}
      </StyledContentWrapper>
      {scrollText ? (
        <StyledScroll theme={theme}>
          <StyledText textStyle={TextStyle.MediumBold} color={TextColor.White} theme={theme}>
            {scrollText}
          </StyledText>
          <Icon name={IconName.ArrowSmallDown} color={IconColor.White} size={IconSize.Medium} />
        </StyledScroll>
      ) : null}
    </StyledHero>
  );
};
