import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithContext from './renderWithContext';
import userEvent from '@testing-library/user-event';

it('teste se o filtro de name funciona', async () => {
  renderWithContext(<App />);

  const name = screen.getByTestId('name-filter');
  userEvent.type(name, 'Tatooine')
  const table = screen.getAllByRole('row');
  expect(table.length).toBe(1);
});

it('teste de multiplos filtros', async () => {
  renderWithContext(<App />);

  const name = await screen.findByText('Alderaan');
  expect(name).toBeInTheDocument()
  const filterColumns = screen.getByTestId('column-filter');
  const filterComparation = screen.getByTestId('comparison-filter');
  const filterValue = screen.getByTestId('value-filter');
  const button = screen.getByTestId('button-filter');

  userEvent.selectOptions(filterColumns, 'surface_water');
  userEvent.selectOptions(filterComparation, 'menor que');
  userEvent.type(filterValue, '2');
  userEvent.click(button);

  const table = screen.getAllByRole('row');
  expect(table.length).toBe(3);

});

