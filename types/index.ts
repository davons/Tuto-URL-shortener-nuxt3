export interface IUser {
    "@context": string
    "@id": string
    "@type": string
    id: string
    name: string
    email: string
    isActive: true,
    createdAt: Date
    updatedAt: Date
    emailVerifiedAt?: Date
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
    "@context"?: string
    "@id"?: string
    "@type"?: string
    id?: string
    shortLink: string
    fullLink: string
    createdAt?: Date
    updatedAt?:Date
    owner?: Object
}

export interface IResponse {
    "hydra:member":Object[]
    "hydra:totalItems": number
    "hydra:view": Object
    "hydra:search": Object
}