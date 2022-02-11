import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Select } from './Select';
import { SelectType, SizeTypes } from './Select.types';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();
const testOptions = [
  {
    value: 'value 1',
    name: 'name 1'
  },
  {
    value: 'value 2',
    name: 'name 2'
  },
  {
    value: 'value 3',
    name: 'name 3'
  },
  {
    value: 'value 4',
    name: 'name 4'
  },
  {
    value: 'value 5',
    name: 'name 5'
  }
];
describe('select', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <Select
        options={testOptions}
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={SelectType.Default}
        size={SizeTypes.Medium}
      />
    );
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(
      <Select
        options={testOptions}
        label="Label text"
        placeholder="Placeholder text"
        onValueChange={mockFn}
        type={SelectType.Default}
        error="Error text"
        size={SizeTypes.Medium}
      />
    );
    expect(screen.getByLabelText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Placeholder text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('calls onValueChange on click', () => {
    const onValueChange = jest.fn();
    const { rerender } = render(
      <Select
        options={testOptions}
        label="select label"
        placeholder="select"
        onValueChange={onValueChange}
        type={SelectType.Default}
        size={SizeTypes.Medium}
      />
    );
    const select = screen.getByText('select');
    userEvent.click(select);
    const selectOption = screen.getByTestId('select-option-1');
    userEvent.click(selectOption);
    expect(onValueChange).toHaveBeenCalledTimes(1);
    rerender(
      <Select
        options={testOptions}
        defaultValue={[testOptions[1]]}
        label="Input label"
        onValueChange={onValueChange}
        type={SelectType.Default}
        size={SizeTypes.Medium}
      />
    );
    expect(screen.getByText(testOptions[1].name)).toBeInTheDocument();
  });

  it('renders inline select', () => {
    const onValueChange = jest.fn();
    render(<Select options={testOptions} label="inline" onValueChange={onValueChange} type={SelectType.Inline} />);
    expect(screen.getByText('inline')).toBeInTheDocument();
  });
});
