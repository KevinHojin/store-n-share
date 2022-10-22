import './App.css';
import React, { useMemo } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Head } from './component/header.js';
import { Drop } from './component/Drop.js';
import { FileList } from './component/FileList.js';
import { useDropzone } from "react-dropzone";


function App() {
  const [files, setFiles] = useState([]);
  const [checked, setChecked] = useState([]);
  const [upload, setUpload] = useState([]);
  const [openAlert, setOpenAlert] = useState();

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "darkgray",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };
  
  const acceptStyle = {
    borderColor: "#00e676",
  };
  
  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const focusStyle = {
    borderColor: "#2196f3",
  };

  const onDrop = useCallback(acceptedFiles => {
    console.log("accepted files:", acceptedFiles);
    //const fileList = files;
    //fileList.push(acceptedFiles);
    const newFile = acceptedFiles[0]
    //do not let duplicate upload
    if(!(files.includes(newFile))){
      setFiles([...files,newFile]);
    }
    console.log(files)
    console.log(files.includes(newFile))
  },)

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(isFocused ? focusStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept, isFocused]
  );


  return (
    <div className="container">
      <Head />
      <Drop 
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        style={style}
      />
      <FileList
        fileLists={files}
        setFiles={setFiles}
        checked={checked}
        setChecked={setChecked}
        upload={upload}
        setUpload={setUpload}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
      />
    </div>
  );
}

export default App;
