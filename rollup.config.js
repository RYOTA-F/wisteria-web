import alias from '@rollup/plugin-alias'

const aliases = alias({
  resolve: ['.svelte', '.ts'],
  entries: [
    { find: '', replacement: 'src/' },
    { find: 'components', replacement: '@components' },
    { find: 'layouts', replacement: '@layouts' },
    { find: 'sections', replacement: '@sections' },
  ],
})

export default {
  plugins: [aliases],
}
