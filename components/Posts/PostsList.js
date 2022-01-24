import PostsListItem from './PostsListItem';
import styles from '../../styles/PostsList.module.css';

function PostsList({ posts }) {

    return (
        <ul className={styles.grid}>
            {posts.map(function (post) {
                return (
                    <PostsListItem key={post.slug} post={post} />
                )
            })}
        </ul>
    );
};

export default PostsList;