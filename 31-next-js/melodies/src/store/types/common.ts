export interface IUser {
    id: string;
    name: string;
};

export interface IAttachment {
    id: string;
    addedAt: string;
    updatedAt: string;
    version: number;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
};

export interface IBaseTrackAttributes {
    title: string;
    addedAt: string;
    attachments: IAttachment[];
    images: IImages;
    currentUserReaction: number;
    publishedAt: string;
    duration: number;
};

export interface IAddTrackToMyPlayListAttributes extends IBaseTrackAttributes {
    lyrics: string;
    releaseDate: string;
    updatedAt: string;
    tags: ITags[];
    artists: IArtists[];
    user: IUser;
    isPublished: boolean,
    currentUserReaction: number;
};

export interface ITracksToPlayListByIdAttributes extends IBaseTrackAttributes {
    order: number;
    updatedAt: string;
};

export interface ITrackAttributes extends IBaseTrackAttributes {
    user: IUser;
    likesCount?: number;
    isPublished?: boolean;
};

export interface IImages {
    main: IMain[]
};

export interface IMain {
    type: IMageType;
    width: number;
    height: number;
    fileSize: number;
    url: string;
};

export interface ITags {
    id: string;
    name: string;
};

export interface IArtists {
    id: string;
    name: string;
};

export interface IMetaBase {
    totalCount: number;
};

export interface ITracksPublicMeta extends IMetaBase {
    page: number;
    pageSize: number;
    pagesCount: number;
    nextCursor: string | null;
};

export interface IRelationships {
    artists: IRelationshipsArtists;
};

interface IRelationshipsArtists {
    data: IRelationshipData[];
};

interface IRelationshipData {
    id: string;
    type: string;
};

export interface IIncluded {
    id: string;
    type: string;
    attributes: {
        name: string;
    }
};

export const RESOURCE_TYPES = {
    PLAYLISTS: "playlists",
    TRACKS: "tracks",
    TAGS: "tags",
} as const;

export const IMAGES_TYPES = {
    THUMBNAIL: 'thumbnail',
    MEDIUM: 'medium',
    ORIGINAL: 'original',
} as const;

export type IMageType = typeof IMAGES_TYPES[keyof typeof IMAGES_TYPES];

export type TResourceType  = typeof RESOURCE_TYPES[keyof typeof RESOURCE_TYPES];

