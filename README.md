# BASE JS

## Getting Started
- Run the application in a development environment
```shell
npm run dev
```

#### Seeds
- Set users credentials inside `/payload/seed/index.ts` module
```
admin@sgd.digital
password
```

- Payload Seed are "placeholders" inside the `/payload/seed` directory that are being built inside the application DB.
```shell
npm run seed
```
> Be cautious due the overwriting power this command, running it will overwrite the entire DB including non-seed contents.

## Production Environment
### Setup Node Js in Plesk
> @see https://www.plesk.com/blog/product-technology/node-js-plesk-onyx/

