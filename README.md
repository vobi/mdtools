mdtools
=======

Collection of handy tools for Markdown files using the [supermarked][sm] engine.

This allows **code highlighting** and **mathematical expressions**.


mdinstaweb
----------

Webserver which accepts Markdown files and delivers a rendered version.

`mdinstaweb [port]`

mdshow
------

Renders a Markdown file to a temporary html file and opens it in the browser.

`mdshow README.md`

md2html
-------

Generates an html file and passes it to stdout.

`md2html README.md > README.html`

Installation
------------

```
npm install -g http://git.io/mdtools
```

Markdown example
----------------

    ```
    var marker = require('supermarked');
    ```

    \$ sqrt(pi) \$

becomes (use this renderer, of course)

```javascript
var marker = require('supermarked');
```

$ sqrt(pi) $

[sm]: https://github.com/vobi/supermarked
