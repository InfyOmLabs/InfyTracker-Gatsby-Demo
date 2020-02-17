import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ data }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <div style={{'float': 'right'}}><h5>
          {data.allMarkdownRemark.edges.map((edge) => {
              return (
                  <div style={{'display': 'inline-block'}} key={edge.node.frontmatter.path}>
                      <Link
                          to={edge.node.frontmatter.path}
                          style={{
                              color: `white`,
                              textDecoration: `none`,
                              marginRight: `10px`
                          }}
                      >
                          {edge.node.frontmatter.title}
                      </Link>
                  </div>
              )              // return Links(edge)
          })}
      </h5>
      </div>
    </div>
  </header>
)

// const Links = (edge) => {
//     return(
//         <div style={{'display': 'inline-block'}}>
//             <Link
//                 to={edge.node.frontmatter.path}
//                 style={{
//                     color: `white`,
//                     textDecoration: `none`,
//                     marginRight: `10px`
//                 }}
//             >
//                 {edge.node.frontmatter.title}
//             </Link>
//         </div>
//     )
// }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
