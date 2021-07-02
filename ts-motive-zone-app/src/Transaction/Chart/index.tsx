import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart, Bar, Tooltip,
  Label, XAxis, ReferenceLine, YAxis
} from 'recharts';
import formatDataChart from '../../utils/function/formatDataChart'

export default function Chart(transProps: any) {
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
    let color = props.payload.value === transProps.time.month ? '#2D69C4' : '';
    return (
      <g transform={`translate(${props.x},${props.y})`} >
        <text textAnchor="end" fontSize={15} stroke={color}>
          {props.payload.value}
        </text>
      </g>
    )
  }

  let startX: any;
  let scrollLeft: any;
  let isDown = false;
  function handleMouseDownSlider(e: MouseEvent, slider: any) {
    isDown = true;
    console.log(isDown);
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }

  function handleMouseLeaveSlider() {
    isDown = false;
  }

  function handleMouseUpSlider() {
    isDown = false;
  }

  function handleMouseMoveSlider(e: MouseEvent, slider: any) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  }
  useEffect(() => {
    const slider = document.querySelector('.container-chart') as HTMLElement;
    slider?.addEventListener('mousedown',
      function (e: MouseEvent) { handleMouseDownSlider(e, slider) } as EventListener);

    slider?.addEventListener('mouseleave',
      handleMouseLeaveSlider as EventListener);

    slider?.addEventListener('mouseup',
      handleMouseUpSlider as EventListener);

    slider?.addEventListener('mousemove',
      function (e: MouseEvent) { handleMouseMoveSlider(e, slider) } as EventListener);
  }, []);

  const colorLine = "#808080";
  return (
    <div className='container-chart'>
      <BarChart data={data} margin={{ top: 15, bottom: 5 }}
        width={730} height={250}
        style={{ cursor: 'grab' }}>
        <Tooltip />
        <XAxis dataKey="month" orientation="top"
          tickLine={false} axisLine={false} tick={<CustomTick />}>
          <Label content={renderLabel} ></Label>
        </XAxis>
        <YAxis reversed={true} hide />
        <Bar dataKey="value" fill="#BFD2ED" radius={10}
          barSize={75} />
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
    </div>
  )
}