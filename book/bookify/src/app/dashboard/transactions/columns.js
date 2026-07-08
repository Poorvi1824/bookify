import ItemBadge from "@/app/component/DataTable/badges/itemBadeges";
import StatusBadge from "@/app/component/DataTable/badges/StatusBadeges";
import ActionMenu from "@/app/component/DataTable/menu/actionMenu";

export const columns = [
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "user",
    header: "user",
  },
  {
  accessorKey: "itemPurchased",
  header: "Item Purchased",

  cell: ({ row }) => (
    <ItemBadge item={row.original.itemPurchased} />
  ),
},
  {
    accessorKey: "Method",
    header: "Method",
  },
   {
    accessorKey: "Amount",
    header: "Amount",
  },
   {
    accessorKey: "Gateway",
    header: "Gateway",
  },
   {
  accessorKey: "status",
  header: "Status",

  cell: ({ row }) => (
    <StatusBadge status={row.original.status} />
  ),
},
  {
    accessorKey: "Created_by",
    header: "Created by",
  },
  {
    accessorKey: "Date",
    header: "Date",
  },
   {
  accessorKey: "action",
  header: "Action",

  cell: ({ row }) => (
    <ActionMenu orderId={row.original.orderId} />
  ),
}
]
