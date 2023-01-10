import React from "react";
import "../styles/Podcast.css";

function Podcast() {
  return (
    <>
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h1 style={{ color: "rgb(254, 79, 164)", marginTop: "100px" }}>
          Podcast
        </h1>
        <hr className="w3-opacity" />

        <h2 className="w3-padding-16">Listen</h2>
        <br />
        <p className="w3-wide">Music.Culture.Politics</p>
        <hr />
        <br />
        <p>
          {" "}
          I am the producer and digital journalist for these series of Podcasts.
          This is a series of episodes for the Foreign Press Association.
        </p>
      </div>

      <div className="container ">
        <iframe
          title="podcast"
          src="https://open.spotify.com/embed/episode/2WsIxLtGuK1GvyefpJ1YIQ"
          width="100%"
          height="232"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      <div
        className="w3-padding-32 w3-content w3-text-grey"
        id="contact"
        style={{ margin: "10px auto" }}
      >
        <h2>Watch</h2>
        <hr className="w3-opacity" />

        <div className="container ">
          <div className="video">
            <iframe
              class="responsive-iframe  "
              title="podcast-iframe"
              src="https://www.youtube.com/embed/aL6frL6_ntk"
            ></iframe>
          </div>
        </div>

        <div className="container">
          <div className="video">
            <iframe
              class="responsive-iframe"
              title="podcast-iframe"
              src="https://www.youtube.com/embed/ockA-fpFmLI"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcast;
