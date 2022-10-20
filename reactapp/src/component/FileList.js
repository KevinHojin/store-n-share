import React from 'react';
import { Files } from './Files.js'

export const FileList = ({ fileLists, setFiles }) => {
    console.log({fileLists})
    return (
        <ul>
            {
                fileLists &&
                fileLists.map((file) =>(
                    <Files file={file}/>
                ))
            }
        </ul>
    )
}