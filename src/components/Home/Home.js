import videoHomepage from "../../assets/video-homepage.mp4";
const Home = (props) => {
  return (
    <div>
      <video  autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
