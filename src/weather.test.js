import { fireEvent, screen, render, queryByTestId } from '@testing-library/react';
import React from 'react';
import Weather from './weather';

test("Enter the name of a city shows weather condition.", () => {

    render(<Weather />);
    const input = screen.getByTestId('city-input');
    fireEvent.change(input, { target: { value: 'Surabaya' } });
    expect(input.value).toBe('Surabaya');

    const nullSearch = screen.getByText("Enter the name of a city and click the Submit.");
    expect(nullSearch).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('submit-button'));
    expect(nullSearch).not.toBeInTheDocument();
});