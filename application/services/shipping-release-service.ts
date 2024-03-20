export interface ShippingReleaseService {
  markAsReadyShip(shippingReleaseId: string): Promise<void>;
}
