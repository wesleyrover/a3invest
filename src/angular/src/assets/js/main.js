'use strict';

var domReady = function(ready) {
    var attacher = document.addEventListener ? {
        add: 'addEventListener',
        remove: 'removeEventListener'
    } : {
        add: 'attachEvent',
        remove: 'detachEvent'
    };

    function completed() {
        document[attacher.remove]('DOMContentLoaded', completed);
        window[attacher.remove]('load', completed);
        ready();
    }

    if (document.readyState === 'complete' ||
        (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
        ready(); // está pronto!
    } else { // ainda não está pronto...
        document[attacher.add]('DOMContentLoaded', completed);
        window[attacher.add]('load', completed);
    }
};

domReady(function() {

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var addClassEventListener = function (element, eventNames, listener) {
        var events = eventNames.split(' ');
        Array.from(events).forEach(function (event) {
            Array.from(document.getElementsByClassName('menu-item')).forEach(function (el) {
                if (el.addEventListener) {
                    el.addEventListener(event, listener);
                } else if (element.attachEvent) {
                    el.attachEvent('on' + event, listener);
                }
            });
        });
    }

    var removeClassEventListener = function (element, eventNames, listener) {
        var events = eventNames.split(' ');
        Array.from(events).forEach(function (event) {
            Array.from(document.getElementsByClassName('menu-item')).forEach(function (el) {
                if (el.removeEventListener) {
                    el.removeEventListener(event, listener);
                } else if (element.detachEvent) {
                    el.detachEvent('on' + event, listener);
                }
            });
        });
    }

    var destroyAllDropdowns = function (protectElement) {
        Array.from(document.getElementsByClassName('dropdown-content')).forEach(function (element) {
            if (protectElement != element) {
                element.style.display = 'none';
                element.parentElement.style.marginBottom = 0;
            }
        });
    }

    var showDropdown = function (e) {
        var currentDropdownBox;
        e.preventDefault();
        if (e.target.localName === 'i') {
            currentDropdownBox = e.target.parentElement.nextElementSibling;
        } else {
            currentDropdownBox = e.target.nextElementSibling;
        }
        if (currentDropdownBox.style.display !== 'flex') {
            currentDropdownBox.style.display = 'flex';
        }
        destroyAllDropdowns(currentDropdownBox);

        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (w < 992) {
            var el = e.target.parentElement;
            if (el.className === 'menu-item') el = el.parentElement;
            el.style.marginBottom = currentDropdownBox.clientHeight + 'px';
        }
    }

    var onResizeEvent = function (e) {
        alignMenuDropdown();
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var content = document.getElementsByClassName('content')[0];
        if (w < 992) {
            if (content !== undefined)
                content.style.display = 'none';
            menuDisableMouseOver(true);
        } else {
            if (content !== undefined)
            content.style.display = 'flex';
            menuDisableMouseOver(false);
        }
    }

    var onClickEvent = function (e) {
        if (e.target.className !== 'menu-item' && e.target.localName !== 'i') {
            destroyAllDropdowns(null);
        }
    }

    var alignMenuDropdown = function () {
        Array.from(document.getElementsByClassName('menu-item')).forEach(function (element) {
            var next = element.nextElementSibling;
            if (next) {
                var menuLeftPos = element.getBoundingClientRect().left + 32;
                if (element.parentElement.className === 'user-container') menuLeftPos -= 200

                next.style.left = menuLeftPos + 'px';
            }
        });
    }

    var onMobileMenu = function (e) {
        var element = document.getElementsByClassName('content')[0];
        if (element != undefined && element.style.display === 'none') {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    }

    var menuDisableMouseOver = function (enable) {
        Array.from(document.getElementsByClassName('menu-item')).forEach(function (element) {
            if (enable) {
                removeClassEventListener(element, 'mouseover', showDropdown);
            } else {
                addClassEventListener(element, 'mouseover', showDropdown)
            }
        });
    }

    Array.from(document.getElementsByClassName('menu-item')).forEach(function (element) {
        var eventNames = 'click touchend' + (w < 992 ? '' : ' mouseover');
        addClassEventListener(element, eventNames, showDropdown);
        if ((element.parentElement.className !== 'user-container') && (!element.innerHTML.match(/fa fa-caret-down/)))
            element.innerHTML += '<i style="z-index: 1" class="fa fa-caret-down" aria-hidden="true"></i>';

        var next = element.nextElementSibling;
        if (next) {
            var menuLeftPos = element.getBoundingClientRect().left + 32;
            if (element.parentElement.className === 'user-container') menuLeftPos -= 200

            next.style.left = menuLeftPos + 'px';
        }
    });

    document.body.addEventListener('mouseover', function(e) {
        var classes = ['menu-item', 'dropdown-content', 'dropdown-item', 'menu-content', 'fa fa-caret-down', 'content', 'user-container']
        if((e.target && classes.indexOf(e.target.className) === -1) && 
            (e.relatedTarget && classes.indexOf(e.relatedTarget.className) === -1) && 
            (e.fromElement && classes.indexOf(e.fromElement.className) === -1)) {
            destroyAllDropdowns(null);
        }
    });

    if(document.getElementsByClassName('mobile-menu-button')[0]!= null)
        document.getElementsByClassName('mobile-menu-button')[0].addEventListener('click', onMobileMenu);
    if (w < 992) menuDisableMouseOver(true);
    window.addEventListener('resize', onResizeEvent);
    window.addEventListener('click', onClickEvent);
 

});

/* off-canvas sidebar toggle */
$('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
    $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
});

$(document).ready(function () {
    var styleOldDisplay = '';
    var transformOld = '';

    $('#menu-infor-open').click(function( e ){
        var dom = document.getElementsByClassName("infoControle");
        var style = ( styleOldDisplay === '') ? 'block' : '';
        var styleTransForm = ( transformOld === '') ? 'rotate(-90deg)' : '';
        let element = e.target;
        for(var i=0;i<dom.length;i++){
            dom[i].style.display=style;
        }
        if(styleOldDisplay !== style){
            styleOldDisplay = style;
        }
        if(transformOld !== styleTransForm){
            transformOld = styleTransForm;
            element.style.transform = styleTransForm;
        }
        e.stopPropagation();
    });
   
});

$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    $("#next-step").click(function (e) {
        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);
    });

    $("#prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);
    });
});

var nextclick = function () {

    var $active = $('.wizard .nav-tabs li.active');
    $active.next().removeClass('disabled');
    nextTab($active);
}

var prevclick = function () {

    var $active = $('.wizard .nav-tabs li.active');
    prevTab($active);
}

function startTabsValidation() {
    $('a[data-toggle="tab"]').on('show.bs.tab', e => !$(e.target).parent().hasClass('disabled'));
}

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}