"use client";

import { useState } from "react";

const supportedBanks = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://www.hdfcbank.com"
  },
  {
    name: "SBI",
    redirectUrl: "https://sbi.co.in"
  },
  {
    name: "ICICI Bank",
    redirectUrl: "https://www.icicibank.com"
  },
  {
    name: "Bank of Baroda",
    redirectUrl: "https://www.bankofbaroda.in"
  }
];

export const AddMoneyCard = () => {
  const [amount, setAmount] = useState<string>("");
  const [selectedBank, setSelectedBank] = useState<string>(supportedBanks[0]?.name || "");

  const handleAddMoney = () => {
    const bank = supportedBanks.find((b) => b.name === selectedBank);
    if (bank) {
      window.location.href = bank.redirectUrl;
    }
  };

  return (
    <div className="bg-[#f4f4f6] p-6 rounded-2xl w-full max-w-md shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold text-slate-900 border-b border-slate-300 pb-3">
        Add Money
      </h2>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Amount
        </label>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-[#eaedf1] border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Bank
        </label>
        <div className="relative">
          <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className="w-full bg-[#eaedf1] border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 appearance-none cursor-pointer pr-10"
          >
            {supportedBanks.map((bank) => (
              <option key={bank.name} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-600">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleAddMoney}
          className="bg-[#293241] hover:bg-[#1e2532] text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm"
        >
          Add Money
        </button>
      </div>
    </div>
  );
};