function About({handlePageChange}){

    return (
        <div  className="App">
         <section className="intro" id="home">
        <div className="section__div section__div--intro">
            <h1 className="section__title section__title--intro">
                Hi,<br></br>
                I'm <span><img className="section__image--intro-logo" src="./LOGO-4.png" alt="B"></img>awandeep
                    Singh,</span><br></br>
                web developer
            </h1>

            <p className="section__subtitle section__subtitle--intro">Fullstack Developer / MERN Stack</p>


            <a className="btn1" href="#contact" onClick={() => handlePageChange("Contact")}>Contact me!</a>
        </div>
        <img className="section__image--intro" src="./profile pic.jpg"
            alt="Black and white profile of Bawandeep smiling"></img>
    </section>
        </div>
      );

}



export default About;