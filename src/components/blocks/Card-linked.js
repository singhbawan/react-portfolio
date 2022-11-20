function Cardlinked(props) {
  let { image, link, repo } = props.project;

  return (
    <div className="portfolio">
        <div className="portfolio__item">
     
        <img className="section__image--portfolio" src={image} alt=""></img>
        <a  href={link} target="_blank">
            
        <div className="overlay ">View Project</div>
      </a>
      <a href={repo} target="_blank"><div className="overlay offset1">View Repo</div></a>
      </div>
    </div>
  );
}

export default Cardlinked;
