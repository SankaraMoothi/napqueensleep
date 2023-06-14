import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./BarAndLine.scss";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";

function BarAndLine() {
  const [state, setState] = useState({
    options: {
      colors: ["#165DFF", "#5DDADA"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });

  return (
    <div className="ChartContainer">
      <div className="row">
        <div className="col-4">
          <div className="chartHead">
            <div className="upper">
              <div className="title">Ads Spends & Returns</div>
              <div className="option">
                Last 7 days <KeyboardArrowDownRoundedIcon className="icon" />
                <OpenWithIcon className="icon" style={{ fontSize: "small" }} />
              </div>
            </div>
            <div className="lower">
              <div className="options">
                <div className="optionTitle">Ads Spends</div>
                <div className="detail">
                  $14,5k{" "}
                  <div
                    className="back"
                    style={{
                      display: "flex",
                      padding: "8px",
                      alignItems: "center",
                    }}
                  >
                    <YouTubeIcon style={{ color: "red" }} />
                  </div>
                  19.9%
                </div>
              </div>
              <div className="options">
                <div className="optionTitle">Revenue</div>
                <div className="detail">
                  $1.8M
                  <div
                    className="back"
                    style={{
                      display: "inline",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <NorthEastIcon
                      style={{
                        fontSize: "medium",
                        backgroundColor: "green",
                        color: "White",
                      }}
                    />
                  </div>
                  9.9%
                </div>
              </div>
              <div className="options">
                <div className="optionTitle">ACOS</div>
                <div className="detail">
                  51.6%
                  <div
                    className="back"
                    style={{
                      display: "inline",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <NorthEastIcon
                      style={{
                        fontSize: "medium",
                        backgroundColor: "green",
                        color: "White",
                      }}
                    />
                  </div>
                  6.9%
                </div>
              </div>
            </div>
          </div>
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="400"
            className="chartsD"
          />
        </div>
        <div className="col-4">
          <div className="chartHead">
            <div className="upper">
              <div className="title">Click Through Rate & Clicks</div>
              <div className="option">
                Last 7 days <KeyboardArrowDownRoundedIcon className="icon" />
                <OpenWithIcon className="icon" style={{ fontSize: "small" }} />
              </div>
            </div>
            <div className="lower">
              <div className="options">
                <div className="optionTitle">impression</div>
                <div className="detail">
                  10.5M{" "}
                  <div
                    className="back"
                    style={{
                      display: "flex",
                      padding: "8px",
                      alignItems: "center",
                    }}
                  >
                    <YouTubeIcon style={{ color: "red" }} />
                  </div>
                  19.9%
                </div>
              </div>
              <div className="options">
                <div className="optionTitle">Clicks</div>
                <div className="detail">
                  10.5K
                  <div
                    className="back"
                    style={{
                      display: "inline",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <NorthEastIcon
                      style={{
                        fontSize: "medium",
                        backgroundColor: "green",
                        color: "White",
                      }}
                    />
                  </div>
                  9.9%
                </div>
              </div>
              <div className="options">
                <div className="optionTitle">CTR</div>
                <div className="detail">
                  0.16%
                  <div
                    className="back"
                    style={{
                      display: "inline",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <NorthEastIcon
                      style={{
                        fontSize: "medium",
                        backgroundColor: "green",
                        color: "White",
                      }}
                    />
                  </div>
                  9.9%
                </div>
              </div>
            </div>
          </div>
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="400"
            className="chartsD"
          />
        </div>
        <div className="col-4">
          <div className="chartHead">
            <div className="upper">
              <div className="title">Conversation Rate & Order</div>
              <div className="option">
                Last 7 days <KeyboardArrowDownRoundedIcon className="icon" />
                <OpenWithIcon className="icon" style={{ fontSize: "small" }} />
              </div>
            </div>
            <div className="lower">
              <div className="options">
                <div className="optionTitle">CVR</div>
                <div className="detail">
                  5.3%
                  <div
                    className="back"
                    style={{
                      display: "inline",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <SouthEastIcon
                      style={{
                        fontSize: "medium",
                        backgroundColor: "red",
                        color: "White",
                      }}
                    />
                  </div>
                  19.9%
                </div>
              </div>
              <div className="options">
                <div className="optionTitle">Orders</div>
                <div className="detail">
                  10K
                  <div
                    className="back"
                    style={{
                      display: "inline",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <NorthEastIcon
                      style={{
                        fontSize: "medium",
                        backgroundColor: "green",
                        color: "White",
                      }}
                    />
                  </div>
                  9.9%
                </div>
              </div>
            </div>
          </div>
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="400"
            className="chartsD"
          />
        </div>
      </div>
    </div>
  );
}

export default BarAndLine;
