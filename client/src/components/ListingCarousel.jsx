import React from "react";
import Listing from "./Listing.jsx";
import Axios from "axios";

class ListingCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
    this.getSimilarListings = this.getSimilarListings.bind(this);
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    this.getSimilarListings(id);
  }

  getSimilarListings(id) {
    Axios.get(`/api/items/${id}`).then(({ data }) => {
      this.setState({ listings: data });
    });
  }

  render() {
    const { listings } = this.state;
    return (
      <div className="contentBlock">
        <section className="container p-t-3">
          <div className="row">
            <div className="col-lg-12">
              <h1>Similar Sales</h1>
            </div>
          </div>
        </section>
        <section
          className="carousel slide"
          data-ride="carousel"
          id="postsCarousel"
          // data-interval="false"
        >
          <div class="SimilarBlock-actions jsSimilarListingsActions">
            <span>alo</span>
            <span class="SimilarBlock-actionsButton SimilarBlock-actionsButton--prev">
              <div class="CircleArrow CircleArrow--prev jsArrowLeft isInactive" />
            </span>
            <span class="SimilarBlock-actionsButton">
              <div class="CircleArrow jsArrowRight" />
            </span>
          </div>
          <div className="container p-t-0 m-t-2 carousel-inner">
            <div className="row row-equal carousel-item active m-t-0">
              {listings.slice(0, 3).map(listing => (
                <div className="col-md-4 cardSlide" key={listing._id}>
                  <Listing listing={listing} />
                </div>
              ))}
            </div>
            <div class="row row-equal carousel-item m-t-0">
              {listings.slice(3, 6).map(listing => (
                <div className="col-md-4 cardSlide" key={listing._id}>
                  <Listing listing={listing} />
                </div>
              ))}
            </div>
            <div class="row row-equal carousel-item m-t-0">
              {listings.slice(6, 9).map(listing => (
                <div className="col-md-4 cardSlide" key={listing._id}>
                  <Listing listing={listing} />
                </div>
              ))}
            </div>
          </div>
          {/* <div>
          <span className="prev">
            <div className="prevCircleArrow">::after</div>
          </span>
        </div> */}
        </section>
      </div>
    );
  }
}

export default ListingCarousel;
