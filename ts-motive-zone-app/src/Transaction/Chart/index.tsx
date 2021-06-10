
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {
  const data = [
    {
      name: '1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '12',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianAxis strokeDasharray=""/>
      <XAxis dataKey="name" orientation='top' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8">
      </Bar> 
    </BarChart>
  )
}