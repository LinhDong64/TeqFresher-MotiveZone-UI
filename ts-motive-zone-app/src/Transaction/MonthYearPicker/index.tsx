import { useState } from 'react'

export default function MonthYearPicker(props: any) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setYear] = useState(currentYear);
  const [selectedMonth, setMonth] = useState(currentMonth);

  function previousClick() {
    setYear(selectedYear - 1);
    setMonth(1);
  }

  function nextClick() {
    setMonth(1);
    currentYear > selectedYear && setYear(selectedYear + 1);
  }

  function selectMonthClick(month: number) {
    if (selectedYear < currentYear || (selectedYear === currentYear 
      && month <= currentMonth)) {
      setMonth(month);
    }
  }

  function selectedClick() {
    const data = {
      year: selectedYear,
      month: selectedMonth
    }
    props.getMonthYear(data);
  }

  function closePickerClick() {
    props.closePicker();
  }

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const monthsEle = months.map((item, index) => {
    return <li className={`${(selectedYear !== currentYear || 
      (selectedYear === currentYear && item <= currentMonth)) &&
      item !== selectedMonth ? 'normal-month' : ''} 
            ${item === selectedMonth ? 'active-month' : ''}
            ${item > currentMonth && selectedYear >= currentYear? 'disable-month' : ''}`}
      key={index} onClick={() => selectMonthClick(item)}>{item}月</li>
  })

  return (
    <div className="modal-container"
      style={{ display: props.isOpen ? 'flex' : 'none' }}>
      <div className="modal-content">
        <div className="modal-content__top">
          <span className="close"
            onClick={closePickerClick}>&times;</span>
        </div>
        <div className="modal-content__picker">
          <div className="year-option">
            <ul>
              <li onClick={previousClick}
                className="year-adjustment">❮ 前年</li>
              <li><b>{selectedYear} 年</b></li>
              <li onClick={nextClick}
                className={`${selectedYear === currentYear? 'disable-next-year': 'year-adjustment'}`}>来年 ❯</li>
            </ul>
          </div>
          <hr></hr>
          <div className="month-option">
            <ul>
              {monthsEle}
            </ul>
          </div>
          <div className="button-group">
            <button onClick={selectedClick}>決定</button>
          </div>
        </div>
      </div>
    </div>
  )
}