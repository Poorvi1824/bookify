import {
  Filter,
  CreditCard,
  Calendar,
  BookOpen,
} from "lucide-react";
import FilterDropdown from "../uicomponents/dropdown";
import { gatewayOptions, paymentMethodOptions, sourceOptions, statusOptions } from "./filterData";
import DateRangeFilter from "./DateRangeFilter";

const FilterToolbar = ({ filters, setFilters }) => {

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-wrap items-center gap-2">


      <FilterDropdown
  title="Status"
  value={filters.status}
  onChange={(value) => updateFilter("status", value)}
  options={statusOptions}
/>

<FilterDropdown
  title="Payment Method"
  value={filters.paymentMethod}
  onChange={(value) => updateFilter("paymentMethod", value)}
  options={paymentMethodOptions}
/>

<FilterDropdown
  title="Source"
  value={filters.source}
  onChange={(value) => updateFilter("source", value)}
  options={sourceOptions}
/>

<FilterDropdown
  title="Gateway"
  value={filters.gateway}
  onChange={(value) => updateFilter("gateway", value)}
  options={gatewayOptions}
/>
<div className="flex items-center gap-3">
    <div className="w-px h-6 bg-gray-300"></div>

    <DateRangeFilter
      value={filters.dateRange}
      onChange={(range) => updateFilter("dateRange", range)}
    />
</div>

      {/* <FilterDropdown
        title="Status"

        value={filters.status}
        onChange={(value) => updateFilter("status", value)}
        options={[
          { id: 1, label: "All", value: "all", color: "text-gray-500", },
          { id: 2, label: "Completed", value: "completed", color: "text-green-500" },
          { id: 3, label: "Pending", value: "pending", color: "text-yellow-500" },
          { id: 4, label: "Cancelled", value: "cancelled", color: "text-red-500" },
        ]}
      />

      <FilterDropdown
        title="Payment"

        value={filters.paymentMethod}
        onChange={(value) => updateFilter("paymentMethod", value)}
        options={[
          { id: 1, label: "All", value: "all", color: "text-gray-500" },
          { id: 2, label: "Cash", value: "cash", color: "text-green-700" },
          { id: 3, label: "Card", value: "card", color: "text-blue-500" },
          { id: 4, label: "UPI", value: "upi", color: "text-orange-500" },
        ]}
      />

      <FilterDropdown
        title="Source"

        value={filters.bookingType}
        onChange={(value) => updateFilter("bookingType", value)}
        options={[
          { id: 1, label: "All", value: "all", color: "text-gray-500" },
          { id: 2, label: "Online", value: "online", color: "text-green-500" },
          { id: 3, label: "Walk-in", value: "walkin", color: "text-blue-500" },
        ]}
      />

      <FilterDropdown
        title="Gateway"
         value={filters.gateway}
        onChange={(value) => updateFilter("gateway", value)}
        options={[
          { id: 1,  label: "All Gateways", value: "today", color: "text-gray-500" },
          { id: 2, label: "Razorpay", value: "razorpay",  color: "text-blue-500", },
          { id: 3, label: "Stripe", value: "stripe", color: "text-purple-500",},
          
        ]}
      /> */}
    </div>
  );
};

export default FilterToolbar;