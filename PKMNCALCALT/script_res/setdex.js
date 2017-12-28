var SETDEX = {};

var components = [
    ARK_SET
];

for (var i=0; i<components.length; i++) {
    var sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX[p] = $.extend(SETDEX[p], sourceDex[p])
            }
        }
    }
}

var reloadXYScript = function()
{

    components = [
    ARK_SET,

];

for (var i=0; i<components.length; i++) {
    sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX[p] = $.extend(SETDEX[p], sourceDex[p])
            }
        }
    }
}
}
