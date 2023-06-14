import React from "react";
import "./SideBar.scss";
import CampaignIcon from "@mui/icons-material/Campaign";
import SortIcon from "@mui/icons-material/Sort";
const SideBar = () => {
  const data = [
    "Dashboard",
    "Catalogue",
    "Inventory",
    "Advertising",
    "Product intelligence",
    "Forecasting",
    "Report centre",
    "Reports",
    " Link accounts",
    "Settings",
    " Help",
  ];
  return (
    <div className="sidebar">
      <SortIcon className="sort" />
      {data.map((elm, index) => {
        return (
          <div className="elements" key={index}>
            {elm === "Advertising" ? (
              <>
                <div className="icon active ">
                  <CampaignIcon
                    style={{ color: "white", backgroundColor: "#7B4C9E" }}
                  />
                </div>
                {elm}
              </>
            ) : (
              <>
                <div className="icon hide"></div>
                {elm}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
