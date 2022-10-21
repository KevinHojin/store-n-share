import React from 'react';
import axios from 'axios';
import { Files } from './Files.js'
import { Button } from "@mui/material";

export const FileList = ({ fileLists, setFiles, checked, setChecked, upload, setUpload }) => {
    console.log(fileLists.length)
    console.log(checked)
    function handleUpload(){
        const formData = new FormData();
        const fileData = checked[0];
        formData.append("file", fileData);
        console.log(fileLists[0]);
        console.log(formData.get('file'));
        axios.post("http://127.0.0.1:5000/download", formData)
        .then(res => console.log(res))
    }
    return (
        <>
            {
                fileLists.length !== 0
                ? <>
                <ul>
                    {
                        fileLists &&
                        fileLists.map((file) =>(
                        <Files key={file.name} file={file} checked={checked} setChecked={setChecked} upload={upload} setUpload={setUpload} />
                        ))
                    }
                </ul>
                <ul>
                <Button onClick={handleUpload} style={{backgroundColor: "CAE8F5", height: 40, width: 80, border: "#009BE5", borderStyle: "solid", marginRight: 4}}>
                    Upload
                </Button>
                </ul>
                </>
                :
                <>
                <ul>
                    <p>No File Selected!</p>
                </ul>
                </>
            }
        </>
    );
}