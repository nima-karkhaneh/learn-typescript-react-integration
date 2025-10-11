import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

  export interface Goal {
    title: string,
    description: string,
    id: number
  }
  

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  function handleGoals() {
    setGoals(prevGoals => {
      const newGoal: Goal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth"
      }
      return ([...prevGoals, newGoal])
    })
}
  
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <button onClick={handleGoals}>Add goals</button>
      <CourseGoalList goals={goals} />
    </main>
  );
}
