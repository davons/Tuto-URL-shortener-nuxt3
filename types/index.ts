export interface IUser {
    id?: string
    name: string
    email: string
}

export interface ICredentials {
    email: string
    password: string
}

export interface IRegistration {
    name: string
    email: string
    plainPassword: string
}

export interface ILink {
    id?: string
    shortLink: string
    fullLink: string 
    createdAt?: Date 
    updatedAt?: Date
}