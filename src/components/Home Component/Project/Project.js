import React from 'react';
import classes from './Project.module.css'

const project = (props) => {
    return (
        <React.Fragment>
            <div className={classes.project}>
                    <div className={classes.projectimg}>
                        <a href={props.src} rel='noopener noreferrer' target="_blank"><img src={props.img} alt="img1" /></a>
                    </div>

                    <div className={classes.info}>
                        <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    
                    <a href={props.link} rel='noopener noreferrer' target="_blank">
                    <div className={classes.btn}>
                        <p>Have a Look</p>
                    </div>
                    </a>
                    </div>
        </div>
        </React.Fragment>
     );
}
 
export default project;