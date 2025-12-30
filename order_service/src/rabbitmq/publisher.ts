import { rabbitclient } from '../client/rabbitmq.client.js';

export async function publish<T>(queue_name: string, value: T) {
  const channel = await rabbitclient.getChannel();

  await channel.assertQueue(queue_name, {
    durable: true,
  });
  channel.sendToQueue(queue_name, Buffer.from(JSON.stringify(value)));
  console.log('Published %s to %s', value, queue_name);
}
