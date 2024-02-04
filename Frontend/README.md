# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

// type AppProps = {
// message: string;
// }; /_ use `interface` if exporting so that consumers can extend _/

// // Easiest way to declare a Function Component; return type is inferred.
// const App = ({ message }: AppProps) => <div>{message}</div>;

// // you can choose annotate the return type so an error is raised if you accidentally return some other type
// const App = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

// // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
// const App = ({ message }: { message: string }) => <div>{message}</div>;

// // Alternatively, you can use `React.FunctionComponent` (or `React.FC`), if you prefer.
// // With latest React types and TypeScript 5.1. it's mostly a stylistic choice, otherwise discouraged.
// const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
// <div>{message}</div>
// );
