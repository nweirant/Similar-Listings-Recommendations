import Listing from "./Listing.jsx";

const ListingCarousel = ({ listings }) => {
  return (
    <ul>
      <h1>Similar Sales</h1>
      {listings.map(listing => (
        <div key={listing._id}>
          <Listing listing={listing} />
        </div>
      ))}
    </ul>
  );
};

export default ListingCarousel;
