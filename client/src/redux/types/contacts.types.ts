export type ContactsType = {
    contacts: Array<ContactsInfoType>,
}
export type ContactsInfoType = {
    _id: number,
    companyName: string,
    personName: string,
    address: string,
    phoneNumber: string,
    email: string,
    site: string,
}