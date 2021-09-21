import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const ContentContainer = styled.div`
  margin-top: -250px;
  margin-left: 150px;
  margin-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 150px;
  background-color: white;
  nav ul li {
    margin-top: -60px;  
    display: flex;
    padding: 10px;
  }
  nav ul {
    list-style: none;
    display: flex;
    margin-left: 1030px;
    
  }
  nav ul li a {
    display: flex;
    text-decoration: none;
    padding-bottom: 10px;
  }

  .current {
    border-bottom: 4px solid blue;
  }
`;

export const NavLink = styled(Link)`
display: flex;
 color: black;
 `;

export const Button = styled.button`
display: flex;
margin-left: 120px;
margin-top: -40px;
padding-top: 10px;
padding-left: 10px;
width: 120px;
height: 40px;
border: 2px solid blue;
color: blue;
font-size: 15px;
 `;

export const Dropbtn = styled.select`
display: flex;
margin-left: 20px;
margin-top: 20px;
padding-top: 90px
width: 80px;
height: 40px
 `;

export const Bars = styled.div`
  margin-left: 20px;
  margin-top: -30px;
  width: 1270px;
  height: 4px;
  background-color: #E6E6E6;
 
`;

export const Tables = styled.div`
margin-top: 20px;
`; 