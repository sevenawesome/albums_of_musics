import type { Album } from "../../../features/types/globalTypes";
import type { AlbumListViewModeEnum } from "./AlbumListViewMode.enum";

export interface AlbumListProps {
    albums: Album[],
    onAlbumClick?: (album:Album) => void;
    viewMode: AlbumListViewModeEnum;
}