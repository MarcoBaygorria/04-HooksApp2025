import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router.js"
import { UserContextProvider } from "./context/UserContext.js"

export const ProfessionalApp = () => {
    return (
        <UserContextProvider>
            <div className="bg-gradient">
                <RouterProvider router={appRouter} />
            </div>
        </UserContextProvider>
    )
}
