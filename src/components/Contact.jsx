import React from 'react'

const Contact = () => {
    return (
        <article class="contact" id="contact">
            <h2>If you have any question feel free to ask!</h2>
            <form action="https://formspree.io/f/moqyebag" method="POST" class="" novalidate>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your full name:" required />
                    <label for="floatingInput">Your Name:</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="Your E-Mail:" required />
                    <label for="floatingInput">Your E-Mail:</label>
                </div>
                <textarea class="mb-3" name="message" id="message" cols="30" rows="10"
                    placeholder="   Your message:"></textarea>
                <button class="custom-btn btn-2"><span>SEND!</span><span>Send Message</span></button>
            </form>
        </article>
    )
}

export default Contact