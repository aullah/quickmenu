# Quick Menu
The new forward-thinking standard of mobile navigation for the web, providing an unparalleled user experience. Everything is in thumb's reach. No need to stretch or use a second hand to open a hamburger menu.

<p align="center">
    <img src="readme-demo.gif" alt="Demo illustrating the Quick Menu in action." width="300px" height="auto">
</p>

## Key Features
* Themeable with support for both light and dark mode based on user's device preference.
* Mobile landscape orientation supported and tested up to Apple iPhone 12 Pro Max and Samsung Galaxy S20 Ultra.
* Compatible with mobile devices with non-rectangular screens, i.e. notches and gesture areas.
* Menu wording and content all customisable in HTML.
* Responsive for mobile, tablet and desktop. Desktop will render a basic inline navigation.
* SEO friendly. No need to duplicate navigation items for each device type and content display controlled purely via CSS.

## Installation
### Quick Start via CDN
For a quick and simple way to implement the Quick Menu into your project, we can use the free open source jsDelivr CDN.

The customisation capabilities are reduced by using a CDN, however you should still be able to make modifications by overwritting the Quick Menu styling properties in your own custom CSS.

```html
<!-- Latest compiled CSS. To be placed in the <head>. -->
<link href="https://cdn.jsdelivr.net/npm/quickmenu@0.2.2/dist/css/quickmenu.min.css" rel="stylesheet" integrity="sha384-id6QlTG75NfmYlPpklEoW+JsBuoZQgxQdM99134S4Dpr9IrbhJOKMO4T5lGaclj1" crossorigin="anonymous">

<!-- Latest compiled JS. To be placed before the closing <body> tag. -->
<script src="https://cdn.jsdelivr.net/npm/quickmenu@0.2.2/dist/js/quickmenu.min.js" integrity="sha384-OcTW8BnWSJs8UzdNuNQ0EJC9VSeSRMsWV8aS6hGezG2gzqWMh1xt3yZ0K7QG1aas" crossorigin="anonymous"></script>
```

We recommend placing the stylesheet before any of your own custom stylesheets, which will ensure your customisations take precedence where possible. In a similar order, it's recommended to place the script before any of your own custom scripts too.

### NPM
The Quick Menu can be installed as a Node.js module into your project using NPM with the following command:

    npm install quickmenu

Using a module bundler such as Webpack, import Quick Menu's JavaScript into your JS file (e.g. `app.js`):

```javascript
require('quickmenu');
```

Then for complete customisation, import Quick Menu's pre-compiled Sass into your `.scss` file:

```scss
@import "node_modules/quickmenu/src/scss/quickmenu";
```

Or alternatively you may import the ready-to-use compiled css:

```scss
@import "node_modules/quickmenu/dist/css/quickmenu.min";
```

## To-Do / Future Plans
* Remove dependency from jQuery. (Currently in progress.)
* Remove FontAwesome specific styling and ensure compatibility with any iconography.
* Provide the ability to toggle themes manually.
* Advance the desktop menu further with additional optionally applicable features.

## Credits / References
* Inspired by "iPhone X Web Navigation Concept" by [Daniel Korpai via Medium](https://medium.muz.li/iphone-x-web-navigation-concept-c06efc0e0c50) and [Dribble](https://dribbble.com/shots/3851367-iPhone-X-Web-Navigation-Idea).
* Research on "The Thumb Zone: Designing For Mobile Users" by [Samantha Ingram via Smashing Magazine](https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/).
