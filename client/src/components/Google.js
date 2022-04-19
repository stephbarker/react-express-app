import React from 'react'

export default function Google({ googleData }) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1>Google Status</h1>
        <p>
        Website: {googleData.url}
        <br/>
        Status Code: {googleData.statusCode}
        <br/>
        Request Duration: {googleData.duration}
        <br/>
        Time Stamp: {googleData.date}
        </p>
    </div>
  )
};


