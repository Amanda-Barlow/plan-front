import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

const Show = (props) => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id;
  const plans = props.plans;
  const plan = plans.find((p) => p._id === id);


  const [editForm, setEditForm] = useState(plan);

  
  const handleChange = (event) => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      props.updatePlans(editForm, plan._id);
      
      navigate("/");
  };

  const removePlan = () => {
    e.preventDefault()
    props.deletePlans(plan._id);
    navigate("/");
  };
  return(
      <div className="plan">
          <h1>{plan.name}</h1>
          <h2>{plan.skills}</h2>
          <h3>{plan.goal} alt={plan.name}</h3>
          <button id="delete" onClick={removePlan}>
          DELETE
          </button>
          <form onSubmit={handleSubmit}>
              <input
                  type="string"
                  value={editForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
              />
              <input
                  type="string"
                  value={editForm.goal}
                  name="goal"
                  placeholder="goal"
                  onChange={handleChange}
              />
              <input
                  type="string"
                  value={editForm.skills}
                  name="skills"
                  placeholder="skills"
                  onChange={handleChange}
              />
              <input type="submit" value="Update Plan" />
          </form>
      </div>
  );
}

export default Show;

