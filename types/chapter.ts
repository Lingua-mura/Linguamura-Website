import { LessonItem } from './lesson';

export interface Chapter {
    id: number;
    title: string;
    progress: number;
    lessons: LessonItem[];
}