import React from 'react';
import Navbar from '../../components/main components/Navbar/Navbar';
import Footer from '../../components/main components/Footer/Footer'
import {Helmet} from 'react-helmet'
import classes from './Project.module.css'
import ProjectDetail from '../../components/Project Component/ProjectDetail'
import Project_img1 from '../../assets/appointment.png'
import Project_img2 from '../../assets/music app.png'
import Project_img3 from '../../assets/mockup-of-a-woman-writing-on-a-macbook-pro.png'
import Project_img4 from '../../assets/Group4.png'

const project = () => {
    return ( 
        <React.Fragment>
            <Helmet>
                <title>Project - Parag Rudani</title>
            </Helmet>

            <Navbar />

            <main>
                <div className={classes.desc}>
                    <p>
                        Stomping projects off the ground is not always easy, but it is a task that I like to master. Here are a
                        few examples.
                    </p>
                </div>

                <div className={classes.project}>
                    <ProjectDetail 
                        img={Project_img1} 
                        alt='hospital appointment' 
                        link='https://xd.adobe.com/view/92b9f55a-cf7b-47ab-65c9-9ee137682568-e488/screen/45bb5b68-ce2a-4c3e-8fea-00cb81bfd321/home-page?fullscreen'
                        title='Online Appointment Website' />
                    
                    <ProjectDetail 
                        img={Project_img2} 
                        alt='music-app' 
                        link='https://optimistic-payne-da21c5.netlify.com/'
                        title='Music App' />
                    
                    <ProjectDetail 
                        img={Project_img3} 
                        alt="darlen's" 
                        link='https://www.figma.com/proto/PeFOy0inHCFK2b5D6S2QuR/Landing-Page-design?node-id=15%3A0&scaling=scale-down-width'
                        title='Restaurent Landing Page' />
                    
                    <ProjectDetail 
                        img={Project_img4} 
                        alt='voting poll' 
                        link='https://competent-cori-7e3fcb.netlify.com/'
                        title='Voting Poll'  />
                </div>
            </main>
        </React.Fragment>
     );
}
 
export default project;