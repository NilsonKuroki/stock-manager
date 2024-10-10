type User = {
    email: string,
    password: string
}

type AuthContextType = {
    isAuthenticated: boolean,
    user: User|null,
    signIn: (data: SignInData)=> Promise<void>
}

type SignInData = {
    email: string,
    password: string
}


type SignInRequestData = {
    token: string,
    user: User
}