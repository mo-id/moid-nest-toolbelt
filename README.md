# MOID Nest Toolbelt

## How to publish

- Generate a token to publish to GitHub
- Generate a .npmrc file in the root of the project
  - @mo-id:registry=https://npm.pkg.github.com/mo-id
  - //npm.pkg.github.com/:\_authToken=GITHUB_TOKEN
  - registry=https://registry.npmjs.org
- run `npm login --scope=@mo-id --registry=https://npm.pkg.github.com`
  - Username: YOUR_GITHUB_USERNAME
  - Password: YOUR_GITHUB_TOKEN
  - Email: YOUR_EMAIL
- run `npm publish`

## How to install

- Generate a token to access GitHub
- Generate a .npmrc file in the root of the project
  - //npm.pkg.github.com/:\_authToken=GITHUB_TOKEN
  - registry=https://npm.pkg.github.com
- run `yarn add @mo-id/nest-toolbelt`

