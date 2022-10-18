import * as React from 'react';
//import { useDropzone } from "react-dropzone";

 export const Drop = ({ getInputProps, getRootProps, style }) => {
     return(
        <section className="container">
        <h4>Instructions to upload files:</h4>
          <p className='tab'>1. Click 'Select' button or drag 'n' drop the files below</p> 
          <p className='tab'>2. Choose the files you want to upload</p>
          <p className='tab'>3. Click upload button to upload your files</p>
          <p className='tab'>4. Enjoy! </p>
        <div {...getRootProps({style})}>
        <input sx={{ height:500 }} {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <button className="btn btn-secondary">Select</button>
        </div>
        </section>
     );
}
