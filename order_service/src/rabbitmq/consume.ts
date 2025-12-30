import { rabbitclient } from '../client/rabbitmq.client.js';

export async function consume(
  queue_name: string,
  OnMessage: (msg: Buffer) => void
) {
  const channel = await rabbitclient.getChannel();
  console.log(queue_name);
  await channel.assertQueue(queue_name, { durable: true });
  channel.consume(queue_name, (msg) => {
    if (msg?.content) {
      OnMessage(msg.content);
      channel.ack(msg);
    }
  });
}
