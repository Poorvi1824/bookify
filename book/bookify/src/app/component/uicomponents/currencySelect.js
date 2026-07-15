import {
  FaDollarSign,
  FaEuroSign,
  FaPoundSign,
  FaYenSign,
  FaRupeeSign,
} from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";

export const currencyOptions = [
  {
    value: "INR",
    label: "Indian Rupee (INR)",
    icon: FaRupeeSign,
  },
  {
    value: "USD",
    label: "US Dollar (USD)",
    icon: FaDollarSign,
  },
  {
    value: "EUR",
    label: "Euro (EUR)",
    icon: FaEuroSign,
  },
  {
    value: "GBP",
    label: "British Pound (GBP)",
    icon: FaPoundSign,
  },
  {
    value: "JPY",
    label: "Japanese Yen (JPY)",
    icon: FaYenSign,
  },
  {
    value: "AED",
    label: "UAE Dirham (AED)",
    icon: LiaCoinsSolid,
  },
  {
    value: "CAD",
    label: "Canadian Dollar (CAD)",
    icon: FaDollarSign,
  },
  {
    value: "AUD",
    label: "Australian Dollar (AUD)",
    icon: FaDollarSign,
  },
  {
    value: "NZD",
    label: "New Zealand Dollar (NZD)",
    icon: FaDollarSign,
  },
  {
    value: "SGD",
    label: "Singapore Dollar (SGD)",
    icon: FaDollarSign,
  },
  {
    value: "CNY",
    label: "Chinese Yuan (CNY)",
    icon: LiaCoinsSolid,
  },
  {
    value: "CHF",
    label: "Swiss Franc (CHF)",
    icon: LiaCoinsSolid,
  },
];