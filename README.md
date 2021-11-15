# stackoverflow-ts-module-augmentation

This repo illustrates [a bug in parcel](https://github.com/parcel-bundler/parcel/issues/7306) where if you try to use the [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) feature of typescript in the context of a library project that is using `@parcel/transformer-typescript-types` to generate a `.d.ts` file, parcel will output an incorrect `.d.ts` file with many elements missing.

The bug was found while attempting to answer [this stackoverflow question](https://stackoverflow.com/questions/69975417/parcel-typescript-module-augmentation).

## Repro steps
1. Install dependencies with `yarn`
2. Run `yarn build`. This will:
  - Build the `library-original` package with `tsc`
  - Build the `library-augmenter` package with `parcel` and `tsc`

## Results

`library-augmenter/dist/index.d.ts` (built with parcel)

```ts
export const anotherThing: string;

//# sourceMappingURL=index.d.ts.map
```

`library-augmenter/dist-tsc/index.d.ts` (built with parcel)

```ts
export declare const anotherThing: string;
declare module "library-original" {
    interface Person {
        greet(): string;
    }
}
export declare const somethingElse: string;
```