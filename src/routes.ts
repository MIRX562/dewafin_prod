/**
 * An array of routes that are publicly accessible.
 * Users do not need to be authenticated to access these routes.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/verify-email", "/api/uploadthing"];

/**
 * An array of routes used for user authentication processes.
 * @type {string[]}
 */
export const authRoutes = [
	"/auth/login",
	"/auth/register",
	"/auth/error",
	"/auth/reset",
	"/auth/new-password",
];

/**
 * Prefix for API authentication routes.
 * Routes with this prefix are specifically used for authentication-related operations.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route that users are redirected to after logging in.
 * Typically, this is a landing page where the user can access main features of the application.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
