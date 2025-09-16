interface MediaItem {
    id: number;
    type: 'photo' | 'video';
    image: string;
    video?: string;
}

export const galeriaMediaItems: MediaItem[] = [
    { id: 2, type: 'video', image: '/assets/gallery/5.jpg', video: '/assets/gallery/video.mp4' },
    { id: 6, type: 'photo', image: '/assets/gallery/10.jpg' },
    { id: 7, type: 'photo', image: '/assets/gallery/11.jpg' },
    { id: 8, type: 'photo', image: '/assets/gallery/4.jpg' },
    { id: 9, type: 'photo', image: '/assets/gallery/12.jpg' }
];