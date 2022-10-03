import { Story } from '@storybook/react';
import React from 'react';
import { Rating as RatingComponent } from './Rating';
import { RatingProps } from './Rating.types';

export default {
  title: 'Forms/Rating',
  component: RatingComponent,
  parameters: {
    importObject: 'Rating',
    importPath: '@carlsberggroup/malty.atoms.rating'
  },
  argTypes: {
    name: {
      description: 'Name of the rating component',
      control: { type: 'text' }
    },
    label: {
      description: 'Label of the rating component',
      control: { type: 'text' }
    },
    value: {
      defaultValue: 0,
      description: 'Current value of the rating component',
      control: { type: 'number', min: 0, max: 5, step: 1 }
    },
    editing: {
      defaultValue: true,
      table: {
        category: 'State'
      },
      control: 'boolean',
      description: 'Enable or disable editing of the rating component. It is not a required property'
    },
    className: {
      defaultValue: 'rating1-class',
      description: 'Class name of the rating component. It is not a required property',
      control: { type: 'text' }
    },
    totalReview: {
      defaultValue: undefined,
      description: 'Total review of the rating component',
      control: { type: 'number', min: 0 }
    },
    onStarClick: {
      description: 'This is a function that will run on click. It is not a required property',
      table: {
        category: 'Events'
      }
    },
    onStarHover: {
      description: 'This is a function that will run on hover. It is not a required property',
      table: {
        category: 'Events'
      }
    },
    onStarHoverOut: {
      description: 'This is a function that will run on hover out. It is not a required property',
      table: {
        category: 'Events'
      }
    }
  }
};
const Template: Story<RatingProps> = (args) => <RatingComponent {...args} />;

export const Rating = Template.bind({});

Rating.args = {
  name: 'rating1',
  label: 'How was your order experience?',
  value: 0
};
