import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Label as LabelComponent, LabelProps } from '.';

export default {
  title: 'Forms/Label',
  component: LabelComponent,
  parameters: {
    importObject: 'Label',
    importPath: '@carlsberggroup/malty.atoms.label'
  },
  argTypes: {
    label: {
      description: 'Text for the label',
      control: 'text'
    },
    required: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },

    htmlFor: {
      control: 'text',
      description: 'ID of the target input component'
    }
  }
} as Meta;

const Template: Story<LabelProps> = ({ label, required, disabled, htmlFor, dataTestId }) => (
  <LabelComponent label={label} required={required} disabled={disabled} htmlFor={htmlFor} dataTestId={dataTestId} />
);

export const Label = Template.bind({});

Label.args = {
  label: 'Wrapped checkbox label',
  required: false,
  disabled: false,
  htmlFor: 'string',
  dataTestId: ''
};
