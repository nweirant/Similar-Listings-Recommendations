const homeHelpers = {
  chooseSubsetIds: id => {
    const numOfListings = 9;
    if (id < 25 ) {
      return homeHelpers.insertSubsetIds(0, 24, numOfListings, id);
    } else if (id < 50) {
      return homeHelpers.insertSubsetIds(25, 49, numOfListings, id);
    } else if (id < 75) {
      return homeHelpers.insertSubsetIds(50, 74, numOfListings, id);
    } else {
      return homeHelpers.insertSubsetIds(75, 99, numOfListings, id);
    }
  },

  insertSubsetIds: (min, max, numOfListings, id) => {
    const subset = [];
    const inserted = {};
    var i = 0;
    while (i < numOfListings) {
      var randomListing = Math.floor(Math.random() * (max + 1 - min)) + min;
      if (!inserted[randomListing] && randomListing !== id) {
        inserted[randomListing] = true;
        subset.push(randomListing);
        i++;
      }
    }
    console.log('subset', subset);
    return subset;
  }
};

module.exports = homeHelpers;
