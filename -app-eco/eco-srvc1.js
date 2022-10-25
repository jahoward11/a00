window.ecoqjs = { // 20
  fncTry: (fnc, a, e) => {
    // silently handle function execution errors
    try { return fnc(a) }
    catch (err) { return e > 1 ? a : e ? err : undefined }
  },
  frAlpha: str => {
    // convert Latin alpha numeral into Arabic integer
    let val = 0, i, z;
    str = str.toUpperCase();
    for (i = z = str.length - 1; i >= 0; i--) {
      val += (str.charCodeAt(z - i) - 64) * Math.pow(26, i);
    }
    return val;
  },
  toAlpha: val => {
    // convert Arabic integer into Latin alpha numeral
    let i, codpts = [];
    while (val) {
      i = 0;
      while ((val - ++i) % 26) {}
      codpts.unshift(i + 64);
      val = (val - i) / 26;
    }
    return String.fromCodePoint(...codpts || 65);
  },
  frRoman: str => {
    // convert Roman numeral into Arabic integer
    let val = 0, i, l,
      uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    str = str.toUpperCase()
    for (i = 0, l = uara.length; i <= l; i++) {
      while (str.indexOf(urom[i]) === 0) {
        val += uara[i];
        str = str.replace(urom[i], "");
      }
    }
    return val;
  },
  toRoman: val => {
    // convert Arabic integer into Roman numeral
    let str = "", i, l,
      uara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      urom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (i = 0, l = uara.length; i <= l; i++) {
      while (val % uara[i] < val) {
        str += urom[i];
        val -= uara[i];
      }
    }
    return str;
  },
  lineUnwr: str => // remove line breaks
    str.replace(/(\S) *\n(?!\n|#|>|[:*+~-]? |\d+\.\s|$)/g, "$1 "),
  lineWrap: str => { // insert line breaks
    let cpl = 72, // width: 72 cpl
      brk = "\n", // break-string: \n
      cut = false,// cut words: no
      rex = ".{1," + cpl + "}(\\s|$)"
        + (cut ? "|.{" + cpl + "}|.+$" : "|\\S+?(\\s|$)");
    return str.match(new RegExp(rex, "g")).join(brk);
  },
  sortA2Z: str =>
    // re-sort a list of words alphabetically
    str.trim().split("\n").sort().join("\n"),
  lineCount: str => {
    // sequentially number each line of text
    let ct = 0, sp = ["", " ", "  ", "   "];
    return str.trim()
    .replace( /^/gm, () =>
      (++ct > 999 ? sp[0] : ct > 99 ? sp[1] : ct > 9 ? sp[2] : sp[3])
      + ct + sp[1] );
  },
  htmTxt: str => "" + str // prep HTML text for browser display as unrendered source code
    .replace(/&(?=#?\w+;)/g, "&amp;")
    .replace( /<(!--)|<([!/]?[a-z].*?)(>|(?=<|$))|(--)>/gim,
      (m, c1, c2, c3, c4) => (c4 ? "" : "&lt;") + (c1 || c2 || c4) + (c1 || !c3 ? "" : "&gt;") ),
  srcvPrep: (str = "", lang) => {
    // apply HighlightJS syntax tags to HTML/CSS/JS/JSON text
    let ntxta = document.createElement('textarea');
    ntxta.textContent = str = "" + str;
    return !window.hljs || lang === "nohighlight" ? ntxta.innerHTML
    : (!lang ? hljs.highlightAuto(str) : hljs.highlight(str, {language: lang})).value
      .replace(lang !== "md" ? /^\*$/ : /\\x2a;/g, "*")
      .replace(lang !== "md" ? /^_$/ : /\\x5f;/g, "_");
  },
  prettyCSS: str => str // q+d CSS prettify
    .replace(/([;}])\s*/g, "$1\n")
    .replace( / *\{([^{}]+)}\s*/g, (m, c1) =>
      " {\n" + c1.trim().replace(/^/gm, "  ") + "\n}\n" ),
  prettyJSON: str => str // q+d JSON prettify
    .replace(/(,|)\s*(?=["[{])/g, "$1\n")
    .replace( /^\s*\{([^]*?)}\s*/gm, (m, c1) =>
      "{\n" + c1.trim().replace(/^/gm, "  ") + "\n}\n" ),
  mdeflistPar: str => // enable paragraphs in MD definition list
    str.replace(/^[:~] +.+\n\n(?!  |:|~|.+\n\n?[:~])/gm, "$&    <!-- -->\n\n"),
  mtheadsAfix: str =>
    // prep headless, minimal MD table by inserting MD thead tags
    // note: thead column pattern matches last row
    str
    .replace(/\n.*?\|.*\n?$/, "$&\n\n")
    .replace(/^(?=.*?\|.*\n?)/, "\n")
    .replace( /^((?:\| *|(?= *[^\s|]))(?:(?:\\\\)*\\\||[^\n|])*\|.*\n)+\n/gm, (m, c1) => {
      c1 = "| " + c1.replace(/(?: *\||)\n$|^\| */g, "") + " |\n";
      return "\n" + c1.replace(/(?:(?:\\\\)*\\\||[^\n|])+/g, "   ")
        + c1.replace(/(?:(?:\\\\)*\\\||[^\n|])+/g, " - ") + m;
    }),
  mmarkXtract: str => {
    // extract & append list of all marked phrases in MD doc
    let annos = "\n<!-- texthl\n";
    return str
    .replace( /(\W|^)==([^]+?)==(?=\W|$)/g,
      (m, c1, c2) => { annos += c2 + "\n\n"; return c1 + c2; })
    + annos + "-->\n";
  },
  texhlXtract: str => {
    // extract list of all highlighted phrases in Tex doc
    let annos = ["<!-- texthl"];
    str.replace( /.+/g, m =>
      !(m = m.match(/hl\\\{.+?(?=\\\})/g)) || (annos = annos.concat(m, "")) );
    return annos.join("\n").replace(/^hl\\\{/gm, "") + "-->";
  },
  jcmtXtract: str =>
    // extract list of comments & function names within JavaScript file
    str
    .replace(/^ *\/\/\S.*?\n|^ ? ?( *\/\/ .+\n)|^ ?( *).+?( \/\/ .+\n)|^ *(.*?\bfunction\b.+? {\n)|^.*?\n(\n)*/gm, "$1$2$3$4$5")
    .trim(),
  dboxDirlist: str => // extract folder/file names from Dropbox folder meta data
    str.replace(/^ *"path_display": "(.*?)",(\n)|.*\n/gm, "$1$2"),
  gmailCleanup: str =>
    // standardize spaces, blank lines, blockquotes of Google-email content
    str
    .replace(/(\S  )[ \t]*$|\t+$|^[ \t]+$/gm, "$1")
    .replace(/^\n\n+/gm, "\n")
    .replace(/\S(?=\n.)/g, "$&  ")
    .replace (/^[ \t]+(?=\S)/gm, "> ")
};
