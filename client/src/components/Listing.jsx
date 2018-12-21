const Listing = ({ listing }) => {
  return (
    <div>
      <div>
        <img className="images" src={listing.imageUrl} />
      </div>
      <div>{listing.address}</div>
      <div>{listing.price}</div>
      <div>{listing.bedNum}</div>
      <div>{listing.bathNum}</div>
      <div>{listing.sqFootage}</div>
    </div>
  );
};

export default Listing;
