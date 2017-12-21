# Refrigerator

## Features
- Gestionnaire de frigo
- Banque de recettes
- Generateur/Gestionnaire de liste de courses

### Running the Code
After cloning the repository, run the following commands:
* `npm install` -- installs the app's dependencies
* `npm start` -- serves the Angular app with live reloading for development purposes

### Updating dependencies
Angular and Material releases are more frequent. Since the switchover to semver, it is now safe(r) to rapidly update your own code from one minor release to another, i.e. 4.2.2 to 4.4.3.
* `npm run update:check` -- displays a list of available safe (minor) and risky (major) updates
* `npm run update:run` -- updates package.json and run npm install in safe mode
* `npm run update:all` -- updates package.json and run npm install in risky mode
> Note: No matter which mode you run, always pay attention to CLI messages about incompatibilities. i.e. There may be a new TypeScript version like `2.5.3`, but Angular CLI may request a version range of `>=2.1.0 <2.4.0`. In that case heed the warning and execute `npm install typescript@'>=2.1.0 <2.4.0'` to rollback the update to that particular package.

### Building and Testing
* `npm run docker:build` to build the Docker image
* `npm run docker:debug` to test the Docker image