// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const metadata = data.metadata;
    const result = metadata.filter(obj => obj.id === parseInt(sample))[0];

    const panel = d3.select("#sample-metadata");
    panel.html("");

    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const samples = data.samples;
    const result = samples.filter(obj => obj.id === sample)[0];

    const otu_ids = result.otu_ids;
    const otu_labels = result.otu_labels;
    const sample_values = result.sample_values;

    // Build a Bubble Chart
    const bubbleTrace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth',
      }
    };

    const bubbleData = [bubbleTrace];
    const bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
      showlegend: false,
      height: 600,
      width: 1200
    };

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const barData = [{
      type: 'bar',
      x: sample_values.slice(0, 10).reverse(), // Top 10 values
      y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(), // Format OTU IDs
      text: otu_labels.slice(0, 10).reverse(),
      orientation: 'h'
    }];

    const barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' },
      yaxis: { title: 'OTU IDs' },
    };

    // Render the Bar Chart and Bubble Chart
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    Plotly.newPlot('bar', barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const sampleNames = data.names;
    const dropdown = d3.select("#selDataset");

    sampleNames.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
