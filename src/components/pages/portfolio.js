import Cardlinked from "../blocks/Card-linked";

function Portfolio() {
  let projectsData = [
    {
      image: "./Join-Us.png",
      link: "https://join-us2.herokuapp.com/dashboard",
    },
    {
      image: "./run_buddy.jpg",
      link: "https://singhbawan.github.io/run-buddy/",
    },
    {
      image: "./podsandparks2.png",
      link: "https://adamgabo.github.io/PlayMeSpotify/",
    },
    {
      image: "./reactor.png",
      link: "https://singhbawan.github.io/reactor/",
    },
  ];

  return (
    <div className="App">
      {projectsData.map((project,idx) => {
        return <Cardlinked key={idx} project={project} />;
      })}
    </div>
  );
}

export default Portfolio;
