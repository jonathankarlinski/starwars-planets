import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import {
  ButtonDelete,
  ButtonDeleteAll,
  FilterDiv,
  FiltesrDiv,
  Span,
} from './FilterStyle';

export function posicaoFiltro(string1, arrayParametro, posicaoParametro, string2) {
  const index = arrayParametro.indexOf(string1);
  const numeroValidacao = -1;

  if (index !== numeroValidacao) {
    arrayParametro.splice(index + 1, 0, string2);
  } else {
    arrayParametro.splice(posicaoParametro, 0, string1);
  }

  return arrayParametro;
}

function Filter() {
  const { planets,
    filterName,
    filterByNumericValues,
    setFilters,
    setNumberFilters,
    setParamFilter,
    paramFilter,
  } = useContext(StarWarsContext);

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
        default:
          return Number(planet[filter.column]) === Number(filter.value);
        }
      }), numericFilter);
    setFilters(newFilter);
  }, [planets, filterName, filterByNumericValues, setFilters]);

  const handleDelete = ({ target }) => {
    const newArray = filterByNumericValues.filter((el) => el.column !== target.name);
    setNumberFilters([...newArray]);
    const meuArray = [...paramFilter];

    const posicao0 = 0;
    const posicao1 = 1;
    const posicao2 = 2;
    const posicao3 = 3;
    const posicao4 = 4;

    if (target.name === 'population') {
      const teste = posicaoFiltro('population', meuArray, posicao0, 'orbital_period');
      setParamFilter(teste);
    } else if (target.name === 'orbital_period') {
      const teste = posicaoFiltro('orbital_period', meuArray, posicao1, 'diameter');
      setParamFilter(teste);
    } else if (target.name === 'diameter') {
      const teste = posicaoFiltro('diameter', meuArray, posicao2, 'rotation_period');
      setParamFilter(teste);
    } else if (target.name === 'rotation_period') {
      const teste = posicaoFiltro('rotation_period', meuArray, posicao3, 'surface_water');
      setParamFilter(teste);
    } else {
      const teste = posicaoFiltro('surface_water', meuArray, posicao4, 'teste');
      setParamFilter(teste);
    }
  };

  const handleDeleteAll = () => {
    setNumberFilters([]);
    const param = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    setParamFilter(param);
  };

  return (
    <FilterDiv>
      <FiltesrDiv>
        {filterByNumericValues.map((filter, index) => (
          <Span key={ index } data-testid="filter">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <ButtonDelete
              type="button"
              name={ filter.column }
              onClick={ handleDelete }
            >
              X
            </ButtonDelete>
          </Span>
        ))}
      </FiltesrDiv>
      {filterByNumericValues.length !== 0 && (
        <ButtonDeleteAll
          type="button"
          data-testid="button-remove-filters"
          onClick={ handleDeleteAll }
        >
          Remover todas filtragens
        </ButtonDeleteAll>
      )}
    </FilterDiv>
  );
}

export default Filter;
