import {IImages, ITags, IUser, TResourceType} from "@/store/types/common";

export interface IYourPlaylists {
    data: IDataPlaylist[];
};

export interface IPublicPlayList {
    data: IDataPlaylist;
};

export interface IDataPlaylist {
    id: string;
    type: TResourceType;
    attributes: IAttributes;
};

export interface IAttributes {
    title: string;
    addedAt: string;
    updatedAt: string;
    order: number;
    user: IUser;
    images: IImages;
    tags: ITags[];
    likesCount: number;
    dislikesCount: number;
    currentUserReaction: number;
    description: string;
    tracksCount: number;
    duration: number;
}

// {
//     "data": [
//     {
//         "id": "string",
//         "type": "playlists",
//         "attributes": {
//             "title": "string",
//             "addedAt": "2026-05-07T16:44:00.757Z",
//             "updatedAt": "2026-05-07T16:44:00.757Z",
//             "order": 0,
//             "user": {
//                 "id": "string",
//                 "name": "string"
//             },
//             "images": {
//                 "main": [
//                     {
//                         "type": "original",
//                         "width": 0,
//                         "height": 0,
//                         "fileSize": 0,
//                         "url": "string"
//                     }
//                 ]
//             },
//             "tags": [
//                 {
//                     "id": "string",
//                     "name": "string"
//                 }
//             ],
//             "likesCount": 0,
//             "dislikesCount": 0,
//             "currentUserReaction": 0,
//             "tracksCount": 0,
//             "duration": 0
//         }
//     }
// ]
// }