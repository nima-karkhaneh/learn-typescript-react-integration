import { type ReactNode, createContext, useContext, useReducer } from "react";


type Timer = {
    name: string,
    duration: number
}

type TimerState = {
    isRunning: boolean,
    timers: Timer[]
}

const initialState: TimerState = {
    isRunning: true,
    timers: []
}


type TimersContextValue = TimerState & {
    addTimer: (timerData: Timer) => void 
    startTimers: () => void
    stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext)

    if (timersCtx === null) {
        throw new Error ("Value should not be null.")
    }

    return timersCtx
}


type TimersContextProviderProps = {
    children: ReactNode,
}


type StartTimerAction = {
    type: 'START_TIMER'
}

type StopTimerAction = {
    type: 'STOP_TIMER'
}

type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer
}


type Action = StartTimerAction | StopTimerAction | AddTimerAction


function timerReducer(state: TimerState, action: Action): TimerState {
    if (action.type === 'START_TIMER')  {
        return {
            ...state,
            isRunning: true
        }
    }

    if (action.type === 'STOP_TIMER') {
        return {
            ...state,
            isRunning: false
        }
    }

    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers, {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }
    
    return state
}



export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    const [timerState, dispatch] = useReducer(timerReducer, initialState)

    
    const ctx: TimersContextValue = {
        timers: timerState.timers,
        isRunning: timerState.isRunning,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER', payload: timerData})
        },
        startTimers() {
            dispatch({ type:  'START_TIMER' })
        },
        stopTimers() {
            dispatch({ type: 'STOP_TIMER' })
        }
    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}