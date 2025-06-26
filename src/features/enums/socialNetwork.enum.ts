const SocialNetwork = {
    Facebook: 'Facebook',
    Twitter: 'Twitter',
    Instagram: 'Instagram',
    LinkedIn: 'LinkedIn',
    TikTok: 'TikTok',
    YouTube: 'YouTube',
    Snapchat: 'Snapchat',
    Pinterest: 'Pinterest',
    Reddit: 'Reddit',
    Tumblr: 'Tumblr',
    WhatsApp: 'WhatsApp',
    Discord: 'Discord',
    Telegram: 'Telegram',
    WeChat: 'WeChat',
    QQ: 'QQ',
    SinaWeibo: 'Sina Weibo',
    VKontakte: 'VKontakte',
    Odnoklassniki: 'Odnoklassniki',
    BaiduTieba: 'Baidu Tieba',
    Line: 'Line',
} as const;

type SocialNetwork = typeof SocialNetwork[keyof typeof SocialNetwork];

export { SocialNetwork };

