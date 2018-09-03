filesystem source plugins lets you query data **about** content
transformer plugins let you query content, bring it in

gatsby APIS
onCreateNode
createPages

to implelment gatsby api, export a function with the name of the API from gatsby-node.js

1. create slugs for pages using onCreateNode and CreateFilePath api

2. add slugs created by onCreateNode gatsby api directly to the MarkdownRemark nodes.
   This means we can query it later with graphql. Do so using API function createNodeField

when creating a page programmatically, need to specify which component to use
