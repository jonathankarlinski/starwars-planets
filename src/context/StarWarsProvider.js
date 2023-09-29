import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const param = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [planets, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filters, setFilters] = useState([]);
  const [paramFilter, setParamFilter] = useState(param);
  const [numberFilters, setNumberFilters] = useState([]);

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
    paramFilter,
    setParamFilter,
    numberFilters,
    setNumberFilters,
  }), [
    planets,
    filterName,
    setFilterName,
    setFilterByNumericValues,
    filterByNumericValues,
    filters,
    setFilters,
    paramFilter,
    setParamFilter,
    numberFilters,
    setNumberFilters,
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
