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
          <h2>{plan.title}</h2>
          <img src={plan.image} alt={plan.name} />
          <button id="delete" onClick={removePlan}>
          DELETE
          </button>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={editForm.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editForm.image}
                  name="image"
                  placeholder="image URL"
                  onChange={handleChange}
              />
              <input
                  type="text"
                  value={editForm.title}
                  name="title"
                  placeholder="title"
                  onChange={handleChange}
              />
              <input type="submit" value="Update Plan" />
          </form>
      </div>
  );
}

export default Show;

