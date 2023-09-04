import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio'
  },
  api: {
    projectId: 'pnj4edkv',
    dataset: 'production'
  }
})
