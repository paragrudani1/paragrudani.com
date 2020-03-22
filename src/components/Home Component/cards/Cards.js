import React from 'react';
import classes from './Cards.module.css'

const card = (props) => {
    return ( 
        <div 
            className={classes.card}
            style={{backgroundImage: props.bgcolor}}>
                    <h1 className={classes.title}>{props.title}</h1>
                    
                    <p className={classes.description}>
                        {props.description}
                    </p>
        </div>
     );
}
 
export default card;