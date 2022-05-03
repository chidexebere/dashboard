interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="block p-2 rounded-lg shadow-inner bg-white border-2 w-full h-full">
      {children}
    </div>
  );
};

export default Card;
