import "../RecentPostsFunctionality/style.scss"
import { news } from "./data"

<<<<<<< HEAD
const RecentPostsFunctionality = () => {
  return (
    <div className="recent-post-main">
      <div className="recent-post-include">
        <h2 className="recent-post-text">Recent Post</h2>
        {news.map((e, index) => (
          <div className="recent-post-info" key={index}>
            <img className="recent-post-info-img" src={e.img} />
            <div className="recent-post-info-right">
              <p className="recent-post-info-right-text">{e.text}</p>
              <p className="recent-post-info-right-calender">{e.date}</p>
=======


const RecentPostsFunctionality = () => {
    const news = [{
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
                {news.map((e, index) => (
                    <div className="recent-post-info" key={index}>
                        <img className="recent-post-info-img" src={e.img} />
                        <div className="recent-post-info-right">
                            <p className="recent-post-info-right-text">{e.text}</p>
                            <p className="recent-post-info-right-calender">{e.date}</p>
                        </div>
                    </div>)
                )}
>>>>>>> 79364c2 ([SE-25] - Recent-Posts)
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecentPostsFunctionality
