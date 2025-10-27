import { type ReactNode, createContext, useContext, useReducer } from "react";


type Timer = {
    name: string,
    duration: number
}

type TimerState = {
    isRunnig: boolean,
    timers: Timer[]
}

const initialState = {
    isRunning: true,
    timres: []
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

type Action = {
    type: 'ADD_TIMER' | 'START_TIMER' | 'STOP_TIMER' 
}

function timerReducer(state: TimerState, action: Action): TimerState {}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    const [timerState, dispatch] = useReducer(timerReducer, initialState)
    const ctx: TimersContextValue = {
        timers: [],
        isRunnig: false,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER'})
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