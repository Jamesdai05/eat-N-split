import React, { useState } from "react";
import Button from "./Button";

const SplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPayByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Form Split Bill with {selectedFriend.name}</h2>
      <label>💰Total bill</label>
      <input
        type="text"
        placeholder="Enter the amount"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🪙Your expense</label>
      <input
        type="text"
        placeholder="Enter the amount"
        value={paidByUser}
        onChange={(e) =>
          setPayByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🪙{selectedFriend.name}'s expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>⭐Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="user's friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBill;
