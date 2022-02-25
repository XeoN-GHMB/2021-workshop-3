#!/usr/bin/python
from viur import core
from viur.core import conf, email, securityheaders
from viur.core.modules.file import thumbnailer

# ------------------------------------------------------------------------------
# General configuration
#

conf["viur.validApplicationIDs"] = [
	"myapp"
]

# ------------------------------------------------------------------------------
# Debugging & Performance
#

# conf["viur.disableCache"] = True
# conf["viur.debug.traceQueries"] = True
# conf["viur.debug.traceExternalCallRouting"] = True
# conf["viur.debug.traceExceptions"] = True

# ------------------------------------------------------------------------------
# File module
#

conf["viur.downloadUrlFor.expiration"] = 0
conf["viur.file.hmacKey"] = b"f863e8a9dd7349b8e9cc18280000000"
conf["viur.file.derivers"] = {
	"thumbnail": thumbnailer
}

conf["derives"] = {
	"thumbnail": [
		{"width": 1920},
		{"width": 1280},
		{"width": 900},
		{"width": 500}
	]
}

# ------------------------------------------------------------------------------
# Language-specific configuration
#

# conf["viur.languageMethod"] = "url"
# conf["viur.availableLanguages"] = ["en", "de"]

# ------------------------------------------------------------------------------
# ViUR admin tool specific configurations
#

conf["admin.vi.name"] = "My APP"

# ------------------------------------------------------------------------------
# Email configuration
#

conf["viur.email.sendInBlue.apiKey"] = "xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
conf["viur.email.transportClass"] = email.EmailTransportSendInBlue
# conf["viur.email.senderOverride"] = "mail@viur.dev"

# Email debugging config
# conf["viur.email.sendFromLocalDevelopmentServer"] = True  # enable sending emails from local development server
# conf["viur.email.recipientOverride"] = ["debug@viur.dev"]  # send all emails to this recipient

# ------------------------------------------------------------------------------
# Content Security Policy (CSP)
#

# GitHub Buttons
securityheaders.addCspRule("style-src", "unsafe-inline", "enforce")  # yes, GitHub buttons need this...
securityheaders.addCspRule("script-src", "buttons.github.io", "enforce")
securityheaders.addCspRule("connect-src", "api.github.com", "enforce")

# ------------------------------------------------------------------------------
# Server startup
#

import modules

app = core.setup(modules)
