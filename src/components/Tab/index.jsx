import "./style.scss"
import PropTypes from "prop-types"
import AsgardSofa from "../../assets/Product/extras/Asgaard-Sofa1.svg"
import AsgardSofaL from "../../assets/Product/extras/Asgaard-SofaL.svg"
import { useState } from "react"

export const Tab = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState()

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Description":
        return (
          <>
            <div className="tab__descriptions">
              <p>{product.extras.detailedDescriptions[0]}</p>
              <p>{product.extras.detailedDescriptions[1]}</p>
            </div>
          </>
        )
      case "Additional Information":
        return (
          <>
            <div className="tab__descriptions">
              <div className="table-container">
                <table className="responsive-table">
                  <tbody>
                    {Object.entries(product.extras.specifications).map(
                      ([key, value], index) => (
                        <tr key={index}>
                          <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>{" "}
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )
      case "Reviews":
        return (
          <>
            <div className="tab__descriptions">
              <p>{product.extras.reviews.Alice}</p>
            </div>
          </>
        )
      default:
        return "Section could not have been rendered"
    }
  }

  return (
    <div>
      <div className="tab-container">
        <div className="tab__switches">
          <h3
            className={selectedTab === "Description" ? "toggle-color " : ""}
            onClick={() => setSelectedTab("Description")}
          >
            Description
          </h3>
          <h3
            className={
              selectedTab === "Additional Information" ? "toggle-color " : ""
            }
            onClick={() => setSelectedTab("Additional Information")}
          >
            Additional Information
          </h3>
          <h3
            className={selectedTab === "Reviews" ? "toggle-color " : ""}
            onClick={() => setSelectedTab("Reviews")}
          >
            Reviews
          </h3>
        </div>
        {renderTabContent()}
        <div className="tab__images">
          <div className="img__wrapper">
            <img src={AsgardSofa} alt="awd" />
          </div>
          <div className="img__wrapper">
            <img src={AsgardSofaL} alt="awd" />
          </div>
        </div>
      </div>
    </div>
  )
}

Tab.propTypes = {
  product: PropTypes.object,
}
