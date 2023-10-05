import styled from 'styled-components';
import { Button } from '../Form/FormStyle';

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const FiltesrDiv = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Span = styled.span`
  align-items: center;
  background-color: #1C1C1C;
  border: 0.1rem solid #8b7bed;
  border-radius: 1rem;
  display: flex;
  font-weight: bold;
  gap: 0.4rem;
  padding: 0.4rem;
`;

export const ButtonDelete = styled.button`
  background-color: white;
  border: none;
  border-radius: 5rem;
  color: #7B68EE;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonDeleteAll = styled(Button)`
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 12%;
`;
