import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const DataChart= () => {
    const data=[
        {
        name:"January",
        value:1500,
        },
        {
            name:"Febuary",
            value:2400,
        },
        
        {
            name:"March",
            value:1700,
        }
        ,
        {
            name:"April",
            value:2000,
        }
        ,
        {
            name:"May",
            value:2400,
        },
    
        {
            name:"June",
            value:2700,
        },
        
        {
            name:"July",
            value:2300,
        },
        {
            name:"August",
            value:1600,
        },
        {
            name:"September",
            value:1900,
        },
        {
            name:"October",
            value:2200,
        },
        {
            name:"November",
            value:2700,
        },
        {
            name:"December",
            value:3000,
        },

    ]
    const getTickFontSize = () => {
        const screenWidth = window.innerWidth;
    
        // Define font sizes based on screen width
        if (screenWidth < 768) { // Small screens
          return "8px";
        } else if (screenWidth >= 768 && screenWidth < 1024) { // Medium screens
          return "12px";
        } else { // Large screens
          return "16px";
        }
      };
  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" tick={{ fontSize: getTickFontSize(),fontWeight:"600" }} />
          <YAxis tick={{ fontSize: getTickFontSize(),fontWeight:"600" }} />
          <Tooltip />
          
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default DataChart