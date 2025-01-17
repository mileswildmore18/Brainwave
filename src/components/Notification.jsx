import { notification1 } from "../assets";
import { notificationImages } from "../constants";

// Add a notification box on the right side of the robot photo
const Notification = ({ className, title }) => {
  return (
    <div
      // Display the background of the notification box
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* Display the title, avatars and picture message of the Scroll Parallax */}
      <img src={notification1} width={62} height={62} className="rounded-xl" />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        {/* Add the notification picture */}
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          {/* Display how long ago a person posted */}
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
