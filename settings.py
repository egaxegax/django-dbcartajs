from djangoappengine.settings_base import *

import os

SECRET_KEY = 'wmg)=ob440kqbx#)y)aoqjo4n7q@$&p@*u0b-*r8sv_+8$+ae='

LANGUAGE_CODE = 'ru'

USE_I18N = True

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.admin',
    'django.contrib.markup',
    'djangotoolbox',
    'djangoappengine',
    'dbcartajs',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',    
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    'django.core.context_processors.request',
)

LOGIN_REDIRECT_URL = '/'

PROJECT_ROOT = os.path.dirname(__file__)

ADMIN_MEDIA_PREFIX = '/media/admin/'
MEDIA_ROOT = os.path.join(os.path.dirname(__file__), 'media')
TEMPLATE_DIRS = (os.path.join(os.path.dirname(__file__), 'templates'),)

ROOT_URLCONF = 'urls'

DEBUG = False

ALLOWED_HOSTS = '*'
