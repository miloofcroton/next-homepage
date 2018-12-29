import React, { withRouter } from 'next/router';
import Layout from '../components/Layout.js';

const Post = props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

export default Post;
