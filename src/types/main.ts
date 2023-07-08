import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { ReactNode, ButtonHTMLAttributes } from 'react';
export type PokemonType = {
	name: string;
	url?: string;
	location_area_encounters?: string;
	id?: number;
	order?: number;
	weight?: number;
	height?: number;
	isDefault?: boolean;
	sprites?: Sprites;
	species?: Species;
	moves?: [];
	past_types?: [];
	stats?: [];
	forms?: [];
	abilities?: [];
	types?: [];
	game_indices?: [];
	loadMore?: {
		load: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		function: () => Promise<InfiniteQueryObserverResult<any, unknown>>;
	};
};
export type Species = {
	name: string;
	url: string;
};
export type Sprites = {
	front_default: string;
};

export type URLType = string | null | undefined | URL;
export type PokemonArray = PokemonType[];
export type Response = PokeApiResponse | BasicRespone;
export type BasicRespone = { message: string; status: number };
export type PokeApiResponse = {
	results: PokemonArray;
	next?: string | null;
	previous?: string | null;
	count?: number;
};
export type TPagination = {
	nextLink: boolean;
	prevLink: boolean;
	reset: boolean;
	handleNext: () => void;
	handlePrev: () => void;
	handleReset?: () => void;
};

export type themeType = {
	$darkTheme: boolean;
};
export type selectorType = {
	theme: themeType;
};
export interface SyntheticEvent<T> {
	currentTarget: EventTarget & T;
}
export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}
