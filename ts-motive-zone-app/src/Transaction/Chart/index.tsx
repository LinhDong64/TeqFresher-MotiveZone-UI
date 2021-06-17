import { useSelector } from 'react-redux';
import {
  BarChart, Bar, Tooltip, ResponsiveContainer,
  Label, XAxis, ReferenceLine, YAxis
} from 'recharts';
import formatDataChart from '../../utils/function/formatDataChart'

export default function Chart(transProps: any) {
  console.log('time', transProps);

  const state: any = useSelector(state => state);
  const chartData = state.transaction.chartData.values;
  const data = formatDataChart(chartData, transProps.time.year);

  function renderLabel(): any {
    return (
      <text fill="#808080" className="recharts-text recharts-label">
        <tspan x="75" y="15"
          style={{ fontSize: "18px", fontWeight: 500 }}>
          {transProps.time.year}</tspan>
      </text>
    )
  }

  const CustomTick = (props: any) => {
    console.log('tick', typeof (props.payload.value));
    if (props.payload.value === transProps.time.month) {
      return (
        <g transform={`translate(${props.x},${props.y})`} >
          <text textAnchor="end" fontSize={12} stroke='#2D69C4'>
            {props.payload.value}
          </text>
        </g>
      )
    } else {
      return (
        <g transform={`translate(${props.x},${props.y})`} >
          <text textAnchor="end" fontSize={12}>
            {props.payload.value}
          </text>
        </g>
      )
    }
  }

  const colorLine = "#808080";
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 15, bottom: 5 }}>
          <Tooltip />
          <XAxis dataKey="month" orientation="top" tickLine={false}
            axisLine={false} tick={<CustomTick />}>
            <Label content={renderLabel} ></Label>
          </XAxis>
          <YAxis reversed={true} hide />
          <Bar dataKey="value" fill="#BFD2ED" radius={10} />
          {data.map((item: any) => (
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
              x={data[data.length - 1].month}
              stroke={colorLine}
              position="end"
              className='custome-reference-line'
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}