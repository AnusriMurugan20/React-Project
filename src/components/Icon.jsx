import styled from "styled-components";


export default function Icon({color,children}) {
  return (
   <StyledIcon background={color}>{children}</StyledIcon>
  )
}


const StyledIcon = styled.div`
height: 2.3rem;
display: flex;
justify-content: center;
align-items: center;
color: white;
cursor: pointer;
background: ${(props)=>props.background};



svg{
    width: 1.5rem;
    height: 1.5rem;
}
`;