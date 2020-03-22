import React, {Component} from 'react';
import classes from './Introduction.module.css'
import Typical from 'react-typical'

class Introduction extends Component {

    state = {
        words: [' Web Design.', ' Web Development.', ' UI/UX Designing.', ' Logo Designing.']
    }


    
    
    
    render() {
        console.log(this.state.words.length);
        

        return(
        
        <React.Fragment>
        <div className={classes.description}>
                <p>
                    Hi, Parag my name. I’m a creative mind from India and I love to create unique content.
                </p>
            </div>

             {/* TypeWriter Effect */}
            <div className={classes.Typewriter}>
        <h1>I Love <span>
                        <Typical 
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                ' Web Design.',
                                1000,
                                ' Web Development.',
                                1000,
                                ' UI/UX Designing.',
                                1000,
                                ' Logo Designing.',
                                1000
                                ]}> 
                        </Typical>
                            </span></h1>
            </div>
        </React.Fragment>

        )
    }

} 
 
export default Introduction;