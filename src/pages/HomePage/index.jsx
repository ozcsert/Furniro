import bedroom from "../../../src/assets/Rectangle26.png"
import ExploreCard from "../../components/ExpoloreCardComponent/index"
import OurProductsSectionComponent from "../../components/OurProductsSectionComponent"

const HomePage = () => {
  return (
    <>
      <OurProductsSectionComponent />
      <ExploreCard
        image={bedroom}
        roomType="02"
        description="bedroom"
        title="Rectangle"
      />
    </>
  )
}

export default HomePage
