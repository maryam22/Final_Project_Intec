import React from "react";
import contact from "../Contact2.png";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_v7c6bmj', 'template_ue2bf9r', e.target, 'user_BBeqYa8kVEaF7INscAiTb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Message Sent");
  }
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm" style={{ "textAlign": "center" }}>
          <h1
            style={{
              fontSize: "70px",
              marginTop: "50px",
              padding: "25px",
            }}
          >
            Contact Us
          </h1>
          
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5">
          <img
            src={contact}
            style={{ height: "100%", width: "100%", padding: "0" }}
          ></img>
        </div>
        <div className="col-sm" style={{"marginTop":"20px"}}>
          <form onSubmit={sendEmail} data-form-title="CONTACT US">
            <input type="hidden" data-form-email="true"></input>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                required=""
                placeholder="Name"
                data-form-field="Name"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                required=""
                placeholder="Email"
                data-form-field="Email"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="tel"
                class="form-control"
                name="phone"
                placeholder="Phone"
                data-form-field="Phone"
              ></input>
            </div>
            <div class="form-group">
              <textarea
                type="text"
                class="form-control"
                name="message"
                placeholder="Message"
                rows="7"
                data-form-field="Message"
              ></textarea>
            </div>
            <div>
              <button type="submit" class="btn btn-warning">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>     
    </div>
    <div>
    <Footer/>
    </div>
    </>
    
  );
};

export default Contact;