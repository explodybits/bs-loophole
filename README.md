# bs-loophole
Infers the active Bootstrap screen size media query and adds the resulting `screen-(xs|sm|md|lg|xl)` class to `<html>`. Similar to the `visible-*`, but added dynamically and updated on `$(window).resize`

## Why?
Rather than sprinkling `visible-*` or `hidden-*` classes throughout the markup, this
script adds a single `screen-(xs|sm|md|lg|xl)` class name to the `<html>` element.

Also, targeting a screen size via class name is much easier than duplicating media queries
throughout stylesheets.

The class names include `screen-xs, screen-sm, screen-md, screen-lg, screen-xl`

If the script detects a mobile device, a `device-mobile` class will 
also be added.

## Usage
```css
html.screen-md,
html.screen-sm {
    /** toggle/style elements for smaller screens **/ 
}

html.device-mobile {
    /** toggle/style elements for mobile devices */
}
```
