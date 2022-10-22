import React from 'react';
import axios from 'axios';
import { Files } from './Files.js'
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';

export const FileList = ({ fileLists, setFiles, checked, setChecked, upload, setUpload, openAlert, setOpenAlert }) => {
    console.log(fileLists.length)
    console.log(checked)
    const handleAlertClose = (event) => {
        setOpenAlert(0);
      };
    function handleUpload(){
        for(let i = 0; i < checked.length; i++){
            const formData = new FormData();
            const fileData = checked[i];
            formData.append("file", fileData);
            console.log(formData.get('file'));
            axios.post("http://127.0.0.1:5000/download", formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => console.log(res))
        }
        setOpenAlert(1);
    }
    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openAlert === 1} onClose={handleAlertClose} autoHideDuration={6000} >
                <Alert sx={{"& .MuiAlert-icon": { fontSize: 40 }}} style={{fontSize: 16}} severity="info">
                    <AlertTitle  style={{fontSize: 20,  }}>Download complete!</AlertTitle>
                    Selected files are downloaded at your local folder(STORE-N-SHARE/flask-backend/Downloads)
                </Alert>
             </Snackbar>
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