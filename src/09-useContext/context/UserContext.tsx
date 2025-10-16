import { createContext, PropsWithChildren, useState } from "react"
import { User } from "../data/user-mock.data.js";

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus;
    user: User | null

    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null)

    const handleLogin = (userId: number) => {
        console.log({ userId })
        return true;
    }

    const handleLogout = () => {
        console.log('Logout')
    }

    return <UserContext value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout
    }}>{children}</UserContext>
}
