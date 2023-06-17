import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
    const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
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
      image: "",
      title: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.plan.map((plan) => (
      <div key={plan._id} className="plan">
        <Link to={`/plan/${plan._id}`}>
          <h1>{plan.name}</h1>
        </Link>
        <img src={plan.image} alt={plan.name} />
        <h3>{plan.title}</h3>
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
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Plan" />
      </form>
      {props.plan ? loaded() : loading()}
    </section>
  );
}

export default Index;

