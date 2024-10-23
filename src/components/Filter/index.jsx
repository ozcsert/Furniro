import React, { useState } from "react";
import "./styles.scss";
import { furnitureData } from "../../data/furnitureData";

function FilterComponent() {
  const [selectedFurnitureCount, setSelectedFurnitureCount] = useState({});
  const [openRooms, setOpenRooms] = useState({});

  const toggleRoom = (roomIndex) => {
    setOpenRooms((prevState) => ({
      ...prevState,
      [roomIndex]: !prevState[roomIndex],
    }));
  };

  const handleCheckboxChange = (roomIndex, furnitureItem, isChecked) => {
    setSelectedFurnitureCount((prevState) => {
      const newCount = { ...prevState };
      if (!newCount[roomIndex]) {
        newCount[roomIndex] = 0;
      }

      if (isChecked) {
        newCount[roomIndex]++;
      } else {
        newCount[roomIndex]--;
      }

      return newCount;
    });

    console.log(`Furniture: ${furnitureItem}, Selected: ${isChecked}`);
  };

  return (
    <div className="filter-component">
      {furnitureData.map((roomData, roomIndex) => (
        <div key={roomIndex} className="filter-component-section">
          <div className="filter-component-section-room">
            <div className="filter-component-section-room-title">
              <p>
                {roomData.room}{" "}
                {selectedFurnitureCount[roomIndex] > 0 && (
                  <span>{selectedFurnitureCount[roomIndex]}</span>
                )}
              </p>
            </div>
            <span onClick={() => toggleRoom(roomIndex)}>
              {openRooms[roomIndex] ? "-" : "+"}
            </span>
          </div>

          {openRooms[roomIndex] && (
            <div className="filter-component-section-room-sub-title">
              {roomData.furniture.map((furnitureItem, furnitureIndex) => (
                <div
                  key={furnitureIndex}
                  className="filter-component-section-room-checkbox"
                >
                  <label className="filter-component-section-container">
                    <p>{furnitureItem.name}</p>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(
                          roomIndex,
                          furnitureItem.name,
                          e.target.checked
                        )
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {roomIndex !== furnitureData.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}

export default FilterComponent;
