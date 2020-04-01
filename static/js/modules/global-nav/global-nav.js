var canonicalGlobalNav = (function (a) {
  'use strict';
  !(function (a) {
    if (a && 'undefined' != typeof window) {
      var n = document.createElement('style');
      n.setAttribute('type', 'text/css'), (n.innerHTML = a), document.head.appendChild(n);
    }
  })(
    '.global-nav{color:#f7f7f7;display:-webkit-box;display:flex;flex-shrink:0;font-family:Ubuntu,-apple-system,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:.875rem;font-weight:300;line-height:1.5rem;z-index:100}.global-nav h1{max-width:40em;font-style:normal;font-weight:100;margin-top:0}@media (max-width:772px){.global-nav h1{font-size:2.2281872349rem;line-height:3rem;margin-bottom:.835rem;padding-top:.166rem}}@media (min-width:772px){.global-nav h1{font-size:2.910285368rem;line-height:3.5rem;margin-bottom:.8rem;padding-top:.201rem}}@media (min-width:1681px){.global-nav h1{margin-bottom:.85rem;padding-top:.151rem}}.global-nav h2{max-width:40em;font-style:normal;font-weight:100;margin-top:0}@media (max-width:772px){.global-nav h2{font-size:1.83274rem;line-height:2.5rem;margin-bottom:.9rem;padding-top:.101rem}}@media (min-width:772px){.global-nav h2{font-size:2.2281872349rem;line-height:3rem;margin-bottom:.8rem;padding-top:.201rem}}.global-nav h3{max-width:40em;font-style:normal;font-weight:300;margin-top:0}@media (max-width:772px){.global-nav h3{font-size:1.4927113703rem;line-height:2rem;margin-bottom:.5rem;padding-top:.5rem}}@media (min-width:772px){.global-nav h3{font-size:1.7059558517rem;line-height:2.5rem;margin-bottom:.9rem;padding-top:.101rem}}.global-nav .global-nav__matrix-title,.global-nav h4{max-width:40em;font-style:normal;font-weight:300;margin-top:0}@media (max-width:772px){.global-nav .global-nav__matrix-title,.global-nav h4{font-size:1.22176rem;line-height:1.5rem;margin-bottom:.7rem;padding-top:.301rem}}@media (min-width:772px){.global-nav .global-nav__matrix-title,.global-nav h4{font-size:1.306122449rem;line-height:2rem;margin-bottom:.95rem;padding-top:.051rem}}@media (min-width:1681px){.global-nav .global-nav__matrix-title,.global-nav h4{margin-bottom:1rem;padding-top:.001rem}}.global-nav .global-nav__flex-container .global-nav__matrix-title,.global-nav h5{max-width:40em;font-size:1rem;font-style:normal;font-weight:500;line-height:1.5rem;margin-bottom:1.1rem;margin-top:0;padding-top:.401rem}.global-nav h6{max-width:40em;font-size:1rem;font-style:italic;font-weight:300;line-height:1.5rem;margin-bottom:1.1rem;margin-top:0;padding-top:.338rem}@media (min-width:1681px){.global-nav h6{padding-top:.345rem}}.global-nav .p-text--default,.global-nav cite,.global-nav p{line-height:1.5rem;margin-top:0;padding-top:.4005rem}.global-nav .p-text--default,.global-nav cite{margin-bottom:.1rem}.global-nav p{margin-bottom:1.1rem}p:not([class*=p-heading--]):not([class*=p-muted-heading])+.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.global-nav p{margin-top:-.5rem}.global-nav .global-nav__muted-heading,.global-nav .p-text--small,.global-nav small{font-size:.875rem;line-height:1rem;margin-bottom:.8rem;padding-top:.2005rem}@media (min-width:1681px){.global-nav .global-nav__muted-heading,.global-nav .p-text--small,.global-nav small{padding-top:.2006rem}}.global-nav .p-text--x-small{font-size:.765625rem;line-height:1rem;margin-bottom:.8rem;padding-top:.2505rem}@media (min-width:1681px){.global-nav .p-text--x-small{padding-top:.2006rem}}.global-nav .global-nav__muted-heading{color:#666;margin-bottom:.8rem;margin-top:0;padding-top:.2rem;text-transform:uppercase}.global-nav strong{font-weight:400}.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--1,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--one,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h1{padding-top:1.7rem}@media (max-width:772px){.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--1,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--one,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h1{padding-top:1.665rem}}.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--2,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--two,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h2{padding-top:1.7rem}@media (max-width:772px){.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--2,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--two,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h2{padding-top:1.6rem}}@media (max-width:772px){.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--3,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--three,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h3{padding-top:2rem}}@media (min-width:772px){.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--3,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--three,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h3{padding-top:1.6rem}}@media (max-width:772px){.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--4,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--four,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h4{padding-top:1.8rem}}@media (min-width:772px){.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--4,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--four,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h4{padding-top:1.55rem}}.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--5,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--6,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--five,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-heading--six,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h5,.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+h6{padding-top:1.9rem}.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading])+.p-muted-heading{padding-top:1.7rem}.global-nav .u-hide-text{overflow:hidden;text-indent:calc(100% + 10rem);white-space:nowrap}.global-nav .u-no-margin--bottom:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(p):not(small):not([class*=p-heading]){margin-bottom:0!important}@media (max-width:772px){.global-nav h1.u-no-margin--bottom{margin-bottom:-.165rem!important}}@media (min-width:772px){.global-nav h1.u-no-margin--bottom{margin-bottom:-.2rem!important}}@media (min-width:1681px){.global-nav h1.u-no-margin--bottom{margin-bottom:-.15rem!important}}@media (max-width:772px){.global-nav h2.u-no-margin--bottom{margin-bottom:-.1rem!important}}@media (min-width:772px){.global-nav h2.u-no-margin--bottom{margin-bottom:-.2rem!important}}@media (max-width:772px){.global-nav h3.u-no-margin--bottom{margin-bottom:0!important}}@media (min-width:772px){.global-nav h3.u-no-margin--bottom{margin-bottom:-.1rem!important}}@media (max-width:772px){.global-nav .u-no-margin--bottom.global-nav__matrix-title,.global-nav h4.u-no-margin--bottom{margin-bottom:.2rem!important}}@media (min-width:772px){.global-nav .u-no-margin--bottom.global-nav__matrix-title,.global-nav h4.u-no-margin--bottom{margin-bottom:-.05rem!important}}@media (min-width:1681px){.global-nav .u-no-margin--bottom.global-nav__matrix-title,.global-nav h4.u-no-margin--bottom{margin-bottom:0!important}}.global-nav .global-nav__flex-container .u-no-margin--bottom.global-nav__matrix-title,.global-nav h5.u-no-margin--bottom,.global-nav h6.u-no-margin--bottom,.global-nav p.u-no-margin--bottom{margin-bottom:.1rem!important}.global-nav .u-no-margin--bottom.global-nav__muted-heading,.global-nav .u-no-margin--bottom.p-text--small,.global-nav .u-no-margin--bottom.p-text--x-small,.global-nav small.u-no-margin--bottom{margin-bottom:-.2rem!important}@font-face{.global-nav{font-display:auto;font-family:Ubuntu;font-style:normal;font-weight:300;src:url(https://assets.ubuntu.com/v1/e8c07df6-Ubuntu-L_W.woff2) format("woff2"),url(https://assets.ubuntu.com/v1/8619add2-Ubuntu-L_W.woff) format("woff");font-weight:400;src:url(https://assets.ubuntu.com/v1/fff37993-Ubuntu-R_W.woff2) format("woff2"),url(https://assets.ubuntu.com/v1/7af50859-Ubuntu-R_W.woff) format("woff");font-style:italic;src:url(https://assets.ubuntu.com/v1/f8097dea-Ubuntu-LI_W.woff2) format("woff2"),url(https://assets.ubuntu.com/v1/8be89d02-Ubuntu-LI_W.woff) format("woff");src:url(https://assets.ubuntu.com/v1/fca66073-ubuntu-ri-webfont.woff2) format("woff2"),url(https://assets.ubuntu.com/v1/f0898c72-ubuntu-ri-webfont.woff) format("woff");font-weight:100;src:url(https://assets.ubuntu.com/v1/7f100985-Ubuntu-Th_W.woff2) format("woff2"),url(https://assets.ubuntu.com/v1/502cc3a1-Ubuntu-Th_W.woff) format("woff");font-family:Ubuntu Mono;src:url(https://assets.ubuntu.com/v1/fdd692b9-UbuntuMono-R_W.woff2) format("woff2"),url(https://assets.ubuntu.com/v1/85edb898-UbuntuMono-R_W.woff) format("woff")}}.global-nav .measure--p{max-width:40em}.global-nav html{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:#111;font-family:Ubuntu,-apple-system,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-smoothing:subpixel-antialiased;font-weight:300;line-height:1.5rem}@media screen and (max-width:1681px){.global-nav html{font-size:1rem}}@media screen and (min-width:1681px){.global-nav html{font-size:1.125rem;line-height:1.6875rem}}.global-nav p{max-width:40em}.global-nav .p-text--small.dense,.global-nav small.dense{margin-bottom:1.3rem}.global-nav p:not([class*=p-heading--]):not([class*=p-muted-heading]):empty{line-height:0;margin:0;padding:0}.global-nav sub,.global-nav sup{line-height:0;position:relative;vertical-align:baseline}.global-nav abbr[title]{border-bottom:.1em dotted;cursor:help;text-decoration:none}.global-nav .u-hide{display:none!important}@media screen and (max-width:772px){.global-nav .u-hide--small{display:none!important}}@media (min-width:772px) and (max-width:1036px){.global-nav .u-hide--medium{display:none!important}}@media screen and (min-width:1036px){.global-nav .u-hide--large{display:none!important}}.global-nav .u-no-margin{margin:0!important}.global-nav .u-no-margin--top{margin-top:0!important}.global-nav .u-no-margin--right{margin-right:0!important}.global-nav .u-no-margin--left{margin-left:0!important}.global-nav .u-table-cell-padding-overlap{margin-bottom:-.5rem!important;margin-top:calc(-.5rem - 1px)!important}.global-nav .u-no-padding{padding:0!important}.global-nav .u-no-padding--top{padding-top:0!important}.global-nav .u-no-padding--right{padding-right:0!important}.global-nav .u-no-padding--bottom{padding-bottom:0!important}.global-nav .u-no-padding--left{padding-left:0!important}.global-nav *{box-sizing:border-box}.global-nav .global-nav__header{background-color:#262626;width:100%;z-index:99}.global-nav .global-nav__header-row{display:-webkit-box;display:flex;width:100%}.global-nav .global-nav__header-logo{margin:0}.global-nav .global-nav__header-logo-anchor{display:inline-block;line-height:0;padding:.6875rem 1rem .6875rem 0}@media (max-width:875px){.global-nav .global-nav__header-logo-anchor{display:block;padding-left:0;padding-right:1.5rem}}.global-nav .global-nav__header-list{list-style:none;margin:0 0 0 auto;padding:0}.global-nav .global-nav__header-link{display:inline-block;margin:0;padding:0;position:relative}.global-nav .global-nav__header-link.is-selected>.global-nav__header-link-anchor:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.global-nav .global-nav__header-link-anchor{color:#f7f7f7;display:inline-block;line-height:1.25rem;margin-bottom:0;padding:.375rem .5rem;text-decoration:none}@media (max-width:875px){.global-nav .global-nav__header-link-anchor{padding-left:0}}.global-nav .has-dropdown .global-nav__header-link-anchor{padding:.375rem 1.625rem .375rem .5rem}.global-nav .has-dropdown .global-nav__header-link-anchor:after{-webkit-transition-duration:.1s;transition-duration:.1s;-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width=\'16\' height=\'16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'%23f7f7f7\' d=\'M1.86 5l6.157 3.84L14.139 5 15 6.357l-6.983 5.03L1 6.358z\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");background-size:100%;content:"";height:.5rem;right:.5rem;top:.75rem;width:.625rem}.global-nav .global-nav__dropdown,.global-nav .has-dropdown .global-nav__header-link-anchor:after{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;position:absolute}.global-nav .global-nav__dropdown{-webkit-transition-duration:.333s;transition-duration:.333s;-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);background-color:#262626;margin:0;overflow:hidden;top:2rem;-webkit-transform:translateY(-100%);transform:translateY(-100%);width:100%;z-index:98}.global-nav .global-nav__dropdown.show-content{height:auto;-webkit-transform:translateY(0);transform:translateY(0)}.global-nav .global-nav__dropdown-content{margin:0 auto;padding-top:0}@media (max-width:875px){.global-nav .global-nav__dropdown-content{padding:.5rem 0}}.global-nav .global-nav__row{margin:0 auto;padding:0 1.5rem}@media (max-width:875px){.global-nav .global-nav__row{padding:0 1rem}}.global-nav .global-nav__row.is-bordered:after{background-color:#666;content:"";display:block;height:1px;margin-top:2rem;width:100%}.global-nav .global-nav__strip{margin:0;padding:2rem 0 0}@media (max-width:875px){.global-nav .global-nav__strip{padding-top:1rem}}.global-nav .global-nav__mobile-strip{display:none}@media (max-width:875px){.global-nav .global-nav__mobile-strip{display:inherit}}.global-nav .global-nav__mobile-strip .global-nav__split-list{display:none}.global-nav .global-nav__flex-container{display:-webkit-box;display:flex}.global-nav .global-nav__flex-container .global-nav__matrix-item{border:0;padding:0 0 2rem}.global-nav .global-nav__flex-container .global-nav__matrix-title{font-weight:400}.global-nav .global-nav__others-col{margin-top:0;width:74.17808%}.global-nav .global-nav__resources-col{margin-left:3.2877%;margin-top:0;width:22.53423%}.global-nav .global-nav__expanding-row{border-top:1px solid #666;cursor:pointer;font-size:.8175rem;line-height:1.5;margin:0;max-width:inherit;padding:1rem 0;position:relative}.global-nav .global-nav__expanding-row:after{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width=\'16\' height=\'16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'%23f7f7f7\' d=\'M1.86 5l6.157 3.84L14.139 5 15 6.357l-6.983 5.03L1 6.358z\' fill-rule=\'evenodd\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-size:.8175rem;content:"";height:.8rem;position:absolute;right:.5rem;top:1.2rem;width:.8175rem}.global-nav .global-nav__expanding-row.is-active:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.global-nav .global-nav__expanding-row.is-active+.global-nav__split-list{display:block}.global-nav .global-nav__matrix{display:-webkit-box;display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0}@media (max-width:875px){.global-nav .global-nav__matrix{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}}.global-nav .global-nav__matrix-item{border-top:1px solid #666;-webkit-box-flex:1;flex:1 1 auto;flex-wrap:wrap;margin:0;padding:1rem;width:33.33%}.global-nav .global-nav__matrix-item:nth-child(3n+1){padding-left:0}.global-nav .global-nav__matrix-item:nth-child(3n+3){border-right:0;padding-right:0}@media (min-width:875px){.global-nav .global-nav__matrix-item:first-child,.global-nav .global-nav__matrix-item:nth-child(2),.global-nav .global-nav__matrix-item:nth-child(3){border-top:0}}@media (max-width:875px){.global-nav .global-nav__matrix-item{padding:1rem 0;width:100%}}.global-nav .global-nav__matrix-image{display:inline-block;height:auto;margin-bottom:1rem;margin-right:.75rem;max-height:2rem;max-width:2rem;position:relative;top:.1rem}@media (max-width:875px){.global-nav .global-nav__matrix-image{display:none}}.global-nav .global-nav__matrix-content{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1 1 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin:0;padding-right:1rem;width:100%}.global-nav .global-nav__matrix-title{line-height:2rem}@media (max-width:875px){.global-nav .global-nav__matrix-title{margin-bottom:0}}.global-nav .global-nav__matrix-desc{margin:-1rem 0 .1rem 2.75rem}@media (max-width:875px){.global-nav .global-nav__matrix-desc{display:none}}.global-nav .global-nav__link{color:#f7f7f7;display:-webkit-inline-box;display:inline-flex;text-decoration:none}.global-nav .global-nav__link:hover{text-decoration:underline}.global-nav .global-nav__split-list{-webkit-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;-webkit-columns:2;-moz-columns:2;column-count:2;list-style:none;margin:0 0 1.5rem;padding:0}.global-nav .global-nav__split-list .global-nav__list-item{display:inline-block;margin:0;padding:.25rem 0;width:100%}.global-nav .global-nav__inline-list{margin:.5rem 0 0;padding:0 0 1rem 2.75rem}@media (max-width:875px){.global-nav .global-nav__inline-list{margin-top:0;padding:0}}.global-nav .global-nav__inline-list .global-nav__list-item{display:inline;font-weight:400;list-style:none;margin-right:1.25rem}.global-nav .global-nav__muted-heading{color:#f7f7f7;font-weight:400}@media (max-width:875px){.global-nav .global-nav__muted-heading{font-size:.8175rem}}.global-nav .global-nav__overlay{-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);background-color:rgba(17,17,17,.4);height:100%;left:0;margin:0;opacity:0;pointer-events:none;position:fixed;width:100%;z-index:97}@media (max-width:875px){.global-nav .global-nav__overlay{display:none}}.global-nav .global-nav__overlay.show-overlay{opacity:1;pointer-events:all}@media (max-width:875px){body{padding-bottom:3rem;position:relative}.u-hide--mobile{display:none}}.skip-content a{color:#007aa6;display:block;left:-999px;position:absolute;top:-999px}.skip-content a:focus{background:#fff;border:1px solid #007aa6;left:0;padding:3px;position:relative;top:0;z-index:999999}'
  );
  var m = {
    flagships: [
      {
        title: 'Ubuntu',
        url: 'https://ubuntu.com/',
        logoUrl:
          'data:image/svg+xml,%3C%3Fxml%20version%3D%271.0%27%20encoding%3D%27UTF-8%27%20standalone%3D%27no%27%3F%3E%0A%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xml%3Aspace%3D%27preserve%27%20height%3D%27400px%27%20width%3D%27400px%27%20version%3D%271.1%27%20enable-background%3D%27new%20-97%20220.9%20400%20400%27%20viewBox%3D%27-97%20220.9%20400%20400%27%3E%0A%3Cstyle%20type%3D%27text%2Fcss%27%3E%0A%09.st0%7Bfill%3A%23E95420%3B%7D%0A%09.st1%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%09%3Cpath%20class%3D%27st0%27%20d%3D%27m303%20420.9c0%20110.4-89.5%20200-200%20200s-200-89.6-200-200c0-110.5%2089.5-200%20200-200s200%2089.5%20200%20200z%27%2F%3E%0A%09%09%3Cpath%20class%3D%27st1%27%20d%3D%27m-33%20394.2c-14.8%200-26.7%2012-26.7%2026.7s12%2026.7%2026.7%2026.7%2026.7-12%2026.7-26.7c0-14.8-12-26.7-26.7-26.7zm190.7%20121.3c-12.8%207.4-17.1%2023.7-9.8%2036.5%207.4%2012.8%2023.7%2017.2%2036.5%209.8s17.1-23.7%209.8-36.5c-7.5-12.7-23.8-17.1-36.5-9.8zm-132.7-94.6c0-26.4%2013.1-49.7%2033.2-63.8l-19.5-32.7c-23.4%2015.6-40.7%2039.5-48%2067.4%208.4%206.9%2013.8%2017.4%2013.8%2029.1s-5.4%2022.2-13.8%2029.1c7.2%2027.9%2024.6%2051.8%2048%2067.4l19.5-32.7c-20.1-14.1-33.2-37.4-33.2-63.8zm78-78c40.8%200%2074.2%2031.2%2077.7%2071.1l38.1-0.6c-1.9-29.4-14.7-55.8-34.5-75.2-10.2%203.8-21.9%203.2-32-2.6-10.2-5.9-16.5-15.7-18.3-26.5-9.9-2.7-20.3-4.2-31-4.2-18.5%200-35.9%204.3-51.4%2012l18.6%2033.2c9.9-4.6%2021.1-7.2%2032.8-7.2zm0%20156c-11.7%200-22.9-2.6-32.9-7.2l-18.6%2033.2c15.5%207.7%2033%2012%2051.4%2012%2010.7%200%2021.1-1.5%2031-4.2%201.7-10.7%208.1-20.6%2018.3-26.5%2010.1-5.9%2021.9-6.4%2032-2.6%2019.7-19.4%2032.6-45.8%2034.5-75.2l-38.1-0.6c-3.4%2039.8-36.8%2071.1-77.6%2071.1zm54.6-172.7c12.8%207.4%2029.1%203%2036.5-9.8s3-29.1-9.8-36.5-29.1-3-36.5%209.8c-7.3%2012.8-2.9%2029.1%209.8%2036.5z%27%2F%3E%0A%3C%2Fsvg%3E',
        description:
          'The new standard secure enterprise Linux for servers, desktops, clouds, developers and things.',
      },
      {
        title: 'Snapcraft',
        url: 'https://snapcraft.io/',
        logoUrl:
          'data:image/svg+xml,%3C%3Fxml%20version%3D%271.0%27%20encoding%3D%27UTF-8%27%20standalone%3D%27no%27%3F%3E%0A%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20version%3D%271.1%27%20viewBox%3D%270%200%2044%2044%27%3E%0A%20%3Ctitle%3Esnapcraft%3Dprimary-icon%3C%2Ftitle%3E%0A%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%3Cg%20fill-rule%3D%27evenodd%27%20fill%3D%27none%27%3E%0A%20%20%3Ccircle%20cy%3D%2722%27%20cx%3D%2722%27%20r%3D%2722%27%20fill%3D%27%23fff%27%2F%3E%0A%20%20%3Cg%20transform%3D%27translate(7%208)%27%20fill-rule%3D%27nonzero%27%3E%0A%20%20%20%3Cpath%20d%3D%27m18.06%207.28l6.92%203.08-6.92%206.92v-10zm-13.22%2023.22l8.49-15.92%203.73%203.7-12.22%2012.22zm-4.84-30l17.47%206.32v11.05l-17.47-17.37z%27%20fill%3D%27%2382BFA1%27%2F%3E%0A%20%20%20%3Cpolygon%20points%3D%2728.53%206.82%2018.46%206.82%2031.4%2012.57%27%20fill%3D%27%23FA6340%27%2F%3E%0A%20%20%3C%2Fg%3E%0A%20%3C%2Fg%3E%0A%3C%2Fsvg%3E',
        description:
          'The app store with secure packages and ultra-reliable updates for multiple Linux distros.',
        links: [{url: 'https://snapcraft.io/account', text: 'Login'}],
      },
      {
        title: 'LXD',
        url: 'https://linuxcontainers.org/',
        logoUrl:
          'data:image/svg+xml,%3C%3Fxml%20version%3D%271.0%27%20encoding%3D%27UTF-8%27%20standalone%3D%27no%27%3F%3E%0A%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20version%3D%271.1%27%20viewBox%3D%270%200%20100%20100%27%3E%0A%20%3Ctitle%3Elxd%3C%2Ftitle%3E%0A%20%3Cg%20fill-rule%3D%27evenodd%27%20fill%3D%27none%27%3E%0A%20%20%3Cg%20fill-rule%3D%27nonzero%27%3E%0A%20%20%20%3Cpath%20d%3D%27m50%201.1842e-13c-27.614-1.1842e-13%20-50%2022.386-50%2050s22.386%2050%2050%2050%2050-22.386%2050-50-22.386-50-50-50v1.1842e-13z%27%20fill%3D%27%23E95420%27%2F%3E%0A%20%20%20%3Cg%20transform%3D%27translate(22%2018)%27%20fill%3D%27%23fff%27%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2728.675%2049.117%2042.047%2041.398%2042.047%2025.962%2028.675%2033.683%27%2F%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2750.882%2020.86%2050.882%2046.508%2028.675%2059.325%2028.675%2064.127%2055.037%2048.905%2055.037%2018.462%27%2F%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2727.683%2016.525%2014.313%2024.243%2027.683%2031.965%2041.053%2024.247%27%2F%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2727.683%206.3217%2049.89%2019.14%2054.045%2016.743%2027.683%201.5217%201.3217%2016.743%205.4767%2019.14%27%2F%3E%0A%20%20%20%20%3Cpolygon%20points%3D%274.4833%2020.872%200.33%2018.465%200.33%2048.905%2026.692%2064.127%2026.692%2059.325%204.4833%2046.508%27%2F%3E%0A%20%20%20%20%3Cpolygon%20points%3D%2713.322%2041.398%2026.692%2049.117%2026.692%2033.728%2013.322%2025.983%27%2F%3E%0A%20%20%20%3C%2Fg%3E%0A%20%20%3C%2Fg%3E%0A%20%3C%2Fg%3E%0A%3C%2Fsvg%3E',
        description:
          'A pure-container hypervisor. Replace legacy app VMs with containers for speed and density',
      },
      {
        title: 'MAAS',
        url: 'https://maas.io/',
        logoUrl:
          'data:image/svg+xml,%3C%3Fxml%20version%3D%271.0%27%20encoding%3D%27UTF-8%27%20standalone%3D%27no%27%3F%3E%0A%3Csvg%20id%3D%27Layer_1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xml%3Aspace%3D%27preserve%27%20height%3D%27288.66px%27%20viewBox%3D%2733.154%2031.9%20288.656%20288.656%27%20width%3D%27288.66px%27%20version%3D%271.1%27%20y%3D%270px%27%20x%3D%270px%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20enable-background%3D%27new%2033.154%2031.9%20288.656%20288.656%27%3E%0A%09%3Cpath%20opacity%3D%27.597%27%20d%3D%27m326.63%20176.78c0%2082.76-67.09%20149.85-149.85%20149.85s-149.85-67.09-149.85-149.85%2067.09-149.85%20149.85-149.85%20149.85%2067.087%20149.85%20149.85z%27%20fill-opacity%3D%270%27%20enable-background%3D%27new%20%20%20%20%27%20fill%3D%27%23333%27%2F%3E%0A%09%3Cpath%20opacity%3D%27.597%27%20d%3D%27m237.06%20181.24c0%2046.758-26.955%2084.663-60.205%2084.663s-60.21-37.9-60.21-84.66%2026.955-84.663%2060.205-84.663%2060.2%2037.903%2060.2%2084.663z%27%20fill-opacity%3D%270%27%20enable-background%3D%27new%20%20%20%20%27%20fill%3D%27%23DD4814%27%2F%3E%0A%09%3Cpath%20opacity%3D%27.597%27%20d%3D%27m267.79%20221.69c0%2015.413-25.131%2027.907-56.129%2027.907-31%200-56.13-12.495-56.13-27.908s25.13-27.908%2056.13-27.908%2056.13%2012.5%2056.13%2027.91z%27%20fill-opacity%3D%270%27%20enable-background%3D%27new%20%20%20%20%27%20fill%3D%27%23DD4814%27%2F%3E%0A%09%3Cpath%20d%3D%27m321.81%20176.23c0%2079.71-64.618%20144.33-144.33%20144.33s-144.33-64.62-144.33-144.33%2064.622-144.33%20144.33-144.33%20144.33%2064.618%20144.33%20144.33z%27%20fill%3D%27%23DD4814%27%2F%3E%0A%09%3Cg%20stroke%3D%27%23fff%27%20stroke-width%3D%27.798%27%20fill%3D%27%23fff%27%3E%0A%09%09%3Cpath%20d%3D%27m164.92%20229.48c-18.342%200.033-50.34%200.347-63.057%202.306-6.876%201.09-6.34%205.642-6.54%209.396v0.066c0.2%203.756-0.336%208.311%206.54%209.398%2016.935%202.61%2068.054%202.305%2075.58%202.305h0.055c7.525%200%2058.644%200.305%2075.58-2.305%206.876-1.09%206.368-5.643%206.567-9.398-0.21-3.767%200.348-8.369-6.568-9.463-16.935-2.61-68.054-2.306-75.58-2.306-1.87-0.01-6.47-0.01-12.58-0.01z%27%2F%3E%0A%09%09%3Cpath%20d%3D%27m164.92%2099.493c-18.342%200.033-50.34%200.346-63.057%202.305-6.876%201.09-6.34%205.642-6.54%209.397v0.067c0.2%203.755-0.336%208.308%206.54%209.397%2016.935%202.608%2068.054%202.305%2075.58%202.304h0.055c7.525%200%2058.644%200.304%2075.58-2.305%206.876-1.09%206.368-5.643%206.567-9.398-0.21-3.767%200.348-8.37-6.568-9.464-16.935-2.61-68.054-2.306-75.58-2.305-1.858%200-6.463-0.01-12.577%200v-0.002z%27%2F%3E%0A%09%09%3Cpath%20d%3D%27m164.92%20186.16c-18.342%200.032-50.34%200.345-63.057%202.304-6.876%201.088-6.34%205.641-6.54%209.396v0.068c0.2%203.756-0.336%208.309%206.54%209.397%2016.935%202.61%2068.054%202.306%2075.58%202.306h0.055c7.525%200%2058.644%200.305%2075.58-2.305%206.876-1.088%206.368-5.64%206.567-9.396-0.21-3.768%200.348-8.369-6.568-9.465-16.935-2.609-68.054-2.306-75.58-2.305-1.87-0.02-6.47-0.03-12.58-0.02z%27%2F%3E%0A%09%09%3Cpath%20d%3D%27m164.92%20142.82c-18.342%200.032-50.34%200.346-63.057%202.304-6.876%201.09-6.34%205.642-6.54%209.398v0.068c0.2%203.755-0.336%208.308%206.54%209.397%2016.935%202.61%2068.054%202.305%2075.58%202.305h0.055c7.525%200%2058.644%200.304%2075.58-2.305%206.876-1.09%206.368-5.642%206.567-9.397-0.21-3.768%200.348-8.37-6.568-9.465-16.935-2.608-68.054-2.305-75.58-2.304-1.87-0.02-6.47-0.02-12.58-0.02z%27%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fsvg%3E',
        description:
          'Create a bare-metal cloud with Metal as a Service for IPAM and provisioning',
      },
      {
        title: 'Charmed OpenStack',
        url: 'https://ubuntu.com/openstack',
        logoUrl:
          'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27400%27%20height%3D%27400%27%20viewBox%3D%270%200%20400%20400%27%3E%3Cg%3E%3Cpath%20fill%3D%27%23D63023%27%20d%3D%27M400%20200c0%20110.447-89.542%20200-200%20200C89.54%20400%200%20310.447%200%20200%200%2089.54%2089.546%200%20200%200c110.458%200%20200%2089.54%20200%20200z%27%2F%3E%3Cpath%20fill%3D%27%23fff%27%20d%3D%27M109.956%2096.104c-7.673%200-13.853%206.178-13.853%2013.85v48.486h41.56v-13.85c0-3.835%203.084-6.926%206.926-6.926h110.82c3.833%200%206.927%203.09%206.927%206.926v13.85h41.558v-48.485c0-7.673-6.18-13.85-13.85-13.85h-180.09zm-13.852%2076.188v55.415h41.56v-55.415h-41.56zm166.234%200v55.415h41.558v-55.415h-41.558zM96.104%20241.56v48.487c0%207.668%206.18%2013.85%2013.853%2013.85h180.088c7.67%200%2013.85-6.182%2013.85-13.85V241.56H262.34v13.848c0%203.838-3.094%206.93-6.926%206.93H144.59c-3.843%200-6.928-3.092-6.928-6.93V241.56H96.104z%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        description:
          'Upgrades, maintenance, support, and fully managed options for long-term low-cost infra.',
      },
      {
        title: 'Charmed Kubernetes',
        url: 'https://ubuntu.com/kubernetes',
        logoUrl:
          'data:image/svg+xml,%3C%3Fxml%20version%3D%271.0%27%20encoding%3D%27UTF-8%27%3F%3E%0A%3Csvg%20version%3D%271.1%27%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%0A%3Ctitle%3Ekubernetes%3C%2Ftitle%3E%0A%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%0A%3Cg%20fill-rule%3D%27nonzero%27%3E%0A%3Cpath%20d%3D%27m50%200c-27.614-1.6909e-15%20-50%2022.386-50%2050-3.3818e-15%2027.614%2022.386%2050%2050%2050%2013.261%200%2025.979-5.268%2035.355-14.645%209.377-9.376%2014.645-22.094%2014.645-35.355%200-27.614-22.386-50-50-50z%27%20fill%3D%27%23fff%27%2F%3E%0A%3Cpath%20d%3D%27m50%204.737e-15c-27.614-1.1843e-13%20-50%2022.386-50%2050s22.386%2050%2050%2050%2050-22.386%2050-50-22.386-50-50-50v4.737e-15z%27%20fill%3D%27%23326DE6%27%2F%3E%0A%3Cpath%20d%3D%27m11.265%2060.676c0.093%200.143%200.193%200.281%200.3%200.413l19.049%2023.686c0.999%201.242%202.513%201.965%204.115%201.965l30.548-3e-3c1.602%200%203.116-0.724%204.114-1.965l19.045-23.691c0.998-1.242%201.372-2.867%201.015-4.416l-6.8-29.538c-0.357-1.548-1.405-2.851-2.848-3.54l-27.525-13.144c-1.443-0.6886-3.123-0.6884-4.566%201e-3l-27.522%2013.149c-1.443%200.689-2.491%201.993-2.847%203.541l-6.795%2029.54c-0.316%201.375-0.057%202.819%200.717%204.003v-1e-3z%27%20fill%3D%27%23326DE6%27%20stroke%3D%27%23fff%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%272%27%2F%3E%0A%3Cpath%20d%3D%27m49.999%2019.985c-0.901%200-1.634%200.805-1.646%201.806v6e-3c0%206e-3%20-1e-3%200.012-1e-3%200.018v0.014c-1e-3%200.142-6e-3%200.325-1e-3%200.454%200.022%200.583%200.149%201.03%200.226%201.567%200.138%201.15%200.255%202.103%200.183%202.989-0.065%200.443-0.322%200.617-0.536%200.822l0.041%200.028h-0.043l-0.039%200.7c-0.996%200.082-1.99%200.233-2.975%200.457-4.152%200.942-7.892%203.096-10.773%206.142l-0.564-0.4-0.027%200.033%204e-3%20-0.049c-0.294%200.04-0.59%200.132-0.977-0.094-0.738-0.496-1.41-1.181-2.222-2.006-0.373-0.395-0.642-0.774-1.085-1.154-0.106-0.091-0.273-0.215-0.386-0.306v1e-3c-0.79-0.615-1.876-0.543-2.438%200.161-0.562%200.705-0.39%201.78%200.385%202.413%200%200%201e-3%201e-3%202e-3%201e-3%206e-3%205e-3%200.012%200.01%200.017%200.015%205e-3%203e-3%209e-3%207e-3%200.014%200.01%200.11%200.089%200.249%200.207%200.352%200.283%200.469%200.346%200.898%200.525%201.366%200.8%200.985%200.608%201.803%201.111%202.451%201.72%200.306%200.327%200.282%200.637%200.309%200.932l0.047-0.015-0.027%200.033%200.518%200.464c-0.104%200.157-0.207%200.315-0.307%200.475-2.696%204.298-3.761%209.403-3.042%2014.396l-0.69%200.199%209e-3%200.041-0.035-0.034c-0.153%200.255-0.266%200.544-0.683%200.706-0.848%200.267-1.803%200.366-2.955%200.486-0.54%200.045-1.004%200.02-1.578%200.129-0.13%200.024-0.315%200.073-0.455%200.105h-1e-3c-1e-3%201e-3%20-1e-3%201e-3%20-2e-3%201e-3%20-6e-3%201e-3%20-0.015%204e-3%20-0.021%205e-3v1e-3c-0.973%200.234-1.594%201.129-1.394%202.007%200.201%200.878%201.148%201.414%202.127%201.203%202e-3%200%205e-3%20-1e-3%207e-3%20-1e-3%206e-3%20-1e-3%200.012-2e-3%200.017-3e-3s0.01-2e-3%200.014-3e-3c0.139-0.031%200.319-0.066%200.443-0.1%200.564-0.151%200.971-0.375%201.477-0.569%201.09-0.391%201.993-0.717%202.873-0.844%200.447-0.035%200.674%200.176%200.922%200.34l0.017-0.046%209e-3%200.041%200.72-0.122c1.543%204.773%204.719%208.88%209%2011.573%200.163%200.102%200.327%200.202%200.492%200.3l-0.292%200.706%200.039%200.018-0.049%206e-3c0.104%200.278%200.26%200.547%200.126%200.975-0.32%200.829-0.838%201.637-1.462%202.612-0.302%200.451-0.611%200.798-0.883%201.314-0.065%200.124-0.149%200.314-0.212%200.445-0.424%200.907-0.112%201.951%200.7%202.342%200.812%200.39%201.821-0.017%202.266-0.913%204e-3%20-7e-3%208e-3%20-0.015%200.012-0.022%202e-3%20-5e-3%204e-3%20-0.01%206e-3%20-0.014%200.062-0.128%200.146-0.29%200.198-0.407%200.233-0.535%200.312-0.993%200.476-1.51%200.374-1.096%200.682-2.005%201.131-2.772%200.251-0.371%200.558-0.417%200.84-0.509l-0.025-0.043%200.038%200.019%200.368-0.665c3.924%201.499%208.231%201.823%2012.379%200.881%200.968-0.22%201.913-0.506%202.83-0.854l0.338%200.612%200.038-0.019-0.025%200.042c0.282%200.092%200.589%200.138%200.84%200.509%200.449%200.767%200.758%201.676%201.132%202.772%200.164%200.517%200.243%200.975%200.476%201.51%200.053%200.121%200.142%200.291%200.204%200.42l1e-3%201e-3c0%201e-3%200%202e-3%201e-3%203e-3%203e-3%206e-3%206e-3%200.013%209e-3%200.019h1e-3c0.445%200.896%201.455%201.303%202.267%200.912%200.811-0.391%201.123-1.434%200.699-2.341%200-1e-3%20-1e-3%20-2e-3%20-1e-3%20-3e-3%20-3e-3%20-7e-3%20-5e-3%20-0.013-8e-3%20-0.02-3e-3%20-5e-3%20-5e-3%20-0.01-7e-3%20-0.015-0.061-0.128-0.135-0.294-0.195-0.407-0.273-0.516-0.582-0.863-0.884-1.314-0.623-0.976-1.142-1.784-1.462-2.613-0.133-0.427%200.022-0.696%200.126-0.974l-0.049-7e-3%200.039-0.018-0.265-0.64c2.915-1.717%205.407-4.118%207.237-7.035%200.97-1.546%201.727-3.196%202.268-4.907l0.672%200.114%209e-3%20-0.041%200.018%200.046c0.247-0.164%200.475-0.376%200.921-0.34%200.88%200.127%201.783%200.452%202.873%200.843%200.507%200.194%200.914%200.419%201.478%200.569%200.128%200.035%200.316%200.072%200.456%200.103h1e-3s1e-3%200%202e-3%201e-3c6e-3%201e-3%200.015%203e-3%200.021%204e-3v-1e-3c0.979%200.211%201.927-0.325%202.128-1.203%200.199-0.879-0.422-1.772-1.395-2.007-1e-3%200-3e-3%20-1e-3%20-5e-3%20-1e-3%20-6e-3%20-2e-3%20-0.013-4e-3%20-0.019-5e-3l-0.015-3e-3c-0.138-0.033-0.315-0.079-0.441-0.102-0.573-0.109-1.037-0.084-1.578-0.129-1.152-0.121-2.107-0.219-2.954-0.486-0.418-0.162-0.531-0.451-0.683-0.706l-0.036%200.034%209e-3%20-0.041-0.666-0.193c0.347-2.539%200.24-5.144-0.345-7.692-0.591-2.571-1.645-4.985-3.087-7.137l0.565-0.506-0.027-0.033%200.047%200.016c0.027-0.296%203e-3%20-0.605%200.309-0.933%200.648-0.608%201.466-1.111%202.451-1.72%200.467-0.275%200.897-0.454%201.366-0.8%200.112-0.083%200.271-0.218%200.384-0.309h-1e-3c0.775-0.634%200.947-1.709%200.386-2.413-0.563-0.704-1.649-0.776-2.439-0.161v-1e-3l-5e-3%205e-3c-5e-3%203e-3%20-9e-3%207e-3%20-0.014%200.01-3e-3%203e-3%20-7e-3%206e-3%20-0.01%209e-3%20-0.112%200.088-0.259%200.198-0.356%200.282-0.443%200.381-0.712%200.76-1.085%201.155-0.812%200.825-1.484%201.51-2.221%202.006-0.388%200.226-0.684%200.134-0.978%200.094l4e-3%200.049-0.027-0.033-0.623%200.442c-1.222-1.287-2.608-2.429-4.136-3.389-2.908-1.83-6.183-2.915-9.54-3.21l-0.041-0.711h-0.042l0.041-0.027c-0.215-0.206-0.472-0.38-0.537-0.823-0.071-0.886%200.045-1.839%200.184-2.989%200.076-0.537%200.204-0.984%200.226-1.567%205e-3%20-0.139-2e-3%20-0.347-2e-3%20-0.492h-1e-3c-0.012-1.001-0.745-1.806-1.646-1.806l-1e-3%201e-3zm-2.063%2012.779l-0.488%208.637-0.037%200.018v1e-3c-0.033%200.772-0.668%201.389-1.448%201.389-0.32%200-0.615-0.103-0.855-0.278l-1e-3%20-1e-3%20-0.017%209e-3%20-7.073-5.013c2.234-2.197%205.052-3.754%208.161-4.46%200.582-0.132%201.169-0.232%201.758-0.302zm4.129%200.011c2.462%200.306%204.852%201.148%206.995%202.496%201.04%200.654%201.998%201.413%202.862%202.259l-7.027%204.983-0.024-0.012%201e-3%20-3e-3%20-5e-3%203e-3c-0.624%200.456-1.502%200.343-1.988-0.267-0.2-0.249-0.303-0.544-0.316-0.841v-1e-3l-9e-3%20-4e-3%20-0.489-8.612v-1e-3zm-16.619%207.982l6.458%205.775-8e-3%200.036%201e-3%201e-3c0.583%200.507%200.669%201.388%200.182%201.998-0.199%200.25-0.463%200.417-0.75%200.495h-1e-3l-7e-3%200.031-8.291%202.393c-0.401-3.731%200.438-7.506%202.416-10.729zm29.06%201e-3c0.98%201.583%201.706%203.329%202.13%205.177%200.42%201.827%200.532%203.691%200.349%205.519l-8.322-2.4-7e-3%20-0.032%203e-3%20-1e-3%20-4e-3%20-1e-3c-0.746-0.204-1.205-0.96-1.032-1.721%200.071-0.312%200.237-0.576%200.461-0.771l1e-3%20-1e-3%20-4e-3%20-0.018%206.426-5.75-1e-3%20-1e-3zm-11.952%200.633l6e-3%203e-3c0.013%200.297%200.117%200.592%200.316%200.842%200.487%200.611%201.367%200.724%201.992%200.268l0.024%200.011-1.073%200.761-0.443-0.553h-0.747l-0.075-1.332zm-5.107%200.015l-0.074%201.316h-0.759l-0.458%200.572-1.063-0.753%200.014-6e-3c0.24%200.175%200.536%200.278%200.856%200.278%200.781%200%201.418-0.618%201.451-1.391l0.033-0.016zm10.63%205.105l3e-3%200.014c-0.224%200.195-0.39%200.461-0.461%200.772-0.174%200.762%200.286%201.52%201.033%201.725l7e-3%200.03-1.23-0.355%200.163-0.709-0.487-0.608%200.972-0.87v1e-3zm-16.17%200.023l0.963%200.862-0.472%200.59%200.17%200.746-1.243%200.359%206e-3%20-0.026c0.287-0.079%200.551-0.245%200.751-0.495%200.487-0.612%200.401-1.494-0.182-2.003l7e-3%20-0.033zm6.764%200.443h2.647l1.65%202.061-0.589%202.57-2.385%201.143-2.385-1.144-0.588-2.57%201.65-2.06zm7.584%206.841l1.26%200.213-0.013%200.017c-0.293-0.054-0.604-0.018-0.892%200.121-0.704%200.339-1.01%201.172-0.704%201.883l-0.011%200.013-0.491-1.186%200.682-0.327%200.168-0.734h1e-3zm-12.514%200.034l0.16%200.698%200.705%200.339-0.506%201.225-0.023-0.029c0.117-0.273%200.151-0.584%200.08-0.896-0.174-0.762-0.917-1.245-1.679-1.106l-0.012-0.014%201.275-0.217zm13.539%200.176c0.075%202e-3%200.149%200.011%200.222%200.024h1e-3l0.016-0.02%208.562%201.449c-0.412%201.157-0.951%202.274-1.614%203.331-1.349%202.151-3.147%203.949-5.245%205.29l-3.325-8.034%200.011-0.013%203e-3%202e-3%20-2e-3%20-5e-3c-0.305-0.71%200-1.541%200.702-1.88%200.216-0.104%200.445-0.15%200.669-0.144zm-14.519%200.035c0.653%209e-3%201.241%200.461%201.393%201.127%200.071%200.312%200.036%200.622-0.081%200.895v1e-3l0.025%200.031-3.288%207.952c-3.173-2.037-5.571-5.051-6.847-8.559l8.499-1.441%200.014%200.018h1e-3c0.095-0.018%200.19-0.025%200.283-0.024h1e-3zm7.903%203.088l0.643%201.162h-0.03c-0.141-0.262-0.362-0.483-0.65-0.621-0.705-0.34-1.546-0.059-1.912%200.623h-4e-3l0.637-1.152%200.645%200.31%200.671-0.322zm-0.72%200.401c0.228-8e-3%200.461%200.037%200.68%200.143%200.288%200.139%200.51%200.359%200.65%200.621v1e-3h0.035l4.19%207.569c-0.548%200.185-1.106%200.343-1.674%200.472-3.106%200.705-6.321%200.52-9.291-0.492l4.175-7.547h7e-3v-3e-3l1e-3%202e-3c0.251-0.469%200.726-0.747%201.227-0.766z%27%20fill%3D%27%23fff%27%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E',
        description:
          'App portability for K8s on VMware, Amazon, Azure, Google, Oracle, IBM and bare metal.',
      },
      {
        title: 'Juju',
        url: 'https://juju.is/',
        logoUrl:
          'data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27100%27%20height%3D%27100%27%20viewBox%3D%270%200%20100%20100%27%3E%3Cg%3E%3Cpath%20fill%3D%27%23DD4814%27%20d%3D%27M50%200C22.385%200%200%2022.383%200%2049.997S22.385%20100%2050%20100c27.613%200%2050-22.39%2050-50.003C100%2022.383%2077.613%200%2050%200z%27%2F%3E%3Cpath%20fill%3D%27%23fff%27%20d%3D%27M25.733%2080.915c-.425.427-.987.66-1.59.66-.603%200-1.17-.235-1.594-.663-.425-.424-.66-.987-.66-1.59%200-.6.235-1.166.66-1.594.423-.424.99-.658%201.593-.658s1.165.234%201.59.658c.424.424.658.99.658%201.594.002.603-.232%201.166-.657%201.593zM35.545%2047.29c-.226-.72-.553-1.313-.968-1.763-.416-.446-.92-.784-1.498-.996-.58-.214-1.235-.323-1.95-.323-.717%200-1.368.11-1.935.324-.566.213-1.063.55-1.48.997-.414.45-.742%201.043-.966%201.764-.23.73-.347%201.616-.347%202.646V76.14H21.88V49.53c0-1.34.18-2.59.54-3.71.36-1.125.925-2.117%201.682-2.955.757-.837%201.723-1.492%202.87-1.953%201.146-.463%202.535-.697%204.124-.697%201.59%200%202.99.234%204.156.697%201.17.46%202.15%201.116%202.907%201.953.752.838%201.325%201.828%201.698%202.955.367%201.12.558%202.37.558%203.71v3.614h-4.52v-3.21c-.006-1.025-.122-1.913-.35-2.643zM54.425%2065.658c0%201.348-.188%202.598-.56%203.717-.37%201.125-.94%202.117-1.697%202.955-.757.834-1.736%201.492-2.905%201.953-1.17.46-2.57.694-4.156.694-1.59%200-2.974-.234-4.12-.694-1.152-.46-2.116-1.12-2.876-1.953-.754-.838-1.318-1.83-1.68-2.955-.357-1.12-.54-2.37-.54-3.717v-11.43h4.522V65.26c0%201.024.117%201.914.346%202.64.228.726.552%201.318.966%201.764.42.45.915.784%201.48%201%20.57.214%201.22.323%201.937.323.714%200%201.373-.113%201.95-.328.576-.212%201.08-.55%201.496-.996.417-.45.744-1.04.97-1.76.23-.73.346-1.622.346-2.644V54.227h4.522V65.66zM49.912%2050.93c0-1.245%201.008-2.252%202.25-2.252%201.24%200%202.252%201.007%202.252%202.252%200%201.238-1.01%202.248-2.252%202.248-1.243%200-2.25-1.01-2.25-2.248zM63.565%2019.012c-.226-.72-.552-1.316-.968-1.763-.416-.45-.92-.785-1.495-.997-.58-.218-1.235-.323-1.952-.323-.714%200-1.366.106-1.935.32-.565.215-1.064.552-1.48%201-.415.445-.74%201.04-.966%201.762-.23.73-.346%201.613-.346%202.643v26.203H49.9V21.255c0-1.34.18-2.59.54-3.713.36-1.128.926-2.12%201.683-2.958.755-.834%201.722-1.49%202.87-1.953%201.15-.46%202.536-.696%204.123-.696%201.587%200%202.985.237%204.154.697%201.173.464%202.15%201.12%202.905%201.954.76.838%201.33%201.83%201.7%202.955.37%201.124.557%202.374.557%203.715v3.608H63.91v-3.21c0-1.023-.117-1.913-.345-2.64zM82.446%2037.38c0%201.345-.188%202.595-.56%203.714-.37%201.127-.94%202.12-1.695%202.955-.76.833-1.736%201.49-2.905%201.954-1.172.458-2.57.692-4.156.692-1.592%200-2.98-.234-4.126-.692-1.147-.463-2.114-1.12-2.872-1.955-.755-.835-1.322-1.83-1.683-2.956-.356-1.12-.54-2.37-.54-3.714V25.95h4.524v11.03c0%201.024.116%201.914.345%202.643.225.723.55%201.314.968%201.764.415.446.915.78%201.48.996.567.215%201.217.326%201.933.326.718%200%201.375-.112%201.954-.327.576-.215%201.078-.55%201.494-.996.415-.45.743-1.04.97-1.764.228-.73.346-1.618.346-2.643V25.95h4.52v11.43h.002z%27%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        description:
          'Model-driven multi-cloud operations for applications. On-premise or on-cloud SAAS app store, with big data, k8s and openstack solutions',
      },
      {
        title: 'Multipass',
        url: 'https://multipass.run/',
        logoUrl:
          'data:image/svg+xml,%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23e95420%3B%7D.cls-2%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EArtboard%201%3C%2Ftitle%3E%3Ccircle%20class%3D%22cls-1%22%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%2F%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M80%2C54.25a7.86%2C7.86%2C0%2C0%2C0-1.81.22L69.81%2C37.75a7.66%2C7.66%2C0%2C1%2C0-10.79-1%2C7.26%2C7.26%2C0%2C0%2C0%2C1%2C1L51.55%2C54.46a7.61%2C7.61%2C0%2C0%2C0-3.55%2C0L39.7%2C37.75a7.66%2C7.66%2C0%2C1%2C0-10.79-1%2C7.3%2C7.3%2C0%2C0%2C0%2C1%2C1L21.42%2C54.46a7.78%2C7.78%2C0%2C0%2C0-1.92-.25%2C7.69%2C7.69%2C0%2C1%2C0%2C4.95%2C1.84L33%2C39.33a7.31%2C7.31%2C0%2C0%2C0%2C3.6%2C0l8.31%2C16.72A7.66%2C7.66%2C0%2C1%2C0%2C55.7%2C57.12a8.4%2C8.4%2C0%2C0%2C0-1.08-1.07L63%2C39.33a7.54%2C7.54%2C0%2C0%2C0%2C1.89.25%2C7.38%2C7.38%2C0%2C0%2C0%2C1.81-.25l8.43%2C16.72a7.67%2C7.67%2C0%2C1%2C0%2C4.92-1.76Z%22%2F%3E%3C%2Fsvg%3E',
        description:
          'On-demand build-and-test VMs for cloud devs on Windows, Mac and Linux desktops',
      },
      {
        title: 'Ubuntu Advantage',
        url: 'https://ubuntu.com/support',
        logoUrl:
          'data:image/svg+xml,%3C%3Fxml%20version%3D%271.0%27%20encoding%3D%27UTF-8%27%20standalone%3D%27no%27%3F%3E%0A%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xml%3Aspace%3D%27preserve%27%20height%3D%27400px%27%20width%3D%27400px%27%20version%3D%271.1%27%20enable-background%3D%27new%20-97%20220.9%20400%20400%27%20viewBox%3D%27-97%20220.9%20400%20400%27%3E%0A%3Cstyle%20type%3D%27text%2Fcss%27%3E%0A%09.st0%7Bfill%3A%23E95420%3B%7D%0A%09.st1%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%09%3Cpath%20class%3D%27st0%27%20d%3D%27m303%20420.9c0%20110.4-89.5%20200-200%20200s-200-89.6-200-200c0-110.5%2089.5-200%20200-200s200%2089.5%20200%20200z%27%2F%3E%0A%09%09%3Cpath%20class%3D%27st1%27%20d%3D%27m-33%20394.2c-14.8%200-26.7%2012-26.7%2026.7s12%2026.7%2026.7%2026.7%2026.7-12%2026.7-26.7c0-14.8-12-26.7-26.7-26.7zm190.7%20121.3c-12.8%207.4-17.1%2023.7-9.8%2036.5%207.4%2012.8%2023.7%2017.2%2036.5%209.8s17.1-23.7%209.8-36.5c-7.5-12.7-23.8-17.1-36.5-9.8zm-132.7-94.6c0-26.4%2013.1-49.7%2033.2-63.8l-19.5-32.7c-23.4%2015.6-40.7%2039.5-48%2067.4%208.4%206.9%2013.8%2017.4%2013.8%2029.1s-5.4%2022.2-13.8%2029.1c7.2%2027.9%2024.6%2051.8%2048%2067.4l19.5-32.7c-20.1-14.1-33.2-37.4-33.2-63.8zm78-78c40.8%200%2074.2%2031.2%2077.7%2071.1l38.1-0.6c-1.9-29.4-14.7-55.8-34.5-75.2-10.2%203.8-21.9%203.2-32-2.6-10.2-5.9-16.5-15.7-18.3-26.5-9.9-2.7-20.3-4.2-31-4.2-18.5%200-35.9%204.3-51.4%2012l18.6%2033.2c9.9-4.6%2021.1-7.2%2032.8-7.2zm0%20156c-11.7%200-22.9-2.6-32.9-7.2l-18.6%2033.2c15.5%207.7%2033%2012%2051.4%2012%2010.7%200%2021.1-1.5%2031-4.2%201.7-10.7%208.1-20.6%2018.3-26.5%2010.1-5.9%2021.9-6.4%2032-2.6%2019.7-19.4%2032.6-45.8%2034.5-75.2l-38.1-0.6c-3.4%2039.8-36.8%2071.1-77.6%2071.1zm54.6-172.7c12.8%207.4%2029.1%203%2036.5-9.8s3-29.1-9.8-36.5-29.1-3-36.5%209.8c-7.3%2012.8-2.9%2029.1%209.8%2036.5z%27%2F%3E%0A%3C%2Fsvg%3E',
        description:
          'Extended Security Maintenance, Kernel Livepatch, FIPS, enterprise support and certification.',
        links: [
          {url: 'http://ubuntu.com/advantage', text: 'UA dashboard'},
          {url: 'https://support.canonical.com/', text: 'Support login'},
        ],
      },
    ],
    others: [
      {
        title: 'Launchpad',
        url: 'https://launchpad.net',
        description: 'The software collaboration platform behind Ubuntu.',
        links: [{url: 'https://launchpad.net/+login', text: 'Login'}],
      },
      {
        title: 'Ubuntu Image Service',
        url: 'https://cloud-images.ubuntu.com/locator/',
        description:
          'Hardened, standardised or customised Ubuntu images on public clouds and private infra.',
      },
      {
        title: 'Cloud-init',
        url: 'https://cloud-init.io/',
        description:
          'Control and customize your cloud instances on boot and during their lifecycle.',
      },
      {
        title: 'Mir',
        url: 'https://mir-server.io/',
        description:
          'Ultra-fast and lightweight Wayland compositor for secure desktop and device displays.',
      },
      {
        title: 'Landscape',
        url: 'https://landscape.canonical.com/',
        description:
          'Updates, package management, repositories, security, and regulatory compliance for Ubuntu.',
      },
      {
        title: 'Netplan',
        url: 'http://www.netplan.io/',
        description:
          'Network abstraction for Linux to simplify and standardise complex network configuration.',
      },
      {
        title: 'DQlite',
        url: 'https://dqlite.io/',
        description: 'Fast, embedded, persistent SQL database with Raft consensus.',
      },
      {
        title: 'MicroK8s',
        url: 'https://microk8s.io/',
        description: 'Small, fast, and fully-conformant Kubernetes for developers and IoT.',
      },
      {
        title: 'MicroStack',
        url: 'https://microstack.run/',
        description: 'Single-node OpenStack for developers and IoT.',
      },
    ],
    resources: [
      {title: 'Webinars', url: 'https://ubuntu.com/blog?category=webinars#posts-list'},
      {title: 'Tutorials', url: 'https://tutorials.ubuntu.com/'},
      {title: 'Videos', url: 'https://ubuntu.com/blog?category=videos#posts-list'},
      {title: 'Case studies', url: 'https://ubuntu.com/blog?category=case-studies#posts-list'},
      {title: 'White papers', url: 'https://ubuntu.com/blog?category=white-papers#posts-list'},
      {title: 'Docs', url: 'https://docs.ubuntu.com/'},
      {title: 'Training', url: 'https://ubuntu.com/cloud/training'},
      {title: 'Blog', url: 'https://ubuntu.com/blog'},
      {title: 'Developer', url: 'https://developer.ubuntu.com/'},
      {title: 'Install', url: 'https://ubuntu.com/download/cloud'},
      {title: 'Download', url: 'https://ubuntu.com/download'},
    ],
    abouts: [
      {title: 'Ubuntu', url: 'https://ubuntu.com/'},
      {title: 'Canonical', url: 'https://www.canonical.com/'},
      {title: 'Press centre', url: 'https://ubuntu.com/blog/press-centre'},
      {title: 'Partners', url: 'https://partners.ubuntu.com/'},
      {title: 'Contact', url: 'https://ubuntu.com/about/contact-us'},
    ],
  };
  function c(a, n, t) {
    for (var l = 0; l < a.length; l += 1) n.call(t, l, a[l]);
  }
  function p(a) {
    var n = window.document.createElement('div');
    return (n.innerHTML = a), n.childNodes[0];
  }
  return (
    (a.createNav = function (a) {
      var n = 0 < arguments.length && void 0 !== a ? a : {},
        t = n.maxWidth,
        l = void 0 === t ? '68rem' : t,
        e = n.hiring,
        o = void 0 !== e && e;
      console.log(
        'Interested in what makes us tick? Then we are interested in you! See our jobs page for more info: http://ubunt.eu/dev-jobs'
      );
      var i = p(
          '<div class="skip-content"><a href="#main-content">Skip to main content</a></div'
        ),
        r = p('<div id="canonical-global-nav" class="global-nav" role="complementary"></div>'),
        s = p('<div class="global-nav__overlay"></div>'),
        d = p(
          '<div class="global-nav__header">\n    <div class="global-nav__header-row global-nav__row" style="max-width:'
            .concat(
              l,
              '">\n      <div class="global-nav__header-logo">\n        <a class="global-nav__header-logo-anchor" href="https://www.canonical.com">\n          <svg width="75" height="10"><title id="title" lang="en">Canonical logo</title><g fill="#FFF" fill-rule="evenodd"><path d="M4.409 9.79a4.815 4.815 0 0 1-1.799-.323 3.785 3.785 0 0 1-1.393-.951 4.321 4.321 0 0 1-.899-1.53C.106 6.382 0 5.69 0 4.907c0-.782.117-1.476.351-2.083a4.427 4.427 0 0 1 .96-1.53c.4-.41.878-.731 1.407-.946a4.459 4.459 0 0 1 1.69-.323 6.615 6.615 0 0 1 1.921.27c.195.057.385.129.568.216.144.072.243.125.298.161l-.393 1.08a2.099 2.099 0 0 0-.351-.176 6.577 6.577 0 0 0-.535-.189 5.126 5.126 0 0 0-.67-.155 4.704 4.704 0 0 0-.77-.06c-.46 0-.88.085-1.257.256-.377.17-.71.423-.974.742-.27.323-.48.717-.629 1.18-.149.463-.223.982-.223 1.557 0 .558.065 1.066.196 1.524.13.459.329.852.595 1.18.265.328.603.589.987.762.393.18.854.27 1.386.27.596 0 1.09-.063 1.481-.189.393-.126.688-.238.886-.337l.338 1.079a1.87 1.87 0 0 1-.338.169 4.615 4.615 0 0 1-.609.195 7.74 7.74 0 0 1-1.906.23zm8.33-9.548c.325.675.636 1.356.933 2.043.31.718.61 1.44.9 2.165.301.755.61 1.553.926 2.394.315.84.653 1.755 1.014 2.744h-1.433a37.938 37.938 0 0 1-.433-1.2c-.137-.4-.277-.8-.42-1.2H9.98l-.852 2.4H7.762c.333-.916.671-1.831 1.014-2.744.3-.801.609-1.6.926-2.394.29-.726.59-1.447.9-2.165.297-.688.608-1.369.933-2.043h1.204zm-.636 1.497a35.094 35.094 0 0 0-.899 2.104 75.02 75.02 0 0 0-.845 2.28h3.489c-.28-.76-.566-1.518-.859-2.273a40.365 40.365 0 0 0-.886-2.11zm12.158 7.85a75.23 75.23 0 0 0-.683-1.12c-.27-.434-.547-.864-.832-1.288a81.364 81.364 0 0 0-.926-1.356 58.91 58.91 0 0 0-1.873-2.535c-.267-.34-.542-.673-.825-.998v7.296h-1.285V.242h1.041c.473.506.927 1.03 1.36 1.571.489.607.967 1.223 1.433 1.848.473.634.92 1.256 1.339 1.868.368.534.723 1.078 1.061 1.632V.242h1.285v9.346h-1.095zm20.472 0a50.642 50.642 0 0 0-.683-1.12 49.404 49.404 0 0 0-.829-1.288 74.62 74.62 0 0 0-1.88-2.684 53.44 53.44 0 0 0-.92-1.207c-.266-.34-.541-.672-.824-.998v7.296H38.31V.242h1.042c.473.507.926 1.03 1.359 1.571a61.88 61.88 0 0 1 2.772 3.716c.37.533.723 1.077 1.06 1.632V.242h1.285v9.346h-1.096zM48.212.241h1.312v9.346h-1.312V.242zm7.72 9.548a4.83 4.83 0 0 1-1.798-.323 3.794 3.794 0 0 1-1.394-.951 4.374 4.374 0 0 1-.9-1.53c-.212-.603-.318-1.295-.318-2.078 0-.782.118-1.476.354-2.084.235-.606.553-1.117.962-1.53A4.09 4.09 0 0 1 54.243.35a4.449 4.449 0 0 1 1.689-.324 6.55 6.55 0 0 1 1.92.27c.236.072.424.144.57.216.145.072.243.125.298.161l-.393 1.08a2.18 2.18 0 0 0-.353-.176 6.4 6.4 0 0 0-.534-.189 4.955 4.955 0 0 0-1.441-.215c-.46 0-.876.085-1.257.256-.377.17-.71.424-.974.742a3.47 3.47 0 0 0-.628 1.18c-.15.463-.224.982-.224 1.557 0 .558.067 1.066.197 1.524.13.459.33.852.596 1.18.264.329.593.583.986.762.393.18.856.27 1.386.27.597 0 1.088-.063 1.48-.189a6.72 6.72 0 0 0 .888-.337l.338 1.08c-.063.044-.177.1-.338.168a4.687 4.687 0 0 1-.609.195 7.714 7.714 0 0 1-1.912.23h.004zM64.264.242c.322.674.633 1.355.931 2.043.298.688.597 1.41.9 2.165.302.755.612 1.553.926 2.394.314.84.656 1.755 1.013 2.744h-1.433a46.262 46.262 0 0 1-.432-1.2 65.234 65.234 0 0 0-.42-1.2h-4.245l-.852 2.4h-1.367c.362-.989.7-1.903 1.013-2.744a98.141 98.141 0 0 1 1.826-4.559c.299-.688.609-1.369.935-2.043h1.205zm-.636 1.497a32.5 32.5 0 0 0-.899 2.104c-.287.728-.57 1.488-.848 2.28h3.49c-.29-.783-.576-1.54-.86-2.273a39.37 39.37 0 0 0-.883-2.11zM75 8.496v1.092h-5.639V.242h1.312v8.254H75zm-43.165-.479a3.113 3.113 0 0 1-3.118-3.109A3.113 3.113 0 0 1 31.835 1.8a3.113 3.113 0 0 1 3.117 3.108 3.113 3.113 0 0 1-3.117 3.11z"/><path d="M36.73 4.908a4.889 4.889 0 0 1-4.896 4.882 4.889 4.889 0 0 1-4.895-4.882A4.889 4.889 0 0 1 31.834.026a4.89 4.89 0 0 1 4.896 4.882zm-4.895-3.694a3.7 3.7 0 0 0-3.705 3.694 3.7 3.7 0 0 0 3.705 3.695 3.7 3.7 0 0 0 3.704-3.695 3.7 3.7 0 0 0-3.705-3.694z"/></g></svg>\n        </a>\n      </div>\n      <ul class="global-nav__header-list">\n        '
            )
            .concat(
              (function (a) {
                return a
                  ? '<li class="global-nav__header-link">\n    <a class="global-nav__header-link-anchor" href="'.concat(
                      a,
                      '">We are hiring</a>\n  </li>'
                    )
                  : '';
              })(o),
              '\n        <li class="global-nav__header-link has-dropdown">\n          <a class="global-nav__header-link-anchor" href="#canonical-products">Products</a>\n        </li>\n      </ul>\n    </div>\n  </div>'
            )
        ),
        g = p(
          '<div class="global-nav__dropdown">\n      <div class="global-nav__dropdown-content u-hide" id="canonical-products" style="max-width:'
            .concat(l, '">\n        ')
            .concat(
              (function (a) {
                var i = a.flagships,
                  r = a.others,
                  n = a.resources,
                  t = a.abouts;
                function s(a) {
                  return a.links
                    .map(function (a) {
                      return '<li class="global-nav__list-item">\n        <a class="global-nav__link" href="'
                        .concat(a.url, '">\n          ')
                        .concat(a.text, '&nbsp;&rsaquo;\n        </a>\n      </li>');
                    })
                    .join('');
                }
                var l = i
                    .map(function (a, n) {
                      var t = '';
                      a.links &&
                        (t = '<ul class="global-nav__inline-list">\n          '.concat(
                          s(a),
                          '\n        <ul>'
                        ));
                      var l = '<li class="global-nav__matrix-item">\n          <a class="global-nav__link" href='
                        .concat(
                          a.url,
                          '>\n            <img class="global-nav__matrix-image" src='
                        )
                        .concat(
                          a.logoUrl,
                          ' width="32" height="32" alt="icon">\n            <h4 class="global-nav__matrix-title">'
                        )
                        .concat(
                          a.title,
                          '&nbsp;&rsaquo;</h4>\n          </a>\n          <div class="global-nav__matrix-content">\n            <p class="global-nav__matrix-desc">'
                        )
                        .concat(a.description, '</p>\n            ')
                        .concat(t, '\n          </div>\n        </li>');
                      if (n === i.length - 1)
                        for (var e = (2 * i.length) % 3, o = 0; o < e; o += 1)
                          l +=
                            '<li class="global-nav__matrix-item">\n              &nbsp;\n            </li>';
                      return l;
                    })
                    .join(''),
                  e = r
                    .map(function (a, n) {
                      var t = '';
                      a.links &&
                        (t = '<ul class="global-nav__inline-list u-no-padding--left">\n          '.concat(
                          s(a),
                          '\n        <ul>'
                        ));
                      var l = '<li class="global-nav__matrix-item">\n          <div class="global-nav__matrix-content">\n            <h4 class="global-nav__matrix-title"><a class="global-nav__link" href='
                        .concat(a.url, '>')
                        .concat(
                          a.title,
                          '&nbsp;›</a></h4>\n            <p class="global-nav__matrix-desc u-no-margin--left">'
                        )
                        .concat(a.description, '</p>\n            ')
                        .concat(t, '\n          </div>\n        </li>');
                      if (n === r.length - 1)
                        for (var e = (2 * r.length) % 3, o = 0; o < e; o += 1)
                          l +=
                            '<li class="global-nav__matrix-item">\n              &nbsp;\n            </li>';
                      return l;
                    })
                    .join(''),
                  o = n
                    .map(function (a) {
                      return '<li class="global-nav__list-item">\n          <a class="global-nav__link" href='
                        .concat(a.url, ' title="Visit ')
                        .concat(a.title, '">')
                        .concat(a.title, '</a>\n        </li>');
                    })
                    .join(''),
                  d = t
                    .map(function (a) {
                      return '<li class="global-nav__list-item">\n          <a class="global-nav__link" href='
                        .concat(a.url, '>')
                        .concat(a.title, '</a>\n        </li>');
                    })
                    .join(''),
                  g = (function (a) {
                    var n = a.flagships,
                      t = a.others,
                      l = a.resources,
                      e = a.abouts;
                    function o(a) {
                      return '<li class="global-nav__list-item">\n        <a class="global-nav__link" href='
                        .concat(a.url, '>')
                        .concat(a.title, '</a>\n      </li>');
                    }
                    var i = n
                        .map(function (a) {
                          return o(a);
                        })
                        .join(''),
                      r = t
                        .map(function (a) {
                          return o(a);
                        })
                        .join(''),
                      s = l
                        .map(function (a) {
                          return o(a);
                        })
                        .join(''),
                      d = e
                        .map(function (a) {
                          return o(a);
                        })
                        .join('');
                    return '<div class="global-nav__mobile-strip">\n      <div class="global-nav__row">\n        <h5 class="global-nav__muted-heading global-nav__expanding-row">Products</h5>\n        <ul class="global-nav__split-list">\n          '
                      .concat(
                        i,
                        '\n        </ul>\n      </div>\n      <div class="global-nav__row">\n        <h5 class="global-nav__muted-heading global-nav__expanding-row">Also from Canonical</h5>\n        <ul class="global-nav__split-list">\n          '
                      )
                      .concat(
                        r,
                        '\n        </ul>\n      </div>\n      <div class="global-nav__row">\n        <h5 class="global-nav__muted-heading global-nav__expanding-row">Resources</h5>\n        <ul class="global-nav__split-list">\n          '
                      )
                      .concat(
                        s,
                        '\n        </ul>\n      </div>\n      <div class="global-nav__row">\n        <h5 class="global-nav__muted-heading global-nav__expanding-row">About</h5>\n        <ul class="global-nav__split-list u-no-margin--bottom">\n          '
                      )
                      .concat(d, '\n        </ul>\n      </div>\n    </div>');
                  })(a);
                return ''
                  .concat(
                    g,
                    '\n    <div class="global-nav__strip u-hide--mobile">\n      <div class="global-nav__row is-bordered">\n        <ul class="global-nav__matrix">\n          '
                  )
                  .concat(
                    l,
                    '\n        </ul>\n      </div>\n    </div>\n    <div class="global-nav__strip u-hide--mobile">\n      <div class="global-nav__row">\n        <div class="global-nav__flex-container">\n          <div class="global-nav__others-col">\n            <h5 class="global-nav__muted-heading">Also from Canonical</h5>\n            <div class="global-nav__matrix">\n              '
                  )
                  .concat(
                    e,
                    '\n            </div>\n          </div>\n          <div class="global-nav__resources-col">\n            <h5 class="global-nav__muted-heading">Resources</h5>\n            <ul class="global-nav__split-list">\n              '
                  )
                  .concat(
                    o,
                    '\n            </ul>\n            <h5 class="global-nav__muted-heading">About</h5>\n            <ul class="global-nav__split-list">\n              '
                  )
                  .concat(
                    d,
                    '\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>'
                  );
              })(m),
              '\n      </div>\n    </div>'
            )
        );
      document.body.insertBefore(r, document.body.firstElementChild),
        document.body.insertBefore(i, r),
        r.appendChild(d),
        r.appendChild(g),
        r.appendChild(s),
        (function (a, l) {
          var t = l.querySelectorAll('.global-nav__header-link.has-dropdown'),
            e = l.querySelector('.global-nav__dropdown'),
            o = l.querySelectorAll('.global-nav__dropdown-content'),
            n = l.querySelectorAll('.global-nav__expanding-row'),
            i = l.querySelector('.global-nav__overlay'),
            r = window.innerWidth < a;
          function s() {
            e.classList.remove('show-content'),
              c(t, function (a, n) {
                return n.classList.remove('is-selected');
              }),
              i.classList.remove('show-overlay');
          }
          function d() {
            window.scrollTo(0, l.offsetTop);
          }
          function g(a) {
            var n = a.querySelector('.global-nav__header-link-anchor').getAttribute('href'),
              t = l.querySelector(n);
            a.classList.add('is-selected'),
              c(o, function (a, n) {
                return n !== t && n.classList.add('u-hide');
              }),
              t.classList.remove('u-hide'),
              i.classList.add('show-overlay'),
              r && d();
          }
          c(t, function (a, n) {
            n.addEventListener('click', function (a) {
              a.preventDefault(),
                e.classList.contains('show-content')
                  ? n.classList.contains('is-selected')
                    ? s()
                    : (c(t, function (a, n) {
                        return n.classList.remove('is-selected');
                      }),
                      g(n))
                  : (e.classList.add('show-content'), g(n));
            });
          }),
            c(n, function (a, n) {
              n.addEventListener('click', function (a) {
                a.target.classList.toggle('is-active'), d();
              });
            }),
            i.addEventListener('click', s);
        })(900, r);
    }),
    a
  );
})({});
//# sourceMappingURL=global-nav.js.map
