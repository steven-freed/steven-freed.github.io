function App() {}
App.prototype = new Component;

App.prototype.markup = function() {
    return ('\
        <div id="app"> \
            <NavBar /> \
        </div>');
}

// initialize with entry component
Freedactive.init(App, {
    /**
     * Paths to all components
     */
    scripts: [
        '/src/components/NavBar/NavBar.js',
        '/src/components/Resume/Resume.js',
        '/src/components/OpenSource/OpenSource.js',
        '/src/components/Heading/Heading.js'
    ],
    /**
     * Paths to all styles
     */
    styles: [
        '/src/App.css',
        '/src/components/NavBar/NavBar.css',
        '/src/components/Resume/Resume.css',
        '/src/components/OpenSource/OpenSource.css',
        '/src/components/Heading/Heading.css'
    ]
});