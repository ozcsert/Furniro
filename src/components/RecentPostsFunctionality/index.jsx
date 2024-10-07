import "../RecentPostsFunctionality/style.scss"
import recentPostsimg1 from "../../assets/images/recentPostsimg1.png"
import recentPostsimg2 from "../../assets/images/recentPostsimg2.png"
import recentPostsimg3 from "../../assets/images/recentPostsimg3.png"
import recentPostsimg4 from "../../assets/images/recentPostsimg4.png"
import recentPostsimg5 from "../../assets/images/recentPostsimg5.png"

function RecentPostsFunctionality() {
  const news = [
    {
      img: recentPostsimg1,
      text: "Going all-in with millennial design",
      date: "13 Jun 2024",
    },
    {
      img: recentPostsimg2,
      text: "Exploring new ways of decorating",
      date: "22 Aug 2024",
    },
    {
      img: recentPostsimg3,
      text: "Handmade pieces that took time to make",
      date: "02 Jun 2024",
    },
    {
      img: recentPostsimg4,
      text: "Modern home in Milan",
      date: "05 May 2024",
    },
    {
      img: recentPostsimg5,
      text: "Colorful office redesign",
      date: "26 Sep 2024",
    },
  ]
  return (
    <div className="recent-post-main">
      <div className="recent-post-include">
        <h2 className="recent-post-text">Recent Post</h2>
        {news.map((e) => (
          // eslint-disable-next-line react/jsx-key
          <div className="recent-post-info">
            <img className="recent-post-info-img" src={e.img} />
            <div className="recent-post-info-right">
              <p className="recent-post-info-right-text">{e.text}</p>
              <p className="recent-post-info-right-calender">{e.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecentPostsFunctionality
