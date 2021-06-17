import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Chart from './Chart'
import MonthYearPicker from './MonthYearPicker'

export default function Transaction() {
  const [isOpenPicker, setOpenPicker] = useState(false);
  const [monthYear, setMonthYear] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1 
  });

  function handleOpenPicker() {
    setOpenPicker(true);
    document.getElementById('body')
      ?.classList.add("fixed-body");
  }

  function handleClosePicker() {
    setOpenPicker(false);
    document.getElementById('body')
      ?.classList.remove("fixed-body");
  }

  function handleGetMonthYear(data: object) {
    const result: any = { ...data };
    setMonthYear(result);
    handleClosePicker();
  }
  const dispatch = useDispatch();
  const state: any = useSelector(state=>state);
  useEffect(() => {
    async function getData(){
      await dispatch({ type: 'TRANSACTION_DATA', payload: {} });
      await dispatch({ type: 'CHART_DATA', payload: {} });
    }
    getData();
  }, []);

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
        {!state.transaction.isLoading && <div>
          <Chart time={monthYear}/>
        </div>}
      </div>
    </div>
  )
}