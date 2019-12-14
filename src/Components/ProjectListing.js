import React from 'react';
import ProductViewNew from './ProjectViewNew';


const ProjectListing = ({projects}) =>{
    return(
        <div className="project">

{projects && projects.map(project => {
return(
    <ProductViewNew project={project} key={project.id} />

)
})}

        </div>
    )

}


export default ProjectListing