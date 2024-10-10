import axios from "axios";

type SignInRequestData = {
    email: string,
    password: string
}

const baseDatabase = axios.create({
    baseURL: process.env.BASE_URL
})

export const signInRequest = async ( {email, password} : SignInRequestData) => {
    try {
        const signInResponse = await baseDatabase.post("/auth/signin", {
            email,
            password
        })
        console.log(signInResponse)
        return {
            token: signInResponse.data.token,
            user: signInResponse.data.user
        }
    } catch (error) {
        throw Error()
    }
}