import React from 'react';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import StarWarsProvider from './context/StarWarsProvider';
import GlobalStyle, { H1 } from './GlobalStyle';

function App() {
  return (
    <StarWarsProvider>
      <GlobalStyle />
      <H1>StarWars Planets</H1>
      <Form />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
