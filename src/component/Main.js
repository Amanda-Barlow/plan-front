import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Index from "../pages/Index"
import Show from '../pages/Show'

const Main = (props) => {
  const [plan, setPlan] = useState(null)

  const URL = 'http://localhost:4003/plan'

  const getPlan = async () => {
    const reponse = await fetch(URL)
    const data = await reponse.json()
    setPlan(data.data)
  }

  const createPlan = async (plan) => {
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plan),
    })
    getPlan()
  }

  const updatePlan = async (plan, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    });
    getPlan();
  };
  
  const deletePlan = async (id) => {
    await fetch(URL + id, {
        method: "DELETE",
    });
    getPlan();
  };

  useEffect(() => {
      getPlan()
  }, []);

  return (
    <main>
        <Routes>
            <Route path="/" element={<Index 
                plan={plan} 
                createPlan={createPlan}/>}/>
            <Route path="/plan/:id" element={<Show
                plan={plan} 
                updatePlan={updatePlan} 
                deletePlan={deletePlan}
            />}/>
        </Routes>
    </main>
  )
}

export default Main


