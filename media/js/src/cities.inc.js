/**
 * World's cities by countries.
 * egax@bk.ru, 2013-15.
 */
function draw(opt) {
  var centerof;
  if (opt) {
    var coords = eval('[' + opt.target.value + ']');
    if (!centerof) centerof = coords;
    dw.loadCarta([['DotPort', opt.target.innerHTML, [coords], opt.target.innerHTML, null, 1]]);
  }
  if (centerof) {
    var points = dw.toPoints(centerof, true);
    dw.centerCarta(points[0] + dw.m.offset[0], points[1] + dw.m.offset[1]);
  }
  dw.draw();
}
function refresh() {
  window.location.reload(false);
}
function init() {
  var mtab = document.createElement('table');
  mtab.style.borderCollapse = 'collapse';
  var row = document.createElement('tr');
  row.style.height = '1px';
  row.style.backgroundColor = '#d2e0f0';
  mtab.appendChild(row);

  var col = document.createElement('td');
  col.width = '15%';
  col.style.whiteSpace = 'nowrap';
  var el = document.createElement('h2');
  el.appendChild(document.createTextNode("Города мира"));
  el.style.margin = '0';
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.align = 'center';
  col.id = 'tcoords';
  row.appendChild(col);

  var row = document.createElement('tr');
  mtab.appendChild(row);

  var col = document.createElement('td');
  col.width = '15%';
  col.style.padding = '0';
  col.style.verticalAlign = 'top';

  var citylist = el = document.createElement('dl');
  el.id = 'citylist';
  el.style.margin = '0';
  el.style.padding = '0';
  el.style.fontSize = 'smaller';
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.id = 'mcol';
  col.style.padding = '0';
  col.style.verticalAlign = 'top';
  row.appendChild(col);
  document.body.appendChild(mtab);

  citylist.style.height = col.offsetHeight + 'px';
  citylist.style.overflow = 'auto';

  dw = new dbCarta({id:'mcol', height:col.offsetHeight});
  dw.extend(dw.mopt['DotPort'], {scale: 1, labelscale: 1});
  dw.changeProject(102); // miller proj
  // worldmap img
  var im = new Image();
  im.src = IMGMAP['wrld_small_mill'];
  im.onload = function() {
    dw.loadCarta([{0:'.Image', 1:'wrld', 2:[[-179.99,132],[179.99,-132]], 6:this}]);
    dw.m.bgimg = dw.mflood['.Image_wrld']; // mark as bg
    dw.loadCarta(dw.createMeridians());
    dw.draw();
  };
  for (var cntryname in CITIES) {
    var el = document.createElement('dt');
    el.style.fontStyle = 'italic';
    el.style.fontWeight = 'bolder';
    el.appendChild(document.createTextNode(cntryname));
    citylist.appendChild(el);
    for (var mpart in CITIES[cntryname]) {
      var el2 = document.createElement('dd');
      el2.value = CITIES[cntryname][mpart][1];
      el2.appendChild(document.createTextNode(CITIES[cntryname][mpart][0]));
      el2.onclick = draw;
      citylist.appendChild(el2);
    }
  };
  delete CITIES;
  // curr. object
  dw.clfunc.onmousemove = function(dw, sd, dd) {
    var mcoord = document.getElementById('tcoords');
    var label = '';
    if (dw.m.pmap) {
       var o = dw.mflood[dw.m.pmap];
       label = o['label'] + ' : ' + o['coords'];
    }
    mcoord.innerHTML = label;
    dw.paintCoords(dd);
  }
}
