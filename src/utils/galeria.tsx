interface MediaItem {
    id: number;
    type: 'photo' | 'video';
    image: string;
    video?: string;
}

export const galeriaMediaItems: MediaItem[] = [
    { id: 1, type: 'photo', image: '/assets/gallery/3.jpg' },
    { id: 2, type: 'video', image: '/assets/gallery/5.jpg', video: '/assets/gallery/video.mp4' },
    { id: 3, type: 'photo', image: '/assets/gallery/7.jpg' },
    { id: 4, type: 'photo', image: '/assets/gallery/8.jpg' },
    { id: 5, type: 'photo', image: '/assets/gallery/9.jpg' },
    { id: 6, type: 'photo', image: '/assets/gallery/10.jpg' },
    { id: 7, type: 'photo', image: '/assets/gallery/11.jpg' },
    { id: 8, type: 'photo', image: '/assets/gallery/4.jpg' },
    { id: 9, type: 'photo', image: '/assets/gallery/12.jpg' }
];