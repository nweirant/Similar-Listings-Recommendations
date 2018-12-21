import Listing from "./Listing.jsx";

const ListingCarousel = ({ listings }) => {
  return (
    <ul>
      {listings.map(listing => (
        <div key={listing._id}>
          <Listing listing={listing} />
        </div>
      ))}
    </ul>
  );
};

export default ListingCarousel;
