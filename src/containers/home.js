import React from 'react';
import Navbar from '../components/main components/Navbar/Navbar';
import Introduction from '../components/Home Component/Introduction/Introduction.js'
import styled from 'styled-components'
import Card from '../components/Home Component/cards/Cards'
import Project from '../components/Home Component/Project/Project'
import VotingPollImg from '../assets/Group.png'
import MusicAppImg from '../assets/music-app.png'
import Footer from '../components/main components/Footer/Footer'

const Main = styled.main`
    margin-top: 180px;
    padding-right: 20px;
    padding-left: 20px;
`
const CardBox = styled.div`
    position: relative;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 10px;

    @media (min-width:768px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    
    @media (min-width:1024px) {
            grid-template-columns: repeat(3, 1fr);
`
const ProjectSection = styled.section`
    margin-top: 150px;
`
const Projects = styled.div`
    margin-top: 50px;

    @media (min-width:768px) {
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 90%;
            grid-gap: 50px;
            margin-top: 50px;
            margin-bottom: 100px;
    }
    
    @media (min-width:1300px) {
            width: 75%;
    }
    
`
const Heading = styled.h1`
    font-family: 'Alegreya Sans SC', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 38px;
    line-height: 47px;
    color: white;
    letter-spacing: 1px;

    @media (min-width:425px) {
            width: 80%;
    }

    @media (min-width:768px) {
            width: 50%;
            margin-top: -70px;
    }

    @media (min-width:1024px) {
            padding-left: 50px;
    }

    @media (min-width:1300px) {
            width: 40%;
            font-size: 3.5rem;
            margin-bottom: 100px;
    }
`
const SeeMore = styled.div`
    width: 105px;
    height: 35px;
    background: #00B2FF;
    border-radius: 15px;
    /* padding: 7px; */
    /* margin-top: 50px; */
    margin:70px auto;

    p {
        font-family: Nunito;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 116.5%;
        /* identical to box height, or 19px */
        text-align: center;
        padding: 8px;
        color: #FFFFFF;
    }
`

const home = () => {

    return (
        <React.Fragment>
            <Navbar />
            <Main>
                <section>
                    <Introduction />
                    <CardBox>
                        <Card 
                            title='Web Development'
                            description='Getting design to live with numbers and letters is a wonderful thing to me and I got a big
                            passion for it.' />
                        <Card 
                            bgcolor='linear-gradient(59.4deg, rgba(255, 120, 44, 0.89) 10.61%, rgba(255, 92, 0, 0.89) 79.71%)'
                            title='User Interface Design'
                            description='With an eye on what’s important I create User centered Design for Websites, Apps and other visual places to work with.' />
                        <Card 
                            bgcolor='linear-gradient(59.4deg, rgba(44, 255, 255, 0.89) 10.61%, rgba(77, 188, 251, 0.89) 79.71%)'
                            title='Logo Design'
                            description='Logo Designing is an art coming from heart and need peace to drow from heart.' />
                    </CardBox>
                </section>

                <ProjectSection>
                    <div>
                        <Heading>Here are some picked projects I’ve done.</Heading>
                    </div>

                    <Projects>
                        <Project 
                            src={'https://competent-cori-7e3fcb.netlify.com/'} 
                            img={VotingPollImg} 
                            title={'Voting Poll'} 
                            desc={'Programmed and Designed Voting Poll by me.'} 
                            link={"https://competent-cori-7e3fcb.netlify.com/"} />
                        
                        <Project 
                            src={'https://optimistic-payne-da21c5.netlify.com/'} 
                            img={MusicAppImg} 
                            title={'Music App'} 
                            desc={'A Music Streaming App Designed and developed by me.'} 
                            link={"https://competent-cori-7e3fcb.netlify.com/"} />
                    </Projects>

                    <a href="project.html">
            <SeeMore>
               <p> see more </p>
            </SeeMore>
            </a>
                </ProjectSection>
            </Main>
                <Footer />
        </React.Fragment>
     );
}
 
export default home;