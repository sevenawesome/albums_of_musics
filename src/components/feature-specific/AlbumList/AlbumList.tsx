import type { AlbumListProps } from "./AlbumList.types";
import { useState } from "react";
import { AlbumListViewModeEnum } from "./AlbumListViewMode.enum";
import Icon from "../../common/Icon/Icon";
import { ICON_CONSTANTS } from "../../../features/constants/icon.constants";


const assetsUrl = import.meta.env.VITE_ASSETS_BASE_URL;

export default function AlbumList({ albums, onAlbumClick, viewMode }: AlbumListProps) {

    const [selectedViewMode, setSelectedViewMode] = useState(viewMode || 'card');

    const onChangeViewMode = () => {
        setSelectedViewMode(prevMode => {
            if (prevMode === AlbumListViewModeEnum.List) {
                return AlbumListViewModeEnum.Card;
            } else {
                return AlbumListViewModeEnum.List;
            }
        });
    }

    const generateAlbumList = () => {

        return <>
            <ul className="p-5 divide-y divide-gray-200 dark:divide-gray-700">
                {albums.map((album) => {
                    return (
                        <li className="pb-3 sm:pb-4 hover:bg-gray-100 hover:p-5" key={album.id} onClick={() => onAlbumClick && onAlbumClick(album)}>
                            <div className="flex items-center space-x-5 rtl:space-x-reverse">
                                <div className="shrink-0">
                                    <img className="w-25 h-30 p-1 b-1" src={`${assetsUrl}${album.imageName}`} alt="Neil image" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {album.name}
                                    </p>
                                    <p className="text-sm text-gray-500  dark:text-gray-400">
                                        {album?.description ? album.description : "No description available"}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {album?.songs ? album.songs.length : 0} {album.type}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    }

    const generateAlbumCard = () => {
        return <>
            <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-rows-3 sm:grid-cols-2 gap-4 p-5 ">

                {albums.map((album) => {
                    return (
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-amber-100 hover:p-5" key={album.id} onClick={() => onAlbumClick && onAlbumClick(album)}>
                            <a href="#">
                                <img className="rounded-t-lg" src={`${assetsUrl}${album.imageName}`} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{album.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{album?.description ? album.description : "No description available"}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {album?.songs ? album.songs.length : 0} {album.type}
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                    <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18c0 1.1046-.89543 2-2 2s-2-.8954-2-2 .89543-2 2-2 2 .8954 2 2Zm0 0V6.33333L18 4v11.6667M8 10.3333 18 8m0 8c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z" />
                                    </svg>


                                </a>
                            </div>
                        </div>
                    );
                }
                )}
            </div>
        </>
    }

    return (
        <>
            <div className="flex justify-center w-full ">
                <div className="w-full max-w-7xl">
                    <div className="flex justify-end">
                        <button onClick={onChangeViewMode} type="button" className="text-white bg-amber-300 m-5 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {selectedViewMode === AlbumListViewModeEnum.List ? <Icon name={ICON_CONSTANTS.listIcon} className="w-5 text-black" /> : <Icon name={ICON_CONSTANTS.cardIcon} className="w-5 text-black" />}
                            <span className="sr-only">Icon description</span>
                        </button>

                    </div>
                    <div className="pb-20">
                        {selectedViewMode === AlbumListViewModeEnum.List && generateAlbumList()}
                        {selectedViewMode === AlbumListViewModeEnum.Card && generateAlbumCard()}
                        {albums.length === 0 && (
                            <div className="text-center text-gray-500 dark:text-gray-400"><p>No albums found.</p></div>)}
                    </div>
                </div>
            </div>

        </>
    );

}