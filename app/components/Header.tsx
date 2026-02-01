import React from 'react';
import { HeaderClient } from "./HeaderClient";

interface DropdownLink {
    id: string;
    title: string;
    ref: string;
}

interface MenuItem {
    id: string;
    title: string;
    ref: string;
    dropdown?: DropdownLink[];
}

export default function Header() {
    const menuItems: MenuItem[] = [
        {
            id: "tiktok",
            title: "TIKTOK",
            ref: "/tiktok",
            dropdown: [
                {
                    id: "tt-followers",
                    title: "Buy TikTok Followers",
                    ref: "/buy-tiktok-followers",
                },
                { id: "tt-likes", title: "Buy TikTok Likes", ref: "/buy-tiktok-likes" },
                { id: "tt-views", title: "Buy TikTok Views", ref: "/buy-tiktok-views" },
                {
                    id: "tt-comments",
                    title: "Buy TikTok Comments",
                    ref: "/buy-tiktok-comments",
                },
            ],
        },
        {
            id: "instagram",
            title: "INSTAGRAM",
            ref: "/instagram",
            dropdown: [
                {
                    id: "ig-followers",
                    title: "Buy Instagram Followers",
                    ref: "/buy-instagram-followers",
                },
                {
                    id: "ig-likes",
                    title: "Buy Instagram Likes",
                    ref: "/buy-instagram-likes",
                },
                {
                    id: "ig-views",
                    title: "Buy Instagram Views",
                    ref: "/buy-instagram-views",
                },
                {
                    id: "ig-comments",
                    title: "Buy Instagram Comments",
                    ref: "/buy-instagram-comments",
                },
            ],
        },
        {
            id: "youtube",
            title: "YOUTUBE",
            ref: "/youtube",
            dropdown: [
                {
                    id: "yt-subs",
                    title: "Buy YouTube Subscribers",
                    ref: "/buy-youtube-subscribers",
                },
                {
                    id: "yt-views",
                    title: "Buy YouTube Views",
                    ref: "/buy-youtube-views",
                },
                {
                    id: "yt-likes",
                    title: "Buy YouTube Likes",
                    ref: "/buy-youtube-likes",
                },
                {
                    id: "yt-comments",
                    title: "Buy YouTube Comments",
                    ref: "/buy-youtube-comments",
                },
                {
                    id: "yt-watch-hours",
                    title: "Buy YouTube Watch Hours",
                    ref: "/buy-youtube-watch-hours",
                },
            ],
        },
        {
            id: "facebook",
            title: "FACEBOOK",
            ref: "/facebook",
            dropdown: [
                {
                    id: "fb-page-likes",
                    title: "Buy Facebook Page Likes",
                    ref: "/buy-facebook-page-likes",
                },
                {
                    id: "fb-post-likes",
                    title: "Buy Facebook Post Likes",
                    ref: "/buy-facebook-post-likes",
                },
                {
                    id: "fb-views",
                    title: "Buy Facebook Views",
                    ref: "/buy-facebook-views",
                },
                {
                    id: "fb-shares",
                    title: "Buy Facebook Shares",
                    ref: "/buy-facebook-shares",
                },
            ],
        },
        {
            id: "twitter_x",
            title: "TWITTER (X)",
            ref: "/twitter",
            dropdown: [
                {
                    id: "tw-followers",
                    title: "Buy Twitter Followers",
                    ref: "/buy-twitter-followers",
                },
                {
                    id: "tw-retweets",
                    title: "Buy Twitter Retweets",
                    ref: "/buy-twitter-retweets",
                },
                {
                    id: "tw-likes",
                    title: "Buy Twitter Likes",
                    ref: "/buy-twitter-likes",
                },
                {
                    id: "tw-views",
                    title: "Buy Twitter Views",
                    ref: "/buy-twitter-views",
                },
            ],
        },
        { id: "blog", title: "BLOG", ref: "/blog" },
        { id: "contact_us", title: "CONTACT US", ref: "/contact" },
    ];

    return (
        <HeaderClient menuItems={menuItems} />
    );
}
