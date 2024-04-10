class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        grid1: {
          image: "assets/yt1.jpg",
          dp: "assets/dp1.jpg",
          title: "How to put an HTML website online (on the internet)",
          footer1: "SuperSimpleDev",
          footer2: "1.3M views · 1 year ago",
        },
        grid2: {
          image: "assets/yt2.webp",
          dp: "assets/dp2.jpg",
          title: "Web Development for Babies",
          footer1: "Brototype Malayalam",
          footer2: "443K views · 3 years ago",
        },
        grid3: {
          image: "assets/yt3.webp",
          dp: "assets/dp3.jpg",
          title: "Fastest way to become a Web Developer in 2024",
          footer1: "Sahil & Sarra",
          footer2: "316K views · 2 months ago",
        },
        grid4: {
          image: "assets/yt4.webp",
          dp: "assets/dp4.jpg",
          title: "My unconventional Coding Story | Self-Taught",
          footer1: "Travis Media",
          footer2: "470K views · 1 year ago",
        },
        grig5: {
          image: "assets/yt5.webp",
          dp: "assets/dp5.jpg",
          title: "Nothing on this list!",
          footer1: "Team members",
          footer2: "616K views · 6 months ago",
        },
      },
      sidebar: {
        s1: { a1: "assets/sidebar/explore.svg", name: "Explore" },
        s2: { a1: "assets/sidebar/home.svg", name: "Home" },
        s3: { a1: "assets/sidebar/library.svg", name: "Library" },
        s4: { a1: "assets/sidebar/originals.svg", name: "Originals" },
        s5: { a1: "assets/sidebar/subscriptions.svg", name: "Subscriptions" },
        s6: { a1: "assets/sidebar/youtube-music.svg", name: "YouTube Music" },
      },
    };
  }

  render() {
    return (
      <div className="body">
        <div className="header">
          <div className="left-section">
            <img
              className="hamburger-logo"
              src="assets/navBar logos/hamburger-logo.svg"
            />
            <img className="yt-logo" src="assets/navBar logos/yt-logo.jpg" />
          </div>
          <div className="middle-section">
            <input className="search-bar" placeholder="Search" />
            <button className="search-button">
              <img src="assets/navBAr logos/search-logo.svg" />
              <div className="tooltip">Search</div>
            </button>
            <button className="voice-button">
              <img src="assets/navBAr logos/voiceRecord-logo.svg" />
              <div className="tooltip">Voice Search</div>
            </button>
          </div>
          <div className="right-section">
            <img src="assets/navBar logos/upload-logo.svg" />
            <img src="assets/navBar logos/notification-logo.svg" />
            <div className="notification-count">3</div>

            <img src="assets/dp1.jpg" />
          </div>
        </div>
        <div className="sideBar">
          <div className="sidebar-items">
            {Object.values(this.state.sidebar).map((value, key) => (
              <div className="sidebar-item" key={key}>
                <img src={value.a1} alt={key} />
                <div className="sidebar-name">{value.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="layout">
          {Object.values(this.state.data).map((data, index) => (
            <div className="grid" key={index}>
              <div className="thumbnail">
                <img src={data.image} alt={data.title} />
                <div className="time">5:10</div>
              </div>
              <div className="textbox">
                <div className="dp_div">
                  <img className="dp" src={data.dp} />
                </div>
                <div className="paragraph">
                  <p className="title">{data.title}</p>
                  <p className="footer"> {data.footer1} </p>
                  <p className="footer">{data.footer2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
