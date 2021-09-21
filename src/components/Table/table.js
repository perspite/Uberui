import React, { Component } from 'react'
import Datas from "./data";
import { Details , Tbody, Thead} from './tableElements';

class Table extends Component {
    constructor() {
        super();
        
        this.state = {
            data : [
                {id : 1, date : "01/26/17", time : "05:19pm", name : "Jeffrey", location : "San Francisco", service: "Travel", amount : 12.37},
                {id : 2, date : "01/25/17", time : "02:39pm", name : "Mamie",   location : "Los Angels",    service: "Central", amount : 19.37},
                {id : 3, date : "01/21/17", time : "11:19am", name : "Kyle",    location : "New York",      service: "Travel", amount : 32},
                {id : 4, date : "01/19/17", time : "05:19pm", name : "Aaron",   location : "Mexico City",   service: "Travel", amount : 19.24},
                {id : 5, date : "01/15/17", time : "10:19am", name : "Estelle", location : "San Francisco", service: "Central", amount : 27},
                {id : 6, date : "01/11/17", time : "11:19pm", name : "Georgie", location : "Ontario",       service: "Travel", amount : 14.37},
                
            ],
            expandedRows : []
        };
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        
        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(id => id !== rowId) : 
			currentExpandedRows.concat(rowId);
        
        this.setState({expandedRows : newExpandedRows});
    }
    
    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.id);
        const itemRows = [<Tbody>
		    <tr onClick={clickCallback} key={"row-data-" + item.id}>
			    <td>{item.date}</td>
			    <td>{item.time}</td>
			    <td>{item.name}</td>
                <td>{item.location}</td>
                <td>{item.service}</td>
                <td>{item.amount}</td>			
			</tr>   
            </Tbody>        
        ];
    
        if(this.state.expandedRows.includes(item.id)) {
            itemRows.push(
                <Details>
                <Datas />
                </Details>
                
            );
        }
        
        return itemRows;    
    }
    
    render() {
        let allItemRows = [];
        
        this.state.data.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });
        
        return (
			     <table><Thead>
                     <th>Date</th>
                     <th>Time</th>
                     <th>Name</th>
                     <th>Location</th>
                     <th>Service</th>
                     <th>Amount</th>
                     </Thead>{allItemRows}</table>
        );
    }
}

export default Table;