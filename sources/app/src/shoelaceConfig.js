//import "@viur/viur-shoelace/dist/themes/light.css"
import "@viur/viur-shoelace/dist/components/button/button.js"
import "@viur/viur-shoelace/dist/components/button-group/button-group.js"
import "@viur/viur-shoelace/dist/components/icon/icon.js"
import "@viur/viur-shoelace/dist/components/input/input.js"
import "@viur/viur-shoelace/dist/components/dropdown/dropdown.js"
import "@viur/viur-shoelace/dist/components/menu/menu.js"
import "@viur/viur-shoelace/dist/components/menu-item/menu-item.js"
import "@viur/viur-shoelace/dist/components/badge/badge.js"
import "@viur/viur-shoelace/dist/components/divider/divider.js"
import "@viur/viur-shoelace/dist/components/avatar/avatar.js"
import "@viur/viur-shoelace/dist/components/dialog/dialog.js"
import "@viur/viur-shoelace/dist/components/tooltip/tooltip.js"

import {setBasePath} from '@viur/viur-shoelace/dist/utilities/base-path.js';
import {registerIconLibrary} from '@viur/viur-shoelace/dist/utilities/icon-library.js';
import config from './config.js'

setBasePath(`${config.staticFolder}/viur-shoelace`)

// Register a custom icons repository for this app
registerIconLibrary('myicons', {
    resolver: name => `${config.staticFolder}/myicons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
})