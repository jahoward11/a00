window.ecoqjs = { // 17
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
  lineUnwr: str =>
    str.replace(/(\S) *\n(?!\n|#|>|[:*+~-]? |\d+\.\s|$)/g, "$1 "),
  lineWrap: str => {
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
    // sequentially number each line of the text
    let ct = 0, sp = ["", " ", "  ", "   "];
    return str.trim()
    .replace( /^/gm, () =>
      (++ct > 999 ? sp[0] : ct > 99 ? sp[1] : ct > 9 ? sp[2] : sp[3])
      + ct + sp[1] );
  },
  prettyCSS: str =>
    // q+d css prettify
    str
    .replace(/([;}])\s*/g, "$1\n")
    .replace( / *\{([^{}]+)}\s*/g, (m, c1) =>
      " {\n" + c1.trim().replace(/^/gm, "  ") + "\n}\n" ),
  prettyJSON: str =>
    // q+d json prettify
    str
    .replace(/(,|)\s*(?=["[{])/g, "$1\n")
    .replace( /^\s*\{([^]*?)}\s*/gm, (m, c1) =>
      "{\n" + c1.trim().replace(/^/gm, "  ") + "\n}\n" ),
  mdDeflistPar: str =>
    // enable paragraphs in definition list
    str.replace(/^[:~] +.+\n\n(?!  |:|~|.+\n\n?[:~])/gm, "$&    <!-- -->\n\n"),
  mdTheadsAfix: str =>
    // prep headless, minimal md table by inserting md thead tags
    // note: thead column pattern matches last row
    str
    .replace(/\n.*?\|.*\n?$/, "$&\n\n")
    .replace(/^(?=.*?\|.*\n?)/, "\n")
    .replace( /^((?:\| *|(?= *[^\s|]))(?:(?:\\\\)*\\\||[^\n|])*\|.*\n)+\n/gm, (m, c1) => {
      c1 = "| " + c1.replace(/(?: *\||)\n$|^\| */g, "") + " |\n";
      return "\n" + c1.replace(/(?:(?:\\\\)*\\\||[^\n|])+/g, "   ")
        + c1.replace(/(?:(?:\\\\)*\\\||[^\n|])+/g, " - ") + m;
    }),
  mdMarkXtract: str => {
    // extract & append a list of all marked phrases in a md doc
    let annos = "\n<!-- texthl\n";
    return str
    .replace( /(\W|^)==([^]+?)==(?=\W|$)/g,
      (m, c1, c2) => { annos += c2 + "\n\n"; return c1 + c2; })
    + annos + "-->\n";
  },
  texhlXtract: str => {
    // extract a list of all highlighted phrases in a tex doc
    let annos = ["<!-- texthl"];
    str.replace( /.+/g, m =>
      !(m = m.match(/hl\\\{.+?(?=\\\})/g)) || (annos = annos.concat(m, "")) );
    return annos.join("\n").replace(/^hl\\\{/gm, "") + "-->";
  },
  jsCmntXtract: str =>
    // extract a list of comments & function names within script file
    str
    .replace(/^ *\/\/\S.*?\n|^ ? ?( *\/\/ .+\n)|^ ?( *).+?( \/\/ .+\n)|^ *(.*?\bfunction\b.+? {\n)|^.*?\n(\n)*/gm, "$1$2$3$4$5")
    .trim(),
  dboxDirlist: str =>
    // extract folder/file names from Dropbox folder meta data
    str.replace(/^ *"path_display": "(.*?)",(\n)|.*\n/gm, "$1$2"),
  gmailCleanup: str =>
    // standardize spaces, blank lines, blockquotes of google-email content
    str
    .replace(/(\S  )[ \t]*$|\t+$|^[ \t]+$/gm, "$1")
    .replace(/^\n\n+/gm, "\n")
    .replace(/\S(?=\n.)/g, "$&  ")
    .replace (/^[ \t]+(?=\S)/gm, "> ")
};
