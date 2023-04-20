/* JavaScript module: Note Manager */

const dwraps = [
  "<!DOCTYPE html>\n<html lang=en>\n<title>Note Manager</title>\n<meta charset=\"utf-8\">\n<meta name=viewport content=\"width=device-width, initial-scale=1\">\n\n<div id=nmwrap>\n",
  "\n</div>\n\n<script src=\"../../a00/-res-js/pouchdb.min.js\" type=\"text/javascript\"></script>\n<script src=\"../../a00/-res-js/pouchdb.all-dbs.min.js\" type=\"text/javascript\"></script>\n<script type=module>\n",
  "\n</script>\n</html>"
];

const nmpage = `<style type="text/css">
*, *::before, *::after { box-sizing: inherit; }
html {
  box-sizing: border-box;
  color: DimGrey; /* #696969 */
  font-size: 14px;
  min-width: 375px;
  overflow-wrap: break-word;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
p, dl, ol, ul, li, button, input, select, textarea, pre { margin: 0; }
p:not(:last-child), dl:not(:last-child), ol:not(:last-child), ul:not(:last-child),
blockquote:not(:last-child), pre:not(:last-child), table:not(:last-child) { margin-bottom: 1em; }
input[type=checkbox], input[type=radio] {
  position: relative;
  top: -1px;
  margin: 0;
  vertical-align: middle;
}
strong, mark, table th, .table, .table thead td, .table thead th,
.table tfoot td, .table tfoot th { color: inherit; }
hr {
  display: block;
  background-color: Gainsboro; /* #dcdcdc */
  height: 1px;
  margin: 1.5em 0;
  border: none;
}
figure {
  margin: 1em 0;
  padding: 0 1em;
}
.image {
  display: block;
  position: relative;
}
.image img {
  display: block;
  height: auto;
  max-width: 100%; /* not Bulma */
}
.table {
  background-color: white;
  border-collapse: collapse;
  border-spacing: 0;
}
.table td, .table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}
.table th:not([align]) { text-align: inherit; }
.table thead { background-color: transparent; }
.table thead td, .table thead th {
  border-width: 0 0 2px;
}
.table tfoot { background-color: transparent; }
.table tfoot td, .table tfoot th {
  border-width: 2px 0 0;
}
.table tbody { background-color: transparent; }
.table tbody tr:last-child td,
.table tbody tr:last-child th { border-bottom-width: 0; }
.textarea {
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical;
}
.textarea:not([rows]) {
  max-height: 40em;
  min-height: 8em;
}
.textarea[rows] { height: initial; }
.checkbox, .radio {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
}
.label {
  display: block;
  font-weight: 700;
}
.label:not(:last-child) { margin-bottom: 0.5em; }
.field:not(:last-child) { margin-bottom: 0.75rem; }
.field-label .label { font-size: inherit; }
.field-body .field .field { margin-bottom: 0; }
@media screen and (max-width: 719px) {
  .field-label { margin-bottom: 0.5rem; }
}
@media screen and (min-width: 720px), print {
  .field.is-horizontal { display: flex; }
  .field-label {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
  }
  .field-body {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
  }
  .field-body .field { margin-bottom: 0; }
  .field-body > .field { flex-shrink: 1; }
  .field-body > .field:not(.is-narrow) { flex-grow: 1; }
  .field-body > .field:not(:last-child) { margin-right: 0.75rem; }
}
.level {
  align-items: center;
  justify-content: space-between;
}
@media screen and (min-width: 720px), print {
  .level { display: flex; }
  .level > .level-item:not(.is-narrow) { flex-grow: 1; }
}
.level-item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
}
@media screen and (max-width: 719px) {
  .level-item:not(:last-child) { margin-bottom: 0.75rem; }
  .level-item > .level { display: flex; } /* not Bulma */
}
.media {
  align-items: flex-start;
  display: flex;
  text-align: inherit;
}
.media + .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  margin-top: 1rem;
  padding-top: 1rem;
}
.media-left, .media-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
.media-left { margin-right: 1rem; }
.media-right { margin-left: 1rem; }
.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: inherit;
}
@media screen and (max-width: 719px) {
  .media-content { overflow-x: auto; }
}
.tabs>ul, .tabs li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.tabs a {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
}
.tabs a:hover {
  border-bottom-color: #363636;
  color: #363636;
}
.tabs li { display: block; }
.tabs li.is-active a {
  border-bottom-color: #485fc7;
  color: #485fc7;
}
.tabs ul {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
}
.tabs .icon:first-child { margin-right: 0.5em; }
.tabs .icon:last-child { margin-left: 0.5em; }
.tabs.is-centered ul { justify-content: center; }
#nmwrap {
  font: normal 1rem/1.5 BlinkMacSystemFont, -apple-system, Helvetica, Arial, sans-serif;
  max-width: 960px;
  margin: 24px auto 96px;
}
#nmwrap h4, #nmwrap h5 { margin-bottom: 0; }
#nmwrap h4:not(last-child), #nmwrap h5:not(last-child) { margin-bottom: 0.5rem; }
#nmwrap a {
  color: #485fc7;
  cursor: pointer;
  text-decoration: none;
}
#nmwrap a:hover, #nmwrap .ilink:hover:not(:disabled) { color: CornFlowerBlue; }
#nmwrap .tabs a { color: DarkGrey; }
#nmwrap .tabs a:hover {
  border-bottom-color: #363636;
  color: #363636;
}
#nmwrap .tabs li.is-active a {
  border-bottom-color: #485fc7;
  color: #485fc7;
}
#nmwrap a:active, #nmwrap button:active, #nmwrap .btn1:active {
  box-shadow: 0 0 0 0.125em rgb(50 152 220 / 25%);
}
#nmwrap button, #nmwrap .btn1,
#nmwrap input:not([type=checkbox]):not([type=radio]), #nmwrap select {
  background: #f8f8f8;
  color: Grey; /* #808080 */
  font-size: calc(5rem / 6);
  line-height: 1.5rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  border: 0;
  border-radius: 0;
}
#nmwrap button, #nmwrap .btn1, #nmwrap input[type=button], #nmwrap select {
  cursor: pointer;
  white-space: nowrap;
}
#nmwrap button.opq0, #nmwrap .btn1.opq0 {
  background: transparent;
  max-width: 359px;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
#nmwrap button.bsml {
  line-height: 0.5rem;
  height: 1rem;
  padding: 0.25rem;
}
#nmwrap input::placeholder, #nmwrap textarea::placeholder {
  color: Grey;
  opacity: 0.5;
}
/* #nmwrap input:disabled:not([type=checkbox]):not([type=radio]) { color: #333; } */
#nmwrap select[multiple], #nmwrap .btn1,
#nmwrap .ccntr button, #nmwrap .ccntr input[type=button],
#nmwrap .ccntr input[type=text], #nmwrap .ccntr select { vertical-align: top; }
#nmwrap select:not(.anone) { padding: 0 0.25rem; }
#nmwrap select.anone {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
#nmwrap select.anone::-ms-expand { display: none; }
#nmwrap pre { font: normal medium/1.25 monospace; }
#nmwrap pre:not(.pwrap) {
  white-space: pre;
  overflow-wrap: normal;
  overflow-x: auto;
}
#nmwrap thead, #nmwrap tfoot { font-weight: bold; }
#nmwrap .table {
  line-height: normal;
  max-width: 960px;
}
#nmwrap .textarea { font: normal 0.75rem monospace; }
#nmwrap .media-left>.image.rspv128 {
  width: 128px;
  height: unset;
  margin: 0 1em 0 2em;
  padding: 0;
}
#nmwrap .media-left>.image>img {
  background-color: LightSteelBlue;
  width: 100%;
  min-height: 128px;
  cursor: pointer;
}
#nmwrap .media-left>.image>figcaption { font-size: small; font-style: italic; text-align: center; }
#nmwrap .field-label>.label:not(:last-child) { margin-bottom: 0; }
#nmwrap .hivory { background-color: Ivory; } /* #fffff0 */
#nmwrap .hhodew { background-color: HoneyDew; } /* #f0fff0 */
#nmwrap .hwsmok { background-color: WhiteSmoke; } /* #f5f5f5 */
#nmwrap .hgainl { background-color: #ececec; }
#nmwrap .hwarnl { background-color: #fff6e6; }
#nmwrap .hsuccl { background-color: #e8effc; }
#nmwrap .igreyd { color: DarkGrey; } /* #a9a9a9 */
#nmwrap .ilink { color: #485fc7; }
#nmwrap .iwarn { color: Orange; } /* #ffa500 */
#nmwrap .isucc, #nmwrap .ilink:hover:not(:disabled) { color: CornFlowerBlue; } /* #6495ed */
#nmwrap .textarea.iwarn { color: revert; border-color: Orange; }
#nmwrap .textarea.isucc { color: revert; border-color: CornFlowerBlue; }
#nmwrap .cfield:not(:last-child) { margin-bottom: 0.5rem; }
#nmwrap .ccntr:not(:last-of-type) { margin-right: 0.5rem; }
#nmwrap :not(.cfield)>.ccntr { display: inline-block; height: 1.5rem; margin-bottom: 0.5rem; }
#nmwrap .addns>.ccntr { margin-right: 0; }
#nmwrap .cleft {
  display: inline-block;
  line-height: 1.5rem;
  width: 126px;
  height: 1.5rem;
  text-align: right;
  white-space: nowrap;
}
#nmwrap .cleft + .ccntr input[type=text], #nmwrap .cleft + .ccntr select { width: 216px; }
#nmwrap .chelp { font-size: 0.75rem; line-height: normal; margin-top: 0.25rem; } /* 12px */
#nmwrap .fsz0c75 { font-size: 0.75rem; }
#nmwrap .fsz1c00 { font-size: 1rem; }
#nmwrap .lnht1c0 { line-height: 1; } /* 10.5px, 14px */
#nmwrap .lnhtnml { line-height: normal; } /* 12px, 16.5px */
#nmwrap .fltrt { float: right; }
#nmwrap .alnrt { text-align: right; }
#nmwrap .mtup0c25 { margin-top: -0.25rem; }
#nmwrap .cblock:not(:last-child) { margin-bottom: 1.5rem; }
#nmwrap .pwrap { white-space: pre-wrap; }
#nmwrap .diblk, #nmwrap .btn1 { display: inline-block; }
#nmwrap .dflow { display: flow-root; overflow-x: auto; }
#nmwrap .dnone { display: none; }
#nmwrap>#r2con {
  color: Orange;
  font: normal medium/1.25 monospace;
  margin: 0;
  padding: 0;
  word-wrap: normal;
  overflow-wrap: normal;
  overflow-x: hidden;
  white-space: pre;
}
#nmwrap #a1inp { width: 0; padding: 0; }
#nmwrap #a2inp { width: 1.5rem; padding: 0; text-align: center; }
#nmwrap #a3inp { font-size: calc(5rem / 6); width: calc(216px - 1.5rem); text-align: left; }
#nmwrap #a3inp>span { color: revert; opacity: 0.5; }
#vctrls #pdbssel { width: 136px; }
#vctrls #viewsel { width: 2rem; }
#vctrls #colssel, #vctrls #sortsel { width: 100px; }
#vctrls #descswi { margin-right: 2px; }
#vctrls #filtinp { width: 168px; }
#vctrls #moveinp { width: 114px; }
#nmtbl td:first-of-type { white-space: nowrap; }
#nmtbl td:nth-of-type(1), #nmtbl td:nth-of-type(2) { text-align: right; }
#nmtbl td[colspan="20"] {
  background: WhiteSmoke;
  text-align: left;
}
#nmtabs li:first-child>a { letter-spacing: -3px; }
#nmdata #qselbtn { margin-right: 7px; }
#pdbcfg .table {
  width: calc(219px + 35vw); /* 219/375px=58vw, 350/375px=93vw */
  max-width: calc(960px - 0.5rem);
  margin-left: 0.5rem;
}
#pdbcfg #pdbtbl td:nth-of-type(1),
#pdbcfg #t0tbod td:nth-of-type(1),
#pdbcfg #v0tbod td:nth-of-type(1) {
  width: 100px;
  max-width: 165px;
  overflow-x: clip;
  white-space: nowrap;
}
#pdbcfg #typtbl td { padding: 5px 2.5px; }
#pdbcfg #typtbl td:nth-of-type(1)>input { width: 120px; } /* 120/375px=32vw */
#pdbcfg #typtbl td:nth-of-type(2)>select { width: 84px; } /* 84/375px=22vw */
#pdbcfg #typtbl td:nth-of-type(3)>input {
  width: 35vw; /* 131/375px=35vw */
  max-width: calc(960px - 0.5rem - 120px - 84px - 15px);
}
#nmsets #jselbtn { margin: -23px 7px 0 0; }
@media screen and (max-width: 575px) {
  #nmwrap .media-left>.image.rspv128 { width: 48px; margin: 0; }
  #nmwrap .media-left>.image.rspv128>img { min-height: 48px; }
  #nmwrap .media-left>.image>figcaption { float: right; font-size: x-small; }
}
@media screen and (max-width: 719px) {
  #nmwrap .media-left>.image { margin: 0; }
  #nmwrap .field-label>button.bsml { margin: -1rem 0.5rem 0 0; }
}
@media screen and (min-width: 720px) and (max-width: 767px), print {
  #vctrls #pdbssel { width: 120px; }
  #vctrls #colssel, #vctrls #sortsel { width: 84px; }
  #vctrls #filtinp { width: 150px; }
  #vctrls #moveinp { width: 96px; }
}
@media screen and (min-width: 768px) {
  #cmain #pdbcfg .table { max-width: calc(720px - 0.5rem); }
  #cmain #pdbcfg #typtbl td:nth-of-type(3)>input { max-width: calc(720px - 0.5rem - 120px - 84px - 15px); }
  #cmain #vctrls #pdbssel { width: 120px; }
  #cmain #vctrls #colssel, #cmain #vctrls #sortsel { width: 84px; }
  #cmain #vctrls #filtinp { width: 150px; }
  #cmain #vctrls #moveinp { width: 96px; }
}
</style>
<h4 class=cfield>Note Manager</h4>
<pre id=r2con></pre>
<nav id=vctrls class="level cblock">
  <div class="level-item">
    <div class="level cfield">
      <span class=ccntr><select id=pdbssel title="DB-open select list">
      </select></span><span class=ccntr><select id=viewsel class=anone title="Notelist-view select list">
        <option>&nbsp;</option>
        <option>&nbsp;&plus;&ensp;New Note</option>
        <option>&nbsp;&check; DB Config</option>
        <option>&nbsp;&#x2732;&ensp;Settings</option>
        <option disabled>V1:noteclips</option>
        <option disabled>V2:organized</option>
        <option disabled>V3:mutables</option>
        <option disabled>V4:statics</option>
        <option disabled>V5:deleted</option>
      </select></span><span class=ccntr>Total: <span id=ftotal>_</span>&nbsp;</span>
    </div>
  </div>
  <div class="level-item">
    <div class="level cfield">
      <span class=ccntr><select id=colssel multiple size=1 title="Show/hide-columns select list">
      </select></span><span class=ccntr><select id=sortsel title="Sort-column select list">
      </select></span><span class=ccntr><label title="Notelist sort order"><input type=checkbox id=descswi /><a>Z-A</a></label>&nbsp;</span>
    </div>
  </div>
  <div class="level-item">
    <div class="level cfield">
      <span id=filtctrl class=ccntr>
      <input type=text id=filtinp placeholder="Search pattern&hellip;" /><button id=filtbtn class=hgainl title="Notelist filter">
      FILT</button></span><span id=bulkctrl class="ccntr dnone"><span class=cfield>
      <span class=ccntr><input type=text id=moveinp placeholder="New subdir&hellip;" /><button id=movebtn class="isucc hsuccl" title="Note subdirectory reassigning">
      MOV</button><button id=editbtn class="isucc hsuccl dnone" title="Multiple notes editing">
      BULK EDIT</button></span><span class=ccntr><button id=delbtn class="iwarn hwarnl" title="Multiple notes deleting">
      DEL</button></span></span></span><span class=ccntr><a id=blktrig title="Checkboxes toggle">&#x2611;</a></span>
    </div>
  </div>
</nav>
<div id=nmflow class="dflow cblock dnone">
<table id=nmtbl class=table>
  <thead>
    <tr>
      <td>
        <span>#</span><a class=dnone>&#x25b6;</a>
        <input type=checkbox class=dnone />
      </td>
      <td>Subdir</td>
      <td>Note ID</td>
      <td>Type</td>
      <td>Updated</td>
      <td>Up'd By</td>
      <td>Up'd Ver</td>
      <td>Up'd Misc</td>
      <td>Created</td>
      <td>Cr'd By</td>
      <td>Cr'd Ver</td>
      <td>Cr'd Misc</td>
      <td>Full Name</td>
      <td>1st Names</td>
      <td>Last Name</td>
      <td>Username</td>
      <td>Roles</td>
      <td>Groups</td>
      <td>Image</td>
      <td>Link Ref</td>
      <td>From</td>
      <td>To</td>
      <td>Subject</td>
      <td>Headline</td>
      <td>Time</td>
      <td>Place</td>
      <td>People</td>
      <td>Attach's</td>
    </tr>
  </thead>
  <thead class=dnone>
    <tr>
      <td># <input type=checkbox class=dnone /></td>
      <td>Chg Seq</td>
      <td>Note ID</td>
      <td>Revision#</td>
    </tr>
  </thead>
  <tbody></tbody>
  <tfoot>
    <tr>
      <td>
        <span>#</span><a class=dnone>&#x25b6;</a>
        <input type=checkbox class=dnone />
      </td>
      <td>Subdir</td>
      <td>Note ID</td>
      <td>Type</td>
      <td>Updated</td>
      <td>Up'd By</td>
      <td>Up'd Ver</td>
      <td>Up'd Misc</td>
      <td>Created</td>
      <td>Cr'd By</td>
      <td>Cr'd Ver</td>
      <td>Cr'd Misc</td>
      <td>Full Name</td>
      <td>1st Names</td>
      <td>Last Name</td>
      <td>Username</td>
      <td>Roles</td>
      <td>Groups</td>
      <td>Image</td>
      <td>Link Ref</td>
      <td>From</td>
      <td>To</td>
      <td>Subject</td>
      <td>Headline</td>
      <td>Time</td>
      <td>Place</td>
      <td>People</td>
      <td>Attach's</td>
    </tr>
  </tfoot>
  <tfoot class=dnone>
    <tr>
      <td># <input type=checkbox class=dnone /></td>
      <td>Chg Seq</td>
      <td>Note ID</td>
      <td>Revision#</td>
    </tr>
  </tfoot>
</table>
</div>
<div id=nmclip class="cblock dnone"></div>
<nav id=nmtabs class="tabs cblock">
  <ul>
    <li data-tabidx=0 class="is-active">
      <a>&blk14;&blk14;</a>
    </li>
    <li data-tabidx=1>
      <a><span class=icon>&plus;</span><span>New Note</span></a>
    </li>
    <li data-tabidx=2>
      <a><span class=icon>&check;</span><span>DB Config</span></a>
    </li>
    <li data-tabidx=3>
      <a><span class=icon>&#x2732;</span><span>Settings</span></a>
    </li>
  </ul>
</nav>
<div id=nmdata class=cblock>
  <h4>Just getting started?</h4>
  <p>
    &emsp;Add a new <em>database</em> ( <span class=hwsmok>&plus; New DB</span> )
    using the 1<sup>st</sup> select list of the control panel&nbsp;above.
  </p>
</div>
<div id=pfadd1 class="cblock dnone">
  <div id=pfahlp>
    <h4>New Note</h4>
    <p>
      &emsp;<em>Use Tip:</em> You must first create/open a database before you can add
      a new&nbsp;<em>note</em>.
    </p>
  </div>
  <div id=pfacnt class=dnone></div>
</div>
<div id=pdbcfg class="cblock dnone">
  <label class="fltrt mtup0c25 fsz0c75 lnht1c0 ilink"><input type=checkbox id=use1swi />
  Show<br />use guides</label>
  <h4>Database Setup &plus; Configuration</h4>
  <p class=dnone>
    &emsp;You can switch to any previously created, local database by using
    the 1<sup>st</sup> select list of the top control&nbsp;panel.
  </p>
  <h5>New Database Creation</h5>
  <p class=dnone>
    &emsp;To <em>create</em> a new local database, enter your username or email,
    a new DB name and a short description of its intended purpose;
    (And, optionally, set your own DB configurations, below;)
    Then, tap the associated button,&nbsp;here.
  </p>
  <div class=cfield>
    <span class="ccntr cleft">Username or email</span><span class=ccntr><input type=text id=una2inp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">New DB name</span><span class=ccntr><input type=text id=pdb0inp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">DB description</span><span class=ccntr><input type=text id=pdb1inp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=pdb0btn class="isucc hsuccl">CREATE</button></span>
    <div class="chelp isucc dnone">DB creation is successful.</div>
    <div class="chelp iwarn dnone">DB creation failed.</div>
  </div>
  <h5>Old Data Destruction</h5>
  <p class=dnone>
    &emsp;To <em>destroy</em> an existing database&mdash;or to <em>compact</em> it
    (i.e., remove all versions of each <em>note</em> but the last one)&mdash;enter
    the same name as the currently selected database and tap the appropriate button,&nbsp;here.
  </p>
  <div class=cfield>
    <div class=fsz0c75><em>ALERT:</em> This operation cannot be reversed.</div>
    <span class="ccntr cleft">Selected DB name</span><span class=ccntr><input type=text id=ddelinp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=dbd0btn class="isucc hsuccl">
    COMPACT</button></span><span class=ccntr><button id=dbd1btn class="iwarn hwarnl">
    DESTROY</button></span>
    <div class="chelp isucc dnone">Data destruction is successful.</div>
    <div class="chelp iwarn dnone">Data destruction failed.</div>
  </div>
  <h5>Remote DB Clone, Sync</h5>
  <p class=dnone>
    &emsp;To <em>sync</em> the data of a remote database clone to the selected local database,
    enter the website origin, username and password of your corresponding, <em>CouchDB</em> compatible,
    account database (e.g., on <em>IBM&nbsp;Cloudant</em>); (Or, tap the <em>PREFILL</em> button to
    fill in these fields with the account info that was entered previously;) Then, when the device
    is online (internet connected), tap the <em>SYNC</em> button,&nbsp;here. Wait about a minute for
    confirmation of a successful <em>sync</em> operation.
  </p>
  <div class=cfield>
    <span class="ccntr cleft">DB origin</span><span class=ccntr><input type=text id=originp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Username</span><span class=ccntr><input type=text id=dbuninp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Password</span><span class=ccntr><input type=text id=dbpwinp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">
    PW prefill</span><span class=ccntr><label><input type=checkbox id=pw1swi disabled />
    <a>Store password on device</a></label></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=pfilbtn class="isucc hsuccl">
    PREFILL</button></span><span class=ccntr><button id=syncbtn class="isucc hsuccl">
    SYNC</button></span>
    <div class="chelp isucc dnone">Data sync is successful.</div>
    <div class="chelp iwarn dnone">Data sync failed.</div>
  </div>
  <hr />
  <h4>About the Selected, Local DB</h4>
  <p class=dnone>
    &emsp;You can switch to any previously created, local database by using
    the 1<sup>st</sup> select list of the top control&nbsp;panel.
  </p>
  <table id=pdbtbl class="table cfield">
    <tbody>
      <tr><td>DB name:</td><td id=pdbnam></td></tr>
      <tr><td>Notes total:</td><td id=pdbtot></td></tr>
      <tr><td>Update seq#:</td><td id=pdbseq></td></tr>
      <tr><td>Updated on:</td><td id=pdbupd></td></tr>
      <tr><td>Created on:</td><td id=pdbset></td></tr>
      <tr><td>Created by:</td><td id=pdbusr></td></tr>
      <tr><td>Description:</td><td id=pdbdsc></td></tr>
    </tbody>
  </table>
  <div class="cfield lnhtnml">
    &emsp;<label><input type=checkbox id=openswi disabled /> <a>Set as default DB</a></label>
    <br />&emsp;&emsp; <span class=fsz0c75>(Open this DB directly on next startup.)</span>
  </div>
  <h5>"New Note" Type/Template</h5>
  <p class=dnone>
    &emsp;You can add a new <em>note</em> ( <span class=hwsmok>&plus; New Note</span> )
    to the database by using the 2<sup>nd</sup> select list of the top control panel
    (or, by activating the corresponding tab beneath the notelist&nbsp;<em>view</em>).
  </p>
  <p class=dnone>
    &emsp;Be aware that a database <em>note</em>
    (a.k.a., <em>file</em> or <em>document</em> or <em>Couch doc</em> or <em>entry</em>) is actually
    a stored JavaScript object (with arbitrary <em>keys</em> and&nbsp;<em>values</em>).
  </p>
  <p class=dnone>
    &emsp;As such, the database is more manageable when all of its <em>notes</em>
    share a common structure (i.e., have the same set of object-property&nbsp;<em>keys</em>).
  </p>
  <p class=dnone>
    &emsp;Therefore, to keep a new database manageable, decide in advance
    what its function is by committing to one object structure as the default template for
    every new <em>note</em>&mdash;and selecting it (either a preset <em>note</em> type
    or a new creation of your own),&nbsp;here.
  </p>
  <div class=cfield>
    <span class="ccntr cleft">Default note type</span><span class=ccntr><select id=t01sel></select></span>
  </div>
  <table id=typtbl class="table cfield">
    <thead>
      <tr><th>Note-object-<br />property KEY</th>
      <th>VALUE<br />datatype</th><th>VALUE<br />pre-fill</th></tr>
    </thead>
    <tbody id=t1tbod></tbody>
  </table>
  <div class=cfield>
    <span class="ccntr cleft">Custom type label</span><span class=ccntr><input type=text id=t01inp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Type description</span><span class=ccntr><input type=text id=t02inp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=t0abtn class=hgainl><span class=isucc>&plus;</span>
    NEW TYPE</button></span>
    <div class="chelp isucc dnone">Add-type operation is successful.</div>
    <div class="chelp iwarn dnone">Add-type operation failed.</div>
  </div>
  <table class="table cfield">
    <tbody id=t0tbod></tbody>
  </table>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=t0dbtn class=hgainl><span class=iwarn>&#x2715;</span>
    DEL TYPE</button></span>
    <div class="chelp isucc dnone">Delete-type operation is successful.</div>
    <div class="chelp iwarn dnone">Delete-type operation failed.</div>
  </div>
  <h5>Notelist Views</h5>
  <p class=dnone>
    &emsp;You can switch to any notelist <em>view</em> by using the 2<sup>nd</sup> select list
    of the top control&nbsp;panel.
  </p>
  <p class=dnone>
    &emsp;Five different <em>views</em> are available
    (<span class=hwsmok>V1</span>&ndash;<span class=hwsmok>V5</span>).
  </p>
  <p class=dnone>
    &emsp;Customize and preserve any one or more of the five <em>views</em> by selecting one and
    adjusting the subsequent view controls, above&mdash;then, returning directly back here to add
    the resulting new <em>view</em>,&nbsp;below.
  </p>
  <p class=dnone>
    &emsp;Also, select one (either a preset or one of your own) as the default
    <em>view</em>&mdash;i.e., the <em>view</em> that will be displayed first each time the
    database is&nbsp;opened.
  </p>
  <p class=dnone>
    &emsp;<em>Pro Tip:</em> To further refine a <em>view</em>, or to cut a lengthy notelist into
    several smaller, more manageable sized chunks, provide the ID of a custom <em>CouchDB design
    doc</em> that has been added to the database; Then, create one or more notelist <em>view</em>s,
    and label each new <em>view</em> with the same name as its corresponding <em>design-doc view</em>
    key (a pre-written <em>map/reduce</em> function, a filtering algorithm, that is stored within
    that <em>design&nbsp;doc</em>).
  </p>
  <div class="cfield">
    <span class="ccntr cleft"><em>Design doc</em></span><span class=ccntr><input type=text id=v03inp placeholder="e.g.: _design/notesorter2" /></span>
  </div>
  <div class="cblock cfield">
    <span class="ccntr cleft">Default <em>view</em></span><span class=ccntr><select id=v01sel></select></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Custom <em>view</em> label</span><span class=ccntr><input type=text id=v01inp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft"><em>View</em> description</span><span class=ccntr><input type=text id=v02inp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=v0abtn class=hgainl><span class=isucc>&plus;</span>
    NEW VIEW</button></span>
    <div class="chelp isucc dnone">Add-view operation is successful.</div>
    <div class="chelp iwarn dnone">Add-view operation failed.</div>
  </div>
  <table class="table cfield">
    <tbody id=v0tbod></tbody>
  </table>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=v0dbtn class=hgainl><span class=iwarn>&#x2715;</span>
    DEL VIEW</button></span>
    <div class="chelp isucc dnone">Delete-view operation is successful.</div>
    <div class="chelp iwarn dnone">Delete-view operation failed.</div>
  </div>
</div>
<div id=nmsets class="cblock dnone">
  <label class="fltrt mtup0c25 fsz0c75 lnht1c0 ilink"><input type=checkbox id=use2swi />
  Show<br />use guides</label>
  <h4><em>Note Mgr</em> App Settings</h4>
  <p class=dnone>
    &emsp;For convenience, choose a default database, and associated <em>view</em>,
    that will be directly opened and displayed at each&nbsp;startup.
  </p>
  <p class=dnone>
    &emsp;Optionally, select a <em>contacts</em> database so that the app can locate any contact
    details or photos that are referenced from within another, group-shared database. Be aware that
    photos must be stored altogether as the attachments of a <em>note</em> (of your <em>contacts</em>
    database) that is specially named&nbsp;"<code class="fsz0c75 hwsmok">-res-img</code>".
  </p>
  <p class=dnone>
    &emsp;Also optionally, identify yourself by username and/or email, which will be associated with
    every database that you create. This becomes useful if, for example, your DB data is ever synced
    to a cloud server and/or consolidated with other users' data; User identities facilitate a team's
    management of multiple&nbsp;DBs.
  </p>
  <div class=cfield>
    <span class="ccntr cleft">Default DB</span><span class=ccntr><select id=opensel></select></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Default <em>view</em></span><span class=ccntr><select id=v02sel></select></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Contacts DB</span><span class=ccntr><select id=cntcsel></select></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Username</span><span class=ccntr><input type=text id=unaminp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">User email</span><span class=ccntr><input type=text id=uemlinp /></span>
  </div>
  <hr />
  <h4>Wipe user data stored on device</h4>
  <p class=dnone>
    &emsp;App settings and DB configurations are stored in the browser's <em>Local&nbsp;Storage</em>.
  </p>
  <p class=dnone>
    &emsp;Each database's collection of <em>notes</em> is stored in the browser's
    <em>IndexedDB&nbsp;Storage</em>.
  </p>
  <p class=dnone>
    &emsp;Be aware that these data stores are not secure; They may be viewed by any prying person who
    is allowed access to the device, even without the use of the <em>Note&nbsp;Mgr</em>&nbsp;app.
  </p>
  <p class=dnone>
    &emsp;To completely destroy either one or both stores of user data, select the appropriate
    checkbox(es), enter the same username or email as above and tap the associated button,&nbsp;here.
  </p>
  <p class=dnone>
    &emsp;<em>Use Tip:</em> To destroy just one DB without affecting any other DB, use the
    <em>DB&nbsp;Config</em> control panel&nbsp;instead.
  </p>
  <p class=dnone>
    &emsp;<em>Pro Tip:</em> To view the available lists of <em>IndexedDB&nbsp;Storage</em> and
    <em>Local&nbsp;Storage</em> keys (or a key-specified value) before/after wiping data from the
    device, enter each of the following commands into the <em>Browser Command UI</em>,&nbsp;below.
    <br />&emsp;&bull; <code class="fsz0c75 hwsmok">PouchDB.allDbs()</code>
    (<em>Note&nbsp;Mgr</em>&nbsp;DB&nbsp;names)
    <br />&emsp;&bull; <code class="fsz0c75 hwsmok">indexedDB.databases()</code>
    (all&nbsp;DB&nbsp;names)
    <br />&emsp;&bull; <code class="fsz0c75 hwsmok">{ let k, keys = []; for (k in localStorage)
    keys.push(k); keys; }</code> (all&nbsp;<em>Local&nbsp;Storage</em>&nbsp;keys)
    <br />&emsp;&bull; <code class="fsz0c75 hwsmok">localStorage._nm0sets</code>
    (<em>Note&nbsp;Mgr</em>&nbsp;app&nbsp;settings)
    <br />&emsp;&bull; <code class="fsz0c75 hwsmok">localStorage._nm0cfgs</code>&emsp;(<em>Note&nbsp;Mgr</em>&nbsp;DB&nbsp;configs)
  </p>
  <div class=cfield>
    <div class=fsz0c75><em>ALERT:</em> This operation cannot be reversed.</div>
    &emsp;<label class=iwarn><input type=checkbox id=slocswi /> Empty local storage</label>
    <br />&emsp;<label class=iwarn><input type=checkbox id=spdbswi /> Purge all local DBs</label>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">Username or email</span><span class=ccntr><input type=text id=wipeinp /></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;
    </span><span class=ccntr><button id=wipebtn class="iwarn hwarnl">
    WIPE DATA</button></span>
    <div class="chelp isucc dnone">Data wipe is successful.</div>
    <div class="chelp iwarn dnone">Data-wipe attempt failed.</div>
  </div>
  <hr />
  <h4>Browser Command UI</h4>
  <p class=dnone>
    &emsp;<em>How it works:</em>
    The "<code class=hwsmok>&gt;</code>" symbol in the following text field is a
    <em>command prompt</em>. The prompt accepts any JavaScript command or expression. When a command
    or an expression is entered on the <em>command line</em> (i.e., after the prompt) and the field
    is de-focused (by tapping outside the field), the command or expression is executed by the
    browser and the final result is then displayed in the next line(s) of the text&nbsp;field.
  </p>
  <button id=jselbtn class="fltrt bsml ilink" data-seltrg=js2txta>sel</button>
  <textarea id=js2txta class=textarea rows=31>&gt; </textarea>
</div>`;

const nmscr = `let cvs, fwg, p2Gen, rva2, rval, ss0, ss1, vbas, vusr,
  j = 0,  tidx = 0, vidx = 0,
  aurls = {},
  cntcs = {},
  nm0cfgs = {},
  nm0sets = {},
  txd1 = {
    DBNAME: "",
    FILEID: "", //"_design/ecosorter",
    VIEW:   "", //"files-idxlist",
    OPTS:   {}, //{ since: 0 }
    u1s:    []
  },
  copts = [ \`
          <option value="subdir">Subdir</option>
          <option value="id">Note ID</option>
          <option value="file_type">Type</option>
          <option value="file_updated.timestamp">Updated</option>
          <option value="file_updated.username">Up'd By</option>
          <option value="file_updated.version">Up'd Ver</option>
          <option value="file_updated.misc">Up'd Misc</option>
          <option value="file_created.timestamp">Created</option>
          <option value="file_created.username">Cr'd By</option>
          <option value="file_created.version">Cr'd Ver</option>
          <option value="file_created.misc">Cr'd Misc</option>
          <option value="name_full3">Full name</option>
          <option value="name_full1">1st names</option>
          <option value="name_full2">Last name</option>
          <option value="name_user">Username</option>
          <option value="roles">Roles</option>
          <option value="team_groups">Groups</option>
          <option value="image_src">Image</option>
          <option value="linkref">Link Ref</option>
          <option value="from">From</option>
          <option value="to">To</option>
          <option value="subject">Subject</option>
          <option value="headline">Headline</option>
          <option value="time">Time</option>
          <option value="place">Place</option>
          <option value="people">People</option>
          <option value="_attachments">Attach's</option>
        \`, \`
          <option value="seq">Chg Seq</option>
          <option value="id">Note ID</option>
          <option value="rev">Revision#</option>
        \` ],
  qslrs = [
    '#vctrls #colssel>option:nth-of-type(2), '
    + '#nmtbl thead:first-of-type td:nth-of-type(3), '
    + '#nmtbl tfoot:first-of-type td:nth-of-type(3)',
    '#nmtbl thead:first-of-type td:first-of-type>span, '
    + '#nmtbl tfoot:first-of-type td:first-of-type>span',
    '#nmtbl thead:first-of-type td:first-of-type>a, '
    + '#nmtbl tfoot:first-of-type td:first-of-type>a',
    '#nmtbl thead:not(.dnone) td:first-of-type>input, '
    + '#nmtbl tfoot:not(.dnone) td:first-of-type>input',
    '#nmtbl thead:not(.dnone) td:first-of-type>input, '
    + '#nmtbl tbody>tr>td:first-of-type>input, '
    + '#nmtbl tfoot:not(.dnone) td:first-of-type>input',
    '#nmclip .media-left figcaption, '
    + '#nmclip .media-content>details:first-of-type>summary>strong, '
    + '#nmclip .media-content>details:first-of-type>summary>em, '
    + '#nmclip .media-content>details:first-of-type>div, '
    + '#nmclip .media-content>details:last-of-type>summary, '
    + '#nmclip .media-content>details:last-of-type>div>div',
    '#nmtbl thead:not(.dnone) td:first-of-type>input.dnone',
    '#nmclip .media-content>details:first-of-type>summary>span.dnone',
    '#nmtbl tbody>tr:not([id])>td:first-of-type>input:checked',
    '#nmclip .media-content>details:first-of-type>summary input:checked',
    '#nmtbl tbody>tr:not([id])>td:first-of-type>input',
    '#nmclip .media-content>details:first-of-type>summary input',
    '#nmclip .media-left>.image>img, #nmclip .media-content>details:first-of-type a'
  ],
  atthtm = \`
  <hr />
  <div class=cfield>
    <span class="ccntr cleft">Add attachments</span><span class=ccntr><label>\`
      + \`<input id=a1inp type=file multiple />\`
      + \`<span id=a2inp class="btn1 hgainl ilink">&#x2726;</span>\`
      + \`<span id=a3inp class=btn1><span>Locate image&hellip;</span></span>
    </label></span>
  </div>
  <div class=cfield>
    <span class="ccntr cleft">&nbsp;</span><span class=ccntr>\`
    + \`<input type=text id=imganm2 placeholder="Rename as attachment&hellip;" /></span>
  </div>\\n\`,
  nit = document.createElement('i'),
  nmthds = document.querySelectorAll('#nmtbl thead'),
  nmtbod = document.querySelector('#nmtbl tbody'),
  nmtfts = document.querySelectorAll('#nmtbl tfoot'),
  tabncs = document.querySelectorAll('#nmtabs li>a'),
  nmpans = [nmdata, pfadd1, pdbcfg, nmsets],
  actrls = [openswi, opensel, v02sel, cntcsel, unaminp, uemlinp],
  pftyps = {
    new: {
      _id: "",
      _rev: ""
    },
    scrap: {
      _id: "",
      _rev: "",
      file_type: "scrap",
      ts_created: 0,
      ts_updated: 0,
      loc_subdir: "",
      content: ""
    },
    srcdoc: {
      _id: "",
      _rev: "",
      file_type: "srcdoc",
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
    event: {
      _id: "idGen('~E', 0, un0)",
      _rev: "",
      file_type: "event",
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
    memo: {
      _id: "idGen('~m', 0, un0)",
      _rev: "",
      file_type: "memo",
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
    contact: {
      _id: "!groupID-uname",
      _rev: "",
      file_type: "contact",
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
  },
  rexsd = /^[.-][\\w!.*+~-]+\\/?$/,
  rexts = /^m[rs]\\.? +|^mrs\\.? +|[.,;:/]/gi,
  rexns = /^(?:m[rs]\\b\\.?|mrs\\b\\.?|) *(.*?) *((?:\\bde +|\\bvon +|)['‘’\\w-]+)([ ,]*\\b[js]r\\.?|[ ,]*\\b[ivx]+|)$/i,
  r2Show = r => { r2con.textContent
    += ( !r || typeof r !== 'object' || r instanceof Error && r.constructor && !r.reason
      ? r : JSON.stringify(r, 0, 2) ) + "\\n\\n" },
  fncTry = (fnc, a, e) => { try { return fnc(a) }
    catch (err) { return e > 1 ? a : e ? err : undefined } },
  htmTxt = str => str.replace(/&(?=#?\\w+;)/g, "&amp;").replace(/<(?=!|\\/?[a-z])/gi, "&lt;"),
  valStr = (v, sp) => v == null ? ""
    : v instanceof Error && v.constructor && !v.reason ? v
    : typeof v === 'object' ? JSON.stringify(v, 0, sp)
    : typeof v !== 'string' ? "" + v
    : !/^{\\s*"[^]+}$|^\\[[^]+\\]$/.test(v.trim()) ? v
    : JSON.stringify(fncTry(JSON.parse, v), 0, sp) || v,
  mP1 = (str, lang) => lang !== "md" && ( lang
    || !/^(?:#+| ? ?[>*~-]| ? ?\\d+\\.) +\\S[^]*?\\n(?:#+| ? ?[>*~-]| ? ?\\d+\\.) +\\S/m.test(str) )
    ? [str, lang] : [ str
      .replace( /([^]*?)((?:\\s|\\W|^)(\\*\\*?|__?)(\\*\\*?|__?|)[^\\s*_][^]*?[^\\s*_]\\4\\3(?=\\s|\\W|$)|$)/g,
        (c, m1, m2) => m1.replace(/\\*/g, "\\\\x2a;").replace(/_/g, "\\\\x5f;") + m2 ), "md" ],
  jB1 = (str, lang) => typeof str === 'object' ? [valStr(str, 2), "json"]
    : !window.js_beautify || lang !== "js" ? mP1(valStr(str), lang)
    : [ js_beautify( str, { "indent_size": 2, "space_after_anon_function": 1,
        "break-chained-methods": 1, "keep-array-indentation": 1 }), lang ],
  jP1 = (str, lang, cl) => !([str, lang] = jB1(str, lang)) ? str
    : "\\n<pre class=\\"" + (cl != null ? cl : "pwrap") + " hljs\\">"
      //#nmwrap pre>pre.hljs { margin: 0; white-space: inherit; }
      + ( !window.hljs ? htmTxt(str)
        : (!lang ? hljs.highlightAuto(str) : hljs.highlight(str, {language: lang})).value )
        .replace(lang !== "md" ? /^\\*$/ : /\\\\x2a;/g, "*")
        .replace(lang !== "md" ? /^_$/ : /\\\\x5f;/g, "_") + "</pre>\\n"
      + (!window.hljs ? "" : "<style>@import \\"" + (aurls[nm0sets.hlsty] || "") + "\\";</style>\\n"),
  js2Eval = () => {
    let fncexp = js2txta.value.trim().replace(/(?:[^]*\\n|^)>\\s*(?=(?:.|\\n(?!>))*$)/, ""),
      js2Show = r => js2txta.value += "\\n" + valStr(r, 2) + "\\n> ";
    !fncexp || Promise.resolve(fncTry(window.eval, fncexp, 1)).then(js2Show).catch(js2Show);
  },
  txtaSel = ta => !(ta.focus || (ta = window.eval(ta.target.dataset.seltrg)))
    || ta.focus() || ta.setSelectionRange(0, ta.textLength),
  typTest = (val, l2) => [ typeof ( val = typeof val !== 'string' ? val : fncTry(JSON.parse, val)
      || ( /^\\d+$/.test(val.trim()) ? +val
        : /^(false|null|true)$/.test(val.trim()) ? eval(val) : val ) ),
    val === null ? "null obj" : !Array.isArray(val) ? typeof val : l2 || !val.length ? "array"
      : "arr of " + { string:"str", number:"nbr", boolean:"bln", object:"obj", array:"arr", a:"any" }
        [val.reduce((a, b) => typTest(b, 1)[1] === a && a, typTest(val[0], 1)[1]) || "a"], val ],
  dataVld = evt => {
    let k = evt.target.id.replace(/^p0/, ""),
      v = evt.target.value;
    evt.target.classList.remove("isucc", "iwarn");
    valStr(v) === valStr(fwg[k])
    || evt.target.classList.add(typTest(v)[1] === typTest(fwg[k])[1] ? "isucc" : "iwarn")
  },
  storDel = () => {
    if ( !wipeinp.value
    || wipeinp.value !== nm0sets.uname && wipeinp.value !== nm0sets.uemail ) { return; }
    let hlps = nmsets.querySelectorAll('.chelp'),
      dbs = Array.from(opensel.options).map(o => o.value);
    !slocswi.checked || (uemlinp.value = unaminp.value = una2inp.value = "")
    || !(nm0sets = {}) || !(nm0cfgs = {}) || hlps[0].classList.remove("dnone")
    || ["_nm0sets", "_nm0cfgs"].forEach(e => localStorage.removeItem(e))
    || r2Show("ALERT: Close/remove app directly, or local storage might be re-engaged.");
    !spdbswi.checked || (txd1.DBNAME = "") || !window.PouchDB || Promise.all( dbs.map( dbi =>
      !dbi || PouchDB(dbi).destroy() //|| !PouchDB.allDbs
      .then(trsp => r2Show("Local DB successfully destroyed: " + dbi))
      .catch(err => {
        r2Show("ALERT: DB destruction attempted & failed.\\n" + valStr(err, 2));
        hlps[0].classList.add("dnone");
        hlps[1].classList.remove("dnone");
      }) ))
    .catch(r2Show)
    .then( () => (cntcsel.innerHTML = opensel.innerHTML = pdbssel.innerHTML = "")
      || !hlps[1].classList.contains("dnone") || hlps[0].classList.remove("dnone") );
    //.then(PouchDB.allDbs);
  },
  ts1Fmt = nbr => !nbr ? "" : new Date(nbr).toISOString().replace(/T.+$/, ""),
  ts2Fmt = str => !str ? ""
    : new Date(str).toUTCString().replace(/.+(\\d{2} [a-z]{3} \\d{4}).+/i, "$1"),
  imgLkup = doc => doc && aurls[ (doc.image_src || "").replace(/^(?!https?:).*\\//, "")
    || (cntcs[(doc.file_updated || doc.file_created || "").username] || "").image_src
    || !doc.image_src && doc.file_created && "avatar000.png" ] || doc.image_src || "",
  idGen = (pfx, tsx, unx) => (/^[a-z~][a-z]$|^~[a-z]{4}_/i.test("" + pfx) ? pfx : "~p")
    + ( typeof tsx === 'string' && /^[\\w:.-]*$/.test(tsx) ? tsx
      : (tsx && new Date(tsx) || new Date()).toISOString().replace(/\\.\\w+$|[:-]/g, "") )
    + (typeof unx === 'string' && /^[\\w@.-]*$/.test(unx) ? unx : "user000"),
  nbrX = v => v && (Array.isArray(v) ? v : ("" + v).split("."))
    .map(n => !n ? "" : ("" + n).length > 4 ? n : ("000" + n).substr(-4, 4)).join("."),
  nmsX = (nf, x) => x === 1 || x < 2 && !cvs.includes("name_full2")
      && (/name_full1/.test(ss0) || !cvs.includes("name_full3"))
    ? (!x && !cvs.includes("name_full1") ? "" : (nf || "").trim().replace(rexns, "$1"))
    : x === 2 || !x && !cvs.includes("name_full1") && !cvs.includes("name_full3")
    ? (nf || "").trim().replace(rexns, "$2")
    : !/name_full2/.test(ss0) ? nf || "" : (nf || "").trim().replace(rexns, "$2, $1$3"),
  ptyX = d => ss0 === "subdir" ? d.loc_subdir || (d.file_updated || d.file_created || "").subdir
    || ( !(/^eco-./.test(d.file_type) || ["loc_subdir", "file_created"].some(p => d.hasOwnProperty(p)))
      ? " " : "!" )
    : !ss1 ? ( !d[ss0] && /^[.-]./.test(d._id) && ss0 === "file_type" ? "(app assets)"
      : /name_full/.test(ss0) ? nmsX(d.name_full).replace(rexts, "") || d.name_user || d._id
      : ss0 === "_attachments" ? nbrX(Object.keys(d[ss0] || "").length)
      : ss0 !== "file_type" ? d[ss0] : (d[ss0] || "").replace(/^eco-/, "") ) || " "
    : ss1 !== "timestamp" ? d[ss0]
      && (ss1 !== "version" ? d[ss0][ss1] : nbrX(d[ss0][ss1])) || " "
    : ss0 !== "file_updated"
    ? d[ss0] && d[ss0][ss1] || d[ss0.replace(/^file/, "ts")] || " "
    : d[ss0] && d[ss0][ss1] || (d.file_created || "")[ss1]
      || d.ts_updated || d.ts_created || " ",
  ordFlip = arr => !descswi.checked ? arr.sort() : arr.sort().reverse(),
  tr0Gen = (r, i) => \`
    <tr\${ vbas !== 2 ? "" : " hidden"}>
      <td>\${ 1 + i - j } <input type=checkbox class=dnone /></td>
      <td>\${ (rval = r.doc || r.value).hasOwnProperty("loc_subdir")
        ? (rval.loc_subdir || ".") + "/" : /^eco-./.test(rval.file_type) || rval.file_created
        ? ((rval.file_updated || rval.file_created || "").subdir || ".") + "/" : "" }</td>
      <td>\${ r.id }</td>
      <td>\${ (rval.file_type || "").replace(/^eco-/, "")
        || (!/^[.-]./.test(r.id) ? "" : "(app assets)") }</td>
      <td>\${ ts1Fmt(rval.ts_updated || (rval.file_updated || "").timestamp) }</td>
      <td>\${ (rval.file_updated || "").username || "" }</td>
      <td>\${ (rval.file_updated || "").version || "" }</td>
      <td>\${ rval.file_updated && (rval.file_updated.misc) || "" }</td>
      <td>\${ ts1Fmt(rval.ts_created || (rval.file_created || "").timestamp) }</td>
      <td>\${ (rval.file_created || "").username || "" }</td>
      <td>\${ (rval.file_created || "").version || "" }</td>
      <td>\${ rval.file_created && (rval.file_created.misc) || "" }</td>
      <td>\${ nmsX(rval.name_full, 3) || "" }</td>
      <td>\${ nmsX(rval.name_full, 1) || "" }</td>
      <td>\${ nmsX(rval.name_full, 2) || "" }</td>
      <td>\${ rval.name_user || "" }</td>
      <td>\${ [rval.roles].flat().join(", ") || "" }</td>
      <td>\${ [rval.team_groups].flat().join(", ") || "" }</td>
      <td>\${ rval.image_src || "" }</td>
      <td>\${ rval.linkref || "" }</td>
      <td>\${ rval.from || "" }</td>
      <td>\${ [rval.to].flat().join(", ") || "" }</td>
      <td>\${ rval.subject || "" }</td>
      <td>\${ rval.headline || "" }</td>
      <td>\${ rval.time || "" }</td>
      <td>\${ rval.place || "" }</td>
      <td>\${ [rval.people || rval.contributors].flat().join(", ") || "" }</td>
      <td>\${ Object.keys(rval._attachments || "").length || "" }</td>
    </tr>\`,
  qd2Fmt = rows => rows.map( (r, i) =>
    !(rval = r.doc || r.value)._attachments && /^\\./.test(r.id) ? ""
    : /^[.-]./.test(r.id) ? (!i || (j = i)) && \`
    <tr id="\${ r.id.replace(/^[.-]/, "_") }">
      <td colspan=20><a>&#x25b6;</a> <input type=checkbox class=dnone /> \${
        r.id.replace( /^[.-].+$/, m => m + " ("
          + (/^eco-assets$/.test(rval.file_type) ? "eco-" : "app ") + "assets)" ) }</td>
    </tr>\\n\` + ordFlip(Object.keys(rval._attachments || "")).map( (k, i2) => \`
    <tr hidden>
      <td>\${ 1 + i2 } <input type=checkbox class=dnone /></td>
      <td>\${ r.id + "/" }</td>
      <td colspan=18>\${ !rval._attachments[k] ? k
        : k + " (" + Math.ceil(+rval._attachments[k].length / 1000) + "k)" }</td>
    </tr>\` ).join("")
    : !i || /^[.-]/.test(rows[i - 1].id) || !(rva2 = rows[i - 1].doc || rows[i - 1].value)
      || (rval.loc_subdir || (rval.file_updated || "").subdir || "")
        !== (rva2.loc_subdir || (rva2.file_updated || "").subdir || "")
    ? (!i || (j = i)) && \`
    <tr id="\${ rval.loc_subdir || (rval.file_updated || "").subdir || "_" }">
      <td colspan=20><a>&#x25b6;</a> <input type=checkbox class=dnone /> \${
        rval.loc_subdir || (rval.file_updated || "").subdir || "./" }</td>
    </tr>\` + tr0Gen(r, i)
    : tr0Gen(r, i) ).join("") + "\\n  ",
  qd3Fmt = rows => rows.map(tr0Gen).join("") + "\\n  ",
  qd5Fmt = dels => dels.map( (d, i) => \`
    <tr>
      <td>\${ 1 + i } <input type=checkbox class=dnone /></td>
      <td>\${ d.seq }</td>
      <td>\${ d.id }</td>
      <td>\${ d.changes[0].rev }</td>
    </tr>\` ).join("") + "\\n  ",
  filesChg = evt => {
    if (vbas === 5) { return; }
    let hlps,
      fedit = evt && (/editbtn|movebtn/.test((evt.target || "").id) || evt.DBNAME),
      fmove = evt && /movebtn/.test((evt.target || "").id),
      chks = document.querySelectorAll(vbas > 1 ? qslrs[8] : qslrs[9]),
      chkaf2 = vbas === 1 ? Array.from(chks) : !fmove ? Array.from(chks)
          .filter(inp => !rexsd.test(inp.parentElement.parentElement.children[1].textContent))
        : Array.from(chks).filter( inp => inp.parentElement.parentElement.children[3]
          && !/^$|asset|attach/i ///^(?:anno|contact|memo|post|prjid|publmgr|scrap|srcdoc)$/
          .test(inp.parentElement.parentElement.children[3].textContent) ),
      txd2 = (evt || "").DBNAME ? evt : {
        DBNAME: txd1.DBNAME,
        FILEID: "_all_docs",
        OPTS:   {
          include_docs: fedit,
          keys: chkaf2.map( inp => vbas === 1 ? inp.value
            : inp.parentElement.parentElement.children[2].textContent )
        }
      },
      row1Tfm = r1 => {
        !fmove || !r1 || !r1.doc || /^\\$&?$|^=$/.test(moveinp.value)
        || ( r1.doc.hasOwnProperty("loc_subdir") ? r1.doc.loc_subdir = moveinp.value
          : (r1.doc.file_updated || r1.doc.file_created || {}).subdir = moveinp.value );
        return fedit ? Object.assign({ _id: "", _rev: "" }, (r1 || "").doc)
        : {
            _id:  r1.key || r1.id,
            _rev: r1.value && r1.value.rev || r1.changes && r1.changes[0].rev,
            _deleted: true
          }
      },
      rdataTfm = re => !re.rows && !re.results ? {} : {
        DBNAME: txd2.DBNAME,
        OPTS:   {},
        docs:   (re.rows || re.results).map(row1Tfm) //.filter(d => !d._deleted)
      },
      jsonVldt = () => {
        r2con.textContent = "";
        hlps.forEach(el => el.classList.add("dnone"));
        fncTry(JSON.parse, qctxta.value) ? qctxta.classList.remove("iwarn")
        : qctxta.classList.add("iwarn") || hlps[2].classList.remove("dnone");
      },
      pchPut = () => {
        let txd3 = fncTry(JSON.parse, qctxta.value);
        if ( !txd3 || !txd3.DBNAME || !Array.isArray(txd3.docs)
        || !Array.from(opensel.options).map(o => o.value).includes(txd3.DBNAME) ) { return; }
        txd3.OPTS && typeof txd3.OPTS === 'object' || (txd3.OPTS = {});
        txd3.DBNAME && window.PouchDB && PouchDB(txd3.DBNAME)
        .bulkDocs(txd3.docs, txd3.OPTS).then(trsp => {
          hlps[0].classList.remove("dnone");
          r2Show(trsp);
          !vidx || (viewsel.selectedIndex = vidx = 0) || viewChg();
        }).then(txd3.cbf || txd2.cbf).catch(err => {
          hlps[1].classList.remove("dnone");
          r2Show(err);
        });
      },
      blkDspl = qrsp => {
        if (!window.qctxta) {
          nmdata.innerHTML = "" + \`
  <span class=fltrt>
  <button id=cnclbtn class=hgainl><strong class=isucc>&lang;</strong> CANCEL</button>&nbsp;
  <button id=submbtn class=hgainl><span class=isucc>&#x27b6;</span> SUBMIT</button></span>
  <div class=field>
    <h4>DB Bulk Action</h4>
    <div class="alnrt chelp isucc dnone">Data is submitted to local DB.</div>
    <div class="alnrt chelp iwarn dnone">Data-submission attempt failed.</div>
  </div>
  <div class="cfield alnrt"><button id=qselbtn class="bsml ilink" data-seltrg=qctxta>sel</button></div>
  <textarea id=qctxta class=textarea rows=31></textarea>
  <div id=qchlp class="chelp iwarn dnone"><strong>ALERT:</strong> Invalid JSON.</div>\\n\`;
          cnclbtn.onclick = pdbOpen;
          submbtn.onclick = pchPut;
          qselbtn.onclick = txtaSel;
          qctxta.onblur = jsonVldt;
        }
        //r2con.textContent = "";
        hlps = nmdata.querySelectorAll('.chelp');
        hlps.forEach(el => el.classList.add("dnone"));
        qctxta.classList.remove("iwarn");
        qctxta.value = valStr(qrsp, 2);
        !tidx || tabActv();
      },
      dbq = Object.keys(nm0cfgs).includes(txd2.DBNAME)
        && window.PouchDB && PouchDB(txd2.DBNAME);
    r2con.textContent = "";
    if (vbas > 1) {
      document.querySelectorAll(qslrs[10])
      .forEach(inp => inp.parentElement.parentElement.className = "");
      chkaf2.forEach(inp => inp.parentElement.parentElement.className = fedit ? "hsuccl" : "hwarnl");
    } else {
      document.querySelectorAll('#nmclip .media')
      .forEach(elm => elm.classList.remove("hhodew", "hsuccl", "hwarnl"));
      chkaf2.forEach( inp => [0,1,2,3,4].reduce((a, b) => a = a.parentElement, inp)
        .classList.add(fedit ? "hsuccl" : "hwarnl") );
    }
    !dbq || dbq.allDocs(txd2.OPTS).then(rdataTfm).then(blkDspl).catch(r2Show);
  },
  fileLoad = evt => {
    let tanc = evt && ((evt.target || "").nodeName !== 'MARK' ? evt.target : evt.target.parentElement),
      finp = tanc && ( vbas > 1 ? tanc.parentElement.parentElement.querySelector('input:not(.dnone)')
          : tanc.parentElement.parentElement.parentElement.querySelector('span:not(.dnone)>input') )
        || "",
      sdir = tanc && vbas > 1 && tanc.parentElement.previousElementSibling.textContent,
      txd4 = (evt || "").DBNAME ? evt : {
        DBNAME: txd1.DBNAME,
        FILEID: !tanc ? "" : sdir && rexsd.test(sdir)
          ? sdir.replace(/\\/$/, "") : tanc.textContent || tanc.dataset.fileid,
        ATTKEY: !tanc || !sdir || !rexsd.test(sdir) ? "" : tanc.textContent,
        OPTS:   {
          rev: vbas < 5 ? null : tanc.parentElement.parentElement.children[3].textContent,
          revs_info: vbas < 5 ? false : true
        }
      },
      reximg = /\\.giff?$|\\.jpe?g$|\\.png$/i,
      rextxt = /\\.html?$|\\.json$|\\.md$|\\.m?js$|\\.s?css$|\\.te?xt$|\\.\\w{5,}$/i,
      attVw = abl => reximg.test(txd4.ATTKEY) || abl && /^image/.test(abl.type)
        ? nmdata.innerHTML = "\\n<figure class=image><img src=\\""
          + (aurls[txd4.ATTKEY] || abl && (aurls[txd4.ATTKEY] = URL.createObjectURL(abl)))
          + "\\" /></figure>\\n"
        : fetch(aurls[txd4.ATTKEY] || abl && (aurls[txd4.ATTKEY] = URL.createObjectURL(abl)))
          .then(r => r.text()).then( str => nmdata.innerHTML = jP1( str,
            txd4.ATTKEY.replace(/\\.(?:(css)|(html?)|(md)|m?(js))$|.*/i, "$1$2$3$4"), "dflow" ))
          .catch(r2Show);
    //r2Show(txd4);
    if (!window.PouchDB || !Object.keys(nm0cfgs).includes(txd4.DBNAME) || !txd4.FILEID
    || txd4.ATTKEY && !reximg.test(txd4.ATTKEY) && !rextxt.test(txd4.ATTKEY)) { return; }
    r2con.textContent = "";
    if (vbas > 1) {
      document.querySelectorAll(qslrs[10])
      .forEach(inp => inp.parentElement.parentElement.className = "");
      !tanc || (tanc.parentElement.parentElement.className = "hhodew");
    } else {
      document.querySelectorAll('#nmclip .media')
      .forEach(elm => elm.classList.remove("hhodew", "hsuccl", "hwarnl"));
      !tanc || tanc.parentElement.parentElement.parentElement.classList.add("hhodew");
    }
    tanc && vbas === 5 ? tabActv() || !(nm0.txd4 = txd4)
      || PouchDB(txd4.DBNAME).get(txd4.FILEID, txd4.OPTS).then( doc => nmdata.innerHTML
        = jP1(Object.assign({ _id: "", _rev: "" }, doc))
        + "\\n<p><strong>To retrieve older revision:</strong>"
        + " Use JavaScript console (in Settings) to re-assign desired <code>rev</code> value"
        + " from list of available options (above) to <code>nm0.txd4.OPTS.rev</code>"
        + " key and execute given <code>PouchDB</code> command chain (below).</p>\\n"
        + jP1( "// to view current query values\\n nm0.txd4\\n\\n// to retrieve _revs_info"
          + " within console\\n PouchDB(nm0.txd4.DBNAME).get(nm0.txd4.FILEID, nm0.txd4.OPTS)"
          + "\\n\\n// to re-assign revision value\\n nm0.txd4.OPTS.rev = \\"revision\\""
          + "\\n\\n// to send revision data to display panel"
          + "\\n PouchDB(nm0.txd4.DBNAME).get(nm0.txd4.FILEID, nm0.txd4.OPTS)"
          + ".then(doc => nmdata.innerHTML = nm0.jP1(doc)).catch(nm0.r2Show); \\"\\"", "js" ) )
      .catch(r2Show)
    : aurls[txd4.ATTKEY] ? tabActv() || attVw() : txd4.ATTKEY
    ? tabActv() || PouchDB(txd4.DBNAME).getAttachment(txd4.FILEID, txd4.ATTKEY, txd4.OPTS)
      .then(attVw).catch(r2Show)
    : !evt.DBNAME && !(finp || "").checked
    ? tabActv() || PouchDB(txd4.DBNAME).get(txd4.FILEID, txd4.OPTS)
        .then( doc => nmdata.innerHTML = !finp && ( doc.hasOwnProperty("content")
            ? jP1(doc.content) : !Array.isArray(doc.filefrags) ? 0
            : jP1(doc.filefrags.map(ff => ff.contenttxt).filter(e => e).join("\\n\\n")) )
          || jP1(Object.assign({ _id: "", _rev: "" }, doc)) )
        .catch(r2Show)
    : PouchDB(txd4.DBNAME).get(txd4.FILEID, txd4.OPTS).then(doc => {
        let lnl, str,
          taHt = k => ( lnl = ( ( str = valStr( fwg[k],
                !Array.isArray(fwg[k]) || typeof fwg[k][0] === 'object' ? 2 : null ))
              .match(/\\n/g) || "" ).length ) > 8 || str.length > 400
            ? 16 : lnl > 2 || str.length > 200 ? 8 : 2;
        fwg = doc;
        pfacnt.innerHTML = "";
        !vidx || (viewsel.selectedIndex = vidx = 0) || viewChg();
        nmdata.innerHTML = "" + \`
  <button id=updbtn class="fltrt hgainl"><span class=isucc>&#x267a;</span> UPDATE</button>
  <div class=field>
    <button id=bckbtn class="btn1 hgainl ilink"><strong>&lang;</strong></button>
    <span class="btn1 opq0" disabled>\${txd4.DBNAME} &sol;</span> \${
        !(rval = fwg.loc_subdir || (fwg.file_updated || fwg.file_created || "").subdir) ? ""
        : "<span class=\\"btn1 opq0\\" disabled>" + rval + " &sol;</span>" }
    <span class="btn1 opq0" disabled>\${fwg._id}</span>
    <div class="alnrt chelp isucc dnone">Note is updated in local DB.</div>
    <div class="alnrt chelp iwarn dnone">Note-update attempt failed.</div>
  </div>\` + Object.keys(fwg).map( k => /^_id$|^_rev$/.test(k) ? "" : \`
  <div class="field is-horizontal">
    <div class="field-label">
      <span class=label>\${k}</span>
      <button class="fltrt bsml ilink" data-seltrg=p0\${k}>sel</button>
    </div>
    <div class="field-body">
      <textarea id=p0\${k} class=textarea rows=\${taHt(k)}>\${htmTxt(str)}</textarea>
    </div>
  </div>\` ).join("") + atthtm;
        bckbtn.onclick = pdbOpen;
        a1inp.onchange = () => a3inp.innerHTML = a1inp.files[1]
          ? "<em>[" + a1inp.files.length + " files selected]</em>"
          : a1inp.files[0] ? a1inp.files[0].name : "<span>Locate image&hellip;</span>";
        updbtn.onclick = () => {
          let ts0 = new Date().getTime(),
            chgs = 0,
            hlps = nmdata.querySelectorAll('.chelp');
          hlps.forEach(el => el.classList.add("dnone"));
          Array.from(nmdata.querySelectorAll('.label')).map(el => el.textContent)
          .forEach( k => /^_id$|^_rev$/.test(k)
            || !/isucc|iwarn/.test(window["p0" + k].className)
            || !++chgs || (fwg[k] = typTest(window["p0" + k].value, 1)[2]) );
          !fwg.hasOwnProperty("ts_updated") || (fwg.ts_updated = ts0);
          !fwg.file_updated || [fwg.file_updated].forEach(p1 => {
            p1.username = nm0sets.uname || nm0sets.uemail || "user000";
            p1.timestamp = ts0;
            p1.dborigin || ( p1.dborigin
              = /127\\.0\\.0|192\\.168\\.0|cloudant|localhost/.test(location.origin)
              ? location.origin : [location.origin, navigator.userAgent || navigator.userAgentData] );
            p1.dbname = txd1.DBNAME;
            !p1.hasOwnProperty("version") || (p1.version = p1.version.replace(/-?\\d+$/, m => ++m));
          });
          !a1inp.files.length || !++chgs
          || !(fwg.hasOwnProperty("_attachments") || (fwg._attachments = {}))
          || a1inp.files.forEach( (f, i) =>
            fwg._attachments[ !imganm2.value ? f.name : !a1inp.files[1]
              ? imganm2.value : imganm2.value.replace(/(?=\\.\\w+$|$)/, i > 9 ? i : "0" + i) ]
            = { content_type: f.type, data: f } );
          !chgs || !Object.keys(nm0cfgs).includes(txd4.DBNAME)
          || !window.PouchDB || PouchDB(txd4.DBNAME)
          .put(Object.assign({ _id: "", _rev: "" }, fwg), txd4.OPTS).then( trsp =>
            Object.keys(fwg).forEach( k => /^_id$|^_rev$/.test(k)
              || window["p0" + k].classList.remove("isucc", "iwarn") )
            || hlps[0].classList.remove("dnone") || r2Show(trsp) )
          .then(txd4.cbf)
          .catch(err => hlps[1].classList.remove("dnone") || r2Show(err));
        }; //fwgUpd;
        nmdata.querySelectorAll('.field-label button').forEach(btn => btn.onclick = txtaSel);
        Object.keys(fwg).forEach(k => /^_id$|^_rev$/.test(k) || (window["p0" + k].onblur = dataVld));
        tidx !== 1 || tabActv();
      }).catch(r2Show);
  },
  filtExe = () => {
    let negs = /^ *-/.test(filtinp.value),
      rexf = filtinp.value.replace(/^ *-/, "");
    rexf = /^\\/.+\\/[gim]*$/.test(rexf.trim()) ? eval(rexf) : new RegExp(rexf || "^$", "gi");
    r2con.textContent = "";
    document.querySelectorAll(vbas > 1 ? qslrs[4] : qslrs[11]).forEach(inp => inp.checked = 0);
    document.querySelectorAll('#nmtbl tbody>tr:not([id])').forEach(tr => {
      tr.classList.remove("dnone", "match");
      Array.from(tr.children)
      .forEach( (td, i) => !i || ( (i !== 2 ? td : td.firstChild).innerHTML
        = (i !== 2 ? td : td.firstChild).innerHTML.replace(/<\\/?mark>/g, "") ));
    });
    document.querySelectorAll(qslrs[5])
    .forEach(el => el.innerHTML = el.innerHTML.replace(/<\\/?mark>/g, ""));
    document.querySelectorAll('#nmclip .media').forEach(el => el.classList.remove("dnone"));
    if (vbas > 1 && filtinp.value) {
      document.querySelectorAll('#nmtbl tbody>tr:not([id]):not([hidden])')
      .forEach( tr => Array.from(tr.children).forEach( (td, i) => {
        if (i && !td.classList.contains("dnone")) {
          rexf.lastIndex = 0;
          !negs ? tr.classList.contains("match")
            || (tr.className = rexf.test(td.textContent) ? "match" : "dnone")
          : tr.classList.contains("dnone")
            || (tr.className = !rexf.test(td.textContent) ? "match" : "dnone");
          negs || ( (i !== 2 ? td : td.firstChild).innerHTML
            = (i !== 2 ? td : td.firstChild).innerHTML.replace(rexf, "<mark>$&</mark>") );
        }
      }));
    } else if (filtinp.value) {
      document.querySelectorAll(qslrs[5])
      .forEach( el => el.innerHTML = el.innerHTML.match(/[^]*?(?:<\\/?\\w.*?>|$)/g)
        .map( st => st.replace( /([^]*?)(<\\/?\\w.*?>|$)/, (m, c1, c2) =>
          (!(nit.innerHTML = c1) ? "" : nit.textContent.replace(rexf, "<mark>$&</mark>"))
          + c2 )).join("") );
      document.querySelectorAll('#nmclip .media')
      .forEach(el => /<mark>/.test(el.innerHTML) != negs || el.classList.add("dnone"));
    }
  },
  blk2Tog = () => {
    if (vbas === 5) { return; }
    let chks = document.querySelectorAll(vbas > 1 ? qslrs[8] : qslrs[9]);
    (chks.length ? filtctrl : bulkctrl).classList.add("dnone");
    (chks.length ? bulkctrl : filtctrl).classList.remove("dnone");
  },
  bulkTog = () => {
    let hid = document.querySelector(vbas > 1 ? qslrs[6] : qslrs[7]);
    document.querySelectorAll( vbas > 1 ? qslrs[4]
      : '#nmclip .media-content>details:first-of-type>summary>span' )
    .forEach(el => el.className = hid ? "" : "dnone");
    if (hid) {
      blk2Tog();
    } else {
      bulkctrl.classList.add("dnone");
      filtctrl.classList.remove("dnone");
    }
  },
  vwFnlz = evt => {
    if (vidx < 9) {
      !nm0sets.bedit || bulkTog();
    } else if (!evt || evt.target.id === "viewsel") {
      !(nm0sets.p2vws[vusr] || "").cbxs || bulkTog();
      !(filtinp.value = (nm0sets.p2vws[vusr] || "").filt || "") || filtExe();
    }
  },
  ancAdd1 = td2 => {
    td2.innerHTML = td2.textContent.replace(/.+?(?= \\(\\d+k\\)$|$)/, "<a>$&</a>");
    td2.firstChild.onclick = fileLoad;
  },
  chksTog = evt => {
    let r1idx = evt.target.parentElement.parentElement.rowIndex - 2,
      sdtrs = document.querySelectorAll('#nmtbl tbody>tr[id]'),
      rsidx = Array.from(sdtrs).map(tr => tr.rowIndex - 2),
      r2idx = rsidx[rsidx.findIndex(n => n === r1idx) + 1]
        || ((document.querySelector('#nmtbl tbody>tr:last-of-type') || "").rowIndex - 1),
      trows = document.querySelectorAll('#nmtbl tbody>tr');
    r2con.textContent = "";
    if (!evt.target.parentElement.parentElement.id) {
      evt.target.checked // unintuitive, trial feature
      || document.querySelectorAll('#nmtbl tbody>tr:not([id])').forEach(tr => tr.className = "");
      document.querySelectorAll(qslrs[4]).forEach(inp => inp.checked = evt.target.checked);
    } else {
      while (++r1idx < r2idx) {
        evt.target.checked || (trows[r1idx].className = ""); // unintuitive, trial feature
        trows[r1idx].children[0].children[0].checked = evt.target.checked;
      }
    }
    blk2Tog();
  },
  chksRstr = () => {
    bulkctrl.classList.add("dnone");
    filtctrl.classList.remove("dnone");
    filtinp.value = moveinp.value = "";
    document.querySelectorAll(qslrs[2]).forEach(anc => anc.innerHTML = "&#x25b6;");
    document.querySelectorAll(qslrs[3]).forEach(inp => (inp.checked = 0) || (inp.className = "dnone"));
    document.querySelectorAll('#nmtbl tbody>tr[id]>td:first-of-type>input')
    .forEach(inp => inp.onchange = chksTog);
    document.querySelectorAll(qslrs[10]).forEach(inp => inp.onchange = blk2Tog);
  },
  sdirXpd = evt => {
    let xpd = evt.target.textContent === "\\u25b6",
      rowid = evt.target.parentElement.parentElement.id,
      r1idx = evt.target.parentElement.parentElement.rowIndex - 2,
      sdtrs = document.querySelectorAll('#nmtbl tbody>tr[id]'),
      rsidx = Array.from(sdtrs).map(tr => tr.rowIndex - 2),
      r2idx = rsidx[rsidx.findIndex(n => n === r1idx) + 1]
        || ((document.querySelector('#nmtbl tbody>tr:last-of-type') || "").rowIndex - 1),
      trows = document.querySelectorAll('#nmtbl tbody>tr');
    //r2Show([r1idx, r2idx, rowid].join(", "));
    if (rowid) {
      evt.target.innerHTML = !xpd ? "&#x25b6;" : "&#x25bc;";
      while (++r1idx < r2idx) { trows[r1idx].hidden = !xpd; }
    } else {
      document.querySelectorAll(qslrs[2])
      .forEach(anc => anc.innerHTML = !xpd ? "&#x25b6;" : "&#x25bc;");
      document.querySelectorAll('#nmtbl tbody>tr[id]>td:first-of-type>a')
      .forEach(anc => anc.innerHTML = !xpd ? "&#x25b6;" : "&#x25bc;");
      document.querySelectorAll('#nmtbl tbody>tr:not([id])').forEach(tr => tr.hidden = !xpd);
    }
  },
  colsTog = (evt, resel = (nm0sets.p2vws[vusr] || []).sort) => {
    let opts = Array.from(colssel.selectedOptions).map(o => 1 + o.index);
    !evt || (resel = sortsel.value);
    document.querySelectorAll('#nmtbl :not(.dnone)>tr')
    .forEach( tr => Array.from(tr.children).forEach( (td, i) =>
      td.className = !i || opts.indexOf(i) > -1 ? "" : "dnone" ));
    sortsel.innerHTML = vbas === 5 ? \`
        <option value=seq>Chg Seq</option>
        <option value=id>Note ID</option>\\n\`
      : Array.from(colssel.selectedOptions)
        .map(o => \`\\n          <option value="\${ o.value }">\${ o.textContent }</option>\`)
        .join("") + "\\n        ";
    sortsel.value = resel || (vbas > 1 ? "id" : "name_full1");
    //Array.from(sortsel.options).some(o => o.value === resel)
    //sortsel.selectedIndex > -1 || (sortsel.selectedIndex = 0);
    cvs = Array.from(colssel.selectedOptions).map(o => o.value);
  },
  tblGen = evt => {
    vbas < 5 || PouchDB(txd1.DBNAME)
    .changes(txd1.OPTS)
    .then(re => {
      let dels = re.results.filter(r => r.deleted);
      ftotal.innerText = dels.length;
      [nmthds[0], nmtfts[0]].forEach(el => el.classList.add("dnone"));
      [nmthds[1], nmtfts[1]].forEach(el => el.classList.remove("dnone"));
      nmtbod.innerHTML = qd5Fmt( ss0 === "seq" ? ordFlip(dels)
        : ordFlip(dels.map(r => [r.id, r])).map(sr => sr[1]) );
      chksRstr();
      evt && evt.target.id === "pdbssel" || colsTog(null, /^(?:id|seq)$/.test(ss0) ? ss0 : "id");
      document.querySelectorAll('#nmtbl tbody>tr:not([id])>td:nth-of-type(3)').forEach(ancAdd1);
      vwFnlz(evt);
    }).catch(r2Show);
    vbas === 5 || PouchDB(txd1.DBNAME)
    .query(txd1.FILEID.replace(/^_design\\//, "") + "/" + txd1.VIEW, txd1.OPTS)
    .catch( () => PouchDB(txd1.DBNAME).allDocs({
      startkey:     descswi.checked != (vbas === 4) ? "~a" : undefined,
      endkey:       descswi.checked != (vbas === 4) ? undefined : "~a",
      descending:   descswi.checked,
      include_docs: true }) )
    .then(re => {
      let rdc = re.rows.length === 1 && !re.rows[0].key && "" + re.rows[0].value,
        calcSum = arr => !arr.length ? 0 : arr.reduce((s, v) => s + v);
      j = 0;
      ftotal.innerText = rdc ? rdc : vbas !== 2 ? re.rows.length //re.total_rows
        : re.rows.filter( r => /^eco-(?!assets$)./.test((rval = r.doc || r.value).file_type)
          || rval.hasOwnProperty("loc_subdir") && !/^[.-]./.test(r.id) || rval.file_created ).length
          + calcSum( re.rows.map( r => !(rval = r.doc || r.value)._attachments ? 0
              : Object.keys(rval._attachments).length ));
      [nmthds[1], nmtfts[1]].forEach(el => el.classList.add("dnone"));
      [nmthds[0], nmtfts[0]].forEach(el => el.classList.remove("dnone"));
      nmtbod.innerHTML = rdc ? "" : vbas !== 2
      ? qd3Fmt( !ss0 || vbas !== 4 && ss0 === "id" || vbas === 4 && ss1 === "timestamp" ? re.rows
        : ordFlip(re.rows.map(r => [ptyX(r.doc || r.value), r.id, r])).map(sr => sr[2]) )
      : qd2Fmt( ordFlip( re.rows.filter( r => /^[.-]./.test(r.id)
          || /^eco-./.test((rval = r.doc || r.value).file_type)
          || rval.hasOwnProperty("loc_subdir") || rval.file_created )
        .map( r => /^[.-]./.test(r.id) ? [r.id.replace(/^\\.(.+)$/, "$1_"), null, r.id, r]
          : [ (rval = r.doc || r.value).loc_subdir
              || (rval.file_updated || rval.file_created || "").subdir || "!",
            ptyX(r.doc || r.value), r.id, r ] ) ).map(sr => sr[3]) );
      evt && evt.target.id === "pdbssel"
      || colsTog(null, (!ss1 ? ss0 : [ss0, ss1].join("."))); //|| "file_created.timestamp"
      document.querySelectorAll(qslrs[1])
      .forEach(spn => spn.className = vbas !== 2 ? "" : "dnone");
      document.querySelectorAll(qslrs[2])
      .forEach(anc => anc.className = vbas === 2 ? "" : "dnone");
      document.querySelectorAll('#nmtbl tbody>tr[id]>td:first-of-type>a')
      .forEach(anc => anc.onclick = sdirXpd);
      chksRstr();
      document.querySelectorAll('#nmtbl tbody>tr:not([id])>td:nth-of-type(3)').forEach(ancAdd1);
      vwFnlz(evt);
    }).catch(r2Show);
  },
  clipsGen = evt => {
    let db1 = window.PouchDB && PouchDB(txd1.DBNAME);
    !db1 || ( txd1.u1s.includes(txd1.DBNAME) ? Promise.resolve()
      : !txd1.u1s.push(txd1.DBNAME) || db1.get("-res-img").then( adoc =>
          !adoc._attachments || Promise.all( Object.keys(adoc._attachments)
            .map( akey => db1.getAttachment("-res-img", akey)
              .then(abl => aurls[akey] = URL.createObjectURL(abl)) ) ) ).catch(() => "") )
    .then( () => db1.query(txd1.FILEID.replace(/^_design\\//, "") + "/" + txd1.VIEW, txd1.OPTS)
    .catch( () => db1.allDocs({
      //startkey:     descswi.checked ? "~a" : undefined,
      //endkey:       descswi.checked ? undefined : "~a",
      descending:   descswi.checked,
      include_docs: true }) )
    .then(re => {
      let ra, rb,
        rdc = re.rows.length === 1 && !re.rows[0].key && "" + re.rows[0].value,
        rrs = !rdc && re.rows.filter( r => r
            && ( (ra = r.doc || r.value).file_type && /^[!0-9a-z]/i.test(r.id)
              || /anno|event|memo|post/i.test(ra.file_type) || !ra.file_type
              && ["name_full", "name_user"].some(p => ra.hasOwnProperty(p)) ) )
          .sort( (a, b) => !(ra = ptyX(a.doc || a.value)) || !(rb = ptyX(b.doc || b.value))
            ? 0 : (ra < rb) == descswi.checked ? 1 : -1 );
      ftotal.innerText = rdc || rrs.length;
      nmclip.innerHTML = rdc ? "" : "\\n  <span class=\\"fltrt mtup0c25\\">&ensp;Show all:&ensp;"
      + "<label><input type=checkbox id=hdrsswi /> <a>headers</a></label>&ensp;"
      + "<label><input type=checkbox id=bodsswi /> <a>bodies</a></label></span>\\n  <hr />"
      + (rrs.length ? "" : "\\n  <p class=igreyd>&emsp;<em>[No results found &hellip;]</em></p>")
      + rrs.map( r => \`
  <article class=media>
    <div class="media-left">
      <figure class="image rspv128\${ cvs.includes("image_src") ? "" : " dnone" }"><img src="\${
        imgLkup(ra = r.doc || r.value) }" data-fileid="\${ r.id }" }" />
      <figcaption>\${ !cvs.includes("name_user") ? "" : ra.name_user || "" }</figcaption></figure>
    </div>
    <div class="media-content">
      <details class=cfield>
        <summary>
          <span class=dnone>&nbsp;<input type=checkbox value="\${ r.id }" /></span>
          <strong>\${ ra.from ? ((cntcs[ra.from] || "").name_full || ra.from).replace(/ .*$/, "")
            : /anno|event|memo|post/i.test(ra.file_type)
              && (rb = (ra.file_updated || ra.file_created || "").username)
            ? ((cntcs[rb] || "").name_full || rb).replace(/ .*$/, "")
            : !cvs.some(e => /name_full/.test(e)) ? r.id
            : nmsX(ra.name_full) || ra.name_user || ra.name || r.id }</strong>
          <em class="diblk fsz0c75">\${ !cvs.some(e => /timestamp/.test(e))
              || !/anno|memo|post/i.test(ra.file_type)
              || !ra.ts_created && !ra.file_created && !ra.ts_updated && !ra.file_updated
            ? "" : new Date( ra.ts_updated || ra.ts_created
              || (ra.file_updated || ra.file_created || "").timestamp || 0 ).toLocaleString() }</em>
        </summary>
        <div class="pwrap fsz0c75">\${
          ( !cvs.includes("roles") || !(ra.roles || "")[0] ? ""
            : "<em class=\\"fsz1c00 lnhtnml\\">" + ra.roles.join(", ") + "</em>\\n" )
          + ( !cvs.some(e => /name_full/.test(e)) || !ra.bio_short ? "" : "SHORT BIO: "
            + ra.bio_short.substring(0, 255) + (ra.bio_short.length < 257 ? "\\n" : "&hellip;\\n") )
          + (!cvs.includes("linkref") || !ra.linkref ? "" : "LINK REF: " + ra.linkref + "\\n")
          + (!cvs.includes("from") || !ra.from ? "" : "FROM: " + ra.from + "\\n")
          + (!cvs.includes("to") || !(ra.to || "")[0] ? "" : "TO: " + ra.to.join(", ") + "\\n")
          + (!cvs.includes("file_type") || !ra.file_type ? "" : "NOTE TYPE: " + ra.file_type + "\\n")
          + ( !cvs.includes("id") ? "" : "NOTE ID: " + ( !cvs.includes("subdir") ? ""
              : (rb = ra.loc_subdir || (ra.file_updated || ra.file_created || "").subdir || "")
                + (!rb ? "" : " / ") ) + "<a>" + r.id + "</a>\\n" )
          + ( !cvs.includes("file_created.timestamp") || /anno|memo|post/i.test(ra.file_type)
              || !ra.ts_created && !ra.file_created ? "" : "CREATED: "
            + new Date(ra.ts_created || (ra.file_created || "").timestamp || 0).toLocaleString()
            + "\\n" )
          + ( !cvs.includes("file_updated.timestamp") || /anno|memo|post/i.test(ra.file_type)
              || !ra.ts_updated && !ra.file_updated ? "" : "UPDATED: "
            + new Date(ra.ts_updated || ra.file_updated.timestamp || 0).toLocaleString() ) }</div>
      </details>
      <details>\${ /contact|phone/.test(ra.file_type) ? ""
          : "<summary>" + ( (!cvs.includes("subject") || !ra.subject)
              && (!cvs.includes("headline") || !ra.headline) && !/anno/i.test(ra.file_type)
              ? (!ra.body && !ra.content && !ra.time ? "" : "&hellip;")
              : ra.subject || ra.headline || "Annotation" )
            + ( !cvs.includes("_attachments") || !ra._attachments ? ""
              : " <span class=fsz0c75>(" + Object.keys(ra._attachments).length + " attach's)</span>" )
            + "</summary>" }
        <div class=pwrap>\${ !/anno|contact|event|phone/i.test(ra.file_type)
          ? "<div class=lnhtnml>" + htmTxt(rb = ra.body || ra.content || (ra.filefrags || [""])[0].contenttxt || "").substring(0, 255)
            + (rb.length < 257 ? "" : "&hellip;") + "</div>"
          : /anno/i.test(ra.file_type) ? "<div><span class=fsz0c75>TAGS:&nbsp;</span>" + ra.tags
            + "\\n<span class=fsz0c75>TOC&nbsp;FMT:&nbsp;</span>" + ra.tocfmt
            + "\\n<span class=fsz0c75>STRIKES,&nbsp;INSERTS&nbsp;&amp;&nbsp;HIGHLIGHTS:</span></div>"
            + "<div class=lnhtnml>" + (rb = ra.texthl.join("\\n")).substring(0, 255)
            + (rb.length < 257 ? "" : "&hellip;") + "</div>"
          : "<div>" + ( !cvs.includes("time") || !ra.hasOwnProperty("time") ? ""
              : "<strong>Time:</strong> " + ts2Fmt(ra.time) + "\\n" )
            + (( !cvs.includes("place") || !ra.hasOwnProperty("place") ? ""
              : "<strong>Place:</strong> " + ra.place + "\\n" )
                + ( !(ra.map_refs || "")[0] ? ""
                  : "<strong>Map refs:</strong> " + ra.map_refs.join(", ") + "\\n" ))
            + ( !cvs.includes("people") || !(ra.people || "")[0] ? ""
              : "<strong>People:</strong> " + ra.people.join(", ") + "\\n" )
            + ( !cvs.includes("time") || !ra.hasOwnProperty("description") ? ""
              : "<strong>Description:</strong> " + ra.description + "\\n" )
            + ( !cvs.some(e => /name_full/.test(e)) ? ""
              : ( !ra.hasOwnProperty("birthdate") ? ""
                  : "<strong>Birthdate:</strong> " + ts2Fmt(ra.birthdate) + "\\n" )
                + ( !ra.hasOwnProperty("emails") ? ""
                  : "<strong>Emails:</strong> " + ra.emails.join(", ") + "\\n" )
                + ( !ra.hasOwnProperty("phones") ? ""
                  : "<strong>Phones:</strong> " + ra.phones.join(", ") + "\\n" ) )
            + ( !cvs.includes("team_groups") ? ""
              : ( !(ra.social_profiles || "")[0] ? ""
                  : "<strong>Social profiles:</strong> " + ra.social_profiles.join(", ") + "\\n" )
                + ( !(ra.project_urls || "")[0] ? ""
                  : "<strong>Project urls:</strong> " + ra.project_urls.join(", ") + "\\n" )
                + ( !(ra.team_groups || "")[0] ? ""
                  : "<strong>Team groups:</strong> " + ra.team_groups.join(", ") + "\\n" )
                + ( !ra.ts_created ? "" : "<strong>"
                    + (!/contact|phone/.test(ra.file_type) ? "Created on:" : "Joined team:")
                    + "</strong> " + ts2Fmt(ra.ts_created) + "\\n" )
                + ( !ra.ts_updated ? ""
                  : "<strong>Last updated:</strong> " + ts2Fmt(ra.ts_updated) + "\\n" ) )
            + "</div>" }</div>
      </details>
    </div>
  </article>\` ).join("") + "\\n";
      if (rdc) { return; }
      hdrsswi.onchange = ev2 =>
        document.querySelectorAll('#nmclip .media-content>details:first-of-type')
        .forEach(el => el.open = ev2.target.checked);
      bodsswi.onchange = ev2 =>
        document.querySelectorAll('#nmclip .media-content>details:last-of-type')
        .forEach(el => el.open = ev2.target.checked);
      document.querySelectorAll(qslrs[12]).forEach(anc => anc.onclick = fileLoad);
      document.querySelectorAll(qslrs[11]).forEach(inp => inp.onchange = blk2Tog);
      vidx > 8 && !(nm0sets.p2vws[vusr] || "").hdrs || hdrsswi.click();
      !(nm0sets.p2vws[vusr] || "").bods || bodsswi.click();
      vwFnlz(evt);
    }) ).catch(r2Show);
  },
  tabActv = evt => {
    let txd5 = !Object.keys(nm0cfgs).includes((evt || "").DBNAME)
        ? txd1 : fncTry(JSON.parse, JSON.stringify(evt)) || txd1;
    txd5 === txd1 || (pdbssel.selectedIndex = 0) || pdbOpen()
    || pfahlp.classList.add("dnone") || pfacnt.classList.remove("dnone");
    !(evt || "").DBNAME || (evt = null) || (tidx = vidx = 1);
    tidx === 2 || pdbcfg.querySelectorAll('.chelp').forEach(el => el.classList.add("dnone"));
    !evt || evt.currentTarget.localName === 'a' || (evt = null);
    tidx = !evt ? (vidx > 3 ? 0 : vidx) : +evt.currentTarget.parentElement.dataset.tabidx;
    [nmflow, nmclip].some(el => !el.classList.contains('dnone'))
    || (viewsel.selectedIndex = vidx = tidx);
    pdbssel.selectedIndex > 1 || vidx === 2 || (pdbssel.selectedIndex = 0);
    pdbssel.selectedIndex === 1 || nm0sets.usecfg == use1swi.checked || use1swi.click();
    !/^[013]$/.test(vidx) || (ftotal.innerText = "_");
    tabncs.forEach(anc => anc.parentElement.classList.remove('is-active'));
    (!evt ? tabncs[tidx] : evt.currentTarget).parentElement.classList.add('is-active');
    nmpans.forEach(el => el.classList.add("dnone"));
    nmpans[tidx].classList.remove("dnone");
    if (tidx === 1 && !fwg && txd5.DBNAME) {
      let ts0 = new Date().getTime(),
        taHt = k => /body|content/i.test(k) ? 16 : /misc/i.test(k) ? 8
          : typeof fwg[k] !== 'object' || Array.isArray(fwg[k]) && typeof fwg[k][0] !== 'object' ? 2
          : !Array.isArray(fwg[k]) && Object.keys(fwg[k]).length < 8 ? 8 : 16;
      fwg = txd5.doc || fncTry( JSON.parse, JSON.stringify(
        (nm0sets.p2typs[t01sel.value] || "").t1 || pftyps[t01sel.value] || pftyps.new )) || {};
      !/^idGen\\(.*\\)$/.test((fwg._id || "").trim()) || ( fwg._id
        = fncTry(eval, "nm0." + fwg._id.replace(/\\b(?:un0|uname)(?= *\\))/i, "nm0.nm0sets.uname"), 2) );
      !fwg.hasOwnProperty("ts_created") || (fwg.ts_updated = fwg.ts_created = ts0);
      !fwg.file_created || [[fwg.file_created, fwg.file_updated]].forEach(([p0, p1]) => {
        p1 = p1 || {};
        p1.username = p0.username = nm0sets.uname || nm0sets.uemail;
        p1.timestamp = p0.timestamp = ts0;
        p0.dborigin || ( p1.dborigin = p0.dborigin
          = /127\\.0\\.0|192\\.168\\.0|cloudant|localhost/.test(location.origin)
          ? location.origin : [location.origin, navigator.userAgent || navigator.userAgentData] );
        p0.dbname || (p1.dbname = p0.dbname = txd5.DBNAME);
        !p0.hasOwnProperty("version") || (p1.version = p0.version = "0.1.0");
      });
      !fwg.hasOwnProperty("from") || (fwg.from = nm0sets.uname || "user000");
      pfacnt.innerHTML = "" + \`
  <span class=fltrt>
  <button id=resbtn class=hgainl><strong class=isucc>&lang;</strong> RESET</button>&nbsp;
  <button id=savbtn class=hgainl><span class=isucc>&#x267a;</span> SAVE</button></span>
  <div class=field>
    <h4>New Note</h4>
    <div class="alnrt chelp isucc dnone">New note is saved in local DB.</div>
    <div class="alnrt chelp iwarn dnone">New-note save attempt failed.</div>
  </div>\` + Object.keys(fwg).map( k => /^_rev$/.test(k) ? "" : \`
  <div class="field is-horizontal">
    <div class="field-label">
      <span class=label>\${k}</span>
      <button class="fltrt bsml ilink" data-seltrg=p0\${k}>sel</button>
    </div>
    <div class="field-body">
      <textarea id=p0\${k} class=textarea rows=\${taHt(k)}>\${
        htmTxt(valStr(fwg[k], !Array.isArray(fwg[k]) || typeof fwg[k][0] === 'object' ? 2 : null))
     }</textarea>
    </div>
  </div>\` ).join("") + atthtm;
      a1inp.onchange = () => a3inp.innerHTML = a1inp.files[1]
        ? "<em>[" + a1inp.files.length + " files selected]</em>"
        : a1inp.files[0] ? a1inp.files[0].name : "<span>Locate image&hellip;</span>";
      resbtn.onclick = pdbOpen;
      savbtn.onclick = () => {
        let chgs = 0,
          hlps = pfacnt.querySelectorAll('.chelp');
        hlps.forEach(el => el.classList.add("dnone"));
        Array.from(pfacnt.querySelectorAll('.label')).map(el => el.textContent)
        .forEach( k => /^_id$|^_rev$/.test(k)
          || !/isucc|iwarn/.test(window["p0" + k].className)
          || !++chgs || (fwg[k] = typTest(window["p0" + k].value, 1)[2]) );
        !a1inp.files.length || !++chgs
        || !(fwg.hasOwnProperty("_attachments") || (fwg._attachments = {}))
        || a1inp.files.forEach( (f, i) =>
          fwg._attachments[ !imganm2.value ? f.name : !a1inp.files[1]
            ? imganm2.value : imganm2.value.replace(/(?=\\.\\w+$|$)/, i > 9 ? i : "0" + i) ]
          = { content_type: f.type, data: f } );
        !chgs || !p0_id.value || !Object.keys(nm0cfgs).includes(txd5.DBNAME)
        || !window.PouchDB || PouchDB(txd5.DBNAME)
        .put(Object.assign({ _id: "", _rev: "" }, fwg), {}).then( trsp =>
          Object.keys(fwg).forEach( k => /^_id$|^_rev$/.test(k)
            || window["p0" + k].classList.remove("isucc", "iwarn") || (window["p0" + k].disabled = 1) )
          || (fwg = null) || hlps[0].classList.remove("dnone") || r2Show(trsp) )
        .then(txd5.cbf)
        .catch(err => hlps[1].classList.remove("dnone") || r2Show(err));
      }; //fwgUpd;
      pfacnt.querySelectorAll('.field-label button').forEach(btn => btn.onclick = txtaSel);
      Object.keys(fwg).forEach(k => /^_id$|^_rev$/.test(k) || (window["p0" + k].onblur = dataVld));
    }
  },
  viewRte = evt => {
    [nmflow, nmclip].forEach(el => el.classList.add("dnone"));
    nmtbod.innerHTML = nmclip.innerHTML = "";
    vidx < 4 || (nmdata.innerHTML = fwg = null);
    [ss0, ss1] = sortsel.value.split("."); //!evt || evt.target.id !== "sortsel" ||
    ( txd1.OPTS = { // used only if design doc is specified //!evt || evt.target.id !== "descswi" ||
      //startkey:   descswi.checked ? "~~~" : "",
      //endkey:     descswi.checked ? "" : "~~~",
      descending: !txd1.FILEID ? undefined : descswi.checked
    });
    if (!window.PouchDB || !txd1.DBNAME) {
      ftotal.innerText = "_";
      window.PouchDB || !txd1.DBNAME || r2con.textContent
      || r2Show("ALERT: PouchDB is not loaded. Database is inaccessible.");
      pdbssel.selectedIndex === 1
      || [nmflow, nmclip].some(el => !el.classList.contains('dnone')) || tabActv();
    } else if (vbas < 2) {
      !vbas || (r2con.textContent = ""); // keep msg left by filesChg, fileLoad
      !vbas ? tabActv() : nmclip.classList.remove("dnone") || clipsGen(evt);
    } else if (vbas) {
      r2con.textContent = "";
      nmflow.classList.remove("dnone");
      tblGen(evt);
    }
    !evt || !vbas || tidx !== 1 || tabActv();
  },
  viewChg = evt => {
    if (vidx > 3 && evt && evt.currentTarget.localName === 'a') { return tabActv(evt); }
    vidx || !viewsel.selectedIndex || (nmdata.innerHTML = "");
    vidx = !evt || evt.currentTarget.localName !== 'a' ? viewsel.selectedIndex
      : +evt.currentTarget.parentElement.dataset.tabidx;
    vidx < 4 || txd1.DBNAME || pdbssel.selectedIndex === 1 || (viewsel.selectedIndex = vidx = 0);
    vbas = viewsel.selectedIndex > 3 && +/\\d/.exec(viewsel.value);
    if (vidx !== 2) {
      (colssel.innerHTML = !vbas ? "" : copts[vbas < 5 ? 0 : 1]);
      vidx > 3 || (sortsel.innerHTML = "") || (colssel.selectedIndex = -1);
      descswi.checked = 0;
      bulkctrl.classList.add("dnone");
      filtctrl.classList.remove("dnone");
      v02inp.value = v01inp.value = filtinp.value = moveinp.value = "";
    }
    if (vidx < 4 && evt && [nmflow, nmclip].every(el => el.classList.contains("dnone"))) {
      return tabActv(evt);
    }
    let vkey;
    vidx < 4 || !(vkey = viewsel.value.replace(/-?\\d+$|^V\\d[:-]/g, "") || "myview")
    || ( v01inp.value = vkey + ( 1
      + ( Array.from(v01sel.options).map(o => o.value.includes(vkey) && /\\d+$/.exec(o.value))
        .filter(e => e).map(e => +e).sort().reverse()[0] || 1 ) ));
    vusr = "";
    ( vidx > 8 ? (nm0sets.p2vws[vusr = viewsel.value.replace(/^V\\d-/, "")] || "").cols || []
      : [ [0,3,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
        [1,2,3,4,5], [0,1,2,3,4,5,26], [1,2,7,8,18,19,20,21], [0,1,2] ][vidx - 4] || [] )
    .forEach(n => colssel.options[n].selected = true);
    vidx < 4 || !colssel.innerHTML || colsTog();
    vidx < 9 || (descswi.checked = (nm0sets.p2vws[vusr] || "").desc);
    txd1.FILEID = v03inp.value = (nm0sets.p2vws[vusr] || "").ddoc || "";
    txd1.VIEW = vidx > 8 && txd1.FILEID ? viewsel.value.replace(/^V\\d-/, "")
      : vbas === 4 ? "files-static" : vbas === 1 ? "files-contact" : "files-idxlist";
    viewRte(evt);
  },
  cfgsUpd = evt => {
    let cfg = nm0cfgs[txd1.DBNAME],
      ts0 = new Date().getTime(),
      db0 = pdb0inp.value.trim(),
      hlps = pdbcfg.querySelectorAll('.chelp');
    hlps.forEach(el => el.classList.add("dnone"));
    if (!evt || !cfg && !/pdb0btn/.test(evt.target.id)) {
      return;
    } else if (/(dbpw|dbun|orig)inp|pw1swi|[tv]01sel/.test(evt.target.id)) {
      evt.target.id !== "originp" || (cfg.remot.orig = originp.value.trim());
      evt.target.id !== "dbuninp" || (cfg.remot.un = dbuninp.value.trim());
      evt.target.id !== "dbpwinp" || (cfg.remot.pw = !cfg.remot.pw1 ? "" : dbpwinp.value.trim());
      evt.target.id !== "pw1swi"
      || (cfg.remot.pw = !(cfg.remot.pw1 = pw1swi.checked) ? "" : dbpwinp.value.trim());
      evt.target.id !== "t01sel" || (cfg.type0 = t01sel.value);
      evt.target.id !== "v01sel" || (cfg.view0 = v01sel.value);
      localStorage._nm0cfgs = JSON.stringify(nm0cfgs);
    } else if (/dbd[01]btn/.test(evt.target.id)
    && txd1.DBNAME && ddelinp.value === txd1.DBNAME && window.PouchDB) {
      cfg.tsdel = ts0;
      evt.target.id !== "dbd0btn" || PouchDB(txd1.DBNAME).compact().then( trsp =>
          hlps[2].classList.remove("dnone") || r2Show(trsp) )
          //|| !vidx || (viewsel.selectedIndex = vidx = 0) || viewChg() )
        .catch(err => hlps[3].classList.remove("dnone") || r2Show(err));
      evt.target.id !== "dbd1btn" || PouchDB(txd1.DBNAME).destroy().then(trsp => {
        let dbs = Array.from(opensel.options).map(o => o.value).filter(e => e && e !== txd1.DBNAME);
        [pdbssel, opensel, cntcsel].forEach( (el, i) => el.innerHTML
          = ["\\n      <option></option>", i ? "" : "\\n      <option>&plus; New DB</option>"]
            .concat(dbs.map(e => "\\n      <option>" + e + "</option>")).join("") + "\\n      " );
        opensel.value = nm0sets.dbdflt || "";
        cntcsel.value = nm0sets.dbcntc || "";
        //cfg.remot.pw = "";
        localStorage._nm0cfgs = JSON.stringify(nm0cfgs);
        hlps[2].classList.remove("dnone")
        || (pdbssel.selectedIndex = 0) || pdbOpen(0) || r2Show(trsp);
      }).catch(err => hlps[3].classList.remove("dnone") || r2Show(err));
    } else if (!txd1.DBNAME && una2inp.value && /^[a-z][0-9_a-z-]*$/.test(db0) && window.PouchDB) {
      new PouchDB(txd1.DBNAME = db0).info().then(trsp => {
        let dbs = Array.from(opensel.options).map(o => o.value).filter(e => e).concat(db0).sort();
        nm0cfgs[db0] || !( nm0cfgs[db0] = { type0: t01sel.value,
          view0: v01sel.value || nm0sets.vwdflt || "",
          tsset: ts0, tsdel: 0, user0: una2inp.value.trim() || nm0sets.uname || nm0sets.uemail || "",
          descr: pdb1inp.value || db0 + " project data",
          remot: { un: dbuninp.value.trim() || nm0sets.uname || "", pw: dbpwinp.value.trim(),
            pw1: pw1swi.checked, orig: originp.value.trim(), publ: 0 } })
        || (localStorage._nm0cfgs = JSON.stringify(nm0cfgs));
        [pdbssel, opensel, cntcsel].forEach( (el, i) => el.innerHTML
          = ["\\n      <option></option>", i ? "" : "\\n      <option>&plus; New DB</option>"]
            .concat(dbs.map(e => "\\n      <option>" + e + "</option>")).join("") + "\\n      " );
        opensel.value = nm0sets.dbdflt || "";
        cntcsel.value = nm0sets.dbcntc || "";
        pdbssel.value = db0; //opensel.value = //openswi.click();
        pdbOpen(1);
        hlps[0].classList.remove("dnone");
        nmdata.innerHTML = "\\n<pre class=pwrap>" + valStr(trsp, 2) + "</pre>\\n";
      }).catch(err => hlps[1].classList.remove("dnone") || r2Show(err));
    }
  },
  t1sChg = evt => {
    let dtOpts = typ => [ "string", "number", "boolean", "object", "array", "arr of str", "arr of nbr",
        "arr of bln", "arr of obj", "arr of arr", "arr of any", "null obj" ].map( e =>
          "\\n      <option" + (e !== typ ? ">" : " selected>") + e + "</option>" )
        .join("") + "\\n      ";
    if (evt && evt.target.id !== "t01sel") {
      let ntr,
        tkey = t01sel.value.replace(/-?\\d+$/, "") || "mytype";
      evt.target.localName !== 'select'
      || ( evt.target.parentElement.nextElementSibling.firstChild.value = [ "", "0", "false",
          "{ \\"key\\": \\"val\\" }", "[ ]", "[\\"\\"]", "[0]", "[true]", "[ { \\"key\\": \\"val\\" } ]",
          "[ [] ]", "[ \\"\\", 0, false, {}, [] ]", "null" ][evt.target.selectedIndex] );
      evt.target.parentElement.nextElementSibling
      || ( evt.target.parentElement.previousElementSibling.firstChild.value
        = typTest(evt.target.value)[1] );
      evt.target.parentElement.previousElementSibling
      || evt.target.parentElement.parentElement.nextElementSibling
      || !evt.target.value || !(ntr = document.createElement('tr'))
      || !( ntr.innerHTML = "<td><input type=text /></td><td><select class=anone>" + dtOpts()
        + "</select></td><td><input type=text /></td>" ) || !t1tbod.appendChild(ntr)
      || ntr.querySelectorAll('input, select').forEach(el => el.onchange = t1sChg);
      return t01inp.value || ( t01inp.value = tkey + ( 1
        + ( Array.from(t01sel.options).map(o => o.value.includes(tkey) && /\\d+$/.exec(o.value))
          .filter(e => e).map(e => +e).sort().reverse()[0] || 1 ) ));
    }
    t02inp.value = t01inp.value = "";
    t1tbod.innerHTML = Object.entries( t01sel.selectedIndex < 6
        ? pftyps[t01sel.value] || pftyps.new : nm0sets.p2typs[t01sel.value].t1 )
      .concat([["", ""]]).map( ([k, v], i) => k === "_rev" ? ""
        : "\\n      <tr><td><input type=text value=\\"" + k + "\\"" + (i ? "" : " disabled")
          + " /></td><td><select class=anone" + (i ? ">" : " disabled>") + dtOpts(typTest(v)[1])
          + "</select></td><td><input type=text value='"
          + valStr(v) + "' /></td></tr>" ).join("") + "\\n      ";
    t1tbod.querySelectorAll('input, select').forEach(el => el.onchange = t1sChg);
    !evt || evt.target.id !== "t01sel" || cfgsUpd(evt);
  },
  t0sChg = () => {
    let t0s = [ ["", ""], ["scrap", "No-frills, plain-text note"],
        ["srcdoc", "Web source document"], ["event", "Calendaring item or logging record"],
        ["memo", "Short memorandum or text msg"], ["contact", "Person's contact information"] ]
        .concat(Object.values(nm0sets.p2typs).map(to => to.t0));
    t01sel.innerHTML = t0s.map( ([k, v], i) =>
      "\\n      <option>" + k + "</option>" ).join("") + "\\n      ";
    t0tbod.innerHTML = t0s.map( ([k, v], i) => !i ? ""
      : "\\n      <tr><td>" + (i < 6 ? "" : "<label>")
        + "<input type=checkbox" + (i > 5 ? "" : " disabled")
        + " />&ensp;" + k + (i < 6 ? "" : "</label>")
        + "</td><td>" + v + "</td></tr>" ).join("") + "\\n      ";
  },
  v0sChg = () => {
    let v0v = v01sel.value,
      v0s = [ ["", ""], ["V1:noteclips", "Preview <em>event</em>/<em>memo</em>/<em>contact</em>'s"],
          ["V2:organized", "Notes/attach's by subdirectory"], ["V3:mutables", "All updatable notes"],
          ["V4:statics", "All one-off text posts (<em>memo</em>s)"],
          ["V5:deleted", "All discarded note IDs"] ]
        .concat(Object.values(nm0sets.p2vws).map(vo => vo.v0));
    v01sel.innerHTML = v0s.map( ([k, v]) =>
      "\\n      <option>" + k + "</option>" ).join("") + "\\n      ";
    v01sel.value = v0v;
    v0tbod.innerHTML = v0s.map( ([k, v], i) => !i ? ""
      : "\\n      <tr><td>" + (i < 6 ? "" : "<label>")
      + "<input type=checkbox" + (i > 5 ? "" : " disabled")
      + " />&ensp;" + k + (i < 6 ? "" : "</label>")
      + "</td><td>" + v + "</td></tr>" ).join("") + "\\n      ";
    v02sel.innerHTML = Array.from(viewsel.options).filter((o, i) => !i || i > 3)
      .map(o => "\\n      <option>" + o.value + "</option>").join("") + "\\n      ";
    v02sel.value = nm0sets.vwdflt || "";
  },
  viewApd = (add = viewsel.value) => {
    let vw2s = Object.values(nm0sets.p2vws).map(vo => vo.cbxs !== 0 && vo.v0[0]).filter(e => e);
    if (viewsel.options.length !== 9 + vw2s.length || add !== viewsel.value) {
      viewsel.innerHTML = Array.from(viewsel.options)
        .filter((o, i) => i < 9).map(o => "\\n      " + o.outerHTML)
        .concat( vw2s.map( e => "\\n      <option"
          + (txd1.DBNAME ? ">" : " disabled>") + e + "</option>" )).join("") + "\\n      ";
      viewsel.value = add;
      v0sChg();
    }
    !txd1.DBNAME || viewsel.selectedIndex > 3 || tabActv();
    //!(viewsel.selectedIndex = vidx = 5) || viewChg();
  },
  setsUpd = evt => {
    let hlps = pdbcfg.querySelectorAll('.chelp'),
      t0cs = t0tbod.querySelectorAll('[type=checkbox]:checked'),
      v0cs = v0tbod.querySelectorAll('[type=checkbox]:checked'),
      hid = vbas && document.querySelector(vbas > 1 ? qslrs[6] : qslrs[7]),
      ps = ["dbdflt", "dbdflt", "vwdflt", "dbcntc", "uname", "uemail", "usecfg", "useset"], //"ddoc"
      idx = evt && actrls.concat([use1swi, use2swi, t0abtn, t0dbtn, v0abtn, v0dbtn])
        .findIndex(el => el.id === evt.target.id);
    if (typeof idx !== 'number' || idx < 0) { return; }
    hlps.forEach(el => el.classList.add("dnone"));
    idx || (opensel.value = !openswi.checked ? "" : txd1.DBNAME);
    idx < 8 ? ( nm0sets[ps[idx]]
      = !idx ? opensel.value : idx > 5 ? evt.target.checked : evt.target.value )
    : idx < 9 ? ( !t01inp.value ? hlps[7].classList.remove("dnone")
      : hlps[6].classList.remove("dnone")
        || ( nm0sets.p2typs[t01inp.value] = { t0: [t01inp.value, t02inp.value],
          t1: Object.assign( { _id: "", _rev: "" },
            Object.fromEntries( Array.from(t1tbod.querySelectorAll('tr')).map( tr =>
              [tr.children[0].firstChild.value, typTest(tr.children[2].firstChild.value, 1)[2]] )
            .filter(e => e[0]) ) ) }) )
    : idx < 10 ? ( !t0cs.length ? hlps[9].classList.remove("dnone") : hlps[8].classList.remove("dnone")
      || t0cs.forEach(el => delete nm0sets.p2typs[el.parentElement.textContent.replace(/^\\s/, "")]) )
    : idx < 11 ? ( !vbas || !v01inp.value ? hlps[11].classList.remove("dnone")
      : hlps[10].classList.remove("dnone") || ( nm0sets.p2vws[v01inp.value]
        = { v0: ["V" + vbas + "-" + v01inp.value, v02inp.value], base: vbas, ddoc: v03inp.value,
          cols: Array.from(colssel.options)
            .map((o, i) => o.selected && i).filter(e => typeof e === 'number'),
          sort: sortsel.value, desc: descswi.checked, filt: filtinp.value, cbxs: !hid,
          hdrs: vbas < 2 && hdrsswi.checked, bods: vbas < 2 && bodsswi.checked } ) )
    : !v0cs.length ? hlps[13].classList.remove("dnone") : hlps[12].classList.remove("dnone")
      || v0cs.forEach(el => delete nm0sets.p2vws[el.parentElement.textContent.replace(/^\\s?V\\d-/, "")]);
    idx !== 8 || !t01inp.value || t0sChg() || !(t01sel.value = t01inp.value)
    || (t01inp.value = t02inp.value = "") || t1sChg();
    idx !== 9 || !t0cs.length || t0sChg() || !txd1.DBNAME || t1sChg();
    idx < 8 || idx > 9 || !txd1.DBNAME || ((nm0cfgs[txd1.DBNAME] || {}).type0 = t01sel.value)
    || (localStorage._nm0cfgs = JSON.stringify(nm0cfgs));
    idx < 10 || (idx < 11 && !v01inp.value) || (idx > 10 && !v0cs.length) || viewApd();
    //|| viewApd(idx > 10 ? null : (nm0sets.p2vws[v01inp.value] || "").v0[0]);
    idx !== 10 || !v01inp.value || !(v01sel.value = (nm0sets.p2vws[v01inp.value] || "").v0[0])
    || (v01inp.value = v02inp.value = "");
    idx < 10 || !txd1.DBNAME || v01sel.selectedIndex > -1 || (v01sel.selectedIndex = 2);
    idx < 10 || !txd1.DBNAME || !(((nm0cfgs[txd1.DBNAME] || {}).view0 = v01sel.value) || 1)
    || (localStorage._nm0cfgs = JSON.stringify(nm0cfgs));
    localStorage._nm0sets = JSON.stringify(nm0sets);
  },
  pdbSync = evt => {
    let cfg = nm0cfgs[txd1.DBNAME],
      hlps = pdbcfg.querySelectorAll('.chelp'),
      opt2 = !txd1.OPTS ? { live: false }
        : txd1.OPTS.hasOwnProperty("live") ? txd1.OPTS
        : Object.assign(txd1.OPTS, { live: false });
    hlps.forEach(el => el.classList.add("dnone"));
    if (cfg && evt && evt.target.id === "pfilbtn") {
      dbpwinp.value = originp.value ? "" : (cfg.remot || "").pw || "";
      dbuninp.value = originp.value ? "" : (cfg.remot || "").un || "";
      originp.value = originp.value ? "" : (cfg.remot || "").orig || "";
    } else if (cfg && evt && window.PouchDB) {
      let ori = /^(https?:\\/\\/)(.+?)\\/?$/.exec(cfg.remot.orig || "") || [],
        url = !(ori[1] && ori[2]) ? "" : ori[1]
          + (!cfg.remot.un || !dbpwinp.value ? "" : cfg.remot.un + ":" + dbpwinp.value + "@")
          + ori[2] + "/" + txd1.DBNAME,
        db2 = url && new PouchDB(url, { skip_setup: true });
      !db2 ? hlps[5].classList.remove("dnone")
      : new PouchDB(txd1.DBNAME).sync(db2, opt2)
        .then(trsp => {
          viewsel.selectedIndex = vidx = 2;
          ftotal.innerText = "_";
          nmflow.classList.add("dnone");
          nmtbod.innerHTML = vusr = vbas = "";
          pdbtot.innerHTML = "(last: " + pdbtot.innerHTML + ") &hellip;&quest;";
          pdbseq.innerHTML = "(last: " + pdbseq.innerText + ") &hellip;&quest;";
          pdbupd.innerText = new Date(cfg.tsupd = new Date().getTime()).toLocaleString();
          localStorage._nm0cfgs = JSON.stringify(nm0cfgs);
          (trsp.push && trsp.push.errors.length) || (trsp.pull && trsp.pull.errors.length)
          ? hlps[5].classList.remove("dnone") || r2Show(trsp)
          : hlps[4].classList.remove("dnone")
            || (nmdata.innerHTML = "\\n<pre class=pwrap>" + valStr(trsp, 2) + "</pre>\\n");
        }).catch(err => hlps[5].classList.remove("dnone") || r2Show(err));
    }
  },
  pdbOpen = evt => {
    let cfg,
      t0v = t01sel.value;
    pfacnt.innerHTML = fwg = null;
    !pdbssel.options[3] || (nmdata.innerHTML = "");
    dbpwinp.value = dbuninp.value = originp.value = "";
    pdbnam.innerText = txd1.DBNAME = pdbssel.selectedIndex < 2 ? "" : pdbssel.value;
    cfg = nm0cfgs[txd1.DBNAME] || "";
    pw1swi.checked = (cfg.remot || "").pw1;
    pw1swi.disabled = !cfg;
    pdbupd.innerText = !txd1.DBNAME ? "" : new Date(cfg.tsupd || 0).toLocaleString();
    pdbset.innerText = !txd1.DBNAME ? "" : new Date(cfg.tsset || 0).toLocaleString();
    pdbusr.innerText = !txd1.DBNAME ? "" : cfg.user0;
    pdbdsc.innerText = !txd1.DBNAME ? "" : cfg.descr;
    !window.PouchDB || !txd1.DBNAME ? (pdbseq.innerText = pdbtot.innerText = "")
    : PouchDB(txd1.DBNAME).info()
      .then(r => [pdbtot.innerText, pdbseq.innerText] = [r.doc_count, r.update_seq]).catch(r2Show);
    pdbssel.selectedIndex < 2
    ? pfahlp.classList.remove("dnone") || pfacnt.classList.add("dnone")
      || !(openswi.disabled = 1) || (viewsel.selectedIndex = vidx = evt === 0 ? 2 : 0)
    : pfahlp.classList.add("dnone") || pfacnt.classList.remove("dnone")
      || (openswi.disabled = 0) || evt === 1 || vidx > 3 || !v02sel.selectedIndex
      || (viewsel.selectedIndex = vidx = 3 + v02sel.selectedIndex);
    Array.from(viewsel.options).forEach((o, i) => i < 4 || (o.disabled = !txd1.DBNAME));
    openswi.checked = (txd1.DBNAME === nm0sets.dbdflt);
    (t01sel.value = cfg.type0 || cfg && "scrap") === t0v || t1sChg();
    if (evt === 0) {
      ftotal.innerText = "_";
      nmflow.classList.add("dnone");
      v01sel.value = nmtbod.innerHTML = vusr = vbas = "";
      v02inp.value = v01inp.value = v03inp.value = "";
    } else if (evt === 1) {
      v01sel.value = cfg.view0 || "";
      v01sel.selectedIndex > -1 || (v01sel.selectedIndex = 0);
      v02inp.value = v01inp.value = v03inp.value = "";
    } else {
      wipeinp.value = ddelinp.value = pdb1inp.value = pdb0inp.value = "";
      spdbswi.checked = slocswi.checked = 0;
      v01sel.value = !txd1.DBNAME ? "" : viewsel.value = cfg.view0 || "";
      v01sel.selectedIndex > -1 || (v01sel.selectedIndex = viewsel.selectedIndex = vidx = 0);
      viewChg();
      pdbssel.selectedIndex !== 1 || !(viewsel.selectedIndex = vidx = 2)
      || use1swi.checked || use1swi.click();
      (!vidx || vidx > 3) && !tidx || tabActv();
    }
  },
  pdbsGen = (dbs = []) => {
    let db1,
      ts0 = new Date().getTime(),
      cntcLite = d => ({
        _id:       d._id,
        name_full: d.name_full,
        name_user: d.name_user,
        roles:     [d.roles].flat(),
        email:     (d.emails || [""])[0],
        image_src: (d.image_src || "").replace(/^(?!https?:).*\\//, "")
      });
    nm0sets = /^{".+}$/.test(localStorage._nm0sets)
      && fncTry(JSON.parse, localStorage._nm0sets) || nm0sets;
    [ "uemail", "uname", "dbcntc", "dbdflt", "vwdflt", "bedit", "usecfg", "useset",
      "hlsty", "p2typs", "p2vws" ].every(pty => nm0sets.hasOwnProperty(pty))
    || ( localStorage._nm0sets = JSON.stringify( nm0sets = Object.assign(
      { uemail: "", uname: "", dbcntc: "", dbdflt: "", vwdflt: "V2:organized",
        bedit: 0, usecfg: 0, useset: 0, hlsty: "atom-one-light.css",
        p2typs: { mytype2: { t0: ["mytype2", "<em>[mytype2 description &hellip;]</em>"],
          t1: { _id: "", _rev: "", key2: "", key3: "" } }},
        p2vws: { myview2: { v0: ["V1-myview2", "<em>[myview2 description &hellip;]</em>"],
          base: 1, ddoc: "", cols: [], sort: "", desc: 0, filt: "", cbxs: 0, hdrs: 1, bods: 0 }} },
      nm0sets )));
    !nm0sets.hasOwnProperty("contcs") || delete nm0sets.contcs; //temp cleanup
    !nm0sets.u2typs || delete nm0sets.u2typs; //temp cleanup
    !nm0sets.u2vws || delete nm0sets.u2vws; //temp cleanup
    !nm0sets.hasOwnProperty("ddoc") || delete nm0sets.ddoc; //temp cleanup
    nm0cfgs = /^{".+}$/.test(localStorage._nm0cfgs)
      && fncTry(JSON.parse, localStorage._nm0cfgs) || nm0cfgs;
    dbs.forEach(e => nm0cfgs[e] || (nm0cfgs[e] = {}))
    || Object.values(nm0cfgs).forEach(v => delete v.ddoc0) //temp cleanup
    || Object.values(nm0cfgs)
      .every( val => ["type0", "view0", "tsset", "tsupd", "tsdel", "user0", "descr", "remot"]
        .every(pty => val.hasOwnProperty(pty)) )
    || ( localStorage._nm0cfgs = JSON.stringify( nm0cfgs = Object.fromEntries(
      Object.entries(nm0cfgs).map( oe =>
        [ oe[0], Object.assign(
          { type0: "scrap", view0: nm0sets.vwdflt, tsset: ts0, tsupd: ts0, tsdel: 0,
            user0: nm0sets.uname || nm0sets.uemail || "", descr: oe[0] + " project data",
            remot: { un: nm0sets.uname || "", pw: "", pw1: 1 , orig: "", publ: 0 } },
          oe[1].user0 && oe[1] || {} )] ) )));
    [[ "-res-img", "avatar000.png",
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" ]]
    .concat( !nm0sets.hlsty ? []
      : [["-res-css", nm0sets.hlsty, "../../a00/-res-hljs/" + nm0sets.hlsty]] )
    .forEach( ([f, k, v]) => !dbs.includes("a00") || !window.PouchDB ? (aurls[k] = v)
      : PouchDB("a00").getAttachment(f, k)
        .then(abl => aurls[k] = URL.createObjectURL(abl)).catch(r2Show).then(() => aurls[k] = v) );
    window.nm0 = {
      aurls, cntcs, nm0cfgs, nm0sets, txd1,
      r2Show, fncTry, htmTxt, valStr, mP1, jB1, jP1, idGen,
      filesChg, fileLoad, tabActv, p2Gen
    };
    !nm0sets.bedit || [moveinp, movebtn].forEach(elm => elm.classList.add("dnone"))
    || editbtn.classList.remove("dnone");
    [pdbssel, opensel, cntcsel].forEach( (el, i) => el.innerHTML
      = ["\\n      <option></option>", i ? "" : "\\n      <option>&plus; New DB</option>"]
        .concat(dbs.map(e => "\\n      <option>" + e + "</option>")).join("") + "\\n      " );
    cntcsel.value = nm0sets.dbcntc || "";
    !cntcsel.value || !window.PouchDB || !txd1.u1s.push(nm0sets.dbcntc)
    || !(db1 = PouchDB(nm0sets.dbcntc)).get("-res-img").then( adoc =>
      !adoc._attachments || Object.keys(adoc._attachments).forEach( akey =>
        db1.getAttachment("-res-img", akey)
        .then(abl => aurls[akey] = URL.createObjectURL(abl)) ) ).catch(r2Show)
    || db1.allDocs({
        startkey:     "!",
        endkey:       "!~",
        include_docs: true
      }).then(re => re.rows.forEach(r => cntcs[r.doc.name_user || r.id] = cntcLite(r.doc)))
      .catch(r2Show);
    una2inp.value = nm0sets.uname || nm0sets.uemail || "";
    unaminp.value = nm0sets.uname || "";
    uemlinp.value = nm0sets.uemail || "";
    !nm0sets.useset || use2swi.checked || use2swi.click();
    viewApd() || viewsel.options.length > 9 || v0sChg();
    t0sChg();
    t1sChg();
    opensel.value = pdbssel.value = nm0sets.dbdflt || "";
    !pdbssel.value || pdbOpen();
  };
pdbssel.onchange = pdbOpen;
viewsel.onchange = viewChg;
colssel.onchange = colsTog;
[sortsel, descswi].forEach(elm => elm.onchange = viewRte);
filtbtn.onclick = filtExe;
blktrig.onclick = bulkTog;
[movebtn, editbtn, delbtn].forEach(btn => btn.onclick = filesChg);
document.querySelectorAll(qslrs[2]).forEach(anc => anc.onclick = sdirXpd);
document.querySelectorAll('#nmtbl td:first-of-type>input').forEach(inp => inp.onchange = chksTog);
tabncs.forEach(anc => anc.onclick = viewChg);
[pfilbtn, syncbtn].forEach(btn => btn.onclick = pdbSync);
[originp, dbuninp, dbpwinp].forEach(btn => btn.onblur = cfgsUpd);
[pw1swi, dbd0btn, dbd1btn, pdb0btn].forEach(btn => btn.onclick = cfgsUpd);
t01sel.onchange = t1sChg;
v01sel.onchange = cfgsUpd;
[[use1swi, pdbcfg], [use2swi, nmsets]]
.forEach( ([sw, el]) => sw.onclick = evt => el.querySelectorAll('p')
  .forEach(p => p.classList[!sw.checked ? "add" : "remove"]("dnone")) || setsUpd(evt) );
[t0abtn, v0abtn, t0dbtn, v0dbtn].forEach(btn => btn.onclick = setsUpd);
actrls.forEach(elm => elm.onchange = setsUpd);
wipebtn.onclick = storDel;
jselbtn.onclick = txtaSel;
js2txta.onblur = js2Eval;
( p2Gen = () => !window.PouchDB || !PouchDB.allDbs
  ? pdbsGen() : PouchDB.allDbs().then(pdbsGen).catch(r2Show) )();`;

export { dwraps, nmpage, nmscr };
