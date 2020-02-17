import React from "react"
import Layout from "../components/layout";
import {graphql} from "gatsby";

const IndexPage = (props) => {
    const pageHTML = props.data.markdownRemark.html;
    return (
        <Layout>
            <div dangerouslySetInnerHTML={{__html: pageHTML}}>
            </div>
        </Layout>
    )
};

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default IndexPage
