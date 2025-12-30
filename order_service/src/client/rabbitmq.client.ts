import amqp from 'amqplib';
import { Channel } from 'amqplib';

class RabbitClient {
  private channel!: Channel;

  async connect() {
    const client = await amqp.connect('amqp://admin:admin123@localhost:5672');
    this.channel = await client.createChannel();
    console.log('Connected to RabbitMQ');
  }
  async getChannel() {
    if (!this.channel) {
      await this.connect();
    }
    return this.channel;
  }
}

export const rabbitclient = new RabbitClient();
