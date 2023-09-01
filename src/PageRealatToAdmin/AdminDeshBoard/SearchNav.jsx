import React from "react";

function SearchNav(props) {
  return (
    <div className="app-header header-shadow">
      <div className="logo-src" />
      <div className="app-header__content">
        <div className="app-header-left">
          <div>
            <div className="search-wrapper">
              <div className="input-holder">
                <input
                  type="text"
                  placeholder="Type to search"
                  className="search-input"
                />
                <button className="search-icon">
                  <span />
                </button>
              </div>
              <button className="close" />
            </div>
          </div>
        </div>
        <div className="app-header-right">
          <div className="d-flex">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div
                      className="btn-group b-dropdown dropdown"
                      id="__BVID__8"
                    >
                      <button
                        aria-haspopup="true"
                        aria-expanded="false"
                        type="button"
                        className="btn btn-link dropdown-toggle p-0 mr-2"
                        id="__BVID__8__BV_toggle_"
                      >
                        <span>
                          <div className="icon-wrapper icon-wrapper-alt rounded-circle">
                            <img
                              width={42}
                              src="https://e1.pxfuel.com/desktop-wallpaper/732/405/desktop-wallpaper-cartoon-dp-boy-for-whatsapp-handsome-boy-cartoon-thumbnail.jpg"
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                        </span>
                      </button>
                      <div
                        role="menu"
                        tabIndex={-1}
                        className="dropdown-menu dropdown-menu-right dropdown-menu-lg"
                        aria-labelledby="__BVID__8__BV_toggle_"
                      >
                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                        >
                          Menus
                        </button>
                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                        >
                          Settings
                        </button>
                        <h6 tabIndex={-1} className="dropdown-header">
                          Header
                        </h6>
                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                        >
                          Actions
                        </button>
                        <div tabIndex={-1} className="dropdown-divider" />
                        <button
                          type="button"
                          tabIndex={0}
                          className="dropdown-item"
                        >
                          Dividers
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-left  ml-3 header-user-info">
                    <div className="widget-heading">Arica Moleurd</div>
                    <div className="widget-subheading">Bss Manager</div>
                  </div>
                  <div className="widget-content-right header-user-info ml-3">
                    <button
                      title
                      type="button"
                      className="btn btn-shadow p-1 btn-info btn-sm"
                      data-original-title="Tooltip Example"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="calendar-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="mr-1 ml-1 svg-inline--fa fa-calendar-alt fa-w-14"
                      >
                        <path
                          fill="currentColor"
                          d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                          className
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger close-sidebar-btn hamburger--elastic"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn btn-icon btn-icon-only btn-primary btn-sm"
          >
            <div className="btn-icon-wrapper">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ellipsis-v"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="svg-inline--fa fa-ellipsis-v fa-w-6"
              >
                <path
                  fill="currentColor"
                  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                  className
                />
              </svg>
            </div>
          </button>
        </span>
      </div>
    </div>
  );
}

export default SearchNav;
