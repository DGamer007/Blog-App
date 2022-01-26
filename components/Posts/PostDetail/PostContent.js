import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import PostHeader from './PostHeader';
import styles from '../../../styles/PostContent.module.css';

PrismLight.registerLanguage('js', js);
PrismLight.registerLanguage('jsx', jsx);
PrismLight.registerLanguage('html', html);
PrismLight.registerLanguage('css', css);

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
                <PrismLight style={dracula} language={match[1]}>{children}</PrismLight>
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