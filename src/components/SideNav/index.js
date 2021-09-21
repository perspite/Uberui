import React from 'react';
import Content from '../Content';
import { SideNavContainer, SidebarLink, NavLink, SidebarMenu} from './SideNavElements';


const SideNav = () => {
  return (
    <SideNavContainer>
      <SidebarMenu>
      <h1>ACCOUNT</h1>
                 <SidebarLink activeClassName="current1" to="/Activity" value="toggle">Activity</SidebarLink>
                 <SidebarLink exact activeClassName="current1" to="/People">People</SidebarLink>
                 <SidebarLink exact activeClassName="current1" to="/Billing">Billing</SidebarLink>
                 <SidebarLink exact activeClassName="current1" to="/Settings">Settings</SidebarLink>
                 <h1>PERMISSION</h1>
                 <SidebarLink exact activeClassName="current1" to="/UberTravel">Uber Travel</SidebarLink>
                 <SidebarLink exact activeClassName="current1" to="/UberCentral">Uber Central</SidebarLink>
             </SidebarMenu>
             <Content />
    </SideNavContainer>
  );
};

export default SideNav;