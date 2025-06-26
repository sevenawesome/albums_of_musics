import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './Album/AlbumSlice';
const store = configureStore({
    reducer: {album:albumReducer},
});


export default store; 