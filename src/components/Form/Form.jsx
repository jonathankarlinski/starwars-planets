import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Filter from '../Filter/Filter';
import {
  Button,
  DivFilter,
  DivOrder,
  FormCorlor,
  InputName,
  InputValue,
  Label,
  LabelName,
  LabelOrder,
  Select,
} from './FormStyle';

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
  const [value, setValue] = useState('');
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
    setValue('');
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

  const updateOrder = (e) => {
    setOrder((prevState) => ({ ...prevState, sort: e.target.value }));
  };

  return (
    <FormCorlor>
      <LabelName htmlFor="name">
        Nome do planeta
        <InputName
          type="text"
          name="name"
          data-testid="name-filter"
          value={ name }
          id="name"
          placeholder="Filtre um planeta aqui..."
          onChange={ handleChange }
        />
      </LabelName>
      <DivFilter>
        <Label htmlFor="column">
          Coluna
          <Select
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
          </Select>
        </Label>
        <Label htmlFor="comparison">
          Operador
          <Select
            data-testid="comparison-filter"
            id="comparison"
            name="comparison"
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </Select>
        </Label>
        <Label htmlFor="value">
          Valor
          <InputValue
            data-testid="value-filter"
            type="number"
            id="value"
            name="value"
            placeholder="0"
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </Label>
        <Button
          type="button"
          data-testid="button-filter"
          disabled={ paramFilter.length === 0 || value === '0' || !value }
          onClick={ handleSubmit }
        >
          Filtrar
        </Button>
        <Label htmlFor="sort">
          Orderar
          <Select
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
                .map((e) => (
                  <option
                    value={ e }
                    key={ e }
                  >
                    {e}
                  </option>
                ))
            }
          </Select>
        </Label>
        <DivOrder>
          <LabelOrder htmlFor="asc">
            <input
              data-testid="column-sort-input-asc"
              id="asc"
              type="radio"
              value="ASC"
              name="sortOrder"
              onChange={ (e) => updateOrder(e) }
            />
            {' '}
            Ascendente
          </LabelOrder>
          <LabelOrder htmlFor="desc">
            <input
              data-testid="column-sort-input-desc"
              id="desc"
              type="radio"
              value="DESC"
              name="sortOrder"
              onChange={ (e) => updateOrder(e) }
            />
            {' '}
            Descendente
          </LabelOrder>
        </DivOrder>
        <Button
          type="button"
          data-testid="column-sort-button"
          onClick={ ordenaDados }
        >
          Ordenar
        </Button>
      </DivFilter>
      <Filter />
    </FormCorlor>
  );
}
export default Form;
