import axios from 'axios';
import React, { useState } from 'react';

interface Props {
  name: any,
  icon: any,
  value: any,
  setValue: any,
  username: any,
  displayName: any,
  discordID: any,
  music: any,
  background: any,
  bio: any,
  image: any,
  email: any;
}

const DashEditInput = ({ name, icon, value, setValue, username, displayName, email, discordID, music, background, bio, image, }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newValue, setNewValue] = useState(value);
  const handleSubmit = async () => {
    try {
      var response = await axios.put("/api/profile", { username, displayName, discordID, music, background, bio, image, email });
      console.log(response.data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();  // Make sure to preventDefault on the event object
    setValue(newValue);
    console.log(value)
    handleSubmit()
    setIsModalOpen(false);
  };



  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col font-sans bg-[#35353e] rounded-xl cursor-pointer hover:bg-opacity-70 p-2 gap-3">
      <div className="flex-row gap-3 flex" onClick={openModal}>
        {icon} <p className="text-lg">{name}</p>
      </div>
      {isModalOpen && (
        <div onClick={handleOverlayClick} className="fixed bg-black/80 z-50 top-0 left-0 w-full h-full flex justify-center items-start">
          <div className="bg-white p-8 rounded-lg shadow-md mt-20">
            <input
              type="text"
              value={newValue}
              onChange={(e) => {
                setNewValue(e.target.value)
                setValue(newValue)
              }}
              placeholder={name}
              className="rounded-lg outline-none text-white py-2 pl-2 bg-[#595962]"
            />
            <div className="flex gap-2 mt-4">
              <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Update
              </button>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashEditInput;
