import myResume from "../../assets/myResume.pdf";

function Resume() {
  return (
    <div className="App">
      <div className="container1">
        
        <a href={myResume} download>
          <div className="btn1 m-4">
            <p className="text-white mt-3 px-2">Download</p>
          </div>
        </a>

        <a href={myResume} target={"_blank"} rel="noreferrer">
          <div className="btn1 m-4">
            <p className="text-white mt-3 px-4">View</p>
          </div>
        </a>
      </div>
      <div >
      <h3>Entry-level Proficiencies</h3>
      <h4>Front-end</h4>
      <ul id='front-end'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h4>Back-end</h4>
      <ul id='back-end'>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
</div>
    </div>
  );
}

export default Resume;
