/*
HTML/Javascript CSI e-book annotations module
Copyright (c) 2021 J.A. Howard | github.com/jahoward11
*/

const navchGen = function (muldoc) {
// phase 3: chapter-navigation generation
let chsepa = new RegExp("(?:\\n\\n+|^\\n?)" + "#".repeat(hxchlvl) + " +\\S.*\\n+", "g"),
  ptsepa = new RegExp("\\n\\n+#" + "#?".repeat(hxchlvl >= 2 ? hxchlvl - 2 : 0) + " +(\\S.*)(?:(?=\\n\\n+#+ \\S)|\\n\\n+)", "g"),
  nstr1 = "\n\n<p id=",
  nstr2 = " class=navch style=\"margin: 1em 0; text-align: center; clear: right;\">",
  toci = 0;
//muldoc = muldoc.replace(/(\n\n+)(?:<!--( *|phold-comment-periph)-->|)(?=##? +\S)/, "$1<!--$2-->\n");
muldoc = (hxchlvl < 2) ? muldoc : muldoc.replace( ptsepa, (ssm, ssf1) =>
  nstr1 + idGen(ssf1.replace(toclisepa, "$1$2$4")) + nstr2 //create h2-navch-br marker
  + "&middot;<span style=\"margin: 0 1rem;\">&middot;</span><a href=#header>&loz;</a><span style=\"margin: 0 1rem;\">&middot;</span>&middot;</p>\n\n\n"
  + ssm.replace(/\n+/g, "") + "\n\n" );
return (!hxchlvl) ? muldoc : muldoc.replace( chsepa, ssm =>
  nstr1 + tocchids[toci] + nstr2 + "<a href=#" // create h3-navch-br marker
  + tocchids[toci - 1] + ">&laquo;</a><a href=#header style=\"margin: 0 2rem;\">&loz;</a><a href=#"
  + tocchids[1 + toci++] + ">&raquo;</a></p>\n\n\n" + ssm.replace(/\n+/g, "") + "\n\n" );
};

const annosHilit = function (docmdfd) {
  let acolor, aptys, atag,
    colordflts = {span: "", mark: ".ye6", strong: "", em: "", s: "", ins: ""},
    isregx, refnc, sepatt, tagdflt = "mark";
  acs.texthl.forEach(txt => {
    aptys = /{ *([*+=_~]*) *([#.]?\w*|\\#[0-9a-f]{3,6})}$/.exec(txt) || ["", "", ""];
    aptys[3] = typeof txt !== 'string' ? "" : txt.replace(/ *{[ *+=_~]*\\?[#.]?\w*}$/, "");
    atag = (isregx = txt instanceof RegExp) ? tagdflt
      : !aptys[1] || /^==$/.test(aptys[1]) ? "mark"
      : /^\*\*$|^__$/.test(aptys[1]) ? "strong"
      : /^[*_]$/.test(aptys[1]) ? "em"
      : /^~~$/.test(aptys[1]) ? "s"
      : /^\+\+$/.test(aptys[1]) ? "ins"
      : "span"; //e.g. /^=$/.test(aptys[1])
    acolor = aptys[2] || colordflts[atag];
    acolor = /^#/i.test(acolor) ? " id=" + acolor.replace(/^#/, "") //(?![0-9a-f]{3,4}$|[0-9a-f]{6,6}$)
      : /^\./.test(acolor) ? " class=" + acolor.replace(/^\./, "")
      : acolor ? " style=\"background: " + acolor.replace(/^\\/, "") + ";\"" : "";
    sepatt = atag === "ins" && aptys[3]
      ? eval(sepatt.toString().replace(/(?=(?:\(\?=.*?\)|)\/[gim]*$)/, "<\\/\\w+>"))
      : isregx ? txt : !aptys[3] ? /^$/ : !texthl ? aptys[3] : new RegExp(aptys[3]);
      //("\\b" + aptys[3] + "\\b", "gi")
    refnc = atag === "ins" ? ( !aptys[3] ? "$&" : "$& <ins" + (acolor || " class=mnote") + ">"
      + (!mdit ? aptys[3] : mdit.renderInline(aptys[3])).replace(/\\n/g, "\n") + "</ins>" )
      : isregx || !texthl ? "<" + atag + acolor + ">$&</" + atag + ">"
      : (...args) => "<" + atag + acolor + ">" + ( args.slice(1, args.length - 2)
          .map((e, i) => e + (i%2 ? "<" + atag + acolor + ">" : "</" + atag + ">")).join("") || args[0] )
        + "</" + atag + ">";
    docmdfd = docmdfd.replace(sepatt, refnc);
    if (/^{[ *+=_~]*\\?[#.]?\w*}$/.test(txt)) {
      colordflts[atag] = aptys[2];
      if (atag !== "ins") tagdflt = atag;
    }
  });
  !window.annos || !window.annos.configs || (window.annos.configs.texthl = []);
  return docmdfd
  .replace(/(<(?=!--|<[eims]|\/?[a-z])[^\n<>]*)<(em|ins|mark|s|span|strong)\b[^\n<>]*>(.*?)<\/\2>(?=[^\n<>]*>)/g, "$1$3");
};

const navtocGen = function (muldoc, tocnbresc, puncsppar) {
let hnbgn, HNWRAP = hnwrap,
  numalt = [], NUMALT = numalt,
  ptchbgn = [1, 1],
  tocfmt = null, TOCFMT = tocfmt;
let acfgsepa = [
    /^<script[^]+?\s+(?:window.|)annos\W+configs\W+\n/i,
    /^.*?\bptchbgn *[:=] *(\[[ \d.,-]*\])[ ,;}]*$/im,
    /^.*?\btocfmt *[:=] *(.+?)[ ,;}]*$/im,
    /^.*?\bhnwrap *[:=] *(.+?)[ ,;}]*$/im,
    /^.*?\bnumalt *[:=] *(\[.*?\]|.*?=>.*?)[ ,;}]*$/im,
  ],
  acfgstr, hnpatt, hnpatt1, hnpatt2, hnseps,
  hntoc = 1,
  hnwrap1, hxchsepa,
  hxct = [0, 0, 0, 0, 0, 0, 0],
  hxct_hhx = [0, 0, 0, 0, 0, 0, 0],
  hxi, hxilvl, hxilvlprv, hxlen, hxsdiff, hxsl, hxtoplvl,
  secct = 0,
  sepi = 0,
  tf05, tf0auto, tf1auto,
  tocbuild = "",
  tochxid,
  tochxs = [],
  tociddupes = [];
function chNbr(chnbru) {
  return (ptchbgn[1] > 1) ? chnbru - (100 * ptchbgn[0]) : chnbru;
}
function liTxtMup(hxtxt) {
  return mark1Line(mditPrepPhase2(caseStdz(hxtxt.replace(toclisepa, "$1$2$4"))));
}
hdgnbrs = [""];
tocchids = [];
if (acfgstr = htmlperiphs.find(per => acfgsepa[0].test(per))) {
  ptchbgn = window.JSON.parse((acfgstr.match(acfgsepa[1]) || ["", "null"])[1]) || ptchbgn;
  tocfmt = (acfgstr.match(acfgsepa[2]) || ["", TOCFMT])[1];
  tocfmt = /^".*?"$/.test(tocfmt) ? tocfmt.replace(/"$|^"/g, "")
    : /^\[[ \W\dlnu]*?\]$/.test(tocfmt) ? window.JSON.parse(tocfmt)
    : +tocfmt === 0 || Number.isInteger(+tocfmt) && +tocfmt > 0 ? tocfmt : +tocfmt ? "" : TOCFMT;
  hnwrap = (acfgstr.match(acfgsepa[3]) || ["", HNWRAP])[1];
  hnwrap = /^".*?"$/.test(hnwrap) ? hnwrap.replace(/"$|^"/g, "") : /^\[.*?\]$/.test(hnwrap)
    ? window.JSON.parse(hnwrap.replace(/([,[] *)((?:\w+?|\([ ,\w]*\)) *=>.*?)(?=[,\]])/g,
      (m, f1, f2) => `${f1}"${f2.replace(/(?="|\\)/g, "\\")}"`)) : HNWRAP;
  numalt = (acfgstr.match(acfgsepa[4]) || ["", NUMALT])[1];
  numalt = /=>/.test(numalt) ? window.eval(numalt)
    //Function(...String(numalt).replace(/=> */, "$&return ").split("=>"))
    : /^\[.*?\]$/.test(numalt) && window.JSON.parse(numalt) || NUMALT;
} // capture 4 ebook-annos-fns configs
hnbgn = ptchbgn[ptchbgn[0]];
hxlen = [0].concat( [1, 2, 3, 4, 5, 6].map(e => (muldoc.match(new RegExp((e < 3
  ? "\\n\\n" : "(?:\\n\\n|^\\n?)") + "#".repeat(e) + " +\\S", "g")) || []).length) );
hxtoplvl = hxlen.findIndex(l => l);
tf0auto = hxtoplvl < 0 ? 0 : [1, 2, 3, 4, 5, 6].find(n => hxtoplvl <= n && hxlen[n] > 1) || 0;
tf1auto = !tf0auto ? 0 : hxlen[3] && tf0auto <= 2 ? 4 - tf0auto : hxlen[2] && tf0auto <= 1 ? 2 : 1;
tf05 = (Array.isArray(tocfmt) && tocfmt[0] !== null && tocfmt[1] !== null) ? tocfmt.slice(0, 6)
    .concat([tocfmt[0], tocfmt[1], null, null].slice(tocfmt.length < 6 ? tocfmt.length - 2 : 4))
    .map(e => e === null ? null : !+e || !Number.isInteger(+e) || +e < 0 ? 0 : +e)
  : (typeof tocfmt !== 'string' || /^auto/i.test(tocfmt))
    ? [tf0auto, tf1auto, hxtoplvl < 0 ? 0 : hxtoplvl, (tf1auto + tf0auto || hxtoplvl) - hxtoplvl, null, null]
  : tocfmt.replace(/^[^e]+$/i, m => m.replace(/#/g, "e"))
    .replace( /^.*?e[cr]*h?([1-6]).*$|^[^eh]*?([1-6])[^eh]*[er]*$|.*/i, (m, f1, f2) =>
    (f1 ? f1 + m.replace(/[er]+$|[^e]+/gi, "").length.toString()
      : f2 ? f2 + m.replace(/[^1-6]+/g, "").length.toString() : "00")
    + m.replace(/^.*?h([1-6]).*$|.*/i, (sm, sf1) =>
      sf1 ? sf1 + sm.replace(/h0|[^h]+/gi, "").length.toString() : "00")
    + (/cr?h?(\d)/i.exec(m) || ["", "_"])[1] + (/re*$/i.test(m) ? "7"
      : (/rc?h?(\d)/i.exec(m) || ["", "_"])[1]) ).split("").map(e => e === "_" ? null : +e);
hnseps = Array.isArray(tocfmt) && tocfmt.length >= 7 + (tf05[1] || tf05[3]) ? tocfmt.slice(6)
  : typeof tocfmt === 'string' && !/^auto/i.test(tocfmt)
    ? tocfmt.replace(/^[^e]+$/i, m => m.replace(/#/g, "e")).replace(/[er]+$|[ 0a-df-z]+/gi, "")
      .replace(/.*?e.*/, m => m.replace(/e(\d)|\d/gi, "$1")).replace(/\d(?=\d)/g, "$&.").split(/\d/)
  : [""].concat(".".repeat((tf05[1] || tf05[3] || 1) - 1).split(""))
    .concat(tf05[1] === 1 || !tf05[1] && tf05[3] === 1 ? ["."] : [""]);
hnseps[1] = tocnbresc && hnseps.length === 2 && hnseps[1] === "." ? "\\." : hnseps[1];
hxchlvl = tf05[4] !== null ? tf05[4] : tf05[0] && tf05[1]
  ? [3, 2, 1, 4, 5, 6].find(l => hxlen[l] && tf05[0] <= l && tf05[0] + tf05[1] > l) || 0
  : [3, 2, 1, 4, 5, 6].find(l => hxlen[l] && tf05[2] <= l && tf05[2] + tf05[3] > l) || 0;
if (tf05[2] === null || tf05[3] === null) { tf05[2] = tf05[0]; tf05[3] = tf05[1]; }
if (hxchlvl && (!tf05[0] || !tf05[1])) { hntoc--;
  if (tf05[2] && tf05[3] && hxchlvl >= tf05[2]) { tf05[0] = tf05[2]; tf05[1] = hxchlvl - tf05[2] + 1;
  } else { tf05[0] = hxchlvl; tf05[1] = 1; }
}
if (tf05[0] && tf05[1] && tf05[2] && tf05[3] && (tf05[2] > tf05[0] || tf05[3] < tf05[1])) {
  tf05[2] = tf05[0]; tf05[3] = tf05[1];
  hnseps = [""].concat(".".repeat((tf05[1] || tf05[3] || 1) - 1).split(""))
    .concat(tf05[1] === 1 || !tf05[1] && tf05[3] === 1 ? ["."] : [""]);
}
hnpatt2 = (!tf05[0] || !tf05[1] || hxtoplvl < 0) ? null // hdgnbr 1st position
  : !hxlen[tf05[0]] ? () => ptchbgn[0] // #hx & no hxs
  : tf05[2] < tf05[0] && [1, 2, 3, 4, 5].slice(0, tf05[0] - 1).every(n => hxlen[n] < 2)
    ? () => chNbr(hnbgn) - 1 + hxct[tf05[0]]
  : () => chNbr(hnbgn) + +hxi //(chNbr(hnbgn) + +hxi - hxct[2] - hxct[3] - hxct[4] - hxct[5] - hxct[6])
    - ([2, 3, 4, 5, 6].slice(tf05[0] - 1).map(n => hxct[n]).reduce((a, e) => a + e) || 0);
hnpatt1 = () => hnseps[0] + ( typeof numalt === 'function' // 1st-pos alternate numeral
  ? numalt(hnpatt2()) : numalt.length ? (numalt[hnpatt2()] || hnpatt2()) : hnpatt2() );
hnpatt = !hnpatt2 ? null : () => hnpatt1() + ( (tf05[1] < 2) ? "" // hdgnbr additional positions
  : [2, 3, 4, 5, 6].slice(tf05[0] - 1, tf05[0] + tf05[1] - 2)
    .map((n, i) => hnseps[1 + i] + (hxct[n] - hxct_hhx[n])).join("") ) + hnseps[hnseps.length - 1];
if (hnwrap < 0) { hnwrap = [-1, -1, -1, -1]; }
hnwrap1 = !Array.isArray(hnwrap) || hnwrap.length <= 1 ? "$& "
  : /=>/.test(hnwrap[1]) ? window.eval(hnwrap[1])
  : (hnwrap[1] || "") + (/\$[&123]/.test(hnwrap[1]) ? "" : "$& ");
hxsepa = !hxchlvl && !tf05[2] && !tf05[0] ? /^(?!$|[^])/
  : new RegExp( (tf05[3] && tf05[2] > 2 || tf05[1] && tf05[0] > 2 ? "(?:\\n\\n|^\\n?)" : "\\n\\n")
    + "#".repeat(tf05[3] && tf05[2] || tf05[0])
    + "#?".repeat(tf05[2] && tf05[3] ? tf05[3] - 1 : tf05[1] ? tf05[1] - 1 : 0) + " +\\S.*", "g" );
tochxs = muldoc.match(hxsepa) || [];
for (hxi = 0, hxsl = tochxs.length; hxi < hxsl; hxi++) {
  tochxid = idGen(tochxs[hxi].replace(toclisepa, "$1$2$4"));
  if (!tochxid.length) { tochxid = (secct > 0) ? "section-" + secct++ : "section"; }
  tociddupes[tochxid] = (tociddupes[tochxid] || 0) + 1;
  tochxid += (tociddupes[tochxid] === 1) ? "" : "-" + tociddupes[tochxid]; //=== 0
  hxilvlprv = hxilvl || hxtoplvl;
  hxilvl = /#+/.exec(tochxs[hxi])[0].length;
  hxsdiff = hxilvlprv - hxilvl;
  hxct[hxilvl]++;
  [1, 2, 3, 4, 5, 6].slice(hxilvl, tf05[0] + tf05[1] - 1).forEach(l => hxct_hhx[l] = hxct[l]);
  if (!tf05[0] || !tf05[1] || hxilvl < tf05[0] || hxilvl >= tf05[0] + tf05[1]) {
  //if (hxilvl < tf05[0] || tf05[0] && tf05[1] && hxilvl >= tf05[0] + tf05[1] || !tf05[1]) {
    hdgnbrs.push(+hxi ? hdgnbrs[hxi] : "");
  } else {
    if (hxilvl === hxchlvl) { tocchids.push(tochxid); }
    hdgnbrs.push(hnpatt && hnpatt() || "");
  }
  tocbuild += ( hxsdiff >= 0 ? "</li>" + "\n</ul>\n</li>".repeat(hxsdiff)
    : +hxi && hxsdiff <= -2 ? "\n<ul>" + ("\n<li>\n<ul>").repeat(Math.abs(hxsdiff) - 1)
    : (+hxi ? "\n<ul>" : "\n<li>\n<ul>").repeat(Math.abs(hxsdiff)) )
  + "\n<li>" + ( hntoc && hxilvl >= tf05[0] && hxilvl < tf05[0] + tf05[1]
    && (typeof hnwrap[1] !== 'number' || hnwrap[1] >= 0) ? hdgnbrs[+hxi + 1]
      .replace(typeof hnwrap1 === 'function' || /\$[&123]/.test(hnwrap[1]) ? /^$/ : /(?:\W+0)+$/, "")
      .replace(/(\W*\w+)(.*?)(\d*)$/, hnwrap1) : "" )
  + "<a href=\"#" + tochxid + "\">" + liTxtMup(tochxs[hxi]) + "</a>" + puncsppar;
}
if ( hxchlvl && (hxchlvl < (tf05[3] && tf05[2] || tf05[0])
|| hxchlvl >= (tf05[2] && tf05[3] ? tf05[2] + tf05[3] : tf05[0] + tf05[1])) ) {
  tocchids = [];
  hxchsepa = new RegExp("(?:\\n\\n|^\\n?)" + "#".repeat(hxchlvl) + " +\\S.*", "g");
  tochxs = muldoc.match(hxchsepa) || [];
  tochxs.forEach(hdg => {
    tochxid = idGen(hdg.replace(toclisepa, "$1$2$4"));
    if (!tochxid.length) { tochxid = (secct > 0) ? "section-" + secct++ : "section"; }
    tociddupes[tochxid] = (tociddupes[tochxid] || 0) + 1;
    tochxid += (tociddupes[tochxid] === 1) ? "" : "-" + tociddupes[tochxid];
    tocchids.push(tochxid);
  });
}
tocchids[-1] = tocchids[tocchids.length - 1];
tocchids[tocchids.length] = tocchids[0];
return (!tf05[2] || !tf05[3]) ? ""
  : "<nav id=\"TOC\" class=toc>\n<ul>" + tocbuild.replace(/^<\/li>/, "") + "</li>"
  + "\n</ul>\n</li>".repeat(hxilvl - hxtoplvl)
  + "\n</ul>\n</nav>\n";
};

export {
  annosHilit, navchGen, navtocGen
};
