import React from "react";
import "../styles/Hero.css";
import npr from "../images/NPR.png";
import dw from "../images/dw.png";
import variety from "../images/variety.png";
import ttt from "../images/ttt.png";
import pri from "../images/pri.png";
import aatj from "../images/aatj.png";
import nycjr from "../images/nycjr.png";
import cmm from "../images/cmm.png";
import mhh from "../images/mhh.png";
import ifc from "../images/IFC.png";
import jt from "../images/jt.png";
import trt from "../images/TRT_World.svg";
import hpe from "../images/hpe.png";
import hero2 from "../images/Hero.jpeg";
import pro1 from "../images/pro1.jpeg";
import pro2 from "../images/pro2.jpeg";
import pro3 from "../images/pro3.jpg";
import pro4 from "../images/pro4.jpeg";
import {Link} from "react-router-dom";

export default function Hero() {
  return (
    <>
  

      <div class="bg-image"></div>

      <div class="bg-text">
        <h1>We are Emilie & Jessie</h1>
        <h2>Journalists and Content Creators</h2>
      </div>

      <div
        className="w3-container"
        style={{ padding: "128px 16px" }}
        id="about"
      >
        <h2 className="w3-center">Welcome to Our website</h2>
        <hr />
        <p className="w3-center w3-large">
          Our work has been feartured in top media outlets like NPR, DW, Variety,
          PRI World and many more...
        </p>

        <div className="row w3-center ">
          <div className="column">
            <img alt="" src={npr} />
            <img alt="" src={dw} />
            <img alt="" src={variety} />
            <img alt="" src={trt} />
            <img alt="" src={aatj} />
            <img alt="" src={ifc} />
            <img alt="" src={jt} />
            <img alt="" src={mhh} />
            <img alt="" src={pri} />
            <img alt="" src={ttt} />
            <img alt="" src={nycjr} />
            <img alt="" src={cmm} />
            <img alt="" src={hpe} />
          </div>
        </div>

        <div
          className="w3-row-padding w3-center"
          style={{ marginTop: "64px", padding: "128px 16px" }}
        >
          <div className="w3-row-padding">
            <div className="w3-col center text">
              <h2>Great stories make the world go round. Our guests are Insightful,  Inspiring and Empowering.</h2>
              <h4 style={{color:"rgb(12,140,160)"}}>Read.Listen.Watch.Think.Feel. </h4>
              
              <p>
                <Link to="/Podcast/"
                  className="w3-button  w3-margin-top button-center"
                  style={{
                    border: "solid 4px rgb(254, 79, 164)",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    borderTopRightRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  Podcast
                </Link>
                <h3>
                New episode is now available.
                <br />
              </h3>
              </p>
            </div>
            <div className="turquoise">
              <div className="yellow">
                <div className="w3-col m6 pink">
                  <img
                    className="img img-center w3-card w3-hover-shadow"
                    src={hero2}
                    alt=""
                    width="700"
                    height="394"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="w3-center center-text">
          Diverse Body of Work That Represents Connections to People and
          Attention to their work.
        </h2>
        <hr />
        <p className="w3-center w3-large">
          I worked with different media types and formats to give stories life
          and a voice.
        </p>

        <div className="w3-container w3-row w3-center w3-pink1 turquoise2 w3-padding-64 bottom">
          <div className="w3-quarter">
            <span className="w3-xxlarge">
              <Link to="/Podcast/"
                className="w3-button w3-padding-large w3-margin-top"
                style={{
                  border: "solid 4px rgb(250, 200,65)",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                Video
              </Link>
            </span>
            <br />
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">
              <Link to="/Podcast/"
                className="w3-button w3-padding-large w3-margin-top"
                style={{
                  border: "solid 4px rgb(250, 200,65)",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                Audio
              </Link>
            </span>
            <br />
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">
              <Link to="/Work/"
                className="w3-button  w3-padding-large w3-margin-top"
                style={{
                  border: "solid 4px rgb(250, 200,65)",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                Articles and Blogs
              </Link>
            </span>
            <br />
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">
              <Link to="/podcast/"
                className="w3-button w3-padding-large w3-margin-top"
                style={{
                  border: "solid 4px rgb(250, 200,65)",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                Digital Content
              </Link>
            </span>
            <br />
          </div>
        </div>

        <div
          className="w3-container"
          style={{ padding: "128px 16px" }}
          id="work"
        >

        <div className="w3-row-padding w3-center w3-section m-6">
          <div className="row-images">
            <div className="column-images">
              <img className="w3-card w3-hover-shadow" src={pro1} alt=""/>
              <img className="w3-card w3-hover-shadow"  src={pro2} alt="" />
            </div>
          </div>
          <div className="row-images">
            <div className="column-images ">
              <img className="w3-card w3-hover-shadow" src={pro3} alt=""/>
              <img className="w3-card w3-hover-shadow"  src={pro4} alt="" />
            </div>
          </div>
        
      </div>
      </div>
      </div>
    </>
  );
}
