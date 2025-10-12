import React, { type FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
    e.preventDefault();
}



const NewGoal = () => {
  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" />
        </p>  
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="text" type="text" />
        </p>
        <p>
            <button>Add Goal</button>
        </p>

    </form>

  )
}

export default NewGoal