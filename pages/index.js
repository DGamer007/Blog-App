import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import { getFeaturedPosts } from '../utils/postsUtil';
import Head from 'next/head';

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='I post about programming and web Development.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 3600
  }
}

export default HomePage;
