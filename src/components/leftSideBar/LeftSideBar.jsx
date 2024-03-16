import { useState } from "react";
import Header from "./Header";
import NavigationCategory from "./NavigationCategory";

const LeftSideBar = () => {
  const [activeCategory, setActiveCategory] = useState();
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="navigation">
        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Home")}
        >
          <NavigationCategory
            isActive={activeCategory == "Home"}
            label="Home"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("System")}
        >
          <NavigationCategory
            isActive={activeCategory == "System"}
            label="System"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Bluetooth & devices")}
        >
          <NavigationCategory
            isActive={activeCategory == "Bluetooth & devices"}
            label="Bluetooth & devices"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Network & internet")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Network & internet"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Personalization")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Personalization"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Apps")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Apps"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Accounts")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Accounts"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Time & language")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Time & language"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Gaming")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Gaming"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Accessibility")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Accessibility"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Privacy & security")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Privacy & security"
            icon="O"
          />
        </div>

        <div
          className="navigationPane"
          onClick={() => setActiveCategory("Windows Update")}
        >
          <NavigationCategory
            isActive={activeCategory == ""}
            label="Windows Update"
            icon="O"
          />
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
