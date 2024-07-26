export interface RazorpayOptions {
  key: string;
  amount: string;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: {
    address?: string;
  };
  theme?: {
    color?: string;
  };
}

export interface Window {
  Razorpay: {
    new (options: RazorpayOptions): any;
  };
}