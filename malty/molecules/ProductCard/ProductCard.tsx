import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Card, CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { Pill, PillSize } from '@carlsberggroup/malty.atoms.pill';
import { Select, SelectType } from '@carlsberggroup/malty.atoms.select';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { AlertInline, AlertInlineColor, AlertInlineSize } from '@carlsberggroup/malty.molecules.alert-inline';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledDiscountContainer,
  StyledDiscountPill,
  StyledFavorite,
  StyledFooter,
  StyledImage,
  StyledLoyalty,
  StyledMargin,
  StyledPillWrapper,
  StyledPrice,
  StyledPriceContainer,
  StyledRow,
  StyledSelect,
  StyledStock,
  StyledStockInformation
} from './ProductCard.styled';
import { ProductCardProps } from './ProductCard.types';

export function ProductCard({
  dataTestId,
  onCardClick,
  orientation = CardOrientation.Portrait,
  productCardStyle = CardStyle.Plain,
  imageSrc,
  imageHeight,
  imageWidth,
  title,
  price,
  discountPrice,
  onInputQuantityChange = () => null,
  onSelectQuantityChange = () => null,
  onFavoriteClick = () => null,
  action = { icon: IconName.Cart, onClick: () => null, variant: ButtonStyle.Primary },
  sku,
  loyalty,
  stock,
  alertMessage,
  maxQuantity,
  alertColor = AlertInlineColor.NotificationLight,
  quantitySelectOptions,
  hideQuantityInput,
  discountPill,
  promoPill,
  cartPill
}: ProductCardProps) {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [height] = useState(imageHeight || (orientation === CardOrientation.Portrait ? '180px' : undefined));
  const [width] = useState(imageWidth);
  const [quantityValue, setQuantityValue] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleActionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation();
    action?.onClick();
  };
  const handleQuantityChange = (value: string) => {
    onInputQuantityChange(value);
    setQuantityValue(value);
  };
  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    onFavoriteClick(favorite);
  };

  // useEffect(() => {
  //   // xsmal size difined in layout tokens
  //   if (window.innerWidth <= 428) {
  //     setIsMobile(true);
  //   }
  // }, [window.innerWidth]);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  return (
    <Card
      dataTestId={dataTestId}
      cardStyle={productCardStyle}
      orientation={orientation}
      onClick={onCardClick}
      cardHero={
        <StyledImage theme={theme} orientation={orientation} src={imageSrc} alt="" height={height} width={width}>
          <>
            <StyledPillWrapper theme={theme}>
              <StyledDiscountContainer theme={theme}>
                {discountPill ? (
                  <StyledDiscountPill theme={theme}>
                    <Pill
                      text={discountPill?.text}
                      color={discountPill?.color}
                      size={isMobile ? PillSize.ExtraSmall : PillSize.Small}
                      icon={discountPill?.icon}
                    />
                  </StyledDiscountPill>
                ) : null}

                {promoPill ? (
                  <Pill
                    text={promoPill?.text}
                    color={promoPill?.color}
                    size={isMobile ? PillSize.ExtraSmall : PillSize.Small}
                    icon={promoPill?.icon}
                  />
                ) : null}
              </StyledDiscountContainer>
              {cartPill ? (
                <Pill
                  text={cartPill?.text}
                  color={cartPill?.color}
                  size={isMobile ? PillSize.ExtraSmall : PillSize.Small}
                  icon={cartPill?.icon}
                />
              ) : null}
            </StyledPillWrapper>
            {/* </StyledRow> */}
            <StyledFavorite
              theme={theme}
              onClick={handleFavoriteClick}
              name={favorite ? IconName.HeartFilled : IconName.Heart}
              color={IconColor.DigitalBlack}
              size={IconSize.MediumSmall}
            />
          </>
        </StyledImage>
      }
      cardBody={
        <>
          {sku && (
            <StyledMargin theme={theme}>
              <Text dataQaId={`${dataTestId}-sku`} textStyle={TextStyle.SmallDefault} color={TextColor.Support80}>
                {sku}
              </Text>
            </StyledMargin>
          )}
          <StyledMargin theme={theme}>
            <Text dataQaId={`${dataTestId}-title`} textStyle={TextStyle.MediumSmallBold}>
              {title}
            </Text>
          </StyledMargin>
          {quantitySelectOptions && (
            <StyledSelect theme={theme}>
              <Select
                placeholder={quantitySelectOptions[0].name}
                type={SelectType.Default}
                options={quantitySelectOptions}
                onValueChange={onSelectQuantityChange}
              />
            </StyledSelect>
          )}
          <StyledRow theme={theme}>
            {price || discountPrice ? (
              <StyledPriceContainer theme={theme}>
                {price ? (
                  <StyledPrice
                    theme={theme}
                    discountPrice={!!discountPrice?.label}
                    dataQaId={`${dataTestId}-price`}
                    color={price?.color}
                    textStyle={price?.style}
                  >
                    {price.label}
                  </StyledPrice>
                ) : null}
                {discountPrice && (
                  <Text
                    dataQaId={`${dataTestId}-discount-price`}
                    color={discountPrice?.color}
                    textStyle={discountPrice?.style}
                  >
                    {discountPrice.label}
                  </Text>
                )}
              </StyledPriceContainer>
            ) : null}

            {loyalty ? (
              <StyledLoyalty theme={theme}>
                <Text textStyle={TextStyle.SmallBold}>{loyalty.label}</Text>
                {/* <Icon  /> */}
              </StyledLoyalty>
            ) : null}
          </StyledRow>
          {stock ? (
            <StyledStock theme={theme}>
              <StyledStockInformation theme={theme} infoColor={stock.stockColor} />
              <Text textStyle={TextStyle.SmallBold} color={stock.labelColor}>
                {stock.label}
              </Text>
            </StyledStock>
          ) : null}

          <StyledFooter theme={theme}>
            {!hideQuantityInput && (
              <Input
                onClick={(e) => e.stopPropagation()}
                type={InputType.Quantity}
                onValueChange={(value) => handleQuantityChange(value)}
                value={quantityValue}
                max={maxQuantity}
                size={InputSize.Medium}
              />
            )}
            {action ? (
              <Button
                text={action?.icon ? undefined : action?.label}
                fullWidth={hideQuantityInput}
                dataTestId={`${dataTestId}-button`}
                size={ButtonSize.Medium}
                style={action.variant}
                onClick={(e) => handleActionClick(e)}
                color={action?.color}
                icon={action?.icon}
              />
            ) : null}
          </StyledFooter>
          {alertMessage ? (
            <AlertInline color={alertColor} size={AlertInlineSize.Compact} message={alertMessage} />
          ) : null}
        </>
      }
    />
  );
}
