import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextAlign, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledIconStarContainer,
  StyledInput,
  StyledLabel,
  StyledMainContainer,
  StyledRatingContainer,
  StyledStarContainer,
  StyledTotalReviewContainer
} from './Rating.styled';
import { RatingProps } from './Rating.types';

export const Rating = ({
  name,
  label,
  value,
  readOnly = false,
  disabled = false,
  totalReview,
  onStarClick,
  dataTestId
}: RatingProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [ratingValue, setRatingValue] = useState(value);
  const [hoverRating, setHoverRating] = useState(0);

  const onChange = (inputValue: number) => {
    if (readOnly || disabled) {
      return;
    }

    setRatingValue(inputValue);
  };

  const handleStarClick = (
    index: number,
    val: number,
    named: string,
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
    e.stopPropagation();

    if (readOnly || disabled) {
      return;
    }

    onStarClick?.(index, val, named, e);
  };

  const handleStarHover = (index: number, e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    e.stopPropagation();

    if (readOnly || disabled) {
      return;
    }

    setHoverRating(index);
  };

  const handleStarHoverOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (readOnly || disabled) {
      return;
    }

    setHoverRating(0);
  };

  const renderStars = (): JSX.Element[] | null => {
    // populate stars
    const starNodes = [];

    for (let i = 5; i > 0; i--) {
      const id = `${name}_${i}`;

      let isDisplayFilledStar = false;
      if (hoverRating >= i) {
        isDisplayFilledStar = true;
      } else if (!hoverRating && ratingValue >= i) {
        isDisplayFilledStar = true;
      }

      const starNodeInput = (
        <StyledInput
          key={`input_${id}`}
          type="radio"
          name={name}
          id={id}
          value={i}
          checked={ratingValue === i}
          onChange={() => onChange(i)}
        />
      );
      const starNodeLabel = (
        <StyledLabel
          theme={theme}
          key={`label_${id}`}
          readOnly
          disabled
          data-testid={ratingValue >= i ? 'rating-filled-star' : 'rating-empty-star'}
          htmlFor={id}
          onClick={(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => handleStarClick(i, ratingValue, name, e)}
          onMouseOver={(e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => handleStarHover(i, e)}
        >
          <StyledIconStarContainer key={`icon_${id}`}>
            {isDisplayFilledStar ? (
              <Icon
                name={IconName.StarFilled}
                color={disabled ? IconColor.DisableLight : IconColor.DigitalBlack}
                size={IconSize.Medium}
              />
            ) : (
              <Icon
                name={IconName.Star}
                color={disabled ? IconColor.DisableLight : IconColor.DigitalBlack}
                size={IconSize.Medium}
              />
            )}
          </StyledIconStarContainer>
        </StyledLabel>
      );

      starNodes.push(starNodeInput);
      starNodes.push(starNodeLabel);
    }

    return starNodes.length ? starNodes : null;
  };

  return (
    <TypographyProvider>
      <StyledRatingContainer data-testid={dataTestId} theme={theme}>
        <Text textStyle={TextStyle.MediumBold} color={TextColor.DigitalBlack} align={TextAlign.Center}>
          {label}
        </Text>
        <StyledMainContainer>
          <StyledStarContainer
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              handleStarHoverOut(e);
            }}
          >
            {renderStars()}
          </StyledStarContainer>
          {totalReview !== undefined && (
            <StyledTotalReviewContainer>
              <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.DigitalBlack}>
                {`(${totalReview})`}
              </Text>
            </StyledTotalReviewContainer>
          )}
        </StyledMainContainer>
      </StyledRatingContainer>
    </TypographyProvider>
  );
};
