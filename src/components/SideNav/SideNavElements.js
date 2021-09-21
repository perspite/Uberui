import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const SideNavContainer = styled.div`
padding-top: 20px;
padding-bottom: 20px;
background-color: #f1f1f1;

`;


export const SidebarMenu = styled.div`
  .current1 {
    position: fixed
    padding-left: 20px;
    border-left: 4px solid blue;
  }
  h1 {
      font-size: 1rem;
      padding-left:20px;
}

`;

export const NavLink = styled(Link)`
display: flex;
 color: black;
 `;

export const SidebarLink = styled(Link)`
color: black;
  text-decoration: none;
  padding-left: 20px;
  display: flex;
  width: 150px;
  margin-top: 10px;
  font-size: 1rem;
`;