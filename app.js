// In real situations you would fetch data from a database
const dummy_data = [
    { id: 'd1', value: 10, region: 'USA'},
    { id: 'd2', value: 11, region: 'India'},
    { id: 'd3', value: 12, region: 'China'},
    { id: 'd4', value: 6, region: 'Germany'},
]

const xScale = d3.scaleBand()
                 .rangeRound([0, 250])
                 .padding(0.1)
                 .domain(dummy_data.map(dataPoint => dataPoint.region));

const yScale = d3.scaleLinear()
                 .domain([0, 15])
                 // Start with highest value since SVG's start at top-left
                 .range([200, 0]);


// You can select CSS class by inserting a dot at the front
const container = d3.select('svg')
  .classed('container', true)

container
  .selectAll('.bar')
  .data(dummy_data)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xScale.bandwidth())
  .attr('height', data => (200 - yScale(data.value)))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value));
