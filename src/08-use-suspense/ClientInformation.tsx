import { Usable, use, useEffect } from "react"
import { getUserAction, User } from "./api/get-user.action.js"

interface Props {
    getUser: Usable<User>
}

export const ClientInformation = ({ getUser }: Props) => {
    const user = use(getUser)


    return (
        <div className="bg-gradient flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h2>

            <p className="text-white text-2xl">{user.location}</p>
            <p className="text-white text-xl">{user.role}</p>
        </div>
    )
}
