import {IAddTrackToMyPlayListAttributes, TResourceType} from "@/store/types/common";

export interface IAddTrackToMyPlaylist {
    id: string;
    type: TResourceType;
    attributes: IAddTrackToMyPlayListAttributes;
};

interface IAttachments {
    id: string;
    addedAt: string;
    updatedAt: string;
    version: number;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
};



//
// "data": {
//     "id": "string",
//         "type": "tracks",
//         "attributes": {
//         "title": "string",
//             "lyrics": "string",
//             "releaseDate": "2026-05-15T17:55:13.930Z",
//             "addedAt": "2026-05-15T17:55:13.930Z",
//             "updatedAt": "2026-05-15T17:55:13.930Z",
//             "duration": 0,
//             "likesCount": 0,
//             "attachments": [
//             {
//                 "id": "string",
//                 "addedAt": "2026-05-15T17:55:13.930Z",
//                 "updatedAt": "2026-05-15T17:55:13.930Z",
//                 "version": 0,
//                 "url": "https://cdn.example.com/uploads/track123/cover.jpg",
//                 "contentType": "image/jpeg",
//                 "originalName": "cover.jpg",
//                 "fileSize": 34872
//             }
//         ],
//             "images": {
//             "main": [
//                 {
//                     "type": "original",
//                     "width": 0,
//                     "height": 0,
//                     "fileSize": 0,
//                     "url": "string"
//                 }
//             ]
//         },
//         "tags": [
//             {
//                 "id": "string",
//                 "name": "string"
//             }
//         ],
//             "artists": [
//             {
//                 "id": "string",
//                 "name": "string"
//             }
//         ],
//             "user": {
//             "id": "string",
//                 "name": "string"
//         },
//         "isPublished": true,
//             "publishedAt": "2026-05-15T17:55:13.930Z",
//             "currentUserReaction": 0
//     }
// }
// }