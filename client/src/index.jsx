import Axios from "axios";
import ListingCarousel from "./components/ListingCarousel.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
    this.getSimilarListings = this.getSimilarListings.bind(this);
  }
  componentDidMount() {
    this.getSimilarListings();
  }

  getSimilarListings(id) {
    Axios.get("/api/items/5").then(({ data }) => {
      console.log(data);
      this.setState({ listings: data });
    });
  }

  render() {
    return (
      <div>
        Hello
        <ListingCarousel listings={this.state.listings} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
