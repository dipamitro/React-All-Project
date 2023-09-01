import React from "react";
import { Link } from "react-router-dom";
import FoodTableFatch from "./FoodTableFatch";
import EmployeeFatch from "./EmployeeFatch";
import CreateNewEmployee from "./CreateNewEmployee";
import SearchNav from "../PageRealatToAdmin/AdminDeshBoard/SearchNav";
import CreatNewButton from "../PageRealatToAdmin/AdminDeshBoard/CreatNewButton";
import SearchLefNav from "../PageRealatToAdmin/AdminDeshBoard/SearchLefNav";
import createEmployee from "../PageRealatToAdmin/AdminDeshBoard/CreateEmployee"
import CreateNewButtonForEmployee from "../PageRealatToAdmin/AdminDeshBoard/CreateNewButtonForEmployee";
function AllEmployeeList(props) {
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
                  <CreateNewButtonForEmployee />
                  <div className="row">
                    <div className="col-sm-12 col-lg-12">
                      <div className="card-hover-shadow-2x mb-3 card">
                        <div className="card-header-tab card-header">
                          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <h2>Employee List</h2>
                          </div>
                        </div>
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

export default AllEmployeeList;
