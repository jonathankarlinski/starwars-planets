import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setfilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  useEffect(() => {
    const getPlanets = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((res) => res.json());
      return result;
    };
    const deleteResidents = async () => {
      const { results } = await getPlanets();
      results.forEach((result) => delete result.residents);
      setPlanets(results);
    };
    deleteResidents();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        filterByName,
        setfilterByName,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
