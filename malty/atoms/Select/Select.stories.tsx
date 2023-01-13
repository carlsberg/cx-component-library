import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import {
  Select as SelectComponent,
  SelectOptionsType,
  SelectProps,
  SelectSize,
  SelectType,
} from '.';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
`;
export default {
  title: 'Forms/Select',
  component: SelectComponent,
  parameters: {
    importObject: 'Select',
    importPath: '@carlsberggroup/malty.atoms.select',
  },
  argTypes: {
    label: {
      description: 'Label for the Select component',
      control: 'text',
    },
    selectAllLabel: {
      description: 'Label for the Select all action',
      control: 'text',
    },
    clearAllLabel: {
      description: 'Label for the Clear all action',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text to go inside the Select field, when empty.',
      control: 'text',
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text',
    },
    hint: {
      description: 'helper message to be displayed',
      control: 'text',
    },
    size: {
      description: 'Select component size.',
      options: Object.values(SelectSize),
      control: {
        type: 'radio',
      },
    },
    type: {
      description: 'Type of select component',
      options: Object.values(SelectType),
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'Select state, disabled.',
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
      description: 'Select state, readOnly.',
    },
    defaultValue: {
      description: 'Initial selected option',
    },
    options: {
      description: 'Select options.',
    },
    multiple: {
      description: 'Select state, when active allows for multi selection',
      control: 'boolean',
    },
    search: {
      description: 'Select state, when active allows for multi selection',
      control: 'boolean',
    },
    selectionText: {
      description: 'Text to display when multiple options are selected. Ex. 3 "options selected" ',
      control: 'text',
    },
    onValueChange: {
      description: 'Function to be executed when an option is selected or unselected',
    },
    dataTestId: {
      control: 'text',
      description: 'select data-testid',
    },
  },
} as Meta;

const testOptions: SelectOptionsType[] = [
  {
    value: 'value 1',
    name: 'name 1',
  },
  {
    value: 'value 2',
    name: 'name 2',
  },
  {
    value: 'value 3',
    name: 'name 3',
  },
  {
    value: 'value 4',
    name: 'name 4',
  },
  {
    value: 'value 5',
    name: 'name 5',
  },
];

const Template: Story<SelectProps> = (args) => (
  <StyledContainer>
    <SelectComponent {...args} />
  </StyledContainer>
);

export const Select = Template.bind({});

const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const multiple = params.get('multiple');
const error = params.get('error');
const search = params.get('search');

switch (type) {
  case 'inline':
    Select.args = {
      options: testOptions,
      size: SelectSize.Medium,
      label: 'Label',
      type: SelectType.Inline,
      hint: 'hint text',
      disabled: false,
      placeholder: 'Placeholder',
      multiple: !!multiple,
      defaultValue: [testOptions[0]],
      selectionText: 'options selected',
      search: !!search,
      readOnly: false,
    };
    break;

  default:
    Select.args = {
      options: testOptions,
      size: SelectSize.Medium,
      label: 'Label',
      type: SelectType.Default,
      hint: 'hint text',
      disabled: false,
      placeholder: 'Placeholder',
      multiple: !!multiple,
      defaultValue: [testOptions[0]],
      selectionText: 'options selected',
      error: error ? 'error text' : '',
      search: !!search,
      readOnly: false,
    };
    break;
}
