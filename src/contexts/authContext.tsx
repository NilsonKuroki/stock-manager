"use client"
import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, setCookie } from 'nookies'
import Router from "next/router";

import { signInRequest } from "@/services/database";

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState <User|null> (null)
    const isAuthenticated = !!user

    // useEffect(() => {
    //     const { 'stockmanager-token': token} = parseCookies()

    //     if(token){
            
    //     }
    // })
    const signIn = async ({email, password}: SignInData): Promise<void> => {
        const { token, user }: SignInRequestData = await signInRequest({
            email, 
            password
        })
        
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}