import { ATailwind } from './src/plugins/a-tailwind/index.js'
import { config } from './a-tailwind.conf.js'

new ATailwind(config).generate('src/assets/styles/a-tailwind.css')
