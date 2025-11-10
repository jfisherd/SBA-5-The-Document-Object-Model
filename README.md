

# SBA 5, The Document Object Model



## Description
In this assignment, a blog is created which allows the user to make titled posts and add them to their collection. The posts are stored locally, reloading them when the page is refreshed.



## Running the program
To view use this lab, open index.html in a web browser.<br>
Add a blog post by typing the title and blog content, then clicking submit. <br>
Remove an item by clicking the Remove button. <br>
Your blog posts are saved if you refresh the page<br>
<br>



## Reflection
> What steps did you take to ensure inputs to the form were valid?
event.preventDefault() was used to prevent the page from refreshing

> What challenges did you face? How did you approach the?
Checking for validity. A function to check for validity was written since the check is required for many possible user responses.
<br>
Saving to local storage was difficult. Attempts resulted in storing empty objects.
<br>