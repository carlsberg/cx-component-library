import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Headline, HeadlineColor, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Pill, PillColor, PillProps, PillSize } from '@carlsberggroup/malty.atoms.pill';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledButtonContainer,
  StyledButtonsWrapper,
  StyledHeroContainer,
  StyledHeroContent,
  StyledHeroImage
} from './Hero.styled';
import { HeroLayout, HeroProps } from './Hero.types';

export function Hero({
  imageSrc,
  label,
  title,
  description,
  negative = false,
  reverse = false,
  layout = HeroLayout.Full,
  actions,
  dataTestId = 'Hero-element'
}: HeroProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  const labelProps: PillProps = {
    text: label && typeof label === 'string' ? label : '',
    color: negative ? PillColor.Archive : PillColor.Primary,
    size: PillSize.Medium,
    icon: undefined
  };
  if (label && typeof label === 'object') {
    type labelKeys = keyof typeof label;
    Object.keys(label).forEach((key) => {
      labelProps[key as labelKeys] = label[key as labelKeys];
    });
  }

  return (
    <StyledHeroContainer negative={negative} reverse={reverse} layout={layout} theme={theme} data-testid={dataTestId}>
      <StyledHeroContent layout={layout}>
        {label ? (
          <Pill text={labelProps.text} color={labelProps.color} size={labelProps.size} icon={labelProps.icon} />
        ) : null}
        {title ? (
          <Headline
            headlineStyle={HeadlineStyle.Hero}
            color={negative ? HeadlineColor.White : HeadlineColor.DigitalBlack}
          >
            {title}
          </Headline>
        ) : null}
        {description ? (
          <Text textStyle={TextStyle.MediumBold} color={negative ? TextColor.White : TextColor.DigitalBlack}>
            {description}
          </Text>
        ) : null}
        {actions && Array.isArray(actions) ? (
          <StyledButtonsWrapper theme={theme}>
            {actions.map((btnInstance, index: number) => (
              <StyledButtonContainer theme={theme} key={btnInstance.key || `button${index}`}>
                <Button
                  fullWidth
                  size={ButtonSize.Large}
                  style={ButtonStyle[btnInstance.variant as ButtonStyle]}
                  negative={negative}
                  onClick={btnInstance.onClick}
                >
                  {btnInstance.label}
                </Button>
              </StyledButtonContainer>
            ))}
          </StyledButtonsWrapper>
        ) : (
          actions
        )}
      </StyledHeroContent>
      <StyledHeroImage layout={layout} imageSrc={imageSrc} />
    </StyledHeroContainer>
  );
}
