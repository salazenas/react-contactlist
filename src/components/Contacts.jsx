import React from "react";
import Contact from "./Contact";
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

class Contacts extends React.Component {
  getHeaders() {
    return (
      <div className="contacts__header">
        <span className="contact__data">Nome</span>
        <span className="contact__data">Telefone</span>
        <span className="contact__data">País</span>
        <span className="contact__data">Empresa</span>
        <span className="contact__data">Departamento</span>
        <span className="contact__data">Admissão</span>
      </div>
    );
  }

  render() {
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          {this.getHeaders()}
          {this.props.contacts.map(({ id, ...data }) => (
            <Contact key={id} data={data} />
          ))}
        </section>
      </div>
    );
  }
}

Contacts.defaultProps = {
  contacts: [],
};

export default Contacts;
