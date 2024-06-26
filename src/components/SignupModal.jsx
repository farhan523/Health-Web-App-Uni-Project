import React,{useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

// Styles for the Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  display:flex;
  flex-direction:column;
  align-items:center;
  position: relative;
  border-radius:1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  color: #2D43A8;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 80%;
  padding: 10px;
  margin: 10px 0;
  background: #2D43A8;
 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SocialButton = styled(Button)`
  background: #3b5998; /* Facebook color */
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const SocialButtonGoogle = styled(Button)`
  background: #db4437; /* Google color */
  display: flex;
  align-items: center;
  justify-content: center;
`;



const SignupModal = ({ show, onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("userData",JSON.stringify({
          uid:result.user.uid,
          name:result.user.displayName,
          profilePic: result.user.photoURL
        }));
        navigate("/dashboard");
        console.log(result.user)
      })
      .catch((error) => {
        console.error("Error logging in with Google", error);
      });
  };
  
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>Welcome</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Create a password" />
        <Input type="text" placeholder="Relation" />
        <Button onClick={()=>navigate("/dashboard")}>Continue</Button>
        <p style={{ textAlign: 'center' }}>OR</p>
        <SocialButton>
          <i className="fab fa-facebook-f" style={{ marginRight: '10px' }}></i>
          Continue With Facebook
        </SocialButton>
        <SocialButtonGoogle onClick={handleLogin}>
          <i className="fab fa-google" style={{ marginRight: '10px' }}></i>
          Continue with Google
        </SocialButtonGoogle>
        <p style={{ fontSize: '12px', textAlign: 'center' }}>
          By continuing you agree to Pinterest <a href="#">Terms and Conditions</a> and acknowledge that you have read our <a href="#">Privacy Policy</a>.
        </p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SignupModal;
