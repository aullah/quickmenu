import Helper from './Helper.js';

class QuickMenu
{
    constructor()
    {
        // Use our Helper.
        this.helper = new Helper;

        // Define the Quick Menu elements.
        this.elements = {};
        this.elements.overlay;
        this.elements.container;
        this.elements.nav;
        this.elements.menu;
        this.elements.btnOpen;
        this.elements.btnClose;

        // Prepare the Quick Menu to the required syntax and define 'this.elements'.
        return this.init();
    }
    init()
    {
        /**
        *   If the .quick-menu.overlay does not exist, create and prepend it to the <body>.
        *   This darkens the background whilst the Quick Menu is open.
        */
        if (!this.helper.exists( document.querySelector('.quick-menu.overlay') ))
        {
            document.querySelector('body').prepend( this.helper.createNode('div', 'quick-menu overlay') );
        }
        // Define the element.
        this.elements.overlay = document.getElementsByClassName("quick-menu overlay").item(0);

        /**
        *   If 'Utmost Minimal' example used (i.e. <nav> element with '.quick-menu.navigation' classes),
        *   wrap the <nav> inside a <div> moving the classes to the <div>.
        */
        this.elements.nav = document.getElementsByClassName("quick-menu navigation").item(0);
        if (this.elements.nav.nodeName == 'NAV')
        {
            this.helper.wrap(this.elements.nav, this.helper.createNode('div', this.elements.nav.className));
            this.elements.nav.removeAttribute("class"); // remove classes from nav.
        }
        // Define the elements. Re-run the following, correctly capturing the 'container' and the 'nav'.
        this.elements.container = document.getElementsByClassName("quick-menu navigation").item(0);
        this.elements.nav = this.elements.container.querySelector('nav');

        /**
        *   Wrap the 'nav' inside a 'div' with the '.menu' class, if not already.
        */
        if (!this.helper.exists( this.elements.container.querySelector('.menu') ))
        {
            this.helper.wrap(this.elements.nav, this.helper.createNode('div', 'menu'));
        }
        // Define the element.
        this.elements.menu = this.elements.container.querySelector('.menu');

        /**
        *   Add the 'Quick Menu' button if it does not exist.
        */
        if (!this.helper.exists( this.elements.container.querySelector('.button') ))
        {
            this.elements.container.prepend(this.helper.createNode('div', 'button', 'Quick Menu'));
        }
        // Define the element.
        this.elements.btnOpen = this.elements.container.querySelector('.button');

        /**
        *   Add the 'Close' button with '.menu-close' if it does not exist.
        *   The button must be placed inside the '.menu' div.
        */
        if (!this.helper.exists( this.elements.menu.querySelector('.menu-close') ))
        {
            this.elements.menu.append(this.helper.createNode('div', 'menu-close', 'Close'));
        }
        // Define the element.
        this.elements.btnClose = this.elements.menu.querySelector('.menu-close');

        return this.listen();
    }
    listen()
    {
        this.elements.btnOpen.addEventListener('click', () => { this.open(); });
        this.elements.btnClose.addEventListener('click', () => { this.close(); });
        this.elements.overlay.addEventListener('click', () => { this.close(); });
        this.elements.nav.querySelectorAll('a').forEach(item => { // Close the menu when a navigation item is clicked.
            item.addEventListener('click', () => { this.close(); })
        });
        return this;
    }
    /**
    *   Open the Quick Menu.
    *   Can be manually invoked, however can return unexpected results if on desktop.
    */
    open()
    {
        this.elements.btnOpen.classList.add('hide');
        this.elements.btnOpen.classList.remove('show');
        this.elements.menu.classList.add('show');
        this.elements.overlay.classList.add('active');
        return this;
    }
    /**
    *   Close the Quick Menu.
    *   Can be manually invoked (+ idempotent).
    */
    close()
    {
        this.elements.btnOpen.classList.remove('hide');
        this.elements.btnOpen.classList.add('show');
        this.elements.menu.classList.remove('show');
        this.elements.overlay.classList.remove('active');
        return this;
    }
    /**
    *   Change the theme to the theme-name specified.
    */
    theme(name)
    {
        //
        return this;
    }
}

export default QuickMenu;
