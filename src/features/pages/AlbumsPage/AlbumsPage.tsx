import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAlbumById } from "../../redux/store/Album/AlbumSelector.ts";
import type GlobalState from "../../redux/store/GlobalState.types.ts"; // Make sure this import path is correct
import MusicList from "../../../components/feature-specific/MusicList/MusicList.tsx";
import Header from "../../../components/common/Header/Header.tsx";
import { useNavigate } from "react-router-dom";
import type { Song } from "../../types/globalTypes.ts";
import GoBackLink from "../../../components/common/GoBackLink/GoBackLink.tsx";
import SearchSongBar from "../../../components/feature-specific/SearchSongBar/SearchSongBar.tsx";
import { useState } from "react";
export default function AlbumsPage() {
    const { albumId } = useParams();
    const album = useSelector((state: GlobalState) =>
        albumId ? selectAlbumById(state, albumId) : undefined
    );
    const [filteredSongs, setFilteredSongs] = useState<Song[]>(album?.songs ? album.songs : []);
    const navigate = useNavigate();

    const onSelectedSong = (song: Song) => {
        navigate(`/song/${albumId}/in/${song.id}`);
    }

    const onUpdateSongList = (songList: Song[]) => {
            setFilteredSongs(songList);
    }

    return (
        
        <>
            
            <Header>
                <div className="flex-row">
                    <GoBackLink />
                    <h1 className="font-bold pt-3 pl-2">{album?.name ? album.name : 'No album selected'}</h1> 
                </div>
            
            </Header>
            <div className='pt-20'>
                <SearchSongBar 
                    songList={album?.songs ? album.songs : []} 
                    placeholder={`Buscar ${album?.type} por numero o titulos o nombre del album`}
                     onUpdateSongList={onUpdateSongList} />
            </div>
            <div>
                <MusicList 
                    list={filteredSongs}
                    onSongClick={onSelectedSong} />
            </div>
    
        </>
    );
}