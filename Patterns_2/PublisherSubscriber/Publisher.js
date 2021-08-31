'use strict'

const amqp = require('amqplib');
const exchangeName = process.env.EXCHANGE || 'fanout-test';
const exchangeType = 'fanout';

console.log("Publisher", {exchangeName, exchangeType});


const messages = ["Hello", "I am trying to send different messages", "RabbitMQ is fun to use", "If you send Fanout style it's like doing a broadcast", "Try opening multiple subscribers in terminals", "Bye"];

class Publisher {
    constructor() {
        return this.publisher();
    }

    async publisher() {

        try {
            const connection = await amqp.connect('amqp://localhost');
            const channel = await connection.createChannel();

            await channel.assertExchange(exchangeName, exchangeType); // If it does not exist the exchange creates it

            messages.forEach((message, index) => {
                setTimeout(() => { // Adding a little delay
                    const sent = channel.publish(exchangeName, "", Buffer.from(message)); // it's not necessary to send to queue, but to publish to the exchange 

                    sent ? 
                    console.log(`--> Sent message to "${exchangeName}" exchange: `, message) :
                    console.log(` x Fails sending message to "${exchangeName}" exchange: `, message);
                    
                    if(index === messages.length) return process.exit(0);

                }, index * 500);
                
            });

        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }


}



new Publisher();