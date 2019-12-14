import React from 'react';

const ProductView =  ({project}) => {

return(
<div className="row">
<div className="NewP col">
<span>{project.name}</span>
<span>{project.price}</span>
</div>
</div>
)



}
export default ProductView