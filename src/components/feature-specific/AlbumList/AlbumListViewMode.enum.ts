
const AlbumListViewModeEnum = {
    Card: 'card',
    List: 'list',
} as const;

type AlbumListViewModeEnum = typeof AlbumListViewModeEnum[keyof typeof AlbumListViewModeEnum];

export { AlbumListViewModeEnum };