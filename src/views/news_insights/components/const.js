// const.js
import adImg01 from '@/assets/images/media_inventory/ad_img_01.webp';
import adImg02 from '@/assets/images/media_inventory/ad_img_02.webp';
import adImg03 from '@/assets/images/media_inventory/ad_img_03.webp';

// import content1 from '@/assets/news_contents/content_1.html?raw'; // 使用
import content1 from './contents/content_1.html?raw'; // 使用

export const NEWS_DATA = [
    {
        id: 1,
        title: 'ARC TOWERS TRIUMPHS',
        time: 'Friday, 08 Aug 2025',
        link: 'https://example.com/news/1',
        src: adImg01,
        summary: 'ARC Towers Triumphs at the 7th PropertyGuru Philippines Property Awards',
        content: content1,
    },
    {
        id: 2,
        title: 'NEW TECHNOLOGY LAUNCHED',
        time: 'Monday, 11 Sep 2025',
        link: 'https://example.com/news/2',
        src: adImg02,
        summary: 'A new technology has been launched that promises to revolutionize the industry.',
        content: content1,
    },
    {
        id: 3,
        title: 'GREEN INITIATIVES',
        time: 'Wednesday, 13 Sep 2025',
        link: 'https://example.com/news/3',
        src: adImg03,
        summary: 'Companies are taking steps to become more environmentally friendly with new green initiatives.',
        content: content1,
    },
    {
        id: 4,
        title: 'HEALTHCARE BREAKTHROUGH',
        time: 'Friday, 15 Sep 2025',
        link: 'https://example.com/news/4',
        src: adImg01,
        summary: 'A major breakthrough in healthcare has been announced, improving patient outcomes.',
        content: content1,
    },
    {
        id: 5,
        title: 'EDUCATION REFORM',
        time: 'Tuesday, 19 Sep 2025',
        link: 'https://example.com/news/5',
        src: adImg02,
        summary: 'New education reforms are being implemented to enhance learning experiences for students.',
        content: content1,
    },
    {
        id: 6,
        title: 'SPORTS ACHIEVEMENTS',
        time: 'Thursday, 21 Sep 2025',
        link: 'https://example.com/news/6',
        src: adImg03,
        summary: 'Local sports teams have achieved remarkable success in recent competitions.',
        content: content1,
    },
    {
        id: 7,
        title: 'CULTURAL EVENTS',
        time: 'Saturday, 23 Sep 2025',
        link: 'https://example.com/news/7',
        src: adImg01,
        summary: 'A series of cultural events are planned to celebrate the city’s diverse heritage.',
        content: content1,
        contentPath: '@/assets/news_contents/content_1.html'
    },
    {
        id: 8,
        title: 'ECONOMIC GROWTH',
        time: 'Monday, 25 Sep 2025',
        link: 'https://example.com/news/8',
        src: adImg02,
        summary: 'The city has seen significant economic growth in the past quarter.',
        content: content1,
    },
    {
        id: 9,
        title: 'PUBLIC SAFETY IMPROVEMENTS',
        time: 'Wednesday, 27 Sep 2025',
        link: 'https://example.com/news/9',
        src: adImg03,
        summary: 'New measures have been implemented to improve public safety in the city.',
        content: content1,
    },
    {
        id: 10,
        title: 'ARTS AND ENTERTAINMENT',
        time: 'Friday, 29 Sep 2025',
        link: 'https://example.com/news/10',
        src: adImg01,
        summary: 'The arts and entertainment scene is booming with new theaters and galleries opening.',
        content: content1,
    },
];
