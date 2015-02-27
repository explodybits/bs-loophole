# bs-loophole
Adds the active Bootstrap media query/screen size class to `<html>` as `screen-*`. Similar to the `visible-*`, but added dynamically and updated on `window.onresize`

## Why?
Rather than sprinkling `visible-*` or `hidden-*` classes throughout the markup, this
script adds a single screen-* class name to the `<html>` element.

The class names include `screen-xs, screen-sm, screen-md, screen-lg`

If the script detects a mobile device, a `device-mobile` class will 
also be added.

## Usage
```css
html.screen-md,
html.screen-sm {
    /** toggle/style elements for smaller screens **/ 
}

html.screen-xs.device-mobile {
    /** toggle/style elements for mobile devices */
}
```
