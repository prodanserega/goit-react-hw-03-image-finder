import React, { Component } from "react";

import { toast } from "react-toastify";

import s from "./Searchbar.module.css";

export default class SearchBar extends Component {
  state = {
    value: "",
  };

  handleNameChange = (event) => {
    this.setState({ value: event.target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.value.trim() === "") {
      toast.error("Введите поисковый запрос");
      return;
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm__input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
