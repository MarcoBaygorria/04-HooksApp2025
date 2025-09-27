import { memo } from "react"

interface Props {
    subTitle: string
}

export const MySubtitle = memo(({ subTitle }: Props) => {
    console.log('My subtitle re-render')
    return (
        <>
            <h6 className="text-2xl font-bold">{subTitle}</h6>
            <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">
                LLamar a funcion
            </button>
        </>
    )
})
