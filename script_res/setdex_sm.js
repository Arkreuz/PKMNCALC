var SETDEX_SM = {};

var components = [
    ARK_SET,

];

for (var i=0; i<components.length; i++) {
    var sourceDex = components[i];
    if (sourceDex) {
        for (var p in sourceDex) {
            if (sourceDex.hasOwnProperty(p)) {
                SETDEX_SM[p] = $.extend(SETDEX_SM[p], sourceDex[p])
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
                SETDEX_SM[p] = $.extend(SETDEX_SM[p], sourceDex[p])
            }
        }
    }
}
}
