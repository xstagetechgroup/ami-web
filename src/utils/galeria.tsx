interface MediaItem {
    id: number;
    type: 'photo' | 'video';
    image: string;
    video?: string;
}

export const galeriaMediaItems: MediaItem[] = [
    { id: 40, type: 'video', image: '/assets/gallery/5.jpg', video: '/assets/gallery/video.mp4' },
    { id: 2, type: 'photo', image: '/assets/gallery/1.jpg' },
    { id: 3, type: 'photo', image: '/assets/gallery/2.jpg' },
    { id: 4, type: 'photo', image: '/assets/gallery/3.jpg' },
    { id: 5, type: 'photo', image: '/assets/gallery/4.jpg' },
    { id: 6, type: 'photo', image: '/assets/gallery/5.jpg' },
    { id: 7, type: 'photo', image: '/assets/gallery/6.jpg' },
    { id: 8, type: 'photo', image: '/assets/gallery/7.jpg' },
    { id: 37, type: 'video', image: '/assets/gallery/35.jpg', video: '/assets/gallery/video4.mp4' },
    { id: 9, type: 'photo', image: '/assets/gallery/8.jpg' },
    { id: 10, type: 'photo', image: '/assets/gallery/9.jpg' },
    { id: 11, type: 'photo', image: '/assets/gallery/10.jpg' },
    { id: 12, type: 'photo', image: '/assets/gallery/11.jpg' },
    { id: 13, type: 'photo', image: '/assets/gallery/12.jpg' },
    { id: 36, type: 'video', image: '/assets/gallery/3.jpg', video: '/assets/gallery/video5.mp4' },
    { id: 14, type: 'photo', image: '/assets/gallery/13.jpg' },
    { id: 15, type: 'photo', image: '/assets/gallery/14.jpg' },
    { id: 16, type: 'photo', image: '/assets/gallery/15.jpg' },
    { id: 17, type: 'photo', image: '/assets/gallery/16.jpg' },
    { id: 18, type: 'photo', image: '/assets/gallery/17.jpg' },
    { id: 19, type: 'photo', image: '/assets/gallery/18.jpg' },
    { id: 20, type: 'photo', image: '/assets/gallery/19.jpg' },
    { id: 38, type: 'video', image: '/assets/gallery/7.jpg', video: '/assets/gallery/video3.mp4' },
    { id: 21, type: 'photo', image: '/assets/gallery/20.jpg' },
    { id: 22, type: 'photo', image: '/assets/gallery/21.jpg' },
    { id: 23, type: 'photo', image: '/assets/gallery/22.jpg' },
    { id: 24, type: 'photo', image: '/assets/gallery/23.jpg' },
    { id: 25, type: 'photo', image: '/assets/gallery/24.jpg' },
    { id: 26, type: 'photo', image: '/assets/gallery/25.jpg' },
    { id: 27, type: 'photo', image: '/assets/gallery/26.jpg' },
    { id: 28, type: 'photo', image: '/assets/gallery/27.jpg' },
    { id: 29, type: 'photo', image: '/assets/gallery/28.jpg' },
    { id: 30, type: 'photo', image: '/assets/gallery/29.jpg' },
    { id: 31, type: 'photo', image: '/assets/gallery/30.jpg' },
    { id: 32, type: 'photo', image: '/assets/gallery/31.jpg' },
    { id: 33, type: 'photo', image: '/assets/gallery/32.jpg' },
    { id: 34, type: 'photo', image: '/assets/gallery/33.jpg' },
    { id: 35, type: 'photo', image: '/assets/gallery/34.jpg' },
];