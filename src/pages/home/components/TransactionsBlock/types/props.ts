export interface I_TransactionsBlock {
  className?: string;
  transactionsHistory: {
    id: number;
    username: string;
    userAvatar: string;
    date: string;
    time: string;
    payment_amount: number;
  }[];
}
