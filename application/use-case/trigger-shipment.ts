import { ShippingReleaseService } from "../services/shipping-release-service";

type UseCaseDependencies = {
  shippingReleaseId: string;
};

export class TriggerShipment {
  private shippingReleaseService: ShippingReleaseService;

  constructor(
    shippingReleaseService: ShippingReleaseService
  ) {
    this.shippingReleaseService = shippingReleaseService;
  }

  async execute({
    shippingReleaseId
  }: UseCaseDependencies) {
    await this.shippingReleaseService.markAsReadyShip(shippingReleaseId);
  }
}
