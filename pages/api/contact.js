import { MongoClient } from 'mongodb';

async function contact(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid Input.' });
            return;
        }

        const newMessage = { email, name, message };

        let client;

        try {
            client = await MongoClient.connect(process.env.DATABASE_URL);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Connection refused from Database Server.' });
            return;
        }

        try {
            const database = client.db();

            const result = await database.collection('messages').insertOne(newMessage);

            newMessage.id = result.insertedId;

            res.status(201).json({ message: 'Successfully stored your message.', data: newMessage });

        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Unable to store data at Database' });
        }

        client.close();
        return;

    }

    res.status(403).json({ message: 'Method not Allowed.' });
}

export default contact;