import React,{useEffect,useState} from "react";
import '../Styles/Search.css'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRangePicker} from 'react-date-range';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import { Button } from "@mui/material";



function Search(){
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key:'selection'
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    return(
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of guests <PersonAddDisabledIcon/> </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button className="search_btn" variant="outlined">Search</Button>
            {/* {console.log(selectionRange.startDate,selectionRange.endDate)} */}
        </div>
    )
}

export default Search