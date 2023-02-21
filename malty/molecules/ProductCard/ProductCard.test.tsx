import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { ProductCard } from './ProductCard';
import {} from './ProductCard.types';

const titleText = 'This is a Title';
const paragraphText = 'This is a test';
const sku = 'Sku: 12512 512';
const heroScr = 'https://placehold.co/300x180';
const defaultBody = (
  <div>
    <h1>{titleText}</h1>
    <p>{paragraphText}</p>
  </div>
);

describe('Card', () => {
  it('renders with correct content', () => {
    render(<ProductCard imageSrc={heroScr} title={titleText} sku={sku} />);
    expect(screen.getByText(titleText)).not.toBeNull();
    expect(screen.getByText(sku)).not.toBeNull();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(<ProductCard onCardClick={onClick} imageSrc={heroScr} title={titleText} dataTestId="product-card" />);
    fireEvent.click(screen.getByTestId('product-card'));
    fireEvent.click(screen.getByText(titleText));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
