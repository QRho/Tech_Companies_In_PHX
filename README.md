#Introduction:

##For this project, we wanted to look at the different software companies in the Phoenix metropolitan area. This will give us a look at what companies are out there, how big they are, and what type of industry they work in. This information will help tremendously when we start our job search. We want to find a way to help job seekers to discover companies in specific industries that resonate with them. We want to empower job seekers with knowledge about the companies that they are interested in working for.

##The main idea for our project is to put together a dashboard that can be deployed on a website. You would be able to put in certain key words or phrases into a search, and it would give you the closest result with all of the information that you need for that company.

##We will be using the information from this website: https://gregslist.com/phoenix/search/. To get a good set of information, we are filtering the results to show companies that have been active for at least 6 years. We will be using web scraping techniques to get the information, clean up the data, and putting the information together.

#Details:

##We have four javascript files that run the different visualizations. You will see this in the Static folder. The dataframe at the bottom of the page comes from data.js, which is the jsonified information from our .xlsx file. We wrote this .xlsx to sqlite using the command prompt, and we checked that data using an opensourced DV browser for sqlite. None of our visualizations run off of the sqlite since we had already created our javascript and HTML files. To make the links clickable was actually quite a feat. The original information did not include the href, so we had to manually add that to the dataframe before we called it back in to the javascript datafile, which you will see.

#Scraping Notes/Issues:

##We had to use a couple of macros to clean the information after we initially scraped it. We did this in excel. There may or may not have been difficulties on the website to make it harder to scrape. The Jupyter notebook shows we were able to pull the individual rel tag attributes and write these to a dataframe and export to CSV, however, when the information is read in CSV, it was set up to display the complete HTML surrounding the object. The macro that we used will be referenced in the TheExport.jpg file. Excel has a built in function that interferes with numbers that have slashes between them. The size company 11-50 & 1-10 were consistently triggering a date function, and changing the numbers to dates. IE: January 10th, 1950 and such. To get around this, we had to change the CSV to .xlsx and work with it as a notebook instead of a CSV file.


Site is live here:![Tech_Companies_in_Phoenix] (https://tech-companies-in-phoenix.netlify.app/)
