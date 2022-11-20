import { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact(){

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
           
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }



    }
   
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
      
    return (
        <div className="App">
        <section className="intro">
           
    <h1 className="section__title section__title--intro">Contact me</h1>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="form-group"> 
        <label htmlFor="name">Name:</label>
        <input className="form-control"  type="text" name="name" defaultValue={name} onBlur={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input className="form-control"  type="email" name="email" defaultValue={email} onBlur={handleChange} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
      </div>
      {errorMessage && (
                    <div>
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                )}
      <button className="btn1" type="submit">Submit</button>
    </form>
   
  </section>
  </div>
      );

}



export default Contact;