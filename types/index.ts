export interface IUser {
    id: string
    name: string
    email: string
    isActive: boolean
    emailVerifiedAt?: Date
    createdAt?: Date 
    updatedAt?: Date
}

export interface ICredentials {
    email: string
    password: string
}

export interface IRegistration {
    name: string
    email: string
    password: string
}

export interface ILink {
    id?: string
    shortLink: string
    fullLink: string 
    createdAt?: Date 
    updatedAt?: Date
    ownerId: Object
}