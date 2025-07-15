import { useParams } from "react-router-dom";
import Lyric from "../../../components/feature-specific/Lyric/Lyric";
import type GlobalState from "../../redux/store/GlobalState.types";
import { useSelector } from "react-redux";
import { selectSongById } from "../../redux/store/Album/AlbumSelector";
import type { Song } from "../../types/globalTypes";
import {useState} from 'react';
import GoBackLink from "../../../components/common/GoBackLink/GoBackLink";

export default function LyricPage(){
    const [isKaraoke,setIsKaraoke] = useState(false);
    const { albumId,songId } = useParams();
    const song:Song = useSelector((state: GlobalState) =>
        (songId && albumId) ? selectSongById(state, albumId,songId) : undefined
    );

    return <>
        <GoBackLink />
        <Lyric lyric={song.lyrics} isKaraoke={isKaraoke} />
    </>
}