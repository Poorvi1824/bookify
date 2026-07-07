"use client"

import React, { useEffect, useState, useCallback } from "react";
import { ChevronDown, Calendar, UserCheck, TrendingUp, Package, Wallet } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const SalesAnalytics = () => {

  const days = [
    { name: "Today", value: 0 },
    { name: "This Week", value: 1 },
    { name: "This Month", value: 2 }
  ];

  const blocks = [
    { name: "Total Revenue", icon: <UserCheck className="w-8 h-8 p-1 text-blue-500" />, iconBg: "bg-blue-100" },
    { name: "Packages Sold", icon: <Package className="w-8 h-8 p-1 text-green-600" />, iconBg: "bg-green-100" },
    { name: "Wallet Recharges", icon: <Wallet className="w-8 h-8 p-1 text-purple-500" />, iconBg: "bg-purple-100" },
    { name: "Avg. Daily Revenue", icon: <TrendingUp className="w-8 h-8 p-1 text-red-500" />, iconBg: "bg-red-100" },
  ];

  const revenueData = [
    { day: "Mon", revenue: 1200 },
    { day: "Tue", revenue: 1800 },
    { day: "Wed", revenue: 1500 },
    { day: "Thu", revenue: 2500 },
    { day: "Fri", revenue: 2100 },
    { day: "Sat", revenue: 3200 },
    { day: "Sun", revenue: 2800 },
  ];

  const paymentData = [
    { name: "UPI", value: 45, color: "#6366F1" },
    { name: "Credit Card", value: 25, color: "#10B981" },
    { name: "Debit Card", value: 15, color: "#F59E0B" },
    { name: "Cash", value: 10, color: "#EF4444" },
    { name: "Wallet", value: 5, color: "#8B5CF6" },
  ];

  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isOpen, setIsOpen] = useState(false);

  // Pie chart hover state
  const [activePieIndex, setActivePieIndex] = useState(null);
  const totalPayments = paymentData.reduce((sum, item) => sum + item.value, 0);

  const onPieEnter = useCallback((_, index) => setActivePieIndex(index), []);
  const onPieLeave = useCallback(() => setActivePieIndex(null), []);

  // Custom tooltip for pie chart
  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 min-w-[140px]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.color }} />
            <span className="font-semibold text-gray-700 text-sm">{data.name}</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{data.value}%</p>
          <p className="text-xs text-gray-400">of total sales</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for line chart
  const CustomLineTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-3 min-w-[120px]">
          <p className="text-xs text-gray-400 mb-1">{label}</p>
          <p className="text-xl font-bold text-gray-800">${payload[0].value.toLocaleString()}</p>
          <p className="text-xs text-gray-400">revenue</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="flex w-full h-30 py-1 flex flex-col">

        {/* Header */}
        <div className="flex w-full justify-between items-center mb-4">
          <div className="flex flex-col text-xl font-bold">
            <h1>Sales Analytics</h1>
            <span className="text-sm text-gray-400 font-light">Track revenue, transactions, and sales performance.</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                {selectedDay.name}
                <ChevronDown className="w-4 h-4" />
              </button>

              {isOpen && (
                <div className="absolute top-full mt-1 right-0 left-0 w-30 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {days.map((day) => (
                    <button
                      key={day.value}
                      onClick={() => {
                        setSelectedDay(day);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${selectedDay.value === day.value ? 'text-black font-medium' : 'text-gray-600'
                        }`}
                    >
                      {day.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Calendar Input */}
            <div className="relative flex items-center">
              <Calendar className="absolute left-3 w-4 h-4 text-gray-500" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Blocks Section */}
        <div className="w-full h-50 py-2 m-auto">
          <div className="w-full h-full gap-4 flex flex-row justify-between items-center">
            {blocks.map((block, index) => (
              <div key={index} className="h-40 flex-1 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className={`w-10 h-10 flex rounded-lg items-center justify-center ${block.iconBg}`}>{block.icon}</span>
                  <span className="text-sm text-gray-500">...</span>
                </div>
                <div className="text-2xl text-sm text-gray-400">{block.name}</div>
                <div className="text-2xl font-semibold">QR0</div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Section */}
        <div className="flex w-full my-3 gap-4">

          {/* Revenue Trend Block */}
          {/* left linechart */}
          <div className="w-[70%] h-140 bg-white rounded-lg shadow-md text-lg font-bold mb-2">
            <div className="p-4 flex flex-col border-b border-b-gray-200 mb-2">
              <h6 className="text-25 font-light">Revenue Trend</h6>
              <span className="text-sm text-gray-500">Daily revenue over selected period</span>
            </div>

           {/* line chart */}
            <div className="h-[400px] w-full p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid stroke="#F3F4F6" vertical={false} />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <XAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    dataKey="day"
                  />
                  <Tooltip content={<CustomLineTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6366F1"
                    strokeWidth={3}
                    dot={{ r: 4, fill: "#6366F1", stroke: "#fff", strokeWidth: 2 }}
                    activeDot={{ r: 7, fill: "#6366F1", stroke: "#fff", strokeWidth: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Payment Gateways Block */}

          {/* right block */}
          <div className="flex-1 h-140 bg-white rounded-lg shadow-md text-lg font-bold mb-2">
            <div className="flex flex-col border-b border-b-gray-200 mb-2 p-4">
              <span className="text-25 text-gray-800">Payment Gateways</span>
              <span className="text-sm text-gray-500">Sales by payment method</span>
            </div>

            {/* Pie Chart */}
            <div className="relative w-full flex items-center justify-center p-2">
              <div className="relative w-[220px] h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius="60%"
                      outerRadius="80%"
                      paddingAngle={3}
                      cornerRadius={8}
                      onMouseEnter={onPieEnter}
                      onMouseLeave={onPieLeave}
                      stroke="none"
                    >
                      {paymentData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={entry.color}
                          opacity={activePieIndex === null || activePieIndex === index ? 1 : 0.35}
                          style={{
                            filter: activePieIndex === index
                              ? `drop-shadow(0 4px 12px ${entry.color}60)`
                              : 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                          }}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomPieTooltip />} />
                  </PieChart>
                </ResponsiveContainer>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-gray-800">
                    {activePieIndex !== null
                      ? paymentData[activePieIndex].value + '%'
                      : totalPayments + '%'
                    }
                  </span>
                  <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                    {activePieIndex !== null ? paymentData[activePieIndex].name : 'Total'}
                  </span>
                </div>
              </div>
            </div>

            {/* Custom Legend */}
            <div className="px-4 pb-2 space-y-2">
              {paymentData.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer
                    ${activePieIndex === index
                      ? 'bg-gray-50 shadow-sm'
                      : 'hover:bg-gray-50'
                    }`}
                  onMouseEnter={() => setActivePieIndex(index)}
                  onMouseLeave={() => setActivePieIndex(null)}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 2px 6px ${item.color}50`
                      }}
                    />
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">{item.value}%</span>
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${item.value * 2}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

{/* revenu summary */}
 <div className="flex w-full my-3 gap-4">

          {/* Revenue Trend Block */}
          {/* left linechart */}
          <div className="w-[70%] h-80 bg-white rounded-lg shadow-md text-lg font-bold mb-2">
            <div className="p-4 flex flex-col  mb-2">
              <h6 className="text-25 font-light">Wallet Recharge vs Package Sales</h6>
              <span className="text-sm text-gray-500">Monthly comparison of revenue sources</span>
            </div>

           
          </div>

          {/* Payment Gateways Block */}

          {/* right block */}
          <div className="flex-1 h-80 bg-white rounded-lg shadow-md text-lg font-bold mb-2">
           

            <div className="p-4 flex flex-col mb-2">
              <h6 className="text-25 font-light">Revenue Summary</h6>
              <span className="text-sm text-gray-500">Compare with previous period</span>
            </div>
           

           
          </div>

        </div>



      </div>
    </>
  );
};

export default SalesAnalytics;