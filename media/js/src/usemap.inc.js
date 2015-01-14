/**
 * Population density by country.
 * View countries under mouse cursor.
 * egax@bk.ru, 2013-15.
 */
function rotate() {
  var tval = parseFloat(document.getElementById('tvalue').value);
  dw.rotateCarta(tval);
  dw.draw();
}
function proj() {
  dw.changeProject(document.getElementById('projlist').value);
  dw.draw();
}
// density color by country
function densityColor(cntryname) {
  var ds = INFOCNT[cntryname] ? INFOCNT[cntryname][0] : 0;
  return (
    (ds < 3) ? 'rgb(243,245,248)' :
    (ds < 10) ? 'rgb(208,217,227)' :
    (ds < 30) ? 'rgb(162,179,200)' :
    (ds < 100) ? 'rgb(137,159,186)' :
    (ds < 300) ? 'rgb(113,140,172)' :
    (ds < 1000) ? 'rgb(66,102,145)' : 'rgb(19,64,117)');
}
// tooltip under cursor
function infobox(ev, label) {
  var mtip = document.getElementById('maptooltip');
  if (dw.m.pmap && label) {
    mtip.innerHTML = label;
    mtip.style.display = 'block';
    mtip.style.left = ev.clientX + window.pageXOffset + 'px';
    mtip.style.top = ev.clientY + window.pageYOffset - mtip.offsetHeight * 1.2 + 'px';
  } else {
    mtip.style.display = 'none';
  }
}
// click to zoom one
function zoomOne(dw, pts, ev) {
  if (dw.m.pmap) {
    var m = dw.mflood[dw.m.pmap];
    dw.tmp_mflood = dw.mflood;
    dw.tmp_marea = dw.marea;
    // reset obj and area store
    dw.mflood = {}; dw.marea = {}; dw.m.pmap = undefined;
    if (dw.isTurnable()) {
      var dst = dw.fromPoints(pts, true);
      if (dst) dw.initProj(' +lon_0=' + dst[0] + ' +lat_0=' + dst[1]);
    } else
      dw.centerCarta(pts[0], pts[1], true);
    dw.scaleCarta(1); // scale twice to fix bug with labels
    dw.scaleCarta(5);
    // load selected country
    dw.loadCarta([[m['ftype'], m['ftag'], m['coords'], m['label'], m['centerof']]]);
    dw.loadCarta(dw.createMeridians());
    // load cities in selected country
    for (var i in CITIES[m['label']]) {
      var o = CITIES[m['label']][i];
      dw.loadCarta([['DotPort', o[0], o[1], o[0]]]);
    }
    // help message
    var mcoord = document.getElementById('tcoords');
    mcoord.innerHTML = 'Кликните для возврата к обзорной карте';
    dw.clfunc.afterclick = zoomBack;
    dw.draw();
  }
}
// click to restore full view
function zoomBack(dw, pts, ev) {
  dw.mflood = dw.tmp_mflood;
  dw.marea = dw.tmp_marea;
  delete dw.tmp_mflood;
  delete dw.tmp_marea;
  dw.scaleCarta(1);
  dw.scaleCarta(1);
  dw.m.doreload = true; // recalc points for obj in mflood
  if (!dw.isTurnable()) {
    var centerof = dw.centerOf();
    dw.centerCarta(centerof[0] + dw.m.offset[0] - dw.m.scaleoff[0], 
                   centerof[1] + dw.m.offset[1] - dw.m.scaleoff[1], true);
  }
  var mcoord = document.getElementById('tcoords');
  mcoord.innerHTML = 'Кликните по стране для показа городов';
  dw.clfunc.afterclick = zoomOne;
  dw.draw();
}
function init() {
  var mtab = document.createElement('table');
  mtab.width = '100%';
  mtab.style.borderCollapse = 'collapse';
  var row = document.createElement('tr');
  row.style.height = '1px';
  row.style.backgroundColor = '#d2e0f0';
  mtab.appendChild(row);

  var col = document.createElement('td');
  col.width = '20%';
  var el = document.createElement('h2');
  el.appendChild(document.createTextNode('Население мира'));
  el.style.padding = '0';
  el.style.margin = '0';
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.width = '15%';
  col.align = 'center';
  var el = document.createElement('input');
  el.type = 'text';
  el.size= '3';
  el.id = 'tvalue';
  el.value= '1';
  col.appendChild(el);
  var el = document.createElement('button');
  el.onclick = rotate;
  el.appendChild(document.createTextNode('rotate'));
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.width = '15%';
  col.align = 'center';
  col.appendChild(document.createTextNode('Проекции '));
  var projlist = el = document.createElement('select');
  el.id = 'projlist';
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.align = 'center';
  col.id = 'tcoords';
  col.innerHTML = 'Кликните по стране для показа городов';
  row.appendChild(col);
  document.body.appendChild(mtab);

  var row = document.createElement('tr');
  var col = document.createElement('td');
  col.colSpan = '10';
  col.id = 'mcol';
  row.appendChild(col);
  mtab.appendChild(row);
  col.style.paddingLeft = col.offsetWidth/15 + 'px';
  col.style.paddingRight = col.offsetWidth/15 + 'px';
  document.body.appendChild(mtab);

  // domap tooltip
  var el = document.createElement('div');
  el.id = 'maptooltip';
  el.style.padding = '5px';
  el.style.color = '#333333';
  el.style.font = '12px Verdana';
  el.style.border = '2px solid rgba(19,64,117,0.5)';
  el.style.borderRadius = '4px';
  el.style.backgroundColor = 'rgba(250,250,250,0.9)';
  el.style.position = 'absolute';
  el.style.zIndex = '10000';
  el.onmousemove = function(){ this.innerHTML = ''; };
  document.body.appendChild(el);

  dw = new dbCarta({
    id:'mcol', 
    height:col.offsetHeight,
    mapbg: 'rgb(255,127,0)',
    scalebg: 'rgba(19,64,117,0.2)'
  });
  dw.style.backgroundColor = 'white';
  dw.style.border = '1px solid rgb(39,75,109)';
  dw.style.borderRadius = '7px';
  // callbacks
  dw.extend(dw.clfunc, {
    onmousemove: function(dw, sd, dd, ev) {
      var mcoord = document.getElementById('tcoords');
      var mtip, label = '';
      if (dw.m.pmap) {
        var o, m = dw.mflood[dw.m.pmap];
        // cities count
        if (o = CITIES[m['label']]) label = ' : ' + o.length + ' городов';
        label = m['label'] + ' : ' + dw.m.pmap.split('_')[1] + label;
        // tooltip
        var ds = INFOCNT[m['label']] ? INFOCNT[m['label']][0] : 0;
        mtip = m['label'] + '<br>' + 'Плотность населения: ' + ds;
      }
      // text
      mcoord.innerHTML = label;
      infobox(ev, mtip);
      dw.paintCoords(dd);
    },
    afterclick: zoomOne
  });
  // countries
  for (var i in COUNTRIES) {
    var mcntryname = COUNTRIES[i][3],
        mpart = COUNTRIES[i],
        mabbr = mpart[1],
        mcoords = mpart[2];
    var dclr = densityColor(mcntryname);
    // add new layers
    if (!dw.mopt[dclr]) dw.mopt[dclr] = {cls: 'Polygon', fg: 'silver', bg: dclr};
    dw.loadCarta([[dclr, mabbr, mcoords, mcntryname, undefined, true]]);
  }
  delete COUNTRIES;
  // projlist
  for(var i in dw.projlist) {
    var projname = dw.projlist[i].split(' ')[0].split('=')[1];
    el = document.createElement('option');
    el.value = i;
    el.appendChild(document.createTextNode(projname));
    projlist.appendChild(el);
  }
  projlist.onchange = proj;
  proj();
}