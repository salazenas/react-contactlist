import React from "react";

class Filters extends React.Component {
  constructor() {
    super();

    this.filters = {
      name: "Nome",
      country: "País",
      company: "Empresa",
      department: "Departamento",
      admissionDate: "Data de admissão",
    };

    this.state = {
      value: "",
      filter: "name",
      filtersOrder: {
        name: "ASC",
        country: "ASC",
        company: "ASC",
        department: "ASC",
        admissionDate: "ASC",
      },
    };

    this.filterContacts = this.filterContacts.bind(this);
    this.setOrder = this.setOrder.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.filterContacts();
    }
  }

  filterContacts() {
    this.props.filterContacts({ ...this.state });
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.filterContacts();
    }
  };

  handleFilter = (filter) => {
    if (this.state.filter !== filter) {
      this.setFilter(filter);
    }
  };

  setOrder = (filter) => {
    if (this.state.filter === filter) {
      return null;
    }

    this.setState({
      filtersOrder: {
        ...this.state.filtersOrder,
        [filter]: this.state.filtersOrder[filter] === "ASC" ? "DESC" : "ASC"
      },
    });
  };

  setFilter = (filter) => {
    this.setState({
      filter
    }, this.filterContacts);
  };

  getFilterButtons = () => {
    return Object.keys(this.filters).map((filter) => (
      <button
        className={
          this.state.filter === filter
            ? "filters__item is-selected"
            : "filters__item"
        }
        key={filter}
        onClick={() => this.handleFilter(filter)}
      >
        {this.filters[filter]}{" "}
        <i
          className={`fas fa-sort-${
            this.state.filtersOrder[filter] === "ASC" ? "down" : "up"
            }`}
          onClick={() => this.setOrder(filter)}
        />
      </button>
    ));
  };

  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.value}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange}
            />

            <button
              className="filters__search__icon"
              onClick={this.filterContacts}
            >
              <i className="fa fa-search" />
            </button>
          </div>

          {this.getFilterButtons()}
        </section>
      </div>
    );
  }
}

export default Filters;
