import React from "react";

import "./App.scss";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: []
    };
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

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts contacts={this.state.contacts} />
      </React.Fragment>
    );
  }
}

export default App;
