window.ecomjs = window.ecomjs || {}; // 20

ecomjs.spachars = [
  [9, "Horizontal tab, \\t", "&Tab;"],
  [10, "Line feed, \\n", "&NewLine;"],
  [11, "Vertical tab, \\v"],
  [12, "Form-feed, \\f"],
  [13, "Carriage return, \\r"],
  [32, "Space"],
  [160, "No-break space", "&nbsp; &NonBreakingSpace;"],
  [173, "Soft hyphen", "&shy;"],
  [6158, "Mongolian vowel separator"],
  [8192, "En quad"],
  [8193, "Em quad; mutton quad"],
  [8194, "En space; nut", "&ensp;"],
  [8195, "Em space; mutton", "&emsp;"],
  [8196, "Three-per-em space; thick space", "&emsp13;"],
  [8197, "Four-per-em space; mid space", "&emsp14;"],
  [8198, "Six-per-em space"],
  [8199, "Figure space", "&numsp;"],
  [8200, "Punctuation space", "&puncsp;"],
  [8201, "Thin space", "&thinsp; &ThinSpace;"],
  [8202, "Hair space", "&hairsp; &VeryThinSpace;"],
  [8203, "Zero width space", "&ZeroWidthSpace;"], // &NegativeVeryThinSpace; &NegativeThinSpace; &NegativeMediumSpace; &NegativeThickSpace;
  [8204, "Zero width non joiner", "&zwnj;"],
  [8205, "Zero width joiner", "&zwj;"],
  [8206, "Left-to-right mark", "&lrm;"],
  [8207, "Right-to-left mark", "&rlm;"],
  [8208, "Hyphen", "&dash; &hyphen;"],
  [8209, "Non-breaking hyphen"],
  [8232, "Line separator"],
  [8233, "Paragraph separator"],
  [8239, "Narrow no-break space"],
  [8287, "Medium mathematical space", "&MediumSpace;"],
  [8288, "Word joiner", "&NoBreak;"],
  [8289, "Function application", "&af; &ApplyFunction;"],
  [8290, "Invisible times", "&it; &InvisibleTimes;"],
  [8291, "Invisible separator", "&ic; &InvisibleComma;"],
  [12288, "Ideographic space (used for example as tai tou)"],
  [65279, "Byte Order Mark (zero width no-break space, deprecated)"],
  [183, "Middle dot", "&middot; &centerdot; &CenterDot;"],
  [5760, "Ogham space mark"],
  [9085, "Shouldered open box"],
  [9248, "Symbol for space"],
  [9250, "Blank symbol"],
  [9251, "Open box"]
];

ecomjs.latchars = [
  [9, "Horizontal tab, \\t", "&Tab;"],
  [10, "Line feed, \\n", "&NewLine;"],
  [11, "Vertical tab, \\v"],
  [12, "Form-feed, \\f"],
  [13, "Carriage return, \\r"],
  [32, "Space"],
  [33, "Exclamation mark", "&excl;"],
  [34, "Quotation mark", "&quot; &QUOT;"],
  [35, "Number sign", "&num;"],
  [36, "Dollar sign", "&dollar;"],
  [37, "Percent sign", "&percnt;"],
  [38, "Ampersand (AND sign)", "&amp; &AMP;"],
  [39, "Apostrophe", "&apos;"],
  [40, "Left parenthesis", "&lpar;"],
  [41, "Right parenthesis", "&rpar;"],
  [42, "Asterisk (star)", "&ast; &midast;"],
  [43, "Plus sign", "&plus;"],
  [44, "Comma", "&comma;"],
  [45, "Hyphen-minus"],
  [46, "Full stop", "&period;"],
  [47, "Solidus", "&sol;"],
  [48, "Digit zero"],
  [49, "Digit one"],
  [50, "Digit two"],
  [51, "Digit three"],
  [52, "Digit four"],
  [53, "Digit five"],
  [54, "Digit six"],
  [55, "Digit seven"],
  [56, "Digit eight"],
  [57, "Digit nine"],
  [58, "Colon", "&colon;"],
  [59, "Semi-colon", "&semi;"],
  [60, "Less-than sign", "&lt; &LT;"],
  [61, "Equals sign", "&equals;"],
  [62, "Greater-than sign", "&gt; &GT;"],
  [63, "Question mark", "&quest;"],
  [64, "Commercial at", "&commat;"],
  [65, "Latin capital letter A"],
  [66, "Latin capital letter B"],
  [67, "Latin capital letter C"],
  [68, "Latin capital letter D"],
  [69, "Latin capital letter E"],
  [70, "Latin capital letter F"],
  [71, "Latin capital letter G"],
  [72, "Latin capital letter H"],
  [73, "Latin capital letter I"],
  [74, "Latin capital letter J"],
  [75, "Latin capital letter K"],
  [76, "Latin capital letter L"],
  [77, "Latin capital letter M"],
  [78, "Latin capital letter N"],
  [79, "Latin capital letter O"],
  [80, "Latin capital letter P"],
  [81, "Latin capital letter Q"],
  [82, "Latin capital letter R"],
  [83, "Latin capital letter S"],
  [84, "Latin capital letter T"],
  [85, "Latin capital letter U"],
  [86, "Latin capital letter V"],
  [87, "Latin capital letter W"],
  [88, "Latin capital letter X"],
  [89, "Latin capital letter Y"],
  [90, "Latin capital letter Z"],
  [91, "Left square bracket", "&lsqb; &lbrack;"],
  [92, "Reverse solidus", "&bsol;"],
  [93, "Right square bracket", "&rsqb; &rbrack;"],
  [94, "Circumflex accent", "&Hat;"],
  [95, "Low line", "&lowbar;"],
  [96, "Grave accent", "&grave; &DiacriticalGrave;"],
  [97, "Latin small letter a"],
  [98, "Latin small letter b"],
  [99, "Latin small letter c"],
  [100, "Latin small letter d"],
  [101, "Latin small letter e"],
  [102, "Latin small letter f"],
  [103, "Latin small letter g"],
  [104, "Latin small letter h"],
  [105, "Latin small letter i"],
  [106, "Latin small letter j"],
  [107, "Latin small letter k"],
  [108, "Latin small letter l"],
  [109, "Latin small letter m"],
  [110, "Latin small letter n"],
  [111, "Latin small letter o"],
  [112, "Latin small letter p"],
  [113, "Latin small letter q"],
  [114, "Latin small letter r"],
  [115, "Latin small letter s"],
  [116, "Latin small letter t"],
  [117, "Latin small letter u"],
  [118, "Latin small letter v"],
  [119, "Latin small letter w"],
  [120, "Latin small letter x"],
  [121, "Latin small letter y"],
  [122, "Latin small letter z"],
  [123, "Left curly bracket", "&lcub; &lbrace;"],
  [124, "Vertical line", "&vert; &verbar; &VerticalLine;"],
  [125, "Right curly bracket", "&rcub; &rbrace;"],
  [126, "Tilde"],
  [127, "[Control] (undefined)"],
  [128, "[Control] (0x20ac Euro)", "&euro;"],
  [129, "[Control] (undefined)"],
  [130, "[Control] (0x201a Single low-quote)", "&lsquor; &sbquo;"],
  [131, "[Control] (0x192 Function symbol)", "&fnof;"],
  [132, "[Control] (0x201e Double low-quote)", "&ldquor; &bdquo;"],
  [133, "[Control] (0x2026 Ellipsis)", "&hellip; &mldr;"],
  [134, "[Control] (0x2020 Dagger)", "&dagger;"],
  [135, "[Control] (0x2021 Double dagger)", "&Dagger; &ddagger;"],
  [136, "[Control] (0x2c6 Hatchek)", "&circ;"],
  [137, "[Control] (0x2030 Per mille sign)", "&permil;"],
  [138, "[Control] (0x160 Uppercase esh)", "&Scaron;"],
  [139, "[Control] (0x2039 Left single angle quote)", "&lsaquo;"],
  [140, "[Control] (0x152 Uppercase OE ligature)", "&OElig;"],
  [141, "[Control] (undefined)"],
  [142, "[Control] (0x17d Uppercase Z with caron)", "&Zcaron;"],
  [143, "[Control] (undefined)"],
  [144, "[Control] (undefined)"],
  [145, "[Control] (0x2018 Left single-quote)", "&lsquo; &OpenCurlyQuote;"],
  [146, "[Control] (0x2019 Right single-quote)", "&rsquo; &rsquor; &CloseCurlyQuote;"],
  [147, "[Control] (0x201c Left double-quote)", "&ldquo; &OpenCurlyDoubleQuote;"],
  [148, "[Control] (0x201d Right double-quote)", "&rdquo; &rdquor; &CloseCurlyDoubleQuote;"],
  [149, "[Control] (0x2022 Small bullet)", "&bull; &bullet;"],
  [150, "[Control] (0x2013 En dash)", "&ndash;"],
  [151, "[Control] (0x2014 Em dash)", "&mdash;"],
  [152, "[Control] (0x2dc Small tilde)", "&tilde; &DiacriticalTilde;"],
  [153, "[Control] (0x2122 Trademark)", "&trade;"],
  [154, "[Control] (0x161 Lowercase esh)", "&scaron;"],
  [155, "[Control] (0x203a Right single angle quote)", "&rsaquo;"],
  [156, "[Control] (0x153 Lowercase oe ligature)", "&oelig;"],
  [157, "[Control] (undefined)"],
  [158, "[Control] (0x17e Lowercase z with caron)", "&zcaron;"],
  [159, "[Control] (0x178 Uppercase Y-umlaut)", "&Yuml;"],
  [160, "No-break space", "&nbsp; &NonBreakingSpace;"],
  [161, "Inverted exclamation mark", "&iexcl;"],
  [162, "Cent sign", "&cent;"],
  [163, "Pound sign", "&pound;"],
  [164, "Currency sign", "&curren;"],
  [165, "Yen sign", "&yen;"],
  [166, "Broken bar", "&brvbar;"],
  [167, "Section sign", "&sect;"],
  [168, "Diaeresis (umlaut)", "&uml; &die; &Dot; &DoubleDot;"],
  [169, "Copyright sign", "&copy; &COPY;"],
  [170, "Feminine ordinal indicator (superscript lowercase a)", "&ordf;"],
  [171, "Left-pointing double angle quotation mark", "&laquo;"],
  [172, "Not sign", "&not;"],
  [173, "Soft hyphen", "&shy;"],
  [174, "Registered sign", "&reg; &REG; &circledR;"],
  [175, "Macron", "&macr; &strns; &OverBar;"],
  [176, "Degree sign", "&deg;"],
  [177, "Plus-minus sign", "&pm; &plusmn; &PlusMinus;"],
  [178, "Superscript two", "&sup2;"],
  [179, "Superscript three", "&sup3;"],
  [180, "Acute accent", "&acute; &DiacriticalAcute;"],
  [181, "Micro sign", "&micro;"],
  [182, "Pilcrow sign (paragraph)", "&para;"],
  [183, "Middle dot", "&middot; &centerdot; &CenterDot;"],
  [184, "Cedilla", "&cedil; &Cedilla;"],
  [185, "Superscript one", "&sup1;"],
  [186, "Masculine ordinal indicator (superscript lowercase o)", "&ordm;"],
  [187, "Right-pointing double angle quotation mark", "&raquo;"],
  [188, "Vulgar fraction one quarter", "&frac14;"],
  [189, "Vulgar fraction one half", "&frac12; &half;"],
  [190, "Vulgar fraction three quarters", "&frac34;"],
  [191, "Inverted question mark", "&iquest;"],
  [192, "A with grave", "&Agrave;"],
  [193, "A with acute", "&Aacute;"],
  [194, "A with circumflex", "&Acirc;"],
  [195, "A with tilde", "&Atilde;"],
  [196, "A with diaeresis", "&Auml;"],
  [197, "A with ring above", "&Aring;"],
  [198, "AE (ligature)", "&AElig;"],
  [199, "C with cedilla", "&Ccedil;"],
  [200, "E with grave", "&Egrave;"],
  [201, "E with acute", "&Eacute;"],
  [202, "E with circumflex", "&Ecirc;"],
  [203, "E with diaeresis", "&Euml;"],
  [204, "I with grave", "&Igrave;"],
  [205, "I with acute", "&Iacute;"],
  [206, "I with circumflex", "&Icirc;"],
  [207, "I with diaeresis", "&Iuml;"],
  [208, "Eth", "&ETH;"],
  [209, "N with tilde (enye)", "&Ntilde;"],
  [210, "O with grave", "&Ograve;"],
  [211, "O with acute", "&Oacute;"],
  [212, "O with circumflex", "&Ocirc;"],
  [213, "O with tilde", "&Otilde;"],
  [214, "O with diaeresis", "&Ouml;"],
  [215, "Multiplication sign", "&times;"],
  [216, "O with stroke", "&Oslash;"],
  [217, "U with grave", "&Ugrave;"],
  [218, "U with acute", "&Uacute;"],
  [219, "U with circumflex", "&Ucirc;"],
  [220, "U with diaeresis", "&Uuml;"],
  [221, "Y with acute", "&Yacute;"],
  [222, "Thorn", "&THORN;"],
  [223, "SZ (ligature)", "&szlig;"],
  [224, "a with grave", "&agrave;"],
  [225, "a with acute", "&aacute;"],
  [226, "a with circumflex", "&acirc;"],
  [227, "a with tilde", "&atilde;"],
  [228, "a with diaeresis", "&auml;"],
  [229, "a with ring above", "&aring;"],
  [230, "ae (ligature)", "&aelig;"],
  [231, "c with cedilla", "&ccedil;"],
  [232, "e with grave", "&egrave;"],
  [233, "e with acute", "&eacute;"],
  [234, "e with circumflex", "&ecirc;"],
  [235, "e with diaeresis", "&euml;"],
  [236, "i with grave", "&igrave;"],
  [237, "i with acute", "&iacute;"],
  [238, "i with circumflex", "&icirc;"],
  [239, "i with diaeresis", "&iuml;"],
  [240, "eth", "&eth;"],
  [241, "n with tilde", "&ntilde;"],
  [242, "o with grave", "&ograve;"],
  [243, "o with acute", "&oacute;"],
  [244, "o with circumflex", "&ocirc;"],
  [245, "o with tilde", "&otilde;"],
  [246, "o with diaeresis", "&ouml;"],
  [247, "Division sign", "&divide;"],
  [248, "o with stroke", "&oslash;"],
  [249, "u with grave", "&ugrave;"],
  [250, "u with acute", "&uacute;"],
  [251, "u with circumflex", "&ucirc;"],
  [252, "u with diaeresis", "&uuml;"],
  [253, "y with acute", "&yacute;"],
  [254, "thorn", "&thorn;"],
  [255, "y with diaeresis", "&yuml;"]
];

ecomjs.grechars = [
  [913, "Greek capital letter Alpha", "&Alpha;"],
  [914, "Greek capital letter Beta", "&Beta;"],
  [915, "Greek capital letter Gamma", "&Gamma;"],
  [916, "Greek capital letter Delta", "&Delta;"],
  [917, "Greek capital letter Epsilon", "&Epsilon;"],
  [918, "Greek capital letter Zeta", "&Zeta;"],
  [919, "Greek capital letter Eta", "&Eta;"],
  [920, "Greek capital letter Theta", "&Theta;"],
  [921, "Greek capital letter Iota", "&Iota;"],
  [922, "Greek capital letter Kappa", "&Kappa;"],
  [923, "Greek capital letter Lambda", "&Lambda;"],
  [924, "Greek capital letter Mu", "&Mu;"],
  [925, "Greek capital letter Nu", "&Nu;"],
  [926, "Greek capital letter Xi", "&Xi;"],
  [927, "Greek capital letter Omicron", "&Omicron;"],
  [928, "Greek capital letter Pi", "&Pi;"],
  [929, "Greek capital letter Rho", "&Rho;"],
  [930, "(Greek and Coptic U+003A2)"],
  [931, "Greek capital letter Sigma", "&Sigma;"],
  [932, "Greek capital letter Tau", "&Tau;"],
  [933, "Greek capital letter Upsilon", "&Upsilon;"],
  [934, "Greek capital letter Phi", "&Phi;"],
  [935, "Greek capital letter Chi", "&Chi;"],
  [936, "Greek capital letter Psi", "&Psi;"],
  [937, "Greek capital letter Omega", "&Omega;"],
  [945, "Greek small letter alpha", "&alpha;"],
  [946, "Greek small letter beta", "&beta;"],
  [947, "Greek small letter gamma", "&gamma;"],
  [948, "Greek small letter delta", "&delta;"],
  [949, "Greek small letter epsilon", "&epsi; &epsilon;"],
  [950, "Greek small letter zeta", "&zeta;"],
  [951, "Greek small letter eta", "&eta;"],
  [952, "Greek small letter theta", "&theta;"],
  [953, "Greek small letter iota", "&iota;"],
  [954, "Greek small letter kappa", "&kappa;"],
  [955, "Greek small letter lambda", "&lambda;"],
  [956, "Greek small letter mu", "&mu;"],
  [957, "Greek small letter nu", "&nu;"],
  [958, "Greek small letter xi", "&xi;"],
  [959, "Greek small letter omicron", "&omicron;"],
  [960, "Greek small letter pi", "&pi;"],
  [961, "Greek small letter rho", "&rho;"],
  [962, "Greek small letter final sigma", "&sigmaf; &sigmav; &varsigma;"],
  [963, "Greek small letter sigma", "&sigma;"],
  [964, "Greek small letter tau", "&tau;"],
  [965, "Greek small letter upsilon", "&upsi; &upsilon;"],
  [966, "Greek small letter phi", "&phi;"],
  [967, "Greek small letter chi", "&chi;"],
  [968, "Greek small letter psi", "&psi;"],
  [969, "Greek small letter omega", "&omega;"],
  [975, "Greek capital Kai symbol"],
  [976, "Greek beta symbol"],
  [977, "Greek theta symbol", "&thetasym; &thetav; &vartheta;"],
  [978, "Greek upsilon with hook symbol", "&Upsi; &upsih;"],
  [979, "Greek upsilon with acute and hook symbol"],
  [980, "Greek upsilon with diaeresis and hook symbol"],
  [981, "Greek phi symbol", "&phiv; &varphi; &straightphi;"],
  [982, "Greek pi symbol", "&piv; &varpi;"],
  [983, "Greek kai symbol"],
  [988, "Greek letter digamma", "&Gammad;"],
  [989, "Greek small letter digamma", "&gammad; &digamma;"],
  [1008, "Greek kappa symbol", "&kappav; &varkappa;"],
  [1009, "Greek rho symbol", "&rhov; &varrho;"],
  [1013, "Greek lunate epsilon symbol", "&epsiv; &varepsilon; &straightepsilon;"],
  [1014, "Greek reversed lunate epsilon symbol", "&bepsi; &backepsilon;"]
];

ecomjs.symchars = [
  [338, "Capital ligature OE", "&OElig;"],
  [339, "Small ligature oe", "&oelig;"],
  [352, "Capital S with caron", "&Scaron;"],
  [353, "Small s with caron", "&scaron;"],
  [376, "Capital Y with diaeres", "&Yuml;"],
  [381, "Capital Z with caron", "&Zcaron;"],
  [382, "Small z with caron", "&zcaron;"],
  [402, "Function symbol (lowercase f with hook)", "&fnof;"],
  [710, "Modifier letter circumflex accent", "&circ;"],
  [711, "Caron", "&caron; &Hacek;"],
  [713, "Modifier letter macron"],
  [717, "Modifier letter low macron"],
  [728, "Breve", "&breve; &Breve;"],
  [729, "Dot above", "&dot; &DiacriticalDot;"],
  [730, "Ring above", "&ring;"],
  [731, "Ogonek", "&ogon;"],
  [732, "Small tilde", "&tilde; &DiacriticalTilde;"],
  [733, "Double acute accent", "&dblac; &DiacriticalDoubleAcute;"],
  [735, "Modifier letter cross accent"],
  [759, "Low tilde"],
  [768, "Combining grave accent"],
  [769, "Combining acute accent"],
  [770, "Combining circumflex accent"],
  [771, "Combining tilde"],
  [772, "Combining macron"],
  [773, "Combining overline"],
  [774, "Combining breve"],
  [775, "Combining dot above"],
  [776, "Combining diaeresis"],
  [785, "Combining inverted breve", "&DownBreve;"],
  [816, "Combining tilde below"],
  [817, "Combining macron below"],
  [818, "Combining low line", "&UnderBar;"],
  [821, "Combining short stroke overlay"],
  [822, "Combining long stroke overlay"],
  [823, "Combining short solidus overlay"],
  [824, "Combining long solidus overlay"],
  [8208, "Hyphen", "&dash; &hyphen;"],
  [8209, "Non-breaking hyphen"],
  [8210, "Figure dash"],
  [8211, "En dash", "&ndash;"],
  [8212, "Em dash", "&mdash;"],
  [8213, "Horizontal bar", "&horbar;"],
  [8214, "Vertical bar", "&Vert; &Verbar;"],
  [8216, "Left single quotation mark", "&lsquo; &OpenCurlyQuote;"],
  [8217, "Right single quotation mark", "&rsquo; &rsquor; &CloseCurlyQuote;"],
  [8218, "Single low-9 quotation mark", "&lsquor; &sbquo;"],
  [8220, "Left double quotation mark", "&ldquo; &OpenCurlyDoubleQuote;"],
  [8221, "Right double quotation mark", "&rdquo; &rdquor; &CloseCurlyDoubleQuote;"],
  [8222, "Double low-9 quotation mark", "&ldquor; &bdquo;"],
  [8224, "Dagger", "&dagger;"],
  [8225, "Double dagger", "&Dagger; &ddagger;"],
  [8226, "Bullet", "&bull; &bullet;"],
  [8227, "Triangular bullet"],
  [8229, "Two-dot leader", "&nldr;"],
  [8230, "Horizontal ellipsis", "&mldr; &hellip;"],
  [8240, "Per mille sign", "&permil;"],
  [8241, "Per ten thousand sign", "&pertenk;"],
  [8242, "Prime (minutes)", "&prime;"],
  [8243, "Double prime (seconds)", "&Prime;"],
  [8244, "Triple prime", "&tprime;"],
  [8245, "Reversed prime", "&bprime; &backprime;"],
  [8249, "Single left-pointing angle quotation mark", "&lsaquo;"],
  [8250, "Single right-pointing angle quotation mark", "&rsaquo;"],
  [8254, "Overline", "&oline;"],
  [8257, "Caret insertion point", "&caret;"],
  [8259, "Hyphen bullet", "&hybull;"],
  [8260, "Fraction slash", "&frasl;"],
  [8271, "Reversed semicolon", "&bsemi;"],
  [8279, "Quadruple prime", "&qprime;"],
  [8304, "Superscript zero"],
  [8308, "Superscript four"],
  [8309, "Superscript five"],
  [8310, "Superscript six"],
  [8311, "Superscript seven"],
  [8312, "Superscript eight"],
  [8313, "Superscript nine"],
  [8314, "Superscript plus sign"],
  [8315, "Superscript minus"],
  [8316, "Superscript equals sign"],
  [8317, "Superscript left parenthesis"],
  [8318, "Superscript right parenthesis"],
  [8320, "Subscript zero"],
  [8321, "Subscript one"],
  [8322, "Subscript two"],
  [8323, "Subscript three"],
  [8324, "Subscript four"],
  [8325, "Subscript five"],
  [8326, "Subscript six"],
  [8327, "Subscript seven"],
  [8328, "Subscript eight"],
  [8329, "Subscript nine"],
  [8330, "Subscript plus sign"],
  [8331, "Subscript minus"],
  [8332, "Subscript equals sign"],
  [8333, "Subscript left parenthesis"],
  [8334, "Subscript right parenthesis"],
  [8364, "Euro", "&euro;"],
  [8411, "Combining three dots above", "&tdot; &TripleDot;"],
  [8412, "Combining four dots above", "&DotDot;"],
  [8413, "Combining enclosing circle"],
  [8414, "Combining enclosing square"],
  [8415, "Combining enclosing diamond"],
  [8416, "Combining enclosing circle backslash"],
  [8450, "Double-struck capital C", "&Copf; &complexes;"],
  [8452, "Centerline"],
  [8453, "Care of", "&incare;"],
  [8461, "Double-struck capital H", "&Hopf; &quaternions;"],
  [8469, "Double-struck capital N", "&Nopf; &naturals;"],
  [8470, "Numero sign", "&numero;"],
  [8471, "Sound recording copyright", "&copysr;"],
  [8473, "Double-struck capital P", "&Popf; &primes;"],
  [8474, "Double-struck capital Q", "&Qopf; &rationals;"],
  [8477, "Double-struck capital R", "&Ropf; &reals;"],
  [8478, "Prescription take", "&rx;"],
  [8482, "Trademark", "&trade;"],
  [8484, "Double-struck capital Z", "&Zopf; &integers;"],
  [8528, "Vulgar fraction one seventh"],
  [8529, "Vulgar fraction one ninth"],
  [8530, "Vulgar fraction one tenth"],
  [8531, "Vulgar fraction one third", "&frac13;"],
  [8532, "Vulgar fraction two thirds", "&frac23;"],
  [8533, "Vulgar fraction one fifth", "&frac15;"],
  [8534, "Vulgar fraction two fifths", "&frac25;"],
  [8535, "Vulgar fraction three fifths", "&frac35;"],
  [8536, "Vulgar fraction four fifths", "&frac45;"],
  [8537, "Vulgar fraction one sixth", "&frac16;"],
  [8538, "Vulgar fraction five sixths", "&frac56;"],
  [8539, "Vulgar fraction one eighth", "&frac18;"],
  [8540, "Vulgar fraction three eighths", "&frac38;"],
  [8541, "Vulgar fraction five eighths", "&frac58;"],
  [8542, "Vulgar fraction seven eighths", "&frac78;"],
  [8543, "Fraction numerator one"],
  [8592, "Left arrow", "&larr; &slarr; &leftarrow; &LeftArrow; &ShortLeftArrow;"],
  [8593, "Up arrow", "&uarr; &uparrow; &UpArrow; &ShortUpArrow;"],
  [8594, "Right arrow", "&rarr; &srarr; &rightarrow; &RightArrow; &ShortRightArrow;"],
  [8595, "Down arrow", "&darr; &downarrow; &DownArrow; &ShortDownArrow;"],
  [8596, "Left right arrow", "&harr; &leftrightarrow; &LeftRightArrow;"],
  [8597, "Up down arrow", "&varr; &updownarrow; &UpDownArrow;"],
  [8617, "Leftwards arrow with hook", "&larrhk; &hookleftarrow;"],
  [8618, "Rightwards arrow with hook", "&rarrhk; &hookrightarrow;"],
  [8619, "Leftwards arrow with loop", "&larrlp; &looparrowleft;"],
  [8620, "Rightwards arrow with loop", "&rarrlp; &looparrowright;"],
  [8624, "Upwards arrow with tip leftwards", "&lsh; &Lsh;"],
  [8625, "Upwards arrow with tip rightwards", "&rsh; &Rsh;"],
  [8626, "Downwards arrow with tip leftwards", "&ldsh;"],
  [8627, "Downwards arrow with tip rightwards", "&rdsh;"],
  [8629, "Carriage return arrow", "&crarr;"],
  [8634, "Anticlockwise open circle arrow", "&olarr; &circlearrowleft;"],
  [8635, "Clockwise open circle arrow", "&orarr; &circlearrowright;"],
  [8644, "R arrow over L arrow", "&rlarr; &rightleftarrows; &RightArrowLeftArrow;"],
  [8646, "L arrow over R arrow", "&lrarr; &leftrightarrows; &LeftArrowRightArrow;"],
  [8651, "L harpoon over R harpoon", "&lrhar; &ReverseEquilibrium; &leftrightharpoons;"],
  [8652, "R harpoon over L harpoon", "&rlhar; &rightleftharpoons; &Equilibrium;"],
  [8656, "Leftwards double arrow", "&lArr; &Leftarrow; &DoubleLeftArrow;"],
  [8657, "Upwards double arrow", "&uArr; &Uparrow; &DoubleUpArrow;"],
  [8658, "Rightwards double arrow", "&rArr; &Rightarrow; &Implies; &DoubleRightArrow;"],
  [8659, "Downwards double arrow", "&dArr; &Downarrow; &DoubleDownArrow;"],
  [8660, "Left right double arrow", "&hArr; &iff; &Leftrightarrow; &DoubleLeftRightArrow;"],
  [8661, "Up down double arrow", "&vArr; &Updownarrow; &DoubleUpDownArrow;"],
  [8704, "For all", "&forall; &ForAll;"],
  [8706, "Partial differential", "&part; &PartialD;"],
  [8707, "There exists", "&exist; &Exists;"],
  [8708, "There does not exist", "&nexist; &NotExists; &nexists;"],
  [8709, "Empty set", "&empty; &emptyset; &emptyv; &varnothing;"],
  [8711, "Nabla", "&nabla; &Del;"],
  [8712, "Element of ", "&in; &isin; &isinv; &Element;"],
  [8713, "Not an element of", "&notin; &NotElement; &notinva;"],
  [8715, "Contains as member", "&ni; &niv; &ReverseElement; &SuchThat;"],
  [8716, "Does not contain as member", "&notni; &notniva; &NotReverseElement;"],
  [8719, "N-ary product", "&prod; &Product;"],
  [8721, "N-ary summation", "&sum; &Sum;"],
  [8722, "Minus sign", "&minus;"],
  [8725, "Division slash"],
  [8726, "Set minus", "&setmn; &setminus; &Backslash; &ssetmn; &smallsetminus;"],
  [8727, "Asterisk operator", "&lowast;"],
  [8730, "Square root", "&radic; &Sqrt;"],
  [8733, "Proportional to", "&prop; &propto; &Proportional; &vprop; &varpropto;"],
  [8734, "Infinity", "&infin;"],
  [8735, "Right angle", "&angrt;"],
  [8736, "Angle", "&ang; &angle;"],
  [8739, "Divides", "&mid; &smid; &shortmid; &VerticalBar;"],
  [8740, "Does not divide", "&nmid; &nsmid; &nshortmid; &NotVerticalBar;"],
  [8741, "Parallel to", "&par; &spar; &parallel; &shortparallel; &DoubleVerticalBar;"],
  [8742, "Not parallel to", "&npar; &nspar; &nparallel; &nshortparallel; &NotDoubleVerticalBar;"],
  [8743, "Logical AND", "&and; &wedge;"],
  [8744, "Logical OR", "&or; &vee;"],
  [8745, "Intersection", "&cap;"],
  [8746, "Union", "&cup;"],
  [8747, "Integral", "&int; &Integral;"],
  [8756, "Therefore", "&there4; &therefore; &Therefore;"],
  [8757, "Because", "&becaus; &because; &Because;"],
  [8758, "Ratio", "&ratio;"],
  [8759, "Proportion", "&Colon; &Proportion;"],
  [8764, "Tilde operator", "&sim; &Tilde; &thksim; &thicksim;"],
  [8769, "Not tilde", "&nsim; &NotTilde;"],
  [8773, "Approximately equal to", "&cong; &TildeFullEqual;"],
  [8776, "Almost equal to", "&asymp; &ap; &TildeTilde; &approx; &thkap; &thickapprox;"],
  [8777, "Not almost equal to", "&nap; &NotTildeTilde; &napprox;"],
  [8800, "Not equal to", "&ne; &NotEqual;"],
  [8801, "Identical to", "&equiv; &Congruent;"],
  [8802, "Not identical to", "&nequiv; &NotCongruent;"],
  [8804, "Less-than or equal to", "&le; &leq;"],
  [8805, "Greater-than or equal to", "&ge; &geq; &GreaterEqual;"],
  [8810, "Much less-than", "&Lt; &ll; &NestedLessLess;"],
  [8811, "Much greater-than", "&Gt; &gg; &NestedGreaterGreater;"],
  [8834, "Subset of", "&sub; &subset;"],
  [8835, "Superset of", "&sup; &supset; &Superset;"],
  [8836, "Not a subset of", "&nsub;"],
  [8837, "Not a superset of", "&nsup;"],
  [8838, "Subset of or equal to", "&sube; &SubsetEqual; &subseteq;"],
  [8839, "Superset of or equal to", "&supe; &supseteq; &SupersetEqual;"],
  [8840, "Neither a subset of nor equal to", "&nsube; &nsubseteq; &NotSubsetEqual;"],
  [8841, "Neither a superset of nor equal to", "&nsupe; &nsupseteq; &NotSupersetEqual;"],
  [8842, "Subset of with not equal to", "&subne; &subsetneq;"],
  [8843, "Superset of with not equal to", "&supne; &supsetneq;"],
  [8853, "Circled plus", "&oplus; &CirclePlus;"],
  [8854, "Circled minus", "&ominus; &CircleMinus;"],
  [8855, "Circled times", "&otimes; &CircleTimes;"],
  [8856, "Circled division slash", "&osol;"],
  [8857, "Circled dot operator", "&odot; &CircleDot;"],
  [8858, "Circled ring operator", "&ocir; &circledcirc;"],
  [8859, "Circled asterisk operator", "&oast; &circledast;"],
  [8861, "Circled dash", "&odash; &circleddash;"],
  [8862, "Squared plus", "&plusb; &boxplus;"],
  [8863, "Squared minus", "&minusb; &boxminus;"],
  [8864, "Squared times", "&timesb; &boxtimes;"],
  [8865, "Squared dot operator", "&sdotb; &dotsquare;"],
  [8866, "Right tack", "&vdash; &RightTee;"],
  [8867, "Left tack", "&dashv; &LeftTee;"],
  [8868, "Down tack", "&top; &DownTee;"],
  [8869, "Up tack", "&bot; &perp; &bottom; &UpTee;"],
  [8901, "Dot operator", "&sdot;"],
  [8942, "Vertical ellipsis", "&vellip;"],
  [8943, "Midline horizontal ellipsis"],
  [8968, "Left ceiling", "&lceil; &LeftCeiling;"],
  [8969, "Right ceiling", "&rceil; &RightCeiling;"],
  [8970, "Left floor", "&lfloor; &LeftFloor;"],
  [8971, "Right floor", "&rfloor; &RightFloor;"],
  [9472, "Box drawings light horizontal", "&boxh; &HorizontalLine;"],
  [9474, "Box drawings light vertical", "&boxv;"],
  [9484, "Box drawings light down and right", "&boxdr;"],
  [9488, "Box drawings light down and left", "&boxdl;"],
  [9492, "Box drawings light up and right", "&boxur;"],
  [9496, "Box drawings light up and left", "&boxul;"],
  [9585, "Box drawings light diagonal upper right to lower left"],
  [9586, "Box drawings light diagonal upper left to lower right"],
  [9587, "Box drawings light diagonal cross"],
  [9608, "Full block", "&block;"],
  [9633, "White square", "&squ; &square; &Square;"],
  [9645, "White rectangle", "&rect;"],
  [9650, "Black up-pointing triangle"],
  [9652, "Black up-pointing small triangle", "&utrif; &blacktriangle;"],
  [9654, "Black right-pointing triangle"],
  [9656, "Black right-pointing small triangle", "&rtrif; &blacktriangleright;"],
  [9658, "Black right-pointing pointer"],
  [9660, "Black down-pointing triangle"],
  [9662, "Black down-pointing small triangle", "&dtrif; &blacktriangledown;"],
  [9664, "Black left-pointing triangle"],
  [9666, "Black left-pointing small triangle", "&ltrif; &blacktriangleleft;"],
  [9670, "Black diamond"],
  [9671, "White diamond"],
  [9674, "Lozenge", "&loz; &lozenge;"],
  [9675, "White circle", "&cir;"],
  [9698, "Black lower right triangle"],
  [9699, "Black lower left triangle"],
  [9700, "Black upper left triangle"],
  [9701, "Black upper right triangle"],
  [9711, "Large circle", "&xcirc; &bigcirc;"],
  [9723, "White medium square", "&EmptySmallSquare;"],
  [9724, "Black medium square", "&FilledSmallSquare;"],
  [9728, "Black sun with rays"],
  [9729, "Cloud"],
  [9733, "Black star", "&starf; &bigstar;"],
  [9734, "White star", "&star;"],
  [9744, "Ballot box"],
  [9745, "Ballot box with check"],
  [9746, "Ballot box with X"],
  [9747, "Saltire"],
  [9760, "Skull and crossbones"],
  [9764, "Caduceus"],
  [9774, "Peace symbol"],
  [9776, "Three horizontal lines"],
  [9785, "White frowning face"],
  [9786, "White smiling face"],
  [9787, "Black smiling face"],
  [9788, "White sun with rays"],
  [9789, "First quarter moon"],
  [9790, "Last quarter moon"],
  [9792, "Female sign", "&female;"],
  [9794, "Male sign", "&male;"],
  [9824, "Black spade suit", "&spades; &spadesuit;"],
  [9825, "White heart suit"],
  [9826, "White diamond suit"],
  [9827, "Black club suit", "&clubs; &clubsuit;"],
  [9828, "White spade suit"],
  [9829, "Black heart suit", "&hearts; &heartsuit;"],
  [9830, "Black diamond suit", "&diams; &diamondsuit;"],
  [9831, "White club suit"],
  [9833, "Quarter note"],
  [9834, "Eighth note", "&sung;"],
  [9835, "Beamed eighth notes"],
  [9836, "Beamed sixteenth notes"],
  [9837, "Music flat sign", "&flat;"],
  [9838, "Music natural sign", "&natur; &natural;"],
  [9839, "Music sharp sign", "&sharp;"],
  [9842, "Universal recycling symbol"],
  [9850, "Recycling symbol for generic materials"],
  [9851, "Black universal recycling symbol"],
  [9852, "Recycled paper symbol"],
  [9853, "Partially-recycled paper symbol"],
  [9855, "Wheelchair symbol"],
  [9872, "White flag"],
  [9873, "Black flag"],
  [9877, "Staff of Aesculapius"],
  [9878, "Scales"],
  [9881, "Gear"],
  [9883, "Atom symbol"],
  [9884, "Fleur-de-lis"],
  [9888, "Warning sign"],
  [9889, "High voltage sign"],
  [9898, "Medium white circle"],
  [9899, "Medium black circle"],
  [9900, "Medium small white circle"],
  [9940, "No entry"],
  [9949, "Squared saltire"],
  [9950, "Falling diagonal in white circle in black square"],
  [10003, "Check mark", "&check; &checkmark;"],
  [10005, "Multiplication X"],
  [10006, "Heavy multiplication X"],
  [10007, "Ballot X", "&cross;"],
  [10060, "Cross mark"],
  [10070, "Black diamond minus white X"],
  [10187, "Mathematical rising diagonal"],
  [10188, "Long division"],
  [10209, "White concave-sided diamond"],
  [10216, "Mathematical left angle bracket", "&lang; &langle; &LeftAngleBracket;"],
  [10217, "Mathematical right angle bracket", "&rang; &rangle; &RightAngleBracket;"],
  [10218, "Mathematical left double angle bracket", "&Lang;"],
  [10219, "Mathematical right double angle bracket", "&Rang;"],
  [10753, "N-ary circled plus operator", "&xoplus; &bigoplus;"],
  [10754, "N-ary circled times operator", "&xotime; &bigotimes;"],
  [10761, "N-ary times operator"],
  [10784, "Z notation schema piping"],
  [10799, "Vector or cross product", "&Cross;"],
  [128269, "Left-pointing magnifying glass"]
];

ecomjs.htmlxncodes = [
  // pair: tab, extended & select non- ascii character glyph; html name code
  ["\x09", "&Tab;"], // Tab (\t)
  //["\x0a", "&NewLine;"], // Line feed (\n)
  //["\x21", "&excl;"], // Exclamation point
  //["\x7c", "&verbar;"], // Vertical bar
  //["\x7c", "&vert;"], // Vertical bar
  //["\x7c", "&VerticalLine;"], // Vertical bar
  ["\xa0", "&nbsp;"], // No-break space
  ["\xa1", "&iexcl;"], // Inverted exclamation point
  ["\xa2", "&cent;"], // Cent
  ["\xa3", "&pound;"], // Pound sign
  ["\xa4", "&curren;"], // Currency sign
  ["\xa5", "&yen;"], // Yen sign
  ["\xa6", "&brvbar;"], // Broken vertical bar
  ["\xa7", "&sect;"], // Section sign
  ["\xa8", "&uml;"], // Diaeresis
  ["\xa9", "&copy;"], // Copyright
  ["\xaa", "&ordf;"], // Feminine ordinal indicator
  ["\xab", "&laquo;"], // Left angle quote
  ["\xac", "&not;"], // Not sign
  ["\xad", "&shy;"], // Soft hyphen
  ["\xae", "&reg;"], // Registered sign
  ["\xaf", "&macr;"], // Macron
  ["\xb0", "&deg;"], // Degree sign
  ["\xb1", "&plusmn;"], // Plus/minus sign
  ["\xb2", "&sup2;"], // Superscript two
  ["\xb3", "&sup3;"], // Superscript three
  ["\xb4", "&acute;"], // Acute accent
  ["\xb5", "&micro;"], // Micro sign
  ["\xb6", "&para;"], // Pilcrow sign (paragraph)
  ["\xb7", "&middot;"], // Middle dot
  ["\xb8", "&cedil;"], // Cedilla
  ["\xb9", "&sup1;"], // Superscript one
  ["\xba", "&ordm;"], // Masculine ordinal indicator
  ["\xbb", "&raquo;"], // Right angle quote
  ["\xbc", "&frac14;"], // One-quarter fraction
  ["\xbd", "&frac12;"], // One-half fraction
  ["\xbe", "&frac34;"], // Three-quarters fraction
  ["\xbf", "&iquest;"], // Inverted question mark
  ["\xc0", "&Agrave;"], // A grave
  ["\xc1", "&Aacute;"], // A acute
  ["\xc2", "&Acirc;"], // A circumflex
  ["\xc3", "&Atilde;"], // A tilde
  ["\xc4", "&Auml;"], // A umlaut
  ["\xc5", "&Aring;"], // A ring
  ["\xc6", "&AElig;"], // AE ligature
  ["\xc7", "&Ccedil;"], // C cedilla
  ["\xc8", "&Egrave;"], // E grave
  ["\xc9", "&Eacute;"], // E acute
  ["\xca", "&Ecirc;"], // E circumflex
  ["\xcb", "&Euml;"], // E umlaut
  ["\xcc", "&Igrave;"], // I grave
  ["\xcd", "&Iacute;"], // I acute
  ["\xce", "&Icirc;"], // I circumflex
  ["\xcf", "&Iuml;"], // I umlaut
  ["\xd0", "&ETH;"], // Eth
  ["\xd1", "&Ntilde;"], // N tilde
  ["\xd2", "&Ograve;"], // O grave
  ["\xd3", "&Oacute;"], // O acute
  ["\xd4", "&Ocirc;"], // O circumflex
  ["\xd5", "&Otilde;"], // O tilde
  ["\xd6", "&Ouml;"], // O umlaut
  ["\xd7", "&times;"], // Multiplication sign
  ["\xd8", "&Oslash;"], // O slash
  ["\xd9", "&Ugrave;"], // U grave
  ["\xda", "&Uacute;"], // U acute
  ["\xdb", "&Ucirc;"], // U circumflex
  ["\xdc", "&Uuml;"], // U umlaut
  ["\xdd", "&Yacute;"], // Y acute
  ["\xde", "&THORN;"], // Thorn
  ["\xdf", "&szlig;"], // SZ ligature
  ["\xe0", "&agrave;"], // a grave
  ["\xe1", "&aacute;"], // a acute
  ["\xe2", "&acirc;"], // a circumflex
  ["\xe3", "&atilde;"], // a tilde
  ["\xe4", "&auml;"], // a umlaut
  ["\xe5", "&aring;"], // a ring
  ["\xe6", "&aelig;"], // ae ligature
  ["\xe7", "&ccedil;"], // c cedilla
  ["\xe8", "&egrave;"], // e grave
  ["\xe9", "&eacute;"], // e acute
  ["\xea", "&ecirc;"], // e circumflex
  ["\xeb", "&euml;"], // e umlaut
  ["\xec", "&igrave;"], // i grave
  ["\xed", "&iacute;"], // i acute
  ["\xee", "&icirc;"], // i circumflex
  ["\xef", "&iuml;"], // i umlaut
  ["\xf0", "&eth;"], // eth
  ["\xf1", "&ntilde;"], // n tilde
  ["\xf2", "&ograve;"], // o grave
  ["\xf3", "&oacute;"], // o acute
  ["\xf4", "&ocirc;"], // o circumflex
  ["\xf5", "&otilde;"], // o tilde
  ["\xf6", "&ouml;"], // o umlaut
  ["\xf7", "&divide;"], // Division sign
  ["\xf8", "&oslash;"], // o slash
  ["\xf9", "&ugrave;"], // u grave
  ["\xfa", "&uacute;"], // u acute
  ["\xfb", "&ucirc;"], // u circumflex
  ["\xfc", "&uuml;"], // u umlaut
  ["\xfd", "&yacute;"], // y acute
  ["\xfe", "&thorn;"], // thorn
  ["\xff", "&yuml;"], // y umlaut
  ["\u0152", "&OElig;"], // OE ligature
  ["\u0153", "&oelig;"], // oe ligature
  ["\u0160", "&Scaron;"], // S with caron
  ["\u0161", "&scaron;"], // s with caron
  ["\u0178", "&Yuml;"], // Y-umlaut
  ["\u017d", "&Zcaron;"], // Z with caron
  ["\u017e", "&zcaron;"], // z with caron
  ["\u0192", "&fnof;"], // Function symbol
  ["\u02c6", "&circ;"], // Hatchek
  ["\u02dc", "&tilde;"], // Small tilde
  ["\u1680", "&#x1680;"], // Ogham space mark
  ["\u180e", "&#x180e;"], // Mongolian vowel separator
  ["\u2000", "&#x2000;"], // En quad
  ["\u2001", "&#x2001;"], // Em quad; mutton quad
  ["\u2002", "&ensp;"], // En space; nut
  ["\u2003", "&emsp;"], // Em space; mutton
  ["\u2004", "&emsp13;"], // Three-per-em space; thick space
  ["\u2005", "&emsp14;"], // Four-per-em space; mid space
  ["\u2006", "&#x2006;"], // Six-per-em space
  ["\u2007", "&numsp;"], // Figure space
  ["\u2008", "&puncsp;"], // Punctuation space
  ["\u2009", "&thinsp;"], // Thin space
  ["\u200a", "&hairsp;"], // Hair space
  ["\u200b", "&ZeroWidthSpace;"], // Zero width space
  ["\u200c", "&zwnj;"], // Zero width non joiner
  ["\u200d", "&zwj;"], // Zero width joiner
  ["\u200e", "&lrm;"], // Left-to-right mark
  ["\u200f", "&rlm;"], // Right-to-left mark
  ["\u2011", "&#x2011;"], // Non-breaking hyphen
  ["\u2012", "&#x2012;"], // Figure dash
  ["\u2013", "&ndash;"], // En dash
  ["\u2014", "&mdash;"], // Em dash
  ["\u2018", "&lsquo;"], // Left single-quote
  ["\u2019", "&rsquo;"], // Right single-quote
  ["\u201a", "&sbquo;"], // Single low-quote
  ["\u201c", "&ldquo;"], // Left double-quote
  ["\u201d", "&rdquo;"], // Right double-quote
  ["\u201e", "&bdquo;"], // Double low-quote
  ["\u2020", "&dagger;"], // Dagger
  ["\u2021", "&Dagger;"], // Double dagger
  ["\u2022", "&bull;"], // Small bullet
  ["\u2022", "&bullet;"], // Small bullet
  ["\u2026", "&hellip;"], // Ellipsis
  ["\u2028", "&#x2028;"], // Line separator
  ["\u2029", "&#x2029;"], // Paragraph separator
  ["\u202f", "&#x202f;"], // Narrow no-break space
  ["\u2030", "&permil;"], // Per mille sign
  ["\u2032", "&prime;"], // Minutes
  ["\u2033", "&Prime;"], // Seconds
  ["\u2039", "&lsaquo;"], // Left single angle quote
  ["\u203a", "&rsaquo;"], // Right single angle quote
  ["\u203e", "&oline;"], // Overline
  ["\u205f", "&#x205f;"], // Medium mathematical space
  ["\u2060", "&NoBreak;"], // Word joiner
  ["\u20ac", "&euro;"], // Euro
  ["\u2122", "&trade;"], // Trademark
  ["\u2190", "&larr;"], // Left arrow
  ["\u2191", "&uarr;"], // Up arrow
  ["\u2192", "&rarr;"], // Right arrow
  ["\u2193", "&darr;"], // Down arrow
  ["\u2194", "&harr;"], // Left right arrow
  ["\u21a9", "&#x21a9;"], // Leftwards arrow with hook
  ["\u21aa", "&#x21aa;"], // Rightwards arrow with hook
  ["\u21b5", "&crarr;"], // Carriage return arrow
  ["\u21d0", "&lArr;"], // Leftwards double arrow
  ["\u21d1", "&uArr;"], // Upwards double arrow
  ["\u21d2", "&rArr;"], // Rightwards double arrow
  ["\u21d3", "&dArr;"], // Downwards double arrow
  ["\u21d4", "&hArr;"], // Left right double arrow
  ["\u2212", "&minus;"], // Minus
  ["\u22c5", "&sdot;"], // Dot operator
  ["\u25ca", "&loz;"], // Lozenge
  ["\u3000", "&#x3000;"], // Ideographic space
  ["\u{1f50d}", "&#x1f50d;"] // Left magnifying glass
];

ecomjs.xchar2htmlnc = (str, idx, feats = [{}]) => {
  // convert x-character glyph to respective html name code
  (feats[0].htmlxncodes || ecomjs.htmlxncodes)
  .forEach(nc => str = str.replace(RegExp("\\" + nc[0], "g"), nc[1]));
  return str;
};

ecomjs.xchar2htmlnc1 = (str, idx, feats = [{}]) => {
  // convert x-character glyph to respective html name code
  // immunize html x, pre, code element from conversion
  let // preserve comment/script/style periph, html start-tag, html pre>code block, html code-inline span, uri
    pei = 0, p1i = 0, c1i = 0, ui = 0, //xi = 0, p2i = 0, c2i = 0,
    periphs = str.match(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|<\b\w+[^\n>]+>/gi) || [],
  //xpres = str.match(/<(blockquote\b|div\b|[dou]l\b|figure\b|h[1-6](?= |>)|nav\b|pre\b|table\b).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>/gi) || [],
    pres1 = str.match(/<pre\b.*?>[^]+?<\/pre>/gi) || [],
  //pres2 = str.match(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm) || [],
    cods1 = str.match(/<code\b.*?>.+?<\/code>/gi) || [],
  //cods2 = str.match(/(`+).+?\1/g) || [],
    uris = str.match(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/gi) || [];
  (feats[0].htmlxncodes || ecomjs.htmlxncodes)
  .forEach(nc => str = str.replace(RegExp("\\" + nc[0], "g"), nc[1]));
  return str
  .replace(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/g, () => uris[ui++]) // restore uri
//.replace(/(`+).+?\1/g, () => cods2[c2i++]) // restore md code-inline span
  .replace(/<code\b.*?>.+?<\/code>/gi, () => cods1[c1i++]) // restore html code-inline span
//.replace(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm, () => pres2[p2i++]) // restore md pre>code block
  .replace(/<pre\b.*?>[^]+?<\/pre>/gi, () => pres1[p1i++]) // restore html pre>code block
//.replace(/<(blockquote\b|code\b|div\b|[dou]l\b|figure\b|h[1-6](?= |>)|nav\b|pre\b|table\b).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>/gi, () => xpres[xi++]) // restore html x/pre>code block
  .replace(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|<\b\w+[^\n>]+>/gi, () => periphs[pei++]) // restore comment/script/style periph, html start-tag
  ;
};

ecomjs.htmlnc2xchar = (str, idx, feats = [{}]) => {
  // convert html name code to respective x-character glyph
  (feats[0].htmlxncodes || ecomjs.htmlxncodes)
  .forEach(nc => str = str.replace(RegExp(nc[1], "g"), nc[0]));
  return str;
};

ecomjs.htmlnc2xchar1 = (str, idx, feats = [{}]) => {
  // convert html name code to respective x-character glyph
  // immunize html x, pre, code element from conversion
  let // preserve comment/script/style periph, html start-tag,  html x/pre>code block, html code-inline span, uri
    pei = 0, xi = 0, c1i = 0, ui = 0, //p1i = 0, p2i = 0, c2i = 0,
    periphs = str.match(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|<\b\w+[^\n>]+>/gi) || [],
    xpres = str.match(/<(blockquote\b|div\b|[dou]l\b|figure\b|h[1-6](?= |>)|nav\b|pre\b|table\b).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>/gi) || [],
  //pres1 = str.match(/<pre\b.*?>[^]+?<\/pre>/gi) || [],
  //pres2 = str.match(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm) || [],
    cods1 = str.match(/<code\b.*?>.+?<\/code>/gi) || [],
  //cods2 = str.match(/(`+).+?\1/g) || [],
    uris = str.match(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/gi) || [];
  (feats[0].htmlxncodes || ecomjs.htmlxncodes)
  .forEach(nc => str = str.replace(RegExp(nc[1], "g"), nc[0]));
  return str
  .replace(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/g, () => uris[ui++]) // restore uri
//.replace(/(`+).+?\1/g, () => cods2[c2i++]) // restore md code-inline span
  .replace(/<code\b.*?>.+?<\/code>/gi, () => cods1[c1i++]) // restore html code-inline span
//.replace(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm, () => pres2[p2i++]) // restore md pre>code block
//.replace(/<pre\b.*?>[^]+?<\/pre>/gi, () => pres1[p1i++]) // restore html pre>code block
  .replace(/<(blockquote\b|code\b|div\b|[dou]l\b|figure\b|h[1-6](?= |>)|nav\b|pre\b|table\b).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>/gi, () => xpres[xi++]) // restore html x/pre>code block
  .replace(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|<\b\w+[^\n>]+>/gi, () => periphs[pei++]) // restore comment/script/style periph, html start-tag
  ;
};

ecomjs.dcharClean = str => {
  // clean md doc of disruptive character/sequence
  str = str // strip custom navch/ssbr markup/markdown
  .replace(/^\n+\[\xab]\(#.*?\)\u2008? \[\u25ca]\(#.*?\)\u2008? \[\xbb]\(#.*?\)$|^\n+\[&laquo;]\(#.*?\)&puncsp; \[&loz;]\(#.*?\)&puncsp; \[&raquo;]\(#.*?\)$|^\n*<p class=navch.+?&laquo;.+?&puncsp;.+?&loz;.+?&puncsp;.+?&raquo;.+?<\/p>$/gim, "") // «␣ ◊␣ » << puncsp
  .replace(/^\n*::: ssbr\n&nbsp;\n:::\n*$|^\n*::: ssbr\n(.+?)\n:::\n*$|^\n*<div class=ssbr\b.*?>(.*?)<\/div>\n*$/gim, "\n\\$1$2\n")
  .replace(/^\n+: *(?=\n$)/gm, "")
  .replace(/^\n*<div style ?= ?"display: ?none; ?">.*?<\/div>$/gim, ""); //\\newpage
  let ei = 0, p2i = 0, c2i = 0, ui = 0, // preserve comment periph, html element/start-tag, md pre>code block, md code-inline span, uri
    elems = str.match(/<!--[^]*?-->|<(\b\w+).*?>(?:(?:[^<]|<(?!\1.*?>))*?<\/\1>|)/g) || [],
  //periphs = str.match(/<!--[^]+?-->|<(script|style)\b.*?>[^]+?<\/\1>|<\b(?!div class=ssbr\b.*?>).+?>/gi) || [],
  //xpres = str.match(/<(blockquote\b|div\b(?! class=ssbr\b.*?>)|[dou]l\b|figure\b|h[1-6](?= |>)|nav\b|pre\b|table\b).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>/gi) || [],
  //pres1 = str.match(/<pre\b.*?>[^]+?<\/pre>/gi) || [],
    pres2 = str.match(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm) || [],
  //cods1 = str.match(/<code\b.*?>.+?<\/code>/gi) || [],
    cods2 = str.match(/(`+).+?\1/g) || [],
    uris = str.match(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/gi) || [];
  return str
  .replace(/\u201c|\u201d/g, "\"")
//.replace(/\u2018|\u2019(?![\da-z])/gim, "'") // midword apostrophe needs no preservation from mditPreparse
//.replace(/\u2018|(\S)\u2019|([\s]|^)\u2019(?![\da-z])/gim, "$1$2'") // does not preserve rsquo in "'coz" or "g-'bye" or "T.'s doorsteps"
  .replace(/\u2018|([\da-z])\u2019|([^\da-z]|^)\u2019(?=$|[\s!"&')*,\-.:;<>?\\\]_}]|s\b)/gim, "$1$2'") //(?![\da-rt-z]|s\B)
  .replace(/&Tab;/g, "\t")
  .replace(/&nbsp;|\xa0|\u202f/g, "\\ ")
  .replace(/((?:[^\\]|^)(?:\\\\)*)\\   $/gm, "$1\\ \\")
  .replace(/(.\n)\\ (?=\n$)|(^\n)\\ (?=\n.)/gm, "$1$2\\")
//.replace(/ *(?:&ThinSpace;|&VeryThinSpace;|&emsp(?:|13|14);|&ensp;|&hairsp;|&numsp;|&puncsp;|&thinsp;|[\u2000-\u200a])+ */g, " ")
  .replace(/ ?[\u180e\u2000-\u200a\u205f\u3000]+ ?/g, " ")
//.replace(/&ZeroWidthSpace;|\u200b/g, "")
  .replace(/[\r\u200b-\u200f\u2028\u2029\u2060\ufeff]/g, "")
  .replace(/&ndash;/g, "\u2013")
  .replace(/ ?&thinsp;&mdash;&thinsp; ?|((?:[^<]|<(?!!))[^-]) ?--(?!>)-?(?! *-|>) ?| ?\u2014 ?/g, "$1 -- ")
//.replace(/&mdash;|\u2014/g, "--")
//.replace(/\u2014/g, "--")
  .replace(/( --) (?=(?:"|'|\*|_|<\/?\b.+?>)*(?:$|[!),.:;>?\]}]| \S))/gm, "$1") //(?:['")]+\s|['")]*$)
  .replace(/((?: ["'(<[{]+|^(?!    +)["'(<[{]*)(?:\*|_|<\/?\b[^\n>]+>)*) (?=-- |--$)/gm, "$1")
  .replace(/^\n.+\n-(?=-$)/gm, "$&\\")
  .replace( /(!?\[[^[\]\n]*\])\([^\n()]+\)|^(\[[^[\]\n]+\]:).*/gm, (m, c1, c2) =>
    (c1 || c2) + m.replace(/^!?\[.*?\]:?/, "").replace(/ -- /g, "--") )
  .replace(/^([ >]*\\?-\\-)((?:\\-)+ *)$/gm, (m, c1, c2) => c1 + c2.replace(/\\/g, ""))
  .replace(/\\?-\\-\\-(?:\\-)+(?= *[^\n \\-])|[^\n \\-]+ *\\?-\\-\\-(?:\\-)+|^[ >]*\\-\\-$/gm, m => m.replace(/\\/g, ""))
  .replace(/(\S\. )?\.\\? \.(?:\\? \.)+/g, "$1. . .") // ([ "'(<[{]|^) ??
  .replace(/(\W|^)_([^\n_]*[^_\s])_(?=\W|$)|([^_]|^)_([^_\s]+)_(?=[^_]|$)/gm, "$1$3*$2$4*")
  .replace(/([^_]|^)__([^_\s]+)__(?=[^_]|$)/g, "$1**$2**")
  .replace(/(\W|^)\*\*([^\n*]*[^*\s])\*\*(?=\W|$)/gm, "$1__$2__")
  .replace(/(\W|^)[*_]{3,3}([^\n*_]*[^*_\s])[*_]{3,3}(?=\W|$)/gm, "$1__*$2*__")
  .replace(/^([^\n `~].*\n| (?!   +\S).*\n|`(?!``+$).*\n|~(?!~~+$).*\n)\n\n(?!###? |    +\S|```+$|~~~+$)/gm, "$1\n")
  .replace(/^\n\n\n+/gm, "\n\n") // standardize blank lines
  .replace(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/gi, () => uris[ui++]) // restore uri
  .replace(/(`+).+?\1/g, () => cods2[c2i++]) // restore md code-inline span
//.replace(/<code\b.*?>.+?<\/code>/gi, () => cods1[c1i++]) // restore html code-inline span
  .replace(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm, () => pres2[p2i++]) // restore md pre>code block
//.replace(/<pre\b.*?>[^]+?<\/pre>/gi, () => pres1[p1i++]) // restore html pre>code block
//.replace(/<(blockquote\b|code\b|div\b|[dou]l\b|figure\b|h[1-6](?= |>)|nav\b|pre\b|table\b).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>/gi, () => xpres[xi++]) // restore html x/pre>code block
//.replace(/<! ?--[^]+?-- ?>|<(script|style)\b.*?>[^]+?<\/\1>|<\b.+?>/gi, () => periphs[pei++]) // restore comment/script/style periph, html start-tag
  .replace(/<!--[^]*?-->|<(\b\w+).*?>(?:(?:[^<]|<(?!\1.*?>))*?<\/\1>|)/g, () => elems[ei++]) // restore html element/start-tag
  .trim() + "\n\n";
};

ecomjs.dchar2code = str => {
  // convert disruptive character glyph to respective html name, dec or hex code
  // + mditPrepPhase6: \-sequence conversion
  let // preserve comment/script/style periph, html start-tag, pre>code block, code-inline span, uri
    pei = 0, p1i = 0, p2i = 0, c1i = 0, c2i = 0, ui = 0,
    periphs = (str.match(/(?:(?:\\\\)+|\\|)(?:<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|(?:<(?!code|pre)\b[^\n>]+>)+)/gim) || []).map(e => e.replace(/^(?:\\\\)+/, "")).filter(e => /^</.test(e)),
    //periphs = str.match(/(?:[^\n\\]|^)<!--[^]*?-->|(?:[^\n\\]|^)<(script|style)\b.*?>[^]+?<\/\1>|(?:[^\n\\]|^)(?:<(?!code|pre)\b[^\n>]+>)+/gim) || [],
    pres1 = (str.match(/(?:(?:\\\\)+|\\|)<pre\b.*?>[^]+?<\/pre>/gim) || []).map(e => e.replace(/^(?:\\\\)+/, "")).filter(e => /^</.test(e)),
    pres2 = str.match(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm) || [],
    cods1 = (str.match(/(?:(?:\\\\)+|\\|)<code\b.*?>.+?<\/code>/gim) || []).map(e => e.replace(/^(?:\\\\)+/, "")).filter(e => /^</.test(e)),
    cods2 = str.match(/(`+).+?\1/g) || [],
    uris = str.match(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/gi) || [];
  return str
  .replace(/(?:[^\\]|^)(?:\\\\)+/gm, m => m.replace(/\\\\/g, "&#92;")) // backslash hex code
  .replace(/\x09/g, "&Tab;") // tab name code
  .replace(/\\"/g, "&quot;") // quot name code
  .replace(/\\'/g, "&#39;") // squot hex code
  .replace(/(?:([^\s\\]) *\n?( *>* *)\\ *|\\\n( *>* *)\\ *)(?=\n$)/gm, "$1  \n$2$3&nbsp;") // par-post-\ to dblsp-nbsp
  .replace(/^\n( *>* *)(?:\\ \\|\\ *)(?=\n.)/gm, "\n$1&nbsp;  ") // par-pre-\ to nbsp-dblsp
  .replace(/([^\n\\])\\$/gm, "$1  ") // line-end-\ to dblsp
  .replace(/((?:[^\\]|^)(?:\\\\)*)\\ |\xa0/g, "$1&nbsp;")
  .replace(/((?:[^\\]|^)(?:\\\\)*)\\ |\xa0/g, "$1&nbsp;") // no-break space name code
  .replace(/((?:[^\\]|^)(?:\\\\)*)\\</g, "$1&lt;")
  .replace(/((?:[^\\]|^)(?:\\\\)*)\\</g, "$1&lt;") // lt name code
  .replace(/((?:[^\\]|^)(?:\\\\)*)\\>/g, "$1&gt;")
  .replace(/((?:[^\\]|^)(?:\\\\)*)\\>/g, "$1&gt;") // gt name code
  .replace(/\\(?![\s[\]{}()`|*+=^_~.:#!&-])/g, "") // strip unnecessary \-punct, all \-alphanumerics
  .replace(/\xad/g, "&shy;") // soft-hyphen name code
  .replace(/\u1680/g, "&#x1680;") // ogham space mark hex code
  .replace(/\u180e/g, "&#x180e;") // mongolian vowel separator hex code
  .replace(/\u2000/g, "&#x2000;") // en-quad hex code
  .replace(/\u2001/g, "&#x2001;") // em-quad hex code
  .replace(/\u2002/g, "&ensp;") // en-space name code
  .replace(/\u2003/g, "&emsp;") // em-space name code
  .replace(/\u2004/g, "&emsp13;") // three-per-em space name code
  .replace(/\u2005/g, "&emsp14;") // four-per-em space name code
  .replace(/\u2006/g, "&#x2006;") // six-per-em space hex code
  .replace(/\u2007/g, "&numsp;") // figure space name code
  .replace(/\u2008/g, "&puncsp;") // punctuation space name code
  .replace(/\u2009/g, "&thinsp;") // thin space name code
  .replace(/\u200a/g, "&hairsp;") // hair space name code
  .replace(/\u200b/g, "&ZeroWidthSpace;") // zero width space name code
  .replace(/\u200c/g, "&zwnj;") // zero width non-joiner name code
  .replace(/\u200d/g, "&zwj;") // zero width joiner name code
  .replace(/\u200e/g, "&lrm;") // left-to-right mark name code
  .replace(/\u200f/g, "&rlm;") // right-to-left mark name code
  .replace(/\u2011/g, "&#x2011;") // non-breaking hyphen hex code
  .replace(/\u2012/g, "&#x2012;") // figure dash hex code
  .replace(/\u2013/g, "&ndash;") // ndash name code
  .replace(/\u2014/g, "&mdash;") // mdash name code
  .replace(/\u2028/g, "&#x2028;") // line separator hex code
  .replace(/\u2029/g, "&#x2029;") // paragraph separator hex code
  .replace(/\u202f/g, "&#x202f;") // narrow no-break space hex code
  .replace(/\u205f/g, "&#x205f;") // medium mathematical space hex code
  .replace(/\u2060/g, "&NoBreak;") // NoBreak name code
  .replace(/\u2212/g, "&minus;") // minus name code
  .replace(/\u3000/g, "&#x3000;") // ideographic space hex code
  .replace(/(?:\.\.?|\bhttps?:\/)\/[^\s")\\]+/g, () => uris[ui++]) // restore uri
  .replace(/(`+).+?\1/g, () => cods2[c2i++]) // restore md code-inline span
  .replace(/<code\b.*?>.+?<\/code>/gi, () => cods1[c1i++]) // restore html code-inline span
  .replace(/^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- -->)*(?=\n\n$)/gm, () => pres2[p2i++]) // restore md pre>code block
  .replace(/<pre\b.*?>[^]+?<\/pre>/gi, () => pres1[p1i++]) // restore html pre>code block
  .replace(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|(?:<(?!code|pre)\b[^\n>]+>)+/gi, () => periphs[pei++]) // restore comment/script/style periph, html start-tag
//.replace(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|(?:<(?!code|pre)\b[^\n>]+>)+/gi, () => periphs[pei++].replace(/^[^<]/, "")) // restore comment/script/style periph, html start-tag
  ;
};

ecomjs.srcCodeIncl = (str, idx, feats) => {
  // Inserts url-referenced, preloaded source code (or js-object data) into flagged html tags.
  let acc, ptyglobal, refnc, scstorlen, sepaattr, sepaincl, url;
  scstorlen = (feats || "")[1] && Object.keys(feats[1]).length;
  sepaattr = / src(?:-code-incl|) *= *(["']|)[^\s>]+\1/gi;
  sepaincl = /<([a-z]\w*).*? src-code-incl *= *(["']|)([^\s>]+)\2.*?>(?=\s*<\/\1>)/gi;
  refnc = (m, c1, c2, c3) => {
    if (/^0$|^false$|^null$/.test(c3)) {
      return m;
    } else if (scstorlen && (!/^script$/i.test(c1) || /^src$|^true$/i.test(c3))) {
      url = /\bsrc *= *(["']|)([^\s>]+)\1/i.exec(m)[2] || "";
      return !feats[1][url] ? m : m.replace(sepaattr, "") + "\n" + feats[1][url] + "\n";
    } else if (scstorlen && /^script$/i.test(c1) && /^\.?\.?\/\S+$/i.test(c3)) {
      return !feats[1][c3] ? m : m.replace(sepaattr, "") + "\n" + feats[1][c3] + "\n";
    } else if (/^script$/i.test(c1) && /^[a-z][.\w]*$/i.test(c3)) {
      c3 = c3.replace(/^window\./, "").split(".");
      ptyglobal = c3.find((e, i) => !(acc = i ? acc[e] : window[e]))
        ? null : c3.reduce((a, e) => a[e], window);
      return !ptyglobal ? m : m.replace(sepaattr, "") + "\n"
        + ( typeof ptyglobal !== 'function' ? String(ptyglobal) + "\n"
          : "window." + c3.join(".") + " = " + String(ptyglobal) + ";\n" );
    } else { return m; }
  };
  return str.replace(sepaincl, refnc);
};

ecomjs.moduleIX = str => {
  // Expand each module `import` statement of each module-script block.
  // e.g. `import annosfns from "../../a00/-res-js/ebook-annos-fns-mdle";`
  // Data is drawn from preloaded function-object in global namespace via separate `<script>` resource call.
  // Separate `<script>` must have `fnc-gl-name=` attribute to associate function name with external resource location.
  let refnc, refsrc2fnc = {},
    semodule = /(<script\b.*? type *= *(["']?)(?:module|text\/webpack)\b\2.*?>)([^]+?)(?=<\/script>)/gi,
    sereffnc = /<script\b.*? fnc-gl-name *= *(["']?)(?!false)[a-z][.\w]*\1.*?>\s*<\/script>\s*/gi,
    serefglnm = / fnc-gl-name *= *(["']?)([a-z][.\w]*)\1/i,
    serefsrc = / src *= *(["']?)(\S+?)\1/i, url;
  str.match(sereffnc).forEach(e => serefsrc.test(e) && !/^src$|^true$/i.test(serefglnm.exec(e)[2])
    && (refsrc2fnc[serefsrc.exec(e)[2]] = serefglnm.exec(e)[2]));
  refnc = (m, c1, c2, c3) => c1.replace(/(type *= *(["']?))(?:module|text\/webpack)\b(?=\2)/i, "$1text/javascript")
    + c3.replace( /^ *import *(?:([a-z]\w*) *from *|)(["'])(\S+?)\2; *$/gim, (msub, cs1, cs2, cs3) =>
      !refsrc2fnc[url = cs3.replace(/-(?:mdle|mod|module)$/i, ".js")] ? "//" + msub
      : (cs1 ? "let " + cs1 : refsrc2fnc[url]) + " = " + ( window.Babel && window.Babili
          ? window.Babili.transform(eval(refsrc2fnc[url])).code
          : eval(refsrc2fnc[url]) ) + ";" );
  return str.replace(sereffnc, "").replace(semodule, refnc);
};

ecomjs.annosGlDeploy = str => {
  let annocolor, annosglblocks, i, sepa, rtrm,
    annosgl = (str.match(/<!-- *(?:annotations?-gl|annos?gl)[^]*?-->/gi) || []).join("\n"),
    annocolordflt = annosgl.match(/^.*?{(\\?[.#]?\w+)}|\n/)[1] || ".ye6";
  annosgl = annosgl
    .replace(/\s*-->\s*<!-- *(?:annotations-gl|annosgl).*/gi, "\n")
    .replace(/\s*-->$|^<!-- *(?:annotations-gl|annosgl).*\n*/gi, "")
    .replace(/\/\/ .*$/g, "")
    .replace(/\n\n+/g, "\n"); // prep annosgl block
  annosglblocks = annosgl.split("\n");
  annosglblocks.forEach(agbi => {
    annocolor = agbi.match(/^.*?{(\\?[.#]?\w+)}$|$/)[1] || annocolordflt;
    sepa = new RegExp("\\b" + agbi.replace(/\s*{\\?[.#]?\w+}$/, "") + "\\b", "gi");
    rtrm = (/^\./.test(annocolor))
      ? "<mark class=" + annocolor.replace(/^\./, "") + ">$&</mark>"
      : "<mark style=\"background: " + annocolor.replace(/^\\/, "") + ";\">$&</mark>";
    str = str.replace(sepa, rtrm);
  });
  return str;
};

ecomjs.hdgIDGen = str =>
  str.toLowerCase()
  //.replace(/ ?\u2014 ?| ?-- ?/g, "")
    // strip anticipated mdash standardization
  .replace(/&thinsp;&mdash;&thinsp;| ?\u2014 ?| ?-- ?/gi, " \u2014 ")
    // " — " << mdash; convert mdash, restore sp
  .replace(/["'\u2018\u2019\u201c\u201d]/g, "")
    // strip every quote kind; exclude for MARKED-generated HTML only
  .replace(/[()*\\_\u2000-\u200d\u2014]/g, "")
    // strip parens, asterisk, backslash, underscore, special-space, mdash; assumes no literal underscore; exclude for MARKED-generated HTML only?
  .replace(/[^\n.\w\u00c0-\u00ff-]+/g, "-")
    // allow -.\wÀ-ÿ\n ; replace remaining unqualified-character sequence with "-"
  .replace(/^(?=(?:\d\d\d\d|\d\d?-(?:\d\d?|\d\d\d\d))(?:\D|$))/gm, "d")
    // preserve leading year-digits with "d"
  //.replace(/[^[^A-Za-z\u2000-\u200d]+/gm, "")
    // restrict (to alpha) 1st character; include for MARKED-generated HTML only
  .replace(/[^.0-9A-Za-z\u00c0-\u00ff]+$|^[^A-Za-z\u00c0-\u00ff]+/gm, "");
    // restrict (to alpha/num/dot) last & (to alpha) 1st character; exclude for MARKED-generated HTML only

ecomjs.menubarGen = str => {
  // pre-parse div.menubar block with Markdownit- & custom- script
  let mbarid = 10;
  return !window.markdownit ? str : str
  .replace( /(<div class=['"]?menubar['"]?>)([^]*?)(?=<\/div>)/, (m, c1, c2) =>
    c1 + "<div>\n\n" + window.markdownit().render(c2)
    .replace(/(?=<\/li>\n<\/ul>\s+$)/, "</div></div>\n")
    .replace(/^(<ul>\n<li>)(?:<p>|)(.*?)\u2008(?:<\/p>|)/, "$1<p>$2</a>\n<div><div>")
    .replace(/^<li><p><br \/><\/p>$/gm, "</ul><ul><li>")
    .replace(/(<\/li>\n<\/ul>\n<ul>\n.*)\u2008<\/p>(?=\n<ul>)/g, "</div></div>\n$1<span></span></a>\n<div><div>")
    .replace(/(<\/li>\n<\/ul>\n<ul>\n<li>)(.*)\u2008(?=<\/div><\/div>\n<\/li>|<\/li>)/g, "</div></div>\n$1<p>$2</a>\n<div><div>")
    .replace(/\n<div><div><\/div><\/div>\n|<li>\n<\/li>/g, "")
    .replace(/<div><div>/g, "$&\n<svg style='height:13px; width:25px; position:absolute;'><use xlink:href='#tri01' /></svg>")
    .replace(/([^>])\u2008<\/p>/g, "$1</a>")
    .replace(/<li><p>([^\n<].+?)(?=<\/a>|<span><\/span><\/a>)/g, (m2, c21) =>
      '<li id=mbar' + (++mbarid) + '-' + ecomjs.hdgIDGen(c21) + '><a href="">' + c21) + "\n</div>" );
};

ecomjs.headerGen = str => {
  // convert header-block pandoc-to-html, or else insert hidden header block with anchor
  // strip any remaining pandoc header block
  let mdit = window.markdownit && window.markdownit({ html: 1 }) || { renderInline: _=>_ };
  if (!/^<(?:div id=['"]?|)header.*>/im.test(str)) {
    str = str
    .replace(/^%.*(?:\n.+)*?\n%.*(?:\n.+)*?(?=\n%)/m, m => m.replace(/  +\n *(?!%)|\n +/g, "<br />"))
    // prep br for header-block parse/conversion
    .replace( /^% *(.+?) *\n% *(.*?) *\n% *(.*?) *$/m, (m, c1, c2, c3) =>
      '<header id="header">\n<h1 id="title">' + mdit.renderInline(c1) + "</h1>\n"
      + (!c2.length ? "" : '<p id="author">' + mdit.renderInline(c2) + "</p>\n")
      + (!c3.length ? "" : '<p id="date">' + mdit.renderInline(c3) + "</p>\n") + "</header>" );
    //'% ' + c1 + '\n% ' + c2 + '\n% ' + c3 + '\n\n' +
  }
  str = str.replace(/^\n%.*(?:\n.+)*?\n%.*(?:\n.+)*?\n%.*(?=\n\n)/gm, "");
  return /^<(?:div id=['"]?|)header.*>/im.test(str) ? str
  : str ///^(#{1,6} .+)/m
    .replace(/^(?=.)/m, '<header id="header" style="visibility: hidden;"></header>\n\n');
  //.replace(/<\/header>\n+(?:##? .*\n|)(?:(?!#+ ).*\n)*?- - -$/m, "$&\n\n<!-- {size=1} -->");
};

ecomjs.mdtblConv21 = str => {
  // convert md table type 2 to type 1
  let i = 0, // preserve comment/script/style periph
    periphs = str.match(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>/gi) || [];
  return str.replace( /^\n(-[ -]+?-(?=\n.)|---+ [ -]*?---)((?:\n.+|\n(?=\n.))+?)\n-[ -]+?-\n$/gm,
  (m, c1, c2) => {
    let delim = / /g, cols = [0], cell = [], xlen;
    while (delim.exec(c1)) { cols.push(delim.lastIndex); }
    c1 = /^-[ -]+?-$/m.test(c2) ? ""
      : "\n|" + c1.replace(/-+ ?/g, " |") + "\n|" + c1.replace(/-+ ?/g, "-|");
    c2 = c2.replace(/\n+(-[ -]+?-)\n+/, "\n\n$1\n\n").split("\n\n");
    c2.forEach((ytxt, iy) => cell[iy] = []);
    cols.forEach((xsta, ix) => {
      xlen = !cols[ix + 1] ? undefined : cols[ix + 1] - xsta;
      c2.forEach( (ytxt, iy) =>
        cell[iy][ix] = ytxt.split("\n")
        .map(s2 => s2.substr(xsta, xlen).concat(" ").substr(0, xlen).replace(/\\ *$/, "<br />"))
        .filter(s3 => /\S/.test(s3)).join("") );
    });
    if (!c1) { // table head is generated from cell[0] & cell[1]
      cell[0].forEach((hdtxt, ix) => {
        let hdarr = /^( ? ?).*?( ? ? ?)$/.exec(hdtxt); ///^( ? ?).*?( ?) $/
        cell[1][ix] = (hdarr[1].length === 2 && hdarr[2].length === 3 ? ":" : "")
        + cell[1][ix].trim() + (hdarr[1].length === 2 ? ":" : "");
      });
    } else { // table head is generated from c1
      c1 = c1.split("\n").map((hd, i) =>
        i !== 2 || !hd ? hd : "|" + hd.replace(/\|$|^\|/g, "").split("|").map((col, ix) => {
          let hdarr = /^( ? ?).*?( ? ? ?)$/.exec(cell[0][ix]);
          return (hdarr[1].length === 2 && hdarr[2].length === 3 ? ":" : "")
          + "-" + (hdarr[1].length === 2 ? ":" : "");
        }).join("|") + "|"
      ).join("\n");
    }
    return c1 + "\n| "
    + cell.map(yarr => yarr.join(" | ").replace(/  +/g, " ").trim()).join(" |\n| ") + " |\n";
  }).replace(/<!--[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>/gi, () => periphs[i++]);
    // restore comment/script/style periph
};

ecomjs.mditPrepPhase2 = str => {
  // phase 2: typography / smart punct conversion
  let pei = 0, xpi = 0, c1i = 0, pi = 0, ci = 0, ui = 0,
  //sepaelm = /<!--[^]*?-->|<(\b\w+).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>|<\b\w+[^\n>]+>/g,
    sepaperiph2 = /<!--(?!phold-uri-md-->)[^]*?-->|<(script|style)\b.*?>[^]+?<\/\1>|<\b[^\n>]+>/gi,
    sepaxpre = /<(blockquote\b|div\b|[dou]l\b|figure\b|h[1-6](?= |>)|nav\b|pre\b|table\b).*?>(?:[^<]|<(?!\1.*?>))*?<\/\1>/gi,
    sepamdpre2 = /^(```+|~~~+)[^]+?\n\1$|^\n\n    +\S.*(?:\n+    +\S.*|\n+ *<!-- .*?-->)*(?=\n\n$)/gm,
    sepaurimd = /<!--phold-uri-md-->|(!?\[[^\n[\]]*\])\([^\n()]+\)|^\[[\w-]+\]:.*|(?:\.\.?\/|(?:[a-z0-9][\w-]*\.){1,2}[a-z]{2,4}\/|\bhttps?:\/\/)[^\s")\\]+|^[ >]+--$/gim, //phold pattern is necessary: sepaperiph2 is not provided placeholder
    sepa2ldquo = /^((?:[*_]{0,3}|(?:<\b[^\n>]+>)+)(?:'|&lsquo;|))\u201d|(\s(?:[*_]{0,3}|(?:<\b[^\n>]+>)+)(?:'|&lsquo;|))\u201d(?![\n !),.:;>?\]}])|([^\\])\u201d(?=[^\s!"&')*,\-.:;<>?\\\]_}]|\.\\? ?\.\\? ?\.)/gm,
    sepa2lsquo = /^((?:[*_]{0,3}|(?:<\b[^\n>]+>)+)(?:"|&ldquo;|))\u2019|(\s(?:[*_]{0,3}|(?:<\b[^\n>]+>)+)(?:"|&ldquo;|))\u2019(?![\n !),.:;>?\]}])|([^\\\da-z])\u2019(?!s\b)(?=[^\s!"&')*,\-.:;<>?\\\]_}]|\.\\? ?\.\\? ?\.)/gim,
    //htmlels = str.match(sepaelm) || [],
    htmlperiphs2 = str.match(sepaperiph2) || [],
    htmlxpres = str.match(sepaxpre) || [],
    htmlcods1 = str.match(/<code\b.*?>.+?<\/code>/gi) || [],
    mdpres = str.match(sepamdpre2) || [],
    mdcods = str.match(/(`+).+?\1/g) || [],
    urimds = str.match(sepaurimd) || [];
  return str
  .replace(sepaurimd, "$1<!--phold-uri-md-->")
  .replace(/(\W|^)_([^\n_]*[^_\s\\])_(?=\W|$)|([^_\\]|^)_([^_\s]+)_(?=[^_]|$)/gm, "$1$3*$2$4*")
  .replace(/([^_]|^)__([^_\s]+)__(?=[^_]|$)/g, "$1**$2**")
  .replace(/(\W|^)\*\*([^\n*]*[^*\s])\*\*(?=\W|$)/gm, "$1__$2__")
  .replace(/(\W|^)[*_]{3,3}([^\n*_]*[^*_\s])[*_]{3,3}(?=\W|$)/gm, "$1__*$2*__") // standardize em, strong marker pairs
  .replace(/(?:[^\\]|^)(?:\\\\)+/gm, m => m.replace(/\\\\/g, "&#92;")) // convert \-backslash
  .replace(/\\"/g, "&quot;") // convert \-quot
  .replace(/\\'/g, "&#39;") // convert \-squot
  .replace(/([^\\]|^)\u201d/g, "$1&rdquo;") // convert rdquo
  .replace(/([^\\]|^)\u201c/g, "$1&ldquo;") // convert ldquo
  .replace(/([^\\]|^)\u2019/g, "$1&rsquo;") // convert rsquo
  .replace(/([^\\]|^)\u2018/g, "$1&lsquo;") // convert lsquo
  .replace(/"/g, "\u201d") // initially convert ALL quot to rdquo-glyph
  .replace(sepa2ldquo, "$1$2$3&ldquo;") // to ldquo, if rdquo is 1) at line-beg, 2) prec. by sp, 3) foll. w/ alphanum/non-end char
  .replace(/([^\\]|^)\u201d/g, "$1&rdquo;") // convert rdquo-glyph to rdquo
  .replace(/'/g, "\u2019") // initially convert ALL tic to rsquo-glyph
  .replace(sepa2lsquo, "$1$2$3&lsquo;") // to lsquo, if rsquo is 1) at line-beg, 2) prec. by sp, 3) prec. by non-alphanum, foll. w/ alphanum(except "s ")/non-end char
  .replace(/([^\\]|^)\u2019/g, "$1&rsquo;") // convert rsquo-glyph to rsquo
  .replace(/\b[^\t\n\S]-(?!->)-?[^\t\n\S](?!-)|[^\t\n\S]--(?=$|\n)|[^\t\n\S]?\u2009?\u2014\u2009?[^\t\n\S]?/g, "&hairsp;&mdash;&hairsp;") // convert mdash, phase 1
  .replace(/(\n *)--(?!>)[^\t\n\S]?(?![\n|-])|((?:[^<]|<(?!!--)|^)[^\n\\ |-])(?:( ) +|[^\t\n\S]?)--(?!-?>)-?[^\t\n\S]?(?![|+-])/g, "$1$2$3&hairsp;&mdash;&hairsp;") // convert mdash, phase 2
  .replace(/( )\. ?\.(?: ?\.)+|(\S\. |\S|^)\. \.(?: \.)+|( |&l[ds]quo;|&[a-t]{2,4}sp;|["'(<[{]+|^)(?:\*|_|<\/?\b[^\n>]+>)*\.\.\.+(?=(?:\*|_|<\/?\b.+?>)*(?: |$))/gm, "$1$2$3.&nbsp;.&nbsp;.") // convert 5-char ellipsis //([^ .]|^)\.\.\.+(?=(?! \.)\s)
  .replace(/<!--phold-uri-md-->/g, () => urimds[ui++].replace(/^!?\[[^[\]\n]*\](?=\([^\n()]+\))/, "")) // restore uri; md link/image; indented, standalone dbl-dash
  .replace(/(`+).+?\1/g, () => mdcods[ci++]) // restore md code-inline span
  .replace(sepamdpre2, () => mdpres[pi++]) // restore md pre>code block
  .replace(/<code\b.*?>.+?<\/code>/gi, () => htmlcods1[c1i++]) // restore html code-inline span
  .replace(sepaxpre, () => htmlxpres[xpi++]) // restore html x/pre>code block
  .replace(sepaperiph2, () => htmlperiphs2[pei++]) // restore comment/script/style periph, html start-tag
  //.replace(sepaelm, () => htmlels[ei++]); // restore html element
  ;
};

ecomjs.mditPrepPhase5 = str => {
  // phase 5: decimal/alpha/roman -ol prep
  let sepanumdec = /(?:\n\n|^\n?)(\(?)(\d+)([).]) +\S.*(?:(?:\n(?!\1\d+\3 )\S.*)*(?:\n\n?    +\S.*)*(?:\n\n\1\d+\3 +\S.*(?:\n(?!\1\d+\3 )\S.*)*(?:\n\n?    +\S.*)*)+|(?:\n\1\d+\3.*)*)/g,
    sepanumabcup = /(?:\n\n|^\n?)(\(?)([A-Z]+|[CDILMVX]\\)([).]) +\S.*(?:(?:\n(?!\1(?:[A-Z]+|[CDILMVX]\\)\3 )\S.*)*(?:\n\n?    +\S.*)*(?:\n\n\1(?:[A-Z]+|[CDILMVX]\\)\3 +\S.*(?:\n(?!\1(?:[A-Z]+|[CDILMVX]\\)\3 )\S.*)*(?:\n\n?    +\S.*)*)+|(?:\n\1(?:[A-Z]+|[CDILMVX]\\)\3.*)*)/g,
    //sepanumabcup = /(?:\n\n|^\n?)(\(?)([A-Z]+|[CDILMVX]\\)([).]) +\S.*(?:\n(?!\(?(?:[A-Z]+|[CDILMVX]\\)[).] )\S.*)*(?:\n\n?    +\S.*)*(?:(?:^\n?|\n\n)\(?(?:[A-Z]+|[CDILMVX]\\)[).] +\S.*(?:\n(?!\(?(?:[A-Z]+|[CDILMVX]\\)[).] )\S.*)*(?:\n\n?    +\S.*)*)+(?=\n\n(?!\(?(?:[A-Z]+|[CDILMVX]\\)[).] +\S)|\n?$)/g,
    sepanumabclo = /(?:\n\n|^\n?)(\(?)([a-z]+|[cdilmvx]\\)([).]) +\S.*(?:(?:\n(?!\1(?:[a-z]+|[cdilmvx]\\)\3 )\S.*)*(?:\n\n?    +\S.*)*(?:\n\n\1(?:[a-z]+|[cdilmvx]\\)\3 +\S.*(?:\n(?!\1(?:[a-z]+|[cdilmvx]\\)\3 )\S.*)*(?:\n\n?    +\S.*)*)+|(?:\n\1(?:[a-z]+|[cdilmvx]\\)\3.*)*)/g,
    sepanumxptn = /(?:\n\n|^\n?)(?:OK|NO)(?=\..*\n\n(?!    +\S|[A-Z]+\. +\S)|\..*\n?$)|(?:\n\n|^\n?)(?:ok|no)(?=\..*\n\n(?!    +\S|[a-z]+\. +\S)|\..*\n?$)/g,
    cstr1a = ".olc",
    cstr1b = "} -->\n\n<style id=olc",
    cstr1c = ">\n .olc", //<div style="display: none; ">
    cstr1d = " { counter-reset: c",
    cstr2a = "; }\n .olc",
    cstr2b = ">li { list-style-type: none; }\n .olc",
    cstr2c = ">li::before { counter-increment: c; content: '",
    cstr3a = "' counter(c",
    cstr3b = ") '",
    cstr3c = " ';\n \tfloat: left; margin-left: -3rem; width: 2.75rem; text-align: right; }\n</style>", //</div>
    cidx = 0;
  return str
  .replace(sepanumxptn, "$&\\")
  .replace(sepanumdec, (m, c1, c2, c3) => {
  let c = 0;
  return m.replace(/^\(?\d+[).] +/gm, () => ((+c2 + c) - 10 < 0 ? " " : "") + (+c2 + c++) + ". ")
  //+ (/^1$/.test(c2) ? "" : "\n\n<!-- {ol:start=" + c2 + "} -->"))
  + ( c3 === "." ? "" : "\n\n<!-- {ol:"
    + cstr1a + ++cidx + cstr1b + cidx + cstr1c + cidx + cstr1d
    + (c2 > 1 ? " " + (c2 - 1) : "") + cstr2a + cidx + cstr2b + cidx + cstr2c
    + c1 + cstr3a + cstr3b + c3 + cstr3c ); })
  .replace(sepanumabcup, (m, c1, c2, c3) => {
  c2 = c2.replace(/\\$/, "");
  let testnumr = /^\(?[CDILMVX]\\[).] |^\(?[CDILMVX]{2,}[).] |^\(?[CDILMVX]+\\?[).]  /m.test(m)
        && !/^\(?[A-Z]*[ABE-HJKN-UWYZ][A-Z]*[).] /m.test(m)
        || !/^\(?(?:[A-HJ-Z]|[A-Z]{2,})[).] /m.test(m),
      olstart = testnumr ? ecoqjs.fromRoman(c2) : ecoqjs.fromAlpha(c2),
      ctype = testnumr ? ", upper-roman" : ", upper-alpha",
      c = 0;
  return m.replace( /^\(?(?:[A-Z]+|[CDILMVX]\\)[).] +/gm, () =>
    ((olstart + c) - 10 < 0 ? " " : "") + (olstart + c++) + ". " )
  + "\n\n<!-- {ol:type=" + (testnumr ? "I" : "A")
  + ( c3 === "." ? "} -->"
    : " " + cstr1a + ++cidx + cstr1b + cidx + cstr1c + cidx + cstr1d
    + (olstart > 1 ? " " + (olstart - 1) : "") + cstr2a + cidx + cstr2b + cidx + cstr2c
    + c1 + cstr3a + ctype + cstr3b + c3 + cstr3c ); })
  .replace(sepanumabclo, (m, c1, c2, c3) => {
  c2 = c2.replace(/\\$/, "");
  let testnumr = /^\(?[cdilmvx]\\[).] |^\(?[cdilmvx]{2,}[).] |^\(?[cdilmvx]+\\?[).]  /m.test(m)
        && !/^\(?[a-z]*[abe-hjkn-uwyz][a-z]*[).] /m.test(m)
        || !/^\(?(?:[a-hj-z]|[a-z]{2,})[).] /m.test(m),
      olstart = testnumr ? ecoqjs.fromRoman(c2) : ecoqjs.fromAlpha(c2),
      ctype = testnumr ? ", lower-roman" : ", lower-alpha",
      c = 0;
  return m.replace( /^\(?(?:[a-z]+|[cdilmvx]\\)[).] +/gm, () =>
    ((olstart + c) - 10 < 0 ? " " : "") + (olstart + c++) + ". " )
  + "\n\n<!-- {ol:type=" + (testnumr ? "i" : "a")
  + ( c3 === "." ? "} -->"
    : " " + cstr1a + ++cidx + cstr1b + cidx + cstr1c + cidx + cstr1d
    + (olstart > 1 ? " " + (olstart - 1) : "") + cstr2a + cidx + cstr2b + cidx + cstr2c
    + c1 + cstr3a + ctype + cstr3b + c3 + cstr3c ); })
  ;
};
