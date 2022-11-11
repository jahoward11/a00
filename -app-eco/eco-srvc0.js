window.EC0 = window.EC0 || {};

EC0.STYS = [[
  "atom-one-dark.css", "atom-one-light.css", "github-gist.css", "github.css", "googlecode.css", "tomorrow.css", "vs.css", "xcode.css", "xt256.css"
], [
  "a11y-dark.css", "a11y-light.css", "agate.css", "an-old-hope.css", "androidstudio.css", "arduino-light.css", "arta.css", "ascetic.css",
  "atelier-cave-dark.css", "atelier-cave-light.css", "atelier-dune-dark.css", "atelier-dune-light.css", "atelier-estuary-dark.css", "atelier-estuary-light.css", "atelier-forest-dark.css", "atelier-forest-light.css", "atelier-heath-dark.css", "atelier-heath-light.css", "atelier-lakeside-dark.css", "atelier-lakeside-light.css", "atelier-plateau-dark.css", "atelier-plateau-light.css", "atelier-savanna-dark.css", "atelier-savanna-light.css", "atelier-seaside-dark.css", "atelier-seaside-light.css", "atelier-sulphurpool-dark.css", "atelier-sulphurpool-light.css",
  "atom-one-dark-reasonable.css", "atom-one-dark.css", "atom-one-light.css", "brown-paper.css", "codepen-embed.css", "color-brewer.css", "darcula.css", "dark.css", "default.css", "docco.css", "dracula.css", "far.css", "foundation.css",
  "github-gist.css", "github.css", "gml.css", "googlecode.css", "gradient-dark.css", "gradient-light.css", "grayscale.css", "gruvbox-dark.css", "gruvbox-light.css",
  "hopscotch.css", "hybrid.css", "idea.css", "ir-black.css", "isbl-editor-dark.css", "isbl-editor-light.css", "kimbie.dark.css", "kimbie.light.css", "lightfair.css", "lioshi.css",
  "magula.css", "mono-blue.css", "monokai-sublime.css", "monokai.css", "night-owl.css", "nnfx-dark.css", "nnfx.css", "nord.css", "obsidian.css", "ocean.css",
  "paraiso-dark.css", "paraiso-light.css", "pojoaque.css", "purebasic.css", "qtcreator_dark.css", "qtcreator_light.css", "railscasts.css", "rainbow.css", "routeros.css",
  "school-book.css", "shades-of-purple.css", "solarized-dark.css", "solarized-light.css", "srcery.css", "stackoverflow-dark.css", "stackoverflow-light.css", "sunburst.css",
  "tomorrow-night-blue.css", "tomorrow-night-bright.css", "tomorrow-night-eighties.css", "tomorrow-night.css", "tomorrow.css", "vs.css", "xcode.css", "xt256.css", "zenburn.css"
]];

EC0.JSCON = [
  `innerWidth`,
  `document.documentElement.clientWidth`,
  `screen.width`,
  `location.href`,
  `navigator.onLine`,
  `Object.fromEntries(
 ["onLine", "appCodeName", "appName", "platform", "product", "vendor", "userAgent", "userAgentData"]
 .map(e => [e, navigator[e]]) )`,
  `new Date().toUTCString()`,
  `new Date().toISOString()`,
  `new Date().toLocaleString()`,
  `encodeURI("abc !\\"#$%&'()*+,-./:;<=>?@[\\\\]^_\`{|}~123")`,
  `decodeURI("%22%20%22%25%3C%3E%5B%5C%5D%5E%60%7B%7C%7D")`,
  `Array.from(Array(5).keys())`,
  `Object.keys(ecomjs)`,
  `Object.fromEntries( Object.entries(ecoqjs)
 .map(oe => [oe[0], oe[1].toString()]) )`,
  `Object.keys(localStorage).filter(e => !/mrview-/.test(e))`,
  `//localStorage["key"] = "value"`,
  `//localStorage.removeItem("key")`,
  `Object.getOwnPropertyNames(Math)`,
  `Object.getOwnPropertyNames(Number)`,
  `EC0.INSTR[0]`,
  `EC2.u2Blob("avatar000.png")`,
  `EC2.objQA("urls")`,
  `EC2.objQA("epsets")`,
  `EC2.objQA("updpch")`,
  `EC2.objQA("MODJS.keys")`,
  `EC2.objQA("TMPLS.publmgr").parseconfigs.scriptsconstr[0].deftxt`,
  `// Post-login activation of custom CouchDB access
 qcontxta.value = JSON.stringify(EC2.objQA("idtoks.idTokenPayload"), null, 2); EC2.qconSyncD();`,
  `//PouchDB("mydb1").get("myfile").then(doc => doc.filefrags[0].contenttxt)`,
  `fetch(EC2.u2Blob("ebook-annos-fns.js")).then(resp => resp.text())`,
  `document.head.outerHTML.replace(/<style[^]+<\\/style>\\n?/, "")`,
  `document.querySelector('head>style').innerHTML`,
  `document.querySelector('#ecolinks').innerHTML`,
  `document.querySelector('#iniscripts').innerHTML.replace(/(?=<\\w)/g, "\\n")`,
  `document.querySelector('#iniscripts>script:last-child').outerHTML`,
  `document.querySelector('#ecoscripts').innerHTML`,
  `document.querySelector('body>script:last-child').outerHTML`,
  `Array.from(document.querySelectorAll('[id]')).map(e => e.id)`,
  `Array.from(document.querySelectorAll('script')).map(e => e.src)`,
  `sc2Inj = u => { let n = document.createElement('script'); !(n.src = u) || document.querySelector('#iniscripts').appendChild(n); }; ""`,
  `import("../-dev/prj10.js").then(m => m.jscmds).catch(e => e)`,
  `window.xstor = window.xstor || {};
 import("../-dev/prj10.js").then(m => xstor[m._module || "xmod" + Object.keys(xstor).map(k => k.replace(/^xmod(?=\\d*$)|.*/, "")).reduce((a, b) => +b > +a ? b : a, 1)] = m).then(Object.keys).catch(e => e)`,
  `getComputedStyle(document.documentElement).width`,
  `getComputedStyle(document.documentElement).font`,
  `Array.from(document.styleSheets).map(ss => ss.href)`,
  `Array.from(document.styleSheets[0].rules).map(ru => ru.cssText)`,
  `indexedDB.databases()`,
  `caches.keys()`,
  `caches.keys().then( keys =>
 caches.open(keys[0]).then( cache => cache.keys().then( keys =>
 keys.map(k => ({ url: k.url, mode: k.mode, dest: k.destination })) )))`,
  `Object.keys(window).filter( pty =>
 Object.entries(Object.getOwnPropertyDescriptor(window, pty) || "")
 .filter(e => ['value', 'writable', 'enumerable'].includes(e[0]) && e[1])
 .length === 3 )`,
  `{ let k, keys = [];
 for (k in document.documentElement) keys.push(k);
 keys.filter(k => !/^on|^aria/.test(k)).sort(); }`,
  `// JavaScript inspect, helper functions
 I1 = ecoqjs.jvarXtract; "" // generate array of JS variable names
 I2 = ecoqjs.jcmtXtract; "" // list JS function names & comments
 I3 = s => s.replace(/[^]+?\\n(function rdataFetch.+(?:\\n.+)+?(?:;?\\s*};?|;)\\n|(?=.*$))[\\n\\S][^]*/, "$1"); ""`,
  `s0 = ecoscripts.innerHTML; ""; // I1(s0)`,
  `Q1 = (k = "f.c") => Promise.resolve(EC2.objQA(k)); ""; // Q1().then(I2)`,
  `fetch("../-app-eco/eco-ctrl0.js").then(re => re.text()) //.then(I3)`,
  `// Console table: ASCII (Latin, Basic) & 8-bit-character (Latin-1 Supp) reference
 Array.from(Array(64).keys()).map(e => [0, 64, 128, 192].map(d => "0x" + (d + e).toString(16) + (!d && e < 16 ? "  " : " " + String.fromCodePoint(d + e))).join("\\t")).join("\\n")`,
  `// Preview table: ASCII (Latin, Basic) & 8-bit-character (Latin-1 Supp) reference
 Array.from(Array(64).keys()).map(e => [0, 64, 128, 192].map(d => "0x" + (d + e).toString(16) + (!d && e < 16 ? "  " : d + e == 124 ? " \\\\|" : " " + String.fromCodePoint(d + e))).join(" | ")).join("\\n")`,
  `// Console table: Greek alphabet reference
 Array.from(Array(25).keys()).map(e => (913 + e) + "/" + (945 + e) + " " + [913, 945].map(d => String.fromCodePoint(d + e)).join(" ")).join("\\n")`,
  `// Console table: space- & odd-character reference
 ecomjs.spachars.map(e => e[1] + "\\n  ]" + (/^(?:9|10|11|12|13|820[67]|823[23])$/.test(e[0]) ? "" : String.fromCodePoint(e[0])) + "[\\t0x" + e[0].toString(16) + "\\t" + (e[2] || "")).join("\\n")`,
  `// Preview table: space- & odd-character reference
 ecomjs.spachars.map(e => "| ]" + (/^(?:9|10|11|12|13|820[67]|823[23])$/.test(e[0]) ? "" : String.fromCodePoint(e[0])) + "[ | " + e[0] + " | 0x" + e[0].toString(16) + " | " + e[1] + " | " + (e[2] || "").replace(/&/g, "&amp;") + " |").join("\\n")`,
  `// Console table: 2000s character reference
 Array.from(Array(64).keys()).map(n => (n += 0x2000) && [0, 64, 128, 192].map(d => "0x" + (n + d).toString(16) + " " + String.fromCodePoint(n + d)).join("  \\t")).join("\\n")`
];

EC0.XREQD = {
  xmet: 'GET',
  xmts: ['GET', 'GET', 'POST', 'POST'],
  url:  localStorage["_ecoxserver"]
    || "https://us-south.functions.appdomain.cloud/api/v1/web/f9c5f19e-072b-41a9-805e-d55d5e5d121c",
  epts: ["", "/eco/project-list.json", "/eco/db-query.json", "/eco/key-request.json"],
  prms: {},
  hdrs: {},
  bmet: 'json',
  bmts: ['json']
};

EC0.CTXD = [
  {
    USRNAM: "username",
    PSSWRD: "password",
    DBORIG: "https://subdomain.cloudant.com",
    DBPUBL: false,
    DBNAME: "myPrjHomeDB01",
    FILEID: "",
    ATTKEY: "",
    OPTS:   {}
  },
  {
    DBNAME: "myPrjHomeDB02",
    FILEID: "",
    ATTKEY: "",
    OPTS:   {}
  },
  {
    DBNAME: "myPrjHomeDB03",
    FILEID: "",
    FILREV: ""
  },
  {
    DBNAME: "myPrjHomeDB04",
    FILEID: "_design/myddoc",
    VIEW:   "myview"
  },
  {
    DBNAME: "myPrjHomeDB05",
    DESTROY:false,
    COMPACT:false,
    CLEANUP:false
  },
  {
    DBNAME: "myPrjHomeDB06",
    FILEID: "myfile",
    DELETE: true
  },
  {
    DBNAME: "myPrjHomeDB07",
    FILEID: "myfile",
    ATTKEY: "myatt",
    CTYPE:  "text/plain",
    CBLOB:  "blob:...",
    COSEND: "",
    COSBKT: "",
    REMOVE: false
  },
  {
    USRNAM: "username",
    PSSWRD: "password",
    DBORIG: "https://subdomain.cloudant.com",
    DBNAME: "myPrjHomeDB08",
    RMTFR:  true,
    RMTTO:  false,
  },
  {
    DBNAME: "myTeamDB",
    FILEID: "contactID",
    UROLES: ["Contributor"]
  }
];

EC0.INSTR = [
  '### App JS Objects -- Quick-Access Notation\n\n'
+ ' $0 or $epsets | custom app settings\n'
+ ' $1 or $idtoks | IBM identity & access tokens\n'
+ ' $2 or $accts  | CouchDB user accounts\n'
+ ' $3 or $team   | team-member identities\n'
+ ' $4 or $urls   | preloaded, web-asset (BLOb-)URLs\n'
+ ' $5 or $MODJS  | app bundled, JS modules\n'
+ ' $6 or $TMPLS  | app bundled, DB-file templates\n'
+ ' $7 or $INSTR  | HTTP-console instructions\n'
+ ' $8 or $CTXD   | CouchDB-transactions data templates\n'
+ ' $9 or $XREQD  | fetch-requests data template\n'
+ ' $JSCON        | common-use JS-console commands\n'
+ ' $STYS         | HighlightJS CSS-file lists\n'
+ ' $SDOCS        | ready-made, publishable source documents\n'
+ ' $wdGen        | generated result (HTML web doc) of working, publmgr file\n'
+ ' $filewkg, $f1 | working-file JSON\n'
+ ' $file2nd, $f2 | loaded 2nd-file JSON\n'
+ ' $tmp1ff       | loaded publmgr template of working-file’s content\n'
+ ' $tmp1pc       | loaded publmgr template of working-file’s parse configs\n'
+ ' $pf3stor      | File-load select-list data storage\n'
+ ' $lnkstor      | current, CSS @import expansion data\n'
+ ' $updpch       | remote CouchDB, last-sync data\n'
+ ' $updseq       | remote CouchDB, last-sync sequence number\n'
+ ' $econet       | retrieved ECONET project previews\n'
+ ' $dbpch        | PouchDB object of currently open DB\n'
+ ' $urole        | user’s team role in currently open DB\n'
+ ' $(global-var) | system/user-created global variable (primitive/JS-object/method)\n\n'
+ '__Notes__\n'
+ '- Append `.`-idx/key to access specific element (by index) or property (by key) within object.\n'
+ '- Append `.keys` (or `.k`) to list all property keys of object.\n'
+ '- For `$filewkg` (or `$f1`) & `$file2nd` (or `$f2`):\n'
+ '  + if loaded DB file has content, append `.c` to return content text only;\n'
+ '  + if publmgr file is loaded, append `.s` to return style text only;\n'
+ '  + if publmgr file is loaded, append `.h` to return generated result (HTML web doc).\n'
+ '- Objects may also be accessed from within script using app JS method `EC2.objQA()`.  \n'
+ '  Provide quick-access notation as first argument -- surrounded by quotes, but without leading `$`.\n'
+ '- Web-asset BLOb-URLs may be individually accessed from within script using app JS method `EC2.u2Blob()`.  \n'
+ '  Provide web-asset name as first argument -- surrounded by quotes.\n'
+ '- Web doc may be generated from publmgr JSON within script using app JS method `EC2.wdGen()`.  \n'
+ '  Provide publmgr JSON (object literal or object reference, without quotes) as first argument.\n',
  '### COUCHDB SYNC INSTRUCTIONS ###\n\n'
+ 'In *HTTP console*, enter transaction data & tap *SyncD*:\n\n'
+ '- Get/Set localStorage data (like, DB access data).  \n'
+ '  Setter JSON, e.g.:\n'
+ '  {\n'
+ '    "$_couchaccts": [\n'
+ '      { "DBNAME": "mydb1" },\n'
+ '      { "DBNAME": "mydb2" }\n'
+ '    ]\n'
+ '  } // set array of (remote) CouchDB accounts\n'
+ '  { "$_couchaccts": null }\n'
+ '    // unset CouchDB-account data\n'
+ '  Getter notation, e.g.: `_couchaccts`, `_` (shorthand), `1` (acct-index), `mydb2` (acct-DBNAME), `_ecoidtoks`, `_ecopresets`\n\n'
+ '- Display open local-DB info: ` ` (blank)\n\n'
+ '- Display list of local DBs: `/_all_dbs`\n\n'
+ '- Create/Open/Close local DB: `/` or `/`-DBNAME\n\n'
+ '- Create/Open/DESTROY/COMPACT/CLEANUP local/remote DB.  \n'
+ '  In transaction JSON, specify DB name; If relevant, include destructive-action property with value `true`, e.g.:\n'
+ '  {\n'
+ '    "DBNAME": "myPrjHomeDB01",\n'
+ '    "COMPACT":true\n'
+ '  }\n\n'
+ '- Create/DESTROY multiple, local DBs at once.  \n'
+ '  Provide multiple transaction objects within array, e.g.:\n'
+ '  [\n'
+ '    { "DBNAME": "mydb1", "DESTROY": true },\n'
+ '    { "DBNAME": "mydb2", "DESTROY": true },\n'
+ '    { "DBNAME": "mydb3" },\n'
+ '    { "DBNAME": "mydb4" }\n'
+ '  ]\n\n'
+ '- Perform SYNC operation.  \n'
+ '  Provide remote-DB transaction JSON (while matching, local DB is open), e.g.:\n'
+ '  {\n'
+ '    "USRNAM": "username",\n'
+ '    "PSSWRD": "password",\n'
+ '    "DBORIG": "https://subdomain.cloudant.com",\n'
+ '    "DBNAME": "myPrjHomeDB01"\n'
+ '  }\n'
+ '  For one-direction SYNC, include in transaction JSON `RMTFR`/`RMTTO` property with value `true`, e.g.:\n'
+ '  { ..., "RMTFR": true } // for import only\n'
+ '  { ..., "RMTTO": true } // for export only\n',
  '### COUCHDB QUERY INSTRUCTIONS ###\n\n'
+ '__Target:__ Query result gets sent to either *Preview* screen (for image) or one of *File Edit* & *JSON/Text Edit* screens (for text). Text result is loaded into *CONTENT* pane of *File Edit* screen only if field is both available & visible during import -- otherwise, into *JSON/Text Edit* screen.\n\n'
+ '__Alert:__ Working-file data is overwritten. No warning is given.\n\n'
+ 'In *HTTP console*, enter transaction data & tap *RetrvD*:\n\n'
+ '- ` ` (blank) -- to reset *Preview* screen, *Discuss* screen & *Edit Space* (i.e., unload working file & clear all text-edit fields).\n\n'
+ '- `$`-obj.idx/key -- to access active, JS-object data within app, e.g.:  \n'
+ '  `$` (list available JS objects),  \n'
+ '  `$team` (list abbr\'d, team-member data),  \n'
+ '  `$team.username` (retrieve one user identity)\n\n'
+ '- Local-DB transaction endpoint/filepath, e.g.:  \n'
+ '  `/_all_dbs`,  \n'
+ '  `_all_docs`, `_design_docs`, `_changes`,  \n'
+ '  `/`-DBNAME + `/` + FILEID + `/`-ATTKEY,  \n'
+ '  `//`-FILEID (retrieve non-DB, LOCAL temporary file)\n\n'
+ '- Remote-DB URL, e.g.:  \n'
+ '  `../../db/file/attach`,  \n'
+ '  `https://subdomain.cloudant.com​/db/file/attach`,  \n'
+ '  `https://username:password​@subdomain.cloudant.com​/db/file/attach`\n\n'
+ '- Transaction JSON, e.g.:  \n'
+ JSON.stringify(EC0.CTXD[0], null, 2)
  .replace(/"FILEID": "/, "$&myfile").replace(/^/gm, "  ")
+ '\n  { "url": "https://host/pathname" } // retrieve non-DB, remote text\n',
  '### COUCHDB COMMIT INSTRUCTIONS ###\n\n'
+ '__DB file storage:__ Working file gets committed (added/updated) to local/remote database. Working-file format must be JSON (i.e., must comprise keys/values). File `_id` property (&/or, transaction-JSON `FILEID` property) must provide unique, valid filename. Transaction data must, at least, include name of existing DB (e.g., as value of `DBNAME` property).  \n'
+ '__DB file deletion:__ DB file named in `FILEID` property gets flagged as deleted if `DELETE` property with value `true` is included in transaction JSON. Alternatively, same result is achieved manually when working file is committed after it is given `_deleted` property with value `true`.  \n'
+ '__Multiple commits:__ Multiple DB files are added/updated/deleted at once if `docs` property is included in transaction JSON, & provides array of one or more DB-file objects. For each file to be updated/deleted, corresponding file object must include `_rev` property with same value as preexisting file\'s revision-number string.\n\n'
+ 'In *HTTP console*, enter transaction data & tap *SubmD*:\n\n'
+ '- Add/update local/remote DB file.  \n'
+ '  Provide transaction data either as local-filepath/remote-URL or as JSON, e.g.:  \n'
+ '  `/myPrjHomeDB01/myfile`,  \n'
+ '  `https://username:password​@subdomain.cloudant.com​/db/file`,  \n'
+ JSON.stringify(EC0.CTXD[0], null, 2)
  .replace(/"FILEID": "/, "$&myfile").replace(/^/gm, "  ")
+ '\n\n- Delete local/remote DB file.  \n'
+ '  Include `DELETE` property with value `true`, e.g.:\n'
+ JSON.stringify(EC0.CTXD[5], null, 2).replace(/^/gm, "  ")
+ '\n\n- Add/update/delete multiple, local/remote DB files at once.  \n'
+ '  Provide `docs` property with multiple, DB-file objects, e.g.:\n'
+ '  {\n'
+ '    "DBNAME": "myPrjHomeDB01",\n'
+ '    "docs":   [\n'
+ '      { "_id": "myfile01", "_rev": "rev01", "_deleted": true },\n'
+ '      { "_id": "myfile02", "_rev": "rev02", "content": "edited-file-cnt02" },\n'
+ '      { "_id": "myfile03", "content": "new-file-cnt03" },\n'
+ '      { "_id": "myfile04", "content": "new-file-cnt04" },\n'
+ '    ]\n'
+ '  }\n',
  '### COUCHDB ATTACH INSTRUCTIONS ###\n\n'
+ '__Asset storage:__ Any text provided in *File-Data* field of *JSON/Text Edit* screen is converted to BLOb & attached to DB file named in `FILEID` property of transaction JSON. Alternatively, BLOb data may be provided directly in `CBLOB` property of transaction JSON.  \n'
+ '__Asset removal:__ If `REMOVE` property with value `true` is included in transaction JSON, attachment named with `ATTKEY` property is removed from DB file named with `FILEID` property.  \n'
+ '__Webpage direct:__ If working file is type *publmgr*, *publmgr* file gets parsed first; resulting webpage is then converted to BLOb & attached to indicated DB file.\n\n'
+ 'In *HTTP console*, enter transaction data & tap *SubmD*. Provide transaction data as:\n\n'
+ '- local-filepath/remote-URL, e.g.:  \n'
+ '  `/myPrjHomeDB07/-res-css​/mystylesheet.css`,  \n'
+ '  `https://username:password​@subdomain.cloudant.com​/db/file/attach`\n\n'
+ '- JSON text, e.g.:  \n'
+ '  {\n'
+ '    "DBNAME": "myPrjHomeDB07",\n'
+ '    "FILEID": "-res-css",\n'
+ '    "ATTKEY": "mystylesheet.css",\n'
+ '    "CTYPE":  "text/css"\n'
+ '  } // provide file content in *JSON/Text Edit* screen\n'
+ '  {\n'
+ '    "DBNAME": "myPrjHomeDB07",\n'
+ '    "FILEID": "-res-css",\n'
+ '    "ATTKEY": "mystylesheet.css",\n'
+ '    "CTYPE":  "text/css",\n'
+ '    "CBLOB":  "blob:..."\n'
+ '  } // provide converted file content in `CBLOB` property\n'
+ '  {\n'
+ '    "DBNAME": "myPrjHomeDB07",\n'
+ '    "FILEID": "-res-css",\n'
+ '    "ATTKEY": "mystylesheet.css",\n'
+ '    "REMOVE": true\n'
+ '  }\n',
  '### DROPBOX TRANSACTION INSTRUCTIONS ###\n\n'
+ 'In *HTTP console*, enter JSON transaction data & tap either *RetrvD* or *SubmD*:  \n'
+ '{\n'
+ '  "dbox": "list_folder | get_metadata | download | upload | delete",\n'
+ '  "path": "/path/folder | /path/file",\n'
+ '  "mode": "overwrite"\n'
+ '} // for upload, provide file content in *JSON/Text Edit* screen\n\n'
+ 'To set *Dropbox* access token, enter following in *HTTP console* & tap *SyncD*:  \n'
+ '{ "$__dbat": "accesstoken" }\n',
// ###
  'Alert: File-update process disrupted.\nNote that credentials are required for DB commit.'
+ '\nAlso, filename (DB file ID) must:\n- be unique\n- begin with alphanumeric'
+ '\n- contain no spaces or punctuation,\n  except `_ ! . * + ~ -`'
+ '\n- not end with app flag characters,\n  like `~ ~00 * *(00)`',
// ###
  'Alert: Some @import-expansion conditions are not met.'
+ '\nTo generate CSS @import expansions, edit necessary file settings, then reload/render the publmgr file.'
+ '\nCheck that the `insertposition` property has a standard insert value, the `wrapperincl` property is set to `true`, and the `htmllinktxt` property has at least one, leading `@import URL;` line.'
+ '\nAlso, if preloading (option 2 below), check that the `linksinclrender` property is set to `true` and that the `parseconfigs.linksincl` field contains at least one CSS filepath.'
+ '\nDATA RETRIEVAL OPTIONS'
+ '\n1) If simply using DB queries or HTTP requests to generate the style data (at the time file is loaded), the publmgr file must be loaded with the `linksinclrender` property (of the `parseconfigs.linksconstr` field) set to `false`.'
+ '\n2) Otherwise, if generating style data from preloaded CSSOM styleSheets, CSS-file resources must be specified using the `parseconfigs.linksincl` field -- and they must be preloaded and their style data captured, then injected. This is accomplished in two passes: by first rendering the webpage in Preview with `linksinclrender` activated, then rendering the webpage in Preview a second time with `linksinclrender` de-activated.'
];

EC0.TMPLS = {
  publmgr: {
    _id: "1-publmgr",
    _rev: "",
    file_type: "eco-publmgr",
    file_created: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: "",
      misc: "",
      version: "0.1.0"
    },
    file_updated: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: "",
      misc: "",
      version: "0.1.0"
    },
    contributors: [""],
    loadconfigs: {
      tabselected: "SOURCE1",
      atimportexpand: false,
      pcfgstemplate: "",
      fragstemplate: "",
      commondirpath: "",
      fragsrcxs: [""]
    },
    parseconfigs: {
      scriptsconstr: [
        {
          fncname: "",
          filepath: "",
          usedescription: "",
          htmlscriptload: "",
          features: [
            {
              switchon: false,
              keytxt: "",
              valtxt: ""
            }
          ],
          deftxt: "function (str) {\n  return str\n  ;\n}"
        }
      ],
      scriptsincl: [
        {
          fncname: "",
          applytofrag: [
            true
          ]
        }
      ],
      linksconstr: {
        linksinclrender: true,
        insertposition: 0,
        wrapperincl: true,
        wraptagstart: "<style type=\"text/css\">",
        wraptagend: "</style>",
        htmllinktxt: ""
      },
      linksincl: [
        {
          filepath: "",
          applytorender: true
        }
      ]
    },
    filefrags: [
      {
        idtxt: "SOURCE1",
        labeltxt: "SOURCE1",
        titletxt: "SOURCE pane #1.",
        contenttxt: ""
      }
    ]
  },
  srcdoc: {
    _id: "2-srcdoc",
    _rev: "",
    file_type: "eco-srcdoc",
    file_created: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: "",
      misc: ""
    },
    file_updated: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: "",
      misc: ""
    },
    media_type: "text/plain",
    content: ""
  },
  scrap: {
    _id: "3-scrap",
    _rev: "",
    file_type: "eco-scrap",
    ts_created: 0,
    ts_updated: 0,
    loc_subdir: "",
    content: ""
  },
  event: {
    _id: "4-event", //"idGen(\"~E\", ts0, un0)"
    _rev: "",
    file_type: "eco-event",
    file_created: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: ""
    },
    file_updated: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: ""
    },
    headline: "",
    time: "",
    place: "",
    map_refs: [""],
    people: [""],
    description: ""
  },
  prjid: {
    _id: "5-prjid",
    _rev: "",
    file_type: "eco-prjid",
    file_created: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: ""
    },
    file_updated: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: ""
    },
    prj_name: "",
    image_src: "",
    descr_short: "This project is about ...",
    descr_extd: ""
  },
  anno: {
    _id: "6-anno",
    _rev: "",
    file_type: "eco-anno",
    file_created: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: ""
    },
    linkref: "",
    tags: [""],
    tocfmt: "",
    texthl: [""]
  },
  memo: {
    _id: "7-memo", //"idGen(\"~m\", ts0, un0)"
    _rev: "",
    file_type: "eco-memo",
    file_created: {
      username: "",
      timestamp: 0,
      dborigin: "",
      dbname: "",
      subdir: ""
    },
    linkref: "",
    from: "",
    to: [""],
    subject: "",
    body: ""
  },
  assets: {
    _id: "8-assets",
    _rev: "",
    file_type: "eco-assets",
    ts_created: 0,
    ts_updated: 0,
    loc_subdir: "",
    description: "This database file contains attachments, which are webpages and web assets.\n\nThe file `_id` is given a leading dot (.) to indicate a database \"assets subdirectory\". It corresponds to a matching file subdirectory outside the database.\n\nIn other words, the root filename (the `_id` minus the dot) is also the subdirectory name that holds duplicate asset files on a local computer file system.",
    _attachments: {}
  },
  contact: {
    _id: "9-contact", //"!groupID-cUsername"
    _rev: "",
    file_type: "eco-contact",
    ts_created: 0,
    ts_updated: 0,
    loc_subdir: "",
    name_full: "",
    name_user: "",
    birthdate: "",
    roles: [""],
    emails: [""],
    phones: [""],
    locations: [
      {
        label: "home",
        street: "",
        city: "",
        state: "",
        zip: ""
      }
    ],
    social_profiles: [""],
    project_urls: [""],
    team_groups: [""],
    image_src: "",
    bio_short: "",
    miscellany: ""
  }
};

EC0.MODJS = { // 18
  xchar2htmlnc: {
    fncname: "xchar2htmlnc",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "xchar-to-htmlnc@0.0.1  \n- Convert x-character glyph to respective HTML name code.\n- Dependencies: htmlxncodes",
    htmlscriptload: `<script type="module">
import xchar2htmlnc from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = xchar2htmlnc(mycon.innerHTML);
</script>`,
    features: [{ htmlxncodes: "ecomjs.htmlxncodes" }],
    fnc: null
  },
  xchar2htmlnc1: {
    fncname: "xchar2htmlnc1",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "xchar-to-htmlnc1@0.0.1  \n- Convert x-character glyph to respective HTML name code.\n- Immunize HTML X, PRE, CODE element from conversion.\n- Dependencies: htmlxncodes",
    htmlscriptload: `<script type="module">
import xchar2htmlnc1 from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = xchar2htmlnc1(mycon.innerHTML);
</script>`,
    features: [{ htmlxncodes: "ecomjs.htmlxncodes" }],
    fnc: null
  },
  htmlnc2xchar: {
    fncname: "htmlnc2xchar",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "htmlnc-to-xchar@0.0.1  \n- Convert HTML name-code to respective x-character glyph.\n- Dependencies: htmlxncodes",
    htmlscriptload: `<script type="module">
import htmlnc2xchar from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = htmlnc2xchar(mycon.innerHTML);
</script>`,
    features: [{ htmlxncodes: "ecomjs.htmlxncodes" }],
    fnc: null
  },
  htmlnc2xchar1: {
    fncname: "htmlnc2xchar1",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "htmlnc-to-xchar1@0.0.1  \n- Convert HTML name-code to respective x-character glyph.\n- Immunize HTML X, PRE, CODE element from conversion.\n- Dependencies: htmlxncodes",
    htmlscriptload: `<script type="module">
import htmlnc2xchar1 from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = htmlnc2xchar1(mycon.innerHTML);
</script>`,
    features: [{ htmlxncodes: "ecomjs.htmlxncodes" }],
    fnc: null
  },
  dcharClean: {
    fncname: "dcharClean",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "dchar-clean@0.0.1  \n- Identify/repair Markdown-sensitive, disruptive-character sequence.",
    htmlscriptload: `<script type="module">
import dcharClean from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = dcharClean(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  dchar2code: {
    fncname: "dchar2code",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "dchar-to-code@0.0.1  \n- Convert disruptive-character glyph to respective HTML name, dec or hex code.\n- mditPrepPhase6: \\-sequence conversion",
    htmlscriptload: `<script type="module">
import dchar2code from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = dchar2code(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  srcCodeIncl: {
    fncname: "srcCodeIncl",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: `src-code-incl@0.0.1
Inserts URL-referenced, preloaded source code (or JavaScript-object data) into flagged HTML tags.

Uncheck/recheck this parser's apply-toggle(s) to attempt, for each flagged HTML tag, to retrieve/preload current, source-code-include data from an available, external file.

Flagged HTML tags are tags with attribute:
\`src-code-incl=[ URL, null/false, "src"/true, or fnc/obj/global-name-str ]\`

- URL : Relative/absolute location of external data file to be imported.
- null/false : Either one indicates deselection of tag for data import — same as removing \`src-code-incl=\` attribute.
- "src"/true : Either one indicates that a URL is provided on \`src=\` attribute for data lookup/load.
- fnc/obj/global-name-str : For \`<script>\` tags that point to an external file by a \`src=\` attribute, if the JS file creates a global namespace (JS object) and the \`src-code-incl=\` attribute refers to an element in that namespace, run the parser twice so that the global method/property data gets loaded into the window object with the first pass, then gets inserted into the RESULT text with the second.`,
    htmlscriptload: `<script type="module">
import srcCodeIncl from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = srcCodeIncl(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }, {}],
    fnc: null
  },
  moduleIX: {
    fncname: "moduleIX",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: `module-ix@0.0.1
- Expand each module \`import\` statement of each module-script block.
  e.g. \`import annosfns from "../../a00/-res-js/ebook-annos-fns.mjs";\`
- Data is drawn from preloaded function-object in global namespace via separate \`<script>\` resource call.
- Separate \`<script>\` must have \`fnc-gl-name=\` attribute to associate function name with external resource location.`,
    htmlscriptload: `<script type="module">
import moduleIX from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = moduleIX(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  annosGlDeploy: {
    fncname: "annosGlDeploy",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "annos-gl-deploy@0.0.1  \n- Apply lightweight annotations in flagged comment block to HTML doc.",
    htmlscriptload: `<script type="module">
import annosGlDeploy from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = annosGlDeploy(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  hdgIDGen: {
    fncname: "hdgIDGen",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "hdg-id-gen@0.0.1  \n- Generate standardized heading ID from provided heading text.",
    htmlscriptload: `<script type="module">
import hdgIDGen from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = hdgIDGen(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  menubarGen: {
    fncname: "menubarGen",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "menubar-gen@0.0.1  \n- Pre-parse `div.menubar` block with Markdownit- and custom- script.\n- Dependencies: hdgIDGen",
    htmlscriptload: `<script type="module">
import menubarGen from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = menubarGen(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  headerGen: {
    fncname: "headerGen",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: `header-gen@0.0.1
- Convert header-block Pandoc-to-HTML -- or else insert hidden header block with anchor.
- Strip any remaining Pandoc header block.`,
    htmlscriptload: `<script type="module">
import headerGen from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = headerGen(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  mdtblConv21: {
    fncname: "mdtblConv21",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "mdtbl-conv-2-1@0.0.1  \n- Convert Markdown table type 2 to type 1.",
    htmlscriptload: `<script type="module">
import mdtblConv21 from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = mdtblConv21(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  mditPrepPhase2: {
    fncname: "mditPrepPhase2",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "mdit-prep-phase2@0.0.1  \n- Phase 2: typography / smart punct conversion",
    htmlscriptload: `<script type="module">
import mditPrepPhase2 from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = mditPrepPhase2(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  mditPrepPhase5: {
    fncname: "mditPrepPhase5",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "mdit-prep-phase5@0.0.1  \n- Phase 5: decimal/alpha/roman -ol prep",
    htmlscriptload: `<script type="module">
import mditPrepPhase5 from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = mditPrepPhase5(mycon.innerHTML);
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: null
  },
  markdownit: {
    fncname: "markdownit",
    filepath: "../../a00/-res-mdit/markdown-it.min.js",
    usedescription: `markdown-it@12.0.6
Markdown parser done right. Fast and easy to extend.
- Follows the CommonMark spec + adds syntax extensions and sugar (URL autolinking, typographer).
- Configurable syntax! You can add new rules and even replace existing ones.
- High speed.
- Safe by default.
- Community-written plugins and other packages on npm.

__presetName__
MarkdownIt provides named presets as a convenience to quickly enable/disable active syntax rules and options for common use cases.
- 'commonmark' - configures parser to strict CommonMark mode.
- default - similar to GFM, used when no preset name given. Enables all available rules, but still without HTML, typographer and autolinker.
- 'zero' - all rules disabled. Useful to quickly setup your config via .enable(). For example, when you need only bold and italic markup and nothing else.

https://github.com/markdown-it/markdown-it
https://markdown-it.github.io/markdown-it/`,
    htmlscriptload: `<script src="../../a00/-res-mdit/markdown-it.min.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it-abbr.min.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it-container.min.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it-deflist.min.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it-emoji.min.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it-footnote.min.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it.min-for-inline.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it.min-ins.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it.min-mark.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it.min-sub.js" type="text/javascript"></script>
<script src="../../a00/-res-mdit/markdown-it.min-sup.js" type="text/javascript"></script>
<script type="text/javascript">
window.onload = function () {
  let mdit = window.markdownit && window.markdownit({
      html: true,
      xhtmlOut: true,
      breaks: false,
      linkify: true,
      typographer: false,
      highlight: fncHilit(str, lang)
    })
    .use(window.markdownitAbbr)
  //.use(window.markdownitContainer, 'warning')
    .use(window.markdownitDeflist)
  //.use(window.markdownitEmoji)
    .use(window.markdownitFootnote)
  //.use(window.markdownitForInline, 'foo_replace', 'text', fooReFnc(tokens, idx))
    .use(window.markdownitIns)
    .use(window.markdownitMark)
    .use(window.markdownitSub)
    .use(window.markdownitSup);
  let mycon = document.querySelector('#containerid');
  mycon.innerHTML = mdit && mdit.render(mycon.innerHTML);
};
</script>`,
    features: [
      { switchon: 1, keytxt: "HTML" },
      { switchon: 1, keytxt: "xhtmlOut" },
      { switchon: 0, keytxt: "breaks" },
      { switchon: 1, keytxt: "linkify" },
      { switchon: 0, keytxt: "typographer" },
      { switchon: 0, keytxt: "highlight", valtxt: "" },
      { switchon: 1, keytxt: "markdownitAbbr" },
      { switchon: 0, keytxt: "markdownitContainer", valtxt: "tip, note, alert" },
      { switchon: 1, keytxt: "markdownitDeflist" },
      { switchon: 0, keytxt: "markdownitEmoji" },
      { switchon: 1, keytxt: "markdownitFootnote" },
      { switchon: 0, keytxt: "markdownitForInline", valtxt: "" },
      { switchon: 1, keytxt: "markdownitIns" },
      { switchon: 1, keytxt: "markdownitMark" },
      { switchon: 1, keytxt: "markdownitSub" },
      { switchon: 1, keytxt: "markdownitSup" },
      { switchon: 1, keytxt: "markdownItAnchor", valtxt: "3" },
      { switchon: 0, keytxt: "markdownItAttrs" },
      { switchon: 1, keytxt: "markdownItDecorate" },
      { switchon: 1, keytxt: "markdownItImplicitFigures" }
    ],
    fnc: function (str, idx, feats = []) {
      let fts2 = EC0.MODJS.markdownit.features
          .map(o2 => feats.find(o1 => o1.keytxt === o2.keytxt) || o2),
        mdit = window.markdownit && window.markdownit({
          html: fts2[0].switchon,
          xhtmlOut: fts2[1].switchon,
          breaks: fts2[2].switchon,
          linkify: fts2[3].switchon,
          typographer: fts2[4].switchon,
          highlight: !fts2[5].switchon ? null : cblock => {
            let lang = (feats.find(ob => ob.keytxt === "highlight") || "").valtxt;
            if (lang && window.hljs && window.hljs.getLanguage(lang)) {
              try { return window.hljs.highlight(cblock, {language: lang}).value;
              } catch (err) { msgHandl("hljs lang error: " + err); }
            }
            try { return window.hljs && window.hljs.highlightAuto(cblock).value;
            } catch (err) { msgHandl("hljs auto error: " + err); }
            return ""; // use external default escaping
          }
        });
      if (!mdit) {
        return str;
      } else {
        fts2.forEach( (ob, i) =>
          i < 6 || [7, 11, 16, 19].includes(i) || !ob.switchon || !window[ob.keytxt]
          || (mdit = mdit.use(window[ob.keytxt])) );
        !fts2[7].switchon || !window.markdownitContainer || (fts2[7].valtxt || "").split(/ *[ ,;] */)
          .forEach(e => mdit = mdit.use(window.markdownitContainer, e));
        !fts2[11].switchon || !window.markdownitForInline
        || (mdit = mdit.use(window.markdownitForInline), 'foo_replace', 'text', fooReFnc(tokens, idx));
        !fts2[16].switchon || !window.markdownItAnchor
        || (mdit = mdit.use(window.markdownItAnchor, { level: +fts2[16].valtxt, permalink: false }));
        !fts2[19].switchon || !window.markdownItImplicitFigures
        || (mdit = mdit.use(window.markdownItImplicitFigures, { dataType: false, figcaption: true, tabindex: false }));
        return mdit.render(str);
      }
    }
  },
  htmlWrapTags: {
    fncname: "htmlWrapTags",
    filepath: "",
    usedescription: `html-wrap-tags@0.0.1
- Wrap the result text with basic HTML, web-doc wrap tags.
- Detect and relocate title and style data.\n
<!DOCTYPE html>
<html lang="en">
<head>
<title> ... </title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
<style> ... </style>
</head>
<body>
...
</body>
</html>`,
    htmlscriptload: `<script type="text/javascript">
(function () {
  let mytxta = document.querySelector('#textareaid'),
    tit = /^<(title\\b)(.*?)>(.+?)<\\/\\1>$/im.exec(mytxta.value)
      || /^<(h\\d|p)\\b.*? (?:id|class)=(['"]?)title\\2>(.+?)<\\/\\1>$/im.exec(mytxta.value)
      || /^<(h\\d|p)\\b(.*?)>(.+?)<\\/\\1>$/im.exec(mytxta.value) || ["", "", "", ""],
    docpts = /^(<style\\b(?:[^<]|<(?=\\/?style\\b))+<\\/style>|)\\s*([^]*)$/.exec(mytxta.value.trim());
  mytxta.value = "<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n<title>"
  + tit[3].replace(/<\\/?\b.+?>/g, "").substring(0, 127)
  + "</title>\\n<meta charset="utf-8" />\\n<meta name="viewport" content=\\"width=device-width, initial-scale=1, user-scalable=yes\\" />\\n"
  + (!docpts[1] ? "" : docpts[1] + "\\n") + "</head>\\n<body>\\n"
  + (docpts[2] || mytxta.value.trim()).replace(/ *<title\\b.*?>.*?<\\/title> *\\n?/i, "")
  + "\\n</body>\\n</html>\\n";
})();
</script>`,
    features: [{ switchon: false, keytxt: "", valtxt: "" }],
    fnc: function (str) {
      let tit = /^<(title\b)(.*?)>(.+?)<\/\1>$/im.exec(str)
          || /^<(h\d|p)\b.*? (?:id|class)=(['"]?)title\2>(.+?)<\/\1>$/im.exec(str)
          || /^<(h\d|p)\b(.*?)>(.+?)<\/\1>$/im.exec(str) || ["", "", "", ""],
        docpts = /^(<style\b(?:[^<]|<(?=\/?style\b))+<\/style>|)\s*([^]*)$/.exec(str.trim());
      return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<title>"
        + tit[3].replace(/<\/?\b.+?>/g, "").substring(0, 127)
        + "</title>\n<meta charset=\"utf-8\" />\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=yes\" />\n"
        + (!docpts[1] ? "" : docpts[1] + "\n") + "</head>\n<body>\n"
        + (docpts[2] || str.trim()).replace(/ *<title\b.*?>.*?<\/title> *\n?/i, "")
        + "\n</body>\n</html>\n";
    }
  },
  html2md: {
    fncname: "html2md",
    filepath: "../../a00/-res-js/u00-html2md.mjs",
    usedescription: "html-to-md@0.0.1  \n- Convert HTML doc to Markdown doc.\n- Dependencies: htmlxncodes",
    htmlscriptload: `<script type="module">
import htmlxncodes from "../../a00/-app-eco/eco-srvc3.mjs";
import html2md from "../../a00/-res-js/u00-html2md.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = html2md(mycon.innerHTML, null, [{ htmlxncodes: htmlxncodes }]);
</script>`,
    features: [{ htmlxncodes: "ecomjs.htmlxncodes" }],
    fnc: null
  }
};
