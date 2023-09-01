import React from 'react'

function App4sider(props) {
  return (
    <div>   <section
    className="ps-container app-sidebar-scroll ps ps--theme_default"
    data-ps-id="5b96dddf-4edd-a188-3f8b-ea67765c91ba"
  >
    <div
      className="v-sidebar-menu vsm-default"
      style={{ width: "350px" }}
    >
      <div className="vsm-list">
        <div className="vsm-header">Employee</div>
        <div className="vsm-item first-item open-item parent-active-item">
          <a href="#" className="vsm-link">
            <i className="vsm-icon icon-gradient bg-tempting-azure ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                font-size="1.375rem"
                class="iconify iconify--bx"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"
                ></path>
              </svg>
            </i>
            <span className="vsm-title">
              <Link to={"/adminDeshBoard"}> Dashboards</Link>
            </span>
          </a>
         
        </div>
        <div
          className="vsm-item first-item"
          style={{ background: " rgb(234, 255, 244)" }}
        >
          <a href="#" className="vsm-link">
            <i className="vsm-icon icon-gradient bg-tempting-azure ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                font-size="1.375rem"
                class="iconify iconify--bx"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586l6 6V15l.001 5H6v-9.585l6-6.001z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2z"
                ></path>
              </svg>
            </i>
            <span className="vsm-title">
              <Link to={"/allEmployeeList"}>
                {" "}
                All Emplyee List
              </Link>
            </span>
          </a>
        </div>
        <div className="vsm-header">Food</div>
        <div className="vsm-item first-item">
          <a href="#" className="vsm-link">
            <i className="vsm-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </i>
            <span className="vsm-title">
              <Link to={"/allFoodList"}> All Food List</Link>
            </span>
          </a>
        </div>

        <div className="vsm-header">Table</div>
        <div className="vsm-item first-item">
          <a href="#widgets/chart-boxes-3" className="vsm-link">
            <i className="vsm-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                font-size="1.375rem"
                class="iconify iconify--bx"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                ></path>
              </svg>{" "}
            </i>
            <span className="vsm-title">
              <Link to={"/allTableList"}>Table List</Link>
            </span>
          </a>
        </div>
        <div className="vsm-item first-item">
          <a href="#widgets/chart-boxes-3" className="vsm-link">
            <i className="vsm-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                font-size="1.375rem"
                class="iconify iconify--bx"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                ></path>
              </svg>{" "}
            </i>
            <span className="vsm-title">
              <Link to={"/emplyeeAsingTable"}>
                Emplyee & Table
              </Link>
            </span>
          </a>
        </div>
        <div className="vsm-header">Order</div>
        <div className="vsm-item first-item">
          <a href="#" className="vsm-link">
            <i className="vsm-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z" />
              </svg>
            </i>
            <span className="vsm-title">
              <Link to={"/orderFood"}>Order Food</Link>
            </span>
          </a>
        </div>
        <div className="vsm-header">Charts</div>
        <div className="vsm-item first-item">
          <a href="#charts/Log Out" className="vsm-link">
            <i className="vsm-icon ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                font-size="1.375rem"
                class="iconify iconify--bx"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                ></path>
              </svg>{" "}
            </i>
            <span className="vsm-title">Log Out</span>
          </a>
        </div>
      </div>
      <button className="collapse-btn" />
    </div>
    <div
      className="ps__scrollbar-x-rail"
      style={{ left: "0px", bottom: "0px" }}
    >
      <div
        className="ps__scrollbar-x"
        tabIndex={0}
        style={{ left: "0px", width: "0px" }}
      />
    </div>
    <div
      className="ps__scrollbar-y-rail"
      style={{ top: "0px", right: "0px" }}
    >
      <div
        className="ps__scrollbar-y"
        tabIndex={0}
        style={{ top: "0px", height: "0px" }}
      />
    </div>
  </section></div>
  )
}

export default App4sider