

export interface User {
    username: string,
    email: string,
    password: string
}

export interface UserEnvelope{
    user: User;
    listOfUsers: User[];
}

export interface CreateNewUser {
    user: User;
}

export interface LoginUser{
    user: User;
}