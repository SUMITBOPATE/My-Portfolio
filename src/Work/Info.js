import React from 'react';

function Info (props){
return (
<>
  <div className="card">
  <div className="card-details">
    <p className="text-title"> {props.name} </p>
    <p className="text-body"> {props.desc}</p>
  </div>
  <div className="line-btn">
  <button class="card-button">View </button>
  <button class="card-button">Live</button>
  </div>
</div>
</>

)
}
export default Info;

  