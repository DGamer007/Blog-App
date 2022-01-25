import Head from 'next/head';
import PostContent from '../../components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '../../utils/postsUtil';

function PostPage({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name='decription' content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </>
    )
};

export function getStaticProps(context) {
    const { params: { slug } } = context;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 60
    };
}

export function getStaticPaths() {

    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));
    const paths = slugs.map(slug => ({ params: { slug } }));

    return {
        paths,
        fallback: 'blocking'
    };
}

export default PostPage;