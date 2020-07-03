function Resume() {}
Resume.prototype = new Component;

Resume.prototype.markup = function() {
    return ('<div id="resume">\
                <iframe id="resume-frame" src="/assets/resume.pdf">\
            </iframe></div>');
}
