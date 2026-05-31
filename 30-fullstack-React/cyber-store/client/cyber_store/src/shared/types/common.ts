export type TMessage = string;
export type TRole = "ADMIN" | "USER";

export interface IUser {
    id: number;
    email: string;
    role: TRole;
}

export interface IInfoDevice {
    description: string
    deviceId: number;
    id: number
    title: string
};

export interface IDevice {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    info: IInfoDevice[];
    images: string[],
    typeId: number,
    brandId: number
};


export interface IAllDevices {
    data: IDevice[];
    total?: number;
    page?: number;
    totalCount: number;
    limit?: number;
};

export interface IType {
    id: number
    name: string;
    icon: string;
};

export interface IAllTypes {
    data: IType[];
    message: TMessage;
    count: number;
};

export interface IBrand {
    id: number
    name: string;
};

export interface IAllBrands {
    data: IBrand[];
    message: string;
    count: number;
};

export interface IDecodedToken {
    id: number;
    email: string;
    role: TRole;
    iat?: number;
    exp?: number;
};




