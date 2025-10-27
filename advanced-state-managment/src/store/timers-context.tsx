import { type ReactNode, createContext } from "react";


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