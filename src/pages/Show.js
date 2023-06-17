import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const plans = props.plans;
  const plan = plans.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(plan);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePlan(editForm, plan._id);
    navigate("/");
  };

  const removePlan = (e) => {
    e.preventDefault();
    props.deletePlan(plan._id);
    navigate("/");
  };

  return (
    <div className="plan">
      <h2>Name: {plan.name}</h2>
      <h2>Goal: {plan.goal}</h2>
      <h2>Skills:  {plan.skills} </h2>
      <h2>Frequency: {plan.frequency} Time Weekly</h2>
      <h2>Coping Skills: {plan.coping}</h2>
      <h2>Supportive Contacts: {plan.contacts}</h2>
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
          value={editForm.goal}
          name="goal"
          placeholder="goal"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.skills}
          name="skills"
          placeholder="skills"
          onChange={handleChange}
        />
        <input type="submit" value="Update Plan" />
      </form>
    </div>
  );
};

export default Show;

