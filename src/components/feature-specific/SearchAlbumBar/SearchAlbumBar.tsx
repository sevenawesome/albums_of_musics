import { ICON_CONSTANTS } from "../../../features/constants/icon.constants";
import Icon from "../../common/Icon/Icon";
import type SearchAlbumBarProps from "./SearchAlbumBar.types";
import { useRef } from 'react';

export default function SearchAlbumBar({ albumList, placeholder, onUpdateAlbumList }: SearchAlbumBarProps) {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handlerFilterLogic = () => {
        if (!searchInputRef.current) return;
        const searchText = searchInputRef.current.value.toLowerCase();
        const filteredAlbums = albumList.filter(album =>
            album.name.toLowerCase().includes(searchText) ||
            album.description.toLowerCase().includes(searchText) ||
            album.artist.name.toLowerCase().includes(searchText)
        );
        onUpdateAlbumList(filteredAlbums);
    }

    return <>
        <form className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Icon name={ICON_CONSTANTS.searchIcon} />
                </div>
                <input onChange={handlerFilterLogic} ref={searchInputRef} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
            </div>
        </form>
    </>

}