import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = keyof typeof colors;


export const TrafficLightWithEffect = () => {
    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        if (countdown === 0) return;

        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [countdown])

    //Change color efect
    useEffect(() => {
        if (countdown > 0) return;

        setCountdown(5);
        if (light === 'red') {
            setLight('green')
            return;
        }

        if (light === 'yellow') {
            setLight('red')
            return;
        }

        if (light === 'green') {
            setLight('yellow')
            return;
        }
    }, [countdown, light])




    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-3xl font-thin">
                    Semaforo con useEffect</h1>
                <h2 className="text-white text-xl">
                    CountDown: {countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${(countdown / 5) * 100}%` }}
                    ></div>
                </div>


                <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

            </div>
        </div>
    );
}