import { useState } from 'react'
import Chart from './Chart'
import MonthYearPicker from './MonthYearPicker'
import {getTransactionData, getDataForTransChart} from '../services/callAPI'

export default function Transaction() {
  const [isOpenPicker, setOpenPicker] = useState(false);
  const [monthYear, setMonthYear] = useState({ year: 2021, month: 6 });

  console.log('transaction data',getTransactionData());
  console.log('chart data',getDataForTransChart());
  

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
    <div className="trans">
      <div className="trans-container">
        <div className="trans__header">
          <span>利用履歴</span>
          <span>月ごとの支出グラフを隠す</span>
        </div>
        <div className="trans__total">
          <div className="month-picker">
            <span className="month">
              {monthYear.month}<span>月</span>
            </span>
            <span className="chevron-icon" onClick={handleOpenPicker}>
              <i className='fa fa-chevron-down'
              style={{ fontSize: '15px', color: 'gray' }}></i>
            </span>
            <MonthYearPicker isOpen={isOpenPicker}
              closePicker={handleClosePicker}
              getMonthYear={handleGetMonthYear} />
          </div>
          <div className="total__statistic">
            <div className="expense-group">
              <div className="expense">
                <span><b>収入</b></span>
                <span><b>0 円</b></span>
              </div>
              <hr></hr>
            </div>
            <div className="income-group">
              <div className="income">
                <span><b>ご利用額</b></span>
                <span><b>0 円</b></span>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
        <div>
          <Chart/>
        </div>
      </div>
    </div>
  )
}