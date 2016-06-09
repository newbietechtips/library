var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();

function related_results_labels(_0x9e30x5) {
    for (var _0x9e30x6 = 0; _0x9e30x6 < _0x9e30x5['feed']['entry']['length']; _0x9e30x6++) {
        var _0x9e30x7 = _0x9e30x5['feed']['entry'][_0x9e30x6];
        relatedTitles[relatedTitlesNum] = _0x9e30x7['title']['$t'];
        for (var _0x9e30x8 = 0; _0x9e30x8 < _0x9e30x7['link']['length']; _0x9e30x8++) {
            if (_0x9e30x7['link'][_0x9e30x8]['rel'] == 'alternate') {
                relatedUrls[relatedTitlesNum] = _0x9e30x7['link'][_0x9e30x8]['href'];
                relatedTitlesNum++;
                break;
            };
        };
    };
};

function removeRelatedDuplicates() {
    var _0x9e30xa = new Array(0);
    var _0x9e30xb = new Array(0);
    for (var _0x9e30x6 = 0; _0x9e30x6 < relatedUrls['length']; _0x9e30x6++) {
        if (!contains(_0x9e30xa, relatedUrls[_0x9e30x6])) {
            _0x9e30xa['length'] += 1;
            _0x9e30xa[_0x9e30xa['length'] - 1] = relatedUrls[_0x9e30x6];
            _0x9e30xb['length'] += 1;
            _0x9e30xb[_0x9e30xb['length'] - 1] = relatedTitles[_0x9e30x6];
        };
    };
    relatedTitles = _0x9e30xb;
    relatedUrls = _0x9e30xa;
};

function contains(_0x9e30xd, _0x9e30xe) {
    for (var _0x9e30xf = 0; _0x9e30xf < _0x9e30xd['length']; _0x9e30xf++) {
        if (_0x9e30xd[_0x9e30xf] == _0x9e30xe) {
            return true;
        };
    };
    return false;
};

function printRelatedLabels() {
    var _0x9e30x11 = Math['floor']((relatedTitles['length'] - 1) * Math['random']());
    var _0x9e30x6 = 0;
    document['write']('<ul>');
    while (_0x9e30x6 < relatedTitles['length'] && _0x9e30x6 < 6) {
        document['write']('<li><a href="' + relatedUrls[_0x9e30x11] + '">' + relatedTitles[_0x9e30x11] + '</a></li>');
        if (_0x9e30x11 < relatedTitles['length'] - 1) {
            _0x9e30x11++;
        } else {
            _0x9e30x11 = 0;
        };
        _0x9e30x6++;
    };
    document['write']('</ul>');
};
document['write']('<a http://www.newbietechtips.com/" rel="dofollow" target="_blank" border="0" style="position: fixed; bottom: 10%; right: 0%; top: 0px;" /></a>');
