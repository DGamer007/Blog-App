import Image from 'next/image';
import styles from '../../styles/Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src="/images/site/DGamer.png" alt='An Image Showing DGamer' width={300} height={300} />
            </div>
            <h1>Hi, I'm DGamer</h1>
            <p>
                I blog about Web Development - especially frontend frameworks like Angular and React.
            </p>
        </section>
    );
};

export default Hero;