

export interface User {
    username: string,
    email: string,
    password: string
}

export interface UserEnvelope{
    user: User;
    listOfUsers: User[];
}

export interface UserCreateCommand {
    user: UserCreateUserData;
}

export interface UserCreateUserData {
    username: string;
    email:string;
    password:string;
}

export interface UserLoginCommand{
    user: UserLoginUserData;
}

export interface UserLoginUserData {
    email:string;
    password:string;
}

