#-*- coding: utf-8 -*-

from django.core.urlresolvers import reverse
from django.views.generic.simple import direct_to_template
from django.template import TemplateDoesNotExist
from django.http import HttpResponse, Http404
from django.shortcuts import get_object_or_404
import os, sys

# Controllers

def list_page(request, **kw):
    page = kw.get('page') or 'index.html'
    try:
        return direct_to_template(request, page)
    except TemplateDoesNotExist:
        raise Http404

def sgp4_tracs(request, *args, **kw):
    """Sat. orbit tracs by SGP4 module."""
    from sgp4.earth_gravity import wgs84
    from sgp4.io import twoline2rv
    import datetime, math
    
    tledata = [[ 'ISS (ZARYA)',
                 '1 25544U 98067A   12138.83290882  .00011789  00000-0  17152-3 0  5727',
                 '2 25544  51.6409 274.1861 0010682 328.0828 128.1508 15.56173799773289' ],
               [ 'MOLNIYA 1-90',
                 '1 24960U 97054A   04104.60038411 -.00000148  00000-0  10000-3 0  8467',
                 '2 24960  64.1699 306.8439 7209074 272.6281  14.3196  2.00635799 48072' ],
               [ 'COSMOS 158 R/B',
                 '1 02802U 67045B   04105.12224913  .00000082  00000-0  32618-4 0  5785',
                 '2 02802  74.0096 111.2339 0069038 241.3647 118.0552 14.42132256935013' ]]
    utc = list(args)
    for i, arg in enumerate(utc):
        utc[i] = int(arg)
    # loop tledata
    ret = []
    for x in tledata:
        pos = []
        try:
            satellite = twoline2rv(x[1], x[2], wgs84)
            ps = 2.0 * math.pi * 1/satellite.no * 60.0
            utc1 = utc2 = datetime.datetime(*utc)
            # by 2 mean motion ago
            delta = datetime.timedelta(0, ps)
            step = delta.total_seconds() / 10.0
            while (utc1 - utc2 < delta):
                p, v = satellite.propagate(*utc2.timetuple()[:6])
                utc2 = utc2 - datetime.timedelta(0, step)
                pos += [p]
                break
            ret += [[x[0], pos]]
        except:
            pass
    return HttpResponse(str(ret))

def pyinfo(request):
    """Modules Info."""
    info_obj = []
    if 'uname' in dir(os):
        v = str(eval("os.uname()"))
    else:
        v = os.name
    info_obj += [{'name': 'uname', 'val': v}]
    # pyephem
    try:
        import sgp4.io
        v = str(dir(sgp4.io))
    except:
        v = sys.exc_info()[1].message
    info_obj += [{'name': 'sgp4', 'val': v}]
    return direct_to_template(request, 'pyinfo.html', 
                              {'info_obj': info_obj})
