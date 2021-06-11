hoisin.scss
===========

A simple responsive mini framework to kick start your web project. It containes a grid system, some mixins and functions and a base file structure to help you organize your styles.

**Disclaimer**: This is not a UI Kit, there are no predesigned components.

**Note**: We did not include a reset since we believe they are not necessary, we encourage you to define the styles you need for your project, and leave the unstyled elements to the browser.

## Installation

Place the `scss` and `css` folders in the relevan folder of your project and point your compiler to them. Link the generated CSS file to your web pages. That is all.

### Requirements
* Requires Dart Sass 1.3 and up 
* A good understanding of Sass
* A basic understanding of the CSS Grid module is helpful
* We recommend installing our front end build system for easy compiling of Sass.

## Usage
The variables folder contain somoe basic files for colors, global variables and the grid system, feel free to modify them to fit your project, and to add new files with module specific variables.

### File structure
We recommend to create individual files for elements and components and save them in the `elements` and `components` folders respectively. Be sure to name these files using the `_filename` pattern to avoid Sass compiling them separately, and  remember to add the respective `@use` statements on these files to have access to variables or mixins.

Then add `@use: 'elements/filename';` or/and `@use: 'components/filename';` in the main styles file to import them into your main stylesheet.

The same applies to styles related to specific pages and don't belong to any component, these can be saved in individual files per page in the `pages` folder and add `@use: 'pages/filename';` in the main styles file. 

You can create as many element, component or page files as you want.

### Grid
By default we use a CSS Grid setup with 1 to 6 columns and 24px gaps on small devices, 36px on larger desktop screens. All the values of the grid are configurable in the `variables/_grid.scss` file.

There are helper classes to remove grid gaps, reverse items placement, and make narrow or wider columns, and also to create some predefined common layouts like content/sidebar.

#### Example of a typical simple layout with content and sidebar:

	<div class="grid lg-sidebar-right md-sidebar-right">
		<div class="span">
			<div class="box code">
				Main content
			</div>
		</div>
		<aside class="span">
			<div class="box code">
				Sidebar
			</div>
		</aside>
	</div>

See index.html file for more layout examples and combinations.

### Mixins
We have included a mixins file with all common mixins we use everyday. This file doesn't output anything by itself, so it's safe to include in the main styles file so the mixins are always available. Please check the `_mixins.scss` file for usage information about each one of them.

