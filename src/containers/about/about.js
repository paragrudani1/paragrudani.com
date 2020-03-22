import React, { Component } from 'react';
import Navbar from '../../components/main components/Navbar/Navbar'
import Footer from '../../components/main components/Footer/Footer'
import Photo from '../../assets/81322620_3082178451794507_450338241335837261_n.jpg'
import classes from './about.module.css'


class About extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <Navbar />
            <main>
                <section>
                <div className={classes.desc}>
                    <p>
                        A creative young man from Gujarat, India who loves designing, coding and capturing some awesome moments
                    </p>
                </div>
                </section>
                
                <section>
                    <div className={classes.about}>
                        <div className={classes.intro}>
                            <h1>Who is that crazy boy?</h1>
                            <p>Born and started to think in 2002, I'm a student in the 12th grade.</p>
                            <br />
                            <p>First time I got in contact with all these stupid letters and numbers, simply called code. It happened when I was around sixteen years old.</p>
                            <br />
                            <p>Because of my passion and eagerness to build something in this Era of fastest growing field i decided to learn coding and where my journey to become Designer and Developer started.</p>
                            <br />
                            <p>another big passion is Playing Cricket and reading Books.</p>
                        </div>
                        <div className={classes.img}>
                            <img src={Photo} alt="photo" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className={classes.skill}>
                        <h1>The skills i got</h1>

                        <p>
                            Skills are not just about having the knowledge it's also about getting the experience. This is why I like to try out many things every single day and getting much more practical knowledge
                        </p>
                            <br />
                        <p>
                            Here is a list of things I can and I love to work with. For more information on this topic you can check out my <a href="#">resume.</a>
                        </p>
                    </div>
                </section>

                <section>
                    <div className={classes.skills}>
                        <h1>Full-Stack Development</h1>
                        <h1>React</h1>
                        <h1>Node</h1>
                        <h1>HTML and CSS</h1>
                        <h1>JavaScript</h1>
                        <h1>JQuery</h1>
                        <h1>Design</h1>
                        <h1>Adobe XD</h1>
                        <h1>Figma</h1>
                        <h1>Invision Studio</h1>
                        <h1>Photography</h1>
                        <h1>Editing</h1>
                        <h1>Adobe Illustrator</h1>
                        <h1>Adobe Photoshop</h1>
                    </div>
                </section>
                </main>
            <Footer />
            </React.Fragment>
         );
    }
}
 
export default About;