## Getting Started

- In order to run the project, you must first install the dependencies `npm install`.
- Then you need to create a file `.env.local` with environment variables for local development `VERCEL_URL=localhost:3000` and `HTTP_PROTOCOL=http`.
- After that, you can run the project for local develompent with the command `npm run dev`

## Implemented functionality

- UserList (SSR)
- Filtering and Searching (by name and by dateOfBirth)
- User Detail Page (SSG)
- Styling (i decided to use the sass preprocessor)
- Implemented SSR and SSG (you can check by running the command `npm run build`)
- Animations (Loader component)
- Testing (added simple smoke tests for some components)
- Implemented CI/CD Deployment (via GitHib actions - check prettier, check eslint, run tests, deploy to Vercel)
- Performance & Optimization (used Image NextJS component with lazy props)
- Accessibility & Internationalization (by clicking on the Tab button, you can switch between the components on the MainPage)
- Advanced Styling (added ToggleSwitch for themes)

## Not implemented functionality

- Internationalization
