Custom Social Icons for Follow Me Widget
================================================
This snippet will show you how override the default social icons for the COS Follow Me Module with custom social icons of your choice.

Step 1
------
In the Template Builder add a Follow Me module to a template.

Step 2
------ 
In the COS Social Settings, ensure social accounts have been added and checked off for the "Follow Me" option.

Step 3
------
Create an image sprite that contains all of your custom social icons.  Upload it to the COS via the File Manager.

Step 4
------
Add the CSS to the "Components" section of the boilerplate CompanyCustom.css file.

Step 5
------
In the CSS, update the ".widget-type-follow_me .cell-wrapper div span" selector so that the background URL is the URL of the sprite that was uploaded in step 3 and so that the height and width are set.

Step 6
------
Update the background positions, while consulting the image sprite, for the default and hover states for each appropriate Social Icon Selector.