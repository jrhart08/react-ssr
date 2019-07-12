module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    // { ssr: true } ensures that client/server use same CSS class names
    ["babel-plugin-styled-components", { "ssr": true }]
  ],
}
