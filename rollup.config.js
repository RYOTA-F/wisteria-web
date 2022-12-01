import alias from '@rollup/plugin-alias'

const aliases = alias({
  resolve: ['.svelte', '.ts'],
  entries: [
    { find: '', replacement: 'src/' },
    { find: 'components', replacement: '@/components' },
    { find: 'const', replacement: '@/const' },
    { find: 'layouts', replacement: '@/layouts' },
    { find: 'lib', replacement: '@/lib' },
    { find: 'sections', replacement: '@/sections' },
    { find: 'types', replacement: '@/types' },
  ],
})

export default {
  plugins: [aliases],
}
