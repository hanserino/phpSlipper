#================================================================================#
#	Compass Configuration
#	Development Configuration uses expanded output style
#================================================================================#

# Environment	========================================
environment = :development

# Requires 	========================================
require "rgbapng"
require "ceaser-easing"

#	Imports 	========================================
add_import_path "extensions"
add_import_path "parameters"
add_import_path "partials"

#	Project Parameters 	========================================
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
fonts_dir = "fonts"
# $rgbapng_path: "img";

#	Output options 	========================================
relative_assets = true
output_style = :expanded
