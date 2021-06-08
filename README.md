hoisin.scss
===========

A simple responsive mini framework to kick start your project, written in Sass. Please note that this project does not include any predefined styling or premade components. We aim to create an organised base from you can create your own library instead of a one-size-fits-all solution.

We did not include a reset since we believe they are not necessary, we encourage you to define the styles you need for your project, and leave the unstyled elements to the browser.

## Installation
Place the `scss` and `css` folders in the relevan folder of your Project and set up your build system to compile from there, then link your compiled CSS to your templates.

### Requirements
* Should work with all Dart Sass 1.3 compatible preprocessors. 
* We recommend installing our front end build system for easy compiling of Sass.

## Usage
Open the `_vars.scss` file and add your variables to it, including the size of your base grid if you need anything different than the standard. You can add any variables you will be using like colors, font files, sizes, etc. Feel free to use Sass maps as well.

### File structure
We recommend to create one individual file for each component and save it in the `components` folder then use `@include: 'components/filename';` in the main styles file. The same with styles that apply only to individual pages and don't belong to any component can be saved in individual files per page in the `pages` folder and use `@include: 'pages/filename';` in the main styles file. You can create as many component or page files as you want.

	// Grid
	$gutter:	20px; // Width of gutters

	// Breakpoints
	$bp-xl: 	1480px;
	$bp-l: 		1140px;
	$bp-m: 		720px;
	$bp-s: 		120px;


### Grid
By default we use CSS Grid module with multiple divisions (2, 3, 4, 5 and 6). The column spans adapt to their container in equal sizes, except when using helper classes to create common layouts with sidebars. Please note you can add any new layouts by creating project specific class names.

#### Nested grids
Please note the use of `.container` is currently only supported in the main level grid, as we believe nested layouts work better using flexbox and other project specific solutions.

#### Example of a typical simple layout:

	<header class="container l-side-l m-side-l">
	    <div class="span">
		<div class="logo">

		</div>
	    </div>
	    <div class="span">
		<nav>

		</nav>
	    </div>
	</header>

	<div class="container l-side-l m-side-l">
	    <div class="span">
		<p>Your content here</p>
	    </div>
	    <div class="span">
		<p>Your sidebar here</p>
	    </div>
	<div>

See index.html file for more layout examples and combinations.

### Mixins
We have included a mixins file with all common mixins we use everyday. This file doesn't output anything by itself, so it's safe to include in the main styles file so the mixins are always available. Please check the `_mixins.scss` file for usage information about each one of them.

### Functions
We have also included a functions file with a few functions we use in every project. This file doesn't output anything by itself either, so it's always included in the main styles file so the functions are available across all components and pages. Please check the `_functions.scss` file for usageinformation about each one of them.
