import { useState } from 'react'
import Chart from './Chart'
import MonthYearPicker from './MonthYearPicker'

export default function Transaction() {
  const [isOpenPicker, setOpenPicker] = useState(false);
  const [monthYear, setMonthYear] = useState({ year: 2021, month: 6 });

  function handleOpenPicker() {
    setOpenPicker(true);
    document.getElementById('body')?.classList.add("fixed-body");
  }

  function handleClosePicker() {
    setOpenPicker(false);
    document.getElementById('body')?.classList.remove("fixed-body");
  }

  function handleGetMonthYear(data: object) {
    const result: any = { ...data };
    setMonthYear(result);
    handleClosePicker();
  }

  return (
    <div>
      <button onClick={handleOpenPicker}>Open Picker</button>
      <div>{monthYear.month}-{monthYear.year}</div>
      <MonthYearPicker isOpen={isOpenPicker}
        closePicker={handleClosePicker}
        getMonthYear={handleGetMonthYear} />
    </div>
  )
}