const Languages = {
    SPANISH: 'es',
    ENGLISH: 'en',
    PORTUGUESE: 'pt',
    MANDARIN: 'zh-CN',
    FRENCH: 'fr',
    ITALIAN: 'it',
    KOREAN: 'ko'
} 

export type Language = keyof typeof Languages;
export { Languages };