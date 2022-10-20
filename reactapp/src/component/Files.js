import React from 'react';

export const Files = ({ file }) => {
    return (
        <>
            <li>
                <p>{file.name}</p>
            </li>
        </>
    )
}