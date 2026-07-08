const statusStyles = {
  Success: {
    bg: "bg-[#ECFDF3]",
    text: "text-[#027A48]",
    border: "border-[#ABEFC6]",
  },

  Pending: {
    bg: "bg-[#FFFAEB]",
    text: "text-[#B54708]",
    border: "border-[#FEDF89]",
  },

  Failed: {
    bg: "bg-[#FEF3F2]",
    text: "text-[#B42318]",
    border: "border-[#FECDCA]",
  },
};

const StatusBadge = ({ status }) => {
  const style = statusStyles[status] || {
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
      {status}
    </span>
  );
};

export default StatusBadge;