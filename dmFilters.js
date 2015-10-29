/**
 * Created by david-maser on 28/10/15.
 * requires jQuery
 */
(function ( $ ) {
    $.fn.filterize = function( options ) {
        var settings = $.extend({
            // These are the defaults.
            blur: null,
            brightness: null,
            contrast: null,
            dropShadow: null,
            grayscale: null,
            hueRotate: null,
            invert: null,
            opacity: null,
            saturate: null,
            sepia: null,
            transition:1,
            mode:"style"
        }, options),
            r = navigator,
            pool = '',
            pref = '',
            nav = r.appName,
            prod = r.product;
        if(!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
            nav = 'op';
        }else if(typeof InstallTrigger !== 'undefined'){
            nav = 'ff';
        }else if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0){
            nav = 'sa';
        }else if(!!window.chrome && !isOpera){
            nav = 'ch';
        }else if(/*@cc_on!@*/false || !!document.documentMode){
            nav = 'ie';
        }else{
            nav = null;
        }
        // filterize the collection based on the settings variable.
            pool += settings.blur !== null ? "blur("+settings.blur+"px) " : "";
            pool += settings.brightness !== null ? "brightness("+settings.brightness+") " : "";
            pool += settings.contrast !== null ? "contrast("+settings.contrast+") " : "";
            pool += settings.dropShadow !== null ? "drop-shadow("+settings.dropShadow+") " : "";
            pool += settings.grayscale !== null ? "grayscale("+settings.grayscale+") " : "";
            pool += settings.hueRotate !== null ? "hue-rotate("+settings.hueRotate+"deg) " : "";
            pool += settings.invert !== null ? "invert("+settings.invert+") " : "";
            pool += settings.opacity !== null ? "opacity("+settings.opacity+") " : "";
            pool += settings.saturate !== null ? "saturate("+settings.saturate+") " : "";
            pool += settings.sepia !== null ? "sepia("+settings.sepia+") " : "";
        if(settings.mode == 'style') {
            return this.css({
                "filter": pool,
                "-webkit-filter": pool,
                "-moz-filter": pool
            });
        }else if(settings.mode == 'hover'){
            $(this).on('mouseover',function(){
                $(this).css({
                    "filter": pool,
                    "-webkit-filter": pool,
                    "-moz-filter": pool
                });
            }).on('mouseout',function(){
                $(this).attr('style','').css('transition',settings.transition+"s");
            });
            return this.css('transition',settings.transition+"s");
        }else if(settings.mode == 'click'){
            $(this).on('click',function(){
                $(this).css({
                    "filter": pool,
                    "-webkit-filter": pool,
                    "-moz-filter": pool,
                    "-o-filter":pool,
                    "-ms-filter":pool
                });
            });
            return this.css('transition',settings.transition+"s");
        }
    };
}( jQuery ));
/**
 usage
 $( "div" ).filterize({
    blur:2,
    brightness:2,
    sepia:1
 });
 **/