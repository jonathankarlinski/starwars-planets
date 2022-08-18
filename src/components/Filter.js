import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    setfilterByName,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);
  const [columnFilter, setColumn] = useState('population');
  const [comparisonFilter, setComparison] = useState('maior que');
  const [valueFilter, setValue] = useState('0');

  const handleSubmit = () => {
    const teste = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    setFilterByNumericValues([teste]);
  };

  return (
    <div>
      <label htmlFor="name">
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          onChange={ ({ target }) => setfilterByName({ name: target.value }) }
        />
      </label>
      <div>
        <label htmlFor="column">
          <select
            data-testid="column-filter"
            id="column"
            name="column"
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
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
        </label>
        <label htmlFor="value">
          <input
            data-testid="value-filter"
            id="value"
            name="value"
            value={ valueFilter }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleSubmit }
        >
          Filtrar
        </button>
      </div>
    </div>

  );
}

export default Filters;
