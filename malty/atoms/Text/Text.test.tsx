import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { TextStyle } from '.';
import { Text } from './Text';

const text = 'this is a text block';
const testId = 'text';

describe('Text', () => {
  it('should render with the correct text', () => {
    render(<Text textStyle={TextStyle.MediumBold}>{text}</Text>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should have the assigned data test id', () => {
    render(
      <Text dataQaId={testId} textStyle={TextStyle.MediumBold}>
        {text}
      </Text>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('should render children element', () => {
    render(
      <Text dataQaId={testId} textStyle={TextStyle.MediumBold}>
        <span data-testid="span">{text}</span>
      </Text>
    );

    expect(screen.getByTestId('span')).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
