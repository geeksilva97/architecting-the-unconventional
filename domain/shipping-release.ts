export namespace ShippingRelease {
  export type Type = {
    id: string;
    status: string;
    storeId: string;
    items: {sku: string, qty: number}[];
  };

  export const create = (props: Type) => {
    if (props.items.length === 0) throw 'DomainError - shipping release must have ate least one item'

    return props;
  };

  export const isProcessable = (shippingRelease: Type) => {
    return shippingRelease.status === 'READY';
  };
};
