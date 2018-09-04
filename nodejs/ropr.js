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
        'E0ATDT5N7O1D3E6S>',
        ' CONNECT',
        '  '
    ]);

    var shell = new classShell();
    shell.start();

});
