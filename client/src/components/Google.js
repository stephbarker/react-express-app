import React from 'react'

export default function Google({ googleData }) {
  return (
    <div>
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
