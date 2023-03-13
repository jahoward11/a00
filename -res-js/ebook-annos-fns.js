/*
HTML/Javascript CSI e-book annotations functions
Copyright (c) 2023 J.A. Howard | github.com/jahoward11
*/

(function () { //rstate, elsscr, afnccalled
window.annos = window.annos || { configs: {} };
//if (window.annos.fns) return;

window.annos.fns = window.annos.fns || function x(cfgs) {
'use strict';
var acs = cfgs && !cfgs.eventPhase && cfgs || window.annos && window.annos.configs || {},
  annoblocks = [], //refnbrAssn, annosXlink
  bodwid, dstyle0, el0, el1, htmlpers, masthd, nmain, nsty, ntoc,
  pei = 0,
  tag, tocbuls,
  tocbuild = ""; //refnbrAssn, annosfns
const h1node = window.editorApp || window.EC0 ? null : document.head,
  d1wrap = window.cmain && (window.xctrls || "").nextElementSibling ? "#cmain>:last-child"
    : window.editorApp ? "#esrender_42qz0xfp" : window.EC0 ? "#ecorender" : "body",
  d1node = document.querySelector(d1wrap),
  dswrap = document.querySelector(d1wrap + '>section:first-child') ? ">section"
    : document.querySelector(d1wrap + '>.section') ? ">.section" : "",
  dmwrap = !document.querySelector(d1wrap + dswrap + '>main') ? "" : ">main",
  dcnode = document.querySelector(d1wrap + dswrap + dmwrap),
  dstyles = (window.editorApp || window.EC0 ? d1node : document).querySelectorAll('style'),
  rexhlmc = /((?:(?:\n*\/.+\/[gim]*|\n*{[ *+:=_~]*\\?[#.]?\w*}|\n*.+?{ *\+\+ *\\?[#.]?\w*})(?:\n|(?=$))|\n)+|^)([^]*?)(?=(?:\n+\/.+\/[gim]*|\n*{[ *+:=_~]*\\?[#.]?\w*}|\n+.+?{ *\+\+ *\\?[#.]?\w*})(?:\n|$)|\n\n|$)/g,
  rexfrgs = /[^]*?(?:<!-- *(?:\/\/ *|)(?:anno(?:tation|)s?(?:hl|)|texthl)\b.*-->|$)/gi,
  rexhlwr = /<!-- *(?:\/\/ *|)(?:anno(?:tation|)s?(?:hl|)|texthl)\b.*?(?:\n+[^]*?|)-->/gi,
  rexhlw2 = /<!-- *(?!\/\/).+\n+([^]*?)\n*-->|[^]+/i,
  rexhlw3 = /(<!-- *(?:\/\/ *|)(?:anno(?:tation|)s?(?:hl|)|texthl)\b.*?)(?:\n[^]*?|)(?=-->)/gi,
  rexperi = /<!--(?! *(?:\/\/ *|)(?:anno(?:tation|)s?(?:hl|)|texthl)\b.*-->)[^]*?-->|<(script|style)\b.*?>[^]*?<\/\1>/gi,
  blqLeft = n => !n || !/^(?:BLOCKQUOTE|DL|DD|LI|OL|UL)$/.test(n.nodeName) ? 0
    : +getComputedStyle(n).marginLeft.replace(/px/, "")
      + +getComputedStyle(n).borderLeftWidth.replace(/px/, "")
      + +getComputedStyle(n).paddingLeft.replace(/px/, "") + blqLeft(n.parentElement);

function chNbr(chnbru) { //refnbrAssn, annosXlink
  return acs.ptchbg[1] > 1 ? chnbru - (100 * acs.ptchbg[0]) : chnbru;
}

function hljsSetup() {
  let codeblocks = document.querySelectorAll('code'),
    npre, pcode;
  Array.from(codeblocks).some(cbi => /<span class="hljs-\w+">/.test(cbi.innerHTML))
  || codeblocks.forEach(cbi => {
    pcode = cbi.parentElement;
    if (pcode.parentElement.nodeName !== 'PRE' && pcode.childNodes.length === 1) {
      if (pcode.nodeName === 'P' || pcode.className === "language-p") {
        // NOCS generates P>CODE. Markdownit generates PRE>CODE.
        // Transform either one to PRE>P>CODE.
        npre = document.createElement('pre');
        npre.innerHTML = "<p>" + pcode.innerHTML + "</p>";
        pcode.parentElement.replaceChild(npre, pcode);
      } else if (pcode.nodeName === 'PRE' && window.hljs) { //&& !cbi.className
        window.hljs.highlightBlock(cbi);
      } //hljs.initHighlighting();
    }
  });
}

function refnbrAssn() {
let hnbgn = acs.ptchbg[acs.ptchbg[0]],
  numalt = acs.numalt,
  ptchbg = acs.ptchbg,
  tocfmt = typeof acs.tocfmt !== 'number' ?  acs.tocfmt
    : (Number.isInteger(acs.tocfmt) && acs.tocfmt > 0 ? acs.tocfmt.toString() : "");
let chid = d1node.querySelector('#header') ? "header" : "top",
  divinnr, h16mask, h16nav,
  hdgtags = ['>h1:not(#title)', '>h2:not(#title):not(#author)', '>h3:not(#date)', '>h4', '>h5', '>h6']
    .map(e => d1wrap + dswrap + dmwrap + e),
  hnpatt, hnpatt1, hnpatt2, hnseps,
  hntoc = 1,
  hnwpre0, hnwrap0, hnwrap1, hnwrap3, hxchlvl,
  hsublvls = dcnode.querySelectorAll( ['>h1', '>h2', '>h3', '>h4', '>h5', '>h6']
    .map(e => ":not(" + d1wrap + dswrap + dmwrap + "):not(header)" + e).join() ),
  htitle = d1node.querySelectorAll('h1, h2')[0],
  hxct = [0, 0, 0, 0, 0, 0, 0],
  hxct_hhx = [0, 0, 0, 0, 0, 0, 0],
  hxi, hxilvl, hxilvlprv, hxlen, hxrlvl, hxsdiff, hxsl, hxtoplvl, j,
  mnotect = 0,
  navchlen = dcnode.querySelectorAll('.navch').length,
  navct = 0,
  ndiv,
  pari_navct = null,
  parlen,
  pars = null,
  pcontainer, pnextnode, pnwrap,
  shct = 0,
  tf05, tf0auto, tf1auto,
  tochxs = [];
if (!navchlen) { hsublvls.forEach(h => h.classList.add("hsublvl")); }
if (!navchlen && htitle && !/\btitle\b/i.test(htitle.id)) { htitle.id = "title"; }
hxlen = [0].concat(hdgtags.map(e => d1node.querySelectorAll(e).length));
if (!hxlen.some(e => e)) {
  let p0 = dcnode.querySelector('p:not(#author):not(#date)');
  !p0 ? dcnode.appendChild(document.createElement('h3')).insertAdjacentText('afterend', "\n")
  : p0.parentElement.insertBefore(document.createElement('h3'), p0).insertAdjacentText('afterend', "\n");
}
hxtoplvl = hxlen.findIndex(l => l);
tf0auto = hxtoplvl < 0 ? 0 : [1, 2, 3, 4, 5, 6].find(n => hxtoplvl <= n && hxlen[n] > 1) || 0;
tf1auto = !tf0auto ? 0 : hxlen[3] && tf0auto <= 2 ? 4 - tf0auto : hxlen[2] && tf0auto <= 1 ? 2 : 1;
tf05 = Array.isArray(tocfmt) && tocfmt[0] != null && tocfmt[1] != null ? tocfmt.slice(0, 6)
    .concat([tocfmt[0], tocfmt[1], null, null].slice(tocfmt.length < 6 ? tocfmt.length - 2 : 4))
    .map(e => e == null ? null : !+e || !Number.isInteger(+e) || +e < 0 ? 0 : +e)
  : (typeof tocfmt !== 'string' || /^auto/i.test(tocfmt))
    ? [ tf0auto, tf1auto, hxtoplvl < 0 ? 0 : hxtoplvl, (tf1auto + tf0auto || hxtoplvl) - hxtoplvl,
      null, null ]
  : tocfmt.trim().replace(/^[bu]/i, "").replace(/^[^e]+$/i, m => m.replace(/#/g, "e"))
    .replace( /^.*?e[cr]*h?([1-6]).*$|^[^eh]*?([1-6])[^eh]*[er]*$|.*/i, (m, c1, c2) =>
    ( c1 ? c1 + m.replace(/[er]+$|[^e]+/gi, "").length.toString()
      : c2 ? c2 + m.replace(/[^1-6]+/g, "").length.toString() : "00" )
    + m.replace( /^.*?h([1-6]).*$|.*/i, (msub, cs1) =>
      cs1 ? cs1 + msub.replace(/h0|[^h]+/gi, "").length.toString() : "00" )
    + (/cr?h?(\d)/i.exec(m) || ["", "_"])[1] + ( /re*$|^$/i.test(m) ? "7"
      : (/rc?h?(\d)/i.exec(m) || ["", "_"])[1] ) ).split("").map(e => e === "_" ? null : +e);
hnseps = Array.isArray(tocfmt) && tocfmt.length >= 7 + (tf05[1] || tf05[3]) ? tocfmt.slice(6)
  : typeof tocfmt === 'string' && !/^auto/i.test(tocfmt)
    ? tocfmt.replace(/^[^e]+$/i, m => m.replace(/#/g, "e")).replace(/[er]+$|[ 0a-df-z]+/gi, "")
      .replace(/.*?e.*/, m => m.replace(/e(\d)|\d/gi, "$1")).replace(/\d(?=\d)/g, "$&.").split(/\d/)
  : [""].concat(".".repeat((tf05[1] || tf05[3] || 1) - 1).split(""))
    .concat(tf05[1] === 1 || !tf05[1] && tf05[3] === 1 ? ["."] : [""]);
tocbuls = /^[bu]/i.test(tocfmt[0] || hnseps[0]);
hnseps[0] = hnseps[0].replace(/^[bu]/i, "");
hxchlvl = tf05[4] != null ? tf05[4] : tf05[0] && tf05[1]
  ? [3, 2, 1, 4, 5, 6].find(l => hxlen[l] && tf05[0] <= l && tf05[0] + tf05[1] > l) || 0
  : [3, 2, 1, 4, 5, 6].find(l => hxlen[l] && tf05[2] <= l && tf05[2] + tf05[3] > l) || 0;
hxrlvl = tf05[5] != null ? tf05[5] : hxchlvl;
if (tf05[2] == null || tf05[3] == null) { tf05[2] = tf05[0]; tf05[3] = tf05[1]; }
if (hxrlvl && hxrlvl < 7 && (!tf05[0] || !tf05[1])) { hntoc--;
  if (tf05[2] && tf05[3] && hxrlvl >= tf05[2]) { tf05[0] = tf05[2]; tf05[1] = hxrlvl - tf05[2] + 1;
  } else { tf05[0] = hxrlvl; tf05[1] = 1; }
}
if (tf05[0] && tf05[1] && tf05[2] && tf05[3] && (tf05[2] > tf05[0] || tf05[3] < tf05[1])) {
  tf05[2] = tf05[0]; tf05[3] = tf05[1];
  hnseps = [""].concat(".".repeat((tf05[1] || tf05[3] || 1) - 1).split(""))
    .concat(tf05[1] === 1 || !tf05[1] && tf05[3] === 1 ? ["."] : [""]);
}
h16nav = !hxrlvl
  ? new RegExp("^(?=<h(?![1-6] .*?class=.*?hsublvl|[12] id=['\"]?title)[1-6].*?>)", "im")
  : !navchlen ? new RegExp("^(?=<h(?![1-6] .*?class=.*?hsublvl|[12] id=['\"]?title)[0-"
    + (hxrlvl >= tf05[2] + tf05[3] ? hxrlvl : (tf05[2] + tf05[3] || 1) - 1) + "].*?>)", "gim")
  : hxrlvl > hxchlvl ? new RegExp("^(?=<h(?![1-6] .*?class=.*?hsublvl|[12] id=['\"]?title)["
    + (hxchlvl + 1) + "-" + hxrlvl + "].*?>)", "gim") : /^$/;
h16mask = new RegExp("^<p"
  + ( hxrlvl > 0 && (tf05[2] || tf05[0]) && tf0auto && (tf05[2] || tf05[0]) >= tf0auto
    ? "" : "(?! id=subhead1 )" )
  + "(.*?class=['\"]?navch\\b.*?>.*?<\\/)p(?=>\\s*<h[0-"
  + ( hxrlvl <= 0 ? 6 : hxrlvl < tf05[2] ? hxrlvl - 1
    : tf05[2] && tf05[3] && tf0auto && tf05[2] >= tf0auto ? tf05[2] - 1 : tf05[0] ? tf05[0] - 1 : 0 )
  + (hxrlvl > 0 && hxrlvl < 7 ? (hxrlvl + 1) + "-7" : "")
  + "].*?>|>\\s*<p.*?class=['\"]?navch\\b.*?>)", "gim");
dcnode.innerHTML = dcnode.innerHTML
//.replace(/<p><\/p>(<blockquote.+?\/blockquote>)/gi, "$1\n<p>").replace(/<p>(?=<\/p>)/gi, "");
  .replace( /^<(?!\/?li>|\/?[dou]l>)\/?\b.+\n(?=<([dou]l)(?:[^](?!<p>))+?<\/\1>(?!\n<\/?li>|\n<\/?[dou]l>))/gim,
    "$&<p style=\"display: none;\"></p>\n" )
  // insert empty p-tags before p-free dl/ol/ul block
  .replace(/^<p>(&(?!nbsp;)\w+;|\*|- -)<\/p>$/gim, "<div class=ssbr align=center>$1</div>")
  .replace(/^<p>(?:&nbsp;|\\) *<\/p>$/gim, "<div class=ssbr align=center>&nbsp;</div>")
  // convert p.ssbr to div.ssbr
//.replace(/^<p> *(\*|(?!\S *<\/p>)[ .,?!:;*+~=_$&@#%^\/<>‹›«»…†‡·•–—§¶-]+?) *<\/p>$/gim, "<div class=ssbr align=center>&puncsp;$1&puncsp;</div>")
  // nonfunctional: no test can indicate preexisting, leading escape
  .replace(/(<br *\/?>\n?) *\\?\s*(?=<\/p>$)|^(<p>)\s*\\?\s*(?=<br *\/?>)/gim, "$1$2&nbsp;")
  // replace potential \-char in par-post-br-\ or par-pre-\-br with nbsp
  .replace(h16nav, m => "<p id=subhead" + ++shct + " class=navch></p>\n")
  // insert p.navch
  .replace(h16mask, "<div$1div"); // convert p.navch + h1-6 to div.navch + h1-6
pnwrap = /=>/.test(acs.pnwrap) ? acs.pnwrap
  : "\"" + acs.pnwrap + (/\$&/.test(acs.pnwrap) ? "" : "$&") + "\"";
if (acs.hnwrap < 0) { acs.hnwrap = [-1, -1, -1, -1]; }
hnwrap0 = Array.isArray(acs.hnwrap) ? acs.hnwrap[0] || "" : (acs.hnwrap || "").toString();
hnwpre0 = (/.*?(?=\$`)/.exec(hnwrap0) || [""])[0];
hnwrap0 = !hnwrap0 && (!hxrlvl || !tf05[0] || !tf05[1]) ? "&loz;"
  : (hnwrap0).toString().replace(/.*?\$` */, "");
hnwrap0 = /=>/.test(hnwrap0) ? eval(hnwrap0)
  : hnwrap0 + (/\$[&123]/.test(hnwrap0) ? "" : "$&");
hnpatt2 = !tf05[0] || !tf05[1] || hxtoplvl < 0 ? null // hdgnbr 1st position
  : !hxlen[tf05[0]] ? () => ptchbg[0] // #hx & no hxs
  : tf05[2] < tf05[0] && [1, 2, 3, 4, 5].slice(0, tf05[0] - 1).every(n => hxlen[n] < 2)
    ? () => chNbr(hnbgn) - 1 + hxct[tf05[0]]
  : () => chNbr(hnbgn) - 1 + navct
  //(chNbr(hnbgn) - 1 + navct - hxct[2] - hxct[3] - hxct[4] - hxct[5] - hxct[6])
    - ([2, 3, 4, 5, 6].slice(tf05[0] - 1).map(n => hxct[n]).reduce((a, e) => a + e) || 0);
hnpatt1 = () => hnseps[0] + ( typeof numalt === 'function' // 1st-pos alternate numeral
  ? numalt(hnpatt2()) : numalt.length ? (numalt[hnpatt2()] || hnpatt2()) : hnpatt2() );
hnpatt = !hnpatt2 ? null : () => hnpatt1() + ( tf05[1] < 2 ? "" // hdgnbr additional positions
  : [2, 3, 4, 5, 6].slice(tf05[0] - 1, tf05[0] + tf05[1] - 2)
    .map((n, i) => hnseps[1 + i] + (hxct[n] - hxct_hhx[n])).join("") ) + hnseps[hnseps.length - 1];
divinnr = () => ( acs.hnwrap[0] < 0 ? "" : hnwpre0 + "<a href=#" + chid + "><strong>" //+ "&#8203;"
    + (hxrlvl && hnpatt ? hnpatt() : "").replace(/(\\W*\\w+)(.*?)(\\d*)$|^$/, hnwrap0)
    + "</strong></a>" )
  + (acs.pnwrap < 0 ? "" : (j - pari_navct).toString().replace(/.*/, eval(pnwrap)));
pars = hxrlvl < 0 || hxrlvl > 6 ? [] : dcnode.querySelectorAll('p');
for (j = 0, parlen = pars.length; j < parlen; j++) { //for (let [j, pari] of pars.entries()) {
  if ( j > 2 && ( /\bcolophon/i.test(pars[j].parentElement.id)
  || /\bfootnote/i.test(pars[j].parentElement.className) )) { break; }
  //if (pars[j].parentElement.id === "colophon") { break; }
  if (pars[j].parentElement.nodeName !== 'PRE') {
    pars[j].innerHTML = pars[j].innerHTML.replace(/[ \n]+/g, " ") + "\n";
  }
  if (!hxrlvl && pari_navct == null) {
    pari_navct = 0;
  } else if ( hxrlvl && (hnpatt || hntoc) && pars[j].className === "navch" && /^h\d/i
  .test(pnextnode = !pars[j].nextElementSibling ? "" : pars[j].nextElementSibling.nodeName) ) {
    navct++;
    pari_navct = j; // reset par ct initial & incr nav ct
    ///^subhead/.test(pars[j].id)
    //&& (pars[j].id = "heading" + (hnpatt ? hnpatt().replace(/\W+/g, "_") : ptchbg[0]));
    chid = pars[j].id;
    hxilvl = +/\d/.exec(pnextnode)[0];
    hxct[hxilvl]++;
    [1, 2, 3, 4, 5, 6].slice(hxilvl, tf05[0] + tf05[1] - 1).forEach(l => hxct_hhx[l] = hxct[l]);
    continue;
  }
  if ( pars[j].previousElementSibling
  && /\bmnote/i.test(pars[j].previousElementSibling.className) ) {
    annoblocks["ch" + (chNbr(hnbgn) - 1 + navct) + "par" + (j - pari_navct)] = ++mnotect;
  }
  if ( pari_navct != null && j - pari_navct && (j - pari_navct) % acs.pnfreq === 0
  && ( pars[j].previousElementSibling == null
  || !/\bmnote/i.test(pars[j].previousElementSibling.className) )) {
    ndiv = document.createElement('div');
    ndiv.id = "ch"
      + (hxrlvl && hnpatt ? hnpatt().replace(/\W+$|^\W+/g, "").replace(/\W+/g, ".") : ptchbg[0])
      + "par" + (j - pari_navct);
    ndiv.className = "refnbr";
    ndiv.setAttribute('align', 'right');
  //ndiv.style.fontSize = "0.625em"; //x-small
  //ndiv.style.lineHeight = "0.9em";
  //ndiv.style.color = "silver";
  //ndiv.style.maxWidth = "4em";
  //ndiv.style.margin = "0 0 0 auto";
  //ndiv.style.padding = "0 0.25em";
  //ndiv.style.cssFloat = "right";
  //ndiv.style.clear = "right";
    ndiv.innerHTML = navct && chNbr(hnbgn) > 0 ? divinnr()
      : "<a href=#" + chid + "><strong>" + (!hxrlvl || hxct_hhx[3] ? "&loz;" : "Fwd") + "</strong></a>"
      + (acs.pnwrap < 0 ? "" : (j - pari_navct).toString().replace(/.*/, eval(pnwrap)));
    pcontainer = pars[j].parentElement.nodeName !== 'PRE' ? pars[j] : pars[j].parentElement;
    pcontainer.parentElement.insertBefore(ndiv, pcontainer).insertAdjacentText('afterend', "\n");
  }
}
if (!dcnode.querySelector('.refnbr')) { //(hxrlvl < 0 || hxrlvl > 6) {
  ndiv = document.createElement('div');
  ndiv.className = "refnbr";
  ndiv.style.display = "none";
  dcnode.appendChild(ndiv).insertAdjacentText('afterend', "\n");
}
!hxlen.some(e => e) || !((tf05[2] && tf05[3]) || (tf05[0] && tf05[1]))
|| ( tochxs = d1node.querySelectorAll( hdgtags.slice( ...( tf05[2] && tf05[3]
    ? [tf05[2] - 1, tf05[2] + tf05[3] - 1] : [tf05[0] - 1, tf05[0] + tf05[1] - 1] )).join() ));
hxct = [0, 0, 0, 0, 0, 0, 0];
hxct_hhx = [0, 0, 0, 0, 0, 0, 0];
hnpatt2 = !tf05[0] || !tf05[1] || hxtoplvl < 0 ? null : !hxlen[tf05[0]] ? () => ptchbg[0]
  : tf05[2] < tf05[0] && [1, 2, 3, 4, 5].slice(0, tf05[0] - 1).every(n => hxlen[n] < 2)
    ? () => chNbr(hnbgn) - 1 + hxct[tf05[0]] : () => chNbr(hnbgn) + +hxi
    - ([2, 3, 4, 5, 6].slice(tf05[0] - 1).map(n => hxct[n]).reduce((a, e) => a + e) || 0);
hnwrap1 = !Array.isArray(acs.hnwrap) || acs.hnwrap.length <= 1 ? "$& "
  : /=>/.test(acs.hnwrap[1]) ? eval(acs.hnwrap[1])
  : (acs.hnwrap[1] || "") + (/\$[&123]/.test(acs.hnwrap[1]) ? "" : "$& ");
hnwrap3 = !Array.isArray(acs.hnwrap) || acs.hnwrap.length <= 2
|| acs.hnwrap[3] == null || acs.hnwrap[3] === false || acs.hnwrap[3] === 0 ? ""
  : /=>/.test(acs.hnwrap[3]) ? eval(acs.hnwrap[3])
  : (acs.hnwrap[3] || "") + (/\$[&123]/.test(acs.hnwrap[3]) ? "" : "$& ");
for (hxi = 0, hxsl = tochxs.length; hxi < hxsl; hxi++) {
  hxilvlprv = +hxi ? hxilvl : hxtoplvl;
  hxilvl = +/\d/.exec(tochxs[hxi].nodeName)[0];
  hxsdiff = hxilvlprv - hxilvl;
  hxct[hxilvl]++;
  [1, 2, 3, 4, 5, 6].slice(hxilvl, tf05[0] + tf05[1] - 1).forEach(l => hxct_hhx[l] = hxct[l]);
  if (tf05[2] && tf05[3]) {
    tocbuild += ( hxsdiff >= 0 ? "</li>" + "\n</ul>\n</li>".repeat(hxsdiff)
      : +hxi && hxsdiff <= -2 ? "\n<ul>" + ("\n<li>\n<ul>").repeat(Math.abs(hxsdiff) - 1)
      : (+hxi ? "\n<ul>" : "\n<li>\n<ul>").repeat(Math.abs(hxsdiff)) )
    + "\n<li>"
    + ( !dswrap ? ""
      : "<a href=\"#" + (tochxs[hxi].previousElementSibling.id || tochxs[hxi].id) + "\">" )
    + ( hntoc && hnpatt && hxilvl >= tf05[0] && hxilvl < tf05[0] + tf05[1]
      && (typeof acs.hnwrap[1] !== 'number' || acs.hnwrap[1] >= 0) ? (hnpatt() || "")
        .replace( typeof hnwrap1 === 'function' || /\$[&123]/.test(acs.hnwrap[1])
          ? /^$/ : /(?:\W+0)+$/, "" )
        .replace(/(\W*\w+)(.*?)(\d*)$/, hnwrap1) : "" )
    + ( dswrap ? ""
      : "<a href=\"#" + (tochxs[hxi].previousElementSibling.id || tochxs[hxi].id) + "\">" )
    + tochxs[hxi].innerHTML.replace(/<\/?a\b.*?>/g, "") + "</a>";
  }
  if ( hnwrap3 && hnpatt && hxilvl >= tf05[0]
  && (typeof acs.hnwrap[3] !== 'number' || acs.hnwrap[3] >= 0) ) {
    tochxs[hxi].innerHTML = (hnpatt() || "") //&& hxilvl < tf05[0] + tf05[1]
    .replace(typeof hnwrap3 === 'function' || /\$[&123]/.test(acs.hnwrap[3]) ? /^$/ : /(?:\W+0)+$/, "")
    .replace(/(\W*\w+)(.*?)(\d*)$/, hnwrap3) + tochxs[hxi].innerHTML;
  }
}
tocbuild = !tocbuild ? ""
  : (!dswrap ? "" : '<aside class="container is-inline-block-mobile">\n') + '<nav id="TOC" class="'
  + (acs.toccla || (!dswrap ? "toc" : "menu is-small is-relative is-pulled-right")) + '">\n'
  + (!dswrap ? "" : '<p class="menu-label">Doc Contents</p>\n')
  + (!dswrap ? "<ul>" : '<ul class="menu-list">') + tocbuild.replace(/^<\/li>/, "") + "</li>"
  + "\n</ul>\n</li>".repeat(hxilvl - hxtoplvl)
  + "\n</ul>\n</nav>\n" + (!dswrap ? "" : "</aside>\n");
}

function annosXlink() {
  let mnotebqs = document.querySelectorAll('.mnote'), prt, xlink;
  mnotebqs.forEach(mnbq => { mnbq.innerHTML = mnbq.innerHTML
    .replace(/\b(?:ch.?)? ?(\d+),? ?(?:par.?|:) ?(\d+)\b(?! *<\/a>)/gi, (msub, cs1, cs2) => {
      prt = acs.ptchbg.findIndex( (ptch, i) => +i && cs1 >= chNbr(ptch)
        && (!acs.ptchbg[+i + 1] || cs1 < acs.ptchbg[+i + 1]) );
      +prt < 0 || ( xlink = +prt !== acs.ptchbg[0] ? acs.ptfnam[0] + acs.ptchbg[prt] + " target=_blank"
        : "#annoblock" + annoblocks["ch" + cs1 + "par" + cs2] );
      return /\d+$|\.html?$/i.test(xlink) ? "<a href=" + xlink + ">" + msub + "</a>" : msub || "";
    });
  });
}
/*
  for (let i = 0, l = mnotebqs.length; i < l; i++) {
    mnotebqs[i].innerHTML = mnotebqs[i].innerHTML
    .replace( /\b(?:ch.?)? ?(\d+),? ?(?:par.?|:) ?(\d+)\b(?! *<\/a>)/gi, (ssm, ssc1, ssc2) =>
      for (pt in acs.ptchbg) {
        if ( +pt && ssc1 >= chNbr(acs.ptchbg[pt])
        && (!acs.ptchbg[+pt + 1] || ssc1 < acs.ptchbg[+pt + 1]) ) {
          xlink = +pt !== acs.ptchbg[0] ? acs.ptfnam[0] + acs.ptfnam[pt]
            : "#annoblock" + annoblocks["ch" + ssc1 + "par" + ssc2];
          target = +pt !== acs.ptchbg[0] ? " target=_blank" : "";
          break;
        }
      }
*/

function annosHilit(dochtml, i) {
  let acolor, aptys, atag,
    cdflts = {span: "", mark: ".ye6", strong: "", em: "", s: "", ins: ""},
    isrex, mnct = 0, rfnc, sepa, tdflt = "mark",
    mdit = window.markdownit && window.markdownit();
  !(mdit && window.markdownitIns && window.markdownitSub && window.markdownitSup)
  || (mdit = mdit.use(window.markdownitIns).use(window.markdownitSub).use(window.markdownitSup));
  !Array.isArray(acs.texthl[i]) || acs.texthl[i].forEach(txt => {
    aptys = /{ *([*+=_~]*) *([#.]?\w*|\\#[0-9a-f]{3,6}) *}$/.exec(txt) || ["", "", ""];
    aptys[3] = typeof txt !== 'string' ? "" : txt.replace(/ *{[ *+=_~]*\\?[#.]?\w* *}$/, "");
    atag = (isrex = txt instanceof RegExp) ? tdflt
      : !aptys[1] || /^==$/.test(aptys[1]) ? "mark"
      : /^\*\*$|^__$/.test(aptys[1]) ? "strong"
      : /^[*_]$/.test(aptys[1]) ? "em"
      : /^~~$/.test(aptys[1]) ? "s"
      : /^\+\+$/.test(aptys[1]) ? "ins"
      : "span"; //e.g. /^=$/.test(aptys[1])
    acolor = aptys[2] || cdflts[atag];
    acolor = /^#/i.test(acolor) ? " id=" + acolor.replace(/^#/, "") //(?![0-9a-f]{3,4}$|[0-9a-f]{6,6}$)
      : /^\./.test(acolor) ? " class=" + acolor.replace(/^\./, "")
      : acolor ? " style=\"background: " + acolor.replace(/^\\/, "") + ";\"" : "";
    sepa = atag === "ins" && aptys[3]
      ? eval(sepa.toString().replace(/(?=(?:\(\?=.*?\)|)\/[gim]*$)/, "<\\/\\w+>"))
      : isrex ? txt : !aptys[3] ? /^$/ : new RegExp(aptys[3]); //!texthl ? aptys[3] :
      //("\\b" + aptys[3] + "\\b", "gi")
    rfnc = atag === "ins" ? ( !aptys[3] ? "$&"
        : "$& <ins" + (acolor || " id=mnot" + ++mnct + " class=mnote") + ">"
          + (!mdit ? aptys[3] : mdit.renderInline(aptys[3])).replace(/\\n/g, "\n") + "</ins>" )
      : isrex ? "<" + atag + acolor + ">$&</" + atag + ">" //|| !texthl
      : (...args) => "<" + atag + acolor + ">" + ( args.slice(1, args.length - 2)
          .map((e, i) => e + (i%2 ? "<" + atag + acolor + ">" : "</" + atag + ">")).join("")
          || args[0] ) + "</" + atag + ">";
    dochtml = dochtml.replace(sepa, rfnc);
    if (/^{[ *+=_~]*\\?[#.]?\w*}$/.test(txt)) {
      cdflts[atag] = aptys[2];
      if (atag !== "ins") tdflt = atag;
    }
  });
  return dochtml
  .replace(/(<(?=!--|<[eims]|\/?[a-z])[^\n<>]*)<(em|ins|mark|s|span|strong)\b[^\n<>]*>(.*?)<\/\2>(?=[^\n<>]*>)/g, "$1$3");
}

!window.annos || (window.annos.configs = {});
acs = {
  ptfnam: acs.ptfnam || ["part", "1"],
  ptchbg: Array.isArray(acs.ptchbg) && acs.ptchbg || [1, 1],
  tocfmt: acs.tocfmt
    || (acs.tocfmt === false || acs.tocfmt === "" ? "" : acs.tocfmt === 0 ? "0" : null),
  toccla: acs.toccla || "",
  hnwrap: acs.hnwrap || "",
  pnwrap: acs.pnwrap || (acs.pnwrap === "" ? "" : "<br />"),
  pnfreq: acs.pnfreq > 0 && acs.pnfreq || (acs.pnfreq <= 0 ? 0 : 5),
  numalt: acs.numalt || [], //["Zeroth", "First", "Second", "Third"],
  codehl: acs.codehl == null ? 1 : acs.codehl,
  texthl: acs.texthl //[]
};
acs.texthl = ( acs.texthl && acs.texthl.length
  ? (Array.isArray(acs.texthl) ? acs.texthl : [acs.texthl])
  : (dcnode.innerHTML.match(rexhlwr) || []).map(tgi => tgi.replace(rexhlw2, "$1")) )
.map( tgi => Array.isArray(tgi) ? tgi
  : (tgi = ("" + tgi).replace(/^\/\/.*\n?| +\/\/.*| +$|^ +/gm, "").replace(/(\\n)\n(?=.)/g, "$1"))
    && ( !/\v|.\\v./.test(tgi) && /\S\n\n\S/.test(tgi) ? tgi
        : tgi.replace(/[^\n\v](?=\n.)|.\\v(?=.)/g, "$&\n").replace(/\v$|\\v$/gm, "") )
      .replace( rexhlmc, (m, c1, c2) => !c2 ? m : c1 + "\n(" + c2.trim()
        .replace(/(?=[$().?[\\{|])/g, "\\") // escape 9/12 md chars
        .replace( /(\*\*?|__?)(\*\*?|__?|)(.+?)\2\1/g,
          "(?:<(?:em|strong)>){1,2}$3(?:</(?:em|strong)>){1,2}" )
        .replace(/( |^)==(.+?)==(?=[^\w=])/gm, "$1<mark>$2</mark>")
        .replace(/( |^)~~(.+?)~~(?=[^\w~])/gm, "$1<s>$2</s>")
        .replace(/( |^)\+\+(.+?)\+\+(?=[^\w+])/gm, "$1<ins>$2</ins>")
        .replace(/( |^)(`+)(.+?)\2(?=[^\w`])/gm, "$1<code>$3</code>")
        .replace(/~(\w+)~/g, "<sub>$1</sub>")
        .replace(/\^(\w+)\^/g, "<sup>$1</sup>")
        .replace(/(?=[*+^])/g, "\\") // escape 3/12 md chars
        .replace(/&(?!#?\w+;)/g, "(?:&|&amp;)").replace(/\xa0|&nbsp;/g, "(?:\\xa0|&nbsp;)")
        .replace( /\\\(\\\?[!:=].*?[^\n\\]\\\)/g, m => m.replace(/\\(.)/g, "$1")
          .replace(/\\\\\\n/g, "<br>").replace(/\\\\ /g, "(?:\\xa0|&nbsp;)") )
        .replace( /[ \u2008-\u200b]*(?:---?|\u2014)[ \u2008-\u200b]*/g,
          "[\\x20\\u2008-\\u200b\\u2014-]+" )
        .replace(/[\t ]+/g, "\\s+").replace(/["'‘’“”]/g, "(?:[\"'‘’“”]|&quot;)")
        .replace(/\n/g, ")(.*?)(") + ")" )
      .replace(/\n\n+/g, "\n").trim() //(/(?:[^\\]|^)(?:\\\\)*\\(?!\\)/g, "$&\\")
      .split("\n").map(e => !/^\/.+\/[gim]*$/.test(e) ? e : eval(e) || e) );

dcnode.innerHTML = dcnode.innerHTML.replace(rexhlw3, "$1");
//dcnode.normalize();
!acs.codehl || hljsSetup();
htmlpers = dcnode.innerHTML.match(rexperi) || []; // preserve periph
dcnode.innerHTML = dcnode.innerHTML.replace(rexperi, "<!--phold-periph-->"); // placehold periph
//if (typeof acs.tocfmt !== 'number' || acs.tocfmt >= 0) { refnbrAssn(); }
if (!dcnode.querySelector('.refnbr')) {
  !(window.editorApp || window.EC0)
  || window.console.log("App detected. Applying ebook-annos-fns to render.");
  refnbrAssn();
  annosXlink();
}
dcnode.innerHTML = dcnode.innerHTML.match(rexfrgs).map(annosHilit).join("");
!window.mnmask
|| d1node.querySelectorAll('mark>ins.mnote').forEach(e => e.parentElement.after(" ", e))
|| d1node.querySelectorAll('mark>ins.mnote').forEach(e => e.parentElement.after(" ", e))
|| d1node.querySelectorAll('td:not(first-of-type)>ins.mnote')
  .forEach(e => e.parentElement.parentElement.firstElementChild.append(" ", e));
if (tocbuild && !d1node.querySelector('#TOC')) { // insert toc
  tag = /^<(\w+)(?: +id="(.*?)"|)(?: +class="(.*?)"|).*?>/.exec(tocbuild);
  ntoc = document.createElement(tag[1]);
  ntoc.id = tag[2];
  ntoc.className = tag[3];
  ntoc.innerHTML = tocbuild.replace(/<\/\w+>\n$|^<.+?>/g, "");
  !( el0 = d1node.querySelector('.navch')
    || d1node.querySelector('main')
    || d1node.querySelectorAll('hr~h1, hr~h2, hr~h3, hr~h4')[0]
    || d1node.querySelectorAll('figure~h1, figure~h2, figure~h3, figure~h4')[0]
    || d1node.querySelectorAll('h1, h2, h3, h4')[0]
    || d1node.firstElementChild )
  || !( el0.nodeName === 'MAIN'
    || [1,2,3,4,5].find( e => /^FIGURE$|^HR$/.test( ( el1 = Array.from(Array(e))
        .reduce(a => a.previousElementSibling || a, el0) || "" ).nodeName ) && (el0 = el1) ) || 1 )
  || el0.parentElement.insertBefore(ntoc, el0).insertAdjacentText('afterend', "\n");
}
dcnode.innerHTML = dcnode.innerHTML
.replace(/<!--phold-periph-->/gi, () => htmlpers[pei++]); // restore periph
if ( !Array.from(dstyles).some( s => /#TOC\b/.test(s.innerHTML)
|| /\n\.navch, p\.navch .+\n\.refnbr .+\n\.mnote, ins\.mnote /.test(s.innerHTML)
|| /^@import ".*\/style-hjas-dflt0\.css"/m.test(s.innerHTML) )) {
  nsty = document.createElement('style');
  nsty.setAttribute('type', 'text/css');
  nsty.innerHTML //= "\n.hljs, pre.hljs { padding: 0; background-color: transparent; }" )
  = "\n.toc { font: small system-ui, sans-serif; }"
  + (tocbuls ? "" : "\n.toc ul, .content .menu ul { list-style-type: none; }")
  + "\n.content .menu-list, .content .menu li+li { margin: 0; }"
  + "\n.ssbr { clear: right; color: DarkGrey; margin: 1em 0; text-align: center; }"
  + "\n.navch, p.navch { margin: 0; padding: 0; }"
  + "\n.refnbr { clear: right; float: right; color: DarkGrey; font: 10px/0.9 system-ui, sans-serif; margin: 0 calc(0px - var(--rnblqrt, 0px)) 0 auto; padding: 0 4px; text-align: left; user-select: none; }"
  //+ "\n.refnbr a:link, .refnbr a:visited { color: LightSteelBlue; text-decoration: none; }"
  + "\n.mnote, ins.mnote { box-sizing: border-box; clear: right; float: right; background-color: WhiteSmoke; color: SlateGrey; font: normal x-small Helvetica, Arial, sans-serif; width: 312px; margin: 0 8px 8px; padding: 0.1em 0.3em 0.2em; box-shadow: 0 1px 2px -1px DarkGrey; text-decoration: none; user-select: none; white-space: pre-wrap; }"
  + ( !dswrap ? "\n"
    : "\naside.is-inline-block-mobile + main { margin-top: 0.75rem; }"
    + "\n#TOC.is-relative { z-index: 11; }"
    + "\n@media print, (min-width: 685px) {"
    + " #TOC.is-pulled-right { width: 321px; margin: 0 0 1rem 1rem; } }\n" );
  dstyle0 = Array.from((h1node || d1node).childNodes).find(n => n.nodeName === 'STYLE');
  masthd = d1node.querySelector('#header')
  || document.querySelector(d1wrap + dswrap + dmwrap + '>header')
  || d1node.querySelector('#title')
  || document.querySelector(d1wrap + dswrap + dmwrap + '>h1')
  || document.querySelector(d1wrap + dswrap + dmwrap + '>h2');
  dstyle0 || masthd
  ? (h1node || d1node).insertBefore(nsty, dstyle0 || masthd).insertAdjacentText('afterend', "\n")
  : (h1node || d1node).appendChild(nsty).insertAdjacentText('afterend', "\n");
}
window.setTimeout(() => {
  nmain = document.querySelector('main');
  bodwid = nmain && +getComputedStyle(nmain).width.replace(/px/, "")
  || +getComputedStyle(document.body).width.replace(/px/, "");
  document.querySelectorAll( d1wrap + dswrap + dmwrap + ' blockquote>.refnbr+p',
    d1wrap + dswrap + dmwrap + ' dd>.refnbr+p', d1wrap + dswrap + dmwrap + ' li>.refnbr+p' )
  .forEach( e => e.parentElement.style.setProperty( "--rnblqrt",
    bodwid - blqLeft(e.parentElement) - e.offsetWidth + "px" ));
  !window.mnmask || !window.EC2 || EC2.mnTog();
}, 1000);
};

const rstate = document.readyState,
  elsscr = window.editorApp ? document.querySelectorAll('#esrender_42qz0xfp script')
    : window.EC0 ? document.querySelectorAll('#ecorender script')
    : document.body.querySelectorAll('script'),
  afnccalled = window.NodeList.prototype.isPrototypeOf(elsscr)
    && Array.from(elsscr).some(e => /\bannos\.fns\b/.test(e.innerHTML));
//window.console.log("marker4: " + rstate);
if (rstate === 'loading' || rstate === 'uninitialized') {
  if (!window.onload) { window.onload = window.annos.fns;
  } else if (window.onload !== window.annos.fns && !/\bannos\.fns\b/.test(window.onload.toString())) {
    window.setTimeout(window.annos.fns, 2500); }
} else if (!afnccalled) { window.annos.fns(); }
  //if (rstate === 'complete' || rstate === 'interactive' || rstate === 'loaded')
  //&& Object.keys(window.annos.configs).length
})();
