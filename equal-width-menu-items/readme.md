Create a Navigation with Equal Width Menu Items
===============================================
This snippet will show you how to create a horizontal navigation in your header that has equal widths for all of its menu items, no matter how many menu items you may have.
Step One
--------
In "Content Settings > Site Maps", create a Site Map for your navigation and populate it with some menu items.

Step Two
--------
In the Template Builder, create a full-width Horizontal Nav Module in your header, assign the Site Map from step one to it, and give it a CSS class of .custom-menu-primary

Step Three
----------
Add the following styles to the 'Menu' section of Style.css.

Update the width property value in line 6 to: 10 divided by the # of items in your menu, moving the decimal point once to the right, and rounding to the nearest thousandth.

Ex. If you have 7 items in your main nav:
Divide: 10 / 7 = 1.42857...
Move the decimal: 14.2857
Round it: 14.286%
