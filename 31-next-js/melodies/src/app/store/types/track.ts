// types/track.ts

// === ВЛОЖЕННЫЕ ТИПЫ ===

// Пользователь, загрузивший трек
interface User {
    id: string;
    name: string;
}

// Вложение (аудиофайл)
interface Attachment {
    id: string;
    addedAt: string;
    updatedAt: string;
    version: number;
    url: string;
    contentType: string;
    originalName: string;
    fileSize: number;
}

// Изображение (обложка)
interface Image {
    type: 'thumbnail' | 'medium' | 'original';
    width: number;
    height: number;
    fileSize: number;
    url: string;
}

// Объект с изображениями
interface Images {
    main: Image[];
}

// Связь с исполнителем
interface RelationshipData {
    id: string;
    type: 'artists';
}

interface Relationships {
    artists: {
        data: RelationshipData[];
    };
}

// === ОСНОВНОЙ ТИП ТРЕКА ===

interface Track {
    id: string;
    type: 'tracks';
    attributes: {
        title: string;
        user: User;
        addedAt: string;
        attachments: Attachment[];
        images: Images;
        currentUserReaction: 0 | 1 | -1; // 0 - нет, 1 - лайк, -1 - дизлайк
        publishedAt: string;
        likesCount: number;
        isPublished: boolean;
        duration: number;
    };
    relationships: Relationships;
}

// === ИСПОЛНИТЕЛЬ (в массиве included) ===

interface Artist {
    id: string;
    type: 'artists';
    attributes: {
        name: string;
    };
}

// === МЕТАДАННЫЕ ПАГИНАЦИИ ===

interface Meta {
    page: number;
    pageSize: number;
    totalCount: number;
    pagesCount: number;
    nextCursor: string | null;
}

// === ПОЛНЫЙ ОТВЕТ API ===

export interface ITracksPublicResponse {
    data: Track[];
    included: Artist[];
    meta: Meta;
}