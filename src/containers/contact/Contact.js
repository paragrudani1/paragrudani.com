import React from 'react';
import {Helmet} from 'react-helmet'
import classes from './Contact.module.css'
import Navbar from '../../components/main components/Navbar/Navbar'
import Footer from '../../components/main components/Footer/Footer'

const Contact = () => {
    return ( 
        <>
        <Helmet>
            <title>Contact Me - Parag Rudani</title>
            <script src="https://kit.fontawesome.com/ce7092a7bb.js"></script>
        </Helmet>
        
        <Navbar />
        
        <main>
            <div className={classes.desc}>
                <p>
                    Heyy wasup? Do you want to talk or just send me an idea over for a project you have in mind? Then go! My mail is <a href="mailto:mail@paragrudani.com?subject=Mail from paragrudani.com">mail@paragrudani.com</a>
                </p>
            </div>

            <div className={classes.contact}>
                <p>As I've just said: you can send me a mail to <a
                        href="mailto:mail@paragrudani.com?subject=Mail from paragrudani.com">mail@paragrudani.com</a> to
                    write your poem.</p>
            </div>
        </main>

        <div className={classes.social}>
              <h1>want to get connected?:</h1>
          
          <div style={{display: 'flex', marginTop: '20px'}}>
              <div className={classes.fb}>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a href="https://www.facebook.com/patidar.parag.rudani.794"><i class="fab fa-facebook" aria-hidden="true"></i></a>
              </div>
          
              <div className={classes.ig}>
                  <a href="https://www.instagram.com/paragrudani1/"><i class="fab fa-instagram"></i></a>
              </div>
          
              <div className={classes.git}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                  <a href="https://github.com/paragrudani1"><i class="fab fa-github" aria-hidden="true"></i></a>
              </div>
          </div>    
              </div>

              <Footer />
        </>
     );
}
 
export default Contact;