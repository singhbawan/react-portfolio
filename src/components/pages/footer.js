function Footer(){

    return (
        <div  className="nav nav-tabs">
        <footer>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/singhbawan" target="_blank">
                    <img src="./github.png" alt=""></img>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/bawandeep-singh-394b32175/"
                    target="_blank">
                    <img src="./linkedin (2).png" alt=""></img>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://stackoverflow.com/users/19310745/bawandeep-singh"
                    target="_blank">
                    <img style={{width:75}} src="./stack-overflow.svg" alt=""></img>
                   
                </a>
            </li>
        </ul>
    </footer>
        </div>
      );

}



export default Footer;