import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadingStorageData = async () => {
            const storageUser = localStorage.getItem("@Auth:user")
            const storageToken = localStorage.getItem("@Auth:token")

            if (storageUser && storageToken) {
                setUser(storageUser)
            }
        };
        loadingStorageData()
    }, [])



    const signIn = async ({email, password}) => {

        try {
            const response = await api.post("/auth", {
                email, password
            });

            if (response.data.error) {
                alert(response.data.error)
            } else {
                setUser(response.data.user)
                api.defaults.headers.common[
                    "Authorization"
                ] = `Bear ${response.data.token}`;
                localStorage.setItem("@Auth:token", response.data.token)
                localStorage.setItem("@Auth:user", JSON.stringify(response.data.user) )
            }
        } catch (error) {
            setError("Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.", error);
        }
    }
    return (
        <AuthContext.Provider value={{
            user,
            signed: !!user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}