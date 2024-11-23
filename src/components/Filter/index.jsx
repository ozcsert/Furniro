import React, { useState } from "react";
import "./styles.scss";

function FilterComponent() {
  const [selectedFurnitureCount, setSelectedFurnitureCount] = useState({});
  const [openRooms, setOpenRooms] = useState({});
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    fetch(
      "https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures"
    )
      .then((response) => response.json())
      .then((data) => setFurnitureData(data));
  }, []);

  const toggleRoom = (room) => {
    setOpenRooms((prevState) => {
      const newOpenRooms = { ...prevState };
      newOpenRooms[room] = !prevState[room];
      if (!newOpenRooms[room]) {
        setSelectedFurnitureCount((prevState) => ({
          ...prevState,
          [room]: 0,
        }));
      }
      return newOpenRooms;
    });
  };

  const handleCheckboxChange = (room, furnitureItem, isChecked) => {
    setSelectedFurnitureCount((prevState) => {
      const newCount = { ...prevState };
      if (!newCount[room]) {
        newCount[room] = 0;
      }

      if (isChecked) {
        newCount[room]++;
      } else {
        newCount[room]--;
      }

      return newCount;
    });

    console.log(`Furniture: ${furnitureItem}, Selected: ${isChecked}`);
  };

  const groupedFurniture = furnitureData.reduce((acc, item) => {
    if (!acc[item.room]) {
      acc[item.room] = [];
    }
    acc[item.room].push(item);
    return acc;
  }, {});

  return (
    <div className="filter-component">
      {Object.keys(groupedFurniture).map((room, roomIndex) => (
        <div key={roomIndex} className="filter-component-section">
          <div className="filter-component-section-room">
            <div className="filter-component-section-room-title">
              <p>
                {room}{" "}
                {selectedFurnitureCount[room] > 0 && (
                  <span>{selectedFurnitureCount[room]}</span>
                )}
              </p>
            </div>
            <span onClick={() => toggleRoom(room)}>
              {openRooms[room] ? "-" : "+"}
            </span>
          </div>

          {openRooms[room] && (
            <div className="filter-component-section-room-sub-title">
              {groupedFurniture[room].map((furnitureItem, furnitureIndex) => (
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
                          room,
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

          {roomIndex !== Object.keys(groupedFurniture).length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}

export default FilterComponent;
