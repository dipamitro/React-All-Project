import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TableNoWithEmplyee from './TableNoWithEmplyee';
import SearchNav from '../PageRealatToAdmin/AdminDeshBoard/SearchNav';
import SearchLefNav from '../PageRealatToAdmin/AdminDeshBoard/SearchLefNav';
import CreatNewButton from '../PageRealatToAdmin/AdminDeshBoard/CreatNewButton';
const AllTableList = (props) => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetch('https://restaurantapi.bssoln.com/api/EmployeeTable/datatable')
    // promice mane ektar por ekta kaj kore
    // Api er data guloke json a convert kore
      .then(response => response.json())
    //   shei jeson a data k khuje ane check Api
      .then(json => setEmployeeData(json.data))
      .finally(() => {
      })
  }, [])
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
                          <TableNoWithEmplyee />
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

export default AllTableList;
