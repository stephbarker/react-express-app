import React from 'react'

// import Google from './Google';
// import Amazon from './Amazon';

export default function Home({ statusData }) {
    return (
        <div>
            {statusData.map((item) => {
                const { url, statusCode, duration, date } = item;
                return (
                    <article>
                        <h3>{url}</h3>
                        <p>
                        {statusCode}
                         <br/>
                         {duration}
                         <br/>
                         {date}
                        </p>
                    </article>
                );
            })}   
        </div>
    );
};

