import "./App.css";
import AddForm from "./components/AddForm";
import Button from "./components/Button";
import Friendlist from "./components/Friendlist";
import SplitBill from "./components/SplitBill";
import { initialFriends } from "./components/data";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddForm, setAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddForm = () => {
    setAddForm((showAddForm) => !showAddForm);
  };

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
  };

  const handleSplitBill = (value) => {
    // console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <Friendlist
          friends={friends}
          onHandleSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddForm && <AddForm handleAddFriend={handleAddFriend} />}
        <Button handleClick={handleShowAddForm}>
          {showAddForm ? "Close" : "Add"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
