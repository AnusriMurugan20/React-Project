import styled from "styled-components";

export default function Input({ type, placeholder, icon }) {
  return (
    <InputContainer>
      {icon && <IconContainer>{icon}</IconContainer>}
      <StyledInput type={type} placeholder={placeholder} />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  right: -90px;
  top: 80%;
  transform: translateY(-50%);
  font-size: 6.5rem; 
  color: white;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 120%;
  height: 3rem;
  padding: 1rem;
  padding-left: 30px; 
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  text-align:left;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    background-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 200%;
    font-size: 1rem; 
    
  }
`;

