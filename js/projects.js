var projects = { 'projects': [{
  'name': 'Stadium Map',
  'images': [],
  'description': 'Single page Google Maps application. Shows all the current stadiums for the MLB, NFL, NBA, NHL, and MLS. With search functions, and integrates data and photos from Foursquare and the New York Times via AJAX.',
  'tools': 'HTML, Sass/CSS, Knockout.js, jQuery, gulp, Google Maps API, Foursquare API',
  'projecturl': {'name': 'American Stadiums Map',
                 'url': 'http://6stringbeliever.github.io/neighborhood-map/'},
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
  'projecturl': {'name': 'Frogger Clone (Sort Of)',
                 'url': 'http://6stringbeliever.github.io/frontend-nanodegree-arcade-game/'},
  'sourceurl': {'name': 'github',
                 'url': 'https://github.com/6stringbeliever/frontend-nanodegree-arcade-game'}
},
{
  'name': 'RFP Responder',
  'images': [],
  'description': 'An application for managing boilerplate used for creating proposals in response to RFPs. Developed the entire front-end and back-end. Also, created initial wireframes and performed extensive usability testing. For web development course in MS HCI program.',
  'tools': 'HTML, CSS, JavaScript, jQuery, PHP, MySQL',
  'projecturl': {'name': 'RFP Responder',
                 'url': 'http://rfp.superawesomegood.com'},
  'sourceurl': null
},
{
  'name': 'Pico Portfolio',
  'images': [],
  'description': 'A plug-in for the Pico CMS for creating nifty portfolio sites.',
  'tools': 'PHP, Twig Templates, HTML, Sass, CSS, jQuery',
  'projecturl': null,
  'sourceurl': {'name': 'github',
                 'url': 'https://github.com/6stringbeliever/pico_portfolio'}
}],
'littleprojects': [{
  'name': 'Web Performance Optimization',
  'description': 'Optimized sample portfolio site HTML, CSS, and JavaScript to achieve > 90 PageSpeed Insights scores on both desktop and mobile and achieve 60fps animation. For Udacity front-end nanodegree.',
  'url': {'name': 'github',
          'url': 'https://github.com/6stringbeliever/frontend-nanodegree-mobile-portfolio'}
},
{
  'name': 'JavaScript Testing with Jasmine',
  'description': 'Create tests for a basic feed reader application using the Jasmine testing framework.',
  'url': {'name': 'github',
          'url': 'https://github.com/6stringbeliever/frontend-nanodegree-feedreader'}
},
{
  'name': 'PDF Comp Coding',
  'description': 'Based on a PDF comp of a sample site, coded HTML and CSS to achieve a > 99% visual match. For Udacity front-end nanodegree.',
  'url': {'name': 'github',
          'url': 'https://github.com/6stringbeliever/uda-nano-p1'}
},
{
  'name': 'JavaScript Coding Challenge',
  'description': 'Complete a series of FizzBuzz-type JavaScript challenges. For Udacity front-end nanodegree.',
  'url': {'name': 'github',
          'url': 'https://github.com/6stringbeliever/uda-nano-p2'}
}
]};

ko.applyBindings(projects);
