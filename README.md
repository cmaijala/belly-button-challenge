# belly-button-challenge
![image](https://github.com/user-attachments/assets/d6de73d4-dfb2-4e22-b0c2-129e04111237)

## Project 3 for the University of Minnesota Data Visualization Boot Camp


## Background
### In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

### The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


### Steps Taken:

## 1.) I used the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

## 2.) I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * I used sample_values as the values for the bar chart.

  * I used otu_ids as the labels for the bar chart.

  * I used otu_labels as the hovertext for the chart.

![image](https://github.com/user-attachments/assets/4f30285d-8446-4323-ab1c-bf9ab7149f2d)

## 3.) I then created a bubble chart that displays each sample.

  * I used otu_ids for the x values.

  * I used sample_values for the y values.

  * I used sample_values for the marker size.

  * I used otu_ids for the marker colors.

  * I used otu_labels for the text values.

![image](https://github.com/user-attachments/assets/57de231a-c0a5-4441-89ff-2e98efe9a980)

## 4.) I then displayed the sample's metadata, individual's demographic information.

  * I looped through each key-value pair from the metadata JSON object and create a text string.

  * I appended an html tag with that text to the #sample-metadata panel.

![image](https://github.com/user-attachments/assets/cdff65f8-8a90-4f99-8531-ad3185bd17dd)

## 5.) The plots are able to update when a new sample is selected. This is my dashboard shown as follows:
![image](https://github.com/user-attachments/assets/cbf0749c-9735-48f9-adab-91252895882f)

## 6.) Lastly I deployed my app to a free static page hosting service on GitHub Pages. Submitted the links to my deployment and my GitHub repo. 















































## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.

This project utilized ChatGPT, a language model developed by OpenAI, for generating text and answering questions. For more information about ChatGPT, visit OpenAI's ChatGPT.


