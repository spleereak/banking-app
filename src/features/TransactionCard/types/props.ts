export interface I_TransactionCard {
  transaction: {
    id: number;
    username: string;
    userAvatar: string;
    date: string;
    time: string;
    payment_amount: number;
  };
  className?: string;
}
