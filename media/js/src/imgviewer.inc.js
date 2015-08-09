/**
 * Image viewer.
 * egax@bk.ru, 2015.
 */
function setka(coords, n) {
  var left = coords[0][0],
      right = coords[1][0],
      top = coords[0][1],
      bottom = coords[1][1];
  var lonlat = [];
  var xstep = (right - left)/n,
      ystep = (top - bottom)/n;
  var x = left;
  for (var i=0; i<=n; i++) {
    var lon = [];
    var y = bottom;
    for (var j=0; j<=n; j++) {
      lon.push([x, y]);
      y += ystep;
    }
    lonlat.push( ['.Latitude', lonlat.length, lon] );
    x += xstep;
  }
  var y = bottom;
  for (var i=0; i<=n; i++) {
    var lat = [];
    var x = left;
    for (var j=0; j<=n; j++) {
      lat.push([x, y]);
      x += xstep;
    }
    lonlat.push( ['.Latitude', lonlat.length, lat] );
    y += ystep;
  }
  return lonlat;
}
function init() {
  var mtab = document.createElement('table');
  mtab.style.borderCollapse = 'collapse';
  var row = document.createElement('tr');
  row.style.height = '1px';
  row.style.backgroundColor = '#d2e0f0';
  mtab.appendChild(row);

  var col = document.createElement('td');
  col.colSpan = '10';
  var el = document.createElement('h2');
  el.appendChild(document.createTextNode("Просмотровщик"));
  el.style.margin = '0';
  col.appendChild(el);
  row.appendChild(col);

  var col = document.createElement('td');
  col.width = '1%';
  col.align = 'center';
  var el = document.createElement('button');
  el.appendChild(document.createTextNode("Сетка"));
  el.onclick = function(o) {
    var mimg = dw.mflood['.Image_wrld'];
    if (mimg)
      dw.loadCarta( setka(mimg['coords'], 3) );
    dw.draw();
  };
  col.appendChild(el);
  row.appendChild(col);

  var row = document.createElement('tr');
  mtab.appendChild(row);

  var col = document.createElement('td');
  col.width = '120px';
  col.style.borderWidth = '1';
  col.style.borderStyle = 'solid';
  col.style.verticalAlign = 'top';
  row.appendChild(col);
  var md = document.createElement('div');
  col.appendChild(md);

  var col = document.createElement('td');
  col.colSpan = '10';
  col.id = 'mcol';
  col.style.padding = '0';
  row.appendChild(col);
  document.body.appendChild(mtab);

  md.style.height = col.offsetHeight + 'px';
  md.style.overflow = 'auto';

  // urls img
  var imgurls = [
    // google appspot.com
    'http://lh4.ggpht.com/5VuzQYNHzN_HgUDdCVnnL0JlRV34NA-ZY9LJq32WpMnq-YOe7nC0gZ8seBEn45tjUQfewSAaq632FbYKo_A',
    'http://lh3.ggpht.com/jYrGCi0FD5EOaGaourdjhWIwqUTYzQ66NJmb-dOHrSh0Uw1rpv1Qm5eW5DCVSzyGpZlRu1qwXM0RQtUA1-g',
    'http://lh5.ggpht.com/Mbb_vJ9fWs5Hp-BUItjEvgA3d0wdrd2OLJhL9u8MfDbWQnZba9msNR8gmd6tHvyjYUSHbcObRsx9zIgeZSs',
    'http://lh4.ggpht.com/Vjcwowzd6fHMnDwOQqqa5Pil0xzXlaNGXJuka4RjYa-Pnz-_RrUsNfeFgbNmO5Vf7qadJUphQ4jpCdFpzT0B',
    // windows walls
    'file:///C:/Windows/Web/Wallpaper/Theme1/img1.jpg',
    'file:///C:/Windows/Web/Wallpaper/Theme1/img2.jpg',
    'file:///C:/Windows/Web/Wallpaper/Theme1/img3.jpg',
    'file:///C:/Windows/Web/Wallpaper/Theme1/img4.jpg'
  ];
  
  for (var i=0; i<2; i++){
    var res;
    switch (i){
      case 0: res = imgurls; break;
      case 1: res = IMGMAP; break;
    }
    for (var k in res) {
      var el2 = document.createElement('img');
      el2.style.display = 'block';
      el2.width = 100;
      el2.src = res[k];
      if (res[k].search('ggpht.com')==0)
        el2.src += '=s320'; // google image size change for appspot.com
      el2.onclick = function(){ 
        im.src = this.src;
      };
      el2.onload = function(){
        md.appendChild(this);
      };
    }
  }

  dw = new dbCarta({id:'mcol', height:col.offsetHeight});
  dw.extend(dw.mopt, {'.Latitude': {fg: 'white', width: .25}});
  // worldmap img
  var im = new Image();
  im.src = IMGMAP['wrld_small']; // default img
  im.onload = function() {
    var ratio = im.width/im.height;
    dw.loadCarta([{0:'.Image', 1:'wrld', 2:[[-90*ratio,90],[90*ratio,-90]], 6:this}]);
    dw.m.bgimg = dw.mflood['.Image_wrld']; // mark as bg
    // clear setka
    for (var tag in dw.mflood){
      if (tag.split('_')[0] == '.Latitude') 
        delete dw.mflood[tag];
    }
    dw.draw();
  }
}
