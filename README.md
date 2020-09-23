# TypeScript Bootstrap scss module Next.js example

## How to use it? Not finished. Have error

Install it and run:

```bash
yarn
yarn dev
```
## Error
Syntax error: Selector ":root" is not pure (pure selectors must contain at least one local class or id)

  1 | // Do not forget to update getting-started/theming.md!
> 2 | :root {
    |                           ^
  3 |   // Custom variable values only support SassScript inside `#{}`.
  4 |   @each $color, $value in $colors {


## Create new *.module.scss file
run to generate .d.ts file
```bash
yarn scss
```
