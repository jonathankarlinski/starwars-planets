import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { planets, filterByName, filterByNumericValues } = useContext(StarWarsContext);

  const numericFilter = () => {
    const filterName = planets.filter(({ name }) => name.includes(filterByName.name));
    if (filterByNumericValues[0]) {
      return filterName.filter((planet) => {
        if (filterByNumericValues[0].comparison === 'maior que') {
          return planet[filterByNumericValues[0].column]
           > Number(filterByNumericValues[0].value);
        }
        if (filterByNumericValues[0].comparison === 'menor que') {
          return planet[filterByNumericValues[0].column]
           < Number(filterByNumericValues[0].value);
        }
        return planet[filterByNumericValues[0].column] === filterByNumericValues[0].value;
      });
    }
    return filterName;
  };

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
        {numericFilter().map((planet, index) => (
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
