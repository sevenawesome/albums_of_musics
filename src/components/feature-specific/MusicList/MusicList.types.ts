import type { Song } from "../../../features/types/globalTypes";

export default interface MusicListProps{
    list:Song[],
    onSongClick?: (song:Song) => void;
}