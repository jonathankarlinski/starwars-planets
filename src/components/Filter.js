import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setfilterByName } = useContext(StarWarsContext);

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
    </div>

  );
}

export default Filters;
