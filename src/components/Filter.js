import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const {
    setfilterByName,
    setFilterByNumericValues,
    filterByNumericValues,
  } = useContext(StarWarsContext);
  const [columnFilter, setColumn] = useState('population');
  const [comparisonFilter, setComparison] = useState('maior que');
  const [valueFilter, setValue] = useState('0');

  const filterColumns = () => {
    const columns = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    filterByNumericValues.forEach(({ column }) => {
      if (columns.includes(column)) {
        columns.splice(columns.indexOf(column), 1);
      }
    });
    return columns;
  };

  const handleSubmit = () => {
    const teste = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };
    setColumn(filterColumns()[0]);
    setFilterByNumericValues([...filterByNumericValues, teste]);
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
            { filterColumns().map((column) => (
              <option key={ column }>{column}</option>
            ))}
            {/* <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option> */}
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
      <ul>
        { filterByNumericValues.map((filter) => (
          <li
            key={ `${filter.value} ${filter.column} ${filter.comparison}` }
          >
            { `${filter.value} ${filter.column} ${filter.comparison}` }
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Filters;
