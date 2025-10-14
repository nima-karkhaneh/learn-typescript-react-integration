import React, { useRef, type FormEvent } from 'react'


type NewGoalProps = {
    onAdd : (goal: string, summary: string) => void
}

const NewGoal = ({ onAdd }: NewGoalProps) => {

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value
    onAdd(enteredGoal, enteredSummary);
    
}
   
return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" ref={goal} />
        </p>  
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="text" type="text" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
  )
}

export default NewGoal