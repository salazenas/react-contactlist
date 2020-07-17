import React from "react";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import blackPantherProfile from "./assets/img/profiles/black-panther-profile.jpg";
import yodaProfile from "./assets/img/profiles/yoda-profile.jpg";
import bruceProfile from "./assets/img/profiles/bruce-profile.jpg";

const fakeContacts = [
  {
    id: 1,
    avatar: yodaProfile,
    name: "Yoda",
    company: "Conselho Jedi",
    department: "Mestre",
    admissionDate: "10/10/2020",
    phone: "40028922",
    country: "Coruscant"
  },
  {
    id: 2,
    avatar: blackPantherProfile,
    name: "Pantera Negra",
    company: "Autonomo",
    department: "Herói",
    admissionDate: "12/10/2020",
    phone: "123456789",
    country: "Wakanda"
  },
  {
    id: 3,
    avatar: bruceProfile,
    name: "Bruce Wayne",
    company: "Wayne Enterprises",
    department: "Magnata",
    admissionDate: "01/01/1916",
    phone: "987654321",
    country: "Gotham"
  }
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: fakeContacts
    };

    this.filterContacts = this.filterContacts.bind(this);
  }

  /**
   * REST API unavailable
   */
  // componentDidMount() {
  //   fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   })
  //     .then((response) => response.json())
  //     .then((contacts) => {
  //       this.setState({
  //         contacts
  //       });
  //     });
  // }

  filterContacts({ filter, value }) {
    this.setState((prevState) => {
      return {
        filteredContacts: value.length
          ? prevState.contacts.filter(
            (contact) => contact[filter].indexOf(value) > -1
          )
          : prevState.contacts
      };
    });
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters filterContacts={this.filterContacts} />
        <Contacts
          contacts={this.state.filteredContacts || this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
