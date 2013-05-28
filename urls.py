from django.conf.urls.defaults import *

handler500 = 'djangotoolbox.errorviews.server_error'

urlpatterns = patterns('',
    (r'^pyinfo/?$', 'dbcartajs.views.pyinfo'),
    (r'^sgp4tracs/(\d{4})/(\d{1,2})/(\d{1,2})/(\d{1,2})/(\d{1,2})/(\d{1,2})/?$', 'dbcartajs.views.sgp4_tracs'),
    (r'^(?P<page>.*)/?$', 'dbcartajs.views.list_page'),
)
