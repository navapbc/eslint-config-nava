## Development process

1. Branch off of `master`: `git checkout -b username/branch-name`
1. Commit your changes
1. Make a pull request against the `master` branch

### Testing

- If you'd like to test linting rules, add or update the `.js` files in the `test` directory.
- Then run `npm run lint`

## Release process

1. Bump the version in `package.json`
1. Update `package-lock.json` by running `npm install`
1. Create a release commit: `git commit -a -m "Prepare release v[1.1.0]"`
1. Create a new release on GitHub
1. Publish to NPM: `npm publish`