import React from "react";
import ContactForm from "./ContactForm";
import ContactAdress from "./ContactAdress";

function Contact() {
  return (
    <div className="w-full p-4 md:p-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8">
        {/* <ContactForm /> */}
        <ContactAdress />
      </div>
    </div>
  );
}

export default Contact;
