# DewaMin

"admin dashboard tailored for ...."

## CI/CD

Developed using RAD method with vercel's deployment flow

### Developtment Process Using RAD

```mermaid
sequenceDiagram
    participant Client
    participant RADTeam
    participant Prototyping
    participant Construction
    participant Vercel
    participant Production

    Client->>RADTeam: Requirements gathering
    RADTeam-->>Prototyping: Develop prototype
    Prototyping-->>Client: Present prototype
    Client-->>Prototyping: Feedback
    Prototyping-->>RADTeam: Refined requirements

    RADTeam-->>Construction: Develop application
    Construction->>Construction: Unit testing
    Construction-->>GitHub: git push
    GitHub-->>Vercel: Triggers build
    Vercel->>Vercel: Runs build
    Vercel->>Vercel: Runs tests
    opt If tests pass
        Vercel->>Vercel: Creates deployment
        Vercel-->>Production: Deploys to production
    end

    Production-->>Client: Live application
    Client-->>RADTeam: Feedback
    RADTeam-->>Construction: Refine application
```

### Deployment using Vercel

```mermaid
sequenceDiagram
    participant Developer
    participant GitHub
    participant Vercel
    participant Production

    Developer->>GitHub: git push
    GitHub-->>Vercel: Triggers build
    Vercel->>Vercel: Runs build
    Vercel->>Vercel: Runs tests
    opt If tests pass
        Vercel->>Vercel: Creates deployment
        Vercel-->>Production: Deploys to production
    end

    Production-->>Developer: Live application
```

## Dependencies

#### Authentication and Database

- `@auth/prisma-adapter`: Provides a Prisma adapter for NextAuth.js, enabling easy integration with Prisma for authentication.
- `@prisma/client`: The Prisma client library for interacting with the database.
- `next-auth`: Authentication library for Next.js applications.
- `bcrypt`: A library for hashing passwords.

#### React Libraries and UI Components

- `@tanstack/react-table`: A powerful and lightweight table library for React.
- `@radix-ui/react-*`: A collection of accessible and customizable React UI components.
- `clsx`: A utility for constructing `className` strings conditionally.
- `cmdk`: A command menu/palette for React applications.
- `lucide-react`: A collection of React icons based on the Lucide icon library.
- `react-hook-form`: A library for building forms with React hooks.
- `recharts`: A popular charting library for React.
- `tailwind-merge`: A utility for merging Tailwind CSS classes with other classes.
- `tailwindcss-animate`: Adds animation utilities to Tailwind CSS.

#### Utility Libraries

- `class-variance-authority`: A library for managing design tokens and generating utility classes.
- `uuid`: A library for generating unique identifiers.
- `zod`: A TypeScript-first schema validation library.

#### Miscellaneous

- `@hookform/resolvers`: Provides resolvers for react-hook-form to integrate with other libraries like Zod or Yup.
- `input-otp`: A library for building OTP input fields.
- `resend`: A library for resending verification codes.
- `sonner`: A library for playing sounds and notifications.

## System flow

#### Authentification

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Next.js
    participant Middleware
    participant AuthLibrary
    participant ProtectedRoutes
    participant PublicRoutes
    participant AuthRoutes

    User->>Browser: Visits website
    Browser->>Next.js: Requests page
    Next.js->>Middleware: Checks middleware rules
    Middleware->>AuthLibrary: Checks authentication status
    AuthLibrary-->>Middleware: Returns authentication status
    alt Is API auth route
        Middleware-->>Next.js: Allows access
        Next.js-->>API: Handles API request
    else Is auth route
        alt User is authenticated
            Middleware-->>Next.js: Redirects to default login redirect
            Next.js-->>Browser: Redirects to default login redirect
        else User is not authenticated
            Middleware-->>Next.js: Allows access
            Next.js-->>AuthRoutes: Renders authentication routes
            AuthRoutes-->>Browser: Displays authentication pages
        end
    else Is public route
        Middleware-->>Next.js: Allows access
        Next.js-->>PublicRoutes: Renders public routes
        PublicRoutes-->>Browser: Displays public content
    else User is not authenticated
        Middleware-->>Next.js: Redirects to login page
        Next.js-->>Browser: Redirects to login page with callback URL
    end
```

# Folder Structure

```bash
dewamin(root)
│   .env
│   .eslintrc.json
│   .gitignore
│   components.json
│   next-auth.d.ts
│   next-env.d.ts
│   next.config.mjs
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.ts
│   tsconfig.json
├───prisma
├───public
└───src
    │   middleware.ts
    │   routes.ts
    ├───app
    │   │   favicon.ico
    │   │   globals.css
    │   │   layout.tsx
    │   │   loading.tsx
    │   │   not-found.tsx
    │   │   page.tsx
    │   ├───(main)
    │   ├───api
    │   └───auth
    ├───components
    ├───data
    ├───hooks
    ├───lib
    ├───schemas
    ├───server-actions
    └───types
```
