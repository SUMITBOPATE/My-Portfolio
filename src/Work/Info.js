import React from 'react';

function Info (props){
return (
<>
  <div className="card">
  <div className="card-details">
    <p className="text-title"> {props.name} </p>
    <p className="text-body"> {props.desc}</p>
    <img src="props.img}"/>
  </div>
  <div className="line-btn">
  <button class="card-button" id="btn-1">View </button>
  <button class="card-button" id="btn-2">Live</button>
  </div>
</div>
</>

)
}
export default Info;

  