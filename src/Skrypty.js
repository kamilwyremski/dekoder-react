import React from 'react';

import {scripts as scripts_json} from './resources/json/scripts.json';

class Skrypty extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          {scripts_json.map(function(script, index){
            return <div className="col-sm-4" key={ index }>
               <div className="card">
                 <img className="card-img-top" src={"https://wyremski.pl/" + script.image} alt="Card image cap" />
                 <div className="card-body">
                   <h5 className="card-title">{script.title.pl}</h5>
                   <p className="card-text">{script.description.pl}</p>
                 </div>
               </div>
             </div>;
          })}
        </div>
      </div>
    );
  }
}

export default Skrypty;
