import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './PostHeader';
import styles from '../../../styles/PostContent.module.css';

function PostContent({ post }) {

    const customRenderers = {
        p({ children }) {

            if (children[0].type === 'img') {
                const { alt, src } = children[0].props;
                return (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${src}`}
                            alt={alt}
                            width={600}
                            height={300} />
                    </div>
                );
            }

            return (
                <p>{children}</p>
            );
        },
        code({ inline, children, className, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            return !inline && match ? (
                <Prism style={dracula} language={match[1]}>{children}</Prism>
            ) : (
                <code className={className} {...props}>{children}</code>
            );
        }
    };

    const imagePath = `/images/posts/${post.slug}/${post.image}`

    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers} >{post.content}</ReactMarkdown>
        </article >
    );
};

export default PostContent;