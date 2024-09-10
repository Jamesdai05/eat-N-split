import React, { useState } from "react";
import Button from "./Button";

const AddForm = ({ handleAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleImg = (e) => {
    setImage(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      image: `${image}?=${id}`,
      balance: 0,
      name,
    };
    handleAddFriend(newFriend);

    setImage("https://i.pravatar.cc/48");
    setName("");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">🧑‍🤝‍🧑friendname</label>
      <input
        type="text"
        name=""
        placeholder="Enter name"
        value={name}
        onChange={handleName}
      />
      <label htmlFor="imgUrl">🖼️Image URL</label>
      <input
        type="text"
        name=""
        placeholder="imageURL"
        value={image}
        onChange={handleImg}
      />
      <Button>Add Friend</Button>
    </form>
  );
};

export default AddForm;
