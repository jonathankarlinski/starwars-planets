import React from 'react';
import { screen, waitFor} from '@testing-library/react';
import App from '../App';
import renderWithContext from './renderWithContext';
import userEvent from '@testing-library/user-event';

describe('Testes para componente form', () => {
  test('se o filtro de name funciona', async () => {
    renderWithContext(<App />);

    const name = screen.getByTestId('name-filter');
    userEvent.type(name, 'Tatooine')
    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(1));

  });

  test('se o filtro de comparação menor', async () => {
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

  test('se o filtro de comparação maior', async () => {
    renderWithContext(<App />);

    const name = await screen.findByText('Alderaan');
    expect(name).toBeInTheDocument()
    const filterColumns = screen.getByTestId('column-filter');
    const filterComparation = screen.getByTestId('comparison-filter');
    const filterValue = screen.getByTestId('value-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(filterColumns, 'orbital_period');
    userEvent.selectOptions(filterComparation, 'maior que');
    userEvent.type(filterValue, '400');
    userEvent.click(button);

    const table = screen.getAllByRole('row');
    expect(table.length).toBe(6);
  });

  test('se o filtro de comparação igual', async () => {
    renderWithContext(<App />);

    const name = await screen.findByText('Alderaan');
    expect(name).toBeInTheDocument()
    const filterColumns = screen.getByTestId('column-filter');
    const filterComparation = screen.getByTestId('comparison-filter');
    const filterValue = screen.getByTestId('value-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(filterColumns, 'rotation_period');
    userEvent.selectOptions(filterComparation, 'igual a');
    userEvent.type(filterValue, '24');
    userEvent.click(button);

    const table = screen.getAllByRole('row');
    expect(table.length).toBe(4);
  });

  test('se aparece a option "Sem filtros" no select de filtros ao utilizar os filtros', async () => {
    renderWithContext(<App />);
    const name = await screen.findByText('Alderaan');
    expect(name).toBeInTheDocument()
    const button = screen.getByTestId('button-filter');

    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    await waitFor(() => expect(screen.queryByText('Sem filtros')).toBeInTheDocument());

  });

  test('se a tabela fica em ordem ascendente', async () => {
    renderWithContext(<App />);

    const name = await screen.findByText('Alderaan');
    expect(name).toBeInTheDocument()
    const filterColumns = screen.getByTestId('column-sort');
    const buttonAsc = screen.getByTestId('column-sort-input-asc');
    const buttonOrder = screen.getByTestId('column-sort-button');
    const arrayPlanets = screen.getAllByTestId('planet-name');

    userEvent.selectOptions(filterColumns, 'population');
    userEvent.click(buttonAsc);
    userEvent.click(buttonOrder);

    expect(arrayPlanets[0].innerHTML).toBe('Yavin IV');
  });

  test('se a tabela fica em ordem descendente', async () => {
    renderWithContext(<App />);

    const name = await screen.findByText('Alderaan');
    expect(name).toBeInTheDocument()
    const filterColumns = screen.getByTestId('column-sort');
    const buttonDesc = screen.getByTestId('column-sort-input-desc');
    const buttonOrder = screen.getByTestId('column-sort-button');
    const arrayPlanets = screen.getAllByTestId('planet-name');

    userEvent.selectOptions(filterColumns, 'population');
    userEvent.click(buttonDesc);
    userEvent.click(buttonOrder);

    expect(arrayPlanets[0].innerHTML).toBe('Coruscant');
  });

});

