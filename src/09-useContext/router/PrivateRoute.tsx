import { type JSX, use } from "react"
import { UserContext } from "../context/UserContext.js"
import { Navigate } from "react-router"

interface Props {
    element: JSX.Element,
}

export const PrivateRoute = ({ element }: Props) => {

    const { authStatus } = use(UserContext)

    if (authStatus === 'checking') {
        return null;
    }

    if (authStatus === 'authenticated') {
        return element
    }

    return <Navigate to="/login" replace />
}
