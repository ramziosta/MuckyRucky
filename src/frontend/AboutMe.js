import React from 'react'
import ccc from "../images/EP.jpg";
import "../styles/AboutMe.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <div
        className="w3-sidebar w3-hide-medium w3-hide-small"
        style={{ width: "40%" }}
      >
       
       <div className="turquoise">
       <div className="pink">
          <div className="bgimg"></div>
        </div>
        </div>
      </div>

      <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>
        <header
          className="w3-container w3-center"
          style={{ padding: "128px 16px" }}
          id="home"
        >
          <h1 className="w3-jumbo">
            <b>Emilie & Jessie</b>
          </h1>
          <p
            style={{
              marginTop: "25px",
              paddingBottom: "10px",
              fontSize: "1.5rem",
            }}
          >
            Journalists and Content Creators
          </p>
          <img
            src={ccc}
            alt="MEEEE"
            className="w3-image w3-hide-large w3-hide-small w3-round"
            style={{ display: "block", width: "50%", margin: "auto" }}
          />
          <img
            src={ccc}
            alt="HIIIIIII"
            className="w3-image w3-hide-large w3-hide-medium w3-round"
            width="1000"
            height="1333"
          />
          <Link to="/Contact"
            className="w3-button w3-light-grey w3-padding-large w3-margin-top"
            style={{
              border: "solid 4px rgb(250, 200,65)",
              borderTopRightRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            Contact Us
          </Link>
        </header>

        <div className="w3-padding-32 w3-content" id="portfolio">
          <h1 style={{ color: "rgb(254, 79, 164)", marginLeft:"30px" }}>About Us</h1>
          <hr className="w3-opacity" />
        </div>

        <div
          className="w3-content w3-justify w3-text-grey w3-padding-32 about"
          id="about"
        >
          <h2>About</h2>
          <hr className="w3-opacity" />
          <p>
            {" "}
            I am a digital journalist and an audio producer. our stories have
            been featured on The World (on PRI), TRT World, NPR and in
            JazzTimes. I have also filed for AFP and DownBeat magazine.
          </p>
          <p>
            I studied English at La Sorbonne, in Paris, Creative Writing at the
            City College of New York and Journalism at the Craig Newmark School
            of Journalism, in New York.
          </p>
          <p>
            {" "}
            I was trained as a classical pianist in France, but I can also play
            some jazz! I love food, music, dance and kung fu.
          </p>
          <p>
            I speak English, Spanish and French and I am learning (slowly!)
            Arabic and Turkish.{" "}
          </p>
          <h2 className="w3-padding-16">our Work</h2>
          <br />
          <p className="w3-wide">Music.Culture.Politics</p>
          <hr />
          <br />
          <p>
            {" "}
            I have worked for NPR, Chamber Music Magazine, JazzTimes and I
            currently work for PRI and TRT World.
          </p>
          <p>
            our work is at the intersection of culture and politics, with stories
            such as "Kurdish Music as Protest, for Radio DW, which features
            Kurdish musicians in Turkey, or our Chamber Music magazine data story
            entitled "An Invisible Wall." which describes the impact of Trump’s
            immigration policies on artistic diversity in the US.
          </p>
          <br />
          <p>
            {" "}
            I have also written for the South Bronx publication the Mott Haven
            Herald about Stephanie Sinclair’s photography work on child brides
            in various parts of the world such as Afghanistan, India or Yemen.
          </p>
          <br />
          <p>
            {" "}
            As a board member of the New York Foreign Press Association, I have
            moderated webinars on Covid and musicians. I have also co-hosted a
            webinar on the coverage of the Syrian War and I am about to launch
            the first FPA’s podcast.
          </p>

          <h2 className="w3-padding-16">Entrepreneurship</h2>
          <br />
          <p className="w3-wide">Hot House Jazz</p>
          <hr />
          <br />
          <p>
            In 2015, I launched the latin jazz section (“The Latin Side”) of the
            East Coast magazine Hot House Jazz, and I ran the section until
            2017.
          </p>

          <br />

          <h2 className="w3-padding-16">
            Where I have worked around the world
          </h2>
          <br />
          <p className="w3-wide">The U.S. 🇺🇸</p>
          <hr />
          <br />
          <p>
            Los Angeles, Chicago, Detroit, Monterrey, New York, Miami, San Juan
            (I have either covered music festivals or just shows in these
            cities).
          </p>
          <br />

          <p className="w3-wide">Mexico 🇲🇽</p>
          <hr />
          <br />
          <p>
            {" "}
            I covered the Guadalajara jazz festival and the Riviera Maya Jazz
            Festival. I have also conducted tons of interviews and done archival
            work (for our Chavela book) in Mexico City.
          </p>

          <br />
          <p className="w3-wide">Canada 🇨🇦</p>
          <hr />
          <br />
          <p>I have covered the Montreal jazz festival many times.</p>

          <br />
          <p className="w3-wide">Turkey 🇹🇷</p>
          <hr />
          <br />
          <p>
            I have produced audio pieces on Kurdish music and Turkish jazz (I
            know, sounds crazy but there is such a thing as Turkish jazz...and
            some of it is good! ). I have worked in Istanbul but also spent time
            in Diyarbakir and Mardin with a Kurdish musician. I also did some
            reporting in Gümüšlük.
          </p>

          <br />
          <p className="w3-wide">Lebanon 🇱🇧</p>
          <hr />
          <br />
          <p>I did a piece on a Syrian metal band in Beirut. Very cool.</p>

          <br />
          <p className="w3-wide">Jordan 🇯🇴</p>
          <hr />
          <br />
          <p>I did ma piece on The Royal Jordanian Orchestra. </p>

          <br />
          <p className="w3-wide">Panama 🇵🇦</p>
          <hr />
          <br />
          <p>I covered the Panama jazz festival in 2011.</p>

          <br />

          <p className="w3-wide">Spain 🇪🇸</p>
          <hr />
          <br />
          <p>
            I did a couple of interviews in Spain for our book. It was in Madrid
            and in Cádiz.{" "}
          </p>
          <br />
          <p className="w3-wide">France 🇫🇷</p>
          <hr />
          <br />
          <p>I have covered the Marciac Jazz festival (for JazzTimes).</p>
          <br />

          <h2 className="w3-padding-16">Panel Moderation</h2>
          <br />
          <p className="w3-wide">The Foreign Press Association</p>
          <hr />
          <br />
          <p>
            I moderate on April 14, 2020 panels for the{" "}
            <a
              href="https://www.youtube.com/watch?v=o2qZOs-71Fw"
              ClassName="extra"
            >
              FPA{" "}
            </a>
            organization
          </p>
          <p>
            On April 29, 2021, I co-hosted with FPA President Ian Williams the
            webinar:{" "}
            <a
              href="https://www.youtube.com/watch?v=ockA-fpFmLI"
              ClassName="extra"
            >
              Syria - Misinformation and the War for Truth with Dr. Idrees
              Ahmad.{" "}
            </a>
          </p>
          <br />
          <p className="w3-wide">IFC Center</p>
          <hr />
          <br />
          <p>
            On April 14th 2020, at{" "}
            <a
              href="https://www.ifccenter.com/films/playing-lecuona/"
              class="extra"
            >
              The IFC Center
            </a>{" "}
            I moderated a panel with Michel Camilo.
          </p>

          <br />

          <h2 className="w3-padding-16">I believe</h2>
          <br />
          <p>
            I believe every culture has a sound, and that is what I am
            interested in reporting on. I am interested in showing what sounds
            mean in various cultures.
          </p>
          <hr />
          <br />

          <br />
          <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section bg-dark">
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">40+</span>
              <br />
              Media Outlets
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">80+</span>
              <br />
              Projects Done
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span>
              <br />
              Students
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span>
              <br />
              Interviews
            </div>
          </div>

          <Link to="/Contact"
            className="w3-button w3-light-grey w3-padding-large w3-section"
            style={{
              border: "solid 4px rgb(250, 200,65)",
              borderTopRightRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
          >
            Contact Me
          </Link>

          <h2 className="w3-padding-16">Services</h2>
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <ul className="w3-ul w3-center w3-card w3-hover-shadow">
                <li
                  className="w3-dark-grey w3-xlarge w3-padding-32"
                  style={{
                    background:
                      "linear-gradient(22deg, rgba(250,200,65,1) 36%, rgba(254,79,164,1) 70%)",
                  }}
                >
                  Creative Work
                </li>
                <li className="w3-padding-16">Filming</li>
                <li className="w3-padding-16">Video Editing</li>
                <li className="w3-padding-16">Photography</li>
                <li className="w3-padding-16">
                  {" "}
                  Audio Recording and Processing
                </li>
                <li className="w3-padding-16">
                  <h2>Diverse</h2>
                  <span className="w3-opacity">Prolific</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <Link to="/Contact"
                    className="w3-button w3-white w3-padding-large"
                    style={{
                      border: "solid 4px rgb(250, 200,65)",
                      borderTopRightRadius: "8px",
                      borderBottomLeftRadius: "8px",
                    }}
                  >
                    Curious?
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w3-half">
              <ul className="w3-ul w3-center w3-card w3-hover-shadow">
                <li
                  className="w3-black w3-xlarge w3-padding-32"
                  style={{
                    background:
                      "linear-gradient(22deg, rgba(20,25,50,1) 0%, rgba(12,140,160,1) 100%)",
                  }}
                >
                  Journalism and Education
                </li>
                <li className="w3-padding-16">
                  Reporting, Interviewing and Moderating
                </li>
                <li className="w3-padding-16">
                  Writing, Translation and Editing
                </li>
                <li className="w3-padding-16">Reaserching</li>
                <li className="w3-padding-16">
                  Lecturing in Creative Nonfiction and Media Studies
                </li>
                <li className="w3-padding-16">
                  <h2>Insightful</h2>
                  <span className="w3-opacity">Intelligent</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <Link to="/Contact"
                    className="w3-button w3-white w3-padding-large "
                    style={{
                      border: "solid 4px rgb(12,140,160)",
                      borderTopRightRadius: "8px",
                      borderBottomLeftRadius: "8px",
                    }}
                  >
                    Apprentice?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
