import styles from '../../styles/FeaturedPosts.module.css';
import PostsList from '../Posts/PostsList';

function FeaturedPosts({ posts }) {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsList posts={posts} />
        </section>
    );
};

export default FeaturedPosts;