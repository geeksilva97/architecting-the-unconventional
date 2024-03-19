export namespace Order {
  export type Type = {
    id: string;
    storeId: string;
    shippingReleaseId: string;
  };

  export const create = (props: Type) => props;
}
