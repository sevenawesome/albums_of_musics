import type { Language } from "../enums/languages.enum";
import { SocialNetwork as SocialNetWorkEnum } from "../enums/socialNetwork.enum";
import type { AlbumTypeEnum } from "../enums/albumType.enum";
import type { MusicTypeEnum } from "../enums/musicType.enum";

export interface Album {
  id: string;
  name: string;
  type: AlbumTypeEnum; // Enum for album type (e.g., single, EP, LP)
  description: string;
  imageName?: string; // Optional, used for file uploads
  imageUrl?: string; // Optional, used for displaying the cover image
  artist: Artist;
  songs?: Song[];
  releaseDate?: string; // ISO date string
  createDate: string;
  language?: Language[];

  // ISO date string
}


export interface Artist {
  id: string;
  name: string;
  imageName?: string
  imageUrl?: string;
  bio?: string;
  email?: string;
  phone?: string;
  website?: string;
  socialLinks?: SocialNetwork[];
  albums?: Album[];
}

export interface SocialNetwork {
  id: string;
  socialNetwork: SocialNetWorkEnum;
  username: string;
  url: string;
}

export interface Song {
  id: string;
  title: string;
  artist: Artist;
  type: MusicTypeEnum;
  albumId: string;
  albumName: string;
  duration: number; // in seconds
  durationLabel:string;
  coverUrl: string;
  audioUrl: string;
  lyrics: Lyrics;
  orderNumber: number; // Position in the album
  releaseDate: string; // ISO date string
  createDate: string; // ISO date string
  language?: Language; // Optional, for multilingual support
  // Optional, for songs with lyrics
}

export interface Lyrics {
  id: string;
  songId: string;
  content: LyricsContent[];
  karaoke: LyricsKaraoke[];
}

export interface LyricsContent {
  id: string
  lyricsId: string;
  orderNumber: number;
  isChorus: boolean;
  texts: string[];
}

export interface LyricsKaraoke {
  id: string
  lyricsId: string;
  orderNumber: number; // Position in the lyrics
  isChorus: boolean; // Indicates if this part is a chorus
  text: karaokeWord[]; // The actual lyrics text
}

export interface karaokeWord {
  id: string
  lyricsKaraokeId: string;
  word: string;
  startTime: number; // Start time in seconds
  endTime: number; // End time in seconds
}

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  coverUrl?: string;
  songs: Song[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Optional for security reasons
  playlists?: Playlist[];
  likedSongs?: Song[];
  likedAlbums?: Album[];
  likedArtists?: Artist[];
  profilePictureUrl?: string; // URL to the user's profile picture
  bio?: string; // User's bio or description
  socialLinks?: SocialNetwork[]; // User's social media links
  createDate: string; // ISO date string
  lastLoginDate?: string; // ISO date string, optional for tracking user activity
  language?: Language; // User's preferred language
}

export interface UserCongig {
  userId: string; // User's unique identifier
  theme: string; // User's preferred theme (e.g., light, dark)
}

export interface GlobalConfig {
  siteName: string; // Name of the music app
  siteDescription: string; // Description of the music app
  siteLogoUrl: string; // URL to the site's logo
  defaultLanguage: Language; // Default language for the app
  supportedLanguages: Language[]; // List of supported languages
  socialNetworks: SocialNetwork[]; // List of social networks available in the app
  contactEmail: string; // Contact email for support or inquiries
  termsOfServiceUrl?: string; // Optional URL to the terms of service
  privacyPolicyUrl?: string; // Optional URL to the privacy policy
}
