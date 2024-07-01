import React from 'react'
import "./BasaltRebar.css"


import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import imag from "../../Assets/basalt-mining.jpg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import InvesterPage from '../InvesterPage/InvesterPage';



const BasaltRebar = () => {

  const leftParaRef = useRef(null);
  const centerParaRef = useRef(null);
  const rightParaRef = useRef(null);

  useEffect(() => {
    const leftPara = leftParaRef.current;
    const centerPara = centerParaRef.current;
    const rightPara = rightParaRef.current;

    const t1 = gsap.timeline();

    t1.fromTo(
      leftPara,
      { y: "50%", opacity: 0 },
      {
        // top: 250,
        y: 40,
        opacity: 1,
        duration: 1,
      }
    )
      // .fromTo(
      //   centerPara,
      //   { y: "50%", opacity: 0 },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 1,
      //   }
      // )
      .fromTo(
        rightPara,
        { y: "100%", opacity: 0 },
        {
          y: -50,
          opacity: 1,
          duration: 1,
        }
      );
  }, []);

  return (
    <div className=".Main_Layout_Container">
      <Navbar />
      <div className="BasaltRebar_main">
        <h4 className="BasaltRebar_main_h4" ref={leftParaRef}>
          Basalt Rebar
        </h4>
        {/* <h2 ref={centerParaRef} className="BasaltRebar_main_h2">
          Precast Concrete Element Products
        </h2> */}
        <div ref={rightParaRef} className="scroller_circle">
          <span className="scroller_circle_span">
            <i class="bi bi-arrow-down"></i>
          </span>
        </div>
      </div>
      <div className="BasaltRebar_main_content">
        <div className="BasaltRebar_main_content_right_box">
          <h4 className="BasaltRebar_main_content_right_box_h4">
            Basalt Rebar
          </h4>
          <p className="BasaltRebar_main_content_right_box_p">
            Navrattan USA Inc. owns over 169 acre of Basalt Quarry in Bozeman
            Montana, USA. Navrattan USA Inc is a global Endeavour and the
            organization is set up in Bozeman Montana, USA. Himansh Verma
            further added, it is effectively associated with the Basalt Rebar
            process. Basalt originates from magma.{" "}
          </p>
          <button className="btn btn-outline-warning">KNOW MORE</button>
          <div className="BasaltRebar_main_content_right_box_line"></div>
          <div className="BasaltRebar_main_content_right_box_tag_div">
            <p className="BasaltRebar_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Technology :{" "}
              </span>
              Gasification
            </p>
            <p className="BasaltRebar_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Company :{" "}
              </span>
              Navrattan Green Power CorporationLtd.
            </p>
            <p className="BasaltRebar_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Website :{" "}
              </span>
              www.navrattaninfra.com
            </p>
            <p className="BasaltRebar_main_content_right_box_tag">
              <span style={{ color: "#F9E488", fontSize: "16px" }}>
                Tags :{" "}
              </span>
              Gasification, Green Energy, Navrattan Group
            </p>
          </div>
        </div>
        <div className="BasaltRebar_main_content_left_box">
          <img src={imag} alt={imag} />
        </div>
      </div>
      <div className="BasaltRebar_Discription_content_div">
        <div className="BasaltRebar_Discription_content_header">
          <Link
            className="BasaltRebar_Discription_content_header_link"
            to="/Basalt_Rebar/Description"
          >
            Description
          </Link>
          <Link
            className="BasaltRebar_Discription_content_header_link"
            to="/Basalt_Rebar/benefits"
          >
            Sources of Basalt
          </Link>
        </div>
        <div className="BasaltRebar_Discription_content_outlet_div">
          <Outlet />
        </div>
        <InvesterPage />
        <Footer />
      </div>
    </div>
  );
}

export default BasaltRebar