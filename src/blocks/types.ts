export type CartBlockAttributes = {
	title: string;
	icon: string;
	iconRight: boolean;
	iconOnly: boolean;
	id: string;
	anchor: string;
	url?: string;
	newTab?: boolean;
	rel?: string;
	nofollow?: boolean;
	size?: string;
};

export type ShopView = 'mini' | 'list' | 'cards';
export type TextAlignment = 'left' | 'center' | 'right' | undefined;

export type ShopBlockAttributes = {
	showImages: boolean;
	showCategory: boolean;
	sortByCategory: boolean;
	showFilter: boolean;
	showSearchbar: boolean;
	view: ShopView;
	order: string;
	orderBy: string;
	selectedCategories: number[];
	selectedTags: number[];
	excerptLength: number;
	textAlignment: TextAlignment;
	form: number;
	dropShadow?: boolean;
};

export type EditorProps<TAttributes> = {
	attributes: TAttributes;
	className?: string;
	setAttributes: ( attributes: Partial<TAttributes> ) => void;
};

export type NamedBlockSettings = {
	name: string;
	settings: unknown;
};

export type SaveProps<TAttributes> = {
	attributes: TAttributes;
};

export type TaxonomyEntity = {
	id: number;
	name: string;
};

export type FormEntity = {
	id: number;
	title: {
		rendered: string;
	};
};
