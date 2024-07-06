export interface ICoupon {
  _id: string;
  code: string;
  discount: number;
  description: string;
  validFrom: string | Date; // Adjust based on actual use case
  validUntil: string | Date; // Adjust based on actual use case
}
