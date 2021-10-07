import {React, useState}from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './contact.scss';
import {Email, Subject, Person} from '@material-ui/icons';

export default function Contact(props) {

    const {REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID} = process.env;
    const {visibleElement} = props;
    const [btnActive, setBtnActive] = useState(false);

    // Send email EmailJS and give SweetAlert confirmation
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
    }

    // Btn click start bubble animation
    const startAnimation = () => {
        setBtnActive(true);
        setTimeout(() => {
            setBtnActive(false)
        }, 1000);
    }

    return (
        <div id="contact" className={visibleElement === "contact" ? "contact active" : "contact"}>
            <div class="divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
            </svg>
            </div>
            <h2>Contact</h2>
            <div className="background">
            {[...Array(30)].map((e,i) => {
                    return (
                        <div className="particle" key={i}></div>
                    )
                })}
            </div>
            <form onSubmit={sendEmail} className="form">
                <label for='email'>
                    Email
                    <div className="input">
                        <Email className="icon"/>
                        <input
                        id='email'
                        name='reply_to'
                        placeholder='Email'
                        required
                        />
                    </div>
                    
                </label>
                <label for='name'>
                    Name
                    <div className="input">
                        <Person className="icon"/>
                        <input
                            id='name'
                            name='from_name'
                            placeholder='Name'
                            required
                        />
                    </div>
                </label>
                <label for='message'>
                    Message
                    <div className="input">
                        <Subject className="icon"/>
                        <textarea
                            id='message'
                            name='message'
                            placeholder='Message'
                            required
                        />
                    </div>

                </label>
                <button type='submit' className={btnActive ? "active" : ""} onClick={startAnimation}>
                    Get in touch
                    {[...Array(30)].map((e,i) => {
                    return (
                        <div className="btn-particle" key={i}></div>
                    )
                })}
                </button>
            </form>    
        </div>
    )
}
