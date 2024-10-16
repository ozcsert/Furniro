import { useState, useEffect } from "react"
import ProfileForm from "../../components/ProfileForm"
import "./style.scss"

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  })

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEditing) {
      localStorage.setItem("userData", JSON.stringify(userData))
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="profile-page">
      <ProfileForm
        userData={userData}
        isEditing={isEditing}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default ProfilePage
