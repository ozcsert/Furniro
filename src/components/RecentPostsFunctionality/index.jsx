<<<<<<< HEAD
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

=======
import "../RecentPostsFunctionality/style.scss";
import { news } from "./data";
>>>>>>> a89e8ab ([SE-25] - fix responsiveness and move data out to a sep file)

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
