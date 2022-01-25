import { useEffect, useState } from 'react';
import Notification from '../ui/Notification';
import styles from '../../styles/ContactForm.module.css';

function ContactForm() {

    const [notification, setNotification] = useState(null); // {title,status,message} OR null OR undefined
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (notification?.status === 'success' || notification?.status === 'error') {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [notification])

    async function sendMessageHandler(event) {
        event.preventDefault();

        const packet = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name, message })
        };

        try {
            setNotification({
                status: 'pending',
                title: 'Sending Message...',
                message: 'Your message is on its way.'
            });
            const res = await fetch('/api/contact', packet);
            const data = await res.json();

            if (!res.ok) {
                setNotification({
                    title: 'Error',
                    status: 'error',
                    message: data.message || 'Something went wrong.'
                });
                return;
            }

            setNotification({
                title: 'Success!',
                status: 'success',
                message: data.message
            });
        } catch (err) {
            console.log(err);
            setNotification({
                status: 'error',
                title: 'Error',
                message: err.message || 'Something went wrong.'
            });
        }
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id='message' rows='5' value={message} onChange={e => setMessage(e.target.value)} required />
                </div>

                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification {...notification} />}
        </section>
    );
}

export default ContactForm;