const itemStyles = {
  Package: {
    bg: "bg-[#F4F3FF]",
    text: "text-[#5925DC]",
    border: "border-[#D9D6FE]",
  },

  Wallet: {
    bg: "bg-[#EFF8FF]",
    text: "text-[#175CD3]",
    border: "border-[#B2DDFF]",
  },
};

const ItemBadge = ({ item }) => {
  const style = itemStyles[item] || {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-300",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-lg
        border
        px-3
        py-1
        text-12
        font-medium
        ${style.bg}
        ${style.text}
        ${style.border}
      `}
    >
      {item}
    </span>
  );
};

export default ItemBadge;