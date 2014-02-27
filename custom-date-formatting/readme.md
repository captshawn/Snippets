Custom Date Formatting
==============================================================

In your Blog template, click "Edit Options" for the "Blog Content" module, and for both the Blog post body template HTML and the Blog listing template HTML replace "{{ content.publish_date_localized }}" with the html located in "custom-date-formatting.html".

You can rearrange the html however you'd like in order to match your portal, and you can style it using CSS.  

You can change the appearance of the month, day, and year by changing the value in the strftime() method.  The following is a reference guide for all possible date values: http://docs.python.org/2/library/datetime.html#strftime-strptime-behavior 

![alt tag](custom-date-formatting/date-screenshot.png) 
