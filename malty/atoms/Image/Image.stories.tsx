import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Image, ImageProps } from '.';
import { Position } from './Image.types';

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    cover: { control: 'boolean' },
    url: { control: 'text' },
    border: {
      options: Object.values(Position),
      description: 'Position options are listed below',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    gradient: {
      options: ['', ...Object.values(Position)],
      description:
        'Position options are listed below. Gradient will not work if overlay is defined or value is greather than 0',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    overlay: {
      description: 'This accepts number as opacity percentage.',
      control: 'number',
      defaultValue: ''
    },
    alt: { control: 'text' }
  }
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Main = Template.bind({});
Main.args = {
  url: 'https://produits.bienmanger.com/5819-0w470h470_Carlsberg_Elephant_Danish_Beer.jpg',
  border: Position.Bottom,
  alt: 'This is a sample image'
};
