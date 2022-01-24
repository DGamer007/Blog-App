import PostsList from './PostsList';
import styles from '../../styles/AllPosts.module.css';

function AllPosts({ posts }) {
    return (
        <section className={styles.posts}>
            <h1>All Posts</h1>
            <PostsList posts={posts} />
        </section>
    );
};

export default AllPosts;