import { getImages } from "ApiService";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import appStyle from './style.module.css'
import { Modal } from "./Modal/Modal";
import { Component } from "react";



class App extends Component {
    state = {
      images: [],
      loading: false,
      page: 1,
      modalOpen: false,
      selectedImage: '',
      query: '',
      showBtn: false,
  };

  submitHandler = query => {
    this.setState({ images: [], page: 1, query });
  };

   searchImages = async () => {
    this.setState({ loading: true });

    try {
      const response = await getImages(this.state.query, this.state.page);

      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        showBtn: this.state.page < Math.ceil(response.totalHits / 12),
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

   componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        this.searchImages();
      } catch (error) {}
    }
  }

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = imageUrl => {
    this.setState({ modalOpen: true, selectedImage: imageUrl });
    document.body.style.overflow = 'hidden';
  };

  closeModal = () => {
    this.setState({ modalOpen: false, selectedImage: '' });
    document.body.style.overflow = '';
  };


  render() {

    const { images, loading, modalOpen, selectedImage, showBtn } = this.state;

    return (
      <div className={appStyle.appDiv}>
        <Searchbar onSubmit={this.submitHandler} />
        {loading && <Loader />}
        <ImageGallery images={images} openModal={this.openModal} />
        {showBtn && (
          <Button onLoadMore={this.loadMoreImages} hasMore={!loading} />
        )}
        <Modal
          isOpen={modalOpen}
          closeModal={this.closeModal}
          imageUrl={selectedImage}
          onOverlayClick={this.handleOverlayClick}
        />
      </div>
    )
  }

}

export default App
