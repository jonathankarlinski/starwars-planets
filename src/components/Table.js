import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, filterByName, filterByNumericValues } = useContext(StarWarsContext);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(planets);
  }, [planets]);

  const numericFilter = () => {
    const { column, comparison,
      value } = filterByNumericValues[filterByNumericValues.length - 1];
    const newFilter = filters.filter((planet) => {
      if (comparison === 'maior que') return planet[column] > Number(value);
      if (comparison === 'menor que') return planet[column] < Number(value);
      return planet[column] === value;
    });
    setFilters(newFilter);
  };

  useEffect(() => {
    const search = () => ((filterByNumericValues.length > 0) && numericFilter());
    search();
  }, [filterByNumericValues.length]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { filters.filter(({ name }) => name.includes(filterByName.name))
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
