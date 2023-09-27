import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { planets, filterName, filterByNumericValues, setFilterByNumericValues,
    setFilters } = useContext(StarWarsContext);

  useEffect(() => {
    setFilters(planets);
    const numericFilter = planets
      .filter((el) => el.name.includes(filterName));
    setFilters(numericFilter);

    const newFilter = filterByNumericValues
      .reduce((acc, filter) => acc.filter((planet) => {
        switch (filter.comparison) {
        case 'maior que':
          return Number(planet[filter.column]) > Number(filter.value);
        case 'menor que':
          return Number(planet[filter.column]) < Number(filter.value);
        case 'igual a':
          return Number(planet[filter.column]) === Number(filter.value);
        default:
          return true;
        }
      }), numericFilter);
    setFilters(newFilter);
  }, [planets, filterName, filterByNumericValues, setFilters]);

  const handleDelete = ({ target }) => {
    const newArray = filterByNumericValues.filter((el) => el.column !== target.name);
    setFilterByNumericValues([...newArray]);
  };
  return (
    <div>
      {filterByNumericValues.map((filter, index) => (
        <ul key={ index } data-testid="filter">
          <li>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              name={ filter.column }
              onClick={ handleDelete }
            >
              X
            </button>
          </li>
        </ul>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilterByNumericValues([]) }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default Filter;
