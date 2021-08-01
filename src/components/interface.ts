export interface AddressInterface {
    number: number,
    street: string,
    zip: string,
}

export interface UserInterface {
    address: AddressInterface,
    admin: boolean,
    age: number,
    country: string,
    name: string,
    sex: string,
}
