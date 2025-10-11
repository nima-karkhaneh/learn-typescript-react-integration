import React from 'react'
import CourseGoal from './CourseGoal'
import { type Goal } from '../App.tsx'

  type CourseGoalProps = {
    goals: Goal[]
  }

const CourseGoalList = ({ goals }: CourseGoalProps) => {
  return (
    <ul>
        {goals.map(goal => (
            <li key={goal.id}>
                <CourseGoal title={goal.title}>
                    {goal.description}
                </CourseGoal>
            </li>
        ))}
    </ul>
  )
}

export default CourseGoalList