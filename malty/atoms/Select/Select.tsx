import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Input, InputSize, InputType } from '@carlsberggroup/malty.atoms.input';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { createRef, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import {
  StyledActionButton,
  StyledActionButtonWrapper,
  StyledActionsWrapper,
  StyledButton,
  StyledButtonContainer,
  StyledCheck,
  StyledChevronDown,
  StyledError,
  StyledHint,
  StyledLabel,
  StyledOption,
  StyledOptionsWrapper,
  StyledSelectedOptionsWrapper,
  StyledWrapper
} from './Select.styled';
import { SelectOptionsType, SelectProps, SelectSize, SelectType } from './Select.types';

export const Select = ({
  defaultValue = [],
  onValueChange,
  options,
  placeholder,
  label,
  type,
  error,
  hint,
  disabled = false,
  size = SelectSize.Medium,
  children,
  multiple = false,
  selectionText = 'selected',
  value,
  search = false
}: SelectProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const id = useMemo(() => uuid(), []);
  const [numSize, setNumSize] = useState(theme.sizes.xl.value);
  const [showOptionList, setShowOptionList] = useState(false);
  const [selectedValueState, setSelectedValueState] = useState(value || defaultValue);
  const [queryText, setQueryText] = useState('');
  const [selectOptions, setSelectOptions] = useState(options);

  const ref = createRef<HTMLDivElement>();
  const toggleOptionList = () => {
    setShowOptionList(!showOptionList);
  };

  // eslint-disable-next-line consistent-return
  const handleOptionSelected = (option: SelectOptionsType) => {
    const auxSelected = JSON.parse(JSON.stringify(selectedValueState));
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    if (!multiple) {
      setShowOptionList(false);
    }
    if (checkIfSelected(option)) {
      if (multiple) {
        removeSelectedOption(option);
      } else {
        update([option]);
      }
    } else {
      if (!multiple) {
        return update([option]);
      }
      auxSelected.push(option);
      update(auxSelected);
      // setSelectedValueState((prev) => [...prev, option]);
    }
  };

  const checkIfSelected = (option: SelectOptionsType) =>
    !!selectedValueState.find((el: SelectOptionsType) => el.value === option.value);

  const removeSelectedOption = (option: SelectOptionsType) => {
    const index = selectedValueState?.findIndex((el) => el.value === option.value);
    const auxSelected = JSON.parse(JSON.stringify(selectedValueState));
    auxSelected?.splice(index, 1);
    update(auxSelected);
  };

  const update = (auxSelected: SelectOptionsType[]) => {
    setSelectedValueState(auxSelected);
    onValueChange(auxSelected);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains((event.target as Node) || null)) {
      setShowOptionList(false);
    }
  };

  useEffect(() => {
    switch (size) {
      case SelectSize.Large: {
        setNumSize(theme.sizes['2xl'].value);
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value);
        break;
      }
    }
  }, [size, theme]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  useEffect(() => {
    if (defaultValue.length > 0 && (value === undefined || value?.length === 0)) setSelectedValueState(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    if (value && value?.length > 0) setSelectedValueState(value);
  }, [value]);

  const displaySelectedValues = () => {
    if (selectedValueState.length > 0) {
      if (selectedValueState.length > 2) {
        return `${selectedValueState.length} ${selectionText}`;
      }
      return selectedValueState?.map((selectedValue: SelectOptionsType, index: number) =>
        index !== 0 ? `, ${selectedValue.name}` : selectedValue.name
      );
    }
    return type === SelectType.Inline ? label : placeholder;
  };

  const handleSearch = (query: string) => {
    setQueryText(query);
    if (query.length >= 3) {
      const filterOptions = options?.filter((el) => el.name.includes(query));

      setSelectOptions(filterOptions);
    } else {
      setSelectOptions(options);
    }
  };

  const handleSelectAll = () => {
    if (selectOptions && selectOptions.length > 0) update(selectOptions);
  };

  const handleClearAll = () => {
    update([]);
  };
  const renderDefaultDropdown = () => (
    <TypographyProvider>
      <StyledOptionsWrapper isOpen={showOptionList} selectStyle={type} theme={theme} height={numSize}>
        <StyledActionsWrapper theme={theme}>
          {search && (
            <Input
              className="search-input"
              size={size === SelectSize.Medium ? InputSize.Medium : InputSize.Large}
              onValueChange={handleSearch}
              type={InputType.Search}
              value={queryText}
              icon={IconName.Search}
            />
          )}
          {multiple && (
            <StyledActionButtonWrapper height={numSize} theme={theme}>
              <StyledActionButton onClick={handleSelectAll} theme={theme}>
                Sellect all
              </StyledActionButton>
              {selectedValueState.length > 0 && (
                <StyledActionButton onClick={handleClearAll} theme={theme}>
                  Clear all
                </StyledActionButton>
              )}
            </StyledActionButtonWrapper>
          )}
        </StyledActionsWrapper>
        {children}
        {!children &&
          selectOptions?.map((option: SelectOptionsType, index: number) => (
            <StyledOption
              theme={theme}
              key={option.value}
              value={option.value}
              onClick={() => handleOptionSelected(option)}
              height={numSize}
              selected={!!selectedValueState.find((el: SelectOptionsType) => el.value === option.value)}
              selectStyle={type}
              disabled={disabled}
              data-testid={`select-option-${index}`}
            >
              {multiple && (
                <Checkbox
                  labelText={option.name as string}
                  value={option.value}
                  onValueChange={() => null}
                  checked={!!selectedValueState.find((el: SelectOptionsType) => el.value === option.value)}
                />
              )}
              {!multiple && (
                <>
                  <StyledWrapper theme={theme}>
                    {option.icon}
                    {option.name}
                  </StyledWrapper>
                  {selectedValueState.find((el: SelectOptionsType) => el.value === option.value) && (
                    <StyledCheck selectStyle={type} color={IconColor.Primary} size={IconSize.Small} />
                  )}
                </>
              )}
            </StyledOption>
          ))}
      </StyledOptionsWrapper>
    </TypographyProvider>
  );
  return (
    <TypographyProvider>
      {label && type !== SelectType.Inline && (
        <StyledLabel disabled={disabled} htmlFor={id} theme={theme}>
          {label}
        </StyledLabel>
      )}
      <StyledButtonContainer ref={ref} selectStyle={type} theme={theme}>
        <StyledButton
          name={id}
          id={id}
          theme={theme}
          isActive={selectedValueState?.length > 0 || type === SelectType.Inline}
          selectStyle={type}
          height={numSize}
          onClick={() => toggleOptionList()}
          disabled={disabled}
          isError={!!error && type !== SelectType.Inline}
          open={showOptionList}
        >
          <StyledSelectedOptionsWrapper theme={theme} data-testid="selected-value">
            {displaySelectedValues()}
          </StyledSelectedOptionsWrapper>
          <StyledChevronDown
            theme={theme}
            selectStyle={type}
            disabled={disabled}
            open={showOptionList}
            color={IconColor.Primary}
            size={IconSize.Medium}
          />
        </StyledButton>

        {renderDefaultDropdown()}
      </StyledButtonContainer>

      {error && type !== SelectType.Inline && <StyledError theme={theme}>{error}</StyledError>}
      {hint && !error && type !== SelectType.Inline && (
        <StyledHint disabled={disabled} theme={theme}>
          {hint}
        </StyledHint>
      )}
    </TypographyProvider>
  );
};
