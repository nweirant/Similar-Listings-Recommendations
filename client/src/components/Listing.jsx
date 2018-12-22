import React from "react";

const Listing = ({ listing }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-img-top card-img-top-250">
          <img className="img-fluid" src={listing.imageUrl} alt="Carousel 2" />
        </div>
        <div className="card-block p-b-2">
          <div>SALE IN {listing.city}</div>
          <div>{listing.address}</div>
          <div>${Number(listing.price).toLocaleString("en")}</div>
          <div>
            {listing.bedNum}
            <span> Beds</span>
          </div>
          <div>
            {listing.bathNum}
            <span> Baths</span>
          </div>
          <div>
            {Number(listing.sqFootage).toLocaleString("en")}
            <span>
              {" "}
              ft<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
