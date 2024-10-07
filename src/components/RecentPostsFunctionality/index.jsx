import "../RecentPostsFunctionality/style.scss"
import { news } from "./data"

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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RecentPostsFunctionality
