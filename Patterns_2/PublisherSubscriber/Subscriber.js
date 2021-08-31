'use strict'

const amqp = require('amqplib');
const queue = process.env.QUEUE || 'greetings';
const exchangeName = process.env.EXCHANGE || 'fanout-test';
const exchangeType = 'fanout';

console.log("Subscriber", { queue, exchangeName });

class Subscriber {
    constructor() {
        return this.subscriber(); // Auto-executing subcriber function on this class instance
    }

    async subscriber() {

        try {

            const connection = await amqp.connect('amqp://localhost');
            const channel = await connection.createChannel(); // Creating channel

            await channel.assertQueue(queue); // Take the existing queue and if not create it

            await channel.assertExchange(exchangeName, exchangeType);

            await channel.bindQueue(queue, exchangeName); // Join the queue to the exchange

            channel.consume(queue, (message) => {
                const content = message.content.toString();
                console.log(`Received message from "${queue}" queue: `, content);
                channel.ack(message); // Remove the message from the queue
            });

        } catch (error) {
            console.error(error);
            process.exit(1);
        }

    }

}

new Subscriber();