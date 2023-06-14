import React from "react";
import "./Chart.scss";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import MyTable from "../Table/MyTable";

import BarAndLine from "../barAndLine/BarAndLine";

const Chart = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="chart">
      <div className="head">
        <h2>Advertising</h2>
        <div className="content">
          <div className="right">
            <div className="filter">
              <label htmlFor="option">Marketplace</label>
              <select className="select" id="option" onChange={handleChange}>
                <option value="amazon">Amazon</option>
                <option value="google">Google</option>
                <option value="netflix">NetFlix</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="option">Ad type</label>
              <select className="select" id="option" onChange={handleChange}>
                <option value="all">All</option>
                <option value="google">Google</option>
                <option value="netflix">NetFlix</option>
              </select>
            </div>
          </div>
          <div className="left">
            <label htmlFor="date">Date & Time</label>
            <DatePicker
              className="date"
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              placeholderText="20/12/2022-22/11/2032  🔻"
              onChange={(update) => {
                setDateRange(update);
              }}
              withPortal
            />
            <p>PST-Timezone</p>
          </div>
        </div>
      </div>
      <div className="charts">
        <BarAndLine />
      </div>
      <div className="table">
        <MyTable />
      </div>
    </div>
  );
};

export default Chart;
