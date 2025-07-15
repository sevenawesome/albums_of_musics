import type { Song } from "../../../features/types/globalTypes";

export default interface SearchSongBarProps {
    placeholder?: string;
    onUpdateSongList: (songList:Song[]) => void;
    songList: Song[];
}