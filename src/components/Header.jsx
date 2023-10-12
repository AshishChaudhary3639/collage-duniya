// src/components/Header.js
import React, { useEffect, useState } from "react";
import { Navbar, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css"; // Add your custom CSS for the header styling
import { BsSearch } from "react-icons/bs";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";
import { FaMagic } from "react-icons/fa";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { BsRecordCircleFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selctedGoalMenu, setSelectedGoalMenu] = useState(false);
  const [allCourse, setAllCourse] = useState(false);
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const navigation=useNavigate()
  const images = [
    "https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232499.webp?mode=stretch",
    "https://images.collegedunia.com/public/asset/img/homepage/banner/Shri1642233244.webp?mode=stretch",
    "https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232971.webp?mode=stretch",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="conatiner">
      <header
        className="header"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div
          id="overlayer"
          style={{
            backgroundColor: "#0000007a",
            height: "500px",
            width: `100%`,
          }}
        >
          <Navbar bg="dark" data-bs-theme="dark">
            <div className="nav">
              <div className="">Logo</div>
              <div
                className="selectGoal"
                onClick={() => setSelectedGoalMenu(!selctedGoalMenu)}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Select Goal
                  {selctedGoalMenu ? (
                    <PiCaretUpBold fontSize={`12px`} fontWeight={`bolder`} />
                  ) : (
                    <PiCaretDownBold fontSize={`12px`} fontWeight={`bolder`} />
                  )}
                </span>
                <div
                  className="selectedDropdown"
                  style={{ display: `${selctedGoalMenu ? "block" : "none"}` }}
                ></div>
              </div>
              <div className="search">
                <BsSearch color="lightgray" />
                <input type="text" placeholder="search" />
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <FaMagic fontSize={`25px`} />
                <div>
                  <div>Write a Review</div>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "orange",
                      borderRadius: "2px",
                    }}
                  >
                    Get up &#8377;500*
                  </button>
                </div>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  justifyContent: "center",
                }}
                onClick={()=>navigation('/register')}
              >
                <CgMenuGridO fontSize={`40px`} />
                <div >Register</div>
              </div>
              <div
                className=""
                style={{
                  border: "1px solid lightgray",
                  borderRadius: "50%",
                  padding: "10px",
                  width: "25px",
                  height: "25px",
                  textAlign: "center",
                }}
              >
                <MdOutlineNotificationsNone fontSize={`20px`} />
              </div>
              <div
                className=""
                style={{
                  height: "auto",
                  width: "45px",
                  borderRadius: "20px",
                  border: "1px solid lightgray",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <AiOutlineMenu fontSize={`20px`} />
                <BsRecordCircleFill fontSize={`20px`} color="orange" />
              </div>
            </div>
          </Navbar>
          <Row className="courses">
            <div onClick={() => setAllCourse(true)}>All Course</div>
            <div>B Tech</div>
            <div>MBA</div>
            <div>M Tech</div>
            <div>MBBS</div>
            <div>B.com</div>
            <div>B.sc</div>
            <div>{"B.sc(Nurshing)"}</div>
            <div>BA</div>
            <div>BBA</div>
            <div>BCA</div>
          </Row>
          <div className="findCollageSearch">
            <div className="typing">Ashish Chaudhary</div>
            <div className="inputButtons">
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  fontSize: "16px",
                  color: "lightgray",
                  width: "95%",
                  textAlign: "left",
                  height: "50px",
                }}
                onClick={() => setShowSearchContainer(true)}
              >
                <BsSearch />
                {`Search for colages, exams, courses and more...`}
              </button>
              <button
                className="searchButton"
                style={{
                  border: "none",
                  backgroundColor: "orange",
                  borderRadius: "0px 5px 5px 0px",
                  width: "5%",
                  height: "50px",
                }}
              >
                Search
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <div className="recentVisit">
                <div>Your recent visits</div>
                <div>BBUA, Lucknow</div>
                <div>B.sc</div>
              </div>

              <div className="needCounselling">
                <button>Need Counselling</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Find collages, exams button search box start */}

      <div
        className="searchContainer"
        style={{ display: `${showSearchContainer ? "block" : "none"}` }}
      >
        <div className="findSearchBox">
          <input
            type="text"
            placeholder="Find collages, exams, courses and more..."
          />
          <CgClose
            fontSize={`30px`}
            onClick={() => setShowSearchContainer(false)}
          />
        </div>
        <div className="searchSuggetion"></div>
      </div>

      {/* Side navigation section code start here */}
      <div
        className="sideNav"
        style={{ display: `${allCourse ? "block" : "none"}` }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10px",
            alignItems: "center",
          }}
        >
          <div>All Courses</div>
          <GrClose onClick={() => setAllCourse(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
