import {
  BarChart, Bar, Tooltip, LabelList, ResponsiveContainer, CartesianGrid,
  Label, XAxis
} from 'recharts';


export default function Chart() {
  const data = [
    {
      name: '1',
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2',
      pv: 1398,
      amt: 2210,
    },
    {
      name: '3',
      pv: 9800,
      amt: 2290,
    },
    {
      name: '4',
      pv: 3908,
      amt: 2000,
    },
    {
      name: '5',
      pv: 4800,
      amt: 2181,
    },
    {
      name: '6',
      pv: 3800,
      amt: 2500,
    },
    {
      name: '12',
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid verticalPoints={[20,105, 191, 277, 363, 448, 534,620]}
          horizontalPoints={[250]} />
        <Tooltip />
        <XAxis dataKey="name" orientation="top">
          <Label value="2021" offset={0} position="insideTopLeft"/>
        </XAxis>
        <Bar dataKey="pv" fill="#BFD2ED"/>
      </BarChart>
    </ResponsiveContainer>
  )
}