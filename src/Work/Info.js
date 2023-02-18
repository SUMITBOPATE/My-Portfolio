import React from 'react';

function Info (props){
return (
<>
  <div className="card">
  <div className="card-details">
    <p className="text-title"> {props.name} </p>
    <p className="text-body"> {props.desc}</p>
  </div>
  <button class="card-button">View Code</button>
  <button class="card-button">Live</button>
</div>
</>

)
}
export default Info;

  