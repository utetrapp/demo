# food

This application shows the food app (implemented first with plain
JavaScript and then with plain Vue) using vite for project setup,
Pinia for state management and Vue router -- although the latter is not needed.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Development steps

First I took the components as they were in the first usage of Vue.

1. Start with item.js -> Item.vue: copy&paste, adapting to structure; changed to FoodItem.vue due to linter
2. Continue with FoodList. Add key attribute due to linter.
3. Rename HomeView to FoodListView and adapt it.
4. Clean AboutView -- remove templates
5. Adapt imports and paths of router/index.js. Add linkActiveClass for bootstrap.
6. Clean App.vue and add classes of bootstrap.

For now Pinia is not really used. However, the functions of before are implemented using the new structure.
