// noncart.html func
function init() {
  dw = new dbCarta({draggable: false});
  dw.style.backgroundColor = 'white';
  dw.style.border = '1px dashed lightgray';
  // center by A
  var points = dw.toPoints([-76,82], true);
  dw.centerCarta(points[0] + dw.m.offset[0], points[1] + dw.m.offset[1]);
  dw.changeProject(203);
  dw.scaleCarta(4);
  // add new layer
  dw.mopt['.Arctic']['fg'] = 'white';
  dw.mopt['.Water']['bg'] = 'white';
  dw.mopt['yellow'] = {cls: 'Polygon', fg: 'black', bg: 'yellow'};
  dw.mopt['red'] = {cls: 'Polygon', fg: 'black', bg: 'red'};
  dw.mopt['hole'] = {cls: 'Polygon', fg: 'black', bg: 'white'};
  dw.loadCarta([['yellow','D1',[[-178,80],[-178,70],[-158,73],[-158,77],[-178,80]],'D',null,true]],1);
  dw.loadCarta([['hole','D2',[[-175,78],[-175,72],[-161,74],[-161,76],[-175,78]]]],1);
  dw.loadCarta([['red','B1',[[-148,80],[-148,70],[-128,73],[-142,75],[-128,77],[-148,80]],'B',null,true]],1);
  dw.loadCarta([['hole','B2',[[-145,78],[-145,75.5],[-138,77],[-145,78]]]],1);
  dw.loadCarta([['hole','B3',[[-145,74],[-145,71.5],[-138,73],[-145,74]]]],1);
  dw.loadCarta([['yellow','C',[[-98,80],[-118,83],[-118,70],[-98,73],[-101,75],[-115,73],[-115,80],[-101,78],[-98,80]],'C',null,true]],1);
  dw.loadCarta([['red','A1',[[-76,80],[-86,70],[-78,70],[-77,74],[-75,74],[-74,70],[-66,70],[-76,80]],'A',null,true]],1);
  dw.loadCarta([['hole','A2',[[-76,77],[-77,75],[-75,75],[-76,77]]]],1);
  dw.loadCarta([['yellow','R1',[[-58,80],[-58,70],[-53,70],[-53,73],[-44,70],[-38,70],[-52,75],[-38,77],[-58,80]],'R',null,true]],1);
  dw.loadCarta([['hole','R2',[[-55,78],[-55,75.5],[-48,77],[-55,78]]]],1);
  dw.loadCarta([['red','T',[[-28,80],[-28,77],[-20,77],[-20,70],[-12,70],[-12,77],[-4,77],[-4,80],[-28,80]],'T',null,true]],1);
  dw.loadCarta([['yellow','A3',[[14,80],[4,70],[12,70],[13,74],[15,74],[16,70],[24,70],[14,80]],'A',null,true]],1);
  dw.loadCarta([['hole','A4',[[14,77],[13,75],[15,75],[14,77]]]],1);
  dw.m.domap = true; // map area
}