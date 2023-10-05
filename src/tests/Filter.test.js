import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithContext from './renderWithContext';
import userEvent from '@testing-library/user-event';


import { posicaoFiltro } from '../components/Filter/Filter';

describe('Testes para componente filter', () => {
  test('se o botão de deletar filtro funciona', async () => {
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

    const deleteButton = await screen.findByText('X');
    userEvent.click(deleteButton);

    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(11));
  });

  test('se o botão de "Remover todas filtragens" apaga todos filtros', async () => {
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

    userEvent.selectOptions(filterColumns, 'orbital_period');
    userEvent.selectOptions(filterComparation, 'maior que');
    userEvent.type(filterValue, '400');
    userEvent.click(button);

    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(1));

    const deleteButton = await screen.findByText('Remover todas filtragens');
    userEvent.click(deleteButton);

    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(11));

  });

  test('se o filtro selecionado volta a estar disponível após deletar o filtro', async () => {
    renderWithContext(<App />);

    const name = await screen.findByText('Alderaan');
    expect(name).toBeInTheDocument()
    const filterColumns = screen.getByTestId('column-filter');
    const filterComparation = screen.getByTestId('comparison-filter');
    const filterValue = screen.getByTestId('value-filter');
    const button = screen.getByTestId('button-filter');

    userEvent.selectOptions(filterColumns, 'population');
    userEvent.selectOptions(filterComparation, 'igual a');
    userEvent.type(filterValue, '24');
    userEvent.click(button);

    const deleteButton = await screen.findByText('X');
    userEvent.click(deleteButton);

    await waitFor(() => userEvent.selectOptions(filterColumns, 'population'));

    userEvent.selectOptions(filterColumns, 'orbital_period');
    userEvent.selectOptions(filterComparation, 'igual a');
    userEvent.type(filterValue, '24');
    userEvent.click(button);

    const deleteButton1 = await screen.findByText('X');
    userEvent.click(deleteButton1);

    await waitFor(() => userEvent.selectOptions(filterColumns, 'orbital_period'));

    userEvent.selectOptions(filterColumns, 'diameter');
    userEvent.selectOptions(filterComparation, 'igual a');
    userEvent.type(filterValue, '24');
    userEvent.click(button);

    const deleteButton2 = await screen.findByText('X');
    userEvent.click(deleteButton2);

    await waitFor(() => userEvent.selectOptions(filterColumns, 'diameter'));


    userEvent.selectOptions(filterColumns, 'rotation_period');
    userEvent.selectOptions(filterComparation, 'igual a');
    userEvent.type(filterValue, '24');
    userEvent.click(button);

    const deleteButton3 = await screen.findByText('X');
    userEvent.click(deleteButton3);

    await waitFor(() => userEvent.selectOptions(filterColumns, 'rotation_period'));

    userEvent.selectOptions(filterColumns, 'surface_water');
    userEvent.selectOptions(filterComparation, 'igual a');
    userEvent.type(filterValue, '24');
    userEvent.click(button);

    const deleteButton4 = await screen.findByText('X');
    userEvent.click(deleteButton4);

    await waitFor(() => userEvent.selectOptions(filterColumns, 'surface_water'));

  });

  test('da função que atualiza o select de filtros quando o próximo filtro ainda não foi utilizado', () => {
    const array = ['population', 'orbital_period', 'diameter'];
    const posicaoParametro = 1;
    const string1 = 'orbital_period';
    const string2 = 'test';

    const result = posicaoFiltro(string1, array, posicaoParametro, string2);

    expect(result).toEqual(['population', 'orbital_period', 'test', 'diameter']);
  });

  test('da função que atualiza o select de filtros quando o próximo filtro já foi utilizado', () => {
    const array = ['a', 'b', 'c'];
    const posicaoParametro = 1;
    const string1 = 'x';
    const string2 = 'y';

    const result = posicaoFiltro(string1, array, posicaoParametro, string2);

    expect(result).toEqual(['a', 'x', 'b', 'c']);
  });
});

