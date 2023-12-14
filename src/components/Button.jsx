import styled from "styled-components";



export default function Button({content}) {
  return <StyledButton>{content} </StyledButton>;
}
const StyledButton = styled.button`
background: linear-gradient(to center , #14163C 0%, #03217B 79%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 45%;
height: 3rem;
border: none;
color: black;
font-weight:bold;
border-radius: 2rem;
cursor: pointer;




`;
