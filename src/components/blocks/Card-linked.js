function Cardlinked(props){
   let {image,link} = props.project;
  
    return (
        <div className="portfolio">
            <a className="portfolio__item" href={link} target="_blank">
                <img className="section__image--portfolio" src={image} alt=""></img>
                
                <div className="overlay ">
                    View Project
                </div>
            </a>
            </div>
      );

}



export default Cardlinked;