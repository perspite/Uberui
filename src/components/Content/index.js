import React from 'react';
import Table from '../Table/table';
import { ContentContainer, NavLink, Button, Dropbtn, Bars, Tables} from './ContentElements';

const Content = () => {
    return (
        <ContentContainer>
            <h1>Activity</h1>
            <nav>
              <ul>
                <li><NavLink exact activeClassName="current" to='/'>All (525)</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/about'>Unresolved (1)</NavLink></li>
              </ul>
            </nav>
            <Bars />
            <form>
             <Dropbtn name = "dropdown">
               <option value = "All Trips" selected>All Trips    </option>
             </Dropbtn>
            </form>
            <Button type="button">EXPORT CSV</Button>
            <Tables>
            <Table />
            </Tables>
        </ContentContainer>
    );
};

export default Content;