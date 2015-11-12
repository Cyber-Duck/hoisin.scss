hoisin.scss
===========

A simple responsive mini framework to kick start your project, written in Sass. Please note that this project does not include any predefined styling or premade components. We aim to create an organised base from you can create your own library instead of a one-size-fits-all solution.

We did not include a reset since we believe they are not necessary, we encourage you to define the styles you need for your project, and leave the unstyled elements to the browser.

## Usage
Open the _vars.scss file and add your variables to it, including the size of your base grid. You can add any variables you will be using like colors, font files, sizes, etc.

	// Grid
	$col-qty: 				12;   // Amount of columns
	$col-width: 			60px; // Width of column
	$gutter:				20px; // Width of gutters

	// Breakpoints
	$bp-xl: 	1360px;
	$bp-l: 		1024px;
	$bp-m: 		600px;
	$bp-s: 		240px;

### Grid
By default we use a small desktop 12 column grid with 60px columns and 20px gutters and a larger desktop grid with 70px columns and 30px gutters. The spans have simple names like `".col4"`. There are helper classes like `".colr"` to pull a span to the right, and `".pre1"` to `".pre10"` as well as `".suf1"` to `".suf10"` for offset spans.

Tablet and mobile spans can be altered by using extra helper classes depending on the layout requirements, we've included classes for full, half one third and two thirds (widths) which override default column behaviour. We also added a `".clear"` helper class for browsers that can't clear themselves out.

### Breakpoints
We have added four common breakpoints in the variables file, you can adjust these to match your content and layout, or even add new breakpoints for more control.

Example of a typical layout:

	<div class="container">
	    <div class="col8 m-2_3">
	    	<p>Your content here</p>
	    </div>
	    <div class="col4 m-1_3">
	    	<p>Your sidebar here</p>
	    </div>	    
	<div>

See index.html file for more layout examples.

### Mixins
We have included a mixins file with all common mixins we use everyday. This file doesn't output anything by itself, so it's safe to include in the main styles file so the mixins are always available. Please check the `_mixins.scss` file for usage information about each one of them.

### Functions
We have also included a functions file with a few functions we use in every project. This file doesn't output anything by itself either, so it's always included in the main styles file so the functions are available across all components and pages. Please check the `_functions.scss` file for usageinformation about each one of them.

### File structure
We recommend to create one file for each individual component and save it in the components folder then use `@include: 'components/filename';` in the main styles file. The same with styles that apply only to individual pages and don't belong to any component can be saved in individual files per page in the `pages` folder and use `@include: 'pages/filename';` in the main styles file. You can create as many component or page files as you want.