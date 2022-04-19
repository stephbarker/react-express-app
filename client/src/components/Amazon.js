import React from 'react'

export default function Amazon({ amazonData }) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1>Amazon Status</h1>
        <p>
        Website: {amazonData.url}
        <br/>
        Status Code: {amazonData.statusCode}
        <br/>
        Request Duration: {amazonData.duration}
        <br/>
        Time Stamp: {amazonData.date}
        </p>
    </div>
  )
};