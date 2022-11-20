import Cardlinked from "../blocks/Card-linked";

function Portfolio() {
  let projectsData = [
    {
      image: "./Join-Us.png",
      link: "https://join-us2.herokuapp.com/dashboard",
      repo: "https://github.com/nab-man/Join-Us"
    },
    {
      image: "./run_buddy.jpg",
      link: "https://singhbawan.github.io/run-buddy/",
      repo: "https://github.com/singhbawan/run-buddy"
    },
    {
      image: "./podsandparks2.png",
      link: "https://adamgabo.github.io/PlayMeSpotify/",
      repo: "https://github.com/AdamGabo/PlayMeSpotify"
    },
    {
      image: "./reactor.png",
      link: "https://singhbawan.github.io/reactor/",
      repo: "https://github.com/singhbawan/reactor"
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
