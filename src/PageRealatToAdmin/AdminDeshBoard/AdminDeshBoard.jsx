import React from "react";
import { Link } from "react-router-dom";
import "./AdminDeshBoard.css";
import AllEmployeeList from "../../EmplyeeAndFoodInfo/AllEmployeeList";
import EmployeeFatch from "../../EmplyeeAndFoodInfo/EmployeeFatch";
import CreateNewEmployee from "../../EmplyeeAndFoodInfo/CreateNewEmployee";
import SearchNav from "./SearchNav";
import SearchLefNav from "./SearchLefNav";
import CreatNewButton from "./CreatNewButton";
function AdminDeshBoard(props) {
  return (
    <div>
      <div className="body2">
        <div id="app">
          <div className="app-container app-theme-white">
          <SearchNav />
          <SearchLefNav />
            <div className="app-main__outer">
              <div className="app-main__inner">
                <div>
                  <CreatNewButton />
                 

                  <div className="row">
                    <div className="col-sm-12 col-lg-12">
                      <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-body">
                          <EmployeeFatch />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-footer">
                <div className="app-footer__inner text-center">
                  DashboardBss.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDeshBoard;
