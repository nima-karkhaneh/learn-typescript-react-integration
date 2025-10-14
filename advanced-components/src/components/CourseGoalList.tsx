import React, { type ReactNode } from 'react'
import CourseGoal from './CourseGoal'
import { type Goal } from '../App.tsx'
import InfoBox from './InfoBox.tsx'

  type CourseGoalProps = {
    goals: Goal[]
    onDeleteGoal: (id: number) => void
  }

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalProps) => {
  if (goals.length === 0) {
    return(
      <InfoBox mode='hint'>
        You have no course yet. Start adding some!
      </InfoBox>
    );
  }

  let WarningBox: ReactNode

  if (goals.length >= 4) {
    WarningBox = (
      <InfoBox mode='warning'>
        You are setting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    )
  }


  return (
    <>
    {WarningBox}
    <ul>
        {goals.map(goal => (
            <li key={goal.id}>
                <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                    {goal.description}
                </CourseGoal>
            </li>
        ))}
    </ul>
    </>
  )
}

export default CourseGoalList