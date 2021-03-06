const apiBaseURL = 'https://api.twitter.com';

const partitionRules = [
	'/rules/',
	'rules/',
	'/',
];
const stripRoute = (route: string): string => {
	const res = partitionRules.find((x) => route.startsWith(x));
	if (res) {
		return route.slice(res.length);
	}
	return route;
};

/**
 * Removes the leading "/api/" portion of a matched route, and rewrites it to
 * match the desired Twitter API route.
 * @param route Matched route string.
 */
export const buildURL = (route: string): string => {
	const apiRoute = stripRoute(route);
	return `${apiBaseURL}/${apiRoute}`;
};

/**
 * An object providing a `setTimeout` function and a `clearTimeout` function. It is assumed that
 * `setTimeout` schedules the execution of the passed function in the specified amount of time,
 * immediately returning a reference to this scheduled call. Likewise, it is assumed that
 * `clearTimeout` cancels the upcoming invocation of the function passed to `setTimeout` when given
 * the reference returned by `setTimeout`. In other words: it is assumed that `setTimeout` and
 * `clearTimeout` work exactly like the respective functions on `global` (in NodeJS) and `window`
 * (in browsers).
 */
export interface TimerControls<T> {
	setTimeout(f: () => void, ms: number): T;
	clearTimeout(x: T): void;
}

/**
 * A function that handles a JSON chunk from the stream.
 */
export type ChunkConsumer = (data: string) => void;
