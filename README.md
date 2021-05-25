# Quick Menu
The new forward-thinking standard of mobile navigation for the web, providing an unparalleled user experience. Everything is in thumb's reach. No need to stretch or use a second hand to open a hamburger menu.

<p align="center">
    <img src="readme-demo.gif" alt="Demo illustrating the Quick Menu in action." width="300px" height="auto">
</p>

## Contents
- [Key Features](#key-features)
- [Live Demo](#live-demo)
- [Installation](#installation)
    - [Quick Start via CDN](#quick-start-via-cdn)
    - [NPM](#npm)
- [Usage](#usage)
    - [JavaScript](#javascript)
    - [HTML Examples](#html-examples)
    - [The `qm-only` Class](#the-qm-only-class)
    - [CSS Customisations](#css-customisations)
    - [Sass Customisations](#sass-customisations)
- [Contributing](#contributing)
- [To-Do / Future Plans](#to-do--future-plans)
- [Credits / References](#credits--references)

## Key Features
* Themeable with support for both light and dark mode based on user's device preference.
* Mobile landscape orientation supported and tested up to Apple iPhone 12 Pro Max and Samsung Galaxy S20 Ultra.
* Compatible with mobile devices with non-rectangular screens, i.e. notches and gesture areas.
* Menu wording and content all customisable in HTML.
* Responsive for mobile, tablet and desktop. Desktop will render a basic inline navigation.
* SEO friendly. No need to duplicate navigation links for each device type and content display controlled purely via CSS.
* No development dependencies, libraries or prerequisites required.

## Live Demo
You can find a live demo at <a href="https://quickmenu.org">quickmenu.org</a>.

Ensure you're on a mobile or tablet device to trial the Quick Menu, otherwise the desktop mode will be rendered which is an inline navigation.

## Installation
### Quick Start via CDN
For a quick and simple way to implement the Quick Menu into your project, we can use the free open source jsDelivr CDN.

The customisation capabilities are reduced by using a CDN, however you should still be able to make modifications by overwriting the Quick Menu styling properties in your own custom CSS.

```html
<!-- Latest compiled CSS. To be placed in the <head> above other stylesheets. -->
<link href="https://cdn.jsdelivr.net/npm/quickmenu@1.4.0/dist/css/quickmenu.min.css" rel="stylesheet" integrity="sha384-Pkbhc09gBjDEhzyc88npCxlMrSPAxIyYgOlEO5OhdueX8OihlI+3/pKABNrF09ET" crossorigin="anonymous">

<!-- Latest compiled JS. To be placed before the closing <body> tag above other scripts. -->
<script src="https://cdn.jsdelivr.net/npm/quickmenu@1.4.0/dist/js/quickmenu.min.js" integrity="sha384-J+7UVhxvYUPTb1N2qLj0dvniUcy8M1Ssxsic1xFI31naqNI4KlXP+r4D5eLVxhgg" crossorigin="anonymous"></script>
```

We recommend placing the stylesheet before any of your own custom stylesheets, which will ensure your customisations take precedence where possible. Similarly, it's required to place the script before any of your own custom scripts too.

### NPM
The Quick Menu can be installed as a Node.js module into your project using NPM with the following command:

    npm install quickmenu

Using a module bundler such as Webpack, import Quick Menu's JavaScript into your JS file (e.g. usually `main.js` or `app.js`):

```javascript
import QuickMenu from "quickmenu";
```

Then for complete customisation, import Quick Menu's pre-compiled Sass into your `.scss` file: (Depending on your project file structure, you may need to prepend `../` appropriately to the import rule.)

```scss
@import "node_modules/quickmenu/src/scss/quickmenu";
```

Or alternatively you may import the ready-to-use compiled css (via a bundler, e.g. Webpack):

```javascript
import "quickmenu/dist/css/quickmenu.min.css";
```

## Usage
### JavaScript
```javascript
new QuickMenu(); // To initialise the Quick Menu.
```

### HTML Examples
When in responsive mode for mobiles and tablets, the menu is fixed at the bottom of the screen within thumb reach. For desktops a regular inline menu is displayed, therefore you should place the HTML code where you want the navigation to be positioned for desktop visitors.

#### Utmost Minimal
```html
<!-- Utmost Minimal -->
<nav class="quick-menu navigation">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

#### Minimal: Renaming Quick Menu Button
```html
<!-- Minimal: Renaming Quick Menu Button -->
<div class="quick-menu navigation">
    <div class="button">My Menu</div>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</div>
```

#### Minimal: Renaming Close Button
```html
<!-- Minimal: Renaming Close Button -->
<div class="quick-menu navigation">
    <div class="menu">
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div class="menu-close">Dismiss</div>
    </div>
</div>
```

#### Full Fledged
```html
<!-- Full Fledged: including SVGs as icons (not supplied), menu heading content, customised wording on open and close buttons. -->
<div class="quick-menu navigation">
    <div class="button"><img src="/icons/bars.svg">My Menu</div>
    <div class="menu">
        <div class="menu-heading">
            <div class="qm-icon"><img src="/icons/compass.svg"></div>
            <span>My Menu</span>
            <p>Explore the contents of this site by jumping around using the following handy menu.</p>
        </div>
        <hr>
        <nav>
            <ul>
                <li><a href="/"><div class="qm-icon qm-only"><img src="/icons/home.svg"></div>Home</a></li>
                <li><a href="/about"><div class="qm-icon qm-only"><img src="/icons/about.svg"></div>About</a></li>
                <li><a href="/work"><div class="qm-icon qm-only"><img src="/icons/work.svg"></div>Work</a></li>
                <li><a href="/contact"><div class="qm-icon qm-only"><img src="/icons/contact.svg"></div>Contact</a></li>
            </ul>
        </nav>
        <div class="menu-close">Dismiss</div>
    </div>
</div>
```

##### The `.qm-icon` Class
The Quick Menu has been designed to enable you to use any iconography set on the menu, including images/SVGs, fonts and etc. Any icon styling will need to be applied from your own custom CSS. However we have introduced a `qm-icon` class to provide minimal styling to reduce your workload.

If you're using FontAwesome icons via the `<i>` element for example, you can apply the `.qm-icon` class directly to the element. Otherwise you can wrap your icons in a `div` element with the `.qm-icon` class.

### The `.qm-only` Class
As a part of your requirements you may need to present additional content or features (e.g. such as a search field) inside the Quick Menu. You can embed additional content inside the `.menu` div (as illustrated in the "Minimal: Renaming Close Button" and "Full Fledged" HTML examples above).

To ensure that the additional content you insert only appears inside the Quick Menu for mobile and tablet devices and is not present on desktops, you can add the `qm-only` class to HTML elements.

### CSS Customisations
The Quick Menu has been designed to balance providing minimal styling whilst still offering a ready-made solution, therefore even if you're using this package via a CDN you are still able to customise the styling properties. By targeting specific elements in your own custom CSS, you can overwrite the default values.

To ensure your custom CSS takes precedence, place the Quick Menu CSS before (i.e. above) your own stylesheet in your HTML document. The use of the `!important` property should be unnecessary when following these rules as none have been applied in the Quick Menu CSS.

#### Selectors
```css
.quick-menu.navigation .button { /* The 'Quick Menu' floating button */ }
.quick-menu.navigation .menu { /* The entire menu container */ }
.quick-menu.navigation .menu .menu-heading { /* The heading content (i.e. top part) within the menu from the 'Full Fledged' example */ }
.quick-menu.navigation .menu .menu-close { /* The close button */ }
.quick-menu.navigation .menu nav ul li { /* The container for a single navigation link */
    min-width: 100px; /* The width of a link. You may adjust this to a fixed value or a % to ensure all items are of equal width. */
}
.quick-menu.navigation .menu nav ul li a { /* The actual hyperlink. */ }
```

### Sass Customisations
By importing the pre-compiled Sass source files into your project, you can take additional advantage of configuring the Quick Menu to your preference/requirements. All custom and additional styling should still be incorporated in your own SCSS file(s) however, to retain the independence of the Quick Menu package and ensuring it can continue to be updated without conflicts.

#### Variable Defaults
All Quick Menu Sass variables are defined followed with a `!default` property, which ensures that if the variable has not been declared in your custom SCSS then the default value will be assigned. This enables your variables to take precedence without the need to modify the Quick Menu package.

Your variables should be set before importing the Quick Menu SCSS. For example:
```scss
// Your customisations
$backdrop-bg: rgba(255, 255, 255, 0.5);
$nav-item-width: 120px;

// Import Quick Menu SCSS
@import "node_modules/quickmenu/src/scss/quickmenu";
```

#### Available Variables
To view all the variables available for your customisation, please explore the '[src/scss/_variables.scss](https://github.com/aullah/quickmenu/blob/main/src/scss/_variables.scss)' file.

You should copy and paste the variables you need to modify into your own SCSS file, change the value(s) appropriately and then remove the `!default` property.

#### Modifying Device Breakpoints
Naturally by default a mobile version of the Quick Menu will appear for mobile devices, therefore there is only the need to define breakpoints for the tablet and desktop.

Following the above documentation of altering variables, we can also modify Sass maps (and in our case, device breakpoints) in a similar order. For example:

```scss
// Your customisations
$menu-breakpoints: (
    tablet: 768px,
    desktop: 1200px
);

// Import Quick Menu SCSS
@import "node_modules/quickmenu/src/scss/quickmenu";
```

## Contributing
We appreciate your contributions to making this a better project for all of us. Please see our [Contributing Guide](https://github.com/aullah/quickmenu/blob/main/CONTRIBUTING.md) for more details.

During participation on the Quick Menu project, we maintain a [Code of Conduct](https://github.com/aullah/quickmenu/blob/main/CODE_OF_CONDUCT.md) which we require all individuals to adhere to.

## To-Do / Future Plans
* Provide the ability to toggle themes manually.
* Implement the ability to have sub-menus for both desktop and mobile devices.

## Credits / References
* Inspired by "iPhone X Web Navigation Concept" by [Daniel Korpai via Medium](https://medium.muz.li/iphone-x-web-navigation-concept-c06efc0e0c50) and [Dribble](https://dribbble.com/shots/3851367-iPhone-X-Web-Navigation-Idea).
* Research on "The Thumb Zone: Designing For Mobile Users" by [Samantha Ingram via Smashing Magazine](https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/).
* Module development and documentation standards adopted from [Alex MacArthur via TypeIt](https://github.com/alexmacarthur/typeit) and [Bootstrap](https://github.com/twbs/bootstrap).
* Mobile and tablet device viewports obtained from [The Ultimate Guide To iPhone Resolutions](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions), ["iPhone 12 vs Designers" by Michal Malewicz via Medium](https://uxdesign.cc/iphone-12-vs-designers-ca8bac776dad) and [Viewport Sizer Tool](https://viewportsizer.com/devices/).
