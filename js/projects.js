$(function() {
var projects = { 'projects': [{
  'name': 'Stadium Map',
  'images': [],
  'description': 'Single page Google Maps application. Shows all the current stadiums for the MLB, NFL, NBA, NHL, and MLS. With search functions, and integrates data from Wikipedia and Foursquare via AJAX.',
  'tools': 'HTML, Sass/CSS, Knockout.js, jQuery, gulp, Google Maps API, Foursquare API',
  'projecturl': null,
  'sourceurl': {'name': 'github',
                 'url': 'https://github.com/6stringbeliever/neighborhood-map'}
},
{
  'name': 'Responsive Wedding Website',
  'images': [],
  'description': 'A single page, responsive website showing details for our 12.13.14 wedding.',
  'tools': 'HTML, Sass/CSS',
  'projecturl': {'name': 'shaunandmaura.com',
                 'url': 'http://shaunandmaura.com'},
  'sourceurl': null
},
{
  'name': 'Canvas Game',
  'images': [],
  'description': 'HTML5 canvas game. Collect gems and avoid getting hit by bugs. An exercise in object-oriented JavaScript for the Udacity Front-End Web Development nanodegree.',
  'tools': 'JavaScript',
  'projecturl': null,
  'sourceurl': {'name': 'github',
                 'url': 'https://github.com/6stringbeliever/frontend-nanodegree-arcade-game'}
},
{
  'name': 'RFP Responder',
  'images': [],
  'description': 'An application for managing boilerplate used for creating proposals in response to RFPs. Developed the entire front-end and back-end. For web development course in MS HCI program.',
  'tools': 'HTML, CSS, JavaScript, jQuery, PHP, MySQL',
  'projecturl': {'name': 'RFP Responder',
                 'url': 'http://rfp.superawesomegood.com'},
  'sourceurl': null
},
{
  'name': 'Pico Portfolio',
  'images': [],
  'description': 'A plug-in for the Pico CMS for creating nifty portfolio sites.',
  'tools': 'PHP',
  'projecturl': null,
  'sourceurl': {'name': 'github',
                 'url': 'https://github.com/6stringbeliever/pico_portfolio'}
}]};

ko.applyBindings(projects);
});
