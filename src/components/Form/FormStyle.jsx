import styled from 'styled-components';

export const FormCorlor = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  `;

export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  gap: 0.3rem;
  padding-top: 2rem;
`;

export const DivFilter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  gap: 0.3rem;
`;

export const Select = styled.select`
  background-color: white;
  border: 0.1rem solid #7B68EE;
  border-radius: 0.25rem;
  color: #7B68EE;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 0.4rem;

  &:focus {
    border-color: #7B68EE;
  }
`;

const Input = styled.input`
  background-color: #1C1C1C;
  border: 0.1rem solid #7B68EE;
  color: white;
  height: 1.5rem;
`;

export const InputName = styled(Input)`
  color: #7B68EE;
  padding: 0.3rem;
`;

export const InputValue = styled(Input)`
  padding-left: 1.5rem;
  width: 2rem;
`;

export const Button = styled.button`
  background-color: #1C1C1C;
  border: 0.13rem solid #7B68EE;
  border-radius: 0.5rem;
  color: #7B68EE;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;

  &:hover {
    background: linear-gradient(rgba(123, 104, 238, 0.7), rgba(123, 104, 238, 0.7));
  }
`;

export const DivOrder = styled.div`
  color: #7B68EE;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: start;
`;
