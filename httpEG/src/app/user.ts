

export interface User{
    username: string,
    email: string,
    password: string
}

export interface UserEnvelope{
    user: User;
}

export interface CreateNewUser {
    user: User
   
}