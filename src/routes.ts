/**
 * An array of public routes
 * this routes doesn't require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that used for authentication
 * these routes will redirect users to settingsPage
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register', '/auth/error'];

/**
 * Prefix for the API authetication routes
 * routes with this prefix is used for authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * default redirect route after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
