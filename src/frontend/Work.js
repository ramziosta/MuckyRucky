import React from 'react'
import "../styles/work.css";
import Publications from "../components/Publications";
function Work() {
  return (
    <>
      <div>
        <body>
          <div className="header">
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>
          </div>
          <div >
          <div className="w3-padding-32 w3-content" id="portfolio">
        <h1 style={{ color: "rgb(254, 79, 164)", marginTop: "100px" }}>
         My work
        </h1>
        <hr className="w3-opacity" />
        <p className="w3-wide">Music.Culture.Politics</p>
  
      
      
      </div>
      <div
        className=" w3-content w3-text-grey"
        id="contact"
       
      >
        <hr className="w3-opacity" />
            <div className="work-header">
              <div id="intro" className="p-5 text-center bg-light">
                <h2 className="mb-3 work-title">
                  My complete archive of published work
                </h2>
                <p className="mb-3">
                  I have been wrinting since the early 2000, I have a large and
                  diverse body of work published here. This archive is where you
                  can find all of it, laid out in an easy to browse structure.{" "}
                </p>
               
              </div>
            </div>
            <hr />
</div>
<br />
            <Publications />
          </div>
        </body>
      </div>
    </>
  );
}

export default Work;
