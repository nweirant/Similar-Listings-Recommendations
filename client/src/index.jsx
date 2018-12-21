import ListingCarousel from "./components/ListingCarousel.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        Hello
        <ListingCarousel />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
