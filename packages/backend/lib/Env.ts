const token = process.env.API_TOKEN;

if (token === undefined) {
	console.error('The API_TOKEN is missing');
	process.exit(1);
}

export const mkHeaders = (headers?: Record<string, string>): Record<string, string> => ({
	Authorization: `Bearer ${token}`,
	...headers,
});