import React from 'react';
import Iframe from 'react-iframe'
import { DataContainer, Fare, TripID, VehicleType, TripTime, Miles,
Price, Ids, Types, Time, Mile, Values, Title1, Green, Red, ST, ET, Stad,
Etad, Ec, EcId, Em, EmID, Contne, Bars, Dra } from './DataElements';

const Datas = () => {
 return (
    <cdata>
    <DataContainer>
    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d92249.53655362519!2d-79.61564504549447!3d43.73552265784743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1632125930681!5m2!1sen!2sin" 
    width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"> 
    </Iframe>
    <Title1>
    <Fare>Fare</Fare>
    <TripID>Trip ID</TripID>
    <VehicleType>Vehicle Type</VehicleType>
    <TripTime>Trip Time</TripTime>
    <Miles>Miles</Miles>
    </Title1>
    <Values>
    <Price>$12.37</Price>
    <Ids>A4B0FA9F</Ids>
    <Types>uber X</Types>
    <Time>00:22:47</Time>
    <Mile>3.91</Mile>
    </Values>
    <Green />
    <Red />
    <Contne>
    <ST>11:42AM</ST>
    <ET>12:09PM</ET>
    <Stad>1655 Hudson Ave San Francisco CA</Stad>
    <Etad>88 Stevenson St san Francisco CA</Etad>
    <Ec>Expense Code</Ec>
    <EcId>BUSINESS2016</EcId>
    <Em>Expense Memo</Em>
    <EmID>-</EmID>
    </Contne>
    </DataContainer>
    <Dra><Bars /></Dra>
    </cdata>
 );
 };

 export default Datas;
