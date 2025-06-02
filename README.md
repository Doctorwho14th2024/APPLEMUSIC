# Apple Music Electron Client

This project is an Electron application that serves as a client for Apple Music. It allows users to interact with Apple Music's features in a desktop environment on Linux.

## Project Structure

- `src/main.ts`: The main entry point of the Electron application. It creates the main window and manages the application lifecycle.
- `src/preload.ts`: Used to define a preload context. It exposes certain Electron API features to the renderer process while maintaining security.
- `src/renderer.ts`: Manages the user interface logic. It interacts with the DOM and can communicate with the main process via IPC channels.
- `src/styles.css`: Contains the CSS styles for the application, defining the appearance of the user interface.
- `electron-builder.json`: Configuration file for Electron Builder, specifying build parameters such as name, version, and files to include.
- `package.json`: Configuration file for npm, listing dependencies, scripts, and project metadata.
- `tsconfig.json`: TypeScript configuration file, specifying compiler options and files to include in the compilation.

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Development

To start the application in development mode, use:

```
npm start
```

## Building

To build the application for distribution, run:

```
npm run build
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.