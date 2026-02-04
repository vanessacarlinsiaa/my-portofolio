import React, { useState } from "react";
import "./contact.css";

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "05f8410f-7feb-4632-8a5f-c4dfa542d164");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
    <form onSubmit={onSubmit}>
      <h1>Contact Me</h1>
      <div className="input-box">
            <h4>Name</h4>
            <input type="text" className="field" placeholder="Enter your name" name="name" required/>
      </div>

      <div className="input-box">
            <h4>Email</h4>
            <input type="email" className="field" placeholder="Enter your email" name="email" required/>
      </div>
      
      <div className="input-box">
            <h4>Message</h4>
            <textarea name="message" className="field mess" placeholder="Enter your message.." required/>
      </div>
      <button type="submit">Send Message</button>
      {result && <p>{result}</p>}
      </form>
    </section>
  );
};

export default Contact;
