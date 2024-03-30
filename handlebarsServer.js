const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 1337;

// Set up the Handlebars view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

console.log(`Views directory set to: ${path.join(__dirname, 'views')}`);
app.use(express.static(path.join(__dirname, 'public')));

// Specify the static file directories
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));

console.log(`Serving static files from: ${path.join(__dirname, 'public')}`);

// Routes for your application
app.get('/', (req, res) => {
    console.log('Rendering index page');
    res.render('index', { title: 'Home - Lambda Chi Alpha' });
});
app.get('/aboutus', (req, res) => {
    console.log('Rendering about us page');
    res.render('aboutus', { title: 'About Us - Lambda Chi Alpha' });
});

// Add routes for events, merchandise, donate, and contactus
app.get('/events', (req, res) => {
    console.log('Rendering events page');
    res.render('events', { title: 'Events - Lambda Chi Alpha' });
});
app.get('/merchandise', (req, res) => {
    console.log('Rendering merchandise page');
    res.render('merchandise', { title: 'Merchandise - Lambda Chi Alpha' });
});
app.get('/donate', (req, res) => {
    console.log('Rendering donate page');
    res.render('donate', { title: 'Donate - Lambda Chi Alpha' });
});
app.get('/contactus', (req, res) => {
    console.log('Rendering contact us page');
    res.render('contactus', { title: 'Contact Us - Lambda Chi Alpha' });
});

// Catch-all handler for 404 errors
app.get('*', (req, res) => {
    console.log(`404 Not Found: ${req.path}`);
    res.status(404).render('404', { title: '404 Not Found - Lambda Chi Alpha' });
});

// 500 error handler
app.use((err, req, res, next) => {
    console.error(`500 Server Error: ${err.stack}`);
    res.status(500).render('500', { title: '500 - Server Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
