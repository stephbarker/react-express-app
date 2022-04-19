import React from 'react'

export default function Google({ googleData }) {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1>Google Status</h1>
        <p>
        {googleData.url}
        <br/>
        {googleData.statusCode}
        <br/>
        {googleData.duration}
        <br/>
        {googleData.date}
        </p>
    </div>
  )
};


