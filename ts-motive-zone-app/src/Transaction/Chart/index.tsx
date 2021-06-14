import { useEffect, useState } from 'react';
import {
  BarChart, Bar, Tooltip,ResponsiveContainer,
  Label, XAxis, ReferenceLine
} from 'recharts';
import { getDataForChart, getTransactionData} from '../../services/callAPI'
import formatDataChart from '../../utils/function/formatDataChart'

export default function Chart(props: any) {
  const [dataForChart, setDataForChart]=useState([])
  useEffect(() => {
    getTransactionData().then(result=>{
      console.log(result);
      
    });
    
    getDataForChart().then(result => { setDataForChart(result.data.values)});
  }, [])
 
  const data = formatDataChart(dataForChart, props.time.year);
  
  function renderLabel(): any {
    return (
      <text fill="#808080" className="recharts-text recharts-label">
        <tspan x="75" y="15" style={{ fontSize: "18px", fontWeight: 500 }}>
          {props.time.year}</tspan>
      </text>
    )
  }

  const colorLine="#808080";

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 15, bottom: 5 }}>
        <Tooltip />
        <XAxis dataKey="month" orientation="top" tickLine={false} 
                axisLine={false}>
          <Label content={renderLabel}></Label>
        </XAxis>
        {/* {
          data.map((item:any)=>(
            <XAxis key={item.time}
              orientation="top" axisLine={false}
              tickLine={false} 
            ></XAxis>
          ))
        } */}
        <Bar dataKey="value" fill="#BFD2ED" radius={10}/>
        {data.map((item:any) => (
              <ReferenceLine
                ifOverflow="visible"
                key={item.time}
                x={item.month}
                stroke={colorLine}
                position="start"
                className='custome-reference-line'
              />
            ))}
            {data.length > 0 && (
              <ReferenceLine
                ifOverflow="visible"
                x={data[data.length-1].month}
                stroke={colorLine}
                position="end"
                className='custome-reference-line'
              />
            )}
      </BarChart>
    </ResponsiveContainer>
  )
}

// verticalPoints={[0, 92, 185, 278, 371, 464, 557, 650]}