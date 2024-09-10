import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        <p
          className={
            friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""
          }
        >
          {friend.balance < 0
            ? `You own ${friend.name} ${Math.abs(Number(friend.balance))}$`
            : friend.balance > 0
            ? `${friend.name} owns you ${friend.balance}$`
            : `You and ${friend.name} are even.`}
        </p>
      </div>
      <div>
        <Button handleClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </div>
    </li>
  );
};

export default Friend;
