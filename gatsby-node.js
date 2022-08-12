exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/vivobarefoot-primus-lite`,
    toPath: `https://www.vivobarefoot.com/us/latest/performance?source=aw&awc=7789_1660332135_038f27bc19f7a41780ba08c4f8340a09`,
    isPermanent: true
  })
}