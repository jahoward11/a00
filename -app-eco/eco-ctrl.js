// Web Application
(function() {
'use strict';
var appid, dbpch, eb1dflt, file2nd, filewkg, fldfoc, idtoks,
  prjsenet, tm0disc, tmp1ff, tmp1pc,
  tmplpdblist, tmplpdbblurbs,
  tmplattlist, tmplprjdisc, tmplpfslist,
  tmpljdedft, tmpljdepty,
  tmplpchlist, tmpldirlist, tmplrmtlist,
  tmplswaplist, tmpldbolist, tmplhlslist,
  tstamp0 = Date.now(),
  reniscurr = false,
  fwinflux = false,
  tm0urole = false,
  tm0cntcs = {},
  lnkstor = [],
  caccts = [],
  epsets = {},
  updpch = {},
  updseq = {},
  updts0 = tstamp0;
const hostgh = /\.github\.io$/.test(window.location.host),
  hostibm = /\.cloudant[\w.]+$/.test(window.location.host),
  hostlh = /^localhost:\d+$|^(?:127\.0|192\.168)\.0\.\d+:\d+$/.test(window.location.host),
  platipd2 = (window.navigator.userAgentData || window.navigator).platform === 'MacIntel'
    && window.screen.height === 1024 && window.screen.width === 768,
  platiphn = (window.navigator.userAgentData || window.navigator).platform === 'iPhone',
  protfile = window.location.protocol === 'file:',
  a00orig = hostibm && window.location.origin || localStorage["_ecoa00orig"],
  a00path = localStorage["_ecoa00path"]
    || (hostgh || hostibm || hostlh || protfile || !a00orig ? "../.." : a00orig) + "/a00",
  asseturls = {
    "eco-srvc1.js":           a00path + "/-app-eco/eco-srvc1.js",
    "eco-srvc2.js":           a00path + "/-app-eco/eco-srvc2.js",
    "eco-srvc3.js":           a00path + "/-app-eco/eco-srvc3.js",
    "eco-srvc3.mjs":          a00path + "/-app-eco/eco-srvc3.mjs",
    //"eco-srvc4.mjs":          a00path + "/-app-eco/eco-srvc4.mjs",
    "bulma0.9-content.css":   a00path + "/-res-css/bulma0.9-content.css",
    "bulma0.9-minireset.css": a00path + "/-res-css/bulma0.9-minireset.css",
    "bulma0.9.3.min.css":     a00path + "/-res-css/bulma0.9.3.min.css",
    "avatar000.png":          a00path + "/-res-img/avatar000.png",
    "ecologo-72.png":         a00path + "/-res-img/ecologo-72.png",
    "ebook-annos-fns.js":     a00path + "/-res-js/ebook-annos-fns.js",
    "srcdiff.js":             a00path + "/-res-js/srcdiff.js"
  },
  pf3stor = {},
  rexatt = /(?:@import +(?:url\(|)['"]?|\S+: *url\(['"]?|^)(?:\.\/|\.\.\/(?:\.\.\/(.*)\/|)(.*)\/|)([^\n\/]+\.(?:giff?|jpe?g|m?js|png|s?css))['"]?\)?;?$/i,
  rexfid = /^$|^_design\/\w+$|^[!.~-]?\w[\w!.*+~-]*$/,
  rexfix = /^_(?!design\/\w+$)|[*~]\(?[0-9]*\)?$/,
  rexibm = /^https:\/\/[\w-]+\.cloudant[\w.]+\//,
  reximg = /\.(?:giff?|jpe?g|png)$/i,
  rexloc = /^(?:(?:\.\.\/\.\.|\.\.|)\/(?=$|\w)|\.\/(?=[^ \/])|\/\/|\$|blob:[\w/:-]*(?!.* ))[ \w/!.*+~-]*$/,
  rexrmt = /^https?:\/\/[ \w/#%!?=&@:.,+~-]+$/;

window.ecoqjs = window.ecoqjs || {};
window.ecomjs = window.ecomjs || {};
window.ECOSDOCS = window.ECOSDOCS || [];

const HLJSSTYS = [[
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

const COUCHTXD = [
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

const ECOXREQD = {
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

const ECOINSTR = [
  '### App JS Objects -- Quick-Access Notation\n\n'
+ ' $0 or $epsets | custom app settings\n'
+ ' $1 or $idtoks | IBM identity & access tokens\n'
+ ' $2 or $accts  | CouchDB user accounts\n'
+ ' $3 or $team   | team-member identities\n'
+ ' $4 or $urls   | preloaded, web-asset (BLOb-)URLs\n'
+ ' $5 or $INSTR  | HTTP-console instructions\n'
+ ' $6 or $TMPLS  | app bundled, DB-file templates\n'
+ ' $7 or $MODJS  | app bundled, JS modules\n'
+ ' $8 or $SDOCS  | ready-made, publishable source documents\n'
+ ' $9 or $wdGen  | generated result (web doc) of working, publmgr file\n'
+ ' $filewkg      | working-file JSON\n'
+ ' $file2nd      | loaded 2nd-file JSON\n'
+ ' $tmp1ff       | loaded publmgr template of working-file???s content\n'
+ ' $tmp1pc       | loaded publmgr template of working-file???s parse configs\n'
+ ' $pf3stor      | File-load select-list data storage\n'
+ ' $lnkstor      | current, CSS @import expansion data\n'
+ ' $updpch       | remote CouchDB, last-sync data\n'
+ ' $updseq       | remote CouchDB, last-sync sequence number\n'
+ ' $econet       | retrieved ECONET project previews\n'
+ ' $dbpch        | PouchDB object of currently open DB\n'
+ ' $urole        | user???s team role in currently open DB\n'
+ ' $XREQD        | fetch-requests data template\n'
+ ' $CTXD         | CouchDB-transactions data templates\n'
+ ' $STYS         | HighlightJS CSS-file lists\n'
+ ' $(global-var) | system/user-created global variable (primitive/JS-object/method)\n\n'
+ '__Notes__\n'
+ '- Append `.`-idx/key to access specific element (by index) or property (by key) within object.\n'
+ '- Append `.keys` to list all property keys of object.\n'
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
+ '  `https://subdomain.cloudant.com???/db/file/attach`,  \n'
+ '  `https://username:password???@subdomain.cloudant.com???/db/file/attach`\n\n'
+ '- Transaction JSON, e.g.:  \n'
+ JSON.stringify(COUCHTXD[0], null, 2)
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
+ '  `https://username:password???@subdomain.cloudant.com???/db/file`,  \n'
+ JSON.stringify(COUCHTXD[0], null, 2)
  .replace(/"FILEID": "/, "$&myfile").replace(/^/gm, "  ")
+ '\n\n- Delete local/remote DB file.  \n'
+ '  Include `DELETE` property with value `true`, e.g.:\n'
+ JSON.stringify(COUCHTXD[5], null, 2).replace(/^/gm, "  ")
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
+ '  `/myPrjHomeDB07/-res-css???/mystylesheet.css`,  \n'
+ '  `https://username:password???@subdomain.cloudant.com???/db/file/attach`\n\n'
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

const ECOTMPLS = {
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

const ECOMODJS = { // 18
  xchar2htmlnc: {
    fncname: "xchar2htmlnc",
    filepath: "../../a00/-app-eco/eco-srvc3.mjs",
    usedescription: "xchar-to-htmlnc@0.0.1  \n- Convert x-character glyph to respective HTML name code.\n- Dependencies: htmlxncodes",
    htmlscriptload: `<script type="module">
import xchar2htmlnc from "../../a00/-app-eco/eco-srvc3.mjs";
let mycon = document.querySelector('#containerid');
mycon.innerHTML = xchar2htmlnc(mycon.innerHTML);
</script>`,
    features: [{ htmlxncodes: ecomjs.htmlxncodes }],
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
    features: [{ htmlxncodes: ecomjs.htmlxncodes }],
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
    features: [{ htmlxncodes: ecomjs.htmlxncodes }],
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
    features: [{ htmlxncodes: ecomjs.htmlxncodes }],
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
- null/false : Either one indicates deselection of tag for data import ??? same as removing \`src-code-incl=\` attribute.
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
      let fts2 = ECOMODJS.markdownit.features
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
              try { return window.hljs.highlight(lang, cblock).value;
              } catch (err) { msgHandl("hljs lang error: " + err); }
            }
            try { return window.hljs && window.hljs.highlightAuto(cblock).value;
            } catch (err) { msgHandl("hljs auto error: " + err); }
            return ""; // use external default escaping
          }
        });
      if (!mdit) { return str;
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
    features: [{ htmlxncodes: ecomjs.htmlxncodes }],
    fnc: null
  }
};

function msgPrefmt(msg, con) {
  let robj, stk;
  return !msg || typeof msg === 'function' || msg instanceof RegExp ? "" + msg
  : msg instanceof XMLHttpRequest
    ? ( !(/^{".+}$/.test(msg.response) && (robj = jsonParse(msg.response)))
      ? msg.response : JSON.stringify(robj, null, 2) )
  : typeof msg !== 'object' || msg instanceof Promise
    || msg instanceof Error && msg.constructor && !msg.reason
    ? msg + (con || !(stk = (msg || "").stack) || stk.indexOf(msg) > -1 ? "" : "\n" + stk)
  : JSON.stringify(msg, null, 2);
}

function msgHandl(msg) {
  msg instanceof Error && window.console.error(msg);
  document.querySelector('#econav0 #qcontxta').value
  += "\n\n  * * * * *\n" + msgPrefmt(msg).trim().replace(/^/gm, "  ") + "\n  * * * * *\n";
}

function jsonParse(jobj) {
  try { return (jobj = JSON.parse(jobj)) != null && typeof jobj === 'object' ? jobj
    : msgHandl("Alert: #/bool/null was provided instead of JSON-object text.") && undefined;
  } catch (err) { msgHandl("Alert: Invalid JSON-object text was provided.\n" + err); }
}

function rdataFetch(txdata = {}, idx = 0) {
  let prms = txdata.prms;
  !prms || typeof prms !== 'object'
    || ( prms = Object.keys(prms).map( k => prms[k] == null ? null
      : `${encodeURIComponent(k)}=${encodeURIComponent(prms[k])}` ).filter(e => e).join("&") );
  typeof txdata !== 'string' || (txdata = { url: txdata });
  return typeof txdata !== 'object' || !txdata.url ? Promise.reject("Alert: no URL provided to fetch.")
  : window.fetch( txdata.url + (!txdata.epts ? "" : txdata.epts[idx]) + (!prms ? "" : "?" + prms), {
      method:     txdata.xmts && txdata.xmts[idx] || txdata.xmet || 'GET', // *GET, POST, PUT, DELETE, etc.
      //cache:       'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials:txdata.crds || 'omit', // include, *same-origin, omit
      //redirect:    'manual', // manual, *follow, error
      //referrerPolicy:'no-referrer',
        // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      mode:       txdata.mode
        || (/^https?:\/\/./.test(txdata.url) ? 'cors' : 'no-cors'), // no-cors, *cors, same-origin
      headers:    txdata.hdrs,
      body:       txdata.body || null // body data type must match "Content-Type" header
    } ) // body method: arrayBuffer, blob, json, text, formData
  .then( resp => resp[ txdata.bmts && txdata.bmts[idx] || txdata.bmet
    || ( /^blob:|\.(?:giff?|jpe?g|png)$/.test(txdata.url) ? 'blob'
      : /\.json$/.test(txdata.url) ? 'json' : 'text' ) ]());
}

function anumlIncr(anum) {
  return !/^[a-z]{3}$/i.test(anum) ? "zza"
  : window.ecoqjs.toAlpha(1 + window.ecoqjs.frAlpha(anum)).toLowerCase();
}

function a00Set() {
  caccts = caccts.sort((a, b) => a.DBNAME > b.DBNAME ? 1 : -1);
  let orig0 = hostibm && window.location.origin
  || (caccts.find(ob => /^a\d\d/.test(ob.DBNAME) && ob.DBORIG) || "").DBORIG
  || (caccts.find(ob => ob.DBORIG) || "").DBORIG;
  localStorage["_ecoa00orig"] === orig0 || !(localStorage["_ecoa00orig"] = orig0)
  || msgHandl( "Alert: A new default, DB origin has been set but not applied to all stored asset URLs."
    + "\nSystem Error: Please restart web app." );
}

function imgWrap(url) {
  return '<link href="' + a00path
  + '/-res-css/bulma0.9-minireset.css" type="text/css" rel="stylesheet" />'
  + '\n<section class="section">\n<main class="container content">\n  <figure><img src="'
  + url + '" /></figure>\n</main>\n</section>\n';
}

function srcvPrep(str = "", lang) {
  let ntxta = document.createElement('textarea');
  ntxta.textContent = str = "" + str;
  return !window.hljs || lang === "nohighlight" ? ntxta.innerHTML
  : !lang ? hljs.highlightAuto(str).value : hljs.highlight(lang, str, true).value;
}

function emodeSet() {
  let ebran1 = document.querySelector('#econav0 #ebran1');
  eb1dflt = epsets.prvmode ? "has-text-grey-light" : "has-text-primary";
  if (ebran1.classList.contains("has-text-primary")) {
    ebran1.classList.remove("has-text-primary");
    ebran1.classList.add(eb1dflt);
  } else if (ebran1.classList.contains("has-text-grey-light")) {
    ebran1.classList.remove("has-text-grey-light");
    ebran1.classList.add(eb1dflt);
  }
}

function pfsResets() {
  document.querySelector('#econav0 #pf2togswi').checked = false;
  document.querySelector('#econav0 #pf2list').selectedIndex
  = document.querySelector('#econav0 #pfslist').selectedIndex = 0;
  EC1.pf2Sel(1);
  EC1.pfsSel();
}

function indrChg(elm, val, ref) {
  let eq = val === (ref != null ? ref : elm.value);
  /is-warning/.test(elm.className) && !ref || (elm.value = ref != null ? ref : val || "");
  !/\bis-[sw]/.test(elm.className) && eq
  || !(/is-warning/.test(elm.className) || ref != null || (eq = true))
  || elm.classList.remove(eq ? "is-warning" : "is-success")
  || elm.classList.add(!eq ? "is-warning" : "is-success");
}

function updDisbl() {
  document.querySelectorAll('#econav0 #fupdbtnc>button, #ecoesp0 #pchbtn')
  .forEach(e => e.disabled = true);
  msgHandl(ECOINSTR[6]);
}

function tswapHide() {
  fldfoc = null;
  document.querySelectorAll('#ecoesp0 .dftbtnc:not(.is-hidden), #ecoesp0 .ptybtnc:not(.is-hidden), #ecoesp0 #rawbtnc:not(.is-hidden)')
  .forEach(e => e.classList.add("is-hidden"));
  document.querySelector('#ecoesp0 #prsebtn').disabled = true;
}

function xsrcTog() {
  // triggered by swplTog, epsUpd, ibmConnect
  let ebran1 = document.querySelector('#econav0 #ebran1'),
    swpltogswi = document.querySelector('#ecoesp0 #swpltogswi');
  if (!epsets.appchks.slice(22, 29).some(e => e)) {
    ebran1.classList.remove("has-text-link", "has-text-danger");
    ebran1.classList.add(eb1dflt);
    !swpltogswi.checked || EC1.swplTog();
  } else {
    ebran1.classList.remove("has-text-link", eb1dflt);
    ebran1.classList.add("has-text-danger");
  }
}

function influxSet(yes) {
  let fgenbtns = document.querySelectorAll('#ecoguides .button, #ecoesp0 #tooltypes .button'),
    fgenhlps = document.querySelectorAll('#ecoguides .help, #ecoesp0 #tooltypes>div:first-child .help'),
    fupdbtnc = document.querySelector('#econav0 #fupdbtnc'),
    fdelbtnc = document.querySelector('#econav0 #fdelbtnc'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    pf2togswi = document.querySelector('#econav0 #pf2togswi'),
    jdepty = document.querySelector('#ecoesp0 #jdepty');
  fwinflux = yes < 2 && !!yes;
  !platiphn || yes || document.querySelector('head>meta[name=viewport]')
    .setAttribute('content', "width=device-width, maximum-scale=1");
  if (yes === null) {
    pfslist.className = "";
    fupdbtnc.classList.add("is-hidden");
    fdelbtnc.classList.add("is-hidden");
    reniscurr = false;
  } else if (!yes) {
    pfslist.className = "";
    fupdbtnc.classList.add("is-hidden");
    fdelbtnc.classList.remove("is-hidden");
  } else {
    fupdbtnc.classList.remove("is-hidden");
    fdelbtnc.classList.add("is-hidden");
    fwinflux ? reniscurr = false : pfslist.className = "";
    if (fwinflux && optg !== "LOCAL temporary files") {
      pfslist.selectedIndex = 0;
      (yes === 1 || (filewkg && filewkg._id))
      && (pfslist.className = "has-background-warning");
    }
  }
  fgenbtns.forEach(e => e.disabled = fwinflux);
  !filewkg || filewkg.file_type !== "eco-contact" || !/^![0-9a-z]+-[0-9a-z]+$/.test(filewkg._id)
  || (fgenbtns[6].disabled = false);
  fgenhlps.forEach(e => fwinflux ? e.classList.remove("is-hidden") : e.classList.add("is-hidden"));
  !pf2togswi.checked
  || (fwinflux ? jdepty.classList.remove("ptydiffs") : jdepty.classList.add("ptydiffs"));
}

function publResets() {
  // triggered by (pfsListGen>)attListGen, dataDispl, pfsSel-reset, pchUpd
  // -- not by jdeRawAlert, tabs0Tog, tabs5Tog, (pdbListGen>)pdbSel
  let subdir = filewkg && filewkg.file_updated && filewkg.file_updated.subdir,
    cntchlps = document.querySelectorAll('#ecoesp0 #eftcntc .help'),
    cntcbtn = document.querySelector('#ecoesp0 #cntcbtn'),
    publhlps = document.querySelectorAll('#ecoesp0 #publpre .help, #ecoesp0 #publcmt .help'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    pchbtn = document.querySelector('#ecoesp0 #pchbtn'),
    dirlist = document.querySelector('#ecoesp0 #dirlist'),
    dirbtn = document.querySelector('#ecoesp0 #dirbtn'),
    rm3list = document.querySelector('#ecoesp0 #rm3list'),
    uplfpath = document.querySelector('#ecoesp0 #uplfpath'),
    uplbtn = document.querySelector('#ecoesp0 #uplbtn'),
    imgahlps = document.querySelectorAll('#ecoesp0 #eftass .help'),
    imgainp = document.querySelector('#ecoesp0 #eftass input[type=file]'),
    ifname = document.querySelector('#ecoesp0 #eftass .file-name'),
    irename = document.querySelector('#ecoesp0 #irename'),
    imgabtn = document.querySelector('#ecoesp0 #imgabtn');
  cntchlps.forEach(e => e.classList.add("is-hidden"));
  irename.value = uplfpath.value = rm3list.value = null;
  imgabtn.disabled = uplbtn.disabled = true;
  publhlps.forEach(e => e.classList.add("is-hidden"));
  imgahlps.forEach(e => e.classList.add("is-hidden"));
  ifname.classList.remove("has-text-dark");
  ifname.innerHTML = "Locate image&hellip;";
  EC2.rmtSel();
  if (!filewkg) {
    pchbtn.disabled = true;
    dirlist.value = "";
    dirlist.disabled = true;
    dirbtn.disabled = true;
  } else {
    filewkg.file_type !== "eco-contact" || (cntcbtn.disabled = false);
    pchbtn.disabled = !pchlist.value
    || !rexfid.test(filewkg._id) || rexfix.test(filewkg._id) ? true : false;
    dirlist.value = !filewkg.filefrags || !subdir ? "" : subdir.replace(/^(?=[^.-])/, ".");
    dirlist.disabled = !filewkg.filefrags;
    dirbtn.disabled = !dirlist.value;
    rm3list.value = dirlist.value.replace(/^\./, "");
    uplbtn.disabled = !rm3list.value;
  }
}

function assts2Blob() {
  let dbpc2, nscr,
    hlslist = document.querySelector('#ecoesp0 #hlslist'),
    iniscripts = document.querySelector('#iniscripts'),
    attPrc1 = (docid, akey) => !(asseturls[akey] && /^blob:/.test(asseturls[akey]))
      && dbpc2 && dbpc2.getAttachment(docid, akey)
      .then(ablob => asseturls[akey] = URL.createObjectURL(ablob))
      .catch(msgHandl),
    modsInj = () => {
      ["eco-srvc1.js", "eco-srvc2.js"].concat(!protfile ? [] : "eco-srvc3.js")
      .forEach(jsi => {
        nscr = document.createElement('script');
        nscr.src = asseturls[jsi];
        nscr.type = 'text/javascript';
        protfile || hostibm || nscr.setAttribute('crossorigin', 'use-credentials');
        iniscripts.appendChild(nscr);
      });
      if (!protfile) {
        nscr = document.createElement('script');
        nscr.type = 'module';
        nscr.innerHTML
          = '\nimport * as srvc3 from "' + asseturls["eco-srvc3.mjs"]
          //+ '";\nimport * as srvc4 from "' + asseturls["eco-srvc4.mjs"]
          + '";\nlet f;\nfor (f in srvc3) window.ecomjs[f] = srvc3[f];\n'
          //+ '\nfor (f in srvc4) window.ecomjs[f] = srvc4[f];\n';
        iniscripts.appendChild(nscr);
      }
    },
    a00Docs = (dbs = []) => {
      if (dbs.some(e => e === "a00") && a00path === localStorage["_ecoa00path"]) {
        dbpc2 = new PouchDB("a00");
        ["-res-img", "-res-css"].forEach( docid => dbpc2.get(docid).then( adoc =>
          !adoc._attachments || Object.keys(adoc._attachments).forEach( akey =>
            attPrc1(docid, akey) ) ).catch(msgHandl) );
        dbpc2.get("-res-hljs").then(adoc => {
          hlslist.innerHTML = tmplhlslist
          && tmplhlslist({ hlstys: Object.keys(adoc._attachments).sort() });
          hlslist.value = epsets.hlstyle;
          !hlslist.value || attPrc1("-res-hljs", hlslist.value);
        });
        ["ebook-annos-fns.js", "srcdiff.js"].forEach(akey => attPrc1("-res-js", akey));
        Promise.all( ["eco-srvc1.js", "eco-srvc2.js", "eco-srvc3.js", "eco-srvc3.mjs"]
          .map(akey => attPrc1("-app-eco", akey)) )
        .then(modsInj);
      } else {
        !epsets.hlstyle || (asseturls[epsets.hlstyle] = a00path + "/-res-hljs/" + epsets.hlstyle);
        protfile || /^blob:/.test(asseturls["bulma0.9-minireset.css"])
        || ["bulma0.9-content.css", "bulma0.9-minireset.css", "ebook-annos-fns.js", "srcdiff.js"]
          .concat(epsets.hlstyle || []).forEach( ass =>
            rdataFetch({ url: asseturls[ass], crds: 'include', bmet: 'blob' })
            .then(ablob => asseturls[ass] = URL.createObjectURL(ablob)).catch(msgHandl) );
        hlslist.innerHTML = tmplhlslist
        && tmplhlslist({ hlstys: (!protfile || platipd2) ? HLJSSTYS[0] : HLJSSTYS[1] });
        hlslist.value = epsets.hlstyle;
        modsInj();
      }
    };
  !window.PouchDB || !PouchDB.allDbs
  || PouchDB.allDbs().then(a00Docs).catch(msgHandl);
}

function pdbListGen() { // also "dboListGen", "pchListGen"
  let dbpc2, dbteam, idr, prjitems,
    dbs2 = [],
    context = { pchitems: [], pr1items: [], pr0items: [] },
    pdblist = document.querySelector('#ecoprj0 #pdblist'),
    pdbblurbs = document.querySelector('#ecoprj0 #pdbblurbs'),
    dbolist = document.querySelector('#ecoesp0 #dbolist'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    pc2list = document.querySelector('#ecoesp0 #pc2list'),
    pchbtn = document.querySelector('#ecoesp0 #pchbtn'),
    pimg2Blob = (d, dbpc3, filedir = "-res-img") => {
      let pimg = d.image_src || "",
        apath = pimg.match(rexatt) || [];
      if (asseturls[apath[3]]) {
        d.image_src = asseturls[apath[3]];
        return d;
      }
      apath[2] = !apath[2] ? filedir : (/^[.-]\b/.test(apath[2]) ? "" : ".") + apath[2];
      return !(dbpc3 || apath[1] && dbs2.some(e => e === apath[1]) || !apath[1] && dbpch) ? d
      : (dbpc3 || new PouchDB(apath[1] || dbpch.name))
      .getAttachment(apath[2], apath[3])
      .then(ablob => d.image_src = asseturls[apath[3]] = URL.createObjectURL(ablob))
      .catch(() => !apath[1] || /^a00$/.test(apath[1]) || (d.image_src = ""))
      .then(() => d);
    },
    dbidFbk = e => ({
      _id:         e,
      seltxt:      e.replace( /^a(\d\d)_(.+)$/,
          (m, c1, c2) => "@" + c2 + (c1 === "00" ? "" : ` (${c1})`) )
        + (!(caccts.find(ob => ob.DBNAME === e) || "").DBPUBL ? "" : " ???"),
      prj_name:    e.replace(/-/g, " ").replace( /^a(\d\d)_(.+)$/,
        (m, c1, c2) => c2 + (c1 === "00" ? "" : ` (${c1})`) ),
      descr_short: /^a\d\d_\w/.test(e)
        ? "Team charter and organization database"
        : "Home database of one of my brilliant team projects",
      descr_extd:  /^a\d\d_\w/.test(e)
        ? "<\xa0A tagline for the team will get inserted here by the team's founder.\xa0>"
        : "<\xa0More details about the "
          + e + " project will be displayed here"
          + "\u2014when added by the project team leader.\xa0>"
    }),
    dbidPrep = d => ({
      _id:         d._id.replace(/^~DBID_/, ""),
      seltxt:      (idr = d._id.replace(/^~DBID_/, ""))
        .replace(/^a(\d\d)_(.+)$/, (m, c1, c2) => "@" + c2 + (c1 === "00" ? "" : ` (${c1})`))
        + (!(caccts.find(ob => ob.DBNAME === idr) || "").DBPUBL ? "" : " ???"),
      prj_name:    d.prj_name || d._id.replace(/-/g, " "),
      image_src:   (d.image_src || "").replace(/^\.\.\/\.\./, d.file_updated.dborigin || "$&"),
      descr_short: d.descr_short,
      descr_extd:  d.descr_extd
    }),
    listsRfrsh = msgerr => {
      !msgerr || msgHandl(msgerr);
      context.pchitems.length || (context.pchitems = dbs2.map(dbidFbk));
      pc2list.innerHTML = pchlist.innerHTML = tmplpchlist && tmplpchlist(context);
      pc2list.value = pchlist.value = !dbpch ? "" : dbpch.name;
      dbpch || (pchbtn.disabled = true);
      dbolist.innerHTML = tmpldbolist && tmpldbolist(context);
      dbolist.value = epsets.dbdflt;
      pdblist.innerHTML = tmplpdblist && tmplpdblist(context);
      pdbblurbs.innerHTML = tmplpdbblurbs && tmplpdbblurbs(context);
      pdblist.value = pchlist.value || epsets.dbdflt;
      EC1.pdbSel();
    },
    pr0sGen = rsltqry => !rsltqry || !rsltqry.rows
      ? listsRfrsh()
      : Promise.all( rsltqry.rows
          .filter(r => /^~DBID_/i.test(r.id) && (r.doc || "")._id)
          .map(r => pimg2Blob(r.doc)) )
        .then(docs => (context.pr0items = docs.map(dbidPrep)) && listsRfrsh())
        .catch(listsRfrsh),
    pr0sGet = msgerr => {
      !msgerr || msgHandl(msgerr);
      prjsenet ? pr0sGen(prjsenet)
      : rdataFetch(ECOXREQD, 1).then(rq => pr0sGen(prjsenet = rq)).catch(listsRfrsh);
    },
    pdbsGen = (dbs1 = []) => {
      dbs2 = dbs1.sort();
      if (!window.PouchDB || !dbs1.length) {
        pr0sGet();
      } else if ( !( dbteam = dbs1
      .find(e => epsets.teamid ? e === "a00_" + epsets.teamid : /^a\d\d_\w/.test(e)) )) {
        Promise.all( dbs1.map( dbi => dbi && (dbpc2 = new PouchDB(dbi))
          .allDocs({ startkey: "~DBID_", endkey: "~DBID_~", include_docs: true })
          .then( rsltqry => rsltqry.rows
            && rsltqry.rows.find(r => r.id.replace(/^~DBID_/, "") === dbi) )
          .then(r => (r || "").doc && pimg2Blob(r.doc, dbpc2))
          .then(doc => (doc || "")._id && dbidPrep(doc)) ))
        .then(dbids => { context.pchitems
          = dbs1.map(e => dbids.find(d => (d || "")._id === e) || dbidFbk(e)) })
        .then(pr0sGet).catch(pr0sGet);
      } else {
        epsets.teamid || !(epsets.teamid = dbteam.replace(/^a\d\d_/, ""))
        || (localStorage["_ecopresets"] = JSON.stringify(epsets));
        dbpc2 = new PouchDB(dbteam);
        dbpc2.get("-res-img").then( adoc => !adoc._attachments
          || Object.keys(adoc._attachments).forEach( akey =>
            asseturls[akey] && /^blob:/.test(asseturls[akey])
            || dbpc2.getAttachment("-res-img", akey)
              .then(ablob => asseturls[akey] = URL.createObjectURL(ablob)) ) )
        .catch(msgHandl);
        dbpc2.query("ecosorter/files-support").then(rsltqry => {
          prjitems = !rsltqry.rows || rsltqry.rows
            .filter(r => /^~DBID_/i.test(r.id) && (r.value || "")._id)
            .map(r => dbidPrep(r.value));
          return !prjitems || Promise.all(prjitems.map(pimg2Blob)).then(() => {
            context.pchitems = dbs1.map(e => prjitems.find(d => d._id === e) || dbidFbk(e));
            context.pr1items = prjitems.filter(d => dbs1.findIndex(e => e === d._id) < 0);
          });
        }).then(() => pr0sGet()).catch(pr0sGet);
      }
    };
  !window.PouchDB || !PouchDB.allDbs ? pdbsGen()
  : PouchDB.allDbs().then(pdbsGen).catch(pr0sGet);
}

function attListGen(attonly, publupd) { // also "dirListGen"
  let ct = {}, context = {},
    attlist = document.querySelector('#econav0 #attlist'),
    picksdirs = document.querySelector('#ecoesp0 #picksdirs'),
    dirlist = document.querySelector('#ecoesp0 #dirlist'),
    valatl = attlist.value,
    rexcats = new RegExp( (epsets.appchks[7] ? "" : "^\\.|")
      + "^-(?!" + (!epsets.appchks[2] ? "" : "app-|")
      + (!epsets.appchks[3] ? "" : "res-css|")
      + (!epsets.appchks[4] ? "" : "res-img|")
      + (!epsets.appchks[5] ? "" : "res-js|")
      + (!epsets.appchks[6] ? "" : "res-x|") + "$)" ),
    listsRfrsh = msgerr => {
      !msgerr || msgHandl(msgerr);
      !pf3stor.dbpubl || ( picksdirs.innerHTML = pf3stor.dbpubl.concat(pf3stor.dbsdir)
        .map(ar => ar[0].replace(/\/$/, "")).sort().filter(e => !ct[e] && (ct[e] = 1))
        .map(e => "\n          <option>" + e + "</option>").join("") + "\n        " );
      if (!attonly) {
        dirlist.innerHTML = tmpldirlist && tmpldirlist(context);
        !publupd ? publResets()
        : typeof publupd === 'number' || (dirlist.value = publupd.replace(/^(?=[^.-])/, "."));
      }
      attlist.innerHTML = tmplattlist && tmplattlist(context);
      attlist.value = typeof publupd !== 'number' ? "" : valatl;
      !tmplattlist || EC1.attSel();
    },
    rsltFmt = rsltqry => {
      context.diritems = rsltqry && rsltqry.rows
      && rsltqry.rows.filter(r => /^[.-]\b/.test(r.id))
      .map( r => [ r.id.replace(/^\./, "") + "/", r.id,
        Object.keys((r.doc || r.value)._attachments || {}).sort() ]) || [];
      context.attitems = context.diritems.filter(ar => rexcats.test(ar[1]));
      listsRfrsh();
    };
  const opts = { endkey: "0", include_docs: true };
  document.querySelectorAll('#ecoesp0 #toolapp .rsetbtn').forEach(btn => btn.disabled = true);
  !dbpch ? listsRfrsh()
  : dbpch.query("ecosorter/files-attlist")
    .catch(() => dbpch.allDocs(opts)).then(rsltFmt).catch(listsRfrsh);
}

function pfsListGen(fileref, publupd, filelf) {
  let dbpc2, dbteam, apath, rval, sdir,
    zindr = 0,
    pfslist = document.querySelector('#econav0 #pfslist'),
    pf2list = document.querySelector('#econav0 #pf2list'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    hides = epsets.appchks,
    context = {
      filesapp: hides[21] ? null : Object.entries(ECOTMPLS).map(oe => [oe[1]._id, oe[0]])
    },
    cntcLite = (d, id) => ({
      _id:       id.replace(/^!([a-z]{3})-(myteam)$/, "!$2-$1"), // temp cleanup
      name_full: d.name_full,
      //name_user: d.name_user,
      roles:     [d.roles].flat(),
      email:     (d.emails || [""])[0],
      image_src: asseturls[ ( apath = d.image_src
          && d.image_src.match(rexatt) || [] )[3] || d.image_src ]
        || !window.PouchDB || !dbteam || apath[1] !== dbteam || !apath[2] || !apath[3]
        ? d.image_src
        : new PouchDB(dbteam)
          .getAttachment(apath[2], apath[3])
          .then(ablob => asseturls[apath[3]] = URL.createObjectURL(ablob))
          .then(() => d.image_src)
          .catch(msgHandl)
    }),
    docPrc2 = docid =>
      !dbpch || dbpch.name === "a00" || dbpch.get(docid).then( adoc =>
        !adoc._attachments || Object.keys(adoc._attachments).forEach( akey =>
          !/\.(?:giff?|jpe?g|m?js|png|s?css)$/.test(akey)
          || asseturls[akey] && /^blob:/.test(asseturls[akey])
          || dbpch.getAttachment(docid, akey)
            .then(ablob => asseturls[akey] = URL.createObjectURL(ablob)) ) )
      .catch(msgHandl),
    fileResel = () => {
      if (filewkg && /^eco-/.test(filewkg.file_type)) {
        /^~TMP[\dL]_/.test(filewkg._id) && !filelf ? fileref = ""
        : !( filewkg.file_type === "eco-assets" || filewkg.file_type === "eco-prjid"
            || (/^(?:eco-|)(?:contact|phone)$/.test(filewkg.file_type) && !filelf) )
          || (fileref = filewkg._id);
      }
      pfslist.selectedIndex = 0; // todo: when would idx not already be 0?
      EC1.pfsSel(1);
      pfslist.selectedIndex = Array.from(pfslist.options).findIndex(op => op.value === fileref);
      pfslist.selectedIndex < 1 ? pfslist.selectedIndex = 0 : EC1.pfsSel(1);
      optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label;
      influxSet(optg !== "LOCAL temporary files" ? 2 : false);
    },
    listsRfrsh = msgerr => {
      !msgerr || msgHandl(msgerr);
      tm0urole = dbpch && ( tm0cntcs[epsets.uname]
        && tm0cntcs[epsets.uname].roles.find(e => /^Admin$|^Lead$|^Contributor$/i.test(e))
        || (caccts.find(ob => ob.DBNAME === dbpch.name) || "").USRNAM );
      !/^Contributor$/i.test(tm0urole) || dbpch.name !== dbteam || (tm0urole = false);
      pfslist.innerHTML = pf2list.innerHTML = tmplpfslist && tmplpfslist(context);
      !fileref || !tmplpfslist || optg && optg !== "LOCAL temporary files" && fwinflux || fileResel();
      attListGen(0, publupd);
    },
    rsltFmt = rsltqry => {
      pf3stor.dbpubl = rsltqry.rows.filter( r => /^[0-9a-z]/i.test(r.id)
        && /^eco-(?:publmgr|srcdoc)$/.test((r.doc || r.value).file_type) )
        .map(r => [!(sdir = (r.doc || r.value).file_updated.subdir) ? "" : sdir + "/", r.id]).sort();
      pf3stor.dbsdir = rsltqry.rows.filter(r => /^[.-]\b/.test(r.id))
        .map(r => [r.id.replace(/^\./, "") + "/", r.id]);
      pf3stor.dbcntc = rsltqry.rows.filter(r => /^!/.test(r.id))
        .map( r => [ (!(sdir = (rval = r.doc || r.value).loc_subdir) ? "" : sdir + "/")
          + (rval.name_user || rval.name_full || r.id.replace(/^!/, "")), r.id ]).sort();
      context = !rsltqry.rows ? context : {
        fileslf:   context.fileslf,
        filesnon:  hides[9] ? null : rsltqry.rows.filter( r => /^[0-9a-z]/i.test(r.id)
          && !/^eco-(?:publmgr|scrap|srcdoc)$/
          .test((r.doc || r.value).file_type) ).map(r => r.id),
        filesscr:  hides[10] ? null : rsltqry.rows.filter( r => /^[0-9a-z]/i.test(r.id)
          && /^eco-scrap$/.test((r.doc || r.value).file_type) ).map( r =>
            [!(sdir = (r.doc || r.value).loc_subdir) ? "" : sdir + "/", r.id] ),
        filespubl: hides[11] ? null : pf3stor.dbpubl,
        filessdir: hides[12] ? null : pf3stor.dbsdir,
        filescntc: hides[13] ? null : pf3stor.dbcntc,
        filesdbid: hides[14] ? null : rsltqry.rows.filter(r => /^~DBID_/.test(r.id))
          .map( r => [ (!(sdir = (r.doc || r.value).file_updated.subdir) ? "" : sdir + "/")
            + r.id.replace(/^~DBID_/, ""), r.id ]),
        filesdviz: hides[15] ? null : rsltqry.rows.filter(r => /^~DVIZ_/.test(r.id))
          .map(r => [r.id.replace(/^~DVIZ_/, ""), r.id]),
        filestmpl: hides[16] ? null : rsltqry.rows.filter(r => /^~TMP[\dL]_/i.test(r.id))
          .map(r => [r.id.replace(/^~TMP[\dL]_/, ""), r.id]),
        filescnt2: context.filescnt2,
        filesdbi2: context.filesdbi2,
        filesdvz2: context.filesdvz2,
        filestmp2: context.filestmp2,
        filesapp:  context.filesapp
      };
      !rsltqry.rows || rsltqry.rows.filter(r => /^!/.test(r.id)).forEach( r =>
        tm0cntcs[(rval = r.doc || r.value).name_user || rval.name_full || r.id.replace(/^!/, "")]
        = cntcLite(rval, r.id) );
      pf3stor.dbsdir.map(ar => ar[1]).forEach(docPrc2);
      listsRfrsh();
    },
    pf1sGet = () => {
      const opts = { endkey: "~a", include_docs: true };
      !dbpch ? listsRfrsh() : dbpch.query("ecosorter/files-pfslist")
        .catch(() => dbpch.allDocs(opts)).then(rsltFmt).catch(listsRfrsh);
    },
    tlistsGen = (dbs1 = []) => {
      if ( !window.PouchDB || !( dbteam = dbs1
      .find(e => epsets.teamid ? e === "a00_" + epsets.teamid : /^a\d\d_\w/.test(e)) )
      || dbpch && dbteam === dbpch.name ) {
        dbteam || !epsets.uname || ( tm0cntcs[epsets.uname] = {
          _id:       "!aaa",
          name_full: epsets.ungvn + " " + epsets.unfam,
          //name_user: epsets.uname,
          roles:     ["Solo"],
          email:     epsets.uemail,
          image_src: "avatar000.png"
        } );
        pf1sGet();
      } else {
        dbpc2 = new PouchDB(dbteam);
        dbpc2.query("ecosorter/files-contact").then(rsltqry => {
          context.filescnt2 = hides[17] ? null : rsltqry.rows
            && rsltqry.rows.map(r => [r.key, "/" + dbteam + "/" + r.id]);
          !rsltqry.rows || rsltqry.rows.forEach( (r, i) =>
            tm0cntcs[r.key] = cntcLite(r.value, r.id) );
          epsets.ungvn || ( epsets.ungvn
          = ((tm0cntcs[epsets.uname] || "").name_full || "").replace(/ .*$/, "") ) && zindr++;
          epsets.unfam || ( epsets.unfam
          = ((tm0cntcs[epsets.uname] || "").name_full || "").replace(/^.* /, "") ) && zindr++;
          epsets.uemail || (epsets.uemail = (tm0cntcs[epsets.uname] || "").email) && zindr++;
          !zindr || (localStorage["_ecopresets"] = JSON.stringify(epsets));
        }).then(() => {
          return dbpc2.query("ecosorter/files-support").then(rsltqry => {
            if (rsltqry.rows) {
              context.filesdbi2 = hides[18] ? null
              : rsltqry.rows.filter(r => /^~DBID_/i.test(r.id))
                .map(r => [r.id.replace(/^~DBID_/, ""), "/" + dbteam + "/" + r.id]);
              context.filesdvz2 = hides[19] ? null
              : rsltqry.rows.filter(r => /^~DVIZ_/i.test(r.id))
                .map(r => [r.id.replace(/^~DVIZ_/, ""), "/" + dbteam + "/" + r.id]);
              context.filestmp2 = hides[20] ? null
              : rsltqry.rows.filter(r => /^~TMP[\dL]_/i.test(r.id))
                .map(r => [r.id.replace(/^~TMP[\dL]_/, ""), "/" + dbteam + "/" + r.id]);
            }
          }).then(pf1sGet);
        }).catch(err => {
          listsRfrsh(err);
          pf1sGet();
        });
      }
    },
    dbsallGet = () => !window.PouchDB || !PouchDB.allDbs ? tlistsGen()
      : PouchDB.allDbs().then(tlistsGen),
    lflistGen = keys => { // note: unexpected lf behavior because of promise-wrap
      !keys || !keys.length ? dbsallGet()
      : Promise.all( keys.map( k => localforage.getItem(k).then( val =>
        [ !/^{".+}$/.test(val) || !(val = jsonParse(val))
          || !(sdir = val.loc_subdir || (val.file_updated || val.file_created || "").subdir)
          ? "" : sdir + "/", k ] )))
      .then(els => context.fileslf = els.sort())
      .then(dbsallGet)
      .catch(listsRfrsh);
    };
  document.querySelectorAll('#ecoesp0 #toolapp .rsetbtn').forEach(btn => btn.disabled = true);
  tm0cntcs = {};
  fileref || !pfslist.value || optg !== "LOCAL temporary files" || (filelf = fileref = pfslist.value);
  !window.localforage ? dbsallGet()
  : localforage.keys((err, keys) => err ? listsRfrsh(err) : lflistGen(keys));
}

function prjDiscGen() {
  let ahl2, dcntcs, discrad, frm, rval, sdir, tpl, uimg, unm,
    context = {
      offln:   !window.navigator.onLine,
      uimg:    EC2.u2Blob(uimg = (tm0cntcs[epsets.uname] || "").image_src),
      unmdspl: ( uimg && (tm0cntcs[epsets.uname] || "").name_full
        || epsets.uname || "" ).replace(/(\w[^ .]+).+$/, "$1"),
      dload:   epsets.discload,
      dcntcs:  (dcntcs = Object.keys(tm0cntcs).map(e => e.replace(/[^\w.@-]+/g, "-")))
        .concat(dcntcs.join()),
      tm0disc: Array.isArray(tm0disc) && !tm0disc.length ? "none" : tm0disc,
      adsbls:  Array.from(document.querySelectorAll('#ecoesp0 #prjdisc>.media'))
        .map(e => !(e.querySelector('input[type=checkbox]') || { checked: true }).checked)
    },
    attlist = document.querySelector('#econav0 #attlist'),
    prjdisc = document.querySelector('#ecoesp0 #prjdisc'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    tstamp1 = Date.now() - (epsets.discdays * 24 * 60 * 60 * 1000),
    listsRfrsh = msgerr => {
      !msgerr || msgHandl(msgerr);
      prjdisc.innerHTML = tmplprjdisc && tmplprjdisc(context);
      !(discrad = document.querySelector('#ecoesp0 #discrad'))
      || (discrad.elements["discrad"].value = epsets.discdays);
      EC2.discTyp(epsets.disctype);
    },
    rsltFmt = rsltqry => {
      context.disbl = !context.unmdspl || !attlist.value && !pfslist.value;
      context.discitems = rsltqry.rows
      && rsltqry.rows.filter( r => /^~[amp]\d{8}|^~[a-z]{3}[AP]\d{8}/.test(r.id) //\d{8,}T\d{6}$
        && (rval = r.doc || r.value).linkref
        && (attlist.value || pfslist.value && pfslist.selectedOptions[0].textContent)
        .indexOf( ( !(sdir = rval.file_created.subdir)
          || /\//.test(rval.linkref) ? "" : sdir + "/" ) + rval.linkref ) > -1 )
      .filter(r => !epsets.discdays || (r.doc || r.value).file_created.timestamp > tstamp1)
      .filter( r => !tm0disc || !(frm = (rval = r.doc || r.value).from || rval.file_created.username)
        && !tm0disc.some(e => e === "-") || frm
          && (!(tpl = tm0disc.filter(e => !/^-/.test(e))).length || tpl.some(e => frm.indexOf(e) > -1))
          && !tm0disc.filter(e => /^-./.test(e)).some(e => frm.indexOf(e.replace(/^-/, "")) > -1) )
      .sort( (a, b) => !(rval = a.doc || a.value) || !rval.file_created ? 0
        : (rval.file_created.timestamp - (b.doc || b.value).file_created.timestamp) )
        // todo: why doesn't 1 re-sort to descending order?
      .map(r => ({
        isrc: EC2.u2Blob( uimg = (
            tm0cntcs[unm = (rval = r.doc || r.value).from || rval.file_created.username || ""]
          || {} ).image_src ),
        name: (uimg && (tm0cntcs[unm] || "").name_full || unm).replace(/ .*$/, ""),
        date: new Date(rval.file_created.timestamp).toLocaleString(),
        subj: rval.subject,
        body: rval.body,
        pnew: rval.file_created.timestamp > updts0,
        afid: /^~a\d{8}|^~[a-z]{3}A/.test(r.id) && r.id,
        atgs: rval.tags,
        atoc: rval.tocfmt,
        ahld: (rval.texthl || []).join("\n"),
        ahl2: !( ahl2 = (rval.texthl || []).join("...")
            .replace(/^(?:\/.+?\/[gim]*|\{.*?\}|\/\/.*?)\.\.\.|(?:\{.*?\}|\/\/.*?|\\\\?v?)(?=\.\.\.|$)/gm, "") )[84]
          ? "" : ahl2.substring(0, 84) + "..."
      }));
      listsRfrsh();
    };
  const opts0 = { startkey: "~a", include_docs: true },
    opts1 = {
      startkey: epsets.discload[0] && !epsets.discload[1] ? ["m"] : undefined,
      endkey:   !epsets.discload[0] && epsets.discload[1] ? ["b"]
        : !epsets.discload[0] && !epsets.discload[1] ? null : undefined
    };
  if ( !attlist.value && (!filewkg || !/^eco-(?:publmgr|srcdoc)$/.test(filewkg.file_type))
  || attlist.value && !/^\..+\.html?$/i.test(attlist.value) ) {
    prjdisc.innerHTML = tm0disc = null;
  } else {
    !dbpch ? listsRfrsh()
    : dbpch.query("ecosorter/files-static", opts1)
      .catch(() => dbpch.allDocs(opts0)).then(rsltFmt).catch(listsRfrsh);
  }
}

function jdeDftGen() {
  let jfw = filewkg || {},
    pcntcs, srcpanes,
    pfsinp = document.querySelector('#econav0 #pfsinp'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    cdirpath = jfw.loadconfigs && filewkg.loadconfigs.commondirpath,
    fragsrcxs = jfw.loadconfigs && filewkg.loadconfigs.fragsrcxs || [],
    tscre = jfw.ts_created || jfw.file_created && jfw.file_created.timestamp,
    tsupd = jfw.ts_updated || jfw.file_updated && jfw.file_updated.timestamp,
    context = {
      jdata:  jfw,
      typtxt: jfw.hasOwnProperty("content"),
      ulead:  /^Admin$|^Lead$/i.test(tm0urole) || !dbpch && optg === "LOCAL temporary files",
      tscre:  tscre && new Date(tscre).toLocaleString(),
      tsupd:  tsupd && new Date(tsupd).toLocaleString(),
      fimg:   jfw.file_type === "eco-prjid" && !jfw.image_src ? null
        : /\b(?:contact|prjid)$/.test(jfw.file_type) && EC2.u2Blob(jfw.image_src),
      plinks: /\b(?:anno|memo|post)$/.test(jfw.file_type) && (pf3stor.dbpubl || [])
        .filter(ar => ar && !/-s\d\d+$|\.(?!json$)\w{2,4}$/.test(ar[1]))
        .map(ar => ar[1].replace(/(?:-[dv]?[.\d]+|)\.\w{2,4}$/, "")).sort(),
      pcntcs: /\b(?:event|memo|post)$/.test(jfw.file_type) && ( pcntcs = Object.keys(tm0cntcs)
        .map(e => e.replace(/[^\w.@-]+/g, "-")) ).concat(pcntcs.join()),
      adhl:   (jfw.texthl || []).join("\n"),
      pholds: !(jfw.file_type === "eco-publmgr" || jfw.filefrags) ? []
        : jfw.filefrags.map( (ffi, i) =>
          ffi.titletxt && typeof ffi.titletxt === 'object' ? JSON.stringify(ffi.titletxt, null, 2)
          : fragsrcxs[i] && typeof fragsrcxs[i] === 'object' ? JSON.stringify(fragsrcxs[i], null, 2)
          : rexrmt.test(ffi.titletxt) || rexloc.test(ffi.titletxt)
            || fragsrcxs[i] === false ? ffi.titletxt
          : rexrmt.test(fragsrcxs[i]) || rexloc.test(fragsrcxs[i]) ? fragsrcxs[i]
          : !cdirpath || !jfw._id ? ffi.titletxt : cdirpath
            + jfw._id.replace(/(?:-[dv]?[.\d]+|)(?:\.\w{2,4}|)(?: *\*[^a-z]*|)$/i, "")
            + ( fragsrcxs[i] || fragsrcxs[i] === "" ? fragsrcxs[i]
              : "-s" + (i < 9 ? "0" : "") + (1 + i) + ".txt" ))
    };
  !optg || /^APP templates$/i.test(optg) ? optg = "" : optg += " > ";
  !jfw.file_type || !( /^eco-/.test(jfw.file_type)
  || /^(?:anno|assets|contact|event|memo|phone|post|prjid|publmgr|scrap|srcdoc)$/i.test(jfw.file_type) )
  || ( context[ jfw.file_type.replace(/^(?!eco-)/, "eco-")
    .replace(/phone/, "contact").replace(/post/, "memo") ] = true );
  if (/^LOCAL temporary files/i.test(optg)) {
    context.file_ref = optg
    + (pfslist.value && pfslist.selectedOptions[0].textContent || pfsinp.value || "");
  } else if (/^!/.test(jfw._id)) {
    context.file_ref = optg + (jfw.name_user || jfw.name_full || jfw._id.replace(/^!/, ""));
  } else if (/^[.-]\w/.test(jfw._id)) {
    context.file_ref = jfw._id.replace(/^\.?/, optg) + "/";
  } else if (/^~a\d{8}|^~[a-z]{3}A/.test(jfw._id) && jfw.file_created) {
    context.file_ref = "Anno" + ( jfw._id.replace(/~(?:[a-z]{3}|)a(\d+T\d+)\w*|.+/, "$1")
      || new Date(jfw.file_created.timestamp).toISOString().replace(/\.\w+$|[:-]/g, "") );
  } else if (/^~[mp]\d{8}|^~[a-z]{3}P/.test(jfw._id) && jfw.file_created) {
    context.file_ref = "Memo" + ( jfw._id.replace(/~(?:[a-z]{3}|)[mp](\d+T\d+)\w*|.+/, "$1")
      || new Date(jfw.file_created.timestamp).toISOString().replace(/\.\w+$|[:-]/g, "") );
  } else if (/^~[A-Z]{3}\w_/.test(jfw._id)) {
    context.file_ref = jfw._id.replace(/^~(\w{4})_/, (m, c1) => optg + (optg ? "" : `(${c1}) `));
  } else {
    context.file_ref = optg
    + (pfslist.value && pfslist.selectedOptions[0].textContent || pfsinp.value || "");
  }
  document.querySelector('#ecoesp0 #jdedft').innerHTML = tmpljdedft && tmpljdedft(context);
  srcpanes = document.querySelectorAll('#ecoesp0 #srcpanes>textarea');
  !tmpljdedft || context.pholds
  .map((p, i) => (/\n/.test(p) || rexrmt.test(p) || rexloc.test(p)) && 1 + i)
  .forEach(n => !n || (srcpanes[n - 1].disabled = true));
}

function swapListGen() {
  const context = {
    swapitems: [["Preview content (HTML)", "#ecorender"], ["File data (JSON)", "#ecoesp0 #rawtxta"]]
      .concat( !filewkg ? []
        : filewkg.file_type === "eco-srcdoc" ? [["Source doc: CONTENT", "content"]]
        : filewkg.file_type === "eco-scrap" ? [["Scrap file: CONTENT", "content"]]
        : filewkg.file_type === "eco-event" ? [["Event file: DESCRIPTION", "description"]]
        : filewkg.file_type === "eco-prjid"
          ? [["Project ID: SHORT DESCR", "descr_short"], ["Project ID: EXT'D DESCR", "descr_extd"]]
        : filewkg.file_type === "eco-anno" ? [["Anno file: HIGHLIGHTS", "texthl"]]
        : filewkg.file_type === "eco-memo" ? [["Memo file: BODY TEXT", "body"]]
        : filewkg.file_type === "eco-assets" ? [["Assets file: DESCRIPTION", "description"]]
        : filewkg.file_type === "eco-contact"
          ? [["Contact file: SHORT BIO", "bio_short"], ["Contact file: MISCELLANY", "miscellany"]]
        : !filewkg.filefrags ? []
        : filewkg.filefrags.map(ob => ["Publish mgr: " + ob.labeltxt, null]) )
  };
  document.querySelector('#ecoesp0 #swaplist').innerHTML = tmplswaplist && tmplswaplist(context);
}

function jdePtyGen(rowslr, plai, plbgi) {
  let pi, j2e, jdsela, j2sela, jdselb, jdstr, jdinp, jdval, j2esleft, plax, plbx,
    dbmdinp = document.querySelector('#ecoesp0 #dbmdinp'),
    sdirinp = document.querySelector('#ecoesp0 #sdirinp'),
    pfidinp = document.querySelector('#ecoesp0 #pfidinp'),
    versinp = document.querySelector('#ecoesp0 #versinp'),
    ownrinp = document.querySelector('#ecoesp0 #ownrinp'),
    peoptxta = document.querySelector('#ecoesp0 #peoptxta'),
    misctxta = document.querySelector('#ecoesp0 #misctxta'),
    delswi = document.querySelector('#ecoesp0 #delswi'),
    jfw = filewkg || {},
    typeco = /^eco-\w+$/.test(jfw.file_type)
      || /^(?:assets|contact|event|memo|phone|post|scrap|srcdoc)$/i.test(jfw.file_type),
    jdentries = Object.entries(jfw),
    j2entries = Object.entries(file2nd || {}),
    modT = ob => ob && Object.keys(ob).toString() === Object.keys(ECOMODJS["html2md"]).toString(),
    fsDiff = pty => file2nd && file2nd[pty] ? [jdentries, j2entries] : [jdentries],
    subo2Str = so => Object.fromEntries( Object.entries(so)
      .map(oe => [oe[0], typeof oe[1] !== 'object' ? oe[1] : JSON.stringify(oe[1], null, 2) ]) ),
    obj2Str = (pty, swi) => fsDiff(pty).forEach( d =>
      (pi = d.findIndex(ar => ar[0] === pty)) < 0
      || ( typeof d[pi][1] === 'function' ? (d[pi][1] = d[pi][1].toString())
        : !d[pi][1] || typeof d[pi][1] !== 'object'
        || ( swi ? (d[pi][1] = JSON.stringify(d[pi][1], null, 2))
          : /^(?:_attachments|entries|results|rows)$/.test(pty) ? !Object.keys(d[pi][1]).length
            || d.splice( pi, 1, ...Object.entries(d[pi][1])
              .map(oe => [ pty + "\u200b." + oe[0], JSON.stringify(oe[1], null, 2) ]) )
          : d[pi][1]
            = Object.assign({ "": JSON.stringify(d[pi][1], null, 2) }, subo2Str(d[pi][1])) ) ) );
  !jfw._revisions || obj2Str("_revisions");
  !jfw._revs_info || obj2Str("_revs_info", 1);
  !Array.isArray(jfw.entries) || obj2Str("entries");
  !jfw.rows || obj2Str("rows");
  !jfw.results || obj2Str("results");
  !(jfw.views || jfw.indexes) || fsDiff("views").forEach(d => {
    (pi = d.findIndex(ar => ar[0] === "indexes")) < 0 || typeof d[pi][1] !== 'object'
    || !Object.keys(d[pi][1]).length || d.splice( pi, 1, ...Object.entries(d[pi][1])
      .map(oe => [ "indexes\u200b." + oe[0] + "\u200b.index", oe[1].index ]) );
    (pi = d.findIndex(ar => ar[0] === "views")) < 0 || typeof d[pi][1] !== 'object'
    || !Object.keys(d[pi][1]).length || d.splice( pi, 1, ...Object.entries(d[pi][1])
      .map( oe => [[ "views\u200b." + oe[0] + "\u200b.map",
          typeof oe[1].map !== 'object' ? oe[1].map : JSON.stringify(oe[1].map, null, 2) ],
        [ "views\u200b." + oe[0] + "\u200b.reduce", oe[1].reduce ]]
        .concat( oe[1].options ? [[ "views\u200b." + oe[0] + "\u200b.options",
          typeof oe[1].options !== 'object' ? oe[1].options
            : JSON.stringify(oe[1].options, null, 2) ]] : [] ))
      .reduce((a, b) => a.concat(b), []) );
  });
  !jfw.rewrites || fsDiff("rewrites").forEach(d => {
    pi = d.findIndex(ar => ar[0] === "rewrites");
    d[pi][1] = Object.assign({}, d[pi][1].map(ob => JSON.stringify(ob, null, 2)));
  });
  !jfw._attachments || obj2Str("_attachments");
  !modT(jfw) || obj2Str("features", 1);
  typeco || Object.keys(jfw).forEach( (k, i) =>
    typeof jdentries[i][1] === 'string' || /^(?:_revisions|indexes|rewrites|views)$/.test(k)
    || ( typeof jfw[k] === 'function' ? obj2Str(k)
      : typeof jfw[k] !== 'object' || Array.isArray(jfw[k])
        && !jfw[k].some(ob => ob && typeof ob === 'object') || obj2Str(k, !modT(jfw[k])) ));
  !(typeco && jfw.texthl) || obj2Str("texthl", 1);
  !(typeco && jfw.locations) || fsDiff("locations").forEach(d => {
    pi = d.findIndex(ar => ar[0] === "locations");
    d[pi][1] = Object.fromEntries( Array.from(d[pi][1] || [])
      .map((ob, i) => [ i + ": " + ob.label, JSON.stringify(ob, null, 2) ])
      .concat([[ "+ 1 more", "" ]]) );
  });
  !(typeco && jfw.filefrags) || fsDiff("filefrags").forEach(d => {
    pi = d.findIndex(ar => ar[0] === "filefrags");
    d.splice( pi, 1, [ "filefrags",
      Object.fromEntries( Array.from(d[pi][1] || [])
        .map((ob, i) => [ i + ": " + ob.idtxt,
          JSON.stringify(ob, null, 2) ]).concat([[ "+ 1 more", "" ]]) ),
      {
        "_blank_":    null,
        "titletxt":   Object.assign({}, Array.from(d[pi][1] || []).map(ob => ob.titletxt)),
        "contenttxt": Object.assign({}, Array.from(d[pi][1] || []).map(ob => ob.contenttxt))
      }
    ]);
  });
  !(typeco && jfw.parseconfigs) || fsDiff("parseconfigs").forEach(d => {
    pi = d.findIndex(ar => ar[0] === "parseconfigs");
    d.splice( pi, 1, ...Object.entries(d[pi][1])
      .map(oe => [ "parseconfigs\u200b." + oe[0], oe[1] ]) );
    pi = d.findIndex(ar => ar[0] === "parseconfigs\u200b.scriptsconstr");
    d.splice( 3 + pi, 1, [ "parseconfigs\u200b.linksincl",
      Object.assign( { "": JSON.stringify(d[3 + pi][1], null, 2) },
        Object.fromEntries( Array.from(d[3 + pi][1] || [])
          .map( (ob, i) => [ i + ": " + (ob.filepath || "").replace(/^.*\//, ""),
            JSON.stringify(ob, null, 2) ] ).concat([[ "+ 1 more", "" ]]) ) ) ]);
    d.splice( 2 + pi, 1, [ "parseconfigs\u200b.linksconstr",
      Object.assign({ "": JSON.stringify(d[2 + pi][1], null, 2) }, d[2 + pi][1]) ]);
    d.splice( 1 + pi, 1, [ "parseconfigs\u200b.scriptsincl",
      Object.assign( { "": JSON.stringify(d[1 + pi][1], null, 2) },
        Object.fromEntries( Array.from(d[1 + pi][1] || [])
          .map((ob, i) => [ i + ": " + ob.fncname, JSON.stringify(ob, null, 2) ])
          .concat([[ "+ 1 more", "" ]]) ) ) ]);
    d.splice( pi, 1, [ "parseconfigs\u200b.scriptsconstr",
      Object.fromEntries( Array.from(d[pi][1] || [])
        .map( (ob, i) => [ i + ": " + ob.fncname,
          JSON.stringify(ob, null, 2) ] ).concat([[ "+ 1 more", "" ]]) ),
      { "_blank_":        null,
        "usedescription": Object.assign({}, Array.from(d[pi][1] || []).map(ob => ob.usedescription)),
        "htmlscriptload": Object.assign({}, Array.from(d[pi][1] || []).map(ob => ob.htmlscriptload)),
        "features":       Object.assign({}, Array.from(d[pi][1] || []).map(ob => JSON.stringify(ob.features, null, 2))),
        "deftxt":         Object.assign({}, Array.from(d[pi][1] || []).map(ob => ob.deftxt))
      } ]);
  });
  !(typeco && jfw.loadconfigs) || obj2Str("loadconfigs");
  !(typeco && jfw.file_updated) || obj2Str("file_updated");
  !(typeco && jfw.file_created) || obj2Str("file_created");
  const context = {
    jdsorted: jdentries.map((j1e, i) => {
      j2e = j2entries[i] || [];
      jdsela = Array.isArray(j1e[1]) || typeof j1e[1] !== 'object' ? false : j1e[1];
      j2sela = Array.isArray(j2e[1]) || typeof j2e[1] !== 'object' ? false : j2e[1];
      jdsela = jdsela && Object.fromEntries( Object.keys(j1e[1])
        .map(f => [ f, [ j1e[1][f], Array.isArray(j1e[1][f]) && j2e[1] && Array.isArray(j2e[1][f])
          ? j1e[1][f].join() === j2e[1][f].join() : j2e[1] && j1e[1][f] === j2e[1][f] ]]) );
      jdselb = j1e[2] && Object.fromEntries( Object.keys(j1e[2])
        .map( f => !j1e[2][f] && [f, null] || [ f, Object.keys(j1e[2][f])
          .map(g => [ j1e[2][f][g], j2e[2] && j2e[2][f] && j1e[2][f][g] === j2e[2][f][g] ]) ]) );
      if (typeco) {
        j1e[1] !== null || (j1e[1] = "null"); //j1e[0] === "_rev" &&
        j2e[1] !== null || (j2e[1] = "null"); //j2e[0] === "_rev" &&
      }
      jdstr = typeof jfw[j1e[0]] === 'string' && /\n/.test(jfw[j1e[0]])
        || typeof jfw[j1e[0]] === 'object' && jfw[j1e[0]] !== null
          && (!Array.isArray(jfw[j1e[0]]) || jfw[j1e[0]].some(ob => ob && typeof ob === 'object'))
        || typeco && /^bio_short$|^body$|^content$|^descr\w+$|^miscellany$|^texthl$/.test(j1e[0])
        || /^_attachments|^_revs_info$|^cursor$|^entries\u200b\.\d+$|^fnc$|^indexes.+$|^(?:last|update)_seq$|^results\u200b\.\d+$|^rewrites$|^rows\u200b\.\d+$|^validate_doc_update$|^views.+\.map$|^views.+\.options$/.test(j1e[0]);
      jdinp = (Array.isArray(j1e[1]) && !/^results$|^rows$/.test(j1e[0]))
        || (typeof j1e[1] !== 'object' && !jdstr);
      jdval = jdinp || jdstr ? [ j1e[1], j2e[1] ]
        : !jdsela && [ !j1e[1] ? "" : j1e[1].join("\n"), !j2e[1] ? ""
          : !Array.isArray(j2e[1]) ? j2e[1] : j2e[1].join("\n") ];
      return {
        jdkey:  j1e[0],
        j2key:  j2e[0],
        jdval:  jdval[0],
        j2val:  jdval[1],
        jdinp:  jdinp,
        jdrows: typeco && /\.linksconstr$|\.scriptsconstr$|^body$|^content$|^filefrags$|^texthl$/.test(j1e[0])
            || /^_revisions$|^_revs_info$|^features$|^results$|^rows$/.test(j1e[0])
            || modT(jfw[j1e[0]]) || typeof j1e[1] === 'string' && /(?:.*\n){9}/.test(j1e[1]) ? 16
          : typeco && /\.linksincl$|\.scriptsincl$|^bio_short$|^descr(?!_short)\w+$|^file_\w+ated$|^loadconfigs$|^locations$|^miscellany$/.test(j1e[0])
            || /^_attachments|^entries\u200b\.\d+$|^indexes.+$|^(?:last|update)_seq$|^results\u200b\.\d+$|^rows\u200b\.\d+$|^validate_doc_update$|^views.+\.map$/.test(j1e[0])
            || typeof j1e[1] === 'string' && /(?:.*\n){5}/.test(j1e[1]) ? 8 : 4,
        jdsela: jdsela,
        j2sela: j2sela,
        jdselb: jdselb, //j1e[2] &&
        j2selb: j2e[2],
        match:  Array.isArray(jdval[0]) && Array.isArray(jdval[1]) ? jdval[0].join() === jdval[1].join()
          : !jdsela ? jdval[0] === jdval[1]
          : !j2sela || JSON.stringify(j1e[1]) === JSON.stringify(j2e[1])
      };
    }),
    j2excess: j2entries && (j2esleft = j2entries.slice(jdentries.length))
      && j2esleft.length && JSON.stringify(Object.fromEntries(j2esleft), null, 2)
  };
  document.querySelector('#ecoesp0 #jdepty').innerHTML = tmpljdepty && tmpljdepty(context);
  swapListGen();
  EC1.pf2Tog();
  if (plai && (plax = document.querySelector('#ecoesp0 #ptylista' + rowslr))) {
    plax.selectedIndex = plai;
    plbgi == null || !(plbx = document.querySelector('#ecoesp0 #ptylistb' + rowslr))
    || (plbx.selectedIndex = plbgi);
    EC1.ptySel(rowslr);
  }
  if (filewkg && rowslr !== false) {
    EC1.pfsInp();
    !jfw.file_created || indrChg( dbmdinp,
      (jfw.file_updated || jfw.file_created).dbname || "", !dbpch ? "" : dbpch.name );
    versinp.disabled || indrChg(versinp, jfw.file_updated.version.replace(/\d+$/, m => ++m));
    ownrinp.disabled || indrChg(ownrinp, jfw.file_updated.username, ownrinp.value);
    peoptxta.disabled || indrChg(peoptxta, "" + jfw.contributors, peoptxta.value);
    misctxta.disabled || indrChg(misctxta, jfw.file_updated.misc);
  } else if (filewkg) {
    [dbmdinp, sdirinp, pfidinp, versinp, ownrinp, peoptxta, misctxta]
    .forEach( (e, i) => i && e.disabled
      || ["is-warning", "is-success"].forEach(f => e.classList.remove(f))
      || !i || (e.value = "") || (e.disabled = 1) );
    delswi.checked = delswi.disabled = pfidinp.disabled = 0;
    dbmdinp.value = ( !jfw.file_created ? dbpch && dbpch.name
      : (jfw.file_updated || jfw.file_created).dbname ) || "";
    dbpch && dbmdinp.value === dbpch.name || indrChg(dbmdinp, dbmdinp.value, !dbpch ? "" : dbpch.name);
    pfidinp.value = jfw._id || "";
    !(jfw.file_updated || jfw.hasOwnProperty("loc_subdir")) || (sdirinp.disabled = 0)
    || (sdirinp.value = !jfw.file_updated ? jfw.loc_subdir : jfw.file_updated.subdir);
    if (jfw.file_updated) {
      ownrinp.disabled = 0;
      ownrinp.value = epsets.uname || jfw.file_updated.username;
      ownrinp.value === jfw.file_updated.username || ownrinp.classList.add("is-warning");
      !jfw.file_updated.hasOwnProperty("misc") || (misctxta.disabled = 0)
      || (misctxta.value = jfw.file_updated.misc);
    }
    if (jfw.file_type === "eco-contact" && !jfw._rev) {
      pfidinp.classList.add("is-success");
    } else if (jfw.file_type === "eco-publmgr") {
      peoptxta.disabled = versinp.disabled = 0;
      versinp.value = jfw.file_updated.version.replace(/\d+$/, m => ++m);
      versinp.classList.add("is-success");
      peoptxta.value = jfw.contributors.filter(e => e)
        .concat(jfw.contributors.includes(epsets.uname) ? [] : epsets.uname);
      peoptxta.value == jfw.contributors || peoptxta.classList.add("is-warning");
    }
  }
}

function jdeRawAlert(invalid) {
  let rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    rawhelp = document.querySelector('#ecoesp0 #jderaw .help');
  if (invalid || !filewkg && rawtxta.value) {
    rawtxta.classList.add("is-warning");
    rawhelp.classList.remove("is-hidden");
  } else {
    rawtxta.classList.remove("is-warning");
    rawhelp.classList.add("is-hidden");
  }
}

function rmtListGen() {
  let rmtlist = document.querySelector('#ecoesp0 #rmtlist'),
    rm2list = document.querySelector('#ecoesp0 #rm2list'),
    rm3list = document.querySelector('#ecoesp0 #rm3list'),
    rmtbtn = document.querySelector('#ecoesp0 #rmtbtn'),
    rm2btn = document.querySelector('#ecoesp0 #rm2btn');
  const context = {
    rmtitems: caccts.map( ob => Object.assign(
      { seltxt: (ob.DBNAME || "").replace(/^a\d\d_(?=\w)/, "@") + (!ob.DBPUBL ? "" : " ???") }, ob ))
  };
  rm3list.innerHTML = rmtlist.innerHTML = rm2list.innerHTML = tmplrmtlist && tmplrmtlist(context);
  !dbpch || (rmtlist.value = rm2list.value = dbpch.name);
  rmtlist.selectedIndex < 1 || [rm2btn, rmtbtn].forEach(e => e.disabled = false);
}

function fwResets(invalid) {
  let eftypes = document.querySelectorAll('#ecoesp0 #tooltypes>.eftype'),
    metas = document.querySelectorAll('#ecoesp0 #dbmdinp, #ecoesp0 #sdirinp, #ecoesp0 #pfidinp, #ecoesp0 #versinp, #ecoesp0 #ownrinp, #ecoesp0 #peoptxta, #ecoesp0 #misctxta, #ecoesp0 #delswi');
  lnkstor = [];
  filewkg = reniscurr = tmp1pc = tmp1ff
  = document.querySelector('#ecoesp0 #jdepty').innerHTML
  = document.querySelector('#ecoesp0 #jdedft').innerHTML = null;
  prjDiscGen();
  jdeRawAlert(invalid);
  metas.forEach( e => ( e.checked ? e.checked = 0 : (e.value = "")
    || ["is-warning", "is-success"].forEach(f => e.classList.remove(f)) ) || (e.disabled = 1) );
  eftypes.forEach((e, i) => i && e.classList.add("is-hidden"));
  eftypes[0].classList.remove("is-hidden");
  swapListGen();
}

function txurlGen(txdata) {
  let dborgn = /^(https?:\/\/)(.+?)\/?$/.exec(txdata.DBORIG || "") || [];
  if (window.PouchDB && dborgn[1] && dborgn[2] && txdata.DBNAME) {
    return dborgn[1]
    + (!txdata.USRNAM || !txdata.PSSWRD ? "" : txdata.USRNAM + ":" + txdata.PSSWRD + "@")
    + dborgn[2] + "/" + txdata.DBNAME;
  }
}

function txCrdtlz(txdata = {}) {
  let pchlist = document.querySelector('#ecoesp0 #pchlist'),
    dbteam = ( Array.from(pchlist.options).find( op => epsets.teamid
      ? op.value === "a00_" + epsets.teamid : /^a\d\d_\w/.test(op.value) ) || {} ).value || "",
    tm0txd = caccts.find(ob => ob.DBNAME === (dbteam || "a00_" + epsets.teamid)) || {},
    db0txd = caccts.find(ob => ob.DBNAME === txdata.DBNAME) || {};
  return !/^https:\/\/[\w-]+\.cloudant[\w.]+$/.test(txdata.DBORIG) //txdata.DBPUBL ||
  || txdata.USRNAM && !/^$|password/i.test(txdata.PSSWRD)
  ? txdata : Object.assign(txdata, {
      USRNAM: db0txd.USRNAM || tm0txd.USRNAM,
      PSSWRD: db0txd.PSSWRD || tm0txd.PSSWRD
    });
}

function txdPrep(filepath) {
// returns: txdata-obj, gen'd from filepath-str/valcon-str/valcon-json -- otherwise, empty-obj
  let valcon = document.querySelector('#econav0 #qcontxta').value.trim(),
    txdata = /^{\s*"[^]+}$|^\[[^]*{\s*"[^]+}\s*\]$/.test(valcon) && jsonParse(valcon) || {},
    fpathes = /^(?:(?:(https?:\/\/)(?:([\w-]+):|)(?:([\w-]+)@|)([\w!.*+~-]+)(?:(?=$)|\/)|(\.\.\/\.\.\/)|\/)(?:([_a-z][0-9_a-z$,+-]*)(?:(?=$)|\/)|(?=$))|(\.\.\/)(?!$)|)(?:((?:_design\/|(?!\.\.?\/))[^ \/]+)(?:\/(_view\/|)([^ \/]*)|)|)$/.exec(filepath || valcon);
  !fpathes || fpathes[5] && fpathes[6] === "a00" && a00path !== localStorage["_ecoa00path"]
  || (!rexfid.test(fpathes[0]) || rexfix.test(fpathes[0]))
  && (fpathes[0] === fpathes[8] || (fpathes[1] || fpathes[5]) && !fpathes[6] && !filepath)
  ? ![rexloc, rexrmt].some(e => e.test(filepath || valcon)) || ( txdata = {
      url:  filepath || valcon,
      bmet: /\.(?:html?|md|m?js|s?css|te?xt|\w{5,})$/i.test(filepath || valcon)
        ? 'text' : /\.json$/i.test(filepath || valcon) ? 'json' : undefined
    })
  : txdata = {
      USRNAM: fpathes[2],
      PSSWRD: fpathes[3],
      DBORIG: fpathes[1] + fpathes[4] || (fpathes[5] || fpathes[7]) && a00orig || undefined,
      DBNAME: fpathes[6] || (filepath == 0 && !fpathes[1] || filepath) && dbpch && dbpch.name,
      FILEID: fpathes[8],
      ATTKEY: !fpathes[9] && fpathes[10] || undefined,
      VIEW:   fpathes[9] && fpathes[10] || undefined
    };
  return [txdata, valcon];
}

function rsrcsXGet(txdata = {}) {
  let aobj,
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    cdirpath = filewkg.loadconfigs && filewkg.loadconfigs.commondirpath,
    fragsrcxs = filewkg.loadconfigs && filewkg.loadconfigs.fragsrcxs || [],
    rexcdir = /^(?:\.\/|(?:\.\.\/(?:\.\.\/(.*)\/|))(.*)\/|)([^\/]*)$/,
    rexsdoc = /^(?:\.\/|\.\.\/.*\/)([^\/]+)$/i,
    rexlobj = /^(?:\/\/.+|\$\w*\.?\w*)$/,
    rsrcGet1 = (ffi, i) => { // todo: test accommodation of path `./filename`; will subdir ever matter?
      if (ffi.contenttxt) { return; }
      if ( !( ffi.titletxt && typeof ffi.titletxt === 'object'
      && (txdata = Object.assign({}, ffi.titletxt)) )
      && !( fragsrcxs[i] && typeof fragsrcxs[i] === 'object'
      && (txdata = Object.assign({}, fragsrcxs[i])) ) ) {
        txdata.DBNAME = (rexcdir.exec(ffi.titletxt) || [])[1] || (rexcdir.exec(fragsrcxs[i]) || [])[1]
        || (rexcdir.exec(cdirpath) || [])[1] || txdata.DBNAME
        || /^~DVIZ_/.test(filewkg._id) && epsets.teamid && "a00_" + epsets.teamid;
        !txdata.DBNAME ? txdata.DBNAME = dbpch && dbpch.name
        : Array.from(pchlist.options).some(op => op.value === txdata.DBNAME) || (txdata.DBNAME = null);
        txdata.FILEID = !i && txdata.FILEID
        || (rexlobj.exec(ffi.titletxt) || [])[0] || (rexsdoc.exec(ffi.titletxt) || [])[1]
        || (rexlobj.exec(fragsrcxs[i]) || [])[0] || (rexsdoc.exec(fragsrcxs[i]) || [])[1]
        || ( fragsrcxs[i] === false || !cdirpath || !rexloc.test(cdirpath) ? ""
          : (!/^(?:\/\/|\$)$/.test(cdirpath) ? "" : cdirpath)
          + filewkg._id.replace(/(?:-[dv]?[.\d]+|)(?:\.json|)(?: *\*[^a-z]*|)$/i, "")
          + ( fragsrcxs[i] || fragsrcxs[i] === ""
            ? fragsrcxs[i] : "-s" + (i < 9 ? "0" : "") + (1 + i) + ".txt" ));
        txdata.url = !i && txdata.url || rexrmt.test(ffi.titletxt) ? ffi.titletxt
          : rexrmt.test(fragsrcxs[i]) ? fragsrcxs[i]
          : rexrmt.test(cdirpath) && fragsrcxs[i] !== false
          ? cdirpath + filewkg._id.replace(/(?:-[dv]?[.\d]+|)(?:\.json|)(?: *\*[^a-z]*|)$/i, "")
          + ( fragsrcxs[i] || fragsrcxs[i] === ""
            ? fragsrcxs[i] : "-s" + (i < 9 ? "0" : "") + (1 + i) + ".txt" )
          : txdata.DBNAME || fragsrcxs[i] === false ? null : rexsdoc.test(ffi.titletxt) && ffi.titletxt
            || rexloc.test(cdirpath) && cdirpath + txdata.FILEID;
      }
      if (txdata.hasOwnProperty("dbox") || txdata.hasOwnProperty("path")) {
        return new Promise((rslv, rjct) => {
          let txd2 = Object.assign({}, txdata);
          txdata = {};
          dropboxTx(jsonParse(JSON.stringify(txd2)), rslv, rjct);
        }).catch(msgHandl);
      } else if (/^\/\/.+$/.test(txdata.FILEID) && window.localforage) {
        // note: unexpected lf behavior because of promise-wrap
        return localforage.getItem(txdata.FILEID.replace(/^\/\//, ""))
        .then(val => !/^{".+}$/.test(val) ? val : (jsonParse(val) || "").content).catch(msgPrefmt);
      } else if (/^\$ *\w*(?:\b[.(].+|)$/.test(txdata.FILEID)) {
        aobj = EC2.objQA(txdata.FILEID.replace(/^\$ */, ""), 1);
        return aobj == null ? ""
        : typeof aobj !== 'object' ? aobj : aobj.content || msgPrefmt(aobj);
      } else if (txdata.url || !txdata.DBNAME && txdata.FILEID) {
        !rexibm.test(txdata.url) || ( txdata = {
            url:  txurlGen(txCrdtlz(txdPrep(txdata.url)[0])),
            crds: txdata.crds || 'include',
            bmet: txdata.bmet || 'blob'
          });
        return rdataFetch(txdata.url && txdata || txdata.FILEID).catch(msgPrefmt);
      } else if (window.PouchDB && txdata.DBNAME && txdata.FILEID) {
        return new PouchDB(txdata.DBNAME).get(txdata.FILEID, txdata.OPTS || {})
        .then(resp => resp.content || msgPrefmt(resp)).catch(msgPrefmt);
      }
    };
  return epsets.appchks[22] || !filewkg.filefrags
  ? Promise.resolve() : Promise.all(filewkg.filefrags.map(rsrcGet1))
    .then(ctfs => ctfs.forEach((cti, i) => !cti || (filewkg.filefrags[i].contenttxt = cti)));
}

function modjsLoad() {
  let nscr, spnm, idxfp,
    ct = {},
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    iniscripts = document.querySelector('#iniscripts'),
    scriptmod = document.querySelector('#iniscripts>script[type=module]:last-child'),
    modxs = filewkg.parseconfigs.scriptsincl
      .map( sii => !/\*\d*$/.test(sii.fncname) && typeof window[sii.fncname] !== 'function'
        && !window.ecoqjs[sii.fncname] && !window.ecomjs[sii.fncname]
        && ( filewkg.parseconfigs.scriptsconstr.find( sci => sci.fncname === sii.fncname && sci.filepath
            && (!sci.deftxt || sci.deftxt === ECOTMPLS.publmgr.parseconfigs.scriptsconstr[0].deftxt) )
          || !(ECOMODJS[sii.fncname] || "").fnc && ECOMODJS[sii.fncname] ) )
      .filter(sii => sii),
    mfps = modxs.filter(sci => !ct[sci.filepath] && (ct[sci.filepath] = 1))
      .map(sci => sci.filepath);
  !modxs.length
  || msgHandl("External, JavaScript-file (module) resources are now retrieved and loaded for pre-render parsing.");
  document.querySelectorAll('#iniscripts>script.ecomjs').forEach(smi => smi.remove());
  Promise.all( mfps.map((fpi, i) => {
    let j = i,
      fpj = fpi,
      spnm = rexatt.exec(fpi);
    return spnm
    && ( asseturls[spnm[3]] || (spnm[1] || dbpch)
      && (!spnm[1] || Array.from(pchlist.options).some(op => op.value === spnm[1]))
      && window.PouchDB && new PouchDB(spnm[1] || dbpch.name)
        .getAttachment((/^[.-]\b/.test(spnm[2]) ? "" : ".") + spnm[2], spnm[3])
        .then(ablob => asseturls[spnm[3]] = URL.createObjectURL(ablob))
        .catch(() => null) )
    || null;
  }) ).catch(msgHandl)
  .then((mblobs = []) => {
    !scriptmod || scriptmod.remove();
    if (protfile && !mblobs.every(e => e)) {
      mfps.forEach(fpi => {
        nscr = document.createElement('script');
        nscr.className = "ecomjs";
        nscr.src = fpi.replace(/\.mjs$/i, "\.js");
        nscr.type = 'text/javascript';
        iniscripts.appendChild(nscr);
      });
    } else if (mblobs.length) {
      nscr = document.createElement('script');
      nscr.type = 'module';
      nscr.innerHTML = "\n"
        + mfps.map((fpi, i) => `import * as mjs${i} from "${mblobs[i] || fpi}";`).join("\n")
        + "\nwindow.ecomjs = window.ecomjs || {};"
        + "\n" + modxs.map( sci => `window.ecomjs["${sci.fncname}"]`
          + ` = mjs${idxfp = mfps.indexOf(sci.filepath)}["${sci.fncname}"]`
          + ` || mjs${idxfp}.default;` ).join("\n")
        + "\n";
      iniscripts.appendChild(nscr);
    }
  });
}

function linksExpand() {
  let sshm, spn2,
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    atimportexpand = filewkg.loadconfigs.atimportexpand,
    linksconstr = filewkg.parseconfigs.linksconstr,
    ssheets = Array.from(document.styleSheets).filter((ssi, i) => i && ssi.href),
    cssFetch = (lnkj, j) => rdataFetch((/[^ "']+\.css(?=["']?;$)/i.exec(lnkj) || [""])[0])
      .then(rslt => {
        rslt || msgHandl("Alert: Static file located but data retrieval failed.");
        lnkstor[j] = rslt && !/^<!|^{"/.test(rslt) && rslt.trim() || "/* err " + lnkj + " */";
      }).catch(err => {
        msgHandl(err);
        lnkstor[j] = "/* 404 " + lnkj + " */";
      });
  if ( atimportexpand && ( !linksconstr.linksinclrender && linksconstr.insertposition
  && linksconstr.wrapperincl && /^ *@import /.test(linksconstr.htmllinktxt)
  || linksconstr.linksinclrender && filewkg.parseconfigs.linksincl[0].filepath && ssheets.length
  && (!protfile || ssheets.some(ssi => /^blob:/.test(ssi.href))) )) {
    lnkstor = linksconstr.htmllinktxt.trim()
      .replace(/\/\*[^]*?\*\/|^ *\n?| +$/gm, "").split("\n");
    if (ssheets.length) {
      msgHandl(`CSS @import expansion data is now generated from user-preloaded CSSOM styleSheets (${ssheets.length} detected). To apply expansions, render webpage again with \`linksinclrender\` de-activated.`);
      lnkstor = lnkstor.map( lnki =>
        /^@import .+\.css\W*$/i.test(lnki) && (spn2 = rexatt.exec(lnki))
        && ( sshm = ssheets.find( ssi =>
          new RegExp( "/" + spn2.filter((e, i) => i && e).join("/")
            .replace(/(?=[.*+])/g, "\\") + "$", "i" ).test(ssi.href)
          || asseturls[spn2[3]] === ssi.href ))
        && (() => { try { return Array.from(sshm.cssRules).map(ob => ob.cssText).join("\n");
          } catch { return "/* ??? " + lnki + " */"; } })() || lnki );
    } else {
      msgHandl("CSS @import expansion data is now generated with attempted DB queries or HTTP requests. Render webpage to apply expansions.");
      lnkstor.forEach((lnki, i) => {
        let spnm,
          j = i,
          lnkj = lnki;
        !/^@import .+\.css\W*$/i.test(lnkj) || !(spnm = rexatt.exec(lnkj)) || (spnm[1] || dbpch)
        && (!spnm[1] || Array.from(pchlist.options).some(op => op.value === spnm[1]))
        && window.PouchDB && new PouchDB(spnm[1] || dbpch.name)
          .getAttachment((/^[.-]\b/.test(spnm[2]) ? "" : ".") + spnm[2], spnm[3])
          .then( ablob => ablob instanceof Blob
            && blobHandl(ablob, -1, {}, rslt => lnkstor[j] = rslt.trim()) )
          .catch(() => cssFetch(lnkj, j))
        || cssFetch(lnkj, j);
      });
    }
  } else {
    lnkstor = [];
    !atimportexpand || msgHandl(ECOINSTR[7]);
  }
}

function dataDispl(udata = "", destindr, cbfnc, cfgs) {
  // destindr: false = do not trigger publResets;
  // undefined/null/other non-zero falsey = file to filewkg;
  // 0 = imp'd text to JSON/Text Edit or SOURCEx;
  // 1 = template to filewkg; 2 = file to file2nd;
  // 3+/other truthy = attachment/blob/publmgr-webdoc to preview
  // 4 = udata is publmgr data to generate webdoc
  // 5 = udata is default/reset html
  // 6 = udata is html-wrapped img
  // 7 = udata is text-file or app-html attachment
  let elsass, elsscr, elssty, mnlen, ndiv, pla11, sidx, tft, tpl, udobj,
    valatt = document.querySelector('#econav0 #attinp').value.trim(),
    valatl = document.querySelector('#econav0 #attlist').value,
    ecolinks = document.querySelector('#ecolinks'),
    ecorender = document.querySelector('#ecorender'),
    prv2s = document.querySelectorAll('#ecosrcview, #ecoguides'),
    prjdisc = document.querySelector('#ecoesp0 #prjdisc'),
    adsbls = document.querySelectorAll('#ecoesp0 #prjdisc>.media input[type=checkbox]:not(:checked)'),
    srcpane = document.querySelector('#ecoesp0 :not(.is-hidden)>#jdedft>#srcpanes>.textarea:not(.is-hidden):not([disabled])'),
    rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    eftypes = document.querySelectorAll('#ecoesp0 #tooltypes>.eftype'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    ecoscripts = document.querySelector('#ecoscripts'),
    disciscurr = 0,
    tstamp1 = Date.now(),
    rexurl = /( src=| href=|@import +(?:url\(|)|\S+: *url\()('|"|)(\S+?)(?=['"](?: |\/?>)|\2?\)?; *$)/gim,
    ridx = !dbpch ? -1 : caccts.findIndex(ob => ob.DBNAME === dbpch.name),
    rmttxd = ridx < 0 ? {} : caccts[ridx],
    // keep separate, in case ridx/rmttxd become elsass dependencies also
    typanno = cfgs && ( cfgs.ahls.flat().length
      || cfgs.tocs.filter(e => e && !/^pre/i.test(e) || e === "" || e === null).length ),
    objAssn1 = (o0, o1) => Object.assign(jsonParse(JSON.stringify(o0 || {})), o1),
    rowFrom = unm => !tm0disc || !unm && !tm0disc.some(e => e === "-") || unm
      && (!(tpl = tm0disc.filter(e => !/^-/.test(e))).length || tpl.some(e => unm.indexOf(e) > -1))
      && !tm0disc.filter(e => /^-./.test(e)).some(e => unm.indexOf(e.replace(/^-/, "")) > -1),
    ecoPrefmt = (ufile = {}) => {
      let etmpl = ECOTMPLS[ /^phone$/.test(ufile.file_type) ? "contact"
        : /^post$/.test(ufile.file_type) ? "memo" : /\w+$/.exec(ufile.file_type) ] || {};
      ufile.file_type !== "eco-phone" || (ufile.file_type = "eco-contact"); // temp cleanup
      ufile.file_type !== "eco-contact" // temp cleanup
      || !(ufile._id = ufile._id.replace(/^!([a-z]{3})-(myteam)$/, "!$2-$1")) || !epsets.teamid
      || !(ufile.team_groups = ufile.team_groups || [""]) || ufile.team_groups.includes(epsets.teamid)
      || (ufile.team_groups = ufile.team_groups.filter(e => e).concat(epsets.teamid));
      ufile.file_type !== "eco-post" || (ufile.file_type = "eco-memo"); // temp cleanup
      ["file_created", "file_updated"].forEach((pty, i) => { // temp cleanup
        if (etmpl[pty] && ufile[pty] && ufile[pty].hasOwnProperty("notes")) {
          ufile[pty].misc = ufile[pty].notes;
          delete ufile[pty].notes;
          ufile[pty] = objAssn1(etmpl[pty], ufile[pty]);
        }
      });
      !ufile.file_updated || /\.cloud$/.test(ufile.file_updated.dborigin)
      || (ufile.file_updated.dborigin = rmttxd.DBORIG || a00orig || ""); // temp cleanup
      if ( /^eco-(?:assets|contact)$/.test(ufile.file_type) && !ufile.hasOwnProperty("loc_subdir")
      || !/^eco-/.test(ufile.file_type) && Object.keys(etmpl).length ) {
      } else if (ufile.file_type === "eco-scrap" && ufile.hasOwnProperty("media_type")) {
        delete ufile.media_type; // temp cleanup
      } else if ( !ufile.file_type
      || ["_id", "_rev", "file_type"].every((e, i) => e === (Object.keys(ufile) || [])[i]) ) {
        return ufile;
      }
      !ufile.file_created || (ufile.file_created = objAssn1(etmpl.file_created, ufile.file_created));
      !ufile.file_updated || (ufile.file_updated = objAssn1(etmpl.file_updated, ufile.file_updated));
      !ufile.locations || ufile.locations.forEach(ob => ob = objAssn1((etmpl.locations || [])[0], ob));
      return objAssn1(etmpl, ufile);
    },
    pmgrPrefmt = (ufile = {}) => {
      if ( destindr && !cbfnc || !Array.isArray(ufile.filefrags) || !ufile.filefrags[0]
      || !(ufile.parseconfigs || "").linksconstr || ["scriptsconstr", "scriptsincl", "linksincl"]
      .some(e => !Array.isArray(ufile.parseconfigs[e]) || !ufile.parseconfigs[e][0]) ) {
        return ufile;
      }
      let pcfgu = ufile.parseconfigs,
        scu = pcfgu.scriptsconstr,
        siu = pcfgu.scriptsincl,
        lcu = pcfgu.linksconstr,
        liu = pcfgu.linksincl,
        pcfge = ECOTMPLS.publmgr.parseconfigs,
        sce0 = pcfge.scriptsconstr[0],
        pcfgt = (tmp1pc || "").parseconfigs || {};
      if (ufile.file_type !== "eco-publmgr") { // temp cleanup
        !ufile.fileid || (ufile._id = ufile.fileid) && delete ufile.fileid;
        ufile.file_type = "eco-publmgr";
        ufile.loadconfigs = objAssn1(ECOTMPLS.publmgr.loadconfigs, ufile.loadconfigs || {});
        !ufile.loadconfigs.fragsrcfnmxs
        || (ufile.loadconfigs.fragsrcxs = ufile.loadconfigs.fragsrcfnmxs)
        && delete ufile.loadconfigs.fragsrcfnmxs;
        delete ufile.parseconfigs.regexpincl;
        !ufile.parseconfigs.regexpsconstr || delete ufile.parseconfigs.regexpsconstr;
        !lcu.hasOwnProperty("directtorender")
        || ( ufile.parseconfigs.linksconstr = objAssn1( pcfge.linksconstr, {
            linksinclrender: lcu.directtorender,
            insertposition:  lcu.rsltinsposition || "1",
            wrapperincl:     lcu.wrapperincl,
            wraptagstart:    lcu.wrappertagstart,
            wraptagend:      lcu.wrappertagend,
            htmllinktxt:     lcu.htmllinkinserts
          } ));
        ["scriptsconstr", "scriptsincl", "linksincl"].forEach( e =>
          ufile.parseconfigs[e].forEach(ob => delete ob["$$hashKey"]) );
        ufile.filefrags.forEach(ob => delete ob["$$hashKey"]);
      }
      scu.forEach( (ob, i) => pcfgu.scriptsconstr[i].features = ob.features.map( o2 =>
        o2.hasOwnProperty("keytxt") && !o2.hasOwnProperty("label") && !o2.hasOwnProperty("inptxt")
        && !o2.hasOwnProperty("inputbox") && !o2.txtabox ? o2 : {
          switchon: o2.switchon || false,
          keytxt:   o2.id || o2.label || o2.keytxt || "",
          valtxt:   o2.inputbox || o2.inptxt || "",
          txtabox:  o2.txtabox
        } )); // temp cleanup
      scu[0].deftxt || scu.forEach( (ob, i) => !(scu[i].features || [{}])[0].txtabox // temp cleanup
        || !(pcfgu.scriptsconstr[i].deftxt = scu[i].features[0].txtabox)
        || (pcfgu.scriptsconstr[i].features[0].valtxt = pcfgu.scriptsconstr[i].features[0].keytxt = "")
        || delete pcfgu.scriptsconstr[i].features[0].txtabox );
      !tmp1pc || Object.keys(pcfgu).forEach( k =>
          Object.values(/^linksc/.test(k) ? pcfgu[k] : pcfgu[k][0]).toString()
            === Object.values(/^linksc/.test(k) ? pcfge[k] : pcfge[k][0]).toString()
          || (pcfgt[k] = /^linksc/.test(k) ? "" : []) )
        || Object.values(pcfgt.linksconstr).toString() !== Object.values(pcfge.linksconstr).toString()
        || (pcfgt.linksconstr = "");
      !(tmp1ff || "").filefrags
      || ufile.filefrags.forEach((ffi, i) => !ffi.contenttxt || (tmp1ff.filefrags[i] = ""));
      pcfgu.scriptsconstr = (pcfgt.scriptsconstr || []).length > 1 ? pcfgt.scriptsconstr
        : scu.map( ob => objAssn1( sce0, ( Array.isArray(ob.features) && ob.features[0]
          || (ob.features = jsonParse(JSON.stringify(sce0.features))) ) && ob || {} ));
      pcfgu.scriptsincl = (pcfgt.scriptsincl || []).length > 1 ? pcfgt.scriptsincl
        : siu.map(ob => objAssn1(pcfge.scriptsincl[0], ob || {}));
      pcfgu.linksconstr = pcfgt.linksconstr || objAssn1(pcfge.linksconstr, lcu);
      !lcu.hasOwnProperty("directtorender") || ["directtorender", "rsltinsposition"]
        .forEach(e => delete ufile.parseconfigs.linksconstr[e]); // temp cleanup
      !lcu.hasOwnProperty("wrappertagstart") || ["start", "end"]
        .forEach( e => ( (ufile.parseconfigs.linksconstr["wraptag" + e] = lcu["wrappertag" + e]),
          delete ufile.parseconfigs.linksconstr["wrappertag" + e] )); // temp cleanup
      !lcu.hasOwnProperty("htmllinkinserts")
      || ( (ufile.parseconfigs.linksconstr.htmllinktxt = lcu.htmllinkinserts),
        delete ufile.parseconfigs.linksconstr.htmllinkinserts ); // temp cleanup
      pcfgu.linksincl = (pcfgt.linksincl || []).length > 1 ? pcfgt.linksincl
        : liu.map(ob => objAssn1(pcfge.linksincl[0], ob || {}));
      !scu[scu.length - 1].fncname || pcfgu.scriptsconstr.push(jsonParse(JSON.stringify(sce0)));
      !siu[siu.length - 1].fncname || pcfgu.scriptsincl
        .push({ fncname: "", applytofrag: Array.from(siu[0].applytofrag).map(e => true) });
      !liu[liu.length - 1].filepath
        || pcfgu.linksincl.push(jsonParse(JSON.stringify(pcfge.linksincl[0])));
      ufile.filefrags.forEach( ob => !ob.hasOwnProperty("panecontent")
        || ((ob.contenttxt = ob.panecontent), delete ob.panecontent) ); // temp cleanup
      ufile.loadconfigs = objAssn1(ECOTMPLS.publmgr.loadconfigs, ufile.loadconfigs || {});
      ufile.parseconfigs = objAssn1(pcfge, pcfgu);
      ufile.filefrags = !(tmp1ff || "").filefrags
      ? ufile.filefrags.map(ob => objAssn1(ECOTMPLS.publmgr.filefrags[0], ob))
      : tmp1ff.filefrags.map( (ob, i) =>
          objAssn1(ob, !(ufile.filefrags[i] || "").contenttxt ? {} : ufile.filefrags[i]) );
      return ufile;
    },
    assGet = (a1i, i) => {
      let txdata,
        j = i,
        ua1 = !epsets.appchks[26] ? a1i.href || a1i.src : EC2.u2Blob(a1i.href || a1i.src),
        apath1 = a1i.attributes[a1i.href ? 'href' : 'src'].value.match(rexatt) || [],
        ablSto = ablob => elsass[j][elsass[j].href ? 'href' : 'src']
          = asseturls[apath1[3]] = URL.createObjectURL(ablob);
      apath1[2] = apath1[2] && (/^[.-]\b/.test(apath1[2]) ? "" : ".") + apath1[2];
      apath1[3] || (apath1[3] = (a1i.href || a1i.src).replace(/^(?!blob:).*\//, ""));
      return /^blob:/.test(apath1[3])
        || apath1[1] === "a00" && a00path !== localStorage["_ecoa00path"] ? null
      : /^blob:/.test(ua1) ? a1i[a1i.href ? 'href' : 'src'] = ua1
      : (txdata = txdPrep(apath1[0])[0]).ATTKEY && (txdata.dburl = txurlGen(txCrdtlz(txdata)))
      ? new Promise( (rslv, rjct) => setTimeout( () =>
          new PouchDB(txdata.dburl, { skip_setup: true })
          .getAttachment(txdata.FILEID, txdata.ATTKEY, txdata.OPTS || {})
          .then(ablSto).then(rslv), 500 ))
      : apath1[3] && apath1[2] && (apath1[1] || dbpch)
        && (!apath1[1] || Array.from(pchlist.options).some(op => op.value === apath1[1]))
      ? new PouchDB(apath1[1] || dbpch.name).getAttachment(apath1[2], apath1[3]).then(ablSto)
      : rexibm.test(ua1)
      ? rdataFetch({ url: ua1, crds: 'include', bmet: 'blob' }).then(ablSto)
      : null;
    },
    styGet = (a2ilj = "") => {
      let txdata,
        ua2 = a2ilj.replace(/^.*?(?:\burl\( *['"]?|['"])(?=\S+$)/, ""),
        apath2 = a2ilj.match(rexatt) || [],
        styInj = url => a2ilj.replace( /(?:(\burl\() *['"]?|['"])(\S+)$/i,
          (m, c1, c2) => (c1 || '"') + (url || c2) + (c1 ? ')' : '"') ),
        ablSto = ablob => asseturls[apath2[3]] = URL.createObjectURL(ablob);
      !epsets.appchks[26] || (ua2 = EC2.u2Blob(ua2));
      apath2[2] = apath2[2] && (/^[.-]\b/.test(apath2[2]) ? "" : ".") + apath2[2];
      apath2[3] || (apath2[3] = ua2.replace(/^(?!blob:).*\//, ""));
      return /^blob:/.test(ua2) ? styInj(ua2)
      : (txdata = txdPrep(apath2[0])[0]).ATTKEY && (txdata.dburl = txurlGen(txCrdtlz(txdata)))
      ? new Promise( (rslv, rjct) => setTimeout( () => new PouchDB(txdata.dburl, { skip_setup: true })
          .getAttachment(txdata.FILEID, txdata.ATTKEY, txdata.OPTS || {})
          .then(ablob => rslv(styInj(ablSto(ablob))))
          .catch(err => {
            msgHandl(err);
            return rjct(styInj());
          }), 500 ))
      : apath2[3] && apath2[2] && (apath2[1] || dbpch)
        && !(apath2[1] === "a00" && a00path !== localStorage["_ecoa00path"])
        && (!apath2[1] || Array.from(pchlist.options).some(op => op.value === apath2[1]))
      ? new PouchDB(apath2[1] || dbpch.name)
        .getAttachment(apath2[2], apath2[3])
        .then(ablob => styInj(ablSto(ablob)))
        .catch(err => {
          msgHandl(err);
          return styInj();
        })
      : rexibm.test(ua2)
      ? rdataFetch({ url: txurlGen(txCrdtlz(txdPrep(ua2)[0])), crds: 'include', bmet: 'blob' })
        .then(ablob => styInj(ablSto(ablob)))
        .catch(err => {
          msgHandl(err);
          return styInj();
        })
      : styInj();
    },
    scrInj = (elmscr = {}) => {
      let nscr = document.createElement('script');
      !elmscr.src || (nscr.src = elmscr.src);
      nscr.type = elmscr.type || 'text/javascript';
      //nscr.setAttribute('async', "");
      //nscr.setAttribute('defer', "");
      protfile || hostibm || !nscr.src || /^blob:/.test(nscr.src)
      || nscr.setAttribute('crossorigin', 'use-credentials');
      nscr.innerHTML = elmscr.innerHTML || null;
      //elmscr.replaceWith(nscr);
      return ecoscripts.appendChild(nscr);
    },
    scrGet = a3i => {
      let txdata,
        ua3 = !epsets.appchks[26] && !/\bebook-annos-fns\.js$|\bsrcdiff\.js$/.test(a3i.src)
          ? a3i.src : EC2.u2Blob(a3i.src),
        apath3 = !a3i.src ? [] : a3i.attributes.src.value.match(rexatt) || [],
        ablSto = ablob => asseturls[apath3[3]] = URL.createObjectURL(ablob);
      apath3[2] = apath3[2] && (/^[.-]\b/.test(apath3[2]) ? "" : ".") + apath3[2];
      apath3[3] || !a3i.src || (apath3[3] = a3i.src.replace(/^(?!blob:).*\//, ""));
      return typanno
      && (/\bebook-annos-fns\.js$/.test(a3i.src) || ua3 === EC2.u2Blob("ebook-annos-fns.js")) ? null
      : !epsets.appchks[27] && /^blob:/.test(ua3) ? scrInj({ src: ua3 })
      : (txdata = txdPrep(apath3[0])[0]).ATTKEY && (txdata.dburl = txurlGen(txCrdtlz(txdata)))
      ? new PouchDB(txdata.dburl, { skip_setup: true })
        .getAttachment(txdata.FILEID, txdata.ATTKEY, txdata.OPTS || {})
        .then(ablob => scrInj({ src: ablSto(ablob) }))
        .catch(() => scrInj(a3i))
      : !epsets.appchks[27] && apath3[3] && apath3[2] && (apath3[1] || dbpch)
        && !(apath3[1] === "a00" && a00path !== localStorage["_ecoa00path"])
        && (!apath3[1] || Array.from(pchlist.options).some(op => op.value === apath3[1]))
      ? new PouchDB(apath3[1] || dbpch.name)
        .getAttachment(apath3[2], apath3[3])
        .then(ablob => scrInj({ src: ablSto(ablob) }))
        .catch(() => scrInj(a3i))
      : !epsets.appchks[27] && rexibm.test(ua3)
      ? rdataFetch({ url: txurlGen(txCrdtlz(txdPrep(ua3)[0])), crds: 'include', bmet: 'blob' })
        .then(ablob => scrInj({ src: ablSto(ablob) }))
        .catch(() => scrInj(a3i))
      : scrInj(a3i);
    };
  if ( typeof udata === 'string' && /^{\s*"[^]+}$|^\[[^]+\]$/.test(udata.trim())
  && (udobj = jsonParse(udata)) ) {
    return dataDispl(udobj, destindr, cbfnc, cfgs);
  }
  if ( destindr === 0 && ( !filewkg || !/^eco-(?:publmgr|scrap|srcdoc)$/.test(filewkg.file_type)
  || !srcpane && rawtxta.value )) {
    // file-load file deselected,
    // or, eco-obj-query/db-data-import/http-request via http console
    document.querySelector('#econav0 #pfsinp').value = "";
    EC1.pfsInp();
  }
  if ( destindr === 0
  && filewkg && /^eco-(?:publmgr|scrap|srcdoc)$/.test(filewkg.file_type) && srcpane ) {
    srcpane.value = typeof udata !== 'object' ? udata : udata.content || msgPrefmt(udata);
    srcpane.focus();
  } else if (!destindr && (!udata || typeof udata !== 'object')) {
    rawtxta.value = udata;
    fwResets();
    EC1.tabs0Tog(4);
  } else if (!destindr || destindr === 1) { // if (typeof udata === 'object')
    reniscurr = false;
    filewkg === udata || ( filewkg = Object.assign( Array.isArray(udata) ? []
      : !udata.hasOwnProperty("_id") || typeof udata._id !== 'string' ? {}
      : { _id: "", _rev: "" }, udata ));
    Object.keys(filewkg).toString() !== Object.keys(ECOMODJS["html2md"]).toString() || filewkg.fnc
    || (filewkg.fnc = (window.ecomjs[filewkg.fncname] || "").toString() || null);
    Object.keys(filewkg).toString() !== Object.keys(ECOMODJS).toString()
    || Object.keys(filewkg).forEach( k => (filewkg[k] = Object.assign({}, filewkg[k]))
      && (filewkg[k].fnc = (filewkg[k].fnc || window.ecomjs[k] || "").toString() || null) );
    if (destindr) {
      Object.assign(filewkg, { _id: "", _rev: "" });
      !filewkg.hasOwnProperty("ts_created") || (filewkg.ts_updated = filewkg.ts_created = tstamp1);
      [filewkg.file_created, filewkg.file_updated].forEach((ppty, i) => { if (ppty) {
        ppty.username = epsets.uname;
        ppty.timestamp = tstamp1;
        ppty.dborigin = rmttxd.DBORIG || a00orig || "";
        ppty.dbname = dbpch ? dbpch.name : !rmttxd.DBNAME ? "" : rmttxd.DBNAME;
        ppty.subdir = "";
        !ppty.hasOwnProperty("misc") || (ppty.misc = "");
        !ppty.hasOwnProperty("version") || (ppty.version = "0.1.0");
      }});
      !filewkg.hasOwnProperty("from") || (filewkg.from = epsets.uname);
      !dbpch || !filewkg.team_groups || !(filewkg.team_groups[0] = dbpch.name.replace(/^a\d\d_/, ""))
      || ( filewkg._id = "!" + filewkg.team_groups[0]
        + "-" + anumlIncr( (pf3stor.dbcntc.map(ar => ar[1]).sort().reverse()[0] || "")
          .replace(/^![0-9a-z]+-/i, "") ) );
    }
    ( epsets.appchks[22] || !filewkg.loadconfigs ? Promise.resolve([])
    : Promise.all( ["pcfgstemplate", "fragstemplate"].map(pty => {
        let fpth = /^(?:(?:\.\.\/\.\.|\.\.|)\/(.+?)\/|)(.*)/.exec(filewkg.loadconfigs[pty] || ""),
          dbtm0 = /^~TMP1_.|^~TMP[0L]_1\D/.test(fpth[2]) && epsets.teamid.replace(/^(?=.)/, "a00_");
        return window.PouchDB && fpth[2] && ( fpth[1]
        && Array.from(pchlist.options).some(op => op.value === fpth[1]) || dbtm0 || dbpch )
        && new PouchDB(fpth[1] || dbtm0 || dbpch.name).get(fpth[2]).catch(msgHandl);
      }) ) )
    .then(tmpls => {
      [tmp1pc, tmp1ff] = tmpls;
      filewkg = pmgrPrefmt(filewkg);
      destindr || (filewkg = ecoPrefmt(filewkg));
      return rsrcsXGet();
    }).then(() => {
      if (filewkg.file_type === "eco-publmgr") {
        epsets.appchks[23] || modjsLoad();
        epsets.appchks[24] || linksExpand();
      }
      rawtxta.value = JSON.stringify(filewkg, null, 2);
      jdeRawAlert();
      prjDiscGen();
      jdeDftGen();
      jdePtyGen(false);
      if ( filewkg.file_type === "eco-publmgr"
      && (pla11 = document.querySelector('#ecoesp0 #ptylista11'))
      && ( sidx = Array.from(pla11.options)
      .findIndex(op => op.value.replace(/^\d+: /, "") === filewkg.loadconfigs.tabselected) )
      && sidx > 0 ) {
        pla11.selectedIndex = sidx;
        EC1.ptySel(11);
        EC1.srcSel(sidx);
      }
      eftypes.forEach(e => e.classList.add("is-hidden"));
      eftypes[ filewkg.file_type === "eco-publmgr" || filewkg.filefrags ? 1
        : filewkg.file_type === "eco-srcdoc" || filewkg.media_type && filewkg.file_created ? 2
        : filewkg.file_type === "eco-scrap" ? 3
        : filewkg.file_type === "eco-event" || /^~E\d{8}/.test(filewkg._id) ? 4
        : filewkg.file_type === "eco-prjid" || /^~DBID_/.test(filewkg._id) ? 5
        : filewkg.file_type === "eco-anno" || /^~a\d{8}|^~[a-z]{3}A/.test(filewkg._id) ? 6
        : /^eco-(?:memo|post)$/.test(filewkg.file_type)
          || /^~[mp]\d{8}|^~[a-z]{3}P/.test(filewkg._id) ? 7
        : filewkg.file_type === "eco-assets" || /^[.-]\w/.test(filewkg._id) ? 8
        : filewkg.file_type === "eco-contact" || /^!./.test(filewkg._id) ? 9 : 0 ]
      .classList.remove("is-hidden");
      destindr === false || publResets(); // necessary only for dirlist.value, imga*
      !cbfnc || cbfnc();
    }).catch(msgHandl);
  } else if (destindr === 2) { // load 2nd file for pty diffs
    file2nd = typeof udata !== 'object' ? {}
      : Object.assign( Array.isArray(udata) ? []
        : !udata.hasOwnProperty("_id") && (!filewkg || !filewkg.hasOwnProperty("_id"))
        ? {} : { _id: "", _rev: "" }, udata );
    file2nd = pmgrPrefmt(file2nd);
    file2nd = ecoPrefmt(file2nd);
    jdePtyGen();
    EC1.tabs0Tog(3);
  } else if (destindr) { // render attachment/blob/publmgr-webdoc in preview screen
    ecorender.innerHTML || !prjdisc.innerHTML || disciscurr++;
    // because prjDiscGen is already triggered by discTog
    document.querySelector('#econav0 #ebrand').classList.remove("has-background-grey");
    prv2s.forEach(e => e.classList.add("is-hidden"));
    destindr !== 4 || !udata || typeof udata !== 'object' || udata.file_type !== "eco-publmgr"
    || (udata = webdocGen(1, udata));
    ecorender.innerHTML = destindr !== 7 && (!udata || !/function|object/.test(typeof udata))
      ? ( epsets.appchks[26] || typeof udata !== 'string' || destindr === 3
        && (!cfgs || valatt && !/^(?:\/[a-z][0-9_a-z$,+-]*\/|)[.-]\b.+\.html?$/.test(valatl || valatt))
        ? udata : udata.replace(rexurl, (m, c1, c2, c3) => c1 + c2 + EC2.u2Blob(c3)) )
      : (udata = msgPrefmt(udata))
        .replace(/&(?=#?\w+;)/g, "&amp;").replace( /<([!\/]?\b.+?)(>|(?=<|$))|(--)>|<(!--)/gm,
          (m, c1, c2, c3, c4) => (c3 ? "" : "&lt;") + (c4 || c3 || c1) + (c4 || !c2 ? "" : "&gt;") );
    prv2s[0].innerHTML = !epsets.prvmode ? null : ( !epsets.hlstyle ? ""
        : '\n<style type="text/css">.hljs-tag { //color: inherit; }</style>'
          + '\n<link class="srcvlink" href="'
          + (asseturls[epsets.hlstyle] || a00path + '/-res-hljs/' + epsets.hlstyle)
          + (protfile || hostlh ? "" : '" crossorigin="use-credentials')
          + '" type="text/css" rel="stylesheet" disabled />' )
        + '\n<pre class="srcview is-absolute hljs">'
        + srcvPrep(udata, !epsets.hlstyle && "nohighlight") + "</pre>";
    !document.querySelector('#econav0 #prvtab.is-active') || ecorender.classList.remove("is-hidden");
    if (!window.PouchDB || destindr > 4) { return; }
    disciscurr || prjDiscGen();
    document.querySelector('#econav0 #disctab.is-active') && prjdisc.innerHTML || EC1.tabs0Tog(0);
    elsass = epsets.appchks[28] ? []
      : document.querySelectorAll('#ecolinks link, #ecorender link, #ecorender img, #ecosrcview link');
    elssty = epsets.appchks[28] ? []
      : document.querySelectorAll('#ecorender style');
    elsscr = document.querySelectorAll('#ecorender script');
    Array.from(elsass).map(assGet).reduce((a, b) => a.then(() => b), Promise.resolve())
    .catch(msgHandl)
    .then( () => Promise.all( Array.from(elssty).map((a2i, i) => {
        let j = i;
        return /^ *@import |\burl\(/im.test(a2i.innerHTML)
        && Promise.all( a2i.innerHTML.trim()
            .replace(/(?:@import |\burl\()\S+;(?= *$)/gim, "$&;").split(/['"]?\)?;; *\n?/).map(styGet) )
          .then(a2innrs => elssty[j].innerHTML = "\n" + a2innrs.join(";\n").trim() + "\n");
      }) ).catch(msgHandl) )
    .then(() => Promise.all(Array.from(elsscr).map(scrGet)).catch(msgHandl))
    .then(() => {
      if (!typanno) { return; }
      ndiv = document.createElement('div');
      ndiv.id = "mnmask";
      ndiv.setAttribute('onclick', "EC2.mnTog(0)");
      ecorender.appendChild(ndiv);
      ndiv = document.createElement('div');
      ndiv.id = "mnbar";
      ndiv.setAttribute('onclick', "EC2.mnTog(1)");
      !(mnlen = cfgs.ahls.flat().filter(e => /\{ *\+\+.*\}$/.test(e)).length)
      || ( ndiv.innerHTML
        = `\n<style>\nins.mnote { position: relative; margin-right: calc(3px - var(--mnblqrt, 0px) - var(--mntblrt, 0px) - var(--mnbodrt, 8px)); overflow: hidden; z-index: 3; }`
        + `\nins.mnote.minz { background: initial; width: 10px; height: 0; margin-right: calc(0px - var(--mnblqrt, 0px) - var(--mntblrt, 0px) - var(--mnbodrt, 8px)); padding: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 5px solid WhiteSmoke; pointer-events: none; }`
        + `\n@media screen { ins.mnote { box-shadow: unset; } }`
        + `\n@media print { ins.mnote, ins.mnote.minz { margin-right: 0; } }\n</style>\n` );
      ecorender.appendChild(ndiv);
      if (mnlen) {
        ndiv = document.createElement('div');
        ndiv.id = "mnnav";
        ndiv.className = "field is-grouped is-grouped-centered";
        ndiv.innerHTML
          = `\n<span class="control"><button class="button is-light has-text-grey" onclick="EC2.mnNav(-1)">&#x25e4;</button></span><span class="control"><button id=mncount class="button is-light has-text-grey" onclick="EC2.mnNav(0)">1 of ${mnlen}</button></span><span class="control"><button class="button is-light has-text-grey" onclick="EC2.mnNav(1)">&#x25e2;</button></span>\n`;
        ecorender.appendChild(ndiv);
      }
      tstamp1 = tstamp1 - (epsets.discdays * 24 * 60 * 60 * 1000);
      cfgs.ahls = cfgs.ahls.map( (hli, i) => JSON.stringify(["{}"].concat(hli), null, 2)
        .replace(/(\\\\n)",\n *"/g, "$1")
        .replace(/\\(?=\\v",?$)/gm, "")
        .replace(/^( *)"(\/.+\/[gim]*)"(?=,?$)/gm, (m, c1, c2) => c1 + c2.replace(/\\(?=\\|")/g, ""))
        .replace( /^ *"(?=.+\{ *\+\+ *\\?[#.]?\w*} *",?$)/gm,
          m => m + "__" + ((cfgs.fcps[i] || "").unm || "*unknown*") + ":__ " )
        .replace(/\n/g, "$&  ") );
      scrInj({ innerHTML: `
(function() {
  window.annos = window.annos || { configs: {} };
  let texthl = window.annos.configs.texthl;${
  ( tft = cfgs.tocs.filter( (e, i) => (e == null || typeof e === 'string' && !/^pre/i.test(e))
    && !Array.from(adsbls).some(e => e.value === (cfgs.fcps[i] || "").aid)
    && (!epsets.discdays || (cfgs.fcps[i] || "").ts2 > tstamp1)
    && rowFrom((cfgs.fcps[i] || "").unm) ).pop() ) === undefined
  ? "" : '\n  window.annos.configs.tocfmt = ' + (tft === null ? 'null;' : '"' + tft + '";') }
  typeof texthl !== 'string' || (texthl = texthl.split("\\n"));
  window.annos.configs.texthl = (texthl || [])${ cfgs.ahls
    .map( (hli, i) => Array.from(adsbls).some(e => e.value === (cfgs.fcps[i] || "").aid)
      || epsets.discdays && (cfgs.fcps[i] || "").ts2 < tstamp1
      || !rowFrom((cfgs.fcps[i] || "").unm)
      ? "" : ".concat(" + hli + ")" ).join("") }.join("\\n");
})();
`     });
      scrInj({ src: asseturls["ebook-annos-fns.js"] });
    }).then(() => {
      valatl || !filewkg || filewkg.file_type !== "eco-publmgr"
      || !filewkg.parseconfigs.linksconstr.linksinclrender || window.setTimeout(linksExpand, 1000);
      window.navigator.userAgentData || window.setTimeout( () => {
        let es0 = document.querySelector('#ecorender style:nth-of-type(1)'),
          styTog = () => es0 && (es0.type = !/1/.test(es0.type) ? 1 : 'text/css');
        styTog(); styTog(); }, 2500 );
    }).catch(msgHandl);
  }
}

function annosGet(fileref = "") {
  return new Promise((rslv, rjct) => {
    let ahls, lnkr,
      fcps = [],
      tocs = [],
      txdata = {
        DBNAME: (document.querySelector('#ecoesp0 #pchlist') || "").value || null,
        FILEID: "_design/ecosorter",
        VIEW:   "files-static",
        OPTS:   {
          //startkey: undefined,
          endkey: epsets.discload[1] ? ["b"] : null
        }
      };
    !window.PouchDB || !txdata.DBNAME ? rslv() : new PouchDB(txdata.DBNAME)
    .query(txdata.FILEID.replace(/^_design\//, "") + "/" + txdata.VIEW, txdata.OPTS || {})
    .catch( () => new PouchDB(txdata.DBNAME).allDocs({
      startkey: "~a",
      //endkey: undefined,
      include_docs: true }) )
    .then( rslt => ahls = rslt.rows && rslt.rows.filter( r => /^~a\d{8}|^~[a-z]{3}A/.test(r.id)
        && (lnkr = (r.doc || r.value).linkref) && typeof lnkr === 'string'
        && (fileref.indexOf(lnkr) > -1 || fileref.indexOf(lnkr.replace(/^.+\//, "")) > -1) )
      .map(r => {
        fcps.push({
          aid: r.id,
          unm: ((r.doc || r.value).file_created || "").username,
          ts2: ((r.doc || r.value).file_created || "").timestamp
        });
        tocs.push((r.doc || r.value).tocfmt);
        return (r.doc || r.value).texthl || [];
      }) || [] )
    .then( () => !window.localforage ? []
      : localforage.keys((err, keys) => err ? Promise.reject(err) : keys) )
    .then( keys => Promise.all(
      keys.map( k => !/\*\(\d+\)$/.test(k) && localforage.getItem(k)
        .then(val => {
          if ( /^{".+}$/.test(val)
          && (lnkr = (val = jsonParse(val) || "").linkref) && typeof lnkr === 'string'
          && (fileref.indexOf(lnkr) > -1 || fileref.indexOf(lnkr.replace(/^.+\//, "")) > -1) ) {
            fcps.push({
              unm: (val.file_created || "").username,
              ts2: (val.file_created || "").timestamp
            });
            tocs.push(val.tocfmt);
            return val.texthl || [];
          }
        }) ) ))
    .then( ah2s => rslv({
      fcps: fcps,
      tocs: tocs,
      ahls: (ahls || []).concat(ah2s.filter(hli => hli) || []) }) )
    .catch(rjct);
  });
}

function webdocGen(redirect, pdata = filewkg || Object.assign({}, ECOTMPLS.publmgr)) {
  let ecolinks = document.querySelector('#ecolinks'),
    sdir = pdata.file_updated.subdir,
    scriptsconstr = pdata.parseconfigs.scriptsconstr,
    scriptsincl = pdata.parseconfigs.scriptsincl,
    sil = scriptsincl.length,
    linksconstr = pdata.parseconfigs.linksconstr,
    linksincl = pdata.parseconfigs.linksincl,
    linkinserts = "",
    linkrenders = "",
    fragstxt = [],
    rsltcontent = "",
    sifragsbound = null;
  reniscurr = true;
  ecolinks.innerHTML
  = document.querySelector('#ecorender').innerHTML
  = document.querySelector('#ecosrcview').innerHTML
  = document.querySelector('#ecoscripts').innerHTML = null;
  fragstxt = pdata.filefrags.map( ob => typeof ob.contenttxt !== 'string'
    || !ob.contenttxt ? ob.contenttxt : ob.contenttxt.trim() + "\n\n" );
  scriptsincl.forEach( (sii, i) => sifragsbound == null &&
    (sii.applytofrag.every(e => e) || i + 1 === sil) && (sifragsbound = i) );
  scriptsincl.forEach((sii, i1) => {
    if (!sii.fncname) { return; }
    let scx = scriptsconstr.find(sci => sci.fncname === sii.fncname)
        || ECOMODJS[sii.fncname.replace(/\*\d*$/, "")] || {},
      fnx = scx.deftxt && scx.deftxt !== ECOTMPLS.publmgr.parseconfigs.scriptsconstr[0].deftxt
          && ((str, idx) => (new Function("return (" + scx.deftxt + ")"))()(str, idx))
        || (ECOMODJS[sii.fncname.replace(/\*\d*$/, "")] || "").fnc
        || window.ecomjs[sii.fncname] || window.ecoqjs[sii.fncname]
        || typeof window[sii.fncname] === 'function' && window[sii.fncname] || (str => str);
    if (i1 < sifragsbound && (i1 + 1 < sifragsbound || sii.applytofrag.some(e => !e))) {
      fragstxt = fragstxt.map( (fti, i2) =>
        !sii.applytofrag[i2] ? fti : fnx(fti, i2, scx.features, pdata.filefrags[i2]) );
      i1 + 1 !== sifragsbound || (rsltcontent = fragstxt.join(""));
    } else if (!i1 && !sifragsbound || i1 < sifragsbound) {
      rsltcontent = fnx(fragstxt.join(""), -1, scx.features);
    } else if (sii.applytofrag[0]) {
      rsltcontent = fnx(rsltcontent, -1, scx.features);
    } else if (sil === 2) {
      rsltcontent = fragstxt.join("");
    }
  });
  sil > 1 || (rsltcontent = fragstxt.join(""));
  if (linksconstr.linksinclrender && !redirect) {
    linksincl.forEach( lnki => linkrenders += !(lnki.applytorender && lnki.filepath) ? ""
      : '<link href="' + (epsets.appchks[26] ? lnki.filepath : EC2.u2Blob(lnki.filepath))
        + '" type="text/css" rel="stylesheet" async />\n' );
    ecolinks.innerHTML = linkrenders;
  }
  if ( linksconstr.insertposition && (linksconstr.htmllinktxt || linksconstr.wrapperincl)
  && !(pdata.loadconfigs.atimportexpand && linksconstr.linksinclrender) ) {
    linkinserts = linksconstr.wrapperincl
      ? linksconstr.wraptagstart.trim() + "\n"
        + (lnkstor.length ? lnkstor.join("\n") : linksconstr.htmllinktxt.trim()) + "\n"
        + linksconstr.wraptagend.trim()
      : linksconstr.htmllinktxt.trim();
    rsltcontent = /^2$|^head$|^true$/.test(linksconstr.insertposition)
    && /<\/head>|<body\b.*?>/i.test(rsltcontent)
      ? rsltcontent.replace(/(?=<\/head>|<body\b.*?>)/i, linkinserts + "\n")
      : /^[12]$|^top|^begin|^start|^head$|^true$/.test(linksconstr.insertposition)
      ? linkinserts + "\n" + rsltcontent
      : /^3$|^body$/.test(linksconstr.insertposition) && /<\/body>/i.test(rsltcontent)
      ? rsltcontent.replace(/(?=<\/body>)/i, linkinserts + "\n")
      : /^[34]$|^bottom|^end|^fin|^body$/.test(linksconstr.insertposition)
      ? rsltcontent + linkinserts + "\n" : rsltcontent;
  }
  if (redirect) {
    return rsltcontent;
  } else {
    annosGet((!sdir ? "" : sdir + "/") + pdata._id).catch(msgHandl)
    .then(cfgs => dataDispl(rsltcontent, 3, null, cfgs));
  }
}

function dropboxTx(txdata, xrslv, xrjct = _=>_) {
  // dropbox(apiFunction, apiArguments, handlers);
  let blobwrite,
    dbat = localStorage["__dbat"],
    dbox = txdata.dbox || "metadata",
    rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    errShow = err => msgHandl("Alert: Dropbox transaction attempted & failed.\n" + msgPrefmt(err));
  if ( !/^\/|^$/.test(txdata.path)
  || /upload|delete/.test(txdata.dbox) && txdata.mode !== "overwrite" ) {
    return xrjct(msgHandl(ECOINSTR[5]));
  } else if (!window.dropbox || !dbat || dbat.length < 16) {
    return xrjct(msgHandl("Error: Dropbox access token must be preset.\n\n" + ECOINSTR[5]));
  } else {
    delete txdata.dbox;
  }
  if (/^list|^get|folder$|metadata$/.test(dbox)) {
    dropbox( (/\.\w{2,}$/.test(txdata.path) ? 'files/get_metadata' : 'files/list_folder'),
      { path: txdata.path }, rslt => xrslv ? xrslv(rslt) : dataDispl(rslt, 0) )
    .catch(err => xrjct(errShow(err)));
  } else if (/download$/.test(dbox)) {
    dropbox( 'files/download', { path: txdata.path }, (metadata, filecontents) => {
      let blobread = new FileReader();
      blobread.onerror = xrjct;
      blobread.onload = () => xrslv ? xrslv(blobread.result) : dataDispl(blobread.result, 0);
      blobread.readAsText(filecontents);
    }).catch(errShow);
  } else if (/upload$/.test(dbox)) { // { type: 'application/octet-stream' }
    blobwrite = new Blob([rawtxta.value.trim() + "\n"]);
    dropbox( 'files/upload', txdata, blobwrite,
      resp => msgHandl("Dropbox file updated.\n" + msgPrefmt(resp)) )
    .catch(errShow);
  } else if (/delete$/.test(dbox)) {
    dropbox( 'files/delete', txdata,
      resp => msgHandl("Dropbox file removed.\n" + msgPrefmt(resp)) )
    .catch(errShow);
  } else {
    msgHandl(ECOINSTR[5]);
  }
}

function blobHandl(ablob, destindr, txdata = {}, cbfnc) {
  let blobread,
    attinp = document.querySelector('#econav0 #attinp'),
    rextxt = /\.(?:json|md|m?js|s?css|te?xt|\w{5,})$/i;
  if (!(ablob instanceof Blob)) {
    attinp.value || EC1.attSel();
    dataDispl(ablob, destindr, cbfnc);
  } else if (reximg.test(txdata.ATTKEY) || txdata.url && /^image/.test(ablob.type)) {
  //|| txdata.hdrs && /image/.test(txdata.hdrs["Content-Type"]) ) {
    dataDispl( imgWrap( !txdata.ATTKEY ? txdata.url
      : !asseturls[txdata.ATTKEY] && txdata.DBNAME
      ? a00path.replace(/a00$/, "") + txdata.DBNAME + "/" + txdata.FILEID + "/" + txdata.ATTKEY
      : /^blob:/.test(asseturls[txdata.ATTKEY]) && asseturls[txdata.ATTKEY]
        || (asseturls[txdata.ATTKEY] = URL.createObjectURL(ablob)) ), 6 );
  } else {
    !txdata.ATTKEY || /^blob:/.test(asseturls[txdata.ATTKEY])
    || (asseturls[txdata.ATTKEY] = URL.createObjectURL(ablob));
    blobread = new FileReader();
    blobread.onerror = err => msgHandl("Alert: Attachment not read.\n" + blobread.error);
    blobread.onload = () => {
      if (destindr === -1) {
        !cbfnc || cbfnc(blobread.result);
      } else if ( destindr === 3 && ( rextxt.test(txdata.ATTKEY)
      || (/^-app-/i.test(txdata.FILEID) && /\.html?$/i.test(txdata.ATTKEY)) )) {
        dataDispl(blobread.result, 7);
      } else {
        annosGet(txdata.ATTKEY).catch(msgHandl)
        .then(cfgs => dataDispl(blobread.result, destindr, cbfnc, cfgs));
      }
    };
    blobread.readAsText(ablob);
  }
}

function couchSync(txdata, valcon = "") {
// data sources: 1 valcon-filepath/json->txdata, 2 pchSel/ibmConnect-obj->txdata
  txdata || ([txdata, valcon] = txdPrep());
  txdata = txCrdtlz(txdata);
  let dbpc2, err2, txsjson, loadobj,
    dburl = txurlGen(txdata),
    fileref = document.querySelector('#econav0 #pfsinp').value.replace(/\/ *$|^\u2514 /g, "").trim(),
    dirlist = document.querySelector('#ecoesp0 #dirlist'),
    rm2chgs = document.querySelector('#ecoesp0 #rm2chgs'),
    rm2hlps = document.querySelectorAll('#ecoesp0 #publpre>div:nth-of-type(1) .help'),
    rm2btn = document.querySelector('#ecoesp0 #rm2btn'),
    rmthlps = document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(3) .help'),
    rmtbtn = document.querySelector('#ecoesp0 #rmtbtn'),
    optslno = !txdata.OPTS ? { live: false }
      : txdata.OPTS.hasOwnProperty("live") ? txdata.OPTS
      : Object.assign(txdata.OPTS, { live: false });
  if (window.PouchDB && txdata.DESTROY && txdata.DBNAME) {
    !PouchDB.allDbs || PouchDB.allDbs()
    .then( dbs => !dbs.some(e => e === txdata.DBNAME)
      || new PouchDB(txdata.DBNAME).destroy().then(resp => {
        !dbpch || dbpch.name !== txdata.DBNAME || (dbpch = null);
        msgHandl( "Local DB successfully destroyed: " + txdata.DBNAME
          + (dbpch ? "\n" : "\nAlert: No local DB is open.\n") + msgPrefmt(resp) );
      }) )
    .catch(err => msgHandl("Alert: DB destruction attempted & failed.\n" + msgPrefmt(err)))
    .then(pdbListGen).then(pfsListGen);
  } else if (window.PouchDB && txdata.DBNAME && (!dbpch || dbpch.name !== txdata.DBNAME)) {
    // evoked only by ibmConnect, (ibmConnect>/qconSyncD>)pchSel
    // of which a new db is (potentially) created only by ibmConnect, qconSyncD>pchSel
    // todo: when are ListGen's necessary?
    dbpch = new PouchDB(txdata.DBNAME);
    dbpch.info().then(resp => {
      msgHandl(resp);
      updseq[txdata.DBNAME] = resp.update_seq;
      if (txdata.RMTFR) {
        EC2.dbsSync(txdata);
      } else {
        pdbListGen();
        pfsListGen();
      }
    }).catch(msgHandl);
  } else if (txdata.COMPACT && (dburl || dbpch && dbpch.name === txdata.DBNAME)) {
    (!dburl ? dbpch : new PouchDB(dburl, { skip_setup: true }))
    .compact().then( resp => msgHandl( "DB compaction is successful: " + txdata.DBNAME
      + "\n" + msgPrefmt(resp) ))
    .catch(err => msgHandl("Alert: DB compaction attempted & failed.\n" + msgPrefmt(err)));
  } else if (txdata.CLEANUP && (dburl || dbpch && dbpch.name === txdata.DBNAME)) {
    (!dburl ? dbpch : new PouchDB(dburl, { skip_setup: true }))
    .viewCleanup().then( resp => msgHandl( "DB views are cleaned up: " + txdata.DBNAME
      + "\n" + msgPrefmt(resp) ))
    .catch(err => msgHandl("Alert: DB view clean-up attempted & failed.\n" + msgPrefmt(err)));
  } else if (dburl && dbpch && dbpch.name === txdata.DBNAME) {
    dbpc2 = new PouchDB(dburl, { skip_setup: true });
    ( txdata.RMTFR ? dbpch.replicate.from(dbpc2, optslno)
    : txdata.RMTTO ? dbpch.replicate.to(dbpc2, optslno)
    : dbpch.sync(dbpc2, optslno) )
    .then(resp => {
      msgHandl((
        (err2 = (resp.push && resp.push.errors.length) || (resp.pull && resp.pull.errors.length))
        ? "Alert: Data sync attempted, but errors occurred.\n"
        : "Data sync attempted & succeeded.\n" ) + msgPrefmt(resp) );
      pdbListGen();
      pfsListGen(fileref, dirlist.value || err2 && 2 || 1);
      EC2.rmtSel();
      (txdata.RMTFR ? rm2hlps[0] : rmthlps[0]).classList.remove("is-hidden");
      [rm2btn, rmtbtn].forEach(e => e.disabled = true);
      dbpch.changes({ since: updseq[dbpch.name] }).then(rslt => {
        updseq[dbpch.name] = rslt.last_seq;
        updts0 = new Date((resp.push || resp).end_time).getTime();
        rm2chgs.innerHTML = updpch[dbpch.name] = !rslt.results.length
        ? '\n<div class="title is-6 has-text-grey-light is-italic">No files were updated.</div>'
          + '\n<div class="subtitle is-6 has-text-grey-light">'
          + (resp.pull || resp).end_time + '</div>\n'
        : '\n<div class="title is-4 has-text-grey">Updated Files</div>'
          + '\n<div class="subtitle is-6 has-text-grey-light">'
          + (resp.pull || resp).end_time + '</div>\n<ul>\n<li>'
          + rslt.results.map( r =>
            r.seq + ': <span class="has-text-grey">' + r.id + '</span> ('
            + r.changes[0].rev.replace(/\D.+/, "") + ')' )
          .join('</li>\n<li>') + '</li>\n</ul>\n';
        localStorage["_ecopchupds"] = JSON.stringify(updpch);
        protfile || !txdata.RMTFR || txdata.DBNAME !== "a00" || !rslt.results.length
        || dbpch.compact().then(msgHandl).catch(msgHandl);
      }).catch(msgHandl);
    }).catch(err => {
      msgHandl("Alert: Data sync attempted & failed.\n" + msgPrefmt(err));
      pdbListGen();
      pfsListGen(fileref, dirlist.value || 2);
      EC2.rmtSel();
      (txdata.RMTFR ? rm2hlps[1] : rmthlps[1]).classList.remove("is-hidden");
      (txdata.RMTFR ? rm2btn : rmtbtn).disabled = true;
    });
  } else { // display couchdb query data pattern for next attempt
  // returns: loadobj-str/obj, gen'd from caccts/ls-custdata
  // -- caccts opt'ly narrowed down by valcon-idx/DBNAME
  // - acct-arr is returned unless _-key/idx/DBNAME is provided
  // - triggered only when txdata is unempty but misfmt'd for sync-ops
    if (!/^\b\S+$/.test(valcon)) { // check that qconSyncD-cacct-lookup wasn't the trigger
      pdbListGen();
      pfsListGen();
    }
    txsjson = localStorage[ !/^_(?!\.\d+$)[\w!.*+~-]+$/.test(valcon)
      ? "_couchaccts" : valcon.replace(/\.\d+$/, "") ];
    loadobj = /^{".+}$/.test(txsjson) && jsonParse(txsjson)
      || /^\[.*{".+}\]$/.test(txsjson)
      && ( /^(?:_.*\.|)\d+$|^(?!_)[\w!.*+~-]+$/.test(valcon)
        && ( (jsonParse(txsjson) || "")[valcon.replace(/^(?:_.*\.|)(\d+)$/, "$1")]
        || (jsonParse(txsjson) || []).find(ob => ob.DBNAME === valcon) ) || jsonParse(txsjson) )
      || txsjson;
    document.querySelector('#econav0 #qcontxta').value = loadobj
    ? msgPrefmt(txCrdtlz(loadobj)) + "\n" : JSON.stringify(COUCHTXD, null, 2) + "\n";
  } // msgHandl("Alert: Data sync / DB maintenance not attempted.");
}

function couchQry(txdata, destindr, cbfnc) {
// data sources: 1 valcon-filepath/json->txdata, 2 sellist/attinp-filepath->txdata
  txdata = txCrdtlz(txdata);
  let dbpc2,
    dburl = txurlGen(txdata),
    optsdds = Object.assign({ startkey: "_design", endkey: "_design0" }, txdata.OPTS),
    attinp = document.querySelector('#econav0 #attinp'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    errShow = err => {
      destindr !== 3 || attinp.value || EC1.attSel();
      msgHandl(err);
    },
    instrqcon = "Alert: Data retrieval not attempted.\n\n" + ECOINSTR[2] + "\n" + ECOINSTR[5],
    dbQryCalls = () => {
      if (!txdata.FILEID) {
        dbpc2.info().then(resp => dataDispl(resp, destindr, cbfnc)).catch(errShow);
      } else if (txdata.FILEID === "_all_docs") {
        dbpc2.allDocs(txdata.OPTS || {})
        .then(rslt => dataDispl(rslt, destindr, cbfnc))
        .catch(errShow);
      } else if (txdata.FILEID === "_design_docs") {
        dbpc2.allDocs(optsdds)
        .then(rslt => dataDispl(rslt, destindr, cbfnc))
        .catch(errShow);
      } else if (txdata.FILEID === "_changes") {
        dbpc2.changes(txdata.OPTS || {})
        .then(rslt => dataDispl(rslt, destindr, cbfnc))
        .catch(errShow);
      } else if (txdata.FILEID && txdata.VIEW) {
        dbpc2.query(txdata.FILEID.replace(/^_design\//, "") + "/" + txdata.VIEW, txdata.OPTS || {})
        .then(rsltview => dataDispl(rsltview, destindr, cbfnc))
        .catch(errShow);
      } else if (txdata.FILEID && txdata.ATTKEY) {
        dbpc2.getAttachment(txdata.FILEID, txdata.ATTKEY, txdata.OPTS || {})
        .then(rslt => blobHandl(rslt, destindr, txdata)).catch(err => {
          destindr !== 3 || attinp.value || EC1.attSel();
          msgHandl("Alert: Attachment not found.\n" + msgPrefmt(err));
        });
      } else if (txdata.FILEID) {
        dbpc2.get(txdata.FILEID, txdata.OPTS || {})
        .then(rslt => dataDispl(rslt, destindr, cbfnc))
        .catch(errShow);
      } else {
        msgHandl(instrqcon);
      }
    };
  if (dburl) {
    dbpc2 = new PouchDB(dburl, { skip_setup: true });
    dbQryCalls(); // retrieve remote-couchdb file
  } else if (window.PouchDB && txdata.DBNAME === "_all_dbs") {
    // dbs is an array of strings, e.g. ['mydb1', 'mydb2']
    !PouchDB.allDbs || PouchDB.allDbs()
    .then(rslt => dataDispl(rslt, destindr, cbfnc)).catch(msgHandl);
  } else if ( window.PouchDB && txdata.DBNAME
  && Array.from(pchlist.options).some(op => op.value === txdata.DBNAME) ) {
    dbpc2 = new PouchDB(txdata.DBNAME);
    dbQryCalls(); // retrieve locally-stored, non-loaded-pouchdb file
  } else {
    dbpch || msgHandl("Alert: No local DB is open.");
    msgHandl(instrqcon);
  }
}

function couchPut(txdata = txdPrep()[0]) {
// data sources: 1 valcon-json+doc(s)->txdata, 2 valcon-json->txdata & jderaw-json/fw-obj,
// 3 fwUpdPrep-obj+vassets-json->txdata, 4 pchUpd-obj(+doc)->txdata (& fw-obj)
  txdata = txCrdtlz(txdata);
  let dbpc2, subdir,
    dburl = txurlGen(txdata),
    fileslf = document.querySelector('#econav0 #pfslist>optgroup[label="LOCAL temporary files"]') || {},
    fileref = document.querySelector('#econav0 #pfsinp').value.replace(/\/ *$|^\u2514 /g, "").trim(),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    pchhlps = document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(1) .help'),
    imgahlps = document.querySelectorAll('#ecoesp0 #eftass .help'),
    cobj = txdata.DELETE ? { _deleted: true }
      : txdata.vassets ? jsonParse(txdata.vassets)
      : txdata.doc || filewkg || jsonParse(rawtxta.value);
  if (dburl) {
    dbpc2 = new PouchDB(dburl, { skip_setup: true });
  } else if (dbpch && dbpch.name === txdata.DBNAME) {
    dbpc2 = dbpch;
  }
  if (!dbpc2) {
    msgHandl( "Alert: No export attempted. Insufficient data.\n" + JSON.stringify(txdata, null, 2)
      + "\n\n" + ECOINSTR[3] + "\n" + ECOINSTR[4] + "\n" + ECOINSTR[5] );
    (!txdata.doc ? pchhlps[1] : imgahlps[1]).classList.remove("is-hidden");
  } else if (txdata.docs) {
    dbpc2.bulkDocs(txdata.docs, txdata.OPTS || {}).then(resp => {
      msgHandl(`${dburl ? "Remote" : "Local"} CouchDB docs updated.\n` + msgPrefmt(resp));
      return !dburl && dbpch.info().then(ob => updseq[dbpc2.name] = ob.update_seq)
      .then(() => pfsListGen(fileref));
    }).catch(err => {
      msgHandl(err);
      pchhlps[1].classList.remove("is-hidden");
    });
  } else if (cobj) {
    subdir = cobj.file_created && cobj.file_created.subdir;
    dbpc2.get(cobj._id || (cobj._id = txdata.FILEID)).catch(err => {
      if (err.name === 'not_found') {
        !txdata.DELETE || msgHandl("Alert: Delete operation failed.\n" + msgPrefmt(err));
      } else { msgHandl(err); }
    }).then(cdoclatest => {
      cobj._rev = txdata.FILREV || (!cdoclatest ? "" : cdoclatest._rev);
      !txdata.doc || !cobj._attachments || !(cdoclatest || "")._attachments
      || Object.assign(cobj._attachments, cdoclatest._attachments);
      return (!cdoclatest && txdata.DELETE)
      || dbpc2.put(cobj, txdata.OPTS || {}).then(resp => {
        msgHandl( (dburl ? "Remote" : "Local") + " CouchDB doc "
          + (txdata.DELETE ? "deleted" : "updated") + ".\n" + msgPrefmt(resp) );
        if (!dburl) {
          if ( !optg || optg !== "LOCAL temporary files"
          || !Array.from(fileslf.children).some(op => op.value === fileref) ) {
            !txdata.DELETE || filewkg !== cobj || (fileref = "");
            !txdata.vassets ? pfsListGen(fileref, subdir || 1) : attListGen(0, subdir || 1);
          } else if (!txdata.vassets) {
            EC2.fileLFUpd(resp.rev, subdir || 1);
          }
          (!txdata.doc ? pchhlps[0] : imgahlps[0]).classList.remove("is-hidden");
          document.querySelector('#ecoesp0 #pchbtn').disabled = true;
          updseq[dbpc2.name]++;
        }
      });
    }).catch(err => {
      msgHandl(err);
      (!txdata.doc ? pchhlps[1] : imgahlps[1]).classList.remove("is-hidden");
    });
  }
}

function couchAtt(dirtxd) {
// data sources:
// 1 valcon-json->adata & jderaw/fw-render -text
// 2 dirUpd1-obj->adata & fw-render-text
// 3 dirUpd2-obj->adata & txdata.CBLOB
// 4 srvrUpl-obj->adata & fw-render-text/txdata.CBLOB
  let dbpc2,
    txdata = txCrdtlz(dirtxd || txdPrep()[0]),
    dburl = txurlGen(txdata),
    typpmgr = filewkg && (filewkg.file_type === "eco-publmgr" || filewkg.filefrags && true),
    cdirpath = filewkg && filewkg.loadconfigs && filewkg.loadconfigs.commondirpath,
    rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    dirhlps = document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(2) .help'),
    uplhlps = document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(4) .help'),
    imgahlps = document.querySelectorAll('#ecoesp0 #eftass .help'),
    ctypes = { css: "text/css", htm: "text/html", html: "text/html",
      js: "text/javascript", mjs: "text/javascript" },
    adata = {
      FILEID: txdata.FILEID || ( !dirtxd && cdirpath && cdirpath
          .replace(/^\.\.\/(.+)\/$|.+/, (m, c1) => /^[.-]\b/.test(c1) ? c1 : "." + c1) ),
      FILREV: txdata.OPTS && txdata.OPTS.rev || txdata.FILREV,
      ATTKEY: txdata.ATTKEY && txdata.ATTKEY
          + (/\.[a-z]\w{1,3}$/i.test(txdata.ATTKEY) ? "" : typpmgr ? ".html" : ".txt")
        || filewkg && filewkg._id + (/\.[a-z]\w{1,3}$/i.test(filewkg._id) ? "" : typpmgr ? ".html" : ".txt")
        || "att" + new Date().toISOString(),
      CTYPE:  txdata.CTYPE
        || ctypes[(txdata.ATTKEY || "").replace(/^.+?(?:\.([a-z]\w{1,3})|)$/i, "$1")]
        || (txdata.CBLOB || "").type || typpmgr && "text/html" || "text/plain"
    },
    ablob = txdata.CBLOB
    || new Blob([typpmgr ? webdocGen(1) : rawtxta.value], { type: adata.CTYPE });
  if ( dburl || window.PouchDB && txdata.DBNAME
  && Array.from(pchlist.options).some(op => op.value === txdata.DBNAME) ) {
    dbpc2 = new PouchDB(dburl || txdata.DBNAME, { skip_setup: !dburl ? undefined : true });
  }
  if (!dbpc2) {
    msgHandl("Alert: Attachment not attempted. No DB is specified.\n\n" + ECOINSTR[4]);
  } else if (!adata.ATTKEY || !adata.FILEID || adata.FILEID === "myfile") {
    msgHandl( "Alert: Attachment not attempted. Insufficient data.\n"
      + JSON.stringify(adata, null, 2) + "\n\n" + ECOINSTR[4] );
    txdata.CBLOB ? imgahlps[1].classList.remove("is-hidden")
    : !dirtxd || (dirtxd.USRNAM ? uplhlps[1] : dirhlps[1]).classList.remove("is-hidden");
  } else {
    dbpc2.get(adata.FILEID).catch(err => {
      if (err.name !== 'not_found') {
        msgHandl(err);
        txdata.CBLOB ? imgahlps[1].classList.remove("is-hidden")
        : !dirtxd || (dirtxd.USRNAM ? uplhlps[1] : dirhlps[1]).classList.remove("is-hidden");
      }
    }).then(cdoclatest => {
      adata.FILREV = adata.FILREV || (!cdoclatest ? "" : cdoclatest._rev);
      if (!txdata.REMOVE) {
        dbpc2.putAttachment(adata.FILEID, adata.ATTKEY, adata.FILREV, ablob, adata.CTYPE)
        .then(resp => {
          msgHandl( !dburl || resp.ok ? "Attachment attempted & succeeded.\n" + msgPrefmt(resp)
            : "Alert: Attachment attempted & failed.\n"
              + JSON.stringify(adata, null, 2) + "\n" + msgPrefmt(resp) );
          if (!dburl) {
            if (txdata.CBLOB) {
              EC1.pfsSel(1);
              imgahlps[0].classList.remove("is-hidden");
              document.querySelector('#ecoesp0 #imgabtn').disabled = true;
            } else {
              dirhlps[0].classList.remove("is-hidden");
              document.querySelector('#ecoesp0 #dirbtn').disabled = true;
            }
            attListGen(1);
            updseq[dbpc2.name]++;
          } else if (dirtxd && dirtxd.USRNAM) {
            uplhlps[resp.ok ? 0 : 1].classList.remove("is-hidden");
            document.querySelector('#ecoesp0 #uplbtn').disabled = resp.ok;
          }
        }).catch(err => {
          msgHandl( "Alert: Attachment attempted & failed.\n"
          + JSON.stringify(adata, null, 2) + "\n" + msgPrefmt(err) + "\n" + ECOINSTR[4] );
          txdata.CBLOB ? (!dburl ? imgahlps[1] : uplhlps[1]).classList.remove("is-hidden")
          : !dirtxd || dirhlps[1].classList.remove("is-hidden");
        });
      } else {
        dbpc2.removeAttachment(adata.FILEID, adata.ATTKEY, adata.FILREV)
        .then(resp => {
          msgHandl("Attachment successfully removed: " + adata.ATTKEY + "\n" + msgPrefmt(resp));
          if (!dburl) {
            attListGen(1);
            updseq[dbpc2.name]++;
          }
        }).catch( err => msgHandl( "Alert: Attachment removal attempted & failed.\n"
          + JSON.stringify(adata, null, 2) + "\n" + msgPrefmt(err) + "\n" + ECOINSTR[4] ));
      }
    }).catch(msgHandl);
  }
}

function ibmcosTxD(txdata, typpmgr, send) {
  let rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    reqipch = txdata.DBNAME && Array.from(pchlist.options).some(op => op.value === txdata.DBNAME),
    ecoat = (txdata.idtoks || idtoks || "").accessToken;
  return ( !send || !window.PouchDB || !reqipch || !txdata.FILEID || !txdata.ATTKEY
    ? Promise.resolve() : new PouchDB(txdata.DBNAME)
      .getAttachment(txdata.FILEID, txdata.ATTKEY, txdata.OPTS || {}) )
  .then( ablob => ({
    url:  txdata.COSEND
      + (!txdata.COSBKT ? "" : "/" + txdata.COSBKT)
      + (!txdata.DBNAME ? "" : "/" + txdata.DBNAME)
      + (!txdata.FILEID ? "" : "/" + txdata.FILEID)
      + (!txdata.ATTKEY ? "" : "/" + txdata.ATTKEY),
    xmet: !send ? 'GET' : 'PUT',
    //crds: !ecoat ? 'omit' : 'include',
    hdrs: {
      "Content-Type":  !send ? null : !reximg.test(txdata.ATTKEY)
        ? txdata.CTYPE : 'image/jpeg',
      "Authorization": !ecoat ? null : "bearer " + ecoat
    },
    body: send && ( ablob || txdata.CBLOB
      || new Blob([typpmgr ? webdocGen(1) : rawtxta.value], { type: txdata.CTYPE }) ),
    bmet: send ? 'text'
      : !reximg.test(txdata.ATTKEY) ? 'text' : 'blob'
  }) );
}

function fwUpdPrep(fileref, dirref, pchutrg, lfnew) {
  // only called when: filewkg && fileref
  // replaces filewkg with delete-obj only when: delswi is checked
  // proceeds only when: file_type is "eco-*"
  // modifies: filewkg meta-properties mainly, ext'l content if present, fileref in 7 special cases
  // returns only: (modified) fileref or false
  // fileref is modified internally only for:
  // id "~DVIZ_*|~TMP0_*" or type "eco- assets|prjid|anno|memo|contact"
  filewkg._id || (filewkg._id = fileref);
  if (document.querySelector('#ecoesp0 #delswi').checked) {
    filewkg = { _id: filewkg._id, _rev: filewkg._rev, _deleted: true };
    return fileref;
  } else if (!filewkg.file_type || !/^eco-/.test(filewkg.file_type)) {
    return fileref;
  } else if (pchutrg && !dirref && !filewkg._rev && filewkg.file_created) {
    dirref = filewkg.file_created.subdir;
  } else if (filewkg.file_type === "eco-assets") { //!dirref &&
    if (!/^[.-]?\w/.test(fileref)) { return false; }
    fileref = fileref.replace(/^(?=\w)/, ".");
  }
  let idx, vassets,
    jfw = filewkg || {},
    versinp = document.querySelector('#ecoesp0 #versinp'),
    ownrinp = document.querySelector('#ecoesp0 #ownrinp'),
    peoptxta = document.querySelector('#ecoesp0 #peoptxta'),
    misctxta = document.querySelector('#ecoesp0 #misctxta'),
    cdirpath = jfw.loadconfigs && jfw.loadconfigs.commondirpath,
    fragsrcxs = jfw.loadconfigs && jfw.loadconfigs.fragsrcxs || [],
    ucallsgn = ((tm0cntcs[jfw.from || epsets.uname] || "")._id || "")
      .replace(/^(?:!([0-9a-z]+)-|)([a-z]{3})$|.+/, "$1$2"),
    dirdot = !dirref || /^-/.test(dirref = dirref.replace(/^\./, "")) ? "" : ".",
    rmttxd = dbpch && caccts.find(ob => ob.DBNAME === dbpch.name) || {},
    tstamp1 = Date.now(),
    ptys0Add = ppty => {
      jfw[ppty].username = epsets.uname;
      jfw[ppty].timestamp = tstamp1;
      if ( ppty === "file_created" || pchutrg || !jfw._rev
      && jfw["file_created"].timestamp === jfw["file_updated"].timestamp ) {
        jfw[ppty].dborigin = rmttxd.DBORIG || a00orig || "";
        jfw[ppty].dbname = dbpch ? dbpch.name : !rmttxd.DBNAME ? "" : rmttxd.DBNAME;
      }
      jfw[ppty].subdir = dirref || jfw[ppty].subdir || "";
      if ( ppty === "file_created" || !jfw._rev
      && jfw["file_created"].timestamp === jfw["file_updated"].timestamp ) {
        !jfw[ppty].hasOwnProperty("misc") || (jfw[ppty].misc = "");
        !jfw[ppty].hasOwnProperty("version")
        || (jfw[ppty].version = ECOTMPLS.publmgr[ppty].version);
      }
    };
  epsets.appchks[25] || !jfw.filefrags || jfw.filefrags.forEach((ffi, i) => {
    //!tmp1ff || !tmp1ff.filefrags[i].contenttxt || (ffi.contenttxt = ""); // todo: clean ffi
    if ( (((tmp1ff || "").filefrags || [])[i] || "").contenttxt
    || fragsrcxs[i] || cdirpath && fragsrcxs[i] !== false
    || rexrmt.test(ffi.titletxt) || rexloc.test(ffi.titletxt) ) {
      ffi.contenttxt = "";
    }
  }); //cntXClear();
  epsets.appchks[25] || !tmp1ff || (jfw.filefrags || []).length < 2
  || cdirpath || fragsrcxs.length
  || (idx = jfw.filefrags.map((ffi, i) => !ffi.contenttxt ? 0 : 1).lastIndexOf(1)) < -1
  || jfw.filefrags.splice(idx < 0 ? 1 : 1 + idx); //cntXClear();
  epsets.appchks[25] || !tmp1pc || Object.keys(tmp1pc.parseconfigs || {}) //cntXClear();
    .forEach( k => !tmp1pc.parseconfigs[k] || !/^linksc/.test(k) && !tmp1pc.parseconfigs[k][1]
      || (jfw.parseconfigs[k] = jsonParse(JSON.stringify(ECOTMPLS.publmgr.parseconfigs[k]))) );
  if (/^~DVIZ_\w/.test(jfw._id) && jfw._id.replace(/^~DVIZ_/, "") !== fileref) {
    jfw._id = (/^~DVIZ_/.test(fileref) ? "" : "~DVIZ_") + fileref;
    jfw._rev = "";
    fileref = fileref.replace(/^~DVIZ_/, "");
  } else if (/^~TMP[\dL]_\w/.test(jfw._id) && jfw._id.replace(/^~TMP[\dL]_/, "") !== fileref) {
    idx = [/-pub/, /-src/, /-scr/, /-prj/, /-pos/, /-ann/, /-ass/, /-con/]
      .findIndex(rex => rex.test(jfw.file_type));
    jfw._id = (/^~TMP[\dL]_/.test(fileref) ? "" : "~TMP" + (1 + idx) + "_") + fileref;
    jfw._rev = "";
    fileref = fileref.replace(/^~TMP[\dL]_/, "");
  } else if ( (jfw.file_type === "eco-event" || /^~E\d{8}/.test(jfw._id))
  && (!/^~E\d{8}/.test(jfw._id) || jfw._id !== fileref) ) {
    jfw._id = "~E" + new Date(tstamp1).toISOString().replace(/\.\w+$|[:-]/g, "") + ucallsgn;
    jfw._rev = "";
    jfw.file_type || (jfw.file_type = "eco-event");
    ptys0Add("file_created");
  } else if ( (jfw.file_type === "eco-prjid" || /^~DBID_\w/.test(jfw._id))
  && (!/^~DBID_/.test(jfw._id) || jfw._id.replace(/^~DBID_/, "") !== fileref) ) {
    jfw._id = (/^~DBID_/.test(fileref) ? "" : "~DBID_") + fileref;
    jfw._rev = "";
    jfw.file_type || (jfw.file_type = "eco-prjid");
    ptys0Add("file_created");
    fileref = fileref.replace(/^~DBID_/, "");
  } else if ( ( /^eco-(?:anno|memo|post)$/.test(jfw.file_type)
  || /^~[amp]\d{8}|^~[a-z]{3}[AP]\d{8}/.test(jfw._id) )
  && ucallsgn && ( pchutrg || lfnew || !/^~[amp]\d{8}|^~[a-z]{3}[AP]\d{8}/.test(jfw._id)
  || /^(?:Anno|Memo|Post)\d{8}/.test(fileref) && jfw._id.replace(/^~[amp](?=\d{8})|^~[a-z]{3}[AP]/, "")
  !== fileref.replace(/^(?:Anno|Memo|Post)/, "") ) ) {
    /^eco-(?:anno|memo|post)$/.test(jfw.file_type)
    || (jfw.file_type = "eco-" + (/^~(?:a|...A)\d{8}/.test(jfw._id) ? "anno" : "memo"));
    jfw._id = "~"
    + (/[am](?=\d{8})/i.exec(jfw._id) || /a|m/i.exec(jfw.file_type) || ["m"])[0].toLowerCase()
    + new Date(tstamp1).toISOString().replace(/\.\w+$|[:-]/g, "") + ucallsgn;
    jfw._rev = "";
    ptys0Add("file_created");
    !jfw.linkref || jfw.file_created.subdir
    || ( jfw.file_created.subdir = (( (pf3stor.dbpubl || [])
        .find(ar => ar && ar.join("").indexOf(jfw.linkref) > -1) || [] )
      .join("") ).replace(/\/[^\/]+$/, "") );
    !jfw.hasOwnProperty("from") || jfw.from || (jfw.from = epsets.uname);
    !/^my(?:anno|memo|post)\d\d$/.test(fileref)
    || ( fileref = jfw._id.replace( /~(?:[a-z]{3}|)([amp])(\d+T\d+)\w*|.+/i,
        (m, c1, c2) => (/a/i.test(c1) ? "Anno" : "Memo")
        + (c2 || new Date(jfw.file_created.timestamp).toISOString().replace(/\.\w+$|[:-]/g, "")) ));
  } else if ( (jfw.file_type === "eco-contact" || /^!(?:[0-9a-z]+-|)[0-9a-z]+$/i.test(fileref))
  && ( !/^!(?:[0-9a-z]+-|)[0-9a-z]+$/i.test(jfw._id)
  || ![jfw._id, jfw._id.replace(/^!/, ""), jfw.name_user, jfw.name_full]
  .some(val => val === fileref) ) ) {
    jfw._id = /^!(?:[0-9a-z]+-|)[0-9a-z]+$/i.test(fileref) ? fileref
    : "!" + ( jfw.team_groups[0]
        || (!dbpch ? epsets.teamid || "myteam" : dbpch.name.replace(/^a\d\d_/, "")) )
      + "-" + anumlIncr( (pf3stor.dbcntc.map(ar => ar[1]).sort().reverse()[0] || "")
        .replace(/^!(?:[0-9a-z]+-|)/i, "") );
    jfw._rev = "";
    jfw.ts_created = tstamp1;
    !jfw.name_user ? ( jfw.name_user = /^\w/.test(fileref) ? fileref.replace(/[^\w.@-]+/g, "-")
      : (jfw.emails[0] || "").replace(/@.*$/, "") || jfw.name_full.replace(/[^\w.@-]+/g, "-") )
    : fileref = jfw.name_user;
  } else if ( !jfw.file_created && jfw._id !== fileref
  && !/^~DVIZ_|^~TMP[\dL]_|^!\w/.test(jfw._id) ) {
    jfw._id = fileref;
    jfw._rev = "";
    jfw.ts_created = tstamp1;
  } else if ( jfw.file_created && jfw._id !== fileref
  && !/^~DVIZ_|^~DBID_|^~TMP[\dL]_|^~[amp]\d{8}|^~[a-z]{3}[AP]\d{8}/.test(jfw._id) ) {
    jfw._id = fileref;
    jfw._rev = "";
    ptys0Add("file_created");
  }
  if (jfw.hasOwnProperty("ts_updated") && !/^~TMP[\dL]_/.test(jfw._id)) {
    jfw.ts_updated = tstamp1;
    !dirref || jfw.loc_subdir || (jfw.loc_subdir = dirref);
  } else if (jfw.file_updated && !/^~TMP[\dL]_/.test(jfw._id)) {
    ptys0Add("file_updated");
    !ownrinp.classList.contains('is-warning') || (jfw.file_updated.username = ownrinp.value.trim());
    !misctxta.classList.contains('is-warning') || (jfw.file_updated.misc = misctxta.value.trim());
    if (jfw.file_type === "eco-publmgr") {
      !pchutrg || (jfw.file_updated.version = versinp.value.trim());
      !peoptxta.classList.contains('is-warning')
      || (jfw.contributors = peoptxta.value.trim().split(/[ ,]+/));
    }
  }
  if ( dirref && jfw.file_created
  && !/^~DVIZ_|^~DBID_|^~TMP[\dL]_|^~[amp]\d{8}|~[a-z]{3}[AP]\d{8}/.test(jfw._id) ) {
    jfw.file_created.subdir || (jfw.file_created.subdir = dirref);
    if ( pchutrg && ( !pf3stor.dbsdir
    || !pf3stor.dbsdir.some(ar => ar[1] && ar[1].replace(/^\./, "") === dirref) )) {
      vassets = JSON.stringify(ECOTMPLS.assets)
      .replace(/("_id":")8-assets",/, "$1" + dirdot + dirref + "\",\"_rev\":\"\",")
      .replace(/("ts_created":)0(,"ts_updated":)0/, "$1" + tstamp1 + "$2" + tstamp1);
      couchPut({ DBNAME: dbpch.name, vassets: vassets });
    }
  }
  return fileref;
}

window.EC1 = {
espExit() {
  EC1.tabs0Tog(0, 1);
  document.querySelectorAll('#econav0, #ecorender, #ecosrcview, #ecoguides')
  .forEach(e => e.classList.add("is-hidden"));
  document.documentElement.classList.add("has-background-grey-lighter");
  document.querySelector('#ecoprj0').classList.remove("is-hidden");
},
pdbSel() { // also triggered by (pchSel>...>)pdbListGen, pchSel-reset
  let pdbinp = document.querySelector('#ecoprj0 #pdbinp'),
    pdblist = document.querySelector('#ecoprj0 #pdblist'),
    idx = pdblist.selectedIndex;
  // existing pdblist.selectedIndex value is preset by pchSel
  document.querySelectorAll('#ecoprj0 #pdbblurbs>article').forEach(e => e.classList.add("is-hidden"));
  pdbinp.value = "";
  if (idx > 0 && pdblist.options[idx]) {
    //publResets(); // necessary only if pfsListGen is not triggered
    document.querySelector(`#ecoprj0 #pdbblurbs>article:nth-of-type(${1 + idx})`)
    .classList.remove("is-hidden");
    !pdblist.value || (pdbinp.value = pdblist.selectedOptions[0].textContent);
  }
},
pdbInp() {
  let valinp = document.querySelector('#ecoprj0 #pdbinp').value,
    pdblist = document.querySelector('#ecoprj0 #pdblist'),
    pdbtxt = pdblist.value && pdblist.selectedOptions[0].textContent,
    lv = valinp.length,
    lp = pdbtxt.length;
  if (valinp.slice(0, lp + 1) !== pdbtxt + (lp >= lv ? "" : "@")) {
    pdblist.selectedIndex = 0;
    document.querySelectorAll('#ecoprj0 #pdbblurbs>article').forEach(e => e.classList.add("is-hidden"));
  }
},
navTog() { // also triggered by attSel, tabs0Tog, formFoc
  document.querySelector('#navscrmask').classList.toggle("is-hidden");
  document.querySelectorAll('#econav0 .navbar-burger, #econav0>#econavbar')
  .forEach(e => e.classList.toggle("is-active"));
},
prvTog() {
  let prvs = document.querySelectorAll('#ecorender, #ecosrcview, #ecoguides'),
    srcvstyle = document.querySelector('#ecosrcview>style:first-child'),
    srcvpre = document.querySelector('#ecosrcview>.srcview'),
    lnksTog = () => document.querySelectorAll('#ecosrcview>.srcvlink')
      .forEach(eli => eli.disabled = !eli.disabled);
  if (epsets.prvmode && prvs[1].innerHTML && document.querySelector('#econav0 #prvtab.is-active')) {
    document.querySelector('#econav0 #ebrand').classList.toggle("has-background-grey");
    !srcvstyle || ( srcvstyle.textContent = srcvstyle.textContent
      .replace(/(?:\/\/|)(?=color: inherit; }$)/, m => m ? "" : "//") );
    srcvpre.style.width = epsets.prvmode !== 2 || window.innerWidth <= window.outerWidth
    ? null : window.innerWidth + "px";
    prvs.forEach((e, i) => i === 2 || e.classList.toggle("is-hidden"));
    lnksTog();
    window.navigator.userAgentData || prvs[1].classList.contains("is-hidden")
    || window.setTimeout(() => lnksTog() || lnksTog(), 1000);
  } else if (!epsets.prvmode) {
    EC1.tabs0Tog(0);
    document.querySelector('#econav0 #ebrand').classList.toggle("has-background-grey");
    prvs.forEach((e, i) => i === 1 || e.classList.toggle("is-hidden"));
  }
},
attSel(renswap) { // also triggered by dviz-idxlist, attListGen, blobHandl, couchQry, attInp, tabs0Tog, pfsSel, swapExe, fileLFDel
  let attinp = document.querySelector('#econav0 #attinp'),
    attlist = document.querySelector('#econav0 #attlist'),
    idx = attlist.selectedIndex,
    prv2s = document.querySelectorAll('#ecosrcview, #ecoguides'),
    prjdisc = document.querySelector('#ecoesp0 #prjdisc'),
    nbaropen = document.querySelector('#econav0>#econavbar').classList.contains("is-active");
  idx < 1 || !nbaropen || EC1.navTog();
  renswap === 0 || (attinp.value = idx < 1 ? "" : attlist.options[idx].textContent);
  document.querySelector('#ecolinks').innerHTML
  = document.querySelector('#ecoscripts').innerHTML = null;
  reniscurr = false;
  EC2.srvrSel();
  if (idx > 0) {
    couchQry(txdPrep(attlist.value)[0], 3);
  } else if (!document.querySelector('#ecorender #msgwelcome')) {
    // alert: when called by pfsSel, prjdisc is modified before filewkg gets modified
    !platiphn || document.querySelector('head>meta[name=viewport]')
      .setAttribute('content', "width=device-width, maximum-scale=1");
    document.querySelector('#econav0 #ebrand').classList.remove("has-background-grey");
    prv2s[0].innerHTML = prjdisc.innerHTML = tm0disc = null;
    prv2s.forEach(e => e.classList.add("is-hidden"));
    renswap || dataDispl( '<link href="' + a00path + '/-res-css/bulma0.9-minireset.css'
      + '" type="text/css" rel="stylesheet" />\n<section class="section">'
      + '\n<main class="container content">\n  <h4 class="has-text-grey-light is-italic">'
      + 'Preview screen is empty.</h4>\n</main>\n</section>', 5 );
    !document.querySelector('#econav0 #prvtab.is-active')
    || document.querySelector('#ecorender').classList.remove("is-hidden");
  }
},
attInp() {
  let lfkey,
    valatt = document.querySelector('#econav0 #attinp').value.trim(),
    attlist = document.querySelector('#econav0 #attlist'),
    idx = attlist.selectedIndex,
    attkey = idx > -1 && attlist.options[idx].textContent,
    [txdata] = txdPrep(valatt);
  valatt === attkey || (attlist.value = valatt)
  && (idx = attlist.selectedIndex) > 0 || (idx = attlist.selectedIndex = 0);
  EC1.attSel(0);
  if (/^\/\/.*$/.test(valatt) && window.localforage) {
    !(lfkey = valatt.replace(/^\/\//, ""))
    ? localforage.keys((err, keys) => err ? msgHandl(err) : dataDispl(keys, 3))
    : localforage.getItem(lfkey, (err, val) => err ? msgHandl(err) : dataDispl(val, 3));
  } else if (/^\$ *\w*(?:\b[.(].+|)$/.test(valatt)) {
    Promise.resolve(EC2.objQA(valatt.replace(/^\$ */, ""))).then(rslt => dataDispl(rslt, 3));
  } else if (valatt && txdata.url) {
    rdataFetch(txdata).then( rslt =>
      /^image/.test(rslt.type) ? dataDispl(imgWrap(valatt), 6)
      : /^(?:json|text)$/.test(txdata.bmet) ? dataDispl(rslt, 7)
      : rdataFetch({ url: txdata.url, bmet: 'text' }).then(rslt => dataDispl(rslt, 7)) )
    .catch(msgHandl);
  } else if (!idx && /^(?:(?:\.\.\/\.\.|)\/[a-z][0-9_a-z$,+-]*\/|)[\w!.*+~-]+\.html?$/.test(valatt)) {
    couchQry(txdPrep(valatt.replace(/\.html?$/, ""))[0], 4);
  } else if (valatt) {
    couchQry(txdata, 3);
  }
},
tabs0Tog(idx, exit) { // also triggered by dataDispl, dropboxTx, blobHandl, prvTog, tmplLoad, calcGen, diffGen, dvizGen, qconRetrvD, dviz-dboxupd
  let bodcsty = window.getComputedStyle(document.body),
    tabs = document.querySelectorAll('#econav0 .navbar-start>a, #econav0 .navbar-dropdown>a'),
    tab2 = document.querySelector('#econav0 .has-dropdown>a'),
    screens = document.querySelectorAll('#ecorender, #ecoesp0 .escreen'),
    prv2s = document.querySelectorAll('#ecosrcview, #ecoguides'),
    srcvstyle = document.querySelector('#ecosrcview>style:first-child'),
    ecoesp0 = document.querySelector('#ecoesp0'),
    valatt = document.querySelector('#econav0 #attinp').value,
    valpfs = document.querySelector('#econav0 #pfsinp').value,
    nbaropen = document.querySelector('#econav0>#econavbar').classList.contains("is-active"),
    aidx = document.querySelector('#econav0 #attlist').selectedIndex,
    srcvReset = () => {
      document.querySelector('#econav0 #ebrand').classList.remove("has-background-grey");
      !srcvstyle || ( srcvstyle.textContent = srcvstyle.textContent
        .replace(/(?:\/\/|)(?=color: inherit; }$)/, "//") );
      document.querySelectorAll('#ecosrcview>.srcvlink').forEach(e => e.disabled = true);
    };
  !exit || tswapHide();
  exit || idx > 0 || aidx < 1 || screens[0].innerHTML || EC1.attSel();
  exit || idx > 0 || valatt || reniscurr || !filewkg
  || !(filewkg.file_type === "eco-publmgr" || filewkg.filefrags) || webdocGen();
  idx !== 1 || document.querySelector('#ecoesp0 #prjdisc').innerHTML || prjDiscGen();
  if (tabs[idx].classList.contains("is-active")) {
    !exit || srcvReset();
    !nbaropen || EC1.navTog();
  } else {
    srcvReset();
    tabs.forEach(e => e.classList.remove("is-active"));
    prv2s.forEach(e => e.classList.add("is-hidden"));
    screens.forEach(e => e.classList.add("is-hidden"));
    idx < 2 ? tab2.classList.remove("is-active") : tab2.classList.add("is-active");
    !tabs[idx] || tabs[idx].classList.add("is-active");
    idx ? ecoesp0.classList.remove("is-hidden") : ecoesp0.classList.add("is-hidden");
    document.body.style.padding = idx
    && +bodcsty.width.replace(/(?:\.\d+|)px/, "") > window.outerWidth ? 0 : null;
    !screens[idx] || screens[idx].classList.remove("is-hidden");
    idx > 1 || !(valatt || exit) || !nbaropen || EC1.navTog();
    idx < 2 || !valpfs || !nbaropen || EC1.navTog();
  }
},
txtaSel(txtaid, sel) {
  let utxta = document.querySelector((txtaid === "qcontxta" ? '#econav0 #' : '#ecoesp0 #') + txtaid);
  if (txtaid === "swaptxta") {
    utxta.classList.remove("is-warning", "is-success");
    document.querySelector('#ecoesp0 #toolswap .help').innerHTML = "";
  }
  if (sel) {
    utxta.focus();
    utxta.setSelectionRange(0, utxta.textLength);
  } else { //clr
    utxta.value = txtaid !== "jsctxta" ? "" : "> ";
    txtaid !== "jsctxta" || (document.querySelector('#ecoesp0 #jsclist').selectedIndex = 0);
  }
},
qconTog(idx) { // also triggered by ibmConnect
  let qcswi = document.querySelector('#econav0 #qcswi'),
    qcswi1 = document.querySelector('#econav0 #qcswi>.icon:nth-of-type(1)'),
    qcswi2 = document.querySelector('#econav0 #qcswi>.icon:nth-of-type(2)'),
    qcctrls = document.querySelectorAll('#econav0 #qcni2, #econav0 .navbar-dropdown>.txtaprf, #econav0 #qcni3');
  if (!idx) {
    qcswi.classList.remove("open");
    qcswi1.classList.remove("is-hidden");
    qcswi2.classList.add("is-hidden");
    qcctrls.forEach(e => e.classList.add("is-hidden"));
  } else {
    qcswi.classList.add("open");
    qcswi1.classList.add("is-hidden");
    qcswi2.classList.remove("is-hidden");
    qcctrls.forEach(e => e.classList.remove("is-hidden"));
  }
},
pfsSel(resel, cbfnc) { // also triggered by pfsResets, pfsListGen, couchAtt, tmplLoad
  let rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    pfsinp = document.querySelector('#econav0 #pfsinp'),
    pfsflg0 = document.querySelector('#econav0 #pfsflg0'),
    pfsflg1 = document.querySelector('#econav0 #pfsflg1'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    fileref = pfslist.value && pfslist.selectedOptions[0].textContent || "",
    flgapp, flgdir, flgsrc, myx, myct = 2,
    myIncr = myfile => Array.from(pfslist.options).forEach(op => {
      if (myfile.test(op.textContent.replace(/^(?:\.\.\/|)(?:.*\/(?=.)|)/, ""))) {
        myx = +/\d+(?=\.\w{2,4}$| *[*~][^a-z]*$|\/?$)/i.exec(op.textContent);
        myct = myct > myx ? myct : myx + 1;
      }
    });
  !fldfoc || tswapHide();
  pfsflg1.classList.add("is-hidden");
  pfsflg1.classList.remove("has-text-warning", "has-text-danger");
  pfsflg0.classList.remove("has-icons-left");
  document.querySelector('#econav0 #fupdbtnc>button').disabled = false;
  document.querySelector('#econav0 #attinp').value || EC1.attSel();
  if (pfslist.selectedIndex < 1) {
    rawtxta.value = pfsinp.value = null;
    fwResets();
    influxSet(null);
    resel || publResets(); // necessary only for dirlist.value
  } else {
    if (optg === "LOCAL temporary files") {
      pfsflg0.classList.add("has-icons-left");
      pfsflg1.classList.add( /\*$/.test(pfslist.value) ? "has-text-warning"
        : /\*\(\d+\)$/.test(pfslist.value) ? "has-text-danger" : null );
      pfsflg1.classList.remove("is-hidden");
      pfsinp.value = !/\/./.test(fileref) ? fileref : "??? " + pfslist.value;
      !window.localforage
      || localforage.getItem(pfslist.value, (err, val) => {
        if (err) {
          msgHandl(err);
        } else {
          influxSet(false);
          dataDispl(val, resel ? false : null);
        } // catch all
      });
    } else if ((flgapp = optg === "APP templates") || /^TEAM (?:data visuals|templates)$/.test(optg)) {
      fileref = fileref.replace( /^(?:~DVIZ_|~TMP([\dL])_|)(\d\D|)(.*?)(\.\w{2,4}|)$/,
        (m, c1, c2, c3, c4) => c3 + (c4 || (!/^[23]/.test(c2 || c1) ? "" : ".txt")) );
      flgapp = !flgapp ? "" : "my";
      flgdir = !/^[.-]\b|^(?:~TMP[0L]_|)7\D|~TMP7_|assets/.test(pfslist.value) ? "" : "\\.?";
      (flgsrc = !/^(?:~TMP[0L]_|)2\D|~TMP2_|srcdoc/.test(pfslist.value) ? "" : "-s") && (myct = 1);
      myIncr(new RegExp("^" + flgdir + flgapp + fileref.replace(/\.\w{2,4}$|$/, flgsrc), "i"));
      pfsinp.value = flgapp + fileref.replace( /(?=\.\w{2,4}$|$)/,
        flgsrc + (myct < 10 ? "0" + myct : myct) );
      flgapp ? dataDispl(JSON.stringify(ECOTMPLS[pfslist.value]), 1)
      : couchQry(txdPrep(pfslist.value)[0], 1);
      window.setTimeout(() => {
        pfslist.blur();
        influxSet(1);
      }, 1);
    } else {
      pfsinp.value = !/\/./.test(fileref) ? fileref : "??? " + pfslist.value;
      couchQry(txdPrep(pfslist.value)[0], resel ? false : null, cbfnc);
      influxSet(2);
    }
  }
},
pfsInp(noflux, btnsdis) { // also triggered by jdePtyGen, dataDispl, metaChg, swapExe, fileLFDel, dviz-dboxupd
  let dirref,
    rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    fileref = document.querySelector('#econav0 #pfsinp').value.replace(/^\u2514 /, "").trim(),
    pfsflg0 = document.querySelector('#econav0 #pfsflg0'),
    pfsflg1 = document.querySelector('#econav0 #pfsflg1'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    pfsref = optg === "LOCAL temporary files" ? pfslist.value
    : optg && pfslist.selectedOptions[0].textContent.replace(/^(?:\.\.\/|)(?:.*\/(?=.)|)/, ""),
    btnfupd = document.querySelector('#econav0 #fupdbtnc>button'),
    pchbtn = document.querySelector('#ecoesp0 #pchbtn'),
    sdirinp = document.querySelector('#ecoesp0 #sdirinp'),
    pfidinp = document.querySelector('#ecoesp0 #pfidinp');
  if (fileref.replace(/^(?:\.\.\/|)(?:.*\/(?=.)|)/, "") !== pfsref) { // allow file creation/duplication
    pfsflg1.classList.add("is-hidden");
    pfsflg1.classList.remove("has-text-warning", "has-text-danger");
    pfsflg0.classList.remove("has-icons-left");
    pfslist.selectedIndex = 0;
  }
  if (filewkg) {
    dirref = fileref.replace(/^(?:\.\.\/|)\.?(-?\w.*)\/.+|.+/, "$1");
    sdirinp.disabled || indrChg( sdirinp, ( !filewkg.file_updated ? filewkg.loc_subdir
        : filewkg.file_updated.subdir ) || "", dirref || sdirinp.value );
    pfidinp.value = /^mycontact/.test(fileref) ? filewkg._id || ""
      : fileref.replace(/\/$|^(?:\.\.\/|)(?:.*\/(?=.)|)/g, "");
    filewkg.file_type !== "eco-assets" || (pfidinp.value = pfidinp.value.replace(/^(?=\w)/, "."));
    indrChg(pfidinp, filewkg._id || "", pfidinp.value);
  }
  if (noflux) {
    influxSet(2);
    pchbtn.disabled = btnfupd.disabled = btnsdis;
  } else if (!fileref && !filewkg && !rawtxta.value) {
    influxSet(null);
  } else if (!fileref) {
    btnfupd.disabled = true;
  } else {
    pfslist.selectedIndex || influxSet(true);
    pchbtn.disabled = btnfupd.disabled = false;
  }
},
pf2Sel(espr) { // also triggered by pfsResets
  let pf2inp = document.querySelector('#econav0 #pf2inp'),
    pf2flg0 = document.querySelector('#econav0 #pf2flg0'),
    pf2flg1 = document.querySelector('#econav0 #pf2flg1'),
    pf2list = document.querySelector('#econav0 #pf2list'),
    optg = pf2list.value && pf2list.selectedOptions[0].parentElement.label,
    fileref = pf2list.value && pf2list.selectedOptions[0].textContent || "";
  pf2flg1.classList.add("is-hidden");
  pf2flg1.classList.remove("has-text-warning", "has-text-danger");
  pf2flg0.classList.remove("has-icons-left");
  if (pf2list.selectedIndex > 0) {
    if (optg === "LOCAL temporary files") {
      pf2flg0.classList.add("has-icons-left");
      pf2flg1.classList.add( /\*$/.test(pf2list.value) ? "has-text-warning"
        : /\*\(\d+\)$/.test(pf2list.value) ? "has-text-danger" : null );
      pf2flg1.classList.remove("is-hidden");
      pf2inp.value = !/\/./.test(fileref) ? fileref : "??? " + pf2list.value;
      !window.localforage
      || localforage.getItem( pf2list.value,
        (err, val) => err ? msgHandl(err) : dataDispl(val || {}, 2) );
    } else if (optg === "APP templates") {
      pf2inp.value = fileref;
      dataDispl(JSON.stringify(ECOTMPLS[pf2list.value]), 2);
    } else if (/^(?:DB|TEAM) templates$/.test(optg)) {
      pf2inp.value = fileref;
      couchQry(txdPrep(pf2list.value)[0], 2);
    } else {
      pf2inp.value = !/\/./.test(fileref) ? fileref : "??? " + pf2list.value;
      couchQry(txdPrep(pf2list.value)[0], 2);
    }
  } else {
    pf2inp.value = file2nd = null;
    espr || jdePtyGen();
  }
},
pf2Tog() { // also triggered by jdePtyGen
  let pf2inp = document.querySelector('#econav0 #pf2inp'),
    pf2togswi = document.querySelector('#econav0 #pf2togswi'),
    jdepty = document.querySelector('#ecoesp0 #jdepty'),
    j2ptys = document.querySelectorAll('#ecoesp0 .j2ptys');
  if (pf2togswi.checked) {
    pf2inp.disabled = false;
    jdepty.classList.add("pf2on");
    fwinflux ? jdepty.classList.remove("ptydiffs") : jdepty.classList.add("ptydiffs");
    j2ptys.forEach(e => e.classList.remove("is-hidden"));
  } else {
    pf2inp.disabled = true;
    jdepty.classList.remove("pf2on", "ptydiffs");
    j2ptys.forEach(e => e.classList.add("is-hidden"));
  }
},
formFoc(fldid, nbar) { // fldid == null : select list
  let econav0 = document.querySelector('#econav0');
  if (!nbar) {
    !document.querySelector('#econav0>#econavbar').classList.contains("is-active") || EC1.navTog();
    fldid == null || window.innerHeight > 684 || econav0.classList.add("mtup2");
  } else if (window.innerWidth < 685) {
    econav0.classList.remove("is-fixed-top");
    econav0.classList.add("is-absolute", "mtup2");
    window.scrollTo(0, 260);
  } else if (window.innerWidth < 769 || window.innerHeight < 433) {
    econav0.classList.add("mtup2");
  }
  if (fldid) {
    !fldfoc || tswapHide();
    document.querySelector('#ecoesp0 ' + fldid).classList.remove("is-hidden");
  }
},
formBlr(nbar) { // also triggered by jdeDftUpd, jdePtyUpd, jdeRawUpd
  let econav0 = document.querySelector('#econav0'),
    ywin = window.scrollY;
  if (nbar && window.innerWidth < 685) {
    econav0.classList.remove("is-absolute");
    econav0.classList.add("is-fixed-top");
    document.querySelector('#econav0>#econavbar').scrollTo(0, ywin);
  }
  econav0.classList.remove("mtup2");
},
srcSel(idxa, add1) { // also triggered by dataDispl, ptySel, jdePtyUpd, swapExe
  let nopt, ntxta,
    srclist = document.querySelector('#ecoesp0 #srclist'),
    idx = idxa === 0 ? 0 : idxa || srclist.selectedIndex,
    srcpanes = document.querySelectorAll('#ecoesp0 #srcpanes>textarea');
  !fldfoc || tswapHide();
  if (add1 || srclist.length === 1 + idx) {
    nopt = document.createElement("option");
    nopt.text = "SOURCE" + (1 + idx);
    srclist.add(nopt, srclist.options[idx]);
    ntxta = document.createElement("textarea");
    ntxta.className = "textarea";
    ntxta.rows = "23";
    ntxta.placeholder = "SOURCE pane #" + (1 + idx) + ".";
    ntxta.setAttribute('onfocus', "EC1.formFoc('#dftbtnc0')");
    ntxta.setAttribute('onblur', "EC1.jdeDftUpd()");
    document.querySelector('#ecoesp0 #srcpanes').appendChild(ntxta);
    filewkg.filefrags.splice(idx, 1, {
      idtxt:      "SOURCE" + (1 + idx),
      labeltxt:   "SOURCE" + (1 + idx),
      titletxt:   "SOURCE pane #" + (1 + idx) + ".",
      contenttxt: ""
    });
    filewkg.parseconfigs.scriptsincl.forEach(ob => ob.applytofrag.push(ob.applytofrag[idx - 1]));
    influxSet(true);
    document.querySelector('#ecoesp0 #rawtxta').value = JSON.stringify(filewkg, null, 2);
    jdePtyGen();
    window.setTimeout(() => {
      srclist.blur();
      srclist.selectedIndex = idx;
      document.querySelector('#ecoesp0 #ptylista11').selectedIndex = idx;
      EC1.ptySel(11);
    }, 1);
  }
  srclist.selectedIndex = idx; // in case !add1
  srcpanes.forEach(e => e.classList.add("is-hidden"));
  srcpanes[idx] && srcpanes[idx].classList.remove("is-hidden");
},
ptySel(rowi) { // also triggered by jdePtyGen, dataDispl, srcSel, ptySel, jdeDftUpd, jdePtyUpd
  let plax, plbx, p2vx, pksub, pvfw,
    idxa = (plax = document.querySelector('#ecoesp0 #ptylista' + rowi)).selectedIndex,
    idxb = (plbx = document.querySelector('#ecoesp0 #ptylistb' + rowi)) && plbx.selectedIndex,
    pl2ax = document.querySelector('#ecoesp0 #ptylist2a' + rowi),
    pl2bx = document.querySelector('#ecoesp0 #ptylist2b' + rowi),
    rawtxta = document.querySelector('#ecoesp0 #rawtxta');
  !fldfoc || tswapHide();
  pl2ax && (pl2ax.selectedIndex = idxa);
  pl2bx && (pl2bx.selectedIndex = idxb);
  if ( filewkg.file_type === "eco-publmgr" && [7, 8, 10].some(e => e === rowi)
  && plax.length === 1 + idxa ) {
    pksub = { 7: "scriptsconstr", 8: "scriptsincl", 10: "linksincl" }[rowi];
    pvfw = filewkg.parseconfigs[pksub];
    pvfw.push( rowi !== 8
    ? jsonParse(JSON.stringify(ECOTMPLS.publmgr.parseconfigs[pksub][0]))
    : { fncname: "", applytofrag: Array.from(pvfw[0].applytofrag).map(e => true) } );
    influxSet(true);
    rawtxta.value = JSON.stringify(filewkg, null, 2);
    jdePtyGen();
    document.querySelector('#ecoesp0 #ptylista' + rowi).selectedIndex = idxa;
    return EC1.ptySel(rowi);
  } else if (filewkg.file_type === "eco-publmgr" && rowi === 11 && plax.length === 1 + idxa) {
    return EC1.srcSel(idxa, 1);
  } else if ( /^(?:eco-|)(?:contact|phone)$/i.test(filewkg.file_type)
  && rowi === 12 && plax.length === 1 + idxa ) {
    filewkg.locations.push({
      label: "work",
      street: "",
      city: "",
      state: "",
      zip: ""
    });
    influxSet(true);
    rawtxta.value = JSON.stringify(filewkg, null, 2);
    jdePtyGen();
    document.querySelector('#ecoesp0 #ptylista' + rowi).selectedIndex = idxa;
    return EC1.ptySel(rowi);
  }
  document.querySelectorAll(`#ecoesp0 #ptyvals${rowi} span, #ecoesp0 #pt2vals${rowi} span, #ecoesp0 #ptyvals${rowi}>div, #ecoesp0 #pt2vals${rowi}>div`)
    .forEach(e => e.classList.add("is-hidden"));
  if (!idxb) {
    document.querySelector(`#ecoesp0 #ptyvals${rowi}>span:nth-of-type(${1 + idxa})`)
      .classList.remove("is-hidden");
    pl2ax && (p2vx = document.querySelector(`#ecoesp0 #pt2vals${rowi}>span:nth-of-type(${1 + idxa})`))
      && p2vx.classList.remove("is-hidden");
  } else {
    document.querySelector(`#ecoesp0 #ptyvals${rowi}>div:nth-of-type(${idxb})`)
      .classList.remove("is-hidden");
    document.querySelector(`#ecoesp0 #ptyvals${rowi}>div:nth-of-type(${idxb})>span:nth-of-type(${1 + idxa})`)
      .classList.remove("is-hidden");
    pl2bx && (p2vx = document.querySelector(`#ecoesp0 #pt2vals${rowi}>div:nth-of-type(${idxb})`))
      && p2vx.classList.remove("is-hidden");
    pl2bx && (p2vx = document.querySelector(`#ecoesp0 #pt2vals${rowi}>div:nth-of-type(${idxb})>span:nth-of-type(${1 + idxa})`))
      && p2vx.classList.remove("is-hidden");
  }
},
jdeDftUpd(ptyk, dnbr, inp) { // also triggered by swapExe
  let srclist = document.querySelector('#ecoesp0 #srclist'),
    idx = srclist && srclist.selectedIndex,
    ptyvfw = ptyk ? filewkg[ptyk] : filewkg.filefrags && filewkg.filefrags[idx].contenttxt,
    fldmfd = !dnbr ? document.querySelector('#ecoesp0 #jdedft textarea:not(.is-hidden)')
      : document.querySelector('#ecoesp0 #jdedft>div:nth-of-type(' + dnbr + ')' + (inp ? ' input' : '>textarea'));
  fldfoc = !epsets.swapchks[0] ? null : fldmfd;
  !epsets.swapchks[0] || (document.querySelector('#ecoesp0 #prsebtn').disabled = !fldfoc);
  EC1.formBlr();
  if ( fldmfd && ptyvfw !== undefined && (ptyvfw || "").toString()
  !== (ptyk !== "texthl" ? fldmfd.value : fldmfd.value.trim().split("\n").toString()) ) {
    ptyk ? filewkg[ptyk] = ( !Array.isArray(ptyvfw) ? fldmfd.value.trim()
      : ptyk === "texthl" && /^eco-anno$/.test(filewkg.file_type) ? fldmfd.value.trim().split("\n")
      : fldmfd.value.trim().replace(/([^\s,;'"]+|(['"]).+?\2)[\s,;]*/g, "$1\n").trim().split("\n") )
    : filewkg.filefrags[idx].contenttxt = fldmfd.value;
    influxSet(true);
    document.querySelector('#ecoesp0 #rawtxta').value = JSON.stringify(filewkg, null, 2);
    jdePtyGen();
    ptyk || filewkg.file_type !== "eco-publmgr"
    || !(document.querySelector('#ecoesp0 #ptylista11').selectedIndex = idx) || EC1.ptySel(11);
  }
},
jdePtyUpd(rowslr, ptyk, plak, plai, plbgi) {
  let elz, jobj, pbpath, pbchild, pbparent, plax, ptyAdd1, pksub, pvfw,
    pksb = [],
    fldmfd = document.querySelector( typeof rowslr !== 'number' ? rowslr
      : !plbgi ? `#ecoesp0 #ptyvals${rowslr}>span:nth-of-type(${1 + plai})>textarea`
      : `#ecoesp0 #ptyvals${rowslr}>div:nth-of-type(${plbgi})>span:nth-of-type(${1 + plai})>textarea` ),
    valfldm2 = fldmfd.value.trim(),
    typpmgr = filewkg.file_type === "eco-publmgr",
    boolrpr = e => e === "null" ? null : e === "false" ? false : e === "true" ? true : e,
    papath = (ptyk + ( !plak ? "" : ("." + plak).replace(/:.*/, "") ))
      .split(/\u200b?\.(?!(?:giff?|html?|jpe?g|json|md|m?js|png|s?css|te?xt)$)/),
    pachild = papath.pop(),
    paparent = papath.reduce((ob, k) => ob[k], filewkg),
    rawtxta = document.querySelector('#ecoesp0 #rawtxta');
  fldfoc = !epsets.swapchks[0] ? null : fldmfd;
  !epsets.swapchks[0] || (document.querySelector('#ecoesp0 #prsebtn').disabled = !fldfoc);
  EC1.formBlr();
  if ( (typpmgr || /^eco-(?:prjid|srcdoc)$/.test(filewkg.file_type)) && /^[34]$/.test(rowslr) && plai === 2
  || (/^(?:eco-|)(?:assets|contact|phone|scrap)$/.test(filewkg.file_type) && /s[34]>/.test(rowslr))
  || (/^eco-(?:anno|memo|post)$/.test(filewkg.file_type) && rowslr === 3 && plai === 2) ) {
    /^\d+$/.test(fldmfd.value.trim()) && (valfldm2 = +fldmfd.value.trim());
  } else if (typpmgr && ((rowslr === 6 && plai === 2) || (rowslr === 9 && /^[13]$/.test(plai)))) {
    valfldm2 = boolrpr(valfldm2);
  }
  if (typpmgr && [7, 8, 10, 11].some(e => e === rowslr)) {
    plax = document.querySelector('#ecoesp0 #ptylista' + rowslr);
    pksb = rowslr === 7 ? ["usedescription", "htmlscriptload", "features", "deftxt"]
      : rowslr === 11 ? ["titletxt", "contenttxt"] : [];
  } else if (/^(?:eco-|)(?:contact|phone)$/.test(filewkg.file_type) && rowslr === 12) {
    plax = document.querySelector('#ecoesp0 #ptylista' + rowslr);
  }
  if ( !plbgi && fldmfd && !/input$/i.test(rowslr) && paparent[pachild] !== null
  // !plbgi applys only to eco file types
  && (typeof paparent[pachild] === 'object' || !paparent[pachild] && pachild === "options")
  && (fldmfd.value || !plax || plax.length !== 2 + plai)
  && ( !(jobj = jsonParse(fldmfd.value))
  || Array.isArray(paparent[pachild]) && !Array.isArray(jobj) )) {
    return window.confirm("Invalid JSON syntax. Restore previous?")
    ? fldmfd.value = JSON.stringify(paparent[pachild], null, 2)
    : window.setTimeout(() => fldmfd.focus(), 1);
  }
  if (typpmgr && [7, 8, 10].some(e => e === rowslr)) {
    if (plax.length === 2 + plai) {
      pksub = { 7: "scriptsconstr", 8: "scriptsincl", 10: "linksincl" }[rowslr];
      pvfw = filewkg.parseconfigs[pksub];
      ptyAdd1 = () => pvfw.push( rowslr !== 8
        ? jsonParse(JSON.stringify(ECOTMPLS.publmgr.parseconfigs[pksub][0]))
        : { fncname: "", applytofrag: Array.from(pvfw[0].applytofrag).map(e => true) } );
    } else if (jobj && ((elz = jobj[jobj.length - 1] || "").fncname || elz.filepath)) {
      jobj.push( rowslr !== 8
      ? jsonParse(JSON.stringify(ECOTMPLS.publmgr.parseconfigs.linksincl[0]))
      : { fncname: "", applytofrag: Array.from(jobj[0].applytofrag).map(e => true) } );
    }
  }
  if (plbgi) {
    pbpath = (pachild + "." + pksb[plbgi - 1]).split(/\./);
    pbchild = pbpath.pop();
    pbparent = pbpath.reduce((ob, k) => ob[k], paparent);
  }
  if (plbgi && fldmfd && pbparent && fldmfd.value !== pbparent[pbchild]) {
    pbparent[pbchild] = fldmfd.value;
    !pksub || ptyAdd1();
    influxSet(true);
    rawtxta.value = JSON.stringify(filewkg, null, 2);
    document.querySelector(`#ecoesp0 #ptyvals${rowslr}>span:nth-of-type(${1 + plai})>textarea`)
    .value = JSON.stringify(paparent[pachild], null, 2);
    jdePtyGen(rowslr, plai, plbgi);
    jdeDftGen();
    !pksb.length || rowslr !== 11 || EC1.srcSel(plai);
  } else if (!plbgi && fldmfd && !fldmfd.value && plax && plax.length === 2 + plai) {
    if (window.confirm("Remove last element of " + papath.join(".") + "?")) {
      paparent.pop();
      influxSet(true);
      rawtxta.value = JSON.stringify(filewkg, null, 2);
      jdePtyGen();
      document.querySelector('#ecoesp0 #ptylista' + rowslr).selectedIndex = (plai - 1);
      EC1.ptySel(rowslr);
      if (pksb.length && rowslr === 11) {
        jdeDftGen();
        EC1.srcSel(plai - 1);
      }
    } else {
      fldmfd.value = JSON.stringify(paparent[pachild], null, 2);
    }
  } else if ( !plbgi && fldmfd && paparent && typeof paparent === 'object'
  && ( paparent[pachild] === null && valfldm2 !== "null"
  || paparent[pachild] != null && fldmfd.value !== ( !jobj //paparent[pachild] == null ? "" :
  ? paparent[pachild].toString() : JSON.stringify(paparent[pachild], null, 2) ))) {
    paparent[pachild] = jobj || ( !Array.isArray(paparent[pachild]) ? valfldm2
      : valfldm2.replace(/([^\s,;'"]+|(['"]).+?\2)[\s,;]*/g, "$1\n").trim().split("\n")
        .map(e => !typpmgr || rowslr !== 6 || plai !== 4 ? e : boolrpr(e)) );
    !pksub || ptyAdd1();
    influxSet(true);
    rawtxta.value = JSON.stringify(filewkg, null, 2);
    jdePtyGen(rowslr, plai, plbgi);
    jdeDftGen();
    !pksb.length || rowslr !== 11 || EC1.srcSel(plai);
  }
},
jdeRawUpd(noflux) { // also triggered by swapExe, dviz-dboxupd
  let jdata,
    rawtxta = document.querySelector('#ecoesp0 #rawtxta');
  fldfoc = !epsets.swapchks[0] ? null : fldmfd;
  !epsets.swapchks[0] || (document.querySelector('#ecoesp0 #prsebtn').disabled = !fldfoc);
  EC1.formBlr();
  jdeRawAlert();
  if (!filewkg) {
    influxSet(true);
  } else if (!(jdata = jsonParse(rawtxta.value))) {
    if (window.confirm("Invalid JSON syntax. Restore previous?")) {
      rawtxta.value = JSON.stringify(filewkg, null, 2);
    } else {
      fwResets(1);
      window.setTimeout(() => rawtxta.focus(), 1);
    }
  } else if (noflux || JSON.stringify(jdata) !== JSON.stringify(filewkg)) {
    filewkg = jdata;
    influxSet(noflux ? 2 : true);
    jdeDftGen();
    jdePtyGen();
  }
},
tabs5Tog(idx) { // also triggered by ibmConnect
  let publtabs = document.querySelectorAll('#ecoesp0 #publtabs>ul>li'),
    publas = document.querySelectorAll('#ecoesp0 #publtabs>ul>li>a'),
    ptabactv = document.querySelector('#ecoesp0 #publtabs>ul>li.is-active'),
    ptabaanc = document.querySelector('#ecoesp0 #publtabs>ul>li.is-active>a'),
    publpnls = ["#publpre", "#publmet", "#publcmt"];
  !ptabaanc || ptabaanc.classList.add("has-text-grey-light");
  !ptabactv || ptabactv.classList.remove("is-active");
  !publtabs[idx] || publtabs[idx].classList.add("is-active");
  !publas[idx] || publas[idx].classList.remove("has-text-grey-light");
  publpnls.forEach(e => document.querySelector('#ecoesp0 ' + e).classList.add("is-hidden"));
  !publpnls[idx]
  || document.querySelector('#ecoesp0 ' + publpnls[idx]).classList.remove("is-hidden");
},
metaChg(evt, pty) {
  if (!evt) {
    let pfsinp = document.querySelector('#econav0 #pfsinp'),
      sdirinp = document.querySelector('#ecoesp0 #sdirinp'),
      pfidinp = document.querySelector('#ecoesp0 #pfidinp');
    pfsinp.value = sdirinp.value + (!sdirinp.value ? "" : "/")
    + pfidinp.value.replace(/\/$|^\.(?=\w)/g, "") + (!/^[.-]\w/.test(pfidinp.value) ? "" : "/");
    EC1.pfsInp();
  } else {
    ["is-warning", "is-success"].forEach(e => evt.target.classList.remove(e));
    evt.target.classList.add( evt.target.value !== ( !pty
      ? "" + filewkg.contributors : pty !== "v" ? filewkg.file_updated[pty]
      : filewkg.file_updated.version.replace(/\d+$/, m => ++m) ) ? "is-warning" : "is-success" );
  }
},
tabs6Tog(idx) { // also triggered by ibmConnect
  let tooltabs = document.querySelectorAll('#ecoesp0 #tooltabs>ul>li'),
    toolas = document.querySelectorAll('#ecoesp0 #tooltabs>ul>li>a'),
    ttabactv = document.querySelector('#ecoesp0 #tooltabs>ul>li.is-active'),
    ttabaanc = document.querySelector('#ecoesp0 #tooltabs>ul>li.is-active>a'),
    toolpnls = ["#tooltypes", "#toolswap", "#tooljscon", "#toolapp"];
  !ttabaanc || ttabaanc.classList.add("has-text-grey-light");
  !ttabactv || ttabactv.classList.remove("is-active");
  !tooltabs[idx] || tooltabs[idx].classList.add("is-active");
  !toolas[idx] || toolas[idx].classList.remove("has-text-grey-light");
  toolpnls.forEach(e => document.querySelector('#ecoesp0 ' + e).classList.add("is-hidden"));
  !toolpnls[idx]
  || document.querySelector('#ecoesp0 ' + toolpnls[idx]).classList.remove("is-hidden");
},
swplTog() { // also triggered by xsrcTog, ibmConnect
  let ebran1 = document.querySelector('#econav0 #ebran1'),
    ecoesp0 = document.querySelector('#ecoesp0'),
    swaplist = document.querySelector('#ecoesp0 #swaplist'),
    swpltogswi = document.querySelector('#ecoesp0 #swpltogswi'),
    wraptogswi = document.querySelector('#ecoesp0 #wraptogswi'),
    xchkson = epsets.appchks.slice(22, 29).some(e => e);
  (epsets.swapchks[0] === swpltogswi.checked && epsets.swapchks[1] === wraptogswi.checked)
  || (epsets.swapchks = [swpltogswi.checked, wraptogswi.checked])
  && (localStorage["_ecopresets"] = JSON.stringify(epsets));
  if (!swpltogswi.checked) {
    !fldfoc || tswapHide();
    ecoesp0.classList.remove("fldswaps")
    swaplist.disabled = false;
    ebran1.classList.remove("has-text-danger", "has-text-link");
    ebran1.classList.add(eb1dflt);
    !xchkson || xsrcTog();
  } else {
    ecoesp0.classList.add("fldswaps")
    swaplist.selectedIndex = 0;
    swaplist.disabled = true;
    EC1.swplSel();
    if (!xchkson) {
      ebran1.classList.remove("has-text-danger", eb1dflt);
      ebran1.classList.add("has-text-link");
    }
  }
},
swplSel() { // also triggered by swplTog
  let swaplist = document.querySelector('#ecoesp0 #swaplist'),
    swapbtn = document.querySelector('#ecoesp0 #swapbtn'),
    prsebtn = document.querySelector('#ecoesp0 #prsebtn');
  [swapbtn, prsebtn].forEach(btn => btn.disabled = !swaplist.selectedIndex);
},
swapExe(parse) {
  let ff2pty, ff2val, lrpl, rpl2,
    attlist = document.querySelector('#econav0 #attlist'),
    fldstxta = document.querySelectorAll('#ecoesp0 #jdedft textarea'),
    sepainp = document.querySelector('#ecoesp0 #sepainp'),
    rtrminp = document.querySelector('#ecoesp0 #rtrminp'),
    replhelp = document.querySelector('#ecoesp0 #toolswap .help'),
    swaptxta = document.querySelector('#ecoesp0 #swaptxta'),
    swaplist = document.querySelector('#ecoesp0 #swaplist'),
    idx = swaplist.selectedIndex,
    sliste = idx > 0 && idx < 3 && document.querySelector(swaplist.value),
    fldfc2 = fldfoc || sliste || fldstxta && fldstxta[idx - 3],
    hlpPol = y => [swaptxta, replhelp].forEach(e => e.classList.add(!y ? "is-warning" : "is-success"));
  if (!fldfc2) { return; }
  [swaptxta, replhelp].forEach(e => e.classList.remove("is-warning", "is-success"));
  replhelp.innerHTML = "";
  ff2pty = fldfc2.id === "ecorender" ? "innerHTML" : "value";
  ff2val = fldfc2[ff2pty];
  if (parse) {
    try {
      !/^(?:\w+|\(.*?\)) *=> *\S|^".*"$|^\b[\w.]+$/.test(rtrminp.value.trim())
      || (rpl2 = window.eval(rtrminp.value));
    } catch (e) {
      replhelp.innerHTML = e;
      swaptxta.value = "";
      return hlpPol();
    }
    if (/^\/.+\/[im]*g[im]*$/.test(sepainp.value)) {
      replhelp.innerHTML = (lrpl = (ff2val.trim().match(eval(sepainp.value)) || []).length)
        + " replacements have been made.";
      hlpPol(lrpl);
    }
    return swaptxta.value = ff2val.trim().replace( !/^\/.+\/[gim]*$/.test(sepainp.value)
        ? sepainp.value : eval(sepainp.value),
      rpl2 || window.eval('"' + rtrminp.value.replace(/(?=")/g, "\\") + '"') );
  }
  fldfc2[ff2pty] = swaptxta.value;
  swaptxta.value = ff2val;
  if (idx === 1) { // fldfc2.id === "ecorender"
    attlist.value = "";
    EC1.attSel(1);
  } else if (idx > 2) { // fldfc2.id !== "rawtxta"
    !(filewkg || "").filefrags || EC1.srcSel(idx - 3);
    EC1.jdeDftUpd(swaplist.value);
    swaplist.selectedIndex = idx;
  } else if (idx === 2 || fldfoc && fldfoc.id === "rawtxta") {
    if (!filewkg || !jsonParse(rawtxta.value)) {
      fwResets(1);
      document.querySelector('#econav0 #pfslist').selectedIndex = 0;
      EC1.pfsInp();
      idx > 2 || (swaplist.selectedIndex = idx);
    } else {
      EC1.jdeRawUpd();
    }
  } else if (fldfoc) {
    fldfc2.onblur();
  }
},
wrapTog() { // also triggered by ibmConnect
  let swpltogswi = document.querySelector('#ecoesp0 #swpltogswi'),
    wraptogswi = document.querySelector('#ecoesp0 #wraptogswi'),
    swaptxta = document.querySelector('#ecoesp0 #swaptxta');
  epsets.swapchks[0] === swpltogswi.checked
  && epsets.swapchks[1] === wraptogswi.checked
  || (epsets.swapchks = [swpltogswi.checked, wraptogswi.checked])
  && (localStorage["_ecopresets"] = JSON.stringify(epsets));
  !wraptogswi.checked ? swaptxta.classList.add("wrapoff") : swaptxta.classList.remove("wrapoff");
},
epsUpd(swi) {
  let asels = document.querySelectorAll('#ecoesp0 #toolapp select'),
    achks = document.querySelectorAll('#ecoesp0 #toolapp input[type=checkbox]');
  swi || document.querySelectorAll('#ecoesp0 #toolapp .rsetbtn').forEach(btn => btn.disabled = false);
  swi !== 1 || (epsets.dbdflt = asels[0].selectedOptions[0].value);
  swi !== 2 || (epsets.prvmode = asels[1].selectedOptions[0].index);
  swi !== 2 || emodeSet();
  swi !== 3 || (epsets.hlstyle = asels[2].selectedOptions[0].value);
  swi !== 4 || (epsets.tabsdflt[0] = asels[3].selectedOptions[0].index);
  swi !== 5 || (epsets.tabsdflt[1] = asels[4].selectedOptions[0].index);
  swi > 0 || (epsets.appchks = Array.from(achks).map(e => e.checked));
  swi !== -1 || xsrcTog();
  localStorage["_ecopresets"] = JSON.stringify(epsets);
},
logtTog() {
  let stoempswi = document.querySelector('#ecoesp0 #stoempswi'),
    dbpurgswi = document.querySelector('#ecoesp0 #dbpurgswi'),
    logtbtn = document.querySelector('#ecoesp0 #logtbtn');
  logtbtn.disabled = idtoks || stoempswi.checked || dbpurgswi.checked ? false : true;
}
};

window.EC2 = {
ibmConnect() {
  let dbpc1, dbpc2, pcloud, ridx, rmtdn, tm2txd, userinfo,
    zindr = 0,
    ecoprj0 = document.querySelector('#ecoprj0'),
    valinp = ( document.querySelector('#ecoprj0 #pdblist').value
      || document.querySelector('#ecoprj0 #pdbinp').value ).trim().match(/^(.*?)(?:(?:@|a\d\d_)(.*)|)$/),
    blrbpik = document.querySelector('#ecoprj0 #pdbblurbs>article:not(.is-hidden)'),
    blrbdat = blrbpik && blrbpik.innerHTML
      .match(/<img src="(.*?)"[^]+?-bold">(.*?)<\/span>[^]+?-italic">(.*?)<\/span>[^]+?-grey(?:-light|)">(.*?)\s*<\/p>/),
    valcon = document.querySelector('#econav0 #qcontxta').value.trim(),
    msgwelcome = document.querySelector('#ecorender #msgwelcome'),
    asels = document.querySelectorAll('#ecoesp0 #toolapp select'),
    achks = document.querySelectorAll('#ecoesp0 #toolapp input[type=checkbox]'),
    sethlps = document.querySelectorAll('#ecoesp0 #toolapp .help'),
    logtbtn = document.querySelector('#ecoesp0 #logtbtn'),
    appidtoks = document.querySelector('#ecoesp0 #appidtoks'),
    appuinfo = document.querySelector('#ecoesp0 #appuinfo'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    dbteam = ( Array.from(pchlist.options).find( op => epsets.teamid
      ? op.value === "a00_" + epsets.teamid : /^a\d\d_\w/.test(op.value) ) || {} ).value || "",
    tm0txd = caccts.find(ob => ob.DBNAME === (dbteam || "a00_" + epsets.teamid)) || {},
    pchpdbs = Array.from(pchlist.options).map(op => op.value).filter(e => !/^a\d\d/.test(e)),
    fbktxd = caccts[epsets.dbdflt] || caccts.find(ob => ob.DBNAME === epsets.dbdflt)
      || caccts.find(ob => pchpdbs.some(e => e === ob.DBNAME)) || {},
    reqipch = valinp[1] && Array.from(pchlist.options).some(op => op.value === valinp[1])
      || !valinp[1] && valinp[2]
      && Array.from(pchlist.options).some(op => op.value.replace(/^a\d\d_/, "") === valinp[2]),
    reqtxd = reqipch
      && txCrdtlz(caccts.find(ob => ob.DBNAME === (valinp[1] || "a00_" + valinp[2]))) || {},
    //tm0ipch = valinp[2] // todo: possibly identify 2ndary team dbs
      //&& Array.from(pchlist.options).some(op => op.value === "a00_" + valinp[2])
      //&& caccts.some(ob => ob.DBNAME === "a00_" + valinp[2] && ob.DBORIG && ob.USRNAM),
    tmidnew = ( Array.from(pchlist.options).map(op => op.value).filter(e => /^a\d\d_\w/.test(e))
      .sort().pop() || "" ).replace(/^a(\d\d)_.+$/, "$1"),
    tmidpre = valinp[2] === dbteam.replace(/^a\d\d_/, "")
      || !tmidnew ? "a00_" : "a" + (+tmidnew < 9 ? "0" : "") + ++tmidnew + "_",
    tstamp1 = Date.now(),
    dbOpen = (rmtdn = {}) => {
      rdataFetch( Object.assign( Object.assign({}, ECOXREQD), {
        prms: {
          dbname: rmtdn.DBNAME,
          clact:  "dbadd"
        },
        hdrs: { "Authorization": "Bearer " + idtoks.accessToken } }), 2 )
      .then(resp => {
        msgHandl(resp);
        rmtListGen();
        couchSync({
          DBNAME: rmtdn.DBNAME,
          OPTS:   { batches_limit: 1, batch_size: 1 },
          RMTFR:  true
        });
      }).catch(msgHandl);
    },
    rmtDSet = (dbname, rsltk = {}) => {
      rmtdn = { // assumes app is served/hosted by same CouchDB repository that stores file data?
        USRNAM: !rsltk.key ? undefined : rsltk.key,
        PSSWRD: !rsltk.pwd ? undefined : rsltk.pwd,
        DBORIG: a00orig,
        DBPUBL: !/^.*\//.test(dbname) ? undefined : ["_reader"],
        DBNAME: dbname,
        FILEID: "",
        ATTKEY: "",
        OPTS:   {}
      };
      !dbname || ( (ridx = caccts.findIndex(ob => ob.DBNAME === dbname)) > -1
        ? caccts[ridx] = Object.assign({}, rmtdn) : caccts.push(Object.assign({}, rmtdn)) );
      delete rmtdn.USRNAM;
      delete rmtdn.PSSWRD;
      (rsltk.dbs || []).forEach( e =>
        e === dbname || /^(?:.*\/|)a00$/.test(e)
        || caccts.findIndex(ob => ob.DBNAME === e.replace(/^.*\//, "")) > -1
        || caccts.push( Object.assign(Object.assign({}, rmtdn),
          { DBPUBL: !/^.*\//.test(e) ? undefined : ["_reader"], DBNAME: e.replace(/^.*\//, "") }) ) );
          // todo: set small-phi-pipe (\u03c6|) or dagger-pipe, public-db flag in ibmfns
      !(dbname || rsltk.dbs) || !a00Set() || (localStorage["_couchaccts"] = JSON.stringify(caccts));
      dbname && !rsltk.dbs ? dbOpen(rmtdn)
      : Promise.all( caccts.map( ob => !ob || !ob.DBNAME
          || /^a\d\d/.test(ob.DBNAME) || !rsltk.dbs.some(e => e === ob.DBNAME) // filters out public dbs
          || pchpdbs.indexOf(ob.DBNAME) > -1 || !window.PouchDB || new PouchDB(ob.DBNAME) ))
        .catch(msgHandl).then(() => rmtListGen(), pdbListGen());
    },
    ecoInit = () => {
      localStorage["_ecopresets"] = JSON.stringify(epsets);
      !msgwelcome || !epsets.ungvn || (msgwelcome.textContent = "Hello " + epsets.ungvn + "!");
      EC1.qconTog(epsets.appchks[1]);
      !(asels[1].selectedIndex = epsets.prvmode)
      || dataDispl( '<link href="' + a00path
        + '/-res-css/bulma0.9-minireset.css" type="text/css" rel="stylesheet" />\n'
        + document.querySelector('#ecorender').innerHTML.trim(), 5 );
      emodeSet();
      EC1.tabs5Tog(asels[3].selectedIndex = epsets.tabsdflt[0] || 0);
      EC1.tabs6Tog(asels[4].selectedIndex = epsets.tabsdflt[1] || 0);
      document.querySelector('#ecoesp0 #swpltogswi').checked = epsets.swapchks[0];
      document.querySelector('#ecoesp0 #wraptogswi').checked = epsets.swapchks[1];
      EC1.wrapTog();
      EC1.swplTog();
      document.querySelector('#ecoesp0 #hlslist').value = epsets.hlstyle;
      !epsets.appchks.length || achks.forEach((e, i) => e.checked = epsets.appchks[i]);
      !epsets.appchks.slice(22, 29).some(e => e) || xsrcTog();
    },
    espEnter = dsetskip => {
      typeof dsetskip === 'number' && !msgwelcome || ecoInit();
      document.documentElement.classList.remove("has-background-grey-lighter");
      document.querySelectorAll('#econav0, #ecorender').forEach(e => e.classList.remove("is-hidden"));
      if ( !dsetskip && idtoks
      && !reqipch && /^[a-z][0-9_a-z$,+-]*$/.test(valinp[1]) ) {
      // todo: why not test reqipch here -- to replace dsetskip?
      // todo: sync new, preexisting project db when team db is preset
        rmtDSet(valinp[1]);
      } else if (valinp[1] || !valinp[2] || reqipch || updseq[tmidpre + valinp[2]]) {
        !dbpc1 || rmtListGen();
        pchlist.value = reqipch && (valinp[1] || tmidpre + valinp[2])
          || !valcon && !epsets.dbdflt && fbktxd.DBNAME || "";
        !(!dbpch && pchlist.value || dbpch && dbpch.name !== pchlist.value) ? ++zindr
        : EC2.pchSel(epsets.appchks[0] && valinp[0] && !updseq[pchlist.value] ? 0 : ++zindr && null);
        !zindr || pdbListGen();
      }
    },
    cntcGen = u1st => Object.assign( jsonParse(JSON.stringify(ECOTMPLS.contact)),
      tm0cntcs[epsets.uname] = {
        _id: u1st ? "!" + (valinp[2] || "myteam") + "-aaa"
          : "!" + (epsets.teamid || "myteam") + "-"
            + anumlIncr( (Object.values(tm0cntcs).map(ob => ob._id).sort().reverse()[0] || "")
              .replace(/^![0-9a-z]+-/i, "") ),
        ts_created: tstamp1,
        ts_updated: tstamp1,
        name_full:  idtoks.idTokenPayload.name,
        name_user:  epsets.uname,
        roles:      ["Solo"],
        emails:     !pcloud ? [epsets.uemail] : pcloud.idpUserInfo.emails.map(ob => ob.value),
        image_src:  userinfo && userinfo.picture || "avatar000.png"
    }),
    dbidGen = () => Object.assign( jsonParse(JSON.stringify(ECOTMPLS.prjid)), {
      _id: "~DBID_" + valinp[1],
      file_created: {
        username:  epsets.uname,
        timestamp: tstamp1,
        dborigin:  a00orig || "",
        dbname:    tmidpre + valinp[2],
        subdir:    ""
      },
      file_updated: {
        username:  epsets.uname,
        timestamp: tstamp1,
        dborigin:  a00orig || "",
        dbname:    tmidpre + valinp[2],
        subdir:    ""
      },
      prj_name:    blrbdat && blrbdat[2] || valinp[1].replace(/-/g, " "),
      image_src:   blrbdat && blrbdat[1] || "",
      descr_short: blrbdat && blrbdat[3]
        || "Home database of one of my brilliant team projects",
      descr_extd:  blrbdat && blrbdat[4] || ""
    }),
    teamDSet = () => {
      if (valinp[2] && !/^[a-z][0-9_a-z$,+-]*$/.test(valinp[2])) { return espEnter(); }
      rdataFetch( Object.assign( Object.assign({}, ECOXREQD), {
        prms: {
          uemail: epsets.uemail,
          uname:  epsets.uname || null,
          unfull: idtoks.idTokenPayload.name || null,
          uimg:   userinfo && userinfo.picture || null
        },
        hdrs: { "Authorization": "Bearer " + idtoks.accessToken } }), 3 )
      .then((rsltk = {}) => {
        if (rsltk.dbs) {
          // retrieve a pre-gen'd team db -- only if pre-authorized by team admin
          !rsltk.unm0 || rsltk.unm0 === epsets.uname || (epsets.uname = rsltk.unm0);
          dbteam || (dbteam = rsltk.dbs.find(e => /^(?:.*\/|)a\d\d_\w/.test(e)) || "");
          epsets.teamid = epsets.teamid || dbteam.replace(/^(?:.*\/|)a\d\d_/, "") || valinp[2];
          !rsltk.dbs.some(e => e === (!valinp[2] ? dbteam : tmidpre + valinp[2]))
          || (dbpc1 = window.PouchDB && new PouchDB(!valinp[2] ? dbteam : tmidpre + valinp[2]));
          rmtDSet(dbpc1 && dbpc1.name, rsltk);
          return !dbpc1 || !(tm2txd = caccts.find(ob => ob.DBNAME === dbpc1.name)) || !tm2txd.USRNAM
          ? espEnter()
          : dbpc1.info().then(resp => {
            dbpc2 = new PouchDB(txurlGen(tm2txd), { skip_setup: true });  // slow sync team db
              return dbpc1.replicate.from(dbpc2, { batches_limit: 1, batch_size: 1, live: false })
              .then(() => dbpc1.info())
              .then(rsp2 => updseq[dbpc1.name] = rsp2.update_seq)
              .then(() => dbpc1.query("ecosorter/files-contact"))
              .then( rsltqry => !rsltqry || !rsltqry.rows || rsltqry.rows.forEach( (r, i) =>
                tm0cntcs[r.key] = { _id: r.id, roles: r.value.roles } ))
              .then( () => tm0urole = tm0cntcs[epsets.uname]
                && tm0cntcs[epsets.uname].roles.find(e => /^Admin$|^Lead$|^Contributor$/i.test(e))
                || (caccts.find(ob => ob.DBNAME === valinp[1] || fbktxd.DBNAME) || "").USRNAM )
              .then( () => !/^Contributor$/i.test(tm0urole) || !valinp[2] || valinp[1]
                || (tm0urole = false) )
              .then(() => espEnter());
          });
        } else if ( window.PouchDB && /^[a-z][0-9_a-z$,+-]*$/.test(valinp[1]) && valinp[2] && !dbteam
        && !/\becoadmin\b|\becokey[012]\b/.test(idtoks.accessTokenPayload.scope) ) {
        // test valinp[1] here for dbidGen
        // generate a new team db now; worry later about cfg'n of rmt cred'ls & sharing
          epsets.teamid = valinp[2];
          return new PouchDB(tmidpre + valinp[2]).bulkDocs([
            { _id: "-res-img" },
            dbidGen(),
            cntcGen(1)
          ]).then(() => espEnter());
        } else {
          espEnter();
        }
      }).catch(err => {
        msgHandl(err);
        espEnter();
      });
    },
    signIn = async () => {
      try {
        idtoks = await appid.signin();
        logtbtn.disabled = false;
        appidtoks.innerHTML = JSON.stringify(idtoks, null, 2);
        userinfo = await appid.getUserInfo(idtoks.accessToken);
        appuinfo.innerHTML = JSON.stringify(userinfo, null, 2);
        if (epsets.uemail && epsets.uemail !== idtoks.idTokenPayload.email) {
          dbteam = epsets.teamid = epsets.unfam = epsets.ungvn = epsets.uemail = "";
          epsets.uname = Object.keys(tm0cntcs).find( k =>
            (tm0cntcs[k].email || "").toLowerCase() === (idtoks.idTokenPayload.email || "").toLowerCase() )
             || "";
        }
        epsets.uemail || (epsets.uemail = idtoks.idTokenPayload.email);
        epsets.uname || ( epsets.uname = (idtoks.idTokenPayload.ecopresets || "").uname
          || (epsets.uemail || "").replace(/@.*$/, "") );
        epsets.ungvn || (epsets.ungvn = idtoks.idTokenPayload.given_name);
        epsets.unfam || (epsets.unfam = idtoks.idTokenPayload.family_name);
        pcloud = userinfo.identities.find(ob => ob.provider === "cloud_directory");
        epsets.loglast = pcloud && pcloud.idpUserInfo.meta.lastLogin || new Date().toISOString();
        epsets.dbdflt || localStorage["_ecoidtoks"] && !valinp[1]
        || (epsets.dbdflt = valinp[1] || fbktxd.DBNAME || "");
        localStorage["_ecoidtoks"] = JSON.stringify(idtoks);
        teamDSet();
      } catch (err) {
        msgHandl(err);
        espEnter();
      }
    };
  ecoprj0.classList.add("is-hidden");
  sethlps.forEach(e => e.classList.add("is-hidden"));
  idtoks || !epsets.loglast || (idtoks = jsonParse(localStorage["_ecoidtoks"]));
  !idtoks || appidtoks.innerHTML || (appidtoks.innerHTML = JSON.stringify(idtoks, null, 2))
  && (logtbtn.disabled = false);
  if (tstamp1 - tstamp0 > 12 * 60 * 60 * 1000) {
    tstamp0 = tstamp1;
    updseq = {};
  }
  if ( hostlh || !appid || !appid.initialized || reqipch && !reqtxd.DBNAME
  || (!valinp[1] || !valinp[2]) && reqtxd.DBORIG && (reqtxd.DBPUBL || reqtxd.USRNAM)
  || (reqipch && !valinp[2] || epsets.dbdflt && !valinp[0])
  && epsets.uname && epsets.loglast && (!dbteam || tm0txd.DBORIG && tm0txd.USRNAM) ) {
    espEnter(1);
  } else if (!idtoks || tstamp1 > idtoks.accessTokenPayload.exp * 1000) {
    signIn();
  } else {
    !valinp[2] ? espEnter(0) : teamDSet();
  }
},
wdGen(pdata) { return webdocGen(1, pdata); },
u2Blob(url) { // also triggered by dviz-memos, dviz-contacts, prjDiscGen, jdeDftGen
  return asseturls[(url || "").replace(/^\S*\//, "")] || asseturls[url]
  || (url || "").replace(/^\.\.\/\.\.(?!\/a00\/)(?=\S+[^\s\/]$)/, a00orig) || url;
},
objQA(key = "", fbx) { // also triggered by dviz-memos, rsrcsXGet, qconRetrvD
  let pty,
    rsltFbk = rslt => pty && fbx ? "" : /^keys$/i.test(pty) && Object.keys(rslt) || rslt,
    ptyTest = d => pty = key.replace(!d ? /^\w+\.(.+)$|.*/ : /^\w+\.(\d+)$|.*/, "$1"),
    gloObj = () => !(pty = /^(\w+)(\.keys|)$/.exec(key)) ? window.eval(key)
      : pty[2] ? window[pty[1]]["keys"] || Object.keys(window.eval(pty[1]))
      : !/^Handlebars$/.test(key) ? window[key]
      : Object.assign(Object.assign({}, Handlebars), { Parser: {}, default: {} });
  return /^attlist/.test(key) ? attListGen()
  : /^pfslist/.test(key) ? pfsListGen()
  : /^(?:HLJS|)STYS?/i.test(key) ? HLJSSTYS[ptyTest(1)] || rsltFbk(HLJSSTYS)
  : /^(?:COUCH|C)TXD/i.test(key) ? COUCHTXD[ptyTest(1)] || rsltFbk(COUCHTXD)
  : /^(?:ECO|)X?REQD?/i.test(key) ? ECOXREQD[ptyTest()] || rsltFbk(ECOXREQD)
  : /^(?:tm0|)urole?/.test(key) ? tm0urole
  : /^dbpch/.test(key) ? dbpch && dbpch[ptyTest()]
    || rsltFbk(Object.assign(Object.assign({}, dbpch), { taskqueue: undefined }))
  : /^(?:prjs|)(?:eco|e)net/.test(key) ? prjsenet[ptyTest()] || rsltFbk(prjsenet)
  : /^updseq/.test(key) ? updseq[ptyTest()] || rsltFbk(updseq)
  : /^updpch/.test(key) ? updpch[ptyTest()] || rsltFbk(updpch)
  : /^lnkstor/.test(key) ? lnkstor[ptyTest(1)] || rsltFbk(lnkstor)
  : /^pf3stor/.test(key) ? pf3stor[ptyTest()] || rsltFbk(pf3stor)
  : /^tmp1pc/.test(key) ? tmp1pc && tmp1pc[ptyTest()] || rsltFbk(tmp1pc)
  : /^tmp1ff/.test(key) ? tmp1ff && tmp1ff[ptyTest()] || rsltFbk(tmp1ff)
  : /^file2nd/.test(key) ? file2nd && file2nd[ptyTest()] || rsltFbk(file2nd)
  : /^filewkg/.test(key) ? filewkg && filewkg[ptyTest()] || rsltFbk(filewkg)
  : /^9|^webdoc(?:Gen|)|^wdG/i.test(key) && filewkg && filewkg.file_type === "eco-publmgr" ? webdocGen(1)
  : /^8|^(?:ECO|)SDOCS?/i.test(key) ? ECOSDOCS[ptyTest(1)] || rsltFbk(ECOSDOCS)
  : /^7|^(?:ECO|)MODJ?S?/i.test(key) ? ECOMODJS[ptyTest()] || rsltFbk(ECOMODJS)
  : /^6|^(?:ECO|)TMPLS?/i.test(key) ? ECOTMPLS[ptyTest()] || rsltFbk(ECOTMPLS)
  : /^5|^(?:ECO|)INSTR?/i.test(key) ? ECOINSTR[ptyTest(1)] || rsltFbk(ECOINSTR)
  : /^4|^assets?|^a?urls?|^blobs?/i.test(key) ? asseturls[ptyTest()] || rsltFbk(asseturls)
  : /^3|^team|^tm0$|^(?:tm0|)cntcs?|^contacts?/i.test(key) ? tm0cntcs[ptyTest()] || rsltFbk(tm0cntcs)
  : /^2|^couch|^c?accts?|^c?accounts?/i.test(key) ? caccts[ptyTest(1)] || rsltFbk(caccts)
  : /^1|^(?:eco|)idtoks?/i.test(key) ? idtoks && idtoks[ptyTest()] || rsltFbk(idtoks)
  : /^0|epsets?|(?:eco|)presets?/i.test(key) ? epsets && epsets[ptyTest()] || rsltFbk(epsets)
  : window[key.replace(/^new +|[.(].+/g, "")] ? gloObj() : rsltFbk(ECOINSTR[0]);
},
tmplLoad() {
  let tmplrads = document.querySelector('#ecoguides #tmplrad').elements["tmplrad"],
    pfslist = document.querySelector('#econav0 #pfslist');
  if ( !fwinflux && ( pfslist.selectedIndex = Array.from(pfslist.options)
  .findIndex(op => op.parentElement.label === "APP templates" && op.value === tmplrads.value) )) {
    EC1.tabs0Tog(2);
    EC1.pfsSel();
  }
},
guideLoad() {
  let guiderads = document.querySelector('#ecoguides #guiderad').elements["guiderad"],
    qcontxta = document.querySelector('#econav0 #qcontxta'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    reqipch = Array.from(pchlist.options).some(op => op.value === "a00"),
    txdata = !reqipch ? {
      url:  a00orig + "/a00/" + guiderads.value,
      bmet: 'json'
    } : {
      DBNAME: "a00",
      FILEID: guiderads.value // "guide-httpcon"
    };
  if (!fwinflux && guiderads.value) {
    qcontxta.value = JSON.stringify(txdata, null, 2) + "\n";
    EC2.qconRetrvD(() => EC1.tabs0Tog(0));
  }
},
calcGen() {
  if (fwinflux) { return; }
  let calcdemo = document.querySelector('#ecoesp0 #calctogswi').checked,
    calctmpl = jsonParse(JSON.stringify(ECOTMPLS.publmgr)),
    calccnt = (ECOSDOCS[0] || "").split(/\n\n(?=<\/xmp>\n| *p = 5\n)/);
  pfsResets();
  calctmpl = Object.assign( calctmpl, {
    _id: "",
    loadconfigs:  Object.assign(calctmpl.loadconfigs, { tabselected: "SOURCE2" }),
    parseconfigs: Object.assign( calctmpl.parseconfigs, {
      scriptsincl: [{ fncname: "htmlWrapTags", applytofrag: [true, true, true] }]
    }),
    filefrags: [
      { idtxt: "SOURCE1", labeltxt: "SOURCE1", titletxt: "SOURCE pane #1.",
        contenttxt: calccnt[0] || "" },
      { idtxt: "SOURCE2", labeltxt: "SOURCE2", titletxt: "SOURCE pane #2.",
        contenttxt: !calcdemo ? "" : calccnt[1] || "" },
      { idtxt: "SOURCE3", labeltxt: "SOURCE3", titletxt: "SOURCE pane #3.",
        contenttxt: calccnt[2] || "" }
    ]
  });
  window.scrollTo(0, 0);
  dataDispl(calctmpl, 1, () => EC1.tabs0Tog(0));
},
diffGen(evt, txt1, txt2) { // also triggered by dviz-dboxupd
  if (fwinflux) { return; }
  let pnbr = +/\d+$/.exec(!evt ? "0" : evt.target.parentElement.id),
    difftmpl = jsonParse(JSON.stringify(ECOTMPLS.publmgr));
  txt1 = txt1 || ( document.querySelector('#ecoesp0 #ptyvals' + pnbr + '>input')
    || document.querySelector('#ecoesp0 #ptyvals' + pnbr + '>textarea')
    || document.querySelector( '#ecoesp0 #ptyvals'
      + pnbr + '>span:not(.is-hidden)>textarea' )
    || document.querySelector( '#ecoesp0 #ptyvals'
      + pnbr + '>div>span:not(.is-hidden)>textarea' ) || "").value || "";
  txt2 = txt2 || ( document.querySelector('#ecoesp0 #pt2vals' + pnbr + '>input')
    || document.querySelector('#ecoesp0 #pt2vals' + pnbr + '>textarea')
    || document.querySelector( '#ecoesp0 #pt2vals'
      + pnbr + '>span:not(.is-hidden)>textarea')
    || document.querySelector('#ecoesp0 #pt2vals'
      + pnbr + '>div>span:not(.is-hidden)>textarea' ) || "").value || "";
  pfsResets();
  difftmpl = Object.assign( difftmpl, {
    _id: "",
    parseconfigs: Object.assign( difftmpl.parseconfigs, {
      scriptsconstr: [{
        fncname:  "srctxtaWraps", filepath: "", usedescription: "", htmlscriptload: "",
        features: [{ switchon: false, keytxt: "", valtxt: "" }],
        deftxt:   `function (str, idx) {
  return '<textarea id="diff-s' + (1 + idx) + 'txta" class="is-hidden">\\n'
  + str.replace(/<(?=\\/textarea>)/g, "&lt;")
  + '</textarea>\\n'
  ;
}`    }],
      scriptsincl: [{ fncname: "srctxtaWraps", applytofrag: [true, true, false] }]
    }),
    filefrags: [
      { idtxt: "SOURCE1", labeltxt: "SOURCE1", titletxt: "SOURCE pane #1.", contenttxt: txt1 },
      { idtxt: "SOURCE2", labeltxt: "SOURCE2", titletxt: "SOURCE pane #2.", contenttxt: txt2 },
      { idtxt: "SOURCE3", labeltxt: "SOURCE3", titletxt: "SOURCE pane #3.", contenttxt: ECOSDOCS[1] || "" }
    ]
  });
  dataDispl(difftmpl, 1, () => EC1.tabs0Tog(0));
},
dvizGen(idx) {
  if (fwinflux) { return; }
  let dvizrads = document.querySelector('#ecoesp0 #dvizrad').elements["dvizrad"],
    fileDViz = idx => {
      let dviztmpl = jsonParse(JSON.stringify(ECOTMPLS.publmgr));
      pfsResets();
      dviztmpl._id = "";
      dviztmpl.filefrags[0].contenttxt = ECOSDOCS[6 - idx] || ""; // 2 or 3
      dataDispl(dviztmpl, 1, () => EC1.tabs0Tog(0));
    },
    cntcDViz = idx => {
      idx == null || (dvizrads = { value: idx });
      let cdb = +dvizrads.value && ( +dvizrads.value === 1
          ? dbpch && dbpch.name : epsets.teamid && "a00_" + epsets.teamid ),
        csg = Object.entries(tm0cntcs).map(oe => [oe[1]._id, oe[0]])
        .filter( ar => cdb && ( +dvizrads.value === 1
          ? !epsets.teamid || ar[0].replace(/^!([0-9a-z]+)-.*/i, "$1") !== epsets.teamid
          : ar[0].replace(/^!([0-9a-z]+)-.*/i, "$1") === epsets.teamid )).sort(),
        cct = csg.length,
        dviztmpl = jsonParse(JSON.stringify(ECOTMPLS.publmgr));
      pfsResets();
      dviztmpl._id = "";
      dviztmpl.contributors = csg.map(ar => ar[1].replace(/[^\w.@-]+/g, "-"));
      !cdb || (dviztmpl.loadconfigs.commondirpath = `../../${cdb}/contacts/`);
      dviztmpl.loadconfigs.fragsrcxs = [false, ...csg.map(ar => "./" + ar[0]), false];
      dviztmpl.filefrags = [
        { idtxt: "SOURCE1", labeltxt: "SOURCE1", titletxt: "SOURCE pane #1.",
          contenttxt: (ECOSDOCS[4] || "").replace(/\n *`\.trim\(\)[^]+$/, "") },
        ...csg.map( (e, i) =>
          ({ idtxt: `SOURCE${2 + i}`, labeltxt: `SOURCE${2 + i}`,
            titletxt: `SOURCE pane #${2 + i}.`, contenttxt: "" })),
        { idtxt: `SOURCE${2 + cct}`, labeltxt: `SOURCE${2 + cct}`,
          titletxt: `SOURCE pane #${2 + cct}.`, contenttxt: (ECOSDOCS[4] || "")
          .replace(/^[^]+?\n *const cntcs = `\n/, "")
          .replace(/\.\.\/\.\.\/a00_myteam\/-res-img\//g, () => !cdb ? "" : `../../${cdb}/-res-img/`) }
      ];
      dviztmpl.parseconfigs.scriptsincl[0].applytofrag = dviztmpl.filefrags.map(e => true);
      window.scrollTo(0, 0);
      dataDispl(dviztmpl, 1, () => EC1.tabs0Tog(0));
    };
  (idx = idx != null ? idx : +dvizrads.value) < 0
  || (idx < 3 ? cntcDViz(idx) : idx < 5 && fileDViz(idx));
},
qconSyncD() {
// ### http console input ###
// 1 display open, local-db info (or, report "no db open")
//   : when valcon is blank (or, txdata.DBNAME === false)
// 2 display COUCHACCTS-txdata : when valcon has _-undefined-key (or, is unblank & caccts is empty)
//   or, display caccts-txdata : when valcon has _-key, _-key.idx, acct-idx, acct-DBNAME or is unblank
// 3 set/unset caccts-txdata to localStorage : when valcon provides caccts-setter-json,
//   e.g. { "$_couchaccts": [{ "DBNAME": "dbname" }] }, { "$2": null }
// 4 display list of local dbs : when valcon is `/_all_dbs` (or, txdata.DBNAME === "_all_dbs")
// 5 create/open/switch local-db : when valcon has `/`-DBNAME (or, close db for standalone `/`)
// 6 create/open/switch/destroy/compact/cleanup local/remote-db : when valcon provides specified txdata-json
// 7 create/destroy multiple local dbs : when valcon provides specified txdata-array
// 8 perform sync : when valcon provides remote-db txdata-json while a matching local-db is open
  let prekey, stokey, ridx,
    [txdata, valcon] = txdPrep(),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    dbs = Array.from(pchlist.options).map(op => op.value),
    reqipch = txdata.DBNAME && dbs.some(e => e === txdata.DBNAME),
    ecoat = (txdata.idtoks || idtoks || "").accessToken,
    valStor = () => localStorage[stokey]
      = typeof txdata[prekey] !== 'object' ? txdata[prekey]
      : JSON.stringify( /^_ecopresets$/.test(stokey) ? epsets
        : /^_couchaccts$/.test(stokey) ? caccts : txdata[prekey] );
  if (!valcon || txdata.DBNAME === false) {
    dbpch ? dbpch.info().then(msgHandl).catch(msgHandl) : msgHandl("Alert: No local DB is open.");
  } else if (prekey = Object.keys(txdata).find(e => /^\$[02]$|^\$_[\w!.*+~-]+$/.test(e))) {
    stokey = ({ $0: "_ecopresets", $2: "_couchaccts" })[prekey] || prekey.replace(/^\$/, "");
    if (txdata[prekey] === null) {
      !/^_ecopresets$/.test(stokey) || (epsets = {});
      !/^_couchaccts$/.test(stokey) || !(caccts = []) || localStorage.removeItem("_ecoa00orig");
      localStorage.removeItem(stokey);
      msgHandl("Local-storage item is removed.\nKey: " + stokey);
    } else {
      !/^_ecopresets$/.test(stokey) || typeof txdata[prekey] !== 'object'
      || Object.entries(txdata[prekey])
        .forEach(oe => !epsets.hasOwnProperty(oe[0]) || (epsets[oe[0]] = oe[1]));
      !/^_couchaccts$/.test(stokey) ? valStor() : !Array.isArray(txdata[prekey])
      || Promise.all( txdata[prekey].map( o2 => !(o2 || "").DBNAME
          || ( (ridx = caccts.findIndex(o1 => o1.DBNAME === o2.DBNAME)) > -1
            ? caccts[ridx] = o2 : ( caccts.push(o2),
              dbs.indexOf(o2.DBNAME) > -1 || !window.PouchDB || new PouchDB(o2.DBNAME) ) ) ))
        .catch(msgHandl).then(() => {
          a00Set();
          valStor();
          rmtListGen();
          pdbListGen();
        });
      msgHandl( ( /^_ecopresets$/.test(stokey) ? "Ecollabs user data is preset."
        : /^_couchaccts$/.test(stokey) ? "CouchDB access data is preset."
        : "Local-storage item is stored." ) + "\nKey: " + stokey );
    }
  } else if (window.PouchDB && txdata.DBNAME === "_all_dbs") {
    // dbs is an array of strings, e.g. ['mydb1', 'mydb2']
    !PouchDB.allDbs || PouchDB.allDbs()
    .then(dbs => msgHandl(dbs.join("\n"))).catch(msgHandl);
  } else if (window.PouchDB && Array.isArray(txdata)) {
    !PouchDB.allDbs || PouchDB.allDbs()
    .then( dbs => txdata.forEach( ob =>
      !(ob || "").DBNAME || dbs.indexOf(ob.DBNAME) > -1 && !ob.DESTROY || couchSync(ob) ))
    .catch(msgHandl);
  } else if (valcon === "/" || txdata.DBNAME === "") {
    pchlist.value = ""; // reset db only; works even w/o hbars-fnc
    EC2.pchSel();
  } else if (reqipch && txdata.DBNAME && (!dbpch || dbpch.name !== txdata.DBNAME)) {
    // pchlist.value/pchSel-couchSync-fnc dependency is bypassed by reqipch
    pchlist.value = txdata.DBNAME;
    EC2.pchSel();
  } else if ( /^https:\/\/[\w-]+\.cloudant[\w.]+$/.test(txdata.DBORIG)
  && ecoat && (!txdata.USRNAM || /^$|password/i.test(txdata.PSSWRD))
  && txdata.DBNAME && (!reqipch || txdata.DESTROY) && !txdata.FILEID ) {
    rdataFetch( Object.assign( Object.assign({}, ECOXREQD), {
      prms: {
        dbname: txdata.DBNAME,
        clact:  txdata.DESTROY ? "dbnix" : "dbadd"
      },
      hdrs: {
        "Authorization": "Bearer " + ecoat
      }
    }), 2 ).then(msgHandl).catch(msgHandl);
  } else if (/^\b\S+$/.test(valcon) || txdata.DBNAME) {
    couchSync(txdata, valcon);
  } else {
    msgHandl(ECOINSTR[1]);
    msgHandl(txdata);
  }
},
qconRetrvD(cbfnc, errfnc) { // also triggered by guideLoad, dviz-idxlist, dviz-memos, dviz-dboxupd
// ### http console input ###
// *any results from the following txs get sent to preview/jdedft/jderaw*
// 1 blank: reset edit space
// 2 `$`-idx, `$`-obj, `$`-idx/obj.key: display ECO-obj/named-json-pty
// 3 blob-url or json with url: fetch static file
// 4 json with dbox/path: execute dropbox tx
// 5 json with cos txdata: execute ibm cloud tx
// 6 remote-db-url or json with local/remote-db txdata: query db
// 7 endpoint/filepath of local-db data,
//   i.e. `/_all_dbs`, `_all_docs`, `_design_docs`, `_changes`,
//   or `/`-DBNAME + `/` + FILEID + `/`-ATTKEY: query db
// 8 `//`-filename: get localForage file
  let lfkey,
    [txdata, valcon] = txdPrep(),
    ecoat = (txdata.idtoks || idtoks || "").accessToken;
  !valcon || !filewkg || !/^eco-(?:publmgr|scrap|srcdoc)$/.test(filewkg.file_type)
  || document.querySelector('#ecoesp0 .escreen:nth-of-type(2):not(.is-hidden)') || EC1.tabs0Tog(4);
  if (!valcon) {
    pfsResets();
    msgHandl("Edit Space is reset.");
  } else if (/^\/\/.*$/.test(valcon) && window.localforage) {
    !(lfkey = valcon.replace(/^\/\//, ""))
    ? localforage.keys((err, keys) => err ? msgHandl(err) : dataDispl(keys, 0))
    : localforage.getItem(lfkey, (err, val) => err ? msgHandl(err) : dataDispl(val, 0));
  } else if (/^\$(?: *(?:new +|)\w+(?:\..+|\(.*?\).*|)|)$/.test(valcon)) {
    Promise.resolve(EC2.objQA(valcon.replace(/^\$ */, ""))).then(rslt => dataDispl(rslt, 0));
  } else if (txdata.hasOwnProperty("dbox") || txdata.hasOwnProperty("path")) {
    dropboxTx(txdata, cbfnc, errfnc);
  } else if (txdata.url) { // non-db filepath/url
    rdataFetch(txdata).then(rslt => {
      if (!rslt) { return Promise.reject("Alert: Static file located but data retrieval failed."); }
      msgHandl("Data fetched from static file: " + txdata.url.replace(/^.+\//, ""));
      return /^image/.test(rslt.type) ? dataDispl(imgWrap(txdata.url), 6, cbfnc)
      : /^(?:json|text)$/.test(txdata.bmet) ? dataDispl(rslt, 0, cbfnc)
      : rdataFetch({ url: txdata.url, bmet: 'text' }).then(rslt => dataDispl(rslt, 0, cbfnc));
    }).catch(msgHandl);
  } else if (txdata.COSEND) {
    ibmcosTxD(txdata).then(rdataFetch)
    .then(rslt => blobHandl(rslt, 0, txdata, cbfnc)).catch(msgHandl);
  } else if ( /^https:\/\/[\w-]+\.cloudant[\w.]+$/.test(txdata.DBORIG)
  && ecoat && (!txdata.USRNAM || /^$|password/i.test(txdata.PSSWRD))
  && txdata.DBNAME ) { // todo: when is it better than couchQry?
    rdataFetch( Object.assign( Object.assign({}, ECOXREQD), {
        prms: {
          dbname: txdata.DBNAME,
          docid:  txdata.FILEID,
          attachmentname: txdata.ATTKEY || null,
          clact:  "query"
        },
        hdrs: {
          "Authorization": "Bearer " + ecoat
        }
      } ), 2 )
    .then(rslt => !txdata.ATTKEY ? dataDispl(rslt, 0) : blobHandl(rslt.body, 0, txdata))
    .catch(msgHandl);
  } else {
    couchQry(txdPrep(0)[0], 0, cbfnc);
  }
},
qconSubmD(ccommit) {
  !ccommit || !epsets.teamid || !tm0cntcs[epsets.uname] || (filewkg || "").file_type !== "eco-contact"
  || ( tm0cntcs[epsets.uname].roles.find(e => /^Admin$|^Lead$|^Solo$/i.test(e))
    || tm0cntcs[epsets.uname]._id === (filewkg || "")._id
    && tm0cntcs[epsets.uname].roles.find(e => /^Contributor$|^Reviewer$/i.test(e))
    ? document.querySelector('#econav0 #qcontxta').value = JSON.stringify( Object.assign(
        Object.assign({}, caccts.find(ob => ob.DBNAME === "a00_" + epsets.teamid)),
        { USRNAM: undefined, PSSWRD: undefined, FILEID: filewkg._id } ), null, 2 ) + "\n"
    : document.querySelector('#ecoesp0 #cntcbtn').disabled = true );
  let [txdata] = txdPrep(),
    rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    cntchlps = document.querySelectorAll('#ecoesp0 #eftcntc .help'),
    typpmgr = filewkg && (filewkg.file_type === "eco-publmgr" || filewkg.filefrags && true),
    ecoat = (txdata.idtoks || idtoks || "").accessToken,
    ctypes = { css: "text/css", htm: "text/html", html: "text/html",
      js: "text/javascript", mjs: "text/javascript" };
  txdata.CTYPE = txdata.CTYPE || txdata.ATTKEY
    && ( ctypes[(txdata.ATTKEY || "").replace(/^.+?(?:\.([a-z]\w{1,3})|)$/i, "$1")]
      || (txdata.CBLOB || "").type || typpmgr && "text/html" || "text/plain;charset=utf-8" );
  if (txdata.hasOwnProperty("dbox") || txdata.hasOwnProperty("path")) {
    dropboxTx(txdata);
  } else if (txdata.COSEND) {
    ibmcosTxD(txdata, typpmgr, 1).then(rdataFetch).then(msgHandl).catch(msgHandl);
  } else if ( /^https:\/\/[\w-]+\.cloudant[\w.]+$/.test(txdata.DBORIG)
  && ecoat && (!txdata.USRNAM || /^$|password/i.test(txdata.PSSWRD))
  && txdata.DBNAME && txdata.FILEID ) {
    rdataFetch( Object.assign( Object.assign({}, ECOXREQD), {
        prms: {
          dbname: txdata.DBNAME || "",
          docid:  txdata.FILEID || "",
          attachmentname: txdata.ATTKEY || null,
          contenttype:    txdata.CTYPE || null,
          userid: (tm0cntcs[epsets.uname] || "")._id || null,
          uemail: ((txdata.idtoks || idtoks || "").idTokenPayload || "").email || null,
          uroles: txdata.UROLES && txdata.UROLES.join(),
          clact:  txdata.ATTKEY && (txdata.REMOVE ? "remove" : "attach")
            || (txdata.DELETE ? "delete" : "write")
        },
        hdrs: {
          "Content-Type": txdata.DELETE || txdata.REMOVE || txdata.UROLES ? null
            : !txdata.ATTKEY ? 'application/json'
            : txdata.CTYPE || 'application/octet-stream',
          "Authorization": "Bearer " + ecoat
        },
        body: txdata.DELETE || txdata.REMOVE || txdata.UROLES ? ""
          : !txdata.ATTKEY ? JSON.stringify({ doc: txdata.doc || filewkg }) : txdata.CBLOB
            || new Blob([typpmgr ? webdocGen(1) : rawtxta.value], { type: txdata.CTYPE })
      } ), 2 )
    .then(resp => {
      msgHandl(resp);
      !ccommit || cntchlps[resp.ok ? 0 : 1].classList.remove("is-hidden");
      !ccommit || !resp.ok || (document.querySelector('#ecoesp0 #cntcbtn').disabled = true);
    }).catch(err => {
      msgHandl(err);
      !ccommit || cntchlps[1].classList.remove("is-hidden");
    });
  } else if (!txdata.DELETE && (txdata.ATTKEY)) {
    couchAtt();
  } else {
    couchPut(txdata);
  }
},
fileLFUpd(rev, subdir) { // also triggered by couchPut
  let dirref,
    rawtxta = document.querySelector('#ecoesp0 #rawtxta'),
    fileref = document.querySelector('#econav0 #pfsinp').value.replace(/^\u2514 /, "").trim(),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    lfiSet = () => {
      filewkg || (filewkg = jsonParse(rawtxta.value));
      fileref = !filewkg ? fileref.replace(/[ *]*$/, " *")
        : fwUpdPrep(fileref, dirref, 0, optg !== "LOCAL temporary files");
      !fileref || localforage.setItem( fileref + (!rev ? "" : " *(" + rev.replace(/-.+/, ")")),
        filewkg ? JSON.stringify(filewkg) : rawtxta.value,
        (err, _val) => err ? msgHandl(err) : pfsListGen(fileref, subdir, 1) );
    };
  dirref = fileref.replace(/^(?:\.\.\/|)\.?(-?\w.*)\/.+|.+/, "$1");
  fileref = fileref.replace(/\/$|^(?:\.\.\/|)(?:.*\/(?=.)|)/g, "");
  fileref || !filewkg || (fileref = filewkg._id);
  if ( !window.localforage || !/^$|^[.-]?\w[\w!.*+~-]*$/.test(dirref)
  || !/^(?! )[ !-.0-~]+$/.test(fileref) || /[*~]\(?[0-9]*\)?$/.test(fileref) ) {
    updDisbl(); // /^[!.~-]?\w[\w!.*+~-]*$/
  } else if (!rev && optg !== "LOCAL temporary files") {
    localforage.keys( (err, keys) => err ? msgHandl(err)
      : !keys.some(e => e.replace(/[ *]*$/, "") === fileref.replace(/[ *]*$/, ""))
        ? lfiSet() : updDisbl() );
  } else {
    !rev && filewkg ? lfiSet() : localforage.removeItem(fileref, lfiSet);
  }
},
fileLFDel() {
  let pfsinp = document.querySelector('#econav0 #pfsinp'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    vallist = pfslist.value,
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label;
  if (pfsinp.value && pfsinp.value.replace(/^\u2514 /, "").trim() === vallist
  && optg === "LOCAL temporary files" && window.localforage) {
    document.querySelector('#econav0 #fupdbtnc>button').disabled = true;
    pfsinp.value = null;
    EC1.pfsInp();
    !document.querySelector('#econav0 #attinp').value && EC1.attSel();
    localforage.removeItem(vallist, pfsListGen);
  }
},
mnTog(xpnd) {
  let nmain = document.querySelector('main'),
    mnmask = document.querySelector('#ecorender>#mnmask'),
    mnnav = document.querySelector('#ecorender>#mnnav'),
    bodwid = nmain && +getComputedStyle(nmain).width.replace(/px/, "")
      || +getComputedStyle(document.body).width.replace(/px/, ""),
    blqLeft = n => !n || !/^(?:BLOCKQUOTE|DL|DD|LI|OL|UL)$/.test(n.nodeName) ? 0
      : +getComputedStyle(n).marginLeft.replace(/px/, "")
        + +getComputedStyle(n).borderLeftWidth.replace(/px/, "")
        + +getComputedStyle(n).paddingLeft.replace(/px/, "") + blqLeft(n.parentElement);
  xpnd != null || EC2.mnNav();
  !mnmask || xpnd == !document.querySelector('#ecorender #mnbar.minz')
  || document.querySelectorAll('#ecorender .mnote, #ecorender #mnbar')
    .forEach(e => e.classList.toggle("minz"))
  || document.querySelector('#ecorender').style.setProperty( "--mnbodrt",
    ( nmain && +getComputedStyle(nmain).marginRight.replace(/px/, "")
      || +getComputedStyle(document.body).paddingRight.replace(/px/, "")
      + +getComputedStyle(document.body).borderRightWidth.replace(/px/, "")
      + +getComputedStyle(document.body).marginRight.replace(/px/, "") ) + "px" )
  || document.querySelectorAll( '#ecorender blockquote>p>.mnote',
      '#ecorender dd>p>.mnote', '#ecorender li>p>.mnote' )
    .forEach( e => e.parentElement.parentElement.style.setProperty( "--mnblqrt",
      bodwid - blqLeft(e.parentElement.parentElement) - e.parentElement.offsetWidth + "px" ))
  || document.querySelectorAll('#ecorender th>.mnote, #ecorender td>.mnote')
    .forEach( e => e.parentElement.style.setProperty( "--mntblrt",
      bodwid - e.parentElement.offsetLeft
      - +getComputedStyle(e.parentElement).paddingLeft.replace(/px/, "")
      - +getComputedStyle(e.parentElement).width.replace(/px/, "") + "px" ))
  || [mnmask, mnnav].forEach(e => e.classList.toggle("is-hidden"));
},
mnNav(incr) {
  let ofy, mn0,
    mnots = document.querySelectorAll('#ecorender .mnote'),
    len = mnots.length,
    las = len && +mnots[len - 1].id.replace(/mnot(\d+)/, "$1"),
    mncount = document.querySelector('#ecorender>#mnnav #mncount'),
    nbr = incr == null && 1 || mncount && (+mncount.innerText.replace(/ .+/, "") + incr) || 0,
    ptQ = e => document.elementFromPoint(
      document.documentElement.clientWidth - 5, e + window.innerHeight / 2 );
  nbr = !len ? 0 : nbr > las ? 1 : !nbr ? las : nbr;
  if (incr == 0) {
    ofy = [0, 10, -10, 20, -20, 30, -30, 40, -40, 50, -50, 60, -60, 70, -70, 80, -80, 90]
      .find(n => ptQ(n).classList.contains("mnote")) || -90;
    nbr = +ptQ(ofy).id.replace(/^mnot/, "") || nbr;
  }
  !mncount || !(mncount.innerText = nbr + " of " + las) || incr == null
  || !(mn0 = document.querySelector('#ecorender #mnot' + nbr))
  || mn0.scrollIntoView({ behavior: "smooth", block: "center" });
},
discTog(evt) {
  let dload = document.querySelectorAll('#ecoesp0 #prjdisc>.field .mlft2>input[type=checkbox]'),
    discrad = document.querySelector('#ecoesp0 #discrad');
  if (evt && evt.target.type !== 'text') {
    epsets.discload = Array.from(dload).map(e => e.checked);
    epsets.discdays = +discrad.elements["discrad"].value;
    localStorage["_ecopresets"] = JSON.stringify(epsets);
  } else if (evt) {
    tm0disc = !evt.target.value.trim() || /\ball\b/i.test(evt.target.value) ? null
      : evt.target.value.trim().split(/[ ,]+/);
  }
  !evt || document.querySelectorAll('#ecoesp0 #prjdisc>.media .mtdn3>input[type=checkbox]')
    .forEach(e => e.checked = true);
  document.querySelector('#ecorender').innerHTML = null;
  reniscurr = false;
  prjDiscGen();
},
discTyp(dix) { // also triggered by prjDiscGen
  let discinp1 = document.querySelector('#ecoesp0 #discinp1'),
    discin2c = document.querySelector('#ecoesp0 #discin2c'),
    disctxta = document.querySelector('#ecoesp0 #disctxta'),
    discsel = document.querySelector('#ecoesp0 #discsel'),
    an1 = discsel.selectedIndex;
  (dix = dix != null ? dix : an1) === an1 || (discsel.selectedIndex = an1 = dix);
  !an1 ? discin2c.classList.add("is-hidden") : discin2c.classList.remove("is-hidden");
  discinp1.placeholder = !an1 ? "Subject" : "Tags";
  disctxta.placeholder = !an1 ? "Message" : "Strikes, inserts & highlights";
  epsets.disctype === an1 || !((epsets.disctype = an1) || 1)
  || (localStorage["_ecopresets"] = JSON.stringify(epsets));
},
discAdd(discsync) {
  let ucallsgn = ((tm0cntcs[epsets.uname] || "")._id || "")
      .replace(/^(?:!([0-9a-z]+)-|)([a-z]{3})$|.+/, "$1$2"),
    attlist = document.querySelector('#econav0 #attlist'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    discinp1 = document.querySelector('#ecoesp0 #discinp1'),
    discinp2 = document.querySelector('#ecoesp0 #discinp2'),
    disctxta = document.querySelector('#ecoesp0 #disctxta'),
    an1 = document.querySelector('#ecoesp0 #discsel').selectedIndex,
    rmttxd = dbpch && caccts.find(ob => ob.DBNAME === dbpch.name) || {},
    tstamp1 = Date.now(),
    cobj = {
      _id:  "~" + (!an1 ? "m" : "a")
        + new Date(tstamp1).toISOString().replace(/\.\w+$|[:-]/g, "") + ucallsgn,
      _rev: "",
      file_type: !an1 ? "eco-memo" : "eco-anno",
      file_created: {
        username:  epsets.uname,
        timestamp: tstamp1,
        dborigin:  rmttxd.DBORIG || a00orig || "",
        dbname:    rmttxd.DBNAME || "",
        subdir:    (attlist.value || pfslist.selectedOptions[0].textContent || "")
                   .replace(/^\.?([^\/]*)\/.+$|.+/, "$1")
      },
      linkref: (attlist.selectedOptions[0].textContent || pfslist.value || "")
               .replace(/(?:-\w?[.\d]+|)\.\w+(?: *\*[^a-z]*|)$|^\./g, ""),
      from:    !an1 ? epsets.uname : undefined,
      to:      !an1 ? "" : undefined,
      subject: !an1 ? discinp1.value : undefined,
      body:    !an1 ? disctxta.value : undefined,
      tags:    !an1 ? undefined : discinp1.value.trim().split(/[ ,]+/),
      tocfmt:  !an1 ? undefined : discinp2.value,
      texthl:  !an1 ? undefined : disctxta.value.trim().split("\n")
    };
  if (!dbpch || !ucallsgn || !disctxta.value && (!an1 || !discinp1.value && !discinp2.value)) {
    return !discsync || !rmttxd.DBNAME || !rmttxd.DBORIG
    || couchSync(Object.assign({ RMTFR: !tm0urole }, rmttxd));
  } else if (tm0urole) {
    dbpch.put(cobj).then(resp => {
      updseq[dbpch.name]++;
      !discsync || !rmttxd.DBNAME || !rmttxd.DBORIG ? prjDiscGen() : couchSync(rmttxd);
    }).catch(msgHandl);
  } else if ( idtoks && tm0cntcs[epsets.uname]
  && tm0cntcs[epsets.uname].roles.find(e => /^Reviewer$/i.test(e)) ) {
    rdataFetch( Object.assign( Object.assign({}, ECOXREQD), {
        prms: {
          dbname: dbpch.name,
          docid:  cobj._id || "",
          clact:  "write"
        },
        hdrs: {
          "Content-Type": 'application/json',
          "Authorization": "Bearer " + idtoks.accessToken
        },
        body: JSON.stringify({ doc: cobj })
      } ), 2 )
    .then(resp => {
      msgHandl(resp);
      couchSync(Object.assign({ RMTFR: true }, rmttxd));
    }).catch(msgHandl);
  }
},
pchSel(trgnbr) { // also triggered by ibmConnect, qconSyncD
  let pdblist = document.querySelector('#ecoprj0 #pdblist'),
    fileref = document.querySelector('#econav0 #pfsinp').value.replace(/\/ *$|^\u2514 /g, "").trim(),
    pchhlps = document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(1) .help'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    pc2list = document.querySelector('#ecoesp0 #pc2list'),
    pchbtn = document.querySelector('#ecoesp0 #pchbtn'),
    dbmdinp = document.querySelector('#ecoesp0 #dbmdinp');
  pdblist.value = trgnbr !== 2 ? pc2list.value = pchlist.value : pchlist.value = pc2list.value;
  pdblist.selectedIndex > -1 || (pdblist.value = "");
  pchhlps.forEach(e => e.classList.add("is-hidden"));
  !filewkg || !pchlist.value
  || ( !filewkg.file_created ? (dbmdinp.value = pchlist.value)
    : indrChg(dbmdinp, (filewkg.file_updated || filewkg.file_created).dbname || "", pchlist.value) );
  if (pchlist.value) {
    pchbtn.disabled = !filewkg
    || !rexfid.test(filewkg._id) || rexfix.test(filewkg._id) ? true : false;
    document.querySelector('#econav0 #qcontxta').value = "";
    couchSync({ DBNAME: pchlist.value, RMTFR: trgnbr === 0 });
  } else if (dbpch) {
    EC1.pdbSel();
    pchbtn.disabled = true; // in case !fileref
    msgHandl("Alert: No local DB is open.");
    dbpch = null;
    pfsListGen(fileref);
  }
},
pchUpd() {
  let dirref,
    pfsinp = document.querySelector('#econav0 #pfsinp'),
    fileref = pfsinp.value.replace(/^\u2514 /, "").trim(),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label,
    delswi = document.querySelector('#ecoesp0 #delswi');
  dirref = fileref.replace(/^(?:\.\.\/|)\.?(-?\w.*)\/.+|.+/, "$1");
  fileref = fileref.replace(/\/$|^(?:\.\.\/|)(?:.*\/(?=.)|)/g, "");
  fileref || !filewkg || (fileref = filewkg._id);
  if ( !dbpch || !filewkg || !tm0urole
  || optg && optg !== "LOCAL temporary files" && !delswi.checked
  || !/^$|^[.-]?\w[\w!.*+~-]*$/.test(dirref)
  || ( /^[!~][a-z]/.test(filewkg._id) ? false
  : !rexfid.test(fileref) || rexfix.test(fileref) ) ) {
    document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(1) .help')[1]
    .classList.remove("is-hidden");
    updDisbl();
  } else if ((fileref = fwUpdPrep(fileref, dirref, 1)) && filewkg._id) {
    pfsinp.value = fileref;
    publResets();
    couchPut({ DBNAME: dbpch.name });
  }
},
dirSel() {
  let dirhlps = document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(2) .help'),
    dirlist = document.querySelector('#ecoesp0 #dirlist'),
    dirbtn = document.querySelector('#ecoesp0 #dirbtn'),
    rm3list = document.querySelector('#ecoesp0 #rm3list'),
    uplbtn = document.querySelector('#ecoesp0 #uplbtn'),
    typpmgr = filewkg && (filewkg.file_type === "eco-publmgr" || filewkg.filefrags && true);
  dirhlps.forEach(e => e.classList.add("is-hidden"));
  dirbtn.disabled = !typpmgr || !dirlist.value;
  rm3list.value = dirlist.value.replace(/^\./, "");
  uplbtn.disabled = !rm3list.value;
},
dirUpd(trgnbr) {
  let dirlist = document.querySelector('#ecoesp0 #dirlist'),
    imgainp = document.querySelector('#ecoesp0 #eftass input[type=file]'),
    irename = document.querySelector('#ecoesp0 #irename'),
    typpmgr = filewkg && (filewkg.file_type === "eco-publmgr" || filewkg.filefrags && true),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label;
  if (!dbpch || !tm0urole || trgnbr === 2 && (!optg || optg === "LOCAL temporary files")) {
    document.querySelector('#ecoesp0 #dirbtn').disabled
    = document.querySelector('#ecoesp0 #imgabtn').disabled = true;
  } else {
    trgnbr !== 1 || !typpmgr || couchAtt({ DBNAME: dbpch.name, FILEID: dirlist.value });
    if (trgnbr === 2 && imgainp.files[0]) {
      !imgainp.files[1] ? couchAtt({
        DBNAME: dbpch.name,
        FILEID: filewkg._id,
        ATTKEY: irename.value || imgainp.files[0].name,
        CTYPE:  imgainp.files[0].type,
        CBLOB:  imgainp.files[0]
      }) : couchPut({ DBNAME: dbpch.name, doc: Object.assign( filewkg, {
        _attachments: Object.fromEntries( Array.from(imgainp.files).map( (idat, i) =>
          [ !irename.value ? idat.name : irename.value.replace(/(?=\.\w+$|$)/, i),
            { content_type: idat.type, data: idat } ] ))
      }) });
    }
  }
},
rmtSel(trgnbr) { // also triggered by publResets, couchSync
  let rmthlps = document.querySelectorAll('#ecoesp0 #publpre>div:nth-of-type(1) .help, #ecoesp0 #publcmt>div:nth-of-type(3) .help'),
    rmtlist = document.querySelector('#ecoesp0 #rmtlist'),
    rm2list = document.querySelector('#ecoesp0 #rm2list'),
    rmtbtn = document.querySelector('#ecoesp0 #rmtbtn'),
    rm2btn = document.querySelector('#ecoesp0 #rm2btn'),
    rm2chgs = document.querySelector('#ecoesp0 #rm2chgs');
  rm2chgs.innerHTML = dbpch && updpch[dbpch.name] || null;
  updts0 = new Date(/^\d[\w.:-]{23,}$|(?!\n|.)/m.exec(rm2chgs.textContent)[0]).getTime() || tstamp0;
  rmthlps.forEach(e => e.classList.add("is-hidden"));
  !trgnbr ? (rm2list.value = rmtlist.value = !dbpch ? "" : dbpch.name)
  : trgnbr === 1 ? rm2list.value = rmtlist.value : rmtlist.value = rm2list.value;
  rmtlist.selectedIndex > -1 || (rm2list.value = rmtlist.value = "");
  !window.navigator.onLine || !rmtlist.value || !dbpch || rmtlist.value !== dbpch.name
  || !/^\w/.test(rmtlist.selectedOptions[0].textContent)
  ? [rmtbtn, rm2btn].forEach(e => e.disabled = true)
  : [rmtbtn, rm2btn].forEach(e => e.disabled = false);
},
dbsSync(txdata = {}) { // also triggered by (ibmConnect>)couchSync
  let pchlist = document.querySelector('#ecoesp0 #pchlist'),
    rmtlist = document.querySelector('#ecoesp0 #rmtlist');
  if (!dbpch || !txdata.RMTFR && !tm0urole) {
    document.querySelector('#ecoesp0 #rmtbtn').disabled = true;
  } else if (txdata.DBNAME || rmtlist.value && rmtlist.value === pchlist.value) {
    txdata = txCrdtlz( !caccts.length ? txdata
      : Object.assign( Object.assign( {}, ( !txdata.DBNAME
        ? caccts[rmtlist.selectedIndex - 1]
        : caccts.find(ob => ob.DBNAME === txdata.DBNAME) ) || {} ), txdata ) );
    if (txdata.USRNAM) { // txdata.RMTFR || // todo: why !tm0urole?
      document.querySelector('#econav0 #qcontxta').value = JSON.stringify(txdata, null, 2) + "\n";
      couchSync();
    } else {
      msgHandl("Alert: Data sync not attempted. Credentials are lacking.");
      pdbListGen();
      pfsListGen();
    }
  }
},
srvrSel() { // also triggered by attSel, srvrUpl
  let srvrhlps = document.querySelectorAll('#ecoesp0 #publcmt>div:nth-of-type(4) .help'),
    attlist = document.querySelector('#econav0 #attlist'),
    rm3list = document.querySelector('#ecoesp0 #rm3list'),
    uplbtn = document.querySelector('#ecoesp0 #uplbtn'),
    typpmgr = filewkg && (filewkg.file_type === "eco-publmgr" || filewkg.filefrags && true);
  srvrhlps.forEach(e => e.classList.add("is-hidden"));
  uplbtn.disabled = !(attlist.value || typpmgr) || !rm3list.value;
},
srvrUpl() {
  let attinp = document.querySelector('#econav0 #attinp'),
    attlist = document.querySelector('#econav0 #attlist'),
    rm3list = document.querySelector('#ecoesp0 #rm3list'),
    uplfpath = document.querySelector('#ecoesp0 #uplfpath'),
    typpmgr = filewkg && (filewkg.file_type === "eco-publmgr" || filewkg.filefrags && true),
    attExe = rslt => couchAtt( Object.assign(
      Object.assign({}, caccts.find(ob => ob.DBNAME === rm3list.value)), {
        FILEID: uplfpath.value.replace(/^[./]*([^/]+)\/.*|.*/, "$1")
          || ( /\.html?$/.test(attinp.value) || typpmgr
            ? (attinp.value || filewkg._id).replace(/\.\w+$/, "")
            : /\.s?css$/i.test(attinp.value) ? "-res-css"
            : reximg.test(attinp.value) ? "-res-img"
            : /\.m?js$/i.test(attinp.value) ? "-res-js" : "-res-x" ),
        ATTKEY: uplfpath.value.replace(/.*?([^/]+)$|.*/, "$1")
          || (/\.html?$/.test(attinp.value) || typpmgr ? "index.html" : attinp.value),
        CTYPE:  rslt && rslt.type,
        CBLOB:  rslt
      }));
  !(attlist.value || typpmgr) || !rm3list.value ? EC2.srvrSel()
  : !attlist.value ? attExe()
  : dbpch.getAttachment(attlist.value.replace(/^([^/]+)\/.*|.*/, "$1"), attinp.value)
    .then(attExe).catch(msgHandl);
},
imgLct() {
  let imgainp = document.querySelector('#ecoesp0 #eftass input[type=file]'),
    ifname = document.querySelector('#ecoesp0 #eftass .file-name'),
    pfslist = document.querySelector('#econav0 #pfslist'),
    optg = pfslist.value && pfslist.selectedOptions[0].parentElement.label;
  imgainp.files[0] && !imgainp.files[1]
    ? ifname.classList.add("has-text-dark")
    : ifname.classList.remove("has-text-dark");
  ifname.innerHTML = imgainp.files[1]
    ? "(" + imgainp.files.length + " files selected)"
    : imgainp.files[0] ? imgainp.files[0].name : "Locate image&hellip;";
  document.querySelector('#ecoesp0 #imgabtn').disabled
  = optg && optg !== "LOCAL temporary files" && imgainp.files[0] ? false : true;
},
jsconEval() {
  let jsctxta = document.querySelector('#ecoesp0 #jsctxta'),
    fncexp = jsctxta.value.trim().replace(/(?:[^]*\n|^)>\s*(?=(?:.|\n(?!>))*$)/, ""),
    rsltShow = rslt => jsctxta.value += "\n" + msgPrefmt(rslt, 1) + "\n> ";
  try { !fncexp || Promise.resolve(window.eval(fncexp)).then(rsltShow).catch(rsltShow);
  } catch (err) { rsltShow(err); }
},
jsconInj(evt) {
  let jsctxta = document.querySelector('#ecoesp0 #jsctxta');
  !evt || !evt.target.value
  || ( jsctxta.value = jsctxta.value
      .replace(/(?:\n|^)(?!> $).*$/, m => m + (m && "\n") + "> ")
    + evt.target.value
      .replace(/(?: +|^)(?:\\n|\xa0|\u2000-\u200f|\u2028|\u2029)/g, "\n") )
  && window.setTimeout(() => jsctxta.focus(), 1);
},
logOut() {
  let stoempswi = document.querySelector('#ecoesp0 #stoempswi'),
    dbpurgswi = document.querySelector('#ecoesp0 #dbpurgswi'),
    dbpurg1 = dbpurgswi.checked,
    logtbtn = document.querySelector('#ecoesp0 #logtbtn'),
    sethlps = document.querySelectorAll('#ecoesp0 #toolapp .help'),
    appiamd = document.querySelectorAll('#ecoesp0 #appidtoks, #ecoesp0 #appuinfo'),
    pchlist = document.querySelector('#ecoesp0 #pchlist'),
    dbs = Array.from(pchlist.options).map(op => op.value),
    ajsosRset = () => {
      lnkstor = [];
      tm0cntcs = {};
      updpch = {};
      updseq = {};
    };
  epsets = { uemail: "", uname: "", ungvn: "", unfam: "", teamid: "", loglast: "",
    dbdflt: "", prvmode: 0, hlstyle: "", discload: [1,0], discdays: 0, disctype: 0,
    tabsdflt: [], swapchks: [],
    appchks: [1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0] };
  idtoks = null;
  localStorage.removeItem("_ecoidtoks");
  msgHandl( "Alert: User credentials (used for remote-DB syncing) have been discarded."
    + ( stoempswi.checked ? "\nAlso, all user-generated, local-storage data has been deleted."
      : "\nHowever, local-storage data remains intact and available on device." )
    + ( dbpurg1 ? "\nAlso, all imported, database data has been deleted."
      : "\nHowever, previously imported, database data remains intact and available on device." ) );
  document.querySelector('#ecorender').innerHTML
  = '<p id="msgwelcome"><b>System Error:</b> Please restart web app.</p>';
  sethlps[0].classList.remove("is-hidden");
  logtbtn.disabled = true;
  appiamd.forEach(e => e.innerHTML = null);
  if (!stoempswi.checked) {
    caccts.forEach(ob => {
      delete ob.USRNAM;
      delete ob.PSSWRD;
    });
    localStorage["_couchaccts"] = JSON.stringify(caccts);
    localStorage["_ecopresets"] = JSON.stringify(epsets);
  } else {
    stoempswi.checked = false;
    caccts = [];
    localStorage.removeItem("_couchaccts");
    localStorage.removeItem("_ecoa00orig");
    localStorage.removeItem("_ecoa00path");
    localStorage.removeItem("_ecoclientid");
    localStorage.removeItem("_ecodscendpt");
    localStorage.removeItem("_ecopchupds");
    localStorage.removeItem("_ecopresets");
    localStorage.removeItem("_ecoxserver");
    localStorage.removeItem("__dbat");
    !window.localforage
    || localforage.keys( (err, keys) => err ? msgHandl(err)
      : Promise.all(keys.map(k => localforage.removeItem(k)))
        .then(() => {
          if (!dbpurg1) {
            ajsosRset();
            pdbListGen();
            pfsListGen();
            rmtListGen();
          }
        }).catch(err => {
          msgHandl(err);
          sethlps[0].classList.add("is-hidden");
          sethlps[1].classList.remove("is-hidden");
        }));
  }
  if (dbpurg1) {
    dbpurgswi.checked = false;
    dbpch = null;
    ajsosRset();
    localStorage.removeItem("_ecopchupds");
    !window.PouchDB || Promise.all( dbs.map( dbi =>
      !dbi || new PouchDB(dbi).destroy()
      .then(resp => msgHandl("Local DB successfully destroyed: " + dbi))
      .catch(err => {
        msgHandl("Alert: DB destruction attempted & failed.\n" + msgPrefmt(err));
        sethlps[0].classList.add("is-hidden");
        sethlps[1].classList.remove("is-hidden");
      }) ))
    .catch(msgHandl)
    .then(pdbListGen).then(pfsListGen).then(rmtListGen);
  }
}
};

(async function () { // hbarsCompile
  let achks = document.querySelectorAll('#ecoesp0 #toolapp input[type=checkbox]');
  caccts = ( /^\[.*{".+}\]$/.test(localStorage["_couchaccts"])
    && jsonParse(localStorage["_couchaccts"]) || caccts ).filter(ob => ob && typeof ob === 'object');
  epsets = /^{".+}$/.test(localStorage["_ecopresets"])
    && jsonParse(localStorage["_ecopresets"]) || epsets;
  "" + Object.keys(epsets) == ["uemail", "uname", "ungvn", "unfam", "teamid", "loglast",
    "dbdflt", "prvmode", "hlstyle", "discload", "discdays", "disctype",
    "tabsdflt", "swapchks", "appchks"]
  || ( localStorage["_ecopresets"] = JSON.stringify( epsets = Object.assign(
    { uemail: "", uname: "", ungvn: "", unfam: "", teamid: "myteam", loglast: "",
      dbdflt: "", prvmode: 0, hlstyle: "", discload: [1,0], discdays: 0, disctype: 0,
      tabsdflt: [], swapchks: [], appchks: [] }, epsets )));
  epsets.appchks.length === 32 || (epsets.appchks = Array.from(achks).map(e => e.checked));
  !/^{.*}$/.test(localStorage["_ecopchupds"])
    ? localStorage["_ecopchupds"] = JSON.stringify(updpch)
    : updpch = jsonParse(localStorage["_ecopchupds"]) || updpch;
  if (!window.Handlebars) {
    return document.querySelector('#econav0 #qcontxta').value
    += "**Alert: handlebars.js is not preloaded.\n\n";
  } else if (window.AppID) {
    appid = new AppID();
    try {
      await appid.init({
        clientId: localStorage["_ecoclientid"] || "47902519-fc5c-42a0-9d9c-80aa28548d43",
        discoveryEndpoint: localStorage["_ecodscendpt"]
          || "https://us-south.appid.cloud.ibm.com/oauth/v4/a2b64ee2-ae1f-4bd7-8752-293a686c70b4/.well-known/openid-configuration"
      });
    } catch (err) {
      prjsenet = {};
      msgHandl(err);
    }
  } else { prjsenet = {}; }
  tmplpdblist = await Handlebars.compile(document.querySelector('#pdblist-tmpl').innerHTML);
  tmplpdbblurbs = await Handlebars.compile(document.querySelector('#pdbblurbs-tmpl').innerHTML);
  tmplattlist = await Handlebars.compile(document.querySelector('#attlist-tmpl').innerHTML);
  tmplprjdisc = await Handlebars.compile(document.querySelector('#prjdisc-tmpl').innerHTML);
  tmplpfslist = await Handlebars.compile(document.querySelector('#pfslist-tmpl').innerHTML);
  tmpljdedft = await Handlebars.compile(document.querySelector('#jdedft-tmpl').innerHTML);
  tmpljdepty = await Handlebars.compile(document.querySelector('#jdepty-tmpl').innerHTML);
  tmplpchlist = await Handlebars.compile(document.querySelector('#pchlist-tmpl').innerHTML);
  tmpldirlist = await Handlebars.compile(document.querySelector('#dirlist-tmpl').innerHTML);
  tmplrmtlist = await Handlebars.compile(document.querySelector('#rmtlist-tmpl').innerHTML);
  tmplswaplist = await Handlebars.compile(document.querySelector('#swaplist-tmpl').innerHTML);
  tmpldbolist = await Handlebars.compile(document.querySelector('#dbolist-tmpl').innerHTML);
  tmplhlslist = await Handlebars.compile(document.querySelector('#hlslist-tmpl').innerHTML);
  assts2Blob();
  pdbListGen();
  pfsListGen();
  rmtListGen();
  swapListGen();
})();
})();
