import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const EventGenre = ({events}) => {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([])
  const oldColors = ["#ff6969", "#2bb535", "#3bebff", "#aa3bff", "#ff3dab"]
  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split("-").join(",").split("JS").join(",").split(" ").join(",").split("!").join(",").split(".").join(",").split(",").includes(genre)).length;
      return { name: genre, value};
    });
    let newColors = [];
    let newData = [];
    for(let i = 0; i < data.length; i++) {
      if(data[i].value > 0) {
        newData.push(data[i]);
        newColors.push(oldColors[i]);
      }
    }
    console.log(newColors);
    if(newColors.length !== 0){
      setColors(newColors);
    }
    setData(newData);
  }

  useEffect(() => { setData(() => getData()) }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
           {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    );
  }
export default EventGenre;