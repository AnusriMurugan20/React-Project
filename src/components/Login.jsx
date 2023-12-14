import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () =>
{

  const FaceBookBackground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
  const InstagramBackground = "linear-gradient(to right, #A12AC4 0%,#ED586C 40%, #F0A853 100%)";
  const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return(
     <MainContainer>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
    <Input
          type="text"
          placeholder="Email"
          icon={<IoMail className="icon" />}
        />
    <Input
          type="password"
          placeholder=" Confirm Password"
          icon={<RiLockPasswordFill className="icon" />}
        />
    </InputContainer>
    <ButtonContainer>
      <Button content="Login" />
    </ButtonContainer>
   <LoginWith>Or Login With</LoginWith> 
   <HorizontalRule />
   <IconsContainer>
<Icon color={FaceBookBackground}>
  <FaFacebookF/>
</Icon>
<Icon color={InstagramBackground}>
  <FaInstagram />
</Icon>
<Icon color={TwitterBackground}>
  <FaTwitter />
</Icon>

   </IconsContainer>
   <ForgotPassword >Don't Have An Account </ForgotPassword>
   <button style={{backgroundColor:'white',height:35,width:150,fontSize:20,border:0,borderRadius:30,}}><Link to = "/Signup" >Sign Up</Link></button>
  </MainContainer>
  );
  
}
const MainContainer = styled.div`
display: flex;
align-items:center;
flex-direction: column;
height: 90vh;
width: 30vw;
background: rgba(255,255,255,0.15);
box-shadow: 0 8px 32px 0 rgba(31,38,135,0,37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.3rem;
margin-left: 70px;

`;
const WelcomeText =styled.h2`
margin: 3rem 0 2rem 0;

 `;
 

 const InputContainer = styled.div`
 display: flex;
 flex-direction:column;
 justify-content: space-around;
 align-items: left;

 height:20%;
 width:60%;
  `;

  const ButtonContainer = styled.div`
  margin: 1rem o 2rem 0;
  width: 90%;
  height:20%;
  display:flex;
  padding-left:10%;
  align-items:center;
  justify-content: center;
  `;


  const LoginWith = styled.h5`
  cursor: pointer;
  padding-left:10%;
  letter-spacing: 0.6rem;
  `;

  const HorizontalRule = styled.hr`
  width:78%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border:none;
  margin: 1.5em 0 1rem 0;
  background: linear-gradient(to center, #14163c 0%, #03217b  79%);
  backdrop-filter: blur(25px);
  `;

const IconsContainer = styled.div`
display:flex;
justify-content: space-between;
margin: 3rem 0 3rem 0;
width: 20%;
`;

const ForgotPassword =styled.h5`
cursor:pointer;
height:5%;
padding-left:10%;


`;


  export default Login; 