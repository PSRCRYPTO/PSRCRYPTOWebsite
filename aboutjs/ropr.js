// Global variable OS
var OS = null;

$(document).ready(function() {

    var output = new classOutput();
    var input = new classInput();

    OS = new classOS( {
        output: output,
        input: input
    });

    OS.output.pushBuffer([
        'E0ATDT5A7B1O3U6T>',
        ' CONNECT',
        '  '
    ]);

    var shell = new classShell();
    shell.start();

});
