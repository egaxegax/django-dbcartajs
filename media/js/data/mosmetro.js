/** 
 * List with coords of Moscow Metro lines and stations
 *  [[ftype, ftag, coords, label, centerof, ismap],...]
 * Three points with coords and 'Q' literal implements to bezierCurveTo (...) method.
 * egax@bk.ru, 2013-15.
 */
var MLINES=[
['moskva_canal','mc',[
  [-110,29],
  [-113,32,'Q'],[-115,35,'Q'],[-115,39,'Q'],
  [-115,60,'Q'],[-115,64,'Q'],[-113,67,'Q'],
  [-99,80,'Q'],[-97,83,'Q'],[-97,86,'Q'],
  [-97,152]
]
],
['strogino_lake_exit','sle',[
  [-138,65],
  [-130,71,'Q'],[-127,74,'Q'],[-124,74,'Q'],
  [-119,74,'Q'],[-117,74,'Q'],[-117,71.5,'Q'],
  [-117,71.5,'Q'],[-117,68.5,'Q'],[-119,68.5,'Q'],
  [-131,68.5],
  [-138,65]
]
],
['vodootvodny_canal','vc',[
  [-30,-40],
  [-27,-40,'Q'],[-24,-40,'Q'],[-21,-38,'Q'],
  [-13,-30,'Q'],[-9,-27,'Q'],[-7,-27,'Q'],
  [18,-27,'Q'],[24,-27,'Q'],[27,-31,'Q'],
  [55,-59]
]
],
['yauza_river','yr',[
  [31,-27],
  [65,-27,'Q'],[77,-27,'Q'],[77,-15,'Q'],
  [77,30,'Q'],[77,34,'Q'],[80,34,'Q'],
  [80,34,'Q'],[83,34,'Q'],[83,38,'Q'],
  [83,71,'Q'],[83,76,'Q'],[79,80,'Q'],
  [59,99,'Q'],[55,103,'Q'],[50,103,'Q'],
  [42,103,'Q'],[32,103,'Q'],[32,113,'Q'],
  [32,114,'Q'],[32,121,'Q'],[39,127,'Q'],
  [63,147]
]
],
['Nagatino_Kozhukhovo','nk',[
  [58,-88],[66,-81]
]
],
['Nagatino_poyma','np',[
  [66.8,-80.3,'Q'],[69,-78,'Q'],[71.5,-78,'Q'],
  [72.5,-78,'Q'],[74.7,-78,'Q'],[77,-80,'Q'],
  [83,-86,'Q'],[85,-88,'Q'],[85,-96,'Q']
]
],
['grebnoy_canal','gc',[
  [-138,51],[-127,53],[-122,53],[-132,51],[-138,51]
]
],
['moskva_river','mr',[
  [-175,78],
  [-119,78,'Q'],[-110,78,'Q'],[-110,71.5,'Q'],
  [-110,71.5,'Q'],[-110,65,'Q'],[-119,65,'Q'],
  [-135,65,'Q'],[-144,65,'Q'],[-144,61,'Q'],
  [-144,61,'Q'],[-144,57,'Q'],[-135,57,'Q'],
  [-116,57,'Q'],[-113,57,'Q'],[-113,52,'Q'],
  [-113,52,'Q'],[-113,47,'Q'],[-116,47,'Q'],
  [-144,47,'Q'],[-150,47,'Q'],[-150,39.5,'Q'],
  [-150,39.5,'Q'],[-150,32,'Q'],[-144,32,'Q'],
  [-119,32,'Q'],[-114,32,'Q'],[-110,28,'Q'],
  [-92,10,'Q'],[-88,6,'Q'],[-82,6,'Q'],
  [-67,6,'Q'],[-59,6,'Q'],[-59,-2,'Q'],
  [-59,-31,'Q'],[-59,-38,'Q'],[-63,-41,'Q'],
  [-73,-50,'Q'],[-86,-62,'Q'],[-75,-70,'Q'],
  [-75,-70,'Q'],[-67,-76,'Q'],[-58,-67,'Q'],
  [-14,-24,'Q'],[-10,-20,'Q'],[-5,-20,'Q'],
  [19,-20,'Q'],[25,-20,'Q'],[28,-24,'Q'],
  [52,-47,'Q'],[55,-51,'Q'],[55,-57,'Q'],
  [55,-85,'Q'],[55,-89,'Q'],[65,-89,'Q'],
  [79,-89,'Q'],[85,-89,'Q'],[85,-95,'Q'],
  [85,-111,'Q'],[85,-117,'Q'],[80,-120.5,'Q'],
  [80,-120.5,'Q'],[74,-124,'Q'],[74,-130,'Q'],
  [74,-131,'Q'],[74,-141,'Q'],[84,-141,'Q'],
  [102,-141,'Q'],[106,-141,'Q'],[111,-147,'Q'],
  [233,-272]
]
],
//
['sheremetyevo_express_line','sheremetyevo_express',[
  [-51,55],
  [-23,83,'Q'],[-20,86,'Q'],[-20,90,'Q'],
  [-20,149,'Q'],[-20,153,'Q'],[-23,153,'Q'],
  [-29,153]
]
],
['sheremetyevo_express_line_d','sheremetyevo_express',[
  [-51,55],
  [-23,83,'Q'],[-20,86,'Q'],[-20,90,'Q'],
  [-20,149,'Q'],[-20,153,'Q'],[-23,153,'Q'],
  [-29,153]
]
],
['vnukovo_express_line','vnukovo_express',[
  [-75,-20],
  [-94,-20,'Q'],[-99,-20,'Q'],[-103,-25,'Q'],
  [-132,-65],
  [-163,-96,'Q'],[-166,-99,'Q'],[-166,-102,'Q'],
  [-166,-119,'Q'],[-166,-121,'Q'],[-163,-121,'Q'],
  [-160,-121]
]
],
['vnukovo_express_line_d','vnukovo_express',[
  [-75,-20],
  [-94,-20,'Q'],[-99,-20,'Q'],[-103,-25,'Q'],
  [-132,-65],
  [-163,-96,'Q'],[-166,-99,'Q'],[-166,-102,'Q'],
  [-166,-119,'Q'],[-166,-121,'Q'],[-163,-121,'Q'],
  [-160,-121]
]
],
['domodedovo_express_line','domodedovo_express',[
  [51,-61],[51,-179]
]
],
['domodedovo_express_line_d','domodedovo_express',[
  [51,-61],[51,-179]
],'Домодедово',[51,-179]
],
//
['r1','r1',[
  [102,85],
  [38,21,'Q'],[36,19,'Q'],[34,19,'Q'],
  [20,19,'Q'],[17,19,'Q'],[14,17,'Q'],
  [-100,-97],[-108.05,-105.4]
]
],
['r1_ext','r1',[
  [-100,-97],[-108.05,-105.4],[-123,-121]
]
],
['r2','r2',[
  [-92,107,'Q'],[-92,102,'Q'],[-90,100,'Q'],
  [-34,45,'Q'],[-31,42,'Q'],[-31,38,'Q'],
  [-31,31,'Q'],[-31,27,'Q'],[-29,24,'Q'],
  [20,-25,'Q'],[23,-27,'Q'],[23,-31,'Q'],
  [23,-33,'Q'],[23,-37,'Q'],[26,-39,'Q'],
  [65,-78,'Q'],[68,-81,'Q'],[68,-85,'Q'],
  [68,-143,'Q'],[68,-146,'Q'],[70,-149,'Q'],
  [79,-158],
  [95,-158]
]
],
['r2_ext','r2',[
  [-92,122],[-92,107]
]
],
['r3','r3',[
  [-159,98],
  [-159,18,'Q'],[-159,15,'Q'],[-156,12,'Q'],
  [-130,-14,'Q'],[-128,-16,'Q'],[-124,-16,'Q'],
  [-36,-16,'Q'],[-33,-16,'Q'],[-30,-14,'Q'],
  [-30,-14,'Q'],[-26,-11,'Q'],[-24,-11,'Q'],
  [53,-11,'Q'],[57,-11,'Q'],[59,-9,'Q'],
  [122,54]
]
],
['r4','r4_1',[
  [-159,34],
  [-131,6,'Q'],[-128,3,'Q'],[-124,3,'Q'],
  [-104,3,'Q'],[-101,3,'Q'],[-97,0,'Q'],
  [-93,-3,'Q'],[-89,-6,'Q'],[-87,-6,'Q'],
  [-72,-6,'Q'],[-68,-2,'Q'],[-64,-2,'Q'],
  [-26,-2,'Q'],[-23,-2,'Q'],[-20,-5,'Q'],
  [-19,-6]
]
],
['r4','r4_2',[
  [-72,-6,'Q'],[-77,-6,'Q'],[-77,-1,'Q'],
  [-77,23]
]
],
['r5','r5',[
  [-70,0],[-69.86,4.40],[-69.45,8.77],[-68.76,13.12],[-67.80,17.41],[-66.57,21.63],[-65.08,25.77],[-63.34,29.80],[-61.34,33.72],[-59.10,37.51],[-56.63,41.14],[-53.94,44.62],[-51.03,47.92],[-47.92,51.03],[-44.62,53.94],[-41.14,56.63],[-37.51,59.10],[-33.72,61.34],[-29.80,63.34],[-25.77,65.08],[-21.63,66.57],[-17.41,67.80],[-13.12,68.76],[-8.77,69.45],[-4.40,69.86],[0.00,70.00],[4.40,69.86],[8.77,69.45],[13.12,68.76],[17.41,67.80],[21.63,66.57],[25.77,65.08],[29.80,63.34],[33.72,61.34],[37.51,59.10],[41.14,56.63],[44.62,53.94],[47.92,51.03],[51.03,47.92],[53.94,44.62],[56.63,41.14],[59.10,37.51],[61.34,33.72],[63.34,29.80],[65.08,25.77],[66.57,21.63],[67.80,17.41],[68.76,13.12],[69.45,8.77],[69.86,4.40],[70.00,0.00],[69.86,-4.40],[69.45,-8.77],[68.76,-13.12],[67.80,-17.41],[66.57,-21.63],[65.08,-25.77],[63.34,-29.80],[61.34,-33.72],[59.10,-37.51],[56.63,-41.14],[53.94,-44.62],[51.03,-47.92],[47.92,-51.03],[44.62,-53.94],[41.14,-56.63],[37.51,-59.10],[33.72,-61.34],[29.80,-63.34],[25.77,-65.08],[21.63,-66.57],[17.41,-67.80],[13.12,-68.76],[8.77,-69.45],[4.40,-69.86],[0.00,-70.00],[-4.40,-69.86],[-8.77,-69.45],[-13.12,-68.76],[-17.41,-67.80],[-21.63,-66.57],[-25.77,-65.08],[-29.80,-63.34],[-33.72,-61.34],[-37.51,-59.10],[-41.14,-56.63],[-44.62,-53.94],[-47.92,-51.03],[-51.03,-47.92],[-53.94,-44.62],[-56.63,-41.14],[-59.10,-37.51],[-61.34,-33.72],[-63.34,-29.80],[-65.08,-25.77],[-66.57,-21.63],[-67.80,-17.41],[-68.76,-13.12],[-69.45,-8.77],[-69.86,-4.40],[-70,0]
],'Radial'
],
['r6','r6',[
  [36,129],
  [36,38,'Q'],[36,35,'Q'],[34,32,'Q'],
  [34,32,'Q'],[31,28,'Q'],[31,26,'Q'],
  [31,-22,'Q'],[31,-26,'Q'],[28,-29,'Q'],
  [-41,-99,'Q'],[-44,-102,'Q'],[-44,-106,'Q'],
  [-44,-149]
]
],
['r6_ext','r6',[
  [36,129],[36,145]
]
],
['r7','r7',[
  [-105,99],
  [-105,79,'Q'],[-105,75,'Q'],[-103,73,'Q'],
  [-60,31,'Q'],[-58,29,'Q'],[-55,29,'Q'],
  [0,29,'Q'],[3,29,'Q'],[5,27,'Q'],
  [26,6,'Q'],[28,4,'Q'],[28,0,'Q'],
  [28,-10,'Q'],[28,-14,'Q'],[31,-16,'Q'],
  [92,-77,'Q'],[94.5,-80,'Q'],[98,-80,'Q'],
  [151,-80,'Q'],[155,-80,'Q'],[158,-84,'Q'],
  [158,-84,'Q'],[160,-87,'Q'],[160,-90,'Q'],
  [160,-90,'Q'],[160,-93,'Q'],[157,-96,'Q'],
  [136,-117]
]
],
['r7_ext','r7',[
  [136,-117,'Q'],[133,-120,'Q'],[133,-124,'Q'],
  [133,-126]
]
],
['r8','r8',[
  [18,-39],[90,-39],[133,3]
]
],
['r8_ext','r8',[
  [18.15,-39],
  [-21,-39,'Q'],[-24,-39,'Q'],[-27,-37,'Q'],
  [-74,8,'Q'],[-77,11,'Q'],[-80,11,'Q'],
  [-106,11,'Q'],[-109,11,'Q'],[-112,8,'Q'],
  [-117,3,'Q'],[-120,0,'Q'],[-120,-3,'Q'],
  [-120,-59,'Q'],[-120,-62,'Q'],[-123,-65,'Q'],
  [-162,-105]
]
],
['r9','r9',[
  [0,146],
  [0,137,'Q'],[0,134,'Q'],[-2,131,'Q'],
  [-26,107,'Q'],[-29,104,'Q'],[-29,101,'Q'],
  [-29,76,'Q'],[-29,73,'Q'],[-26,70,'Q'],
  [-5,48,'Q'],[-4,47,'Q'],[-4,46,'Q'],
  [-4,41,'Q'],[-4,40,'Q'],[-5,39,'Q'],   
  [-18,25.06,'Q'],[-19,24,'Q'],[-19,21,'Q'],
  [-19,-19,'Q'],[-19,-22,'Q'],[-16,-25,'Q'],
  [16,-58,'Q'],[19,-61,'Q'],[19,-64,'Q'],
  [19,-127,'Q'],[19,-130,'Q'],[16,-133,'Q'],
  [-13,-164]
]
],
['r10','r10',[
  [1,87,'Q'],[4,85,'Q'],[4,81,'Q'],
  [4,45,'Q'],[4,41,'Q'],[7,38,'Q'],
  [82,-36,'Q'],[84,-38,'Q'],[84,-42,'Q'],
  [84,-72,'Q'],[84,-74.5,'Q'],[87,-78,'Q'],
  [105,-96,'Q'],[108,-99,'Q'],[108,-103,'Q'],
  [108,-106,'Q'],[108,-109,'Q'],[105,-112,'Q'],
  [87,-130,'Q'],[84,-133,'Q'],[84,-137,'Q'],
  [84,-163]
]
],
['r10_ext','r10',[
  [1,87],
  [-22,112,'Q'],[-24,114,'Q'],[-24,118,'Q'],
  [-24,146]
]
],
['r11','r11',[
  [26,-116],[68,-116]
]
],
['r12','r12',[
  [-13,-164],
  [-21,-173,'Q'],[-22,-174,'Q'],[-24,-174,'Q'],
  [-87,-174]
]
],
['r12_ext','r12_1',[
  [-87,-174],[-150,-174]
]
],
['r12','r12_2',[
  [-38,-149],[-16.56,-168]
]
],
['rTPK','rTPK_1',[
  [-84,11],
  [-83,12,'Q'],[-80,14,'Q'],[-80,18,'Q'],
  [-80,44],
  [-44,80,'Q'],[-42,82,'Q'],[-38,82,'Q'],
  [57,82,'Q'],[60,82,'Q'],[63,80,'Q'],
  [77,65,'Q'],[80,62,'Q'],[80,59,'Q'],
  [80,19,'Q'],[80,15,'Q'],[83,13,'Q'],
  [101,-4,'Q'],[103,-7,'Q'],[103,-11,'Q'],
  [103,-24,'Q'],[103,-27,'Q'],[106,-30,'Q'],
  [124,-48],[124,-53,'Q'],[124,-55,'Q'],[123,-56,'Q'],
  [76,-113,'Q'],[74,-116,'Q'],[70,-116,'Q'],
  [68,-116]
]
],
['rTPK','rTPK_2',[
  [-80,44],
  [-82,42,'Q'],[-84,40,'Q'],[-88,40,'Q'],
  [-143,40,'Q'],[-147,40,'Q'],[-149,37,'Q'],
  [-163,23,'Q'],[-166,20,'Q'],[-166,17,'Q'],
  [-166,-1,'Q'],[-166,-5,'Q'],[-164,-7,'Q'],
  [-58,-113,'Q'],[-55,-116,'Q'],[-52,-116,'Q'],
  [26,-116]
]
],
['rKOZH','rKOZH',[
  [106,-30],
  [135,-59,'Q'],[137,-61,'Q'],[137,-65,'Q'],
  [137,-82,'Q'],[137,-85,'Q'],[140,-88,'Q'],
  [162,-112,'Q'],[165,-115,'Q'],[165,-118,'Q'],
  [165,-138]
]
],
['monorail','mn',[
  [-26,101],[43,101]
]
],
//
['interchange','Kievskaya',[
  [-72,-16],[-72,-6],[-69.09,-11],[-72,-16]
]
],
['interchange_d','Kievskaya',[
  [-72,-16],[-72,-6],[-69.09,-11],[-72,-16]
]
],
['interchange','Rossyskaya-Kutuzovsky_Prospekt',[
  [-69.38,9.24],[-69.38,3.63]
]
],
['interchange_d','Rossyskaya-Kutuzovsky_Prospekt',[
  [-69.38,9.24],[-69.38,3.63]
]
],
['interchange','Krasnopresnenskaya-Barrikadnaya',[
  [-65.57,24.41],[-60.34,31.34]
]
],
['interchange_d','Krasnopresnenskaya-Barrikadnaya',[
  [-65.57,24.41],[-60.34,31.34]
]
],
['interchange','Belorusskaya',[
  [-47,51.84],[-47,57.78]
]
],
['interchange_d','Belorusskaya',[
  [-47,51.84],[-47,57.78]
]
],
['interchange','Mendeleyevskaya-Novoslobodskaya',[
  [-25,65.36],[-25,68.95]
]
],
['interchange_d','Mendeleyevskaya-Novoslobodskaya',[
  [-25,65.36],[-25,68.95]
]
],
['interchange','Dostoyevskaya-Suvorovskaya',[
  [4,69.88],[4,75]
]
],
['interchange_d','Dostoyevskaya-Suvorovskaya',[
  [4,69.88],[4,75]
]
],
['interchange','Prospekt_Mira',[
  [31,62.73],[36,65]
]
],
['interchange_d','Prospekt_Mira',[
  [31,62.73],[36,65]
]
],
['interchange','Komsomolskaya',[
  [55.19,43],[60,43]
]
],
['interchange_d','Komsomolskaya',[
  [55.19,43],[60,43]
]
],
['interchange','Kurskaya-Chkalobskaya',[
  [69.03,-11.43],[62.27,-5.73],[62.27,-16.53],[69.03,-11.43]
]
],
['interchange_d','Kurskaya-Chkalobskaya',[
  [69.03,-11.43],[62.27,-5.73],[62.27,-16.53],[69.03,-11.43]
]
],
['interchange','Taganskaya-Marksistskaya',[
  [60,-35.9],[60,-45],[64,-39],[60,-35.9]
]
],
['interchange_d','Taganskaya-Marksistskaya',[
  [60,-35.9],[60,-45],[64,-39],[60,-35.9]
]
],
['interchange','Paveletskaya',[
  [39.13,-58],[45,-58]
]
],
['interchange_d','Paveletskaya',[
  [39.13,-58],[45,-58]
]
],
['interchange','Dobryninskaya-Serpukhovskaya',[
  [19,-67.33],[19,-71]
]
],
['interchange_d','Dobryninskaya-Serpukhovskaya',[
  [19,-67.33],[19,-71]
]
],
['interchange','Oktyabrskaya',[
  [-11.46,-69.03],[-7.92,-65.45]
]
],
['interchange_d','Oktyabrskaya',[
  [-11.46,-69.03],[-7.92,-65.45]
]
],
['interchange','Park_Kultury',[
  [-53,-45.68],[-53,-50]
]
],
['interchange_d','Park_Kultury',[
  [-53,-45.68],[-53,-50]
]
],
['interchange','Sokolniki',[
  [76.37,59.36],[76.37,65.67]
]
],
['interchange_d','Sokolniki',[
  [76.37,59.36],[76.37,65.67]
]
],
['interchange','Turgenevskaya-Chistye_Prudy-Sretensky_Bulvar',[
  [31,24],[34,19],[31,14.32],[31,24]
]
],
['interchange_d','Turgenevskaya-Chistye_Prudy-Sretensky_Bulvar',[
  [31,24],[34,19],[31,14.32],[31,24]
]
],
['interchange','Kuznetsky_Most-Lubyanka',[
  [11.5,20.5],[11.5,14.5]
]
],
['interchange_d','Kuznetsky_Most-Lubyanka',[
  [11.5,20.5],[11.5,14.5]
]
],
['interchange','Okhotny_Ryad-Teatralnaya-Ploshcha_Pevolyutsi',[
  [-4,-1],[1,-6],[6,-11]
]
],
['interchange_d','Okhotny_Ryad-Teatralnaya-Ploshcha_Pevolyutsi',[
  [-4,-1],[1,-6],[6,-11]
]
],
['interchange','Biblioteka_Imeni_Lenina-Arbatskaya-Alexandrovsky_Sad-Borovitskaya',[
  [-14,-11],[-19,-6],[-24,-11],[-14,-11],[-19,-16],[-24,-11]
]
],
['interchange_d','Biblioteka_Imeni_Lenina-Arbatskaya-Alexandrovsky_Sad-Borovitskaya',[
  [-14,-11],[-19,-6],[-24,-11],[-14,-11],[-19,-16],[-24,-11]
]
],
['interchange','Kropotkinskaya-Volkhonka',[
  [-29.83,-26.83],[-29.83,-34.29]
]
],
['interchange_d','Kropotkinskaya-Volkhonka',[
  [-29.83,-26.83],[-29.83,-34.29]
]
],
['interchange','Prospekt_Vernadskogo',[
  [-91.05,-88.05],[-91.05,-79.95]
]
],
['interchange_d','Prospekt_Vernadskogo',[
  [-91.05,-88.05],[-91.05,-79.95]
]
],
['interchange','Dinamo-Petrovsky_Park',[
  [-56.7,67.3],[-51.85,72.15]
]
],
['interchange_d','Dinamo-Petrovsky_Park',[
  [-56.7,67.3],[-51.85,72.15]
]
],
['interchange','Tverskaya-Pushkinskaya-Chekhovskaya',[
  [-29,24],[-18.55,24],[-23,29],[-29,24]
]
],
['interchange_d','Tverskaya-Pushkinskaya-Chekhovskaya',[
  [-29,24],[-18.55,24],[-23,29],[-29,24]
]
],
['interchange','Tretyakovskaya-Novokuznetskaya',[
  [23.10,-33.98],[18.14,-39]
]
],
['interchange_d','Tretyakovskaya-Novokuznetskaya',[
  [23.10,-33.98],[18.14,-39]
]
],
['interchange','Krasnogvardeyskaya-Zyablikovo',[
  [79,-158],[84,-163]
]
],
['interchange_d','Krasnogvardeyskaya-Zyablikovo',[
  [79,-158],[84,-163]
]
],
['interchange','Kuntsevskaya',[
  [-159,34],[-152.2,34]
]
],
['interchange_d','Kuntsevskaya',[
  [-159,34],[-152.2,34]
]
],
['interchange','Smolenskaya-Plyushchikha',[
  [-40,-16],[-40,-24.55]
]
],
['interchange_d','Smolenskaya-Plyushchikha',[
  [-40,-16],[-40,-24.55]
]
],
['interchange','Elektrozavodskaya',[
  [80,12],[80,19]
]
],
['interchange_d','Elektrozavodskaya',[
  [80,12],[80,19]
]
],
['interchange','Vystavochnaya-Delovoy_Tsentr',[
  [-77,11],[-84,11]
]
],
['interchange_d','Vystavochnaya-Delovoy_Tsentr',[
  [-77,11],[-84,11]
]
],
['interchange','Rizhskaya',[
  [36,77],[41,82]
]
],
['interchange_d','Rizhskaya',[
  [36,77],[41,82]
]
],
['interchange','Kaluzhskaya',[
  [-44,-111],[-50,-116]
]
],
['interchange_d','Kaluzhskaya',[
  [-44,-111],[-50,-116]
]
],
['interchange','Novoyasenevskaya-Bittsevsky_Park',[
  [-44,-149],[-38,-149]
]
],
['interchange_d','Novoyasenevskaya-Bittsevsky_Park',[
  [-44,-149],[-38,-149]
]
],
['interchange','Polezhaevskaya-Khoroshyobskaya',[
  [-80,50.54],[-80,44]
]
],
['interchange_d','Polezhaevskaya-Khoroshyobskaya',[
  [-80,50.54],[-80,44]
]
],
['interchange','Proletarskaya-Krestyanskaya_Zastava',[
  [80,-65],[84,-59.83]
]
],
['interchange_d','Proletarskaya-Krestyanskaya_Zastava',[
  [80,-65],[84,-59.83]
]
],
['interchange','Tekstilshchiki',[
  [103.31,-80],[106.62,-76]
]
],
['interchange_d','Tekstilshchiki',[
  [103.31,-80],[106.62,-76]
]
],
['interchange','Lermontovsky_Prospekt-Kosino',[
  [147,-106],[156.5,-106]
]
],
['interchange_d','Lermontovsky_Prospekt-Kosino',[
  [147,-106],[156.5,-106]
]
],
['interchange','Michurinsky_Prospekt',[
  [-120,-58],[-113,-58]
]
],
['interchange_d','Michurinsky_Prospekt',[
  [-120,-58],[-113,-58]
]
],
['interchange','Rimskaya-Ploshchad_Ilyicha',[
  [84,-44.92],[90,-39]
]
],
['interchange_d','Rimskaya-Ploshchad_Ilyicha',[
  [84,-44.92],[90,-39]
]
],
['interchange','Aviamotornaya',[
  [99.22,-30],[106,-30]
]
],
['interchange_d','Aviamotornaya',[
  [99.22,-30],[106,-30]
]
],
['interchange','Savyolovskaya-Nizhnyaya_Maslovka',[
  [-29,82],[-36,82]
]
],
['interchange_d','Savyolovskaya-Nizhnyaya_Maslovka',[
  [-29,82],[-36,82]
]
],
['interchange','Tsvetnoy_Bulvar-Trubnaya',[
  [-4,43.5],[4.17,43.5]
]
],
['interchange_d','Tsvetnoy_Bulvar-Trubnaya',[
  [-4,43.5],[4.17,43.5]
]
],
['interchange','Sevastopolskaya-Kakhovskaya',[
  [19,-116],[26,-116]
]
],
['interchange_d','Sevastopolskaya-Kakhovskaya',[
  [19,-116],[26,-116]
]
],
['interchange','Bulvar_Dmitriya_Donskogo-Ulitsa_Starokachalovskaya',[
  [-13,-164],[-16.56,-168]
]
],
['interchange_d','Bulvar_Dmitriya_Donskogo-Ulitsa_Starokachalovskaya',[
  [-13,-164],[-16.56,-168]
]
],
['interchange','Marina_Roshcha',[
  [1,87],[6,82]
]
],
['interchange_d','Marina_Roshcha',[
  [1,87],[6,82]
]
],
['interchange','Pechatniki-Yozhnoportovaya',[
  [96.83,-87.83],[93,-92.46]
]
],
['interchange_d','Pechatniki-Yozhnoportovaya',[
  [96.83,-87.83],[93,-92.46]
]
]
];
var MLEGEND=[
['.Latitude','legend_border',[
  [-170,-185],[150,-185],[150,-220],[-170,-220],[-170,-185]
]
],  
['r1','r1_legend',[
  [-160,-190],[-140,-190]
],'Сокольническая линия (красная)',[-140,-190]
],
['r2','r2_legend',[
  [-160,-194],[-140,-194]
],'Замоскворецкая линия (зелёная)',[-140,-194]
],
['r3','r3_legend',[
  [-160,-198],[-140,-198]
],'Арбатско-Покровская линия (синяя)',[-140,-198]
],
['r4','r4_legend',[
  [-160,-202],[-140,-202]
],'Филёвская линия (голубая)',[-140,-202]
],
['rTPK','rTPK_legend',[
  [-160,-210],[-140,-210]
],'Третий пересадочный контур',[-140,-210]
],
['r5','r5_legend',[
  [-60,-190],[-40,-190]
],'Кольцевая линия (коричневая)',[-40,-190]
],
['r6','r6_legend',[
  [-60,-194],[-40,-194]
],'Калужско-Рижская линия (оранжевая)',[-40,-194]
],
['r7','r7_legend',[
  [-60,-198],[-40,-198]
],'Таганско-Краснопресненская линия (фиолетовая)',[-40,-198]
],
['r8','r8_legend',[
  [-60,-202],[-40,-202]
],'Калининская линия (жёлтая)',[-40,-202]
],
['r8_ext','r7_legend',[
  [-60,-206],[-40,-206]
],'Калининско-Солнцевская линия',[-40,-206]
],
['rKOZH','rKOZH_legend',[
  [-60,-210],[-40,-210]
],'Кожуховская линия',[-40,-210]
],
['r9','r9_legend',[
  [60,-190],[40,-190]
],'Серпуховско-Тимирязевская линия (серая)',[60,-190]
],
['r10','r10_legend',[
  [60,-194],[40,-194]
],'Люблинско-Дмитровская линия (салатовая)',[60,-194]
],
['r11','r11_legend',[
  [60,-198],[40,-198]
],'Каховская линия (бирюзовая)',[60,-198]
],
['r12','r12_legend',[
  [60,-202],[40,-202]
],'Бутовская линия (серо-голубая)',[60,-202]
],
['monorail_legend','mn_legend',[
  [60,-210],[40,-210]
],'Московский монорельс',[60,-210]
]
];
var MLABEL=[
['moskva_canal_label','mc',[],'Канал имени Москвы',[-97,111]],
['moskva_river_label','mr',[],'Москва-река',[111,-147]],
['yauza_river_label','yr',[],'Яуза',[59,99]],
['sheremetyevo_express_line_label','sheremetyevo_express',[],'Шереметьево',[-32,153]],
['sheremetyevo_express_line_d_label','sheremetyevo_express',[],'Белорусский',[-51,55]],
['vnukovo_express_line_label','vnukovo_express',[],'Внуково',[-160,-121]],
['vnukovo_express_line_d_label','vnukovo_express',[],'Киевский',[-75,-20.1]],
['domodedovo_express_line_label','domodedovo_express',[],'Павелецкий',[51,-61]],
['domodedovo_express_line_d_label','domodedovo_express',[],'Домодедово',[51,-179]],
['monorail_label','mn',[],'M1',[-26,101]]
];
var MSTATIONS=[
['s1','Ulitsa_Podbelskogo',[[102,85]],'Улица Подбельского',null,1],
['s1','Cherkizovskaya',[[94.16,77.15]],'Черкизовская',null,1],
['s1','Preobrazhenskaya_Ploshchad',[[86.31,69.31]],'Преображенская площадь',null,1],
['s1_1','Sokolniki',[[76.37,59.36]],'Сокольники',null,1],
['s1','Krasnoselskaya',[[68.52,51.52]],'Красносельская',null,1],
['s1_1','Komsomolskaya',[[60,43]],'Комсомольская',null,1],
['s1','Krasniye_Vorota',[[48.89,31.89]],'Красные ворота',null,1],
['s1_1','Chistye_Prudy',[[34,19]],'Чистые пруды',null,1],
['s1_2','Lubyanka',[[11.5,14.5]],'Лубянка',null,1],
['s1_1','Okhotny_Ryad',[[-4,-1]],'Охотный ряд',null,1],
['s1_4','Biblioteka_Imeni_Lenina',[[-14,-11]],'Библиотека имени Ленина',null,1],
['s1_1','Kropotkinskaya',[[-29.83,-26.83]],'Кропоткинская',null,1],
['s1_2','Park_Kultury',[[-53,-50]],'Парк Культуры',null,1],
['s1','Frunzenskaya',[[-60.96,-57.96]],'Фрунзенская',null,1],
['s1','Sportivnaya',[[-68.81,-65.81]],'Спортивная',null,1],
['s1','Vorobyovy_Gory',[[-76.66,-73.66]],'Воробьёвы горы',null,1],
['s1','Universitet',[[-84.51,-81.51]],'Университет',null,1],
['s1_3','Prospekt_Vernadskogo',[[-91.05,-88.05]],'Проспект Вернадского',null,1],
['s1','Yugo-Zapadnaya',[[-100,-97]],'Юго-Западная',null,1],
['s1','Troparyovo',[[-108.05,-105.4]],'Тропарёво',null,1],
['s1','Rumyantsevo',[[-115.9,-113.59]],'Румянцево',null,1],
['s1','Salaryevo',[[-123,-121]],'Саларьево',null,1],
//
['s2','Ulitsa_Dybenko',[[-92,122]],'Улица Дыбенко',null,1],
['s2','Belomorskaya',[[-92,114]],'Беломорская',null,1],
['s2','Rechnoy_Vokzal',[[-92,107]],'Речной вокзал',null,1],
['s2','Vodny_Stadion',[[-86,96.07]],'Водный стадион',null,1],
['s2','Voykovskaya',[[-78,88.21]],'Войковская',null,1],
['s2','Sokol',[[-70,80.36]],'Сокол',null,1],
['s2_4','Aeroport',[[-64,74.46]],'Аэропорт',null,1],
['s2_2','Dinamo',[[-56.7,67.3]],'Динамо',null,1],
['s2_1','Belorusskaya',[[-47,57.78]],'Белорусская',null,1],
['s2','Mayakovskaya',[[-31,38]],'Маяковская',null,1],
['s2_2','Tverskaya',[[-29,24]],'Тверская',null,1],
['s2_1','Teatralnaya',[[1,-6]],'Театральная',null,1],
['s2_2','Novokuznetskaya',[[23.10,-33.98]],'Новокузнецкая',null,1],
['s2_3','Paveletskaya',[[45,-58]],'Павелецкая',null,1],
['s2_4','Avtozavodskaya',[[62,-75]],'Автозаводская',null,1],
['s2_4','Tekhnopark',[[68,-86]],'Технопарк',null,1],
['s2_4','Kolomenskaya',[[68,-95.93]],'Коломенская',null,1],
['s2_5','Kashirskaya',[[68,-116]],'Каширская',null,1],
['s2_4','Kantemirovskaya',[[68,-128.64]],'Кантемировская',null,1],
['s2_4','Tsaritsyno',[[68,-136.49]],'Царицыно',null,1],
['s2_4','Orekhovo',[[68,-144.34]],'Орехово',null,1],
['s2_4','Domodedovskaya',[[72,-151]],'Домодедовская',null,1],
['s2_2','Krasnogvardeyskaya',[[79,-158]],'Красногвардейская',null,1],
['s2_6','Alma-Atinskaya',[[95,-158]],'Алма-Атинская',null,1],
//
['s3','Pyatnitskoye_Shosse',[[-159,98]],'Пятницкое шоссе',null,1],
['s3','Mitino',[[-159,90]],'Митино',null,1],
['s3','Volokolamskaya',[[-159,82]],'Волоколамская',null,1],
['s3','Myakinino',[[-159,74]],'Мякинино',null,1],
['s3','Strogino',[[-159,66]],'Строгино',null,1],
['s3','Krylatskoye',[[-159,58]],'Крылатское',null,1],
['s3','Molodyozhnaya',[[-159,50]],'Молодёжная',null,1],
['s3_5','Kuntsevskaya',[[-159,34]],'',null,1],
['s3_2','Slavyansky_Bulvar',[[-141,-3]],'Славянский бульвар',null,1],
['s3_5','Park_Pobedy',[[-120,-16]],'Парк Победы',null,1],
['s3_3','Kievskaya',[[-72,-16]],'Киевская',null,1],
['s3_3','Smolenskaya',[[-40,-16]],'Смоленская',null,1],
['s3_3','Arbatskaya',[[-24,-11]],'Арбатская',null,1],
['s3_4','Ploshchad_Revolyutsii',[[6,-11]],'Площадь Революции',null,1],
//['s3','Khmelnitskaya',[[36.1,-11]],'Хмельницкая',null,1],
['s3_6','Kurskaya',[[62.27,-5.73]],'Курская',null,1],
['s3','Baumanskaya',[[74,6]],'Бауманская',null,1],
['s3_6','Elektrozavodskaya',[[80,12]],'Электрозаводская',null,1],
['s3','Semyonovskaya',[[90.6,22.6]],'Семёновская',null,1],
['s3','Partizanskaya',[[98.45,30.45]],'Партизанская',null,1],
['s3','Izmaylovskaya',[[106.3,38.3]],'Измайловская',null,1],
['s3','Pervomayskaya',[[114.15,46.15]],'Первомайская',null,1],
['s3','Shchyolkovskaya',[[122,54]],'Щёлковская',null,1],
//
['s4_1','Mezhdunarodnaya',[[-77,23]],'Международная',null,1],
['s4_4','Vystavochnaya',[[-77,11]],'Выставочная',null,1],
['s4_5','Kuntsevskaya',[[-159,34]],'',null,1],
['s4','Pionerskaya',[[-152.01,27.01]],'Пионерская',null,1],
['s4','Filyovsky_Park',[[-144.94,19.94]],'Филёвский парк',null,1],
['s4','Bagrationovskaya',[[-137.88,12.88]],'Багратионовская',null,1],
['s4','Fili',[[-131.08,6.08]],'Фили',null,1],
['s4_1','Kutuzovskaya',[[-97.59,0.43]],'Кутузовская',null,1],
['s4_1','Studencheskaya',[[-87.12,-6]],'Студенческая',null,1],
['s4_2','Kievskaya',[[-72,-6]],'',null,1],
['s4_6','Smolenskaya',[[-52.85,-2]],'Смоленская-2',null,1],
['s4_3','Arbatskaya',[[-32.7,-2]],'Арбатская-2',null,1],
['s4_2','Alexandrovsky_Sad',[[-19,-6]],'Александровский сад',null,1],
//
['s5','Komsomolskaya',[[55.19,43]],'',null,1],
['s5','Kurskaya',[[69.03,-11.43]],'Курская',null,1],
['s5','Taganskaya',[[60,-35.98]],'Таганская',null,1],
['s5','Paveletskaya',[[39.13,-58]],'',null,1],
['s5','Dobryninskaya',[[19,-67.33]],'Добрынинская',null,1],
['s5','Oktyabrskaya',[[-11.46,-69.03]],'',null,1],
['s5_1','Park_Kultury',[[-53,-45.68]],'',null,1],
['s5','Kievskaya',[[-69.09,-11]],'',null,1],
['s5','Rossyskaya',[[-69.38,9.24]],'Российская',null,1],
['s5_2','Krasnopresnenskaya',[[-65.57,24.41]],'Краснопресненская',null,1],
['s5_2','Belorusskaya',[[-47,51.84]],'Белорусская',null,1],
['s5_2','Novoslobodskaya',[[-25,65.36]],'Новослободская',null,1],
['s5','Suvorovskaya',[[4,69.88]],'Суворовская',null,1],
['s5','Prospekt_Mira',[[31,62.73]],'',null,1],
//
['s6','Mytishchi',[[36,145]],'Мытищи',null,1],
['s6','Chelobityevo',[[36,137]],'Челобитьево',null,1],
['s6','Medvedkovo',[[36,129]],'Медведково',null,1],
['s6','Babushkinskaya',[[36,121]],'Бабушкинская',null,1],
['s6','Sviblovo',[[36,113]],'Свиблово',null,1],
['s6','Botanichesky_Sad',[[36,106]],'Ботанический сад',null,1],
['s6','VDNKh',[[36,98]],'ВДНХ',null,1],
['s6','Alexeyevskaya',[[36,90]],'Алексеевская',null,1],
['s6_2','Rizhskaya',[[36,77]],'Рижская',null,1],
['s6_2','Prospekt_Mira',[[36,65]],'Проспект Мира',null,1],
['s6_1','Sukharevskaya',[[36,49]],'Сухаревская',null,1],
['s6_2','Turgenevskaya',[[31,24]],'Тургеневская',null,1],
['s6_2','Kitay-Gorod',[[31,-16]],'Китай-город',null,1],
['s6_4','Tretyakovskaya',[[18.14,-39]],'Третьяковская',null,1],
['s6_3','Oktyabrskaya',[[-7.92,-65.45]],'Октябрьская',null,1],
['s6','Shabolovskaya',[[-15.34,-72.97]],'Шаболовская',null,1],
['s6','Leninsky_Prospekt',[[-21.19,-78.9]],'Ленинский проспект',null,1],
['s6','Akademicheskaya',[[-29.04,-86.87]],'Академическая',null,1],
['s6','Profsoyuznaya',[[-36.89,-94.83]],'Профсоюзная',null,1],
['s6','Noviye_Cheryomushki',[[-43.04,-102]],'Новые Черёмушки',null,1],
['s6_2','Kaluzhskaya',[[-44,-111]],'Калужская',null,1],
['s6','Belyayevo',[[-44,-119]],'Беляево',null,1],
['s6','Konkovo',[[-44,-127]],'Коньково',null,1],
['s6','Tyoplyi_Stan',[[-44,-135]],'Тёплый Стан',null,1],
['s6','Yasenevo',[[-44,-143]],'Ясенево',null,1],
['s6_5','Novoyasenevskaya',[[-44,-149]],'Новоясеневская',null,1],
//
['s7','Planernaya',[[-105,99]],'Планерная',null,1],
['s7','Skhodnenskaya',[[-105,91]],'Сходненская',null,1],
['s7','Tushinskaya',[[-105,84]],'Тушинская',null,1],
['s7','Spartak',[[-104.575,76]],'Спартак',null,1],
['s7','Shchukinskaya',[[-97.01,67.15]],'Щукинская',null,1],
['s7','Oktyabrskoye_Pole',[[-89.16,59.48]],'Октябрьское поле',null,1],
['s7_1','Polezhaevskaya',[[-80,50.54]],'Полежаевская',null,1],
['s7_4','Begovaya',[[-72.15,42.87]],'Беговая',null,1],
['s7_4','Ulitsa_1905_Goda',[[-65.61,36.48]],'Улица 1905 года',null,1],
['s7_2','Barrikadnaya',[[-60.34,31.34]],'Баррикадная',null,1],
['s7_2','Pushkinskaya',[[-23,29]],'Пушкинская',null,1],
['s7_1','Kuznetsky_Most',[[11.5,20.5]],'Кузнецкий мост',null,1],
['s7_5','Kitay-Gorod',[[31,-16]],'',null,1],
['s7_2','Taganskaya',[[60,-45]],'',null,1],
['s7_6','Proletarskaya',[[80,-65]],'Пролетарская',null,1],
['s7_4','Volgogradsky_Prospekt',[[92,-77]],'Волгоградский проспект',null,1],
['s7_3','Tekstilshchiki',[[103.31,-80]],'Текстильщики',null,1],
['s7_7','Kuzminki',[[126,-80]],'Кузьминки',null,1],
['s7_4','Ryazanskiy_Prospekt',[[142,-80]],'Рязанский проспект',null,1],
['s7','Vykhino',[[160,-90]],'Выхино',null,1],
['s7_1','Lermontovsky_Prospekt',[[147,-106]],'Лермонтовский проспект',null,1],
['s7','Zhulebino',[[136,-117]],'Жулебино',null,1],
['s7','Kotelniki',[[133,-126]],'Котельники',null,1],
//
['s8','Rasskazovka',[[-162,-105]],'Рассказовка',null,1],
['s8','Novoperedelkino',[[-154.62,-97.43]],'Новопеределкино',null,1],
['s8','Borovskoye_Shosse',[[-146.77,-89.38]],'Боровское шоссе',null,1],
['s8','Solntsevo',[[-138.92,-81.33]],'Солнцево',null,1],
['s8','Teryoshkovo',[[-131.08,-73.28]],'Терёшково',null,1],
['s8','Ochakovo',[[-124.53,-66.57]],'Очаково',null,1],
['s8_2','Michurinsky_Prospekt',[[-120,-58]],'',null,1],
['s8','Ramenki',[[-120,-44]],'Раменки',null,1],
['s8','Lomonosobsky_Prospekt',[[-120,-35]],'Ломоносовский проспект',null,1],
['s8','Minskaya',[[-120,-25]],'Минская',null,1],
['s8_6','Park_Pobedy',[[-120,-16]],'',null,1],
['s8_5','Delovoy_Tsentr',[[-84,11]],'Деловой центр',null,1],
['s8_1','Kutuzovsky_Prospekt',[[-69.38,3.63]],'Кутузовский проспект',null,1],
['s8_4','Plyushchikha',[[-40,-24.55]],'Плющиха',null,1],
['s8_1','Volkhonka',[[-29.83,-34.29]],'Волхонка',null,1],
['s8_6','Tretyakovskaya',[[18.14,-39]],'',null,1],
['s8_2','Marksistskaya',[[64,-39]],'Марксистская',null,1],
['s8_1','Ploshchad_Ilicha',[[90,-39]],'Площадь Ильича',null,1],
['s8_1','Aviamotornaya',[[99.22,-30]],'',null,1],
['s8','Shosse_Entuziastov',[[109,-20.45]],'Шоссе Энтузиастов',null,1],
['s8','Perovo',[[117,-12.64]],'Перово',null,1],
['s8','Novogireevo',[[125,-4.82]],'Новогиреево',null,1],
['s8','Novokosino',[[133,3]],'Новокосино',null,1],
//
['s9','Altufyevo',[[0,146]],'Алтуфьево',null,1],
['s9','Bibirevo',[[0,137]],'Бибирево',null,1],
['s9','Otradnoye',[[-3,130]],'Отрадное',null,1],
['s9','Vladykino',[[-11,122]],'Владыкино',null,1],
['s9_2','Petrovsko-Razumovskaya',[[-21.52,111.48]],'Петровско-Разумовская',null,1],
['s9_4','Timiryazevskaya',[[-29,101]],'Тимирязевская',null,1],
['s9','Dmitrovskaya',[[-29,91]],'Дмитровская',null,1],
['s9_3','Savyolovskaya',[[-29,82]],'Савёловская',null,1],
['s9_5','Mendeleyevskaya',[[-25,68.95]],'Менделеевская',null,1],
['s9_1','Tsvetnoy_Bulvar',[[-4,43.5]],'Цветной бульвар',null,1],
['s9_2','Chekhovskaya',[[-18.55,24]],'Чеховская',null,1],
['s9_2','Borovitskaya',[[-19,-16]],'Боровицкая',null,1],
['s9_4','Polyanka',[[6,-47.69]],'Полянка',null,1],
['s9_2','Serpukhovskaya',[[19,-71]],'Серпуховская',null,1],
['s9','Tulskaya',[[19,-83]],'Тульская',null,1],
['s9','Nagatinskaya',[[19,-91]],'Нагатинская',null,1],
['s9','Nagornaya',[[19,-99]],'Нагорная',null,1],
['s9','Nakhimovsky_Prospekt',[[19,-107]],'Нахимовский проспект',null,1],
['s9_6','Sevastopolskaya',[[19,-116]],'Севастопольская',null,1],
['s9','Chertanovskaya',[[19,-125]],'Чертановская',null,1],
['s9','Yuzhnaya',[[16,-133]],'Южная',null,1],
['s9','Prazhskaya',[[10,-139.41]],'Пражская',null,1],
['s9','Ulitsa_Akademika_Yangelya',[[2,-147.97]],'Улица Академика Янгеля',null,1],
['s9','Annino',[[-5,-155.45]],'Аннино',null,1],
['s9_2','Bulvar_Dmitriya_Donskogo',[[-13,-164]],'Бульвар Дмитрия Донского',null,1],
//
['s10','Dmitrovskoye_Shosse',[[-24,146]],'Дмитровское шоссе',null,1],
['s10','Ulitsa_800_Letiya_Moskvy',[[-24,139]],'Улица 800-летия Москвы',null,1],
['s10','Seligerskaya',[[-24,132]],'Селигерская',null,1],
['s10','Verkhniye_Likhobory',[[-24,125]],'Верхние Лихоборы',null,1],
['s10','Okruzhnaya',[[-24,118]],'Окружная',null,1],
['s10_4','Petrovsko-Razumovskaya',[[-21.52,111.48]],'',null,1],
['s10_1','Fonvizinskaya',[[-13.87,103.16]],'Фонвизинская',null,1],
['s10_1','Butyrskaya',[[-6.02,94.63]],'Бутырская',null,1],
['s10_2','Marina_Roshcha',[[1,87]],'Марьина Роща',null,1],
['s10_2','Dostoyevskaya',[[4,75]],'Достоевская',null,1],
['s10_2','Trubnaya',[[4.17,43.5]],'Трубная',null,1],
['s10_2','Sretensky_Bulvar',[[31,14.32]],'Сретенский бульвар',null,1],
['s10_2','Chkalovskaya',[[62.27,-16.53]],'Чкаловская',null,1],
['s10_2','Rimskaya',[[84,-44.92]],'Римская',null,1],
['s10_2','Krestyanskaya_Zastava',[[84,-59.83]],'Крестьянская застава',null,1],
['s10','Dubrovka',[[84,-72]],'Дубровка',null,1],
['s10','Kozhukhovskaya',[[92,-83]],'Кожуховская',null,1],
['s10_2','Pechatniki',[[96.83,-87.83]],'Печатники',null,1],
['s10','Volzhskaya',[[108,-106]],'Волжская',null,1],
['s10','Lyublino',[[99,-118]],'Люблино',null,1],
['s10_1','Bratislavskaya',[[91,-126]],'Братиславская',null,1],
['s10_1','Marino',[[84,-137]],'Марьино',null,1],
['s10_1','Borisovo',[[84,-145]],'Борисово',null,1],
['s10_1','Shipilovskaya',[[84,-153]],'Шипиловская',null,1],
['s10_3','Zyablikovo',[[84,-163]],'Зябликово',null,1],
//
['s11_1','Kakhovskaya',[[26,-116]],'Каховская',null,1],
['s11','Varshavskaya',[[46,-116]],'Варшавская',null,1],
['s11_2','Kashirskaya',[[68,-116]],'',null,1],
//
['s12_4','Bittsevsky_Park',[[-38,-149]],'Битцевский парк',null,1],
['s12_3','Lesoparkovaya',[[-27.21,-158.56]],'Лесопарковая',null,1],
['s12_5','Ulitsa_Starokachalovskaya',[[-16.56,-168]],'Улица Старокачаловская',null,1],
['s12_2','Ulitsa_Skobelevskaya',[[-26,-174]],'Улица Скобелевская',null,1],
['s12_1','Bulvar_Admirala_Ushakova',[[-45,-174]],'Бульвар Адмирала Ушакова',null,1],
['s12','Ulitsa_Gorchakova',[[-66,-174]],'Улица Горчакова',null,1],
['s12_1','Buninskaya_Alleya',[[-87,-174]],'Бунинская аллея',null,1],
['s12','Potapovo',[[-108,-174]],'Потапово',null,1],
['s12_1','Chechyorsky_Proezd',[[-129,-174]],'Чечёрский проезд',null,1],
['s12','Novokuryanovo',[[-150,-174]],'Новокурьяново',null,1],
//
['sTPK_3','Kuntsevskaya',[[-152.2,34]],'Кунцевская',null,1],
['sTPK_8','Terekhovo',[[-137,40]],'Терехово',null,1],
['sTPK_6','Mnyovniki',[[-121,40]],'Н.Мнёвники',null,1],
['sTPK','Narodnoye_Opolcheniye',[[-105,40]],'Улица Н.Ополчения',null,1],
['sTPK_5','Delovoy_Tsentr',[[-84,11]],'',null,1],
['sTPK_2','Shelepikha',[[-80,28]],'Шелепиха',null,1],
['sTPK_4','Khoroshyobskaya',[[-80,44]],'Хорошёвская',null,1],
['sTPK_2','Khodynskoye_Pole',[[-67.5,56.5]],'Ходынское Поле',null,1],
['sTPK_3','Petrovsky_Park',[[-51.85,72.15]],'Петровский Парк',null,1],
['sTPK_4','Nizhnyaya_Maslovka',[[-36,82]],'Н.Масловка',null,1],
['sTPK_3','Marina_Roshcha',[[6,82]],'',null,1],
['sTPK_4','Rizhskaya',[[41,82]],'',null,1],
['sTPK_4','Sokolniki',[[76.37,65.67]],'',null,1],
['sTPK_4','Elektrozavodskaya',[[80,19]],'',null,1],
['sTPK_7','Lefortovo',[[98.63,-1.76]],'Лефортово',null,1],
['sTPK_3','Aviamotornaya',[[106,-30]],'Авиамоторная',null,1],
['sTPK_3','Nizhegorodskaya_Ulitsa',[[122.18,-46.18]],'Нижегородская улица',null,1],
['sTPK_3','Tekstilshchiki',[[106.62,-76]],'',null,1],
['sTPK','Yozhnoportovaya',[[93,-92.46]],'Южнопортовая',null,1],
['sTPK','Nagatinsky_Zaton',[[81.63,-106.2]],'Нагатинский затон',null,1],
['sTPK','Zyuzino',[[-12,-116]],'Зюзино',null,1],
['sTPK_3','Kaluzhskaya',[[-50,-116]],'',null,1],
['sTPK_1','Ulitsa_Hovatorov',[[-69.85,-101.15]],'Улица Новаторов',null,1],
['sTPK_3','Prospekt_Vernadskogo',[[-91.05,-79.95]],'',null,1],
['sTPK_3','Michurinsky_Prospekt',[[-113,-58]],'Мичуринский проспект',null,1],
['sTPK_2','Aminyevskoye_Shosse',[[-135.26,-35.74]],'Аминьевское шоссе',null,1],
['sTPK_2','Davydkovo',[[-145.73,-25.27]],'Давыдково',null,1],
//
['sKOZH_3','Aviamotornaya',[[106,-30]],'',null,1],
['sKOZH_3','Nizhegorodskaya_Ulitsa',[[122.18,-46.18]],'',null,1],
['sKOZH','Okskaya_Ulitsa',[[132.65,-56.65]],'Окская улица',null,1],
['sKOZH','Stakhanobskaya_Ulitsa',[[137,-66]],'Стахановская улица',null,1],
['sKOZH_1','Ferganskaya_Ulitsa',[[143.11,-91.39]],'Ферганская улица',null,1],
['sKOZH_2','Kosino',[[156.5,-106]],'Косино',null,1],
['sKOZH_1','Saltykovskaya_Ulitsa',[[165,-123]],'Салтыковская улица',null,1],
['sKOZH_1','Kosino-Ukhtomskaya',[[165,-131]],'Косино-Ухтомская',null,1],
['sKOZH_1','Nekrasovka',[[165,-138]],'Некрасовка',null,1],
//
['sMono','Timiryazevskaya',[[-26,101]],'',null,1],
['sMono','Ulitsa_Milashenkova',[[-13,101]],'',null,1],
['sMono','Teletsentr',[[1,101]],'',null,1],
['sMono','Ulitsa_Akademika_Koroleva',[[17,101]],'',null,1],
['sMono','Vystavochny_Tsentr',[[33,101]],'',null,1],
['sMono_1','Ulitsa_Sergeya_Eyzenshteyna',[[43,101]],'',null,1]
];
