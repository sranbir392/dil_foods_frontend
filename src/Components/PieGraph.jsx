import { Flex} from '@chakra-ui/react';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';


const PieGraph = () => {
    const data=[
        {
            name:"Dil Punjabi",
            value:300,
        },
        {
            name:"Bihari Bowl",
             value:400,
        },
        {
            name:"Khichdi Bar",
     value:200,
        },
        {
            name:"All Things Fried",
     value:300,
        },
        {
            name:"Chinease Kaka",
     value:200,
        },
        {
            name:"Bowled Over",
     value:150,
        },
        {
            name:"BAM",
     value:260,
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
          return "14px";
        }
      };
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#9966CC', '#FFA07A', '#20B2AA'];
      
   const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    // <Flex justifyContent={"center"} alignItems={"center"}>
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={{fontSize:getTickFontSize()}}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
    
  );
};

  return (
    <ResponsiveContainer width={"100%"}>
    <PieChart >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={"90%"}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip/>
      <Legend/>
    </PieChart>
  </ResponsiveContainer>
  )
}

export default PieGraph