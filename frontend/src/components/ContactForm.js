import React from "react";

import "./style.scss";

export default function ContactForm() {
  return (
    <form name="contact" method="POST" action="#">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={email} />
      <label htmlFor="website">Current Website (if available)</label>
      <input type="text" name="website" value={website} />
      <label htmlFor="message">Message</label>
      <input type="text" name="message" value={message} />
      <label htmlFor="message">Message</label>
      <input type="text" name="message" value={message} />
    </form>
  );
}
