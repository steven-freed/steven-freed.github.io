function NavBar() {}
NavBar.prototype = new Component;

NavBar.prototype.getItems = function(routes) {
    var activeRoute = function() {
        var active = document.getElementsByClassName('route-active')[0];
        document.getElementById(active.id).className = document.getElementById(active.id).className.replace(' route-active', '');
        window.event.srcElement.parentElement.className += ' route-active';
    }
    var activeId = window.location.pathname;
    var listItems = Object.keys(routes).map(function(k) {
        if (k === '/')
            return ('<li id="${}" class="fa-home-link ${}" onclick="${}"><Link path="${}">Steven Freed</Link></li>').$({
                0: k,
                1: activeId === k ? 'route-active' : '',
                2: activeRoute,
                3: k
            });
        else 
            return ('<li id="${}" class="fa-link ${}" onclick="${}"><Link path="${}">${}</Link></li>').$({
                0: k,
                1: activeId === k ? 'route-active' : '',
                2: activeRoute,
                3: k,
                4: routes[k].name
            });
    });
    window.addEventListener('popstate', function(e) {
        var active = document.getElementsByClassName('route-active')[0];
        document.getElementById(active.id).className = document.getElementById(active.id).className.replace(' route-active', '');
        // tries Chrome catches Safari
        var elId;
        try { 
            elId = e.path[0].location.pathname;
        } catch (err) {
            elId = e.target.location.pathname;
        }
        document.getElementById(elId).className += ' route-active';
    });
    return listItems.map(function(li) { return li }).join('');
}

NavBar.prototype.markup = function() {
    var routes = Route({
        '/resume': Resume,
        '/open-source': OpenSource
    });

    return ('\
            <div id="navbar"><ul>${items}</ul></div> \
            <Heading /> \
            <Switch routes="${routes}" style="${switchStyle}" /> \
       ').$({
            'items': this.getItems({
                '/': {component: App, name: null},
                '/resume': {component: Resume, name: 'Resume'},
                '/open-source': {component: OpenSource, name: 'Open Source'}
            }),
            'routes': routes,
            'switchStyle': Style({
                height: '100%',
                width: '100%',
                backgroundColor: 'lightgrey'
            })
        });
}
