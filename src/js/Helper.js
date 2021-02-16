export default class Helper {
    /**
    *   Create a new node.
    *   @param {String} type The type of node to create, e.g. div, span, nav etc.
    *   @param {String} classes The classes to apply to the new node, e.g. 'quick-menu navigation'
    *   @param {String} content Optionally define the innerHTML, i.e. the content inside the new node.
    */
    createNode(type, classes, content)
    {
        content = content || false;
        let node = document.createElement(type);
        node.className = classes;
        if (content) { node.innerHTML = content; }
        return node;
    }
    /**
    *   Check if an element exists.
    */
    exists(el)
    {
        if(typeof(el) != 'undefined' && el != null) { return true; } // If not undefined or null, then exists.
        return false;
    }
    /**
    *   Place the node (el) inside a new node (wrap); i.e. wrap the existing
    *   element in a new node.
    */
    wrap(el, wrap)
    {
        el.parentNode.insertBefore(wrap, el);
        wrap.appendChild(el);
    }
}
