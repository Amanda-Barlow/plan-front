import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Index from "../pages/Index"
import Show from '../pages/Show'

const Main = (props) => {
  const [plans, setPlans] = useState(null)

  const URL = 'http://localhost:4003/plan'

  //fetches all plans from our API backend
  const getPlans = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPlans(data.data)
  }

  const createPlan = async (plan) => {
    //make post request to create plan
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan),
    })
    // update our components list of plans
    getPlans()
  }

  const updatePlan = async (plan, id) => {
    // make post request to update plan
    await fetch(URL + '/' + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    });
    // update list of plans
    getPlans();
  };
  
  const deletePlan = async (id) => {
    // make post request to delete plan
    await fetch(URL + '/' + id, {
        method: "DELETE",
    });
    // update list of plans
    getPlans();
  };

  useEffect(() => {
      getPlans()
  }, []);

  return (
    <main>
        <Routes>
            <Route path="/" element={<Index 
                plans={plans} 
                createPlan={createPlan}/>}/>
            <Route path="/plan/:id" element={<Show
                plans={plans} 
                updatePlan={updatePlan} 
                deletePlan={deletePlan}
            />}/>
        </Routes>
    </main>
  )
}

export default Main;
