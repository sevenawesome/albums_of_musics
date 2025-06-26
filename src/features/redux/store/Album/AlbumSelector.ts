import type GlobalState from "../GlobalState.types";
import { createSelector } from "reselect";

const selectAllAlbums = (state: GlobalState) => state.album.albums;

export const selectAlbumById = createSelector(
    [selectAllAlbums, (state: GlobalState, id) => id],
    (albums, id) => {
        return albums.find(album => album.id === id);
    }
);



