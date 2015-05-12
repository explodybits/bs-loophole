# bs-loophole
A tiny (< 1K) script that infers the active Bootstrap screen size media query and adds the resulting `screen-(xs|sm|md|lg|xl)` class to `<html>`. Similar to the `visible-*`, but added dynamically and updated on `$(window).resize`

## Why?
Rather than sprinkling `visible-*` or `hidden-*` classes throughout the markup, this
script adds a single `screen-(xs|sm|md|lg|xl)` class name to the `<html>` element.

Targeting a screen size via class name is much easier to implement & manage, rather than duplicating media queries
throughout stylesheet(s).

The class names include `screen-xs, screen-sm, screen-md, screen-lg, screen-xl`

If the script detects a mobile device, a `device-mobile` class will 
also be added.

## Live Examples
 * <a href="http://hookr.io" target="_blank">hookr.io - The WordPress Hook/API Index</a>
 * <a href="http://lessify.io" target="_blank">lessify.io - A configurable CSS to LESS converter and LESS learning tool</a>
 * <a href="http://sassify.io" target="_blank">sassify.io - A configurable CSS to SCSS converter and SCSS learning tool</a>

## Demo
<a href="http://explodybits.com/github/bs-loophole/" target="_blank">http://explodybits.com/github/bs-loophole/</a>

## Install
Add `<script src="assets/js/bs-loophole.min.js"></script>` to `<head>` immediately after jQuery<br />
**NOTE:** The bootstrap stylesheet should be defined ABOVE `bs-loophole`

## CSS Example
```css
html.screen-md div,
html.screen-sm div { 
    /** toggle/style elements for smaller screens **/ 
}

html.device-mobile div {
    /** toggle/style elements for mobile devices */
}

/** increase font size when on large screen */
html.screen-lg div#middle {
    font-size: 125%;
}

/** turn off a feature when on extra small */
html.screen-xs div#middle div#non-mobile-friendly-thing {
    display: none;
}

```

## LESS Example
```less
header {
    > div {
        btn {
            font-size: 250%;
            // make smaller for mobile
            html.screen-xs & {
                font-size: 150;
            }
        }
    }
}
```
