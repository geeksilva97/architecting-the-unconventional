class InMemoryOrderRepository {
  private orders: Record<string, Order> = {};

  getNextId() {}

  async findById(orderId: string) {}

  async store(orderEntity: Order) {}
}


const makeInMemoryOrderRepository = () => null;

export {
  makeInMemoryOrderRepository
};
