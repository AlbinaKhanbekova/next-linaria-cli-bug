This is a reproduable repo for the bug in [linaria/cli](https://github.com/callstack/linaria/tree/master/packages/cli)

## How to reproduce

Run the following command:

```bash
npm run extract-css
```

The command contains:
```bash
linaria --out-dir .linaria/css --source-root components/**/*.{ts,tsx}
```

## Expected result

Extracted CSS files should be in <rootDir>/.linaria/css/components/Button/Button.tsx

## Actual result

Extracted CSS files are located in <rootDir>/Button/Button.tsx