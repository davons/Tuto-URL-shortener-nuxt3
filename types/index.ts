export interface User {
    id?: string
    name: string
    email: string
}

export interface Credentials {
    email: string
    password: string
}

export interface Registration {
    name: string
    email: string
    plainPassword: string
}

export interface Link {
    id?: string
    shortLink: string
    fullLink: string 
    createdAt?: Date 
    updatedAt?: Date
}