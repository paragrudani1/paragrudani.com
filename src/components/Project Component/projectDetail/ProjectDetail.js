import React from 'react';
import classes from './ProjectDetail.module.css'

const project_detail = (props) => {
    return ( 
        <div class={classes.project_detail} data-aos={props.data_aos}>
                    <img src={props.img} alt={props.alt} />
                <a href={props.link} rel="noopener noreferrer" target="_blank">
                    <h1>{props.title}</h1>
                </a>
        </div>
     );
}
 
export default project_detail;