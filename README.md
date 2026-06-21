<img width="1920" height="1080" alt="MacOS Portfolio Screenshot" src="https://github.com/user-attachments/assets/3c3520f2-e581-4a96-91b1-4130448cf9f7" />

# Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

# References

- [Figma](https://www.figma.com/design/QNUvSyhE4qOsLBWJuIephM/MacOS-Portfolio?node-id=0-1&t=LyX7XktRGGviqxaB-1)

# Dependencies

## Plugins

### [@popperjs/core](https://popper.js.org/docs/v2/)

Used for Rendering dynamic Tooltips

### [@tato30/vue-pdf](https://www.npmjs.com/package/@tato30/vue-pdf)

Used for rendering PDF files within the DOM directly via canvas

### [dayjs](https://www.npmjs.com/package/dayjs)

Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern
browsers.

### [gsap](https://www.npmjs.com/package/gsap)

Animation Library

## Tailwind/UI Libraries

### tailwind

`@tailwindcss`, `@tailwindcss/vite` are used for registering Tailwind with vscode intellisense and vite compiler.

```
  // .vscode/settings.json for tailwindcss extension
  "tailwindCSS.experimental.configFile": "./app/assets/css/main.css",
```

`vite-plugin-vue-tailwind-auto-reference` used for auto-referencing `@import tailwindcss` in every Vue component where
`@apply` is used

## Utilities

### Eslint

`eslint`, `eslint-plugin-format`, `@antfu/eslint-config`, `@nuxt/eslint`

### Husky

Git Hooks for validating code before allowing user to commit/push changes to server

### lint-staged

Hook to validate **only modified files** for linting problems

### Workflows

Remotely triggers playwright in remote repository, on PULL_REQUEST
