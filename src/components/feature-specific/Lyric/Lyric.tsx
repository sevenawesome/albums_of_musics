import type LyricProps from "./Lyric.type";

export default function Lyric({lyric,isKaraoke}:LyricProps){

    const createBasicLyrics = ()=>{
        return lyric.content.map(lyric=>{
            return (lyric.texts.map((text,index)=>{
                if(index === (lyric.texts.length - 1)){
                    return <><p>{text}</p><br/></>
                }else{
                    return <p>{text}</p>
                }
            }))
        })
    }

    const createKaraokeLyrics = ()=>{
        return lyric?.karaoke.map(lyricK=>{
            return <p>{lyricK?.text}</p>
        })
    }



    return <>
        <div className="flex flex-col justify-center items-center">
            {isKaraoke ? createKaraokeLyrics() : createBasicLyrics()}
        </div>
    </>
}