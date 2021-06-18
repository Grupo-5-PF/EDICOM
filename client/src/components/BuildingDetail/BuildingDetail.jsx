import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import ApartmentList from "../ApartmentList/ApartmentList";
import BSChart from "./BSChart";
import TimeChart from './TimeChart';
import './BuildingDetail.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import { useState } from 'react';

function BuildingDetail(props) {
    const buildingId = props.match.params.id;
    const [date,setDate] = useState("All");

    function handleSelect(e) {
        setDate(e.target.value)
    };

    return (
        <ThemeProvider theme={theme}>
        <div className='contExtBD'>
            <div className = 'contALComp'>
                <ApartmentList buildingId={buildingId}/>
            </div>
            <div className= 'contExtBothCharts'>
                <div className= 'contChar1'>
                    <div>
                        <FormControl style={{width: '200px', marginBottom: '20px'}}>
                            <InputLabel id="demo-controlled-open-select-label">Mes</InputLabel>
                            <Select name="building" onChange={handleSelect} value={date}>
                            <MenuItem value="All">
                                <em>All</em>
                            </MenuItem >
                            <MenuItem value="0">
                                <em>Enero</em>
                            </MenuItem >
                            <MenuItem value="1">
                                <em>Febrero</em>
                            </MenuItem >
                            <MenuItem value="2">
                                <em>Marzo</em>
                            </MenuItem >
                            <MenuItem value="3">
                                <em>Abril</em>
                            </MenuItem >
                            <MenuItem value="4">
                                <em>Mayo</em>
                            </MenuItem >
                            <MenuItem value="5">
                                <em>Junio</em>
                            </MenuItem >
                            <MenuItem value="6">
                                <em>Julio</em>
                            </MenuItem >
                            <MenuItem value="7">
                                <em>Agosto</em>
                            </MenuItem >
                            <MenuItem value="8">
                                <em>Septiembre</em>
                            </MenuItem >
                            <MenuItem value="9">
                                <em>Octubre</em>
                            </MenuItem >
                            <MenuItem value="10">
                                <em>Noviembre</em>
                            </MenuItem >
                            <MenuItem value="11">
                                <em>Diciembre</em>
                            </MenuItem >
                            </Select>
                        </FormControl>
                        </div>            
                    <BSChart date = {date} buildingId={buildingId}/>
                </div>
                <div className= 'contChar'>
                <TimeChart buildingId={buildingId}/>
                </div>
            </div>
        </div>
        </ThemeProvider>
    );
}

export default BuildingDetail;