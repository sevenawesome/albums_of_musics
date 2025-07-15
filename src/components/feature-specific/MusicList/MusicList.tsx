import { ICON_CONSTANTS } from "../../../features/constants/icon.constants";
import Icon from "../../common/Icon/Icon";
import type MusicListProps from "./MusicList.types";

export default function MusicList({list,onSongClick}:MusicListProps){

    return (
        <>
            <ul className="p-5 divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
                {list.map((song) => {
                    return (
                        <li className="pb-3 sm:pb-4 hover:bg-gray-100 hover:p-5" key={song.id} onClick={() => onSongClick && onSongClick(song)}>
                            <div className="flex items-center space-x-5 rtl:space-x-reverse">
                                <div className="shrink-0">
                                    <Icon name={ICON_CONSTANTS.music} className="w-6 h-6 text-gray-800 dark:text-white" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {song.title}
                                    </p>
                                    <p className="text-sm text-gray-500  dark:text-gray-400 ">
                                        {song?.orderNumber ? song.orderNumber+" • " : "0 • "}{song?.albumName ? song.albumName : "No album Name Provided"}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    {song?.durationLabel ? song.durationLabel : "0:00"}
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}