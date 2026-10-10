# datetime

`@shelf/datetime` is a public npm date library: a wrapper on dayjs with an API like date-fns, and React components in `@shelf/datetime/react`.

## Commands

- `pnpm install` — install the dependencies.
- `pnpm test` — run the Jest tests (jsdom, in UTC); `pnpm test <path>` runs one file. `pnpm coverage` also checks the thresholds in `jest.config.js`, which are 100%.
- `pnpm lint` — format with oxfmt and fix lint; CI runs `pnpm lint:ci`.
- `pnpm type-check` — type-check.
- `pnpm build` — compile to `lib/`; then `pnpm lint:size` checks the bundle size limits in `package.json`.
- `pnpm find-deadcode` — list unused files, exports, and dependencies.

## Rules

- Put each function in its own file, `src/<name>.ts`, with a default export and `src/<name>.test.ts` next to it. Export it from `src/index.ts`; React components go in `src/react/` and `src/react/index.ts`.
- Write relative imports with the `.js` extension (`./addDays.js`); the package is published as ES modules.
- The package is public: do not add internal links, hostnames, or customer data to code, tests, or docs.

## Shared Skills

- Use `shelf-git-conventions` for branches, commits, and pull requests. The default branch is `master`.
- Use `unit-tests-101` when you write or review unit tests.
