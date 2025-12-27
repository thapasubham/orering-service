import { Request, Response } from "express";
export class Order {
  GetOrder(req: Request, res: Response) {
    res.send({ order: "Coffee", price: "200" });
  }
}
