### pokemon-app
This application was  built using React TypeScript, Redux for state management and tailwind for styling.
![Front view](https://res.cloudinary.com/cheksman/image/upload/v1649872554/Screenshot_2022-04-13_at_18.54.12_wtp86q.png)
![Modal View](https://res.cloudinary.com/cheksman/image/upload/v1649872553/Screenshot_2022-04-13_at_18.54.26_u4mu72.png)

###### Base URL
The base URL to be put into the ```.env``` file is
```
REACT_APP_BASE_URL=https://pokeapi.co/api/v2
```

###### File Structure
```bash
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── app
│   │   ├── hooks.ts
│   │   ├── route.tsx
│   │   └── store.ts
│   ├── components
│   │   ├── basics
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── modals
│   │   │   └── ViewPokemon.tsx
│   │   ├── structures
│   │   │   ├── DisplayBox.tsx
│   │   │   └── Pagination.tsx
│   │   └── svg
│   │       └── Icons.tsx
│   ├── features
│   │   └── Pokemons
│   │       ├── index.tsx
│   │       └── pokemonSlice.ts
│   ├── index.css
│   ├── index.tsx
│   ├── interfaces
│   │   ├── HttpTypes.ts
│   │   ├── Pokemons.ts
│   │   └── SliceStatus.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── services
│   │   ├── Pokemon
│   │   │   └── index.ts
│   │   └── api
│   │       └── apiConfig.ts
│   └── setupTests.ts
├── tailwind.config.js
└── tsconfig.json
```

###### Further Improvements
1. For further improvements, the search functionality can be worked on.
2. The pagination could be improved by making the text field editable.
3. Also looking into using redux-observables for better flexibility during API calls.