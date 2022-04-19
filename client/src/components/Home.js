import React from 'react'

// import Google from './Google';
// import Amazon from './Amazon';

export default function Home({ statusData }) {
    return (
        <div>
            {statusData.map((item) => {
                const { url, statusCode, duration, date } = item;
                return (
                    <article style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <h3>{url}</h3>
                        <p>
                        Status Code: {statusCode}
                         <br/>
                         Request Duration: {duration}
                         <br/>
                         Time Stamp: {date}
                        </p>
                    </article>
                );
            })}   
        </div>
    );
};

