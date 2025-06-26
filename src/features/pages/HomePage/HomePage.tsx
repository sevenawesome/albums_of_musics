import AlbumList from '../../../components/feature-specific/AlbumList/AlbumList.tsx';
import { useSelector } from 'react-redux';
import type GlobalState from '../../redux/store/GlobalState.types.ts';
import { AlbumListViewModeEnum } from '../../../components/feature-specific/AlbumList/AlbumListViewMode.enum.ts';
import type { Album } from '../../types/globalTypes.ts';
import { useState } from 'react';
import SearchBar from '../../../components/feature-specific/SearchAlbumBar/SearchAlbumBar.tsx';
import Header from '../../../components/common/Header/Header.tsx';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const allAlbums = useSelector((state: GlobalState) => state.album.albums);
    const [filteredAlbums, setFilteredAlbums] = useState<Album[]>(allAlbums || []);
    const navigate = useNavigate();

    const onSelectedAlbum = (album: Album) => {
        navigate(`/album/${album.id}`);
    }

    const onUpdateAlbumList = (albumList: Album[]) => {
        setFilteredAlbums(albumList);
    }

    return <>
        <Header>
            <SearchBar
                placeholder="Quick albums search..."
                onUpdateAlbumList={onUpdateAlbumList}
                albumList={allAlbums || []}
            />
        </Header>
        <div className='pt-15'>
            <AlbumList
                albums={filteredAlbums}
                onAlbumClick={onSelectedAlbum}
                viewMode={AlbumListViewModeEnum.List}
            />
        </div>

    </>
}