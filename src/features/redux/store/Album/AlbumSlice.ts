import { createSlice } from "@reduxjs/toolkit";
import type { AlbumState } from "./AlbumState.type";
import { AlbumTypeEnum } from "../../../enums/albumType.enum";
/*
const initialState: AlbumState = {
    albums: [],
};
*/


const initialState: AlbumState = {
    albums: [{
                id: "1",
                name: "Himario Adventista (Nuevo)",
                type: AlbumTypeEnum.Hymns,
                description: "Un himario que contiene los himnos más recientes de la iglesia adventista mundial.",
                imageName: 'HimarioAdventistaNuevo.png',
                artist:  {
                    id: "1",
                    name: "IASD MUNDIAL",
                    imageName: "mudial_image_placeholder",
                    },
                songs: [],
                releaseDate: "2025-06-25T13:55:42.929Z",
                createDate: "2025-06-25T13:55:42.929Z"
            },
            {
                id: "2",
                name: "Himario Adventista (Antiguo)",
                type: AlbumTypeEnum.Hymns,
                description: "Un himario que contiene los himnos más recientes de la iglesia adventista mundial.",
                imageName: 'HimarioAdventistaAntiguo.png',
                artist:  {
                    id: "1",
                    name: "IASD MUNDIAL",
                    imageName: "mudial_image_placeholder",
                    },
                songs: [],
                releaseDate: "2025-06-25T13:55:42.929Z",
                createDate: "2025-06-25T13:55:42.929Z"
            },
            {
                id: "3",
                name: "Nuevo Almbum de Oliver",
                type: AlbumTypeEnum.Songs,
                imageName: 'EmptyMusicIcon.png',
                artist: {
                    id: "1",
                    name: "Oliver Bencosme",
                    imageName: "mudial_image_placeholder",
                },
                songs: [],
                releaseDate: "2025-06-25T13:55:42.929Z",
                createDate: "2025-06-25T13:55:42.929Z",
                description: ""
            },
            {
                id: "4",
                name: "Nuevo Almbum de Romer",
                type: AlbumTypeEnum.Songs,
                imageName: 'EmptyMusicIcon.png',
                artist: {
                    id: "1",
                    name: "Romer Baldera",
                    imageName: "mudial_image_placeholder",
                },
                songs: [],
                releaseDate: "2025-06-25T13:55:42.929Z",
                createDate: "2025-06-25T13:55:42.929Z",
                description: ""
            },

            
    ],
};

const albumSlice = createSlice({
    name: "album",
    initialState:initialState,
    reducers: {
        setAlbums: (state, action) => {
            state.albums = action.payload;
        },
        addAlbum: (state, action) => {
            state.albums.push(action.payload);
        },
        removeAlbum: (state, action) => {
            state.albums = state.albums.filter(album => album.id !== action.payload);
        },
    },
});

export const albumActions = albumSlice.actions;
export default albumSlice.reducer;