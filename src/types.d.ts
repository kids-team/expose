declare module '*.css';
declare module '*.scss';

declare module '@wordpress/api-fetch' {
	type ApiFetchOptions = {
		path: string;
		method?: string;
		data?: unknown;
	};

	export default function apiFetch<T>( options: ApiFetchOptions ): Promise<T>;
}

declare module '@wordpress/url' {
	export function addQueryArgs(
		path: string,
		queryArgs: Record<string, string | number | boolean | undefined>
	): string;
}
