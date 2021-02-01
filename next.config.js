module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/booty': { page: '/' },
    }
  },
}
