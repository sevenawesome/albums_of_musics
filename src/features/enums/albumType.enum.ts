export const AlbumTypeEnum = {
    Hymns: 'hymns',
    Songs: 'songs',
    Devotionals: 'devotionals',
    Sermons: 'sermons',
    Other: 'other',
} as const;

export type AlbumTypeEnum = typeof AlbumTypeEnum[keyof typeof AlbumTypeEnum];
