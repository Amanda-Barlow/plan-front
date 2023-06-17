// import { useState } from "react";
import {Link} from "react-router-dom"

const Index = (props) => {

  // loaded function
  const loaded = () => {
    return props.plan.map((plan) => (
      <div key={plan._id} className="plan">
        <Link to={`/plan/${plan._id}`}>
          <h1>{plan.name}</h1></Link>
        <h2>{plan.goal}</h2>
        <h3>{plan.skills}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.plan ? loaded() : loading());
}

export default Index