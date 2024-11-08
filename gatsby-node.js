exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/posts/*',
    toPath: 'https://blog.nagi.fun',
    isPermanent: true,
  })
} 