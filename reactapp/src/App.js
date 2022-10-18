import './App.css';
import React, { useMemo } from "react";
import { useCallback } from "react";
import { Head } from './component/header.js';
import { Drop } from './component/Drop.js';
import { useDropzone } from "react-dropzone";


function App() {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
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

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])

  const {
    getRootProps,
    getInputProps,
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
    }),
    [isDragActive, isDragReject, isDragAccept]
  );


  return (
    <div className="container">
      <Head />
      <Drop 
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        style={style}
      />
    </div>
  );
}

export default App;
