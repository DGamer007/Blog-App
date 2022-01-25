import Head from 'next/head';
import ContactForm from '../components/contact/ContactForm';


function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name='description' content='Reach me with messages' />
            </Head>
            <ContactForm />
        </>
    );
};


export default ContactPage;