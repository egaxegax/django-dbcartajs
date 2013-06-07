django-dbcartajs
================

dbcartajs.appspot.com source code.

It contains dbCartajs project demos.

Featured Starry Sky demo use sattelite's position information. It provides by Python SGP4 module.
Stars, planets, sat.tracs calculations contains in starry.js module.

## Install

Install Python 2.7. Download and unpack google_appengine-1.7+ from http://code.google.com/appengine.

In Windows run cmd.exe and type:

    set PATH=<path_to_google_appengine_dir>;%PATH%
    set PATH=\<path_to_Python_dir\>;%PATH%
    cd django-dbcartajs
    python manage.py runserver 8080

In Linux it's same but instead of `set PATH=<path...>;%PATH%` use `export PATH=<path...>:$PATH`

Try in browser http://127.0.0.1:8080/
