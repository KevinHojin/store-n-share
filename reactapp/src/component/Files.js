import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Button, Checkbox, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
//import { Checkbox } from '@mui/material/Checkbox';

export const Files = ({ file, checked, setChecked, upload, setUpload }) => {
    function handleChange(){
        if(!file){
            return;
        }
        console.log(checked)
        const exist = checked.includes(file);
        console.log("filename:", file.name);
        console.log(exist);
        if(exist === false){
            setChecked([...checked,file]);
        }
        else{
            setChecked(checked.filter(f => f !== file));
        }
        console.log(checked);
      };
    return (
        <>
            <li key={file.name} style={{fontSize: 16, display: "flex", marginTop: 15}} key={file.name}>
            <Checkbox onClick={handleChange}/>
                <Typography style={{fontSize: 16, marginBlockStart: 10}}>
                {file.name} - {file.size} bytes
                </Typography>
            </li>
        </>
    )
}