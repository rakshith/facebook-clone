import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import { useStateValue } from "./StateProvider";
function StoryReel() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="storyReel">
      <Story
        title={user.displayName}
        image="https://i.pinimg.com/originals/07/03/6e/07036e12e9ca047f542437befa8872d3.jpg"
        profileSrc={user.photoURL}
      />

      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}

export default StoryReel;
