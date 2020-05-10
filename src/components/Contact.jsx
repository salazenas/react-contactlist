import React from "react";

class Contact extends React.Component {
  render() {
    const {
      avatar,
      name,
      company,
      department,
      admissionDate,
      phone,
      country,
    } = this.props;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={avatar} alt="Avatar do contato" />
        </span>
        <span className="contact__data">{name}</span>
        <span className="contact__data">{phone}</span>
        <span className="contact__data">{country}</span>
        <span className="contact__data">{admissionDate}</span>
        <span className="contact__data">{company}</span>
        <span className="contact__data">{department}</span>
      </article>
    );
  }
}

export default Contact;
