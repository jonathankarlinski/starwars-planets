import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Filter from './Filter';

function Form() {
  const {
    setFilterName,
    setFilterByNumericValues,
    setFilters,
    filters,
    paramFilter,
    setParamFilter,
    numberFilters, setNumberFilters,
  } = useContext(StarWarsContext);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [order, setOrder] = useState({ column: 'population', sort: 'ASC' });

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  useEffect(() => {
    if (column === undefined) {
      setColumn('population');
    }
    setFilterName(name);
    setFilterByNumericValues(numberFilters);
  }, [name, setFilterName, numberFilters, setFilterByNumericValues, paramFilter, column]);

  const handleSubmit = () => {
    const newNumberFilter = {
      column,
      comparison,
      value,
    };

    const index = paramFilter.findIndex((filter) => filter === column);
    setColumn(paramFilter[index + 1]);

    setParamFilter(
      paramFilter.filter((param) => param !== column),
    );

    setNumberFilters([...numberFilters, newNumberFilter]);
  };

  const ordenaDados = () => {
    const orderAsc = (a, b) => +a[order.column] - +b[order.column];
    const orderDesc = (a, b) => +b[order.column] - +a[order.column];

    const orderData = filters.filter((e) => e[order.column] !== 'unknown');
    const orderUnknown = filters
      .filter((e) => e[order.column] === 'unknown');

    let orderPlanet = [];
    if (order.sort === 'ASC') {
      orderPlanet = orderData.sort(orderAsc);
    } else {
      orderPlanet = orderData.sort(orderDesc);
    }
    const orderResult = [...orderPlanet, ...orderUnknown];
    setFilters(orderResult);
  };

  return (
    <>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            data-testid="name-filter"
            value={ name }
            id="name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="column">
          <select
            data-testid="column-filter"
            id="column"
            name="column"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {paramFilter.length === 0 ? (<option>Sem filtros</option>)
              : (
                paramFilter.map((item) => (
                  <option value={ item } key={ item }>
                    {item}
                  </option>
                ))
              )}
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            data-testid="comparison-filter"
            id="comparison"
            name="comparison"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
          <label htmlFor="value">
            <input
              data-testid="value-filter"
              type="number"
              name="value"
              value={ value }
              onChange={ ({ target }) => setValue(target.value) }
            />
          </label>
        </label>
        <button
          type="button"
          data-testid="button-filter"
          disabled={ paramFilter.length === 0 }
          onClick={ handleSubmit }
        >
          Filtrar
        </button>
        <label htmlFor="sort">
          <select
            data-testid="column-sort"
            name="sort"
            id="sort"
            onChange={ (e) => setOrder((prevState) => (
              { ...prevState, column: e.target.value })) }
            value={ order.column }
          >
            {
              ['population', 'orbital_period', 'diameter',
                'rotation_period', 'surface_water']
                .map((e, index) => (
                  <option value={ e } key={ index }>
                    {e}
                  </option>
                ))
            }
          </select>
        </label>
        <label htmlFor="asc">
          Ascendente
          <input
            data-testid="column-sort-input-asc"
            id="asc"
            type="radio"
            value="ASC"
            name="sortOrder"
            onChange={ (e) => setOrder((prevState) => (
              { ...prevState, sort: e.target.value })) }
          />
        </label>
        <label htmlFor="desc">
          Descendente
          <input
            data-testid="column-sort-input-desc"
            id="desc"
            type="radio"
            value="DESC"
            name="sortOrder"
            onChange={ (e) => setOrder((prevState) => (
              { ...prevState, sort: e.target.value })) }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ ordenaDados }
        >
          Ordenar
        </button>
      </form>
      <Filter />

    </>
  );
}
export default Form;
