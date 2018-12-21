const Listing = ({ listing }) => {
  return (
    <div className="listing">
      <div>
        <img
          className="images"
          src={listing.imageUrl}
          height="225"
          width="300"
        />
      </div>
      <div className="details">
        <div>SALE IN {listing.city}</div>
        <div>{listing.address}</div>
        <div>{listing.price}</div>
        <div>{listing.bedNum}</div>
        <div>{listing.bathNum}</div>
        <div>{listing.sqFootage}</div>
      </div>
    </div>
  );
};

export default Listing;
