// types/api.ts

// === ОБЩИЙ ОТВЕТ API ===
export interface IApiResponse<T> {
    data: T;
    meta?: IMeta;
    included?: unknown[];
}

// === ПАГИНАЦИЯ ===
export interface IMeta {
    page: number;
    pageSize: number;
    totalCount: number;
    pagesCount: number;
    nextCursor: string | null;
}

// === ОШИБКИ ===
export interface IApiError {
    status: string;
    code: string;
    title: string;
    detail: string;
    source?: {
        pointer?: string;
        parameter?: string;
    };
    meta?: Record<string, unknown>;
}

export interface IApiErrorResponse {
    errors: IApiError[];
    meta?: Record<string, unknown>;
}

// === ОБЩИЕ ПОЛЯ ДЛЯ ВСЕХ СУЩНОСТЕЙ ===
export interface IBaseEntity {
    id: string;
    type: string;
    createdAt?: string;
    updatedAt?: string;
}

// === ОБЩИЕ ПАРАМЕТРЫ ЗАПРОСОВ ===
export interface IPaginationParams {
    pageNumber?: number;
    pageSize?: number;
}

export interface ISortParams {
    sortBy?: string;
    sortDirection?: 'asc' | 'desc';
}