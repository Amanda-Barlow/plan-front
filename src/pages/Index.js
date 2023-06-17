import { useState } from "react";
import {Link} from "react-router-dom"

const Index = (props) => {

  // loaded function
  const loaded = () => {
    return props.plan.map((plan) => (
      <div key={plan._id} className="plan">
        <Link to={`/people/${person._id}`}><h1>{person.name}</h1></Link>
        <img src={plan.image} alt={plan.name} />
        <h3>{plan.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.plan ? loaded() : loading());
}

export default Index

