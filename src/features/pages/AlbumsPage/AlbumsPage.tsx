import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAlbumById } from "../../redux/store/Album/AlbumSelector.ts";
import type GlobalState from "../../redux/store/GlobalState.types.ts"; // Make sure this import path is correct

export default function AlbumsPage() {
    const { albumId } = useParams();
    const album = useSelector((state: GlobalState) =>
        albumId ? selectAlbumById(state, albumId) : undefined
    );
    return (
        <>
            <h1>Album ID: {albumId}</h1>
            <p>This is the Albums page. {album?.name}</p>
            <p>Total {album?.type}: {album?.songs?.length}</p>

        </>
    );
}