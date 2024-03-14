import { IAsset } from "./asset.interface"

export interface IUser {
    _id: string,
    username: string,
    password: string,
    email: string,
    mobile: string
}


export interface IProfile {
    _id: string,
    dp: IAsset,
    user_access_fields: {
        is_deletion_allowed: boolean,
        is_hidden: boolean,
        is_editable: boolean
    }
}