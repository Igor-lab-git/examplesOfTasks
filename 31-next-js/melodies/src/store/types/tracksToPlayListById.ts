import {
    IIncluded,
    IMetaBase,
    IRelationships,
    ITracksToPlayListByIdAttributes,
    TResourceType
} from "@/store/types/common";

export interface ITracksToPlayListByIdData {
    data: ITracksToPlayListById[];
    meta: IMetaBase;
    included: IIncluded[];
}

export interface ITracksToPlayListById {
    id: string;
    type: TResourceType
    attributes: ITracksToPlayListByIdAttributes;
    relationships: IRelationships
};




// const obj = {
//     data: [
//     {
//         id: "string",
//         type: "tracks",
//         attributes: {
//             title: "string",
//             order: 0,
//             addedAt: "2026-05-17T16:34:39.624Z",
//             updatedAt: "2026-05-17T16:34:39.624Z",
//             attachments: [
//                 {
//                     id: "string",
//                     addedAt: "2026-05-17T16:34:39.624Z",
//                     updatedAt: "2026-05-17T16:34:39.624Z",
//                     version: 0,
//                     url: "https://cdn.example.com/uploads/track123/cover.jpg",
//                     contentType: "image/jpeg",
//                     originalName: "cover.jpg",
//                     fileSize: 34872
//                 }
//             ],
//             images: {
//                 main: [
//                     {
//                         type: "original",
//                         width: 0,
//                         height: 0,
//                         fileSize: 0,
//                         url: "string"
//                     }
//                 ]
//             },
//             currentUserReaction: 0,
//             publishedAt: "2026-05-17T16:34:39.624Z",
//             duration: 0
//         },
//         relationships: {
//             artists: {
//                 data: [
//                     {
//                         id: "string",
//                         type: "string"
//                     }
//                 ]
//             }
//         }
//     }
// ],
//     meta: {
//     totalCount: 0
// },
//     included: [
//     {
//         id: "string",
//         type: "string",
//         attributes: {
//             name: "string"
//         }
//     }
// ]
// }