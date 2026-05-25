import {IIncluded, IRelationships, ITrackAttributes, ITracksPublicMeta, TResourceType} from "@/store/types/common";

export interface ITracksPublic {
    data: ITrack[];
    meta: ITracksPublicMeta;
    included: IIncluded[];
};

export interface ITrack {
    id: string;
    type: TResourceType;
    attributes: ITrackAttributes
    relationships: IRelationships;
};


