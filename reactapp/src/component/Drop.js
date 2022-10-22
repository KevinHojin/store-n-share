import * as React from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Grid from '@mui/material/Grid';
//import { useDropzone } from "react-dropzone";

 export const Drop = ({ getInputProps, getRootProps, style }) => {
     return(
        <section className="container">
        <h4>Instructions to upload files:</h4>
          <p className='tab'>1. Click 'Select' button or drag 'n' drop the files below</p> 
          <p className='tab'>2. Choose the files you want to upload</p>
          <p className='tab'>3. Click upload button to upload your files</p>
          <p className='tab'>4. Your selected file will be downloaded under your local Store-N-Share folder</p>
        <div {...getRootProps({style})}>
        <input className="drop" sx={{ height:500 }} {...getInputProps()} />
            <Grid item>
                <FileUploadOutlinedIcon style={{fontSize: 30, color: '#009be5',}}></FileUploadOutlinedIcon>
            </Grid>
            <Grid item>
                <p>Drag 'n' drop some files here, or click to select files</p>
            </Grid>
        </div>
        </section>
     );
}
