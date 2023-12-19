# What is it?
It is designed as dashboard for Snort alerts and other logs

# How?
```bash
npm i #1 install dependencies
touch .env #2 create this file
echo 'VITE_BACKEND_API="http://localhost:3000/"' > .env #3 add api key
npm run dev #4 run the app

```

# Tech Stack
Framework - Vite

UI library - https://ui.mantine.dev/







# npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
