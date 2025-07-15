import type GlobalState from "../GlobalState.types";
import { createSelector } from "reselect";

const selectAllAlbums = (state: GlobalState) => state.album.albums;

export const selectAlbumById = createSelector(
    [selectAllAlbums, (state: GlobalState, id) => id],
    (albums, id) => {
        return albums.find(album => album.id === id);
    }
);

export const selectSongById = createSelector(
    [selectAllAlbums, (state: GlobalState, albumId,songId) => {return {albumId,songId}}],
    (albums, {albumId,songId}) => {
        return albums.find(a=>a.id === albumId)?.songs?.find(s=> s.id === songId)
    }
);



