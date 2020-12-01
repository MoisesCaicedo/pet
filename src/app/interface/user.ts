export interface IUserCredential {
    email: string,
    password: string
}

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}


export interface ISingleUser {
    data: IUser;
    support: Support;
}

export interface Support {
    url: string;
    text: string;
}
