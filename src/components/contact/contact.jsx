import "./contact.scss"


const Contact = () =>{
    return(

        <div id="contact" className="contact">
            <h2 className="contact-header">Contact</h2>
            <div className="contact-field">
                <p>Łukasz Bastyniec</p>
                <p>Email: lukaszbastyniec@gmail.com</p>
                <p>Phone: +48 784 237 885</p>
                <p>GitHub: <a className="contact-field-link" href="https://github.com/lukbast/">https://github.com/lukbast/</a></p>
            </div>
        </div>
    )
}


export default Contact