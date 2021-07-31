import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import getFetch from "../services/Api";
import SearchBar from "../Components/Searchbar/Searchbar";
import imageGallery from "./ImageGallery/ImageGallery";
//import imageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import LoaderSpiner from "../Components/Spinner/Loader";
import Button from "./button/button";
import Modal from "./modal/modal";

import s from "./App.module.css";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    largeImageURL: "",
    showModal: false,
    isLoading: false,
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.getImages();
    }
    if (this.state.images.length - prevState.images.length === 12) {
      this.setState({ button: true });
    }
  }

  handleFormSubmit = (searchQuery) => {
    this.setState({
      images: [],
      searchQuery: searchQuery,
      page: 1,
      error: null,
      showButton: false,
    });
  };

  getImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    getFetch(searchQuery, page)
      .then((images) => {
        if (images.length === 0) {
          this.setState({ showButton: false });
          toast.error(
            `Search result by "${searchQuery}' not successful. Enter the correct query.`
          );
          return;
        } else if (images.length <= 12) {
          this.setState({ showButton: false });
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => toast(error))
      .finally(() => {
        this.scrollDown();
        this.setState({ isLoading: false });
      });
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  modalImage = (largeImageURL) => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, largeImageURL, error, showButton } =
      this.state;
    return (
      <div className={s.App}>
        <ToastContainer autoClose={3000} position="top-left" />
        <SearchBar onSubmit={this.handleFormSubmit} />
        {error && <p className={s.Error}>{error}</p>}
        {images && (
          <imageGallery images={images} modalImage={this.modalImage} />
        )}
        {isLoading && <LoaderSpiner />}
        {showButton && !isLoading && <Button onClick={this.getImages} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
