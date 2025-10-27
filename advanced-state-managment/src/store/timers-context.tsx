import { type ReactNode, createContext, useContext } from "react";


type Timer = {
    name: string,
    duration: number
}

type TimerState = {
    isRunnig: boolean,
    timers: Timer[]
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

export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    const ctx: TimersContextValue = {
        timers: [],
        isRunnig: false,
        addTimer(timerData) {
            // logic
        },
        startTimers() {
            // logic
        },
        stopTimers() {
            // loigc
        }
    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}