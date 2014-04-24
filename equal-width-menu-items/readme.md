Create a Navigation with Equal Width Menu Items
===============================================
This snippet will show you how to create a horizontal navigation in your header that has equal widths for all of its menu items, no matter how many menu items you may have.

![alt tag](nav-equal-widths.png) 

Step 1
--------
In "Content Settings > Site Maps", create a Site Map for your navigation and populate it with menu items.

Step 2
--------
In the Template Builder, create a full-width Horizontal Nav Module in your header, assign the Site Map from step one to it, and give it a CSS class of "custom-menu-primary".

Step 3
----------
Add the Desktop CSS to the "Custom Menu Primary" section of the boilerplate CompanyStyle.css file.  If your stylesheet is using the most recent version of the boilerplate, then you can just grab the properties for each selector and paste them into the existing matching selectors in the "Parent List" sub-section.

Step 4
----------
Add the Mobile CSS to the "max-width: 767px" media query section of the boilerplate CompanyStyle.css file.

Step 5
----------
Going back to the code that was added in step 3, update the LI "width" property value to: 
10 divided by the # of items in your menu, moving the decimal point once to the right, and rounding to the nearest thousandth.

Ex. If you have 7 items in your main nav:

Divide: 10 / 7 = 1.42857...
Move the decimal: 14.2857
Round it: 14.286%
