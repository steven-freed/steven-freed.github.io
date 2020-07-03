function OpenSource() {}
OpenSource.prototype = new Component;

OpenSource.prototype.markup = function() {
    var openSources = [
        {
            name: 'Freedactive',
            desc: 'Single Page Application Framework, actually used to build this website!',
            logo: '/assets/freedactive.png',
            link: 'https://www.npmjs.com/package/freedactive'
        }
    ] 

    return ('\
        <div id="open-source">\
            <h3>Open Source</h3>\
            <ul class="formatted-list">${}</ul>\
        </div>\
    ').$({
        0: openSources.map(function(source) {
            var i = ('<li>\
                        <img src=${logo}></img>\
                        <a href=${link}>${name}</a>\
                        <span>: ${desc}</span>\
                        <iframe src=${link}></iframe>\
                    </li>\
                ').$({
                logo: source.logo,
                link: source.link,
                name: source.name,
                desc: source.desc,
            });
            console.log(i)
            return i;
        }).join('')
    });
}