import styled from 'styled-components';
import { FaUser } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'


export const HeaderContainer = styled.div`

  display: flex;
  color: #black;

  h1 {
    margin-left: 20px;
  }

  p {
    margin-left: 3px;
    margin-top: 37px;
  }
`;

export const Question = styled(FaQuestion)`
 margin-top: 30px;
 font-size: 1.5rem;
 color: #5B5B5B;
 margin-left: 1240px;
`;

export const User = styled(FaUser)`
 margin-top: 30px;
 font-size: 1.5rem;
 color: #5B5B5B;
 margin-left: 20px;
`;