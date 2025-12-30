import { OrderRepository } from '../repository/order.repository.js';
import { Order } from '../types/order.types.js';
import { consume } from './consume.js';

const orderRepo = new OrderRepository();

export async function startOrderConsumer() {
  await consume('create.order', async (msg) => {
    const order: Order = JSON.parse(msg.toString());

    await orderRepo.CreateOrder(order);

    console.log('Order saved:', order.id);
  });
}
