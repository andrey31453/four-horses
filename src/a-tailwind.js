import { ATailwind } from '@/plugins/a-tailwind/index.js'
import { config } from './a-tailwind.conf.js'

new ATailwind(config).generate('public/styles/a-tailwind.css')
