import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import {
  TableDiv,
  TableStyle,
  Td,
  TdFilms,
  Th,
} from './TableStyle';

function Table() {
  const { filters } = useContext(StarWarsContext);

  return (
    <TableDiv>
      <TableStyle>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Rotation Period</Th>
            <Th>Orbital Period</Th>
            <Th>Diameter</Th>
            <Th>Climate</Th>
            <Th>Gravity</Th>
            <Th>Terrain</Th>
            <Th>Surface Water</Th>
            <Th>Population</Th>
            <Th>Films</Th>
            <Th>Created</Th>
            <Th>Edited</Th>
            <Th>URL</Th>
          </tr>
        </thead>
        <tbody>
          {
            filters.map((planet) => (
              <tr key={ planet }>
                <Td data-testid="planet-name">{planet.name}</Td>
                <Td>{planet.rotation_period}</Td>
                <Td>{planet.orbital_period}</Td>
                <Td>{planet.diameter}</Td>
                <Td>{planet.climate}</Td>
                <Td>{planet.gravity}</Td>
                <Td>{planet.terrain}</Td>
                <Td>{planet.surface_water}</Td>
                <Td>{planet.population}</Td>
                <TdFilms>
                  {planet.films.map((film) => (
                    <ul key={ film }>
                      <li>{film}</li>
                    </ul>
                  ))}
                </TdFilms>
                <Td>{planet.created}</Td>
                <Td>{planet.edited}</Td>
                <Td>{planet.url}</Td>
              </tr>
            ))
          }
        </tbody>
      </TableStyle>
    </TableDiv>

  );
}
export default Table;
