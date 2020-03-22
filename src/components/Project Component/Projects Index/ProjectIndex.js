import React from 'react';

const projectIndex = (props) => {

    return ( 
        <>
            <div className='index' data-aos="fade-down" >
                 <p>{props.title}</p>
                 <a href={props.link} rel="noopener noreferrer" target='_blank'>View</a>
             </div>
        </>
     );
}
 
export default projectIndex;