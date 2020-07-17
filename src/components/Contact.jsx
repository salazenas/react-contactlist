import React from "react";

class Contact extends React.Component {
  getFormattedDate(date) {
    return date.substr(0, 10).split('-').reverse().join('/');
  }

  render() {
    const {
      avatar,
      name,
      company,
      department,
      admissionDate,
      phone,
      country,
    } = this.props.data;

    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={avatar} alt="Avatar do contato" />
        </span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data">{department}</span>
        <span className="contact__data" data-testid="contact-date">{this.getFormattedDate(admissionDate)}</span>
      </article>
    );
  }
}

export default Contact;
