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
    """Sat. orbit tracs."""
    from sgp4.earth_gravity import wgs84
    from sgp4.io import twoline2rv
    import datetime, math
    
    line1 = '1 00005U 58002B   00179.78495062  .00000023  00000-0  28098-4 0  4753'
    line2 = '2 00005  34.2682 348.7242 1859667 331.7664  19.3264 10.82419157413667'
    utc = list(args)
    for i, arg in enumerate(utc):
        utc[i] = int(arg)
    info_obj = []
    try:
        satellite = twoline2rv(line1, line2, wgs84)
        ps = 2.0 * math.pi * 1/satellite.no * 60.0
        utc1 = utc2 = datetime.datetime(*utc)
        pos = vel = []
        # by 2 mean motion ago
        while (utc1 - utc2 < datetime.timedelta(0, 2.0 * ps)):
            utc2 = utc2 - datetime.timedelta(0, 60)
            p, v = satellite.propagate(*utc2.timetuple()[:6])
            pos += [p]
            #vel += [v]
        info_obj = pos
    except:
        pass
    return HttpResponse(str(info_obj))

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
