Custom Date Formatting
==============================================================

In your Blog Template, click "Edit Options" for the "Blog Content" module, and for both the Blog post body template HTML and the Blog listing template HTML textboxes replace the following code with the html in "custom-date-formatting.html":

<p>
    {{ content.publish_date_localized }}
</p>

Rearrange the html as you'd like and style it using CSS.  

You can change the appearance of the month, day, and year by changing the value of the strftime() method.  The following is a reference guide for all possible values: http://docs.python.org/2/library/datetime.html#strftime-strptime-behavior  
