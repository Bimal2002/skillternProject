export interface ICoupon {
  _id: string;
  code: string;
  discount: number;
  description: string;
  dateStart:  Date; // Adjust based on actual use case
  dateEnd: Date; // Adjust based on actual use case
}
