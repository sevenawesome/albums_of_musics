export const MusicTypeEnum = {
    TRACK: 'track',
    PODCAST: 'podcast',
    EPISODE: 'episode',
    AUDIOBOOK: 'audiobook',
    SHOW: 'show',
    VIDEO: 'video',
    MOVIE: 'movie',
    TV_SHOW: 'tv_show',
    DOCUMENTARY: 'documentary'
} as const;

export type MusicTypeEnum = typeof MusicTypeEnum[keyof typeof MusicTypeEnum];