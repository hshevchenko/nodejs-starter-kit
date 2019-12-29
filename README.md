This is a starter Express JS server-side application. The setup includes:

### Configuration

Project custom configuration like port number to run on, environment and so on.

### Logging

Morgan and Winston logging libraries to log HTTP requests and different level logs.
The logger configuration specifies following rules:
## Pre-production:
Level: silly
Transport: console and log file

## Production:
Level: info
Transport: console and Loggly

### Prettier/Linter

Combination of ESLint and Prettier libraries installed and configured to forma and analyze code on commit to Git repositry

### Git

.gitignore contains files and folders that need to be ignored.

### Package.json

- contains commonly used dependencies
- scripts to run project on dev and production

### Docker

Initial Dockerfile to run Express JS server-side application.

### Project Structure

The project has following folder structure:

- `/src` folder contains source files
- `/src/server.js` main entry point for server
- `/src/middleware` contains all custom Express middleware.
- `/src/routes` routes
