import styled from 'styled-components';

export const Details = styled.div`
 margin-top: 20px;
 margin-left: 80px;
 margin-bottom: 20px;
`;

export const Tbody = styled.div`
 margin-left: 60px;
 margin-bottom: 20px;

 tr {
     display:flex;
     flex-direction: row;
     transition-duration: 0.4s;
 }
 td {
    width: 140px;
    text-align: center;
 }

 tr:nth-child(odd){
    background-color: #f8f9fa;
  }
`;

export const Thead = styled.div`
margin-left: 50px;
th {
    width: 140px;
    text-align: center;
}

`;
