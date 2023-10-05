import styled from 'styled-components';

export const TableDiv = styled.div`
  overflow-x: auto;
`;

export const TableStyle = styled.table`
  margin-top: 1.25rem;
  width: 100%;
`;

export const Th = styled.th`
  background-color: #121212;
  color: white;
  font-weight: bold;
  padding: 1rem;
  
`;

export const Td = styled.td`
  background-color: #1d1e1e;
  border-top: 0.1rem solid #ddd;
  color: white;
  padding: 0.5rem;
  text-align: center;
  `;

export const TdFilms = styled(Td)`
  line-height: 1.5;
`;
