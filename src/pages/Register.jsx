import React, { useState } from "react";
import styles from "./register.module.css";
import {
  FcClearFilters,
  FcGraduationCap,
  FcPlanner,
  FcAssistant,
  FcReading,
  FcEditImage,
} from "react-icons/fc";
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationPin, FaGraduationCap } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import axios from "axios";
import Testimonials from "../components/Testimonials";
import Swal from "sweetalert2";
const Register = () => {
  const [showCourseList, setShowCourseList] = useState(false);

  const [registerData, setRegistarData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    coursesInterested: "",
  });

  const handleChangeFormData = (e) => {
    setRegistarData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    console.log(registerData);
    axios
      .post(`http://localhost:8000/register`, registerData)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Register was successful!",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className={styles.registerContainer}>
      <div className={styles.admissionProcess}>
        <div>How Collageduniya helps you in Admission</div>
        <div className={styles.sections}>
          <div>
            <FcReading fontSize={`35px`} />
            <div>Brochure Details</div>
          </div>
          <div>
            <FcGraduationCap fontSize={`35px`} />
            <div>Brochure Details</div>
          </div>
          <div>
            <FcClearFilters fontSize={`35px`} />
            <div>Brochure Details</div>
          </div>
          <div>
            <FcAssistant fontSize={`35px`} />
            <div>Brochure Details</div>
          </div>
          <div>
            <FcReading fontSize={`35px`} />
            <div>Brochure Details</div>
          </div>
          <div>
            <FcPlanner fontSize={`35px`} />
            <div>Brochure Details</div>
          </div>
        </div>
        <div>What peaple says</div>
        <div className={styles.testimonials}>
          <div style={{ width: "90%", margin: "auto" }}>
            <Testimonials />
          </div>
        </div>
      </div>
      <div className={styles.registerForm}>
        <div className={styles.formHeaders}>
          <div className={styles.regTitleIcon}>
            <FcEditImage fontSize={`40px`} />
          </div>
          <div className={styles.regTitle}>
            <div
              style={{ color: "orange", fontSize: "18px", fontWeight: "bold" }}
            >
              Register Now To Apply
            </div>
            <div>Get details and latest updates</div>
          </div>
        </div>
        <hr />
        <form onSubmit={handleSubmitData}>
          <div className={styles.inputs}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
            >
              <BiSolidUser fontSize={`25px`} />
              <input
                type="text"
                name="fullName"
                value={registerData.fullName}
                placeholder="Full Name.."
                onChange={handleChangeFormData}
              />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
            >
              <MdEmail fontSize={`25px`} />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleChangeFormData}
              />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
            >
              <BsTelephoneFill fontSize={`25px`} />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={registerData.mobile}
                onChange={handleChangeFormData}
              />
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
            >
              <FaLocationPin fontSize={`25px`} />
              <input
                type="text"
                name="city"
                placeholder="Location, City"
                value={registerData.city}
                onChange={handleChangeFormData}
              />
            </div>
            <div
              style={{ position: "relative" }}
              className={styles.courseListInputParent}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
                onClick={() => setShowCourseList(!showCourseList)}
              >
                <FaGraduationCap fontSize={`25px`} />
                <input
                  type="text"
                  placeholder="Courses"
                  name="coursesInterested"
                  value={registerData.coursesInterested}
                  onChange={handleChangeFormData}
                />
              </div>
              <div
                className={styles.coursesList}
                style={{ display: `${showCourseList ? "block" : "none"}` }}
              >
                <div>
                  <div>{`BE/B.Tech - (Technology)`}</div>
                </div>
                <div>
                  <div>{`MBA/PGDM - Mastars (Business Admistrations)`}</div>
                </div>
                <div>
                  <div>{`BBA/BBM - Bachelors (Business Admistrations)`}</div>
                </div>
                <div>
                  <div>{`B.Com - Bachelors (Commerce)`}</div>
                </div>
                <div>
                  <div>{`B.A. - Bachelors (Arts)`}</div>
                </div>
                <div>
                  <div>{`M.A. - Master (Arts)`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.termsMessage}>
            <div style={{ display: "flex", marginTop: "1rem" }}>
              By submiting this form, you accept and agree to our{"  "}
              <span style={{ color: "skyblue" }}>{" Terms of Use."}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <div style={{ color: "orange" }}>
              Already Registered? Click here to login
            </div>
            <input
              className={styles.submitButton}
              type="submit"
              style={{
                border: "none",
                backgroundColor: "orange",
                color: "white",
                width: "150px",
                padding: "10px 0px",
                borderRadius: "5px",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
