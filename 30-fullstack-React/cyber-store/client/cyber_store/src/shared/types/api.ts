import type {IAllBrands, IAllDevices, IAllTypes, IDecodedToken, IDevice, IUser, TMessage, TRole} from "./common.ts";


export type TDecodedToken = IDecodedToken;

export type TAllDevicesResponse = IAllDevices;

export type TGetOneDevicesByIdResponse = IDevice & TMessage;

export type TGetDevicesByTypeIdResponse = IAllDevices;

export type TGetAllTypesResponse = IAllTypes;

export type TGetAllBrandsResponse = IAllBrands;

export interface TTypeCreateResponse {
    id: number;
    name: string;
    icon?: string | null;
};

export interface ICreateBrandRequest {
    name: string;
};

export interface ICreateBrandResponse {
    id: number;
    name: string;
    icon: null | string;
};

export interface IDeviceCreateResponse {
    message: TMessage;
    data: IDevice;
};

export interface IUserResponse {
    id: number;
    email: string;
    role: TRole;
};

export interface IRegisterRequest {
    email: string;
    password: string;
    role: TRole;
};

export interface ILoginRequest {
    email: string;
    password: string;
    role: TRole;
};

export interface ICheckAuthResponse {
    success: string;
    user: IUser
    message: TMessage;
};














