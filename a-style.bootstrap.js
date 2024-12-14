import { AStyle } from './src/plugins/a-style/index.js'
import { config } from './a-style.conf.js'

new AStyle(config).generate('src/assets/styles/a-style.css')
