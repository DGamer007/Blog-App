import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../utils/postsUtil';

function AllPostPage({ posts }) {
    return (
        <AllPosts posts={posts} />
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