import { useState } from "react";

function Profile() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleProfile() {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <>
      <section>
        <h2>Profile</h2>
        <button onClick={toggleProfile}>
          {isVisible ? "slepti profili" : "rodyti profili"}
        </button>
        {isVisible && (
          <div>
            <h3>John Doe</h3>
            <p>Front-end Developer</p>
            <p>john@email.com</p>
          </div>
        )}
      </section>
    </>
  );
}

export default Profile;
