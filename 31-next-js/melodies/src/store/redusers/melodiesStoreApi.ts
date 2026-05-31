import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITracksPublic} from "@/store/types/tracksPublic";
import {IPublicPlayList, IYourPlaylists} from "@/store/types/playLists";
import {IAddTrackToMyPlaylist} from "@/store/types/addTrackToMyPlaylist";
import {ITracksToPlayListByIdData} from "@/store/types/tracksToPlayListById";
import {ILogin, ILoginCredentials} from "@/store/types/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://musicfun.it-incubator.app/api/1.0";

type TLoginResponse = ILogin;
type TILoginCredentialsQuery = ILoginCredentials;
type TTracksPublicResponse = ITracksPublic;
type TYourPlaylistsResponse = IYourPlaylists;
type TCreatePlayListResponse = IPublicPlayList;
type TGetPlayListBiIdResponse = IPublicPlayList;
type TUploadTrackResponse = IAddTrackToMyPlaylist;
type ITracksToPlayListByIdDataResponse  = ITracksToPlayListByIdData;

export const melodiesStoreApi = createApi({
    reducerPath: 'melodiesStoreApi',
    tagTypes: ["Playlists", "Tracks"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('api-key', process.env.NEXT_PUBLIC_API_KEY || '');
            const token = localStorage.getItem('accessToken');
            if (token) {
                const cleanToken = token.replace(/^"|"$/g, '');
                headers.set('authorization', `Bearer ${cleanToken}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTrendingSongs: builder.query<TTracksPublicResponse, { pageNumber: number, pageSize: number }>({
            query: ({pageNumber, pageSize}) => `playlists/tracks?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=publishedAt&sortDirection=desc`,
            providesTags: (result) => [
                { type: 'Tracks' as const, id: 'LIST' },
                ...(result?.data?.map((track) => ({ type: 'Tracks' as const, id: track.id })) ?? [])
            ]
        }),
        getPlaylistsPublic: builder.query<TTracksPublicResponse, void>({
            query: () => `playlists`
        }),
        login: builder.mutation<TLoginResponse, TILoginCredentialsQuery>({
            query: (credentials) => ({
                url: `auth/simple/login`,
                method: "POST",
                body: credentials,
            })
        }),
        refresh: builder.mutation<TLoginResponse, { refreshToken: string }>({
            query: ({refreshToken}) => ({
                url: `auth/simple/refresh`,
                method: "POST",
                body: {refreshToken},
            })
        }),
        logout: builder.mutation<void, { refreshToken: string }>({
            query: ({ refreshToken }) => ({
                url: `auth/simple/logout`,
                method: "POST",
                body: { refreshToken },
            })
        }),
        getAllYourPlaylists: builder.query<TYourPlaylistsResponse, void>({
            query: () => '/playlists/my',
            providesTags: ['Playlists']
        }),
        getYourPlaylistById: builder.query<TGetPlayListBiIdResponse, {playlistId: string}>({
            query: ({playlistId}) => `/playlists/${playlistId}`,
            providesTags: (result, error, { playlistId }) => [{ type: 'Playlists', id: playlistId }],
        }),
        createPlaylist: builder.mutation<TCreatePlayListResponse, {title: string, description?: string}>({
            query: ({title, description = ""}) => ({
                url: `playlists`,
                method: "POST",
                body: {
                    data: {
                        type: "playlists",
                        attributes: {
                            title,
                            description: description,
                        }
                    }
                }
            }),
            invalidatesTags: ['Playlists']
        }),
        uploadPlaylistCover: builder.mutation({
            query: ({ playlistId, file }) => ({
                url: `/playlists/${playlistId}/images/main`,
                method: 'POST',
                body: file,
            }),
            invalidatesTags: (result, error, { playlistId }) => [
                { type: 'Playlists', id: playlistId },
                { type: 'Playlists' },  // ← добавить
            ],
        }),
        uploadTrack: builder.mutation<TUploadTrackResponse, FormData>({
            query: (formData) => ({
                url: `/playlists/tracks/upload`,
                method: "POST",
                body: formData,
                // formData: true,
            })
        }),
        deleteYourPlaylistById: builder.mutation<void, {playlistId: string}>({
            query: ({ playlistId }) => ({
                url: `/playlists/${playlistId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Playlists'],
        }),
        deleteYourPlaylistCoverById: builder.mutation<void, {playlistId: string}>({
            query: ({ playlistId }) => ({
                url: `/playlists/${playlistId}/images/main`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, { playlistId }) => [
                { type: 'Playlists', id: playlistId },  // ← обновить конкретный плейлист
            ],
        }),
        addTrackToMyPlaylist: builder.mutation<void, {playlistId: string, trackId: string}>({
            query: ({ playlistId, trackId }) => ({
                url: `/playlists/${playlistId}/relationships/tracks`,
                method: 'POST',
                body: {
                    data: {
                        type: "playlist-tracks",
                        attributes: {
                            trackId: trackId
                        }
                    }
                }
            }),
        }),
        getTracksToPlayListById: builder.query<ITracksToPlayListByIdDataResponse, {playlistId: string}>({
            query: ({playlistId}) => ({
                url: `/playlists/${playlistId}/tracks`,
                method: "GET",
             }),
            providesTags: (result, error, { playlistId }) => [{ type: 'Tracks', id: playlistId }],
        }),
        toggleLikeToTrackById: builder.mutation<void, {trackId: string}>({
            query: ({trackId}) => ({
                url: `/playlists/tracks/${trackId}/likes`,
                method: "POST",
            }),
            invalidatesTags: (result, error, { trackId }) => [
                { type: 'Tracks' as const, id: trackId },  // ← конкретный трек
                { type: 'Tracks' as const, id: 'LIST' }     // ← список треков (если нужно)
            ],
        }),
        toggleDislikeToTrackById: builder.mutation<void, {trackId: string}>({
            query: ({trackId}) => ({
                url: `/playlists/tracks/${trackId}/dislikes`,
                method: "POST",
            })
        }),
    })
});

export const {
    useGetTrendingSongsQuery,
    useGetPlaylistsPublicQuery,
    useLoginMutation,
    useLogoutMutation,
    useGetAllYourPlaylistsQuery,
    useCreatePlaylistMutation,
    useGetYourPlaylistByIdQuery,
    useUploadPlaylistCoverMutation,
    useDeleteYourPlaylistByIdMutation,
    useDeleteYourPlaylistCoverByIdMutation,
    useUploadTrackMutation,
    useAddTrackToMyPlaylistMutation,
    useGetTracksToPlayListByIdQuery,
    useToggleLikeToTrackByIdMutation,
    useToggleDislikeToTrackByIdMutation,
} = melodiesStoreApi;

export default melodiesStoreApi