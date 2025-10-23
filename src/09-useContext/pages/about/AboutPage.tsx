import { UserContext } from "@/09-useContext/context/UserContext.js"
import { Button } from "@/components/ui/button.js"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {

    const { isAuthenticated, logout } = use(UserContext)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Pagina sobre mi</h1>
            <hr />

            <div className="flex flex-col gap-2">

                {/* Pefil */}
                {isAuthenticated && (
                    <Link to="/profile" className="hover:text-blue-500 underline text-2xl">
                        Perfil
                    </Link>
                )}

                {/* Login-logout */}
                {isAuthenticated ? (
                    <Button onClick={logout} variant='destructive' className="mt-4">
                        Salir
                    </Button>
                ) : (
                    <Link to="/login" className="hover:text-blue-500 underline text-2xl">
                        Iniciar sesion
                    </Link>
                )}
            </div>
        </div>
    )
}
