import { BankCard } from "../components/BankCard/ui";
import { FunctionsBlock } from "../components/FunctionsBlock/ui";
import { TransactionsBlock } from "../components/TransactionsBlock/ui";

const cardMockData = {
  cardImage: "/images/card.png",
  cardId: "0426576376",
  balance: "1456.90",
  userId: "@user_id",
  username: "DARIA SIMMONS",
};

const transactionsMockData = [
  {
    id: 1,
    username: "Maksim Kondratev",
    userAvatar: "/images/useravatar.png",
    date: "27 August",
    time: "8:46 am",
    payment_amount: -10.52,
  },
  {
    id: 2,
    username: "Ranel Gataullin",
    userAvatar: "/images/profile.png",
    date: "18 August",
    time: "2:26 am",
    payment_amount: 155,
  },
  {
    id: 3,
    username: "Maksim Kondratev",
    userAvatar: "/images/useravatar.png",
    date: "14 August",
    time: "8:46 am",
    payment_amount: 10.52,
  },
  {
    id: 4,
    username: "Ranel Gataullin",
    userAvatar: "/images/profile.png",
    date: "12 August",
    time: "2:26 am",
    payment_amount: 155,
  },
  {
    id: 5,
    username: "Maksim Kondratev",
    userAvatar: "/images/useravatar.png",
    date: "14 August",
    time: "8:46 am",
    payment_amount: -10.52,
  },
];

export default function HomePage() {
  return (
    <div className="mb-102 flex flex-col gap-16 px-16">
      <BankCard data={cardMockData} />
      <FunctionsBlock />
      <TransactionsBlock transactionsHistory={transactionsMockData} />
    </div>
  );
}
