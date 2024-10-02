import { Tab } from "../../components/Tab"
import { useParams } from "react-router-dom"

const SingleProductPage = () => {
  const { id } = useParams()

  const products = [
    {
      id: "1",
      name: "Product 1",
      description: "This is Product 1",
      price: "$10",
      extras: {
        detailedDescriptions: [
          "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
          "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
        ],
        specifications: {
          dimensions: "200cm x 90cm x 75cm",
          material: "100% Cotton Upholstery",
          weight: "35kg",
          color: "Grey",
        },
        extraImages: [
          "../../assets/Product/extras/Asgaard-Sofa1.svg",
          "../../assets/Product/extras/Asgaard-SofaL.svg",
        ],
        reviews: [
          {
            name: "Alice",
            date: "2024-09-10",
            message: "Super comfortable and fits perfectly in my living room.",
          },
          {
            name: "John",
            date: "2024-09-12",
            message:
              "The fabric feels high quality and the color matches well.",
          },
        ],
      },
    },

    {
      id: "2",
      name: "Product 2",
      description: "This is Product 2",
      price: "$8",
      extras: {
        detailedDescriptions: [
          "Soft and plush for ultimate comfort.",
          "Ideal for use in living rooms or bedrooms.",
        ],
        specifications: {
          dimensions: "150cm x 200cm",
          material: "Polyester",
          weight: "2kg",
          color: "Beige",
        },
        extraImages: ["/images/blanket1.jpg", "/images/blanket2.jpg"],
        reviews: [
          {
            name: "Emma",
            date: "2024-09-05",
            message: "Super cozy, perfect for chilly nights.",
          },
          {
            name: "David",
            date: "2024-09-11",
            message: "Soft to the touch and a good size for my sofa.",
          },
        ],
      },
    },
    {
      id: "3",
      name: "Product 3",
      description: "This is Product 3",
      price: "$25",
      extras: {
        detailedDescriptions: [
          "Stylish and modern design to complement any room.",
          "Features adjustable shelves for customizable storage.",
        ],
        specifications: {
          dimensions: "180cm x 80cm x 40cm",
          material: "MDF with a wood veneer finish",
          weight: "40kg",
          color: "Dark Walnut",
        },
        extraImages: ["/images/bookshelf1.jpg", "/images/bookshelf2.jpg"],
        reviews: [
          {
            name: "Sophia",
            date: "2024-09-08",
            message: "Looks great and holds all my books!",
          },
          {
            name: "James",
            date: "2024-09-14",
            message: "Sturdy and stylish, exactly what I needed.",
          },
        ],
      },
    },
    {
      id: "4",
      name: "Product 4",
      description: "This is Product 4",
      price: "$50",
      extras: {
        detailedDescriptions: [
          "A luxurious rug crafted from premium wool.",
          "Features intricate patterns and adds warmth to any space.",
        ],
        specifications: {
          dimensions: "250cm x 300cm",
          material: "100% Wool",
          weight: "15kg",
          color: "Multicolored",
        },
        extraImages: ["/images/rug1.jpg", "/images/rug2.jpg"],
        reviews: [
          {
            name: "Liam",
            date: "2024-09-06",
            message: "Beautiful design and feels amazing underfoot.",
          },
          {
            name: "Olivia",
            date: "2024-09-10",
            message: "High-quality material, very pleased with this purchase.",
          },
        ],
      },
    },
  ]

  const product = products.find((product) => product.id === id)

  console.log(id)
  console.log(product.id)

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <>
      <p> Product </p>
      <Tab product={product} />
    </>
  )
}

export default SingleProductPage
