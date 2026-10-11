"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/Select";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { onRampTransaction } from "../lib/actions/onRampActions";

const SUPPORTED_BANKS = [
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
   const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
   const [amount,setAmount] = useState(0);
   const [bank,setBank] = useState(SUPPORTED_BANKS[0]?.name || "");
    return <Card title="Add Money">
    <div className="w-full">
        <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => {
          setAmount(Number(value))
        }} />
        <div className="py-4 text-left">
            Bank
        </div>
        <Select onSelect={(value) => {
            setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
            setBank(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
        }} options={SUPPORTED_BANKS.map(x => ({
            key: x.name,
            value: x.name
        }))} />
        <div className="flex justify-center pt-4">
            <Button onClick={async () => {
                window.location.href = redirectUrl || "";
                await onRampTransaction(bank,amount*100);
            }}>
            Add Money
            </Button>
        </div>
    </div>
</Card>
};
