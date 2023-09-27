import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filters, setFilters] = useState([]);

  const getPlanets = async () => {
    const url = 'https://swapi.py4e.com/api/planets/';
    const response = await fetch(url);
    const datas = await response.json();
    return datas.results;
  };

  useEffect(() => {
    async function fetch() {
      setPlanets(await getPlanets());
    }
    fetch();
  }, []);

  const value = useMemo(() => ({
    planets,
    filterName,
    setFilterName,
    filterByNumericValues,
    setFilterByNumericValues,
    filters,
    setFilters,
  }), [
    planets,
    filterName,
    setFilterName,
    setFilterByNumericValues,
    filterByNumericValues,
    filters,
    setFilters,
  ]);

  return (
    <StarWarsContext.Provider
      value={ value }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
