import React from 'react'
import CourseGoal from './CourseGoal'
import { type Goal } from '../App.tsx'

  type CourseGoalProps = {
    goals: Goal[]
    onDeleteGoal: (id: number) => void
  }

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalProps) => {
  return (
    <ul>
        {goals.map(goal => (
            <li key={goal.id}>
                <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                    {goal.description}
                </CourseGoal>
            </li>
        ))}
    </ul>
  )
}

export default CourseGoalList