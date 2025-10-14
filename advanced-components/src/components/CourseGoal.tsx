import React, { type PropsWithChildren } from 'react'

// interface CourseGoalProps {
//     title: string;
//     children: ReactNode;
// }


type CourseGoalProps = PropsWithChildren<{ 
  title: string
  id: number
  onDelete: (id: number) => void
 }>


const CourseGoal = ({ title, children, id, onDelete} : CourseGoalProps ) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete (id) }>Delete</button>
    </article>
  )
}

export default CourseGoal