import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarGraph = () => {
    const data=[
    {
        name:"Monday",
        orders:400,
    },
    {
        name:"Tuesday",
        orders:350,
    },
    {
        name:"Wednesday",
        orders:500,
    },
    {
        name:"Thursday",
        orders:400,
    },
    {
        name:"Friday",
        orders:300,
    },
    {
        name:"Saturday",
        orders:450,
    },{
        name:"Sunday",
        orders:600,
    }
]
const getTickFontSize = () => {
    const screenWidth = window.innerWidth;

    // Define font sizes based on screen width
    if (screenWidth < 768) { // Small screens
      return "10px";
    } else if (screenWidth >= 768 && screenWidth < 1024) { // Medium screens
      return "12px";
    } else { // Large screens
      return "16px";
    }
  };
  return (
    
        
         <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart
          // width={200}
          // height={200}
        width={"100%"}
        height={"100%"}
        
          data={data}
          margin={{
            top: 0,
            right: 0,
            left:0,
            bottom: 0,
          }}
          barSize={10}
        //   barCategoryGap={10}
        // barGap={"10px"}
        

        >
          <XAxis dataKey="name"  padding={{left:5,right:5}} tick={{ fontSize: getTickFontSize(),fontWeight:"600" }}  />
          <YAxis  tick={{ fontSize: getTickFontSize(),fontWeight:"600" }} />
          <Tooltip wrapperStyle={{ backgroundColor: "none", borderRadius: '5px', padding: '5px' }}  />
          {/* <Legend /> */}
          
          <Bar dataKey="orders" fill="#8884d8" background={{ fill: '#eee',radius: 10}} fontSize={getTickFontSize()}  borderRadius={[10, 10, 10, 10]} radius={[10, 10, 10, 10]} />
         
        </BarChart>
      </ResponsiveContainer>
    
  )
}

export default BarGraph