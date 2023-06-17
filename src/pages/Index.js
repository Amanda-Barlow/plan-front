import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  // state to hold formData
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
      skills: ""
    });
  };

  // loaded function
  const loaded = () => {
    return props.plans.map((plan) => ( 
      <div key={plan._id} className="plan">
        <Link to={`/plan/${plan._id}`}>
          <h2>{plan.name}</h2> 
        </Link>;
        {/* <h2>{plan.skills}</h2> 
        <h3>{plan.goal}</h3>  */}
      </div>
    ));
  };

  const loading = () => {
    return <h2>Let's Make Your Plan</h2>;
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
          value={newForm.goal}
          name="goal"
          placeholder="goals"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.skills} 
          name="skills" 
          placeholder="current skills" 
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.frequency} 
          name="frequency" 
          placeholder="frequency of meeting" 
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.coping} 
          name="coping" 
          placeholder="coping skills" 
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.contacts} 
          name="contacts" 
          placeholder="supportive contact" 
          onChange={handleChange}
        />
 <input type="submit" value="Create Plan" /> 
 </form>
{props.plans ? loaded() : loading()} 
</section>
  )
};

export default Index;