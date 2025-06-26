import type { Album } from "../../../features/types/globalTypes";

export default interface SearchAlbumBarProps {
    placeholder?: string;
    onUpdateAlbumList: (albumList:Album[]) => void;
    albumList: Album[];
}