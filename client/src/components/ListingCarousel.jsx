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
      <section className="container p-t-3">
        <div className="row">
          <div className="col-lg-12">
            <h1>Similar Sales</h1>
          </div>
        </div>
        <section
          className="carousel slide"
          data-ride="carousel"
          id="postsCarousel"
        >
          <div
            id="recipeCarousel"
            className="carousel slide w-100"
            data-ride="carousel"
          >
            <div className="container p-t-0 m-t-2 carousel-inner">
              <div className="row row-equal carousel-item active m-t-0">
                {listings.map(listing => (
                  <div className="col-md-4" key={listing._id}>
                    {/* <div className="image-container"> */}
                    <Listing listing={listing} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default ListingCarousel;
