import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

  export interface Goal {
    title: string,
    description: string,
    id: number
  }
  

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  function handleGoals(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: Goal = {
        id: Math.random(),
        title: goal,
        description: summary
      }
      return ([...prevGoals, newGoal])
    })
}


function deleteItem(id: number) {
  setGoals(prevGoals => (
    prevGoals.filter(goal => goal.id !== id)
  ))
}
  
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAdd={handleGoals} />
      <CourseGoalList goals={goals} onDeleteGoal={deleteItem} />
    </main>
  );
}
