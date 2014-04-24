Common Jinja Macros
================================================
Jinja macros have a wide variety of uses, but for our stylesheets we will use them like a SASS mixin. A SASS mixin allows you to make groups of CSS declarations that you can reuse through your stylesheet, while passing in values if necessary - this is how we will use a macro. A good use for a jinja macro is for vendor prefixes.

This snippet will provide commonly used macros for CSS3 properties that require multiple lines of vendor prefixes. Using these macros will help reduce the amount of time it takes to write code, and will result in clean stylesheets.

Step 1
------
Copy the macros that you need and paste them to the Macros section of the boilerplate CompanyStyle.css file.