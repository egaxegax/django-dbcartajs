/**
 * Moscow Rail map.
 * View lines and stations with additional info.
 * egax@bk.ru, 2013-14.
 */
function findstation(){
  var stationlist = document.getElementById('stationlist'),
      opt = stationlist.options[stationlist.selectedIndex];
  if (opt) {
    var centerofpts = dw.mflood[opt.value]['pts'];
    dw.centerCarta(centerofpts[0][0] + dw.m.offset[0], centerofpts[0][1] + dw.m.offset[1]);
    dw.draw();
    drawcrosshair();
  }
}
function drawcrosshair() {
  var ctx = dw.getContext('2d');
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.beginPath();
  ctx.moveTo(dw.width/2.0, 0);
  ctx.lineTo(dw.width/2.0, dw.height);
  ctx.moveTo(0, dw.height/2.0);
  ctx.lineTo(dw.width, dw.height/2.0);
  ctx.lineWidth = 15;
  ctx.strokeStyle = 'rgba(100,100,200,0.2)';
  ctx.stroke();
  ctx.restore();
}
function init() {
  var mtab = document.createElement('table');
  mtab.width = '100%';
  mtab.style.borderCollapse = 'collapse';
  var row = document.createElement('tr');
  row.style.height = '1px';
  row.style.backgroundColor = 'rgb(230,230,230)';
  mtab.appendChild(row);

  var col = document.createElement('td');
  col.width = '40%';
  var el = document.createElement('h2');
  el.appendChild(document.createTextNode('Московские железные дороги'));
  el.style.padding = '0';
  el.style.margin = '0';
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.width = '30%';
  col.align = 'center';
  col.appendChild(document.createTextNode('Станции '));
  var stationlist = el = document.createElement('select');
  el.id = 'stationlist';
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.align = 'center';
  col.id = 'coords';
  row.appendChild(col);

  var row = document.createElement('tr');
  var col = document.createElement('td');
  col.colSpan = '10';
  col.id = 'mcol';
  col.style.padding = "0";
  row.appendChild(col);
  mtab.appendChild(row);
  document.body.appendChild(mtab);

  dw = new dbCarta({
    id: 'mcol',
    height: col.offsetHeight,
    viewportx: 300,
    viewporty: 400,
    scalebg: 'rgba(100,200,100,0.2)'
  });
  dw.style.backgroundColor = 'rgb(240,245,251)';
  // define new layers
  var route = function(o){ return dw.extend({cls: 'Line', width: 5, anchor: ['start', 'middle'], labelscale: 1}, o||{}) },
      route_d = function(o){ return route(dw.extend({width: 1, fg: 'white', dash: [4,2]}, o||{})) },
      interchange = function(o){ return route(dw.extend({fg: 'black', join: 'round', cap: 'round', width: 6}, o||{})) },
      interchange_d = function(o) { return interchange(dw.extend({fg: 'white', width: 5}, o||{})) },
      station = function(o){ return dw.extend({cls: 'Dot', bg: 'white', size: 3, width: 5, labelscale: 1}, o||{}) },
      inst = function(o){ return station(dw.extend({fg: '#a5a6aa', labelcolor: o['labelcolor']}, o)) },
      inst_l = function(o){ return inst(dw.extend({bg: o['labelcolor'], fg: o['labelcolor']}, o)) },
      rst = function(o){ return station(dw.extend({cls: 'Rect', size: 8, width: 4, join: 'round', labelcolor: 'black'}, o)) },
      rst_d = function(o){ return rst(dw.extend({size: 3}, o)) },
      rst_l = function(o){ return rst(dw.extend({labelcolor: o['fg']}, o)) },
      ost = function(o){ return rst(dw.extend({size: 3, width: 1, fg: 'white'}, o)) };
  // metro lines
  dw.extend(dw.mopt, {
    'mr': route({fg: '#a5a6aa'}),
    'r1': route({fg: '#f92b40'}),
    'r2': route({fg: '#3e8249'}),
    'r3': route({fg: '#0055ac'}),
    'r4': route({fg: '#0293e4'}),
    'r5': route({fg: '#904736'}),
    'r6': route({fg: '#f37e17'}),
    'r7': route({fg: '#8b539e'}),
    'r8': route({fg: '#fcc932'}),
    'r9': route({fg: '#838287'}),
    'r10': route({fg: '#9ec167'}),
    'r11': route({fg: '#81cec8'}),
    'r12': route({fg: '#000000'})
  });
  // rail lines
  dw.extend(dw.mopt, {
    't1': route({fg: '#f6422b'}),
    't2': route({fg: '#005a96'}),
    't3': route({fg: '#8fc442'}),
    't4': route({fg: '#29c0d3'}),
    't5': route({fg: '#9f678e'}),
    't6': route({fg: '#702c8f'}),
    't7': route({fg: '#f8733b'}),
    't8': route({fg: '#1b8cce'}),
    't9': route({fg: '#fdcd45'}),
    't10': route({fg: '#14a256'}),
    't11': route({fg: '#eb479d'}),
    'monorail': route({fg: '#2C87C5', width: 2, labelcolor: '#2C87C5', anchor: ['start', 'bottom']})
  });
  // roads
  dw.extend(dw.mopt, {
    'mkad': route({cls: 'Polygon', bg: 'white', fg: 'rgb(180,180,180)', width: 1, anchor: ['center', 'middle']})
  });
  // lines ext
  dw.extend(dw.mopt, {
    'mr_1': route({fg: dw.mopt['mr'].fg, labelcolor: dw.mopt['mr'].fg, anchor: ['end', 'middle']}),
    'mr_2': route({fg: dw.mopt['mr'].fg, labelcolor: dw.mopt['mr'].fg, anchor: ['start', 'middle']}),
    't2_ext': route_d(),
    't3_ext': route_d(),
    't7_ext': route_d()
  });
  // interchanges
  dw.extend(dw.mopt, {
    'interchange': interchange(),
    'interchange_d': interchange_d(),
    'interchange_dl': interchange_d({dash: [1,5]})
  });
  // metro stations
  dw.extend(dw.mopt, {
    's1': inst_l({labelcolor: dw.mopt['r1'].fg, anchor: ['center', 'bottom']}),
    's1_1': inst({labelcolor: dw.mopt['r1'].fg, anchor: ['start', 'top']}),
    's1_2': inst({labelcolor: dw.mopt['r1'].fg, anchor: ['start', 'top']}),
    's1_3': inst({labelcolor: dw.mopt['r1'].fg, anchor: ['end', 'bottom']}),
    's1_4': inst_l({labelcolor: dw.mopt['r1'].fg, anchor: ['center', 'top']}),
    's2': inst_l({labelcolor: dw.mopt['r2'].fg, anchor: ['end', 'middle']}),
    's2_1': inst({labelcolor: dw.mopt['r2'].fg, anchor: ['end', 'middle']}),
    's2_2': inst({labelcolor: dw.mopt['r2'].fg}),
    's2_3': inst({labelcolor: dw.mopt['r2'].fg, anchor: ['center', 'top']}),
    's2_4': inst_l({labelcolor: dw.mopt['r2'].fg, anchor: ['end', 'top']}),
    's3': inst_l({labelcolor: dw.mopt['r3'].fg}),
    's3_1': inst({labelcolor: dw.mopt['r3'].fg}),
    's3_2': inst({labelcolor: dw.mopt['r3'].fg, anchor: ['end', 'top']}),
    's3_3': inst({labelcolor: dw.mopt['r3'].fg, anchor: ['end', 'bottom']}),
    's3_4': inst({labelcolor: dw.mopt['r3'].fg, anchor: ['start', 'top']}),
    's4': inst_l({labelcolor: dw.mopt['r4'].fg, anchor: ['start', 'bottom']}),
    's4_1': inst({labelcolor: dw.mopt['r4'].fg}),
    's4_2': inst({labelcolor: dw.mopt['r4'].fg, anchor: ['end', 'bottom']}),
    's5': inst({labelcolor: dw.mopt['r5'].fg}),
    's5_1': inst({labelcolor: dw.mopt['r5'].fg, anchor: ['end', 'bottom']}),
    's5_2': inst({labelcolor: dw.mopt['r5'].fg, anchor: ['start', 'top']}),
    's5_3': inst({labelcolor: dw.mopt['r5'].fg, anchor: ['start', 'bottom']}),
    's5_4': inst({labelcolor: dw.mopt['r5'].fg, anchor: ['end', 'middle']}),
    's6': inst_l({labelcolor: dw.mopt['r6'].fg, anchor: ['center', 'bottom']}),
    's6_1': inst({labelcolor: dw.mopt['r6'].fg}),
    's6_2': inst({labelcolor: dw.mopt['r6'].fg, anchor: ['end', 'bottom']}),
    's6_3': inst({labelcolor: dw.mopt['r6'].fg, anchor: ['center', 'top']}),
    's6_4': inst_l({labelcolor: dw.mopt['r6'].fg, anchor: ['center', 'top']}),
    's6_5': inst({labelcolor: dw.mopt['r6'].fg, anchor: ['start', 'middle']}),
    's7': inst_l({labelcolor: dw.mopt['r7'].fg}),
    's7_1': inst({labelcolor: dw.mopt['r7'].fg, anchor: ['end', 'middle']}),
    's7_2': inst({labelcolor: dw.mopt['r7'].fg, anchor: ['start', 'middle']}),
    's7_3': inst({labelcolor: dw.mopt['r7'].fg, anchor: ['center', 'top']}),
    's7_4': inst_l({labelcolor: dw.mopt['r7'].fg, anchor: ['end', 'top']}),
    's7_5': inst({labelcolor: dw.mopt['r7'].fg, anchor: ['end', 'bottom']}),
    's7_6': inst({labelcolor: dw.mopt['r7'].fg, anchor: ['end', 'top']}),
    's8': inst_l({labelcolor: dw.mopt['r8'].fg, anchor: ['center', 'bottom']}),
    's8_1': inst({labelcolor: dw.mopt['r8'].fg, anchor: ['start', 'bottom']}),
    's8_2': inst({labelcolor: dw.mopt['r8'].fg, anchor: ['center', 'top']}),
    's8_3': inst({labelcolor: dw.mopt['r8'].fg, anchor: ['start', 'top']}),
    's8_4': inst({labelcolor: dw.mopt['r8'].fg, anchor: ['end', 'bottom']}),
    's9': inst_l({labelcolor: dw.mopt['r9'].fg, anchor: ['center', 'bottom']}),
    's9_1': inst({labelcolor: dw.mopt['r9'].fg, anchor: ['start', 'middle']}),
    's9_2': inst({labelcolor: dw.mopt['r9'].fg, anchor: ['center', 'bottom']}),
    's9_3': inst({labelcolor: dw.mopt['r9'].fg, anchor: ['end', 'middle']}),
    's9_4': inst({labelcolor: dw.mopt['r9'].fg, anchor: ['center', 'top']}),
    's9_5': inst_l({labelcolor: dw.mopt['r9'].fg, anchor: ['end', 'middle']}),
    's9_6': inst({labelcolor: dw.mopt['r9'].fg, anchor: ['start', 'bottom']}),
    's10': inst_l({labelcolor: dw.mopt['r10'].fg,  anchor: ['end', 'middle']}),
    's10_1': inst({labelcolor: dw.mopt['r10'].fg}),
    's10_2': inst({labelcolor: dw.mopt['r10'].fg, anchor: ['center', 'bottom']}),
    's10_3': inst({labelcolor: dw.mopt['r10'].fg, anchor: ['end', 'top']}),
    's10_4': inst_l({labelcolor: dw.mopt['r10'].fg}),
    's11_1': inst({labelcolor: dw.mopt['r11'].fg, anchor: ['start', 'bottom']}),
    's11_2': inst({labelcolor: dw.mopt['r11'].fg, anchor: ['center', 'bottom']}),
    's12_1': inst({labelcolor: dw.mopt['r12'].fg}),
    's12_2': inst({labelcolor: dw.mopt['r12'].fg, anchor: ['end', 'top']}),
    'sMono': station({fg: dw.mopt['monorail'].fg, width: 2, anchor: ['end', 'bottom']}),
    'sMono_1': station({fg: dw.mopt['monorail'].fg, width: 2, anchor: ['center', 'bottom']}),
    'sMono_2': station({fg: dw.mopt['monorail'].fg, width: 2, anchor: ['start', 'bottom']}),
    'sMono_3': station({fg: dw.mopt['monorail'].fg, width: 2, anchor: ['end', 'top']})
  });
  // rail stations
  dw.extend(dw.mopt, {
    'mr1': rst({fg: dw.mopt['mr'].fg, anchor: ['center', 'top']}),
    'a1': rst({fg: dw.mopt['t1'].fg, anchor: ['end', 'middle']}),
    'a1_1': rst({fg: dw.mopt['t1'].fg, anchor: ['center', 'bottom']}),
    'a1_2': rst({fg: dw.mopt['t1'].fg, anchor: ['center', 'top']}),
    'a1_3': rst({fg: dw.mopt['t1'].fg}),
    'a1_4': rst({fg: dw.mopt['t1'].fg, anchor: ['start', 'bottom']}),
    'a1_5': ost({anchor: ['end', 'middle']}),
    'a1_6': ost({anchor: ['start', 'middle']}),
    'a2': rst({fg: dw.mopt['t2'].fg, anchor: ['end', 'bottom']}),
    'a2_1': rst({fg: dw.mopt['t2'].fg, anchor: ['end', 'middle']}),
    'a2_2': rst_l({fg: dw.mopt['t2'].fg, anchor: ['start', 'middle']}),
    'a2_3': rst({fg: dw.mopt['t2'].fg, anchor: ['start', 'middle']}),
    'a2_4': rst({fg: dw.mopt['t2'].fg, anchor: ['end', 'top']}),
    'a2_5': ost({anchor: ['start', 'middle']}),
    'a2_6': ost({anchor: ['end', 'middle']}),
    'a3': rst({fg: dw.mopt['t3'].fg, anchor: ['end', 'middle']}),
    'a3_1': rst({fg: dw.mopt['t3'].fg, anchor: ['start', 'middle']}),
    'a3_2': rst({fg: dw.mopt['t3'].fg, anchor: ['center', 'bottom']}),
    'a3_3': rst_l({fg: dw.mopt['t3'].fg, anchor: ['start', 'middle']}),
    'a3_4': ost({anchor: ['end', 'middle']}),
    'a3_5': ost({anchor: ['start', 'middle']}),
    'a4': rst({fg: dw.mopt['t4'].fg, anchor: ['end', 'middle']}),
    'a4_1': rst({fg: dw.mopt['t4'].fg, anchor: ['end', 'top']}),
    'a4_2': rst({fg: dw.mopt['t4'].fg, anchor: ['center', 'bottom']}),
    'a4_3': rst({fg: dw.mopt['t4'].fg}),
    'a4_4': rst({fg: dw.mopt['t4'].fg}),
    'a4_5': rst({fg: dw.mopt['t4'].fg, anchor: ['end', 'bottom']}),
    'a4_6': rst({fg: dw.mopt['t4'].fg, anchor: ['start', 'top']}),
    'a4_7': ost({anchor: ['end', 'middle']}),
    'a4_8': ost({anchor: ['start', 'middle']}),
    'a5': rst({fg: dw.mopt['t5'].fg, anchor: ['end', 'bottom']}),
    'a5_1': rst({fg: dw.mopt['t5'].fg, anchor: ['center', 'bottom']}),
    'a5_2': rst({fg: dw.mopt['t5'].fg, anchor: ['start', 'top']}),
    'a5_3': rst({fg: dw.mopt['t5'].fg, anchor: ['end', 'top']}),
    'a5_4': ost({anchor: ['end', 'middle']}),
    'a5_5': ost({anchor: ['start', 'middle']}),
    'a5_6': ost({anchor: ['center', 'bottom']}),
    'a5_7': ost({anchor: ['center', 'top']}),
    'a6': rst({fg: dw.mopt['t6'].fg, anchor: ['start', 'middle']}),
    'a6_1': rst({fg: dw.mopt['t6'].fg, anchor: ['center', 'bottom']}),
    'a6_2': rst({fg: dw.mopt['t6'].fg, anchor: ['start', 'middle']}),
    'a6_3': rst({fg: dw.mopt['t6'].fg, anchor: ['end', 'top']}),
    'a6_4': ost({anchor: ['end', 'middle']}),
    'a6_5': ost({anchor: ['start', 'middle']}),
    'a6_6': ost({anchor: ['center', 'bottom']}),
    'a6_7': ost({anchor: ['center', 'top']}),
    'a7': rst({fg: dw.mopt['t7'].fg, anchor: ['end', 'middle']}),
    'a7_1': rst({fg: dw.mopt['t7'].fg, anchor: ['start', 'middle']}),
    'a7_2': rst_l({fg: dw.mopt['t7'].fg, anchor: ['end', 'top']}),
    'a7_3': ost({anchor: ['end', 'middle']}),
    'a7_4': ost({anchor: ['end', 'top']}),
    'a7_5': ost({anchor: ['start', 'middle']}),
    'a7_6': ost({anchor: ['end', 'middle']}),
    'a8': rst({fg: dw.mopt['t8'].fg, anchor: ['start', 'bottom']}),
    'a8_2': rst({fg: dw.mopt['t8'].fg, anchor: ['end', 'middle']}),
    'a8_3': rst({fg: dw.mopt['t8'].fg, anchor: ['start', 'middle']}),
    'a8_4': rst({fg: dw.mopt['t8'].fg, anchor: ['center', 'bottom']}),
    'a8_5': rst({fg: dw.mopt['t8'].fg, anchor: ['start', 'top']}),
    'a8_6': ost({anchor: ['end', 'middle']}),
    'a8_7': ost({anchor: ['start', 'middle']}),
    'a9': rst({fg: dw.mopt['t9'].fg, anchor: ['end', 'middle']}),
    'a9_1': rst({fg: dw.mopt['t9'].fg, anchor: ['end', 'top']}),
    'a9_2': rst({fg: dw.mopt['t9'].fg, anchor: ['start', 'middle']}),
    'a9_3': rst({fg: dw.mopt['t9'].fg, anchor: ['start', 'top']}),
    'a9_4': rst({fg: dw.mopt['t9'].fg, anchor: ['center', 'top']}),
    'a9_5': rst({fg: dw.mopt['t9'].fg, anchor: ['center', 'bottom']}),
    'a9_6': rst({fg: dw.mopt['t9'].fg, anchor: ['start', 'middle']}),
    'a9_7': ost({anchor: ['end', 'middle']}),
    'a9_8': ost({anchor: ['start', 'middle']}),
    'a9_9': ost({anchor: ['center', 'bottom']}),
    'a9_10': rst_d({fg: dw.mopt['t9'].fg}),
    'a10': rst({fg: dw.mopt['t10'].fg, anchor: ['end', 'top']}),
    'a10_1': rst({fg: dw.mopt['t10'].fg, anchor: ['start', 'top']}),
    'a10_2': rst({fg: dw.mopt['t10'].fg, anchor: ['start', 'middle']}),
    'a10_3': rst({fg: dw.mopt['t10'].fg, anchor: ['end', 'middle']}),
    'a10_4': ost({anchor: ['start', 'middle']}),
    'a10_5': ost({anchor: ['end', 'middle']}),
    'a10_6': ost({anchor: ['center', 'top']}),
    'a10_7': ost({anchor: ['center', 'bottom']}),
    'a10_8': ost({anchor: ['end', 'bottom']}),
    'a11': rst({fg: dw.mopt['t11'].fg, anchor: ['center', 'top']}),
    'a11_1': rst({fg: dw.mopt['t11'].fg, anchor: ['center', 'bottom']}),
    'a11_2': rst({fg: dw.mopt['t11'].fg, anchor: ['start', 'top']}),
    'a11_3': rst({fg: dw.mopt['t11'].fg, anchor: ['end', 'middle']}),
    'a11_3': rst({fg: dw.mopt['t11'].fg, anchor: ['end', 'middle']}),
    'a11_4': ost({anchor: ['end', 'middle']}),
    'a11_5': ost({anchor: ['start', 'middle']}),
    'a11_6': ost({anchor: ['center', 'bottom']}),
    'a11_7': ost({anchor: ['center', 'top']}),
    'a11_8': ost({anchor: ['start', 'bottom']})
  });
  dw.loadCarta(RLINES);
  dw.loadCarta(MSTATIONS);
  for(var i in RSTATIONS)
    dw.loadCarta(RSTATIONS[i][1]);
  dw.draw();
  // station list
  for(var i in RSTATIONS) {
    var mlist = RSTATIONS[i];
    // line caption
    var el = document.createElement('option');
    el.disabled = 'true';
    el.style.fontStyle = 'italic';
    el.style.color = 'white';
    el.style.backgroundColor = dw.mopt[mlist[0]].fg;
    el.appendChild(document.createTextNode(mlist[2]));
    stationlist.appendChild(el);
    // sort list
    mlist[1].sort(function(a,b){return (a[3]>b[3]) ? 1 : -1});
    for (var i in mlist[1]) {
      if (!mlist[1][i][3]) continue;
      var el = document.createElement('option');
      el.value = mlist[1][i][0] + '_' + mlist[1][i][1];
      el.appendChild(document.createTextNode(mlist[1][i][3]));
      stationlist.appendChild(el);
    }
  }
  stationlist.onchange = findstation;
  delete RLINES;
  delete MSTATIONS;
  delete RSTATIONS;
  // curr.object
  dw.clfunc.onmousemove = function() {
    var mcoord = document.getElementById('coords');
    var label = '';
    if (dw.m.pmap) {
      var o = dw.mflood[dw.m.pmap];
      label = o['label'] || o['ftag'];
    }
    mcoord.innerHTML = label;
  }
}
