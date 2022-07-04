// import { IStoryBlokImage } from '../../types/ISharedTypes'
export interface ISlide {
    blok: {
        _uid: string;
        title?: string;
        component: any;
        description?: string;
        bgImage?: any;
        bgColor?: string;
        slideWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        slideHeight: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        descriptionSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        spacing: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    }
}
