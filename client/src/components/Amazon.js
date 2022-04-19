import React from 'react'

export default function Amazon({ amazonData }) {
  return (
    <div>
        <h1>Amazon Status</h1>
        <p>
        {amazonData.url}
        <br/>
        {amazonData.statusCode}
        <br/>
        {amazonData.duration}
        <br/>
        {amazonData.date}
        </p>
    </div>
  )
};