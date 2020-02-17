/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = (({graphql, actions}) => {
    const {createPage} = actions;

    return new Promise((resolve, reject) => {
        const pageTemplate = path.resolve('src/pages/index.js');

        resolve(
            graphql(
                `
                    query {
                        allMarkdownRemark {
                            edges {
                                node {
                                    frontmatter {
                                        path
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                result.data.allMarkdownRemark.edges.forEach(({node}) => {
                    const path = node.frontmatter.path;
                    createPage({
                        path,
                        component: pageTemplate,
                        context: {
                            pathSlug: path
                        }
                    })

                    resolve()
                });
            })
        )
    })
});

