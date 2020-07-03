function Heading() {}
Heading.prototype = new Component;

Heading.prototype.markup = function() {
    return ('\
        <div id="heading">\
        <img class="profile" src="/assets/me.jpg"></img>\
        <div id="contact">\
            <span>Contact Info:</span>\
            <span class="contact-info">✉️ freedgitr@gmail.com</span>\
            <span class="contact-info">💻 steven-freed@github</span>\
            <span class="contact-info">🔗 <a href="https://www.linkedin.com/in/steven-freed-35638713b/">linkedin</a></span>\
        </div>\
        </div>');
}
