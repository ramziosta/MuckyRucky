import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const input = document.querySelectorAll("#first_name, #last_name");
    emailjs
      .sendForm(
        "service_eirar1m",
        "template_lb9v02w",
        form.current,
        "wbuyzv3SiIAVgnRc_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //add clear form
    input.value = "";
  };

  return (
    <>
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h1 style={{ color: "rgb(254, 79, 164)", marginTop: "100px" }}>
          Contact
        </h1>
        <hr className="w3-opacity" />

        <h2 className="w3-padding-16">Lets get in touch</h2>
        <p className="w3-wide">Email.Video.Phone.Social Media.In-person</p>
        <hr />
        <p> I would love to hear from you.</p>
        <p>
          Contact me and share your stories. Connect with me through all media
          outlets and book a time with me.
        </p>
      </div>
      <div
        className="w3-padding-32 w3-content w3-text-grey"
        id="contact"
        style={{ margin: "10px auto" }}
      >
        <h2>Contact Me</h2>
        <hr className="w3-opacity" />

        <div className="w3-section">
          <p>
            <a
              href="https://www.facebook.com/emilie.pons.10/"
              className="fa fa-facebook fa-fw w3-xxlarge w3-margin-right"
              style={{ color: "#3b5998", textDecoration: "none" }}
            >
              {" "}
            </a>{" "}
            Facebook
          </p>
          <p>
            <a
              href="https://www.instagram.com/emilistorytelling/"
              className="fa fa-instagram fa-fw w3-xxlarge w3-margin-right"
              style={{ color: "#e770ce", textDecoration: "none" }}
            >
              {" "}
            </a>{" "}
            Instagram
          </p>
          <p>
            <a
              href="https://twitter.com/emilie_pons"
              className="fa fa-twitter  fa-fw w3-xxlarge w3-margin-right"
              style={{ color: "#55acee", textDecoration: "none" }}
            >
              {" "}
            </a>{" "}
            Twitter
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/emiliepons/"
              className="fa fa-linkedin  fa-fw w3-xxlarge w3-margin-right"
              style={{ color: "#007bb5", textDecoration: "none" }}
            >
              {" "}
            </a>{" "}
            linkedin
          </p>
          <p>
            <a
              href="mailto:emilistorytelling@gmail.com "
              aria-hidden="true"
              className="fa fa-envelope mailto fa-fw w3-xxlarge w3-margin-right"
              style={{ color: "#fd2306" }}
            >
              {" "}
            </a>{" "}
            Email: emiliJessie@gmail.com
          </p>
        </div>

        {/* <!-- Image of location/map --> */}
        <br />
        <p>Send me a message:</p>

        <div className="turquoise w3-card w3-hover-shadow">
          <div className="pink">
            <form
              ref={form}
              onSubmit={sendEmail}
              action="/action_page.php"
              style={{
                border: "solid 4px rgb(250, 200,65)",
                padding: "25px",
              }}
              target="_blank"
            >
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  required
                  name="user_name"
                  placeholder="Name"
                />
              </p>
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="Email"
                  required
                  name="user_email"
                />
              </p>
              <p>
                <input
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="Subject"
                  required
                  name="Subject"
                />
              </p>
              <p>
                <textarea
                  className="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="Message"
                  required
                  name="message"
                />
              </p>
              <p>
                <button
                  type="submit"
                  value="send"
                  className="w3-button w3-light-grey w3-padding-large w3-margin-top"
                  style={{
                    border: "solid 4px rgb(250, 200,65)",
                    borderTopRightRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  Send{" "}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
