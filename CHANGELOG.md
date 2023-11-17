# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2023-11-17

## Added

- A new attribute has been added to the component called `os`. This option allows you to force the button to use a specific operating system icon. The default is `auto` which will use the operating system of the device that the button is being displayed on. The other options are `ios`, `android`, and `windows`. Setting this option is useful during development when combined with the `debug` option to force the button to use a specific icon set regardless of the device the button is being viewed on. For production, leaving it unset or set to `auto` will provide the best user experience for end users.

### Fixed

- The share icons between iOS, Android and Windows had different line widths. The icons have been remade to have the same line widths to provide a more consistent look across platforms.
- Fixed a typo in a console log message.

## [1.0.1] - 2023-04-10

### Fixed

- There are no code changes to this version, but the documentation now correctly shows the correct import statement for the module. The previous version had the incorrect import statement showing the module having a default export, but it does not. The import statement should be `import { ProgressiveShareButton } from 'progressive-share-button';`.
- Fixed the dates in this changelog. I had 2021 instead of 2023. I'm not sure how I missed that!


## [1.0.0] - 2023-03-04

- Initial release of 1.0.0.

## [1.0.0-alpha.11] - 2023-03-01

### Fixed

- Fixed: Previous solution didn't fix build system issue. Switched the build script to use `tsc` instead of `vite` to build the package.

## [1.0.0-alpha.10] - 2023-03-01

### Fixed

- Fixed: The build system didn't include the @types directory in the published package. This has been fixed.

## [1.0.0-alpha.9] - 2023-03-01

### Added

- Added typescript types for the `ProgressiveShareButton` class and default function.

### Changed

- Changed: (breaking change) the import statement no longer initialized the web component on import. On some builds using typescript, the button would not be initialized without using the imported function. Now, after import, you must call the init function to initialize the web component, like `ProgressButton.init()`.
- Changed: (breaking change) the `ProgressiveShareButtonElement` class is now exported as `ProgressiveShareButtonClass`.

### Fixed

- Fixed: The demo page has some incorrect class names in the example code. These have been corrected.

## [1.0.0-alpha.8] - 2023-02-27

### Changed

- Turned off minification for production builds because module will be ultimately be bundled with the application using the module and minification will be handled by the application's build process.

## [1.0.0-alpha.7] - 2023-02-27

### Added

- Added `CHANGELOG.md` file. Sorry for the delay on this one, if you've been watching this as it has gone through development. I'll try to keep this up to date from now on. We're still in an alpha state, so breaking changes will still happen, but I will document them here.

### Changed

- Changed: (breaking change) the import statement now initialized the web component without needing to call the imported function.
