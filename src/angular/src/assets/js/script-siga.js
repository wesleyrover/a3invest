"use strict";
!function() {
   var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
       t = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0), function(e, t, n) {
           var a = t.split(" ");
           Array.from(a).forEach(function(t) {
               Array.from(document.getElementsByClassName("menu-item")).forEach(function(a) {
                   a.addEventListener ? a.addEventListener(t, n) : e.attachEvent && a.attachEvent("on" + t, n)
               })
           })
       }),
       n = function(e, t, n) {
           var a = t.split(" ");
           Array.from(a).forEach(function(t) {
               Array.from(document.getElementsByClassName("menu-item")).forEach(function(a) {
                   a.removeEventListener ? a.removeEventListener(t, n) : e.detachEvent && a.detachEvent("on" + t, n)
               })
           })
       },
       a = function(e) {
           Array.from(document.getElementsByClassName("dropdown-content")).forEach(function(t) {
               e != t && (t.style.display = "none", t.parentElement.style.marginBottom = 0)
           })
       },
       i = function(e) {
           var t;
           e.preventDefault(), a(e.target.parentElement.children[1]), t = "i" === e.target.localName ? e.target.parentElement.nextElementSibling : e.target.nextElementSibling, "none" === t.style.display ? t.style.display = "flex" : t.style.display = "none", e.target.parentElement.style.marginBottom = t.clientHeight + "px"
       },
       o = function(e) {
           m();
           var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
           Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
           t < 992 ? (document.getElementsByClassName("content")[0].style.display = "none", c(!0)) : (document.getElementsByClassName("content")[0].style.display = "flex", c(!1))
       },
       l = function(e) {
           "menu-item" !== e.target.className && "i" !== e.target.localName && a(null)
       },
       m = function() {
           Array.from(document.getElementsByClassName("menu-item")).forEach(function(e) {
               var t = e.nextElementSibling;
               t && (t.style.left = e.getBoundingClientRect().left + 32 + "px")
           })
       },
       r = function(e) {
           var t = document.getElementsByClassName("content")[0];
           "none" === t.style.display ? t.style.display = "flex" : t.style.display = "none"
       },
       c = function(e) {
           Array.from(document.getElementsByClassName("menu-item")).forEach(function(a) {
               e ? n(a, "mouseover", i) : t(a, "mouseover", i)
           })
       };
   Array.from(document.getElementsByClassName("menu-item")).forEach(function(n) {
       t(n, "click touchend" + (e < 992 ? "" : " mouseover"), i), n.innerHTML += '<i class="fa fa-caret-down" aria-hidden="true"></i>';
       var a = n.nextElementSibling;
       a && (a.style.left = n.getBoundingClientRect().left + 32 + "px")
   }), document.getElementsByClassName("mobile-menu-button")[0].addEventListener("click", r), e < 992 && c(!0), window.addEventListener("resize", o), window.addEventListener("click", l)
}();