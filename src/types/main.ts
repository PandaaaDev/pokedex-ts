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
