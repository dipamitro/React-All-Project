import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <Typography sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        Tab {value + 1} content
      </Typography>
    </Box>
    <Swiper
     slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div
                  className="swiper-slide"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={6}
                >
                  <a
                    title="Up to 75% discount only for Bkash users on Domestic Hotels & Resorts"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/Hotel-bkash"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="Up to 75% discount only for Bkash users on Domestic Hotels & Resorts image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/bKash-15281281%29.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            Up to 75% discount only for Bkash users on Domestic
                            Hotels &amp; Resorts
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o">
                            Up to 75% discount only for Bkash users
                          </p>
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide><div
                  className="swiper-slide"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={7}
                >
                  <a
                    title="ShareTrip introduces Bangladesh's first ever travel credit card SkyTrip"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/SkyTrip"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="ShareTrip introduces Bangladesh's first ever travel credit card SkyTrip image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/SkyTrip-thumb.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            ShareTrip introduces Bangladesh's first ever travel
                            credit card SkyTrip
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o">
                            Bangladesh's first-ever travel credit card 'SkyTrip'
                          </p>
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide> <div
                  className="swiper-slide"
                  data-swiper-slide-index={8}
                  style={{ width: "357.333px", marginRight: 20 }}
                >
                  <a
                    title="gpstar গ্রাহকদের ফ্লাইট টিকেটে জন্য ১২% পর্যন্ত ছাড়"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/FLYGPSTAR"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="gpstar গ্রাহকদের ফ্লাইট টিকেটে জন্য ১২% পর্যন্ত ছাড় image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/%E0%A7%A7%E0%A7%A8%25_%E0%A6%A1%E0%A6%BF%E0%A6%B8%E0%A6%95%E0%A6%BE%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%9F_B2C_Homepage_Thumbnail.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            gpstar গ্রাহকদের ফ্লাইট টিকেটে জন্য ১২% পর্যন্ত ছাড়
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o" />
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide> <div
                  className="swiper-slide"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={0}
                >
                  <a
                    title="Guess and comment to win Air Tickets, Hotel Stay and Many more"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/WC23-Traveller-of-the-match"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="Guess and comment to win Air Tickets, Hotel Stay and Many more image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/World_Cup_X_Restaurant__B2C_Home_Page_Thumbnail_714_x_334_%281%29_%281%29.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            Guess and comment to win Air Tickets, Hotel Stay and
                            Many more
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o">
                            Participate in our Traveller of the match campaign
                            to win gifts
                          </p>
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide> <div
                  className="swiper-slide"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={1}
                >
                  <a
                    title="Save up to 30% with Singapore Airlines"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/SQ-EARLY-SAVER"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="Save up to 30% with Singapore Airlines image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/Singapore_30%25offer_B2C_Homepage_thumbnail_%281%29.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            Save up to 30% with Singapore Airlines
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o">
                            Early Savers Fares up to 30%
                          </p>
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide><div
                  className="swiper-slide swiper-slide-prev"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={2}
                >
                  <a
                    title="Medical Tourism is now Available on ShareTrip"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/Medical-Tourism"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="Medical Tourism is now Available on ShareTrip image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/1_%282%29.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            Medical Tourism is now Available on ShareTrip
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o">
                            Available for India &amp; Thailand only
                          </p>
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide><div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={3}
                >
                  <a
                    title="up to 15% discount on the base fare of domestic flights"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/bkashdomestic"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="up to 15% discount on the base fare of domestic flights image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FbKash-15%2525-Discount-on-Flight_home-thumb_-Nov_%25281%2529_%25281%2529.png&w=750&q=75"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            up to 15% discount on the base fare of domestic
                            flights
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o">
                            Use cupon code: EXPLOREBD to enjoy up to 15%
                            discount on the base fare of domestic flight tickets
                          </p>
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide> <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={4}
                >
                  <a
                    title="Visit Saint Martin with Karnafuly Cruiseline"
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/KarnafulyCruiseline"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="Visit Saint Martin with Karnafuly Cruiseline image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/Karnafuly_Cruise_LineB2C_Home_page_Thumbnil_714x334.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            Visit Saint Martin with Karnafuly Cruiseline
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o">
                            Saint Martin is calling! Make your holiday more
                            exciting with Karnafuly Cruiseline...{" "}
                          </p>
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
        <SwiperSlide><div
                  className="swiper-slide"
                  style={{ width: "357.333px", marginRight: 20 }}
                  data-swiper-slide-index={5}
                >
                  <a
                    title="Flight Refund, Date Change & Void with Just a Tap! "
                    target="_blank"
                    className="round-r5wu0g"
                    href="#/promotions/Re-issue-Refund"
                  >
                    <div className="fst round-gtyssf">
                      <div className="fst round-hefgey">
                        <div className="fst round-sh6pe6">
                          <img
                            alt="Flight Refund, Date Change & Void with Just a Tap!  image"
                            loading="lazy"
                            width={357}
                            height={168}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src="./public/Flight_Refund_thumb.png"
                          />
                        </div>
                        <div className="fst round-1l2s0ig">
                          <svg
                            width={133}
                            height={108}
                            viewBox="0 0 133 108"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14749)">
                              <path
                                d="M130.555 16.6804C130.555 65.2815 91.1556 104.68 42.554 104.68C-6.04747 104.68 -45.4468 65.2815 -45.4468 16.6804C-45.4468 -31.9206 -6.04747 -71.3196 42.554 -71.3196C91.1556 -71.3196 130.555 -31.9206 130.555 16.6804ZM-19.0465 16.6804C-19.0465 50.7012 8.53299 78.2804 42.554 78.2804C76.5751 78.2804 104.155 50.7012 104.155 16.6804C104.155 -17.3403 76.5751 -44.9196 42.554 -44.9196C8.53299 -44.9196 -19.0465 -17.3403 -19.0465 16.6804Z"
                                fill="url(#paint0_linear_14_14749)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14749"
                                x1="-1.44636"
                                y1="-43.8196"
                                x2="77.5533"
                                y2="97.681"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.16" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity="0.04"
                                />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14749">
                                <rect
                                  width="132.001"
                                  height={108}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            width={90}
                            height={90}
                            viewBox="0 0 90 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_14_14745)">
                              <circle
                                cx="55.8447"
                                cy="111.899"
                                r="58.7617"
                                fill="url(#paint0_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                              <circle
                                cx="100.246"
                                cy="66.2156"
                                r="63.972"
                                fill="url(#paint1_linear_14_14745)"
                                fillOpacity="0.7"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_14_14745"
                                x1="26.4639"
                                y1="71.5005"
                                x2="79.2159"
                                y2="165.987"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_14_14745"
                                x1="68.2604"
                                y1="22.2349"
                                x2="125.69"
                                y2="125.099"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" stopOpacity="0.08" />
                                <stop
                                  offset={1}
                                  stopColor="white"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                              <clipPath id="clip0_14_14745">
                                <rect width={90} height={90} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="fst round-y9dl4h">
                          <h4 className="tripfst MuiTypography-h4 round-bmtfyk">
                            Flight Refund, Date Change &amp; Void with Just a
                            Tap!{" "}
                          </h4>
                          <p className="tripfst tripsec round-1mntw9o" />
                          <div className="fst round-tfpx51">
                            View Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div></SwiperSlide>
      </Swiper>
    </>


  );
};

export default TabComponent;

