import React from "react";
import { Link } from "react-router-dom";
import FoodTableFatch from "./FoodTableFatch";
import CreateFood from "../PageRealatToAdmin/AdminDeshBoard/CreateFood";
import SearchNav from "../PageRealatToAdmin/AdminDeshBoard/SearchNav";
import SearchLefNav from "../PageRealatToAdmin/AdminDeshBoard/SearchLefNav";
import CreatNewButton from "../PageRealatToAdmin/AdminDeshBoard/CreatNewButton";
function AllFoodListCreatePart(props) {
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
                        <div className="card-header-tab card-header">
                          <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                            <i className="header-icon lnr-laptop-phone mr-3 text-muted opacity-6" />
                           Add New Food
                          </div>
                        </div>
                        <div className="card-body">
                         <CreateFood  />
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

export default AllFoodListCreatePart;


