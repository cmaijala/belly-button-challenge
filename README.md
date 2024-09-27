# belly-button-challenge
![image](https://github.com/user-attachments/assets/d6de73d4-dfb2-4e22-b0c2-129e04111237)

## Project 3 for the University of Minnesota Data Visualization Boot Camp


## Background
### In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

### The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


### Steps Taken:

## 1.) I used the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

## 2.) Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Use sample_values as the values for the bar chart.

  * Use otu_ids as the labels for the bar chart.

  * Use otu_labels as the hovertext for the chart.

![image](https://github.com/user-attachments/assets/0c96f50e-c233-45cf-99ac-c89ea7bd51e1)

## 3.) Created a bubble chart that displays each sample.

  * Use otu_ids for the x values.

  * Use sample_values for the y values.

  * Use sample_values for the marker size.

  * Use otu_ids for the marker colors.

  * Use otu_labels for the text values.

![image](https://github.com/user-attachments/assets/85be3ef5-dfce-4942-bc2f-b4c5c001c738)

## 4.) Display the sample's metadata, i.e., an individual's demographic information.

  * Loop through each key-value pair from the metadata JSON object and create a text string.

  * Append an html tag with that text to the #sample-metadata panel.

![image](https://github.com/user-attachments/assets/3d5ec599-d3a6-4a2c-bfcd-136f0cae4697)

## 5.) Updated all the plots when a new sample is selected. This is my dashboard shown as follows:
![image](https://github.com/user-attachments/assets/7c6fd5b9-1ae7-47a2-8b00-ca66d718a486)

## 6.) Deployed my app to a free static page hosting service, such as GitHub Pages. Submitted the links to my deployment and my GitHub repo. 















































## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.




