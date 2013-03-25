hoisin.scss
===========

A simple responsive mini framework to kick start your project

## Usage
Open the _vars.scss file and add your variables to it. You can add any variables you will be using like colors, font files, sizes, etc.

### Grid
By defaul we use a 12 column grid with 60px columns and 20px gutters. The spans have simple names like `".col4"`. there are helper classes like `".colr"` to pull a span to the right, and `".pre1"` to `".pre11"` for offset spans.

### File structure

To keep it organised, you can add one file for each section, and add common (for each size) styles to the base.scss file. Common styles across the site should go in common.scss.