import React from 'react';
import { cleanup } from '@testing-library/react';
import App from '../App';
import renderWithContext from './renderWithContext';
import mockFetch from '../../cypress/mocks/fetch';

beforeEach(() => {
  global.fetch = jest.fn(mockFetch);  
})

afterEach(cleanup);

describe('Testes da aplicação', () => {
  test('se o fetch da api é realizado com sucesso', async () => {
    renderWithContext(<App />);
    expect(global.fetch).toBeCalledTimes(2);
  });
});

