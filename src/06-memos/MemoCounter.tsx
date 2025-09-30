import { useCounter } from "@/hooks/useCounter.js"
import { useMemo } from "react"

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy stuff started')

    for (let index = 0; index < iterationNumber; index++) {
        console.log('ahi vamos ....')
    }

    console.timeEnd('Heavy stuff started')

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
    const { counter, increment } = useCounter(40000)
    const { counter: counter2, increment: increment2 } = useCounter(10)


    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo - useMemo {myHeavyValue}</h1>
            <hr />

            <h4>Counter: {counter}</h4>
            <h4>Counter: {counter2}</h4>

            <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
                onClick={increment}
            >
                +1
            </button>

            <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
                onClick={increment2}
            >
                +1 al counter2
            </button>
        </div>
    )
}
