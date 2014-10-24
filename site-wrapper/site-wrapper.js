//Wrap entire site in a div
$('body> div').find('script:not(script[type="IN/Share"])').remove().end().wrapAll('<div id="site-wrapper"></div>');