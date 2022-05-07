import { Thumbnail } from './thumbnail';

export type Media = {
	title: string;
	thumbnail: Thumbnail;
	year: number;
	rating: string;
	category: string;
	isBookmarked: boolean;
	isTrending: boolean;
};
