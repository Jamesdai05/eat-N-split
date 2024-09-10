import React from "react";
// import { initialFriends } from "./data";
import Friend from "./Friend";

const Friendlist = ({ friends, onHandleSelection, selectedFriend }) => {
  const item = friends.map((friend) => (
    <Friend
      friend={friend}
      key={friend.id}
      selectedFriend={selectedFriend}
      onSelection={onHandleSelection}
    />
  ));

  return <ul>{item}</ul>;
};

export default Friendlist;
