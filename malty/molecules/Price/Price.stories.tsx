import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Price as PriceComponent } from './Price';
import { PriceProps } from './Price.types';

export default {
  title: 'Information/Price',
  component: PriceComponent,
  parameters: {
    importObject: 'Price',
    importPath: '@carlsberggroup/malty.molecules.price'
  },
  argTypes: {
    base: {
      control: 'text',
      description: 'Default price'
    },
    discount: {
      control: 'text',
      description: 'Discount'
    },
    credit: {
      control: 'text',
      description: 'Credit'
    }
  }
} as Meta;

const Template: Story<PriceProps> = (args) => {
  return <PriceComponent {...args} />;
};

export const Price = Template.bind({});

Price.args = {
  base: '₭ 99,800.00',
  discount: '₭ 86,000.00',
  credit: ''
};
