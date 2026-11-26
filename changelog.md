### Unreleased

- Load the shop and checkout UI through the shared wp-ui runtime so compatible plugins can share one copy per major version.

### 2.1.5

- Fixed scrolling in product details by switching to the shared shop dialog. Long descriptions and their cart controls are now reachable on small screens.
- Added a shop block setting for up to six product columns on wider screens, with an automatic layout option.

### 2.1.4

- Fixed checkout checkbox labels displaying HTML as text. Links in existing labels and in the default consent text are now clickable.

### 2.1.3

- Fixed the missing REST route for “Check for updates” in the WordPress plugin manager.

### 2.1.2

- Fixed required Select and radio fields incorrectly reporting an empty value after a selection.
- Fixed the Country field crashing with saved region codes such as `DACH`, `EU`, and `ALL`. Missing or unknown regions use the worldwide list.
- Updated the plugin header to require PHP 8.5 and list WordPress 7.1 as the tested version.

### 2.1.1

- Removed obsolete frontend translation JSON files for German (Austria, Germany, and Switzerland) and French.

### 2.1.0

- Reworked the checkout modal and its order confirmation, and switched the shop UI to `@contexis/wp-ui`.
- Updated the GitHub-based plugin updater and translations.
- Migrated the frontend to TypeScript and introduced Composer autoloading for the PHP code.

### 1.0.6

- Loaded the form component styles in the shop frontend.

### 1.0.5

- Reworked the checkout modal and the default order form.
- Improved server-side order validation and retrieval of order email data.
- Fixed product tag loading and added translations.

### 1.0.4

- Simplified React fragment usage in the shop block editor and toolbar.

### 1.0.3

- Bumped the package version to 1.0.3.

### 1.0.2

-   Update System Added

### 1.0.1

-   Fix: only 10 products were shown
-   New: Back-Button now works as in cart and on product page

### 1.0.0

-   Release
