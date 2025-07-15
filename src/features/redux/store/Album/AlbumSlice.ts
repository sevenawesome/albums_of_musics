import { createSlice } from "@reduxjs/toolkit";
import type { AlbumState } from "./AlbumState.type";
import { AlbumTypeEnum } from "../../../enums/albumType.enum";
import { MusicTypeEnum } from "../../../enums/musicType.enum";
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
                songs: [{
                          id: "1",
                          title: "Cantad alegres al Señor",
                          artist: {
                            id: "1",
                            name: "IASD MUNDIAL",
                            imageName: "mudial_image_placeholder",
                          },
                          type: MusicTypeEnum.TRACK,
                          albumId: '1',
                          albumName:'Himario Adventista (Nuevo)',
                          duration: 3.5,
                          durationLabel: '2:24',
                          coverUrl: '',
                          audioUrl: '',
                          lyrics: {
                              id: '1',
                              songId: '1',
                              content: [{
                                  id: '1',
                                  lyricsId: '1',
                                  orderNumber: 1, 
                                  isChorus: false,
                                  texts: ['Cantad alegres al Señor,','mortales todos por doquier;','servidle siempre con fervor,','obedecedle con placer.'],
                                },{
                                  id: '2',
                                  lyricsId: '1',
                                  orderNumber: 2, 
                                  isChorus: false,
                                  texts: ['Con gratitud canción alzad','al Hacedor que el ser os dio;','al Dios excelso venerad,','que como Padre nos amó.'],
                                },{
                                  id: '3',
                                  lyricsId: '1',
                                  orderNumber: 3, 
                                  isChorus: false,
                                  texts: ['Su pueblo somos: salvará','a los que busquen al Señor','ninguno de ellos dejará;','él los ampara con su amor.'],
                                },],
                              karaoke: [{
                                  id: '1',
                                  lyricsId: '1',
                                  orderNumber: 1,
                                  isChorus: false,
                                  text: [],
                                }],
                            },
                          orderNumber: 1,
                          releaseDate: "2025-06-25T13:55:42.929Z",
                          createDate: "2025-06-25T13:55:42.929Z",
                        },{
                          id: "2",
                          title: "Cantad alegres al Señor 2",
                          artist: {
                            id: "1",
                            name: "IASD MUNDIAL",
                            imageName: "mudial_image_placeholder",
                          },
                          type: MusicTypeEnum.TRACK,
                          albumId: '1',
                          albumName:'Himario Adventista (Nuevo)',
                          duration: 3.5,
                          durationLabel: '2:24',
                          coverUrl: '',
                          audioUrl: '',
                          lyrics: {
                              id: '1',
                              songId: '2',
                              content: [{
                                  id: '2',
                                  lyricsId: '1',
                                  orderNumber: 1, 
                                  isChorus: false,
                                  texts: ['Cantad alegres al Señor,','mortales todos por doquier;','servidle siempre con fervor,','obedecedle con placer.'],
                                },{
                                  id: '2',
                                  lyricsId: '1',
                                  orderNumber: 2, 
                                  isChorus: false,
                                  texts: ['Con gratitud canción alzad','al Hacedor que el ser os dio;','al Dios excelso venerad,','que como Padre nos amó.'],
                                },{
                                  id: '3',
                                  lyricsId: '1',
                                  orderNumber: 3, 
                                  isChorus: false,
                                  texts: ['Su pueblo somos: salvará','a los que busquen al Señor','ninguno de ellos dejará;','él los ampara con su amor.'],
                                },],
                              karaoke: [{
                                  id: '1',
                                  lyricsId: '1',
                                  orderNumber: 1,
                                  isChorus: false,
                                  text: [],
                                }],
                            },
                          orderNumber: 2,
                          releaseDate: "2025-06-25T13:55:42.929Z",
                          createDate: "2025-06-25T13:55:42.929Z",
                        },{
                          id: "3",
                          title: "Cantad alegres al Señor 3",
                          artist: {
                            id: "1",
                            name: "IASD MUNDIAL",
                            imageName: "mudial_image_placeholder",
                          },
                          type: MusicTypeEnum.TRACK,
                          albumId: '1',
                          albumName:'Himario Adventista (Nuevo)',
                          duration: 3.5,
                          durationLabel: '2:24',
                          coverUrl: '',
                          audioUrl: '',
                          lyrics: {
                              id: '1',
                              songId: '3',
                              content: [{
                                  id: '3',
                                  lyricsId: '1',
                                  orderNumber: 1, 
                                  isChorus: false,
                                  texts: ['Cantad alegres al Señor,','mortales todos por doquier;','servidle siempre con fervor,','obedecedle con placer.'],
                                },{
                                  id: '2',
                                  lyricsId: '1',
                                  orderNumber: 2, 
                                  isChorus: false,
                                  texts: ['Con gratitud canción alzad','al Hacedor que el ser os dio;','al Dios excelso venerad,','que como Padre nos amó.'],
                                },{
                                  id: '3',
                                  lyricsId: '1',
                                  orderNumber: 3, 
                                  isChorus: false,
                                  texts: ['Su pueblo somos: salvará','a los que busquen al Señor','ninguno de ellos dejará;','él los ampara con su amor.'],
                                },],
                              karaoke: [{
                                  id: '1',
                                  lyricsId: '1',
                                  orderNumber: 1,
                                  isChorus: false,
                                  text: [],
                                }],
                            },
                          orderNumber: 3,
                          releaseDate: "2025-06-25T13:55:42.929Z",
                          createDate: "2025-06-25T13:55:42.929Z",
                        }],
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