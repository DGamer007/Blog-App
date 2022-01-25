import Head from 'next/head';
import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../utils/postsUtil';

function AllPostPage({ posts }) {
    return (
        <>
            <Head>
                <title>Posts</title>
                <meta name='description' content='A list of all programming related posts' />
            </Head>
            <AllPosts posts={posts} />
        </>
    );
};

export function getStaticProps() {

    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        },
        revalidate: 3600
    };
}

export default AllPostPage;