import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
    const [newForm, setNewForm] = useState({
    name: "",
    goal: "",
    skills: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPlan(newForm);
    setNewForm({
      name: "",
      goal: "",
      skills: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.plan.map((plan) => (
      <div key={plan._id} className="plan">
        <Link to={`/plan/${plan._id}`}>
          <h1>{plan.name}</h1>
        </Link>
        <img src={plan.goal} alt={plan.name} />
        <h3>{plan.skills}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="string"
          value={newForm.image}
          name="gaol"
          placeholder="goal"
          onChange={handleChange}
        />
        <input
          type="string"
          value={newForm.skills}
          name="skills"
          placeholder="skills"
          onChange={handleChange}
        />
        <input type="submit" value="Create Plan" />
      </form>
      {props.plan ? loaded() : loading()}
    </section>
  );
}

export default Index;

