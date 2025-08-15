# Movies App

## Init new app
- --- Crea una app default de Expo que ya viene con
  - Expo CLI, Expor Router, TS
```sh
pnpm create expo-app
```

  - Damos el name de la app y siguiente
  - Como es una default app de expo, ya viene con el  `ROUTER`  de expo, q se bada x directorios `app/` como en `Next.js`
    - Los nombres de archivos y carpetas son traducidas a Rutas y a Screens de nuestra app


- --- Lanzamos la app generica q nos crea Expo
  - -- Corremos: `pnpm start`
    - Luego lanzamos con el emulador de android: `a` en la terminal














## NativeWind
- --- La doc oficial de NativeWind es `https://www.nativewind.dev/docs/getting-started/installation` y requerimos `Installation with Expo` porque partimos de expo con pnpm

```sh
pnpm add nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0

pnpm add -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

- --- Setup TailwindCSS
- Creamos el `tailwind.config.js`
```sh
pnpm tailwindcss init
```

- Lo editamos:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './presentation/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],

  theme: {
    extend: {},
  },
  plugins: [],
};
```

- -- Creamos el `global.css`
- En la raiz de la app
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


- -- Creamos el `babel.config.js`
```js
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
};
```


- -- Configuramos el `metro.config.js`, pero como el de babel, no viene el archivo asi q corremos su customize:
  - Para crear el archivo a customizar: `pnpx expo customize` > select el metro file
    - Igual el SDK como antes
```js
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```



- -- Importamos el css generado en el layout q esta en /app
- En el `_layout.tsx`
```tsx
import './../global.css';
```



- -- TypeScript setup
- Creamos el file  `nativewind-env.d.ts`
```ts
/// <reference types="nativewind/types" />
```












## Start app
- --- Corremos todo con
- run `pnpm start app`

- Luego lanzamos el emulador con la tecla `a` para el de Android











## TMDB
- --- Crear cuenta para q en permfil obtengamos el API KEY





### APIS
- --- Podemos usar TanStack Query con Axios, lo que nos facilita la vida xq es literal como React
```sh
pnpm add axios
```

- --- `TanStack Query`:
```sh
pnpm add @tanstack/react-query
```

- -- `Providers` en React Native:
- En el punto mas alto, q como es con el `/app` directori como en Next.js, pues iria en el Main Layout




- -- `Slider`:
  - run: `pnpm add react-native-reanimated-carousel`










#### Infinite Scroll & Navigation
- --- Fin de un scroll en el FlatList para el infinite scroll
  - -- s





















