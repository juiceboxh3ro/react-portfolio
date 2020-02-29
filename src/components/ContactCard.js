import React from 'react';
import { ContactWrap } from "./styles";

const ContactCard = () => {
  return (
    <ContactWrap>
      <form autoComplete="off">
        <section className="name">
          <input type="text" name="name"/>
          <br />
          <label class="input-label" htmlFor="name">Name</label>
        </section>

        <section className="email">
          <input type="text" required name="email"/>
          <br />
          <label class="input-label" htmlFor="email">Email</label>
        </section>

        <section className="subject">
          <input type="text" name="subject"/>
          <br />
          <label class="input-label" htmlFor="subject">Subject</label>
        </section>

        <section className="message">
          <label id="message-label" htmlFor="message">Message</label>
          <br />
          <textarea name="message" id="message"></textarea>
        </section>

        <input type="submit"/>
      </form>
    </ContactWrap>
  )
}

export default ContactCard;