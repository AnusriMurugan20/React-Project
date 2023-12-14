import React from "react";
import './Signup.css';
import styled from "styled-components";
import Input from "./Input";
import {Link} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaTransgender } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Signup() {
  return (
    <MainContainer>
      <WelcomeText>Signup</WelcomeText>
      <InputContainer>
        <Input
          type="text"
          placeholder="User Name"
          icon={<FaUserCircle className="icon" />}
        />
        <Input
          type="text"
          placeholder="Gender"
          icon={<FaTransgender className="icon" />}
        />
        <Input
          type="text"
          placeholder="Phone Number"
          icon={<FaPhoneAlt className="icon" />}
        />
        <Input
          type="text"
          placeholder="Email"
          icon={<IoMail className="icon" />}
        />
        <Input
          type="password"
          placeholder="Password"
          icon={<FaEye className="icon" />}
        />
        <Input
          type="password"
          placeholder=" Confirm Password"
          icon={<RiLockPasswordFill className="icon" />}
        />
      </InputContainer>
      <ButtonContainer>
        <button style={{ backgroundColor: 'white', height: 45, width: 150, fontSize: 20, border: 0, borderRadius: 30, cursor: "pointer" }}>Sign Up</button>
      </ButtonContainer>
      <ForgotPassword >Already Have An Account? </ForgotPassword>
      <ForgotPassword1><Link to = "/">Login </Link> </ForgotPassword1>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 95vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0, 37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin-left: 70px;
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 150%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForgotPassword =styled.h5`
cursor:pointer;
height:5%;
padding-left:1%;
padding-bottom:15%;


`;
const ForgotPassword1 =styled.h5`
cursor:pointer;
height:5%;
padding-left:1%;
color:white;

padding-bottom:15%;


`;
export default Signup;
