// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Index(props) {
//     const [newForm, setNewForm] = useState({
//     name: "",
//     goal: "",
//     title: "",
//   });

//   // handleChange function for form
//   const handleChange = (event) => {
//     setNewForm({ ...newForm, [event.target.name]: event.target.value });
//   };

//   // handle submit function for form
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.createPlan(newForm);
//     setNewForm({
//       name: "",
//       goal: "",
//       skills: "",
//     });
//   };

//   // loaded function
//   const loaded = () => {
//     return props.plan.map((plan) => (
//       <div key={plan._id} className="plan">
//         <Link to={`/plan/${plan._id}`}>
//           <h1>{plan.name}</h1>
//         </Link>
//         <img src={plan.image} alt={plan.name} />
//         <h3>{plan.title}</h3>
//       </div>
//     ));
//   };

//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };
//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="string"
//           value={newForm.name}
//           name="name"
//           placeholder="name"
//           onChange={handleChange}
//         />
//         <input
//           type="string"
//           value={newForm.goal}
//           name="goal"
//           placeholder="goal"
//           onChange={handleChange}
//         />
//         <input
//           type="string"
//           value={newForm.skills}
//           name="skills"
//           placeholder="skills"
//           onChange={handleChange}
//         />
//         <input type="submit" value="Create Plan" />
//       </form>
//       {props.plan ? loaded() : loading()}
//     </section>
//   );
// }

// export default Index;


import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);reportWebVitals();










