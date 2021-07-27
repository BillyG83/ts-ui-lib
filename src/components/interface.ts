export interface AddressInterface {
    street: string,
    number: number,
    zip: string,
}

export interface UserInterface {
    name: string,
    age: number,
    country: string,
    address: AddressInterface,
    admin: boolean,
}