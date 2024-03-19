import { ShippingRelease } from "../../domain/shipping-release";
import { ShippingReleaseService } from "../services/shipping-release-service";

type UseCaseDependencies = {
  shippingRelease: ShippingRelease.Type;
  orderId: string;
};

export class TriggerShipment {
  private shippingReleaseService: ShippingReleaseService;

  constructor(
    shippingReleaseService: ShippingReleaseService
  ) {
    this.shippingReleaseService = shippingReleaseService;
  }

  execute({
    orderId,
    shippingRelease
  }: UseCaseDependencies) {}
}
