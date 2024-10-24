import UserProfile from "./UserProfile";
// import UserContext from "./UserContext";
import WeatherWidget from "./WeatherWidget"; // Custom API Widget Example

function Dashboard() {
  return (
    <div className="dashboard">
      <UserProfile />
      {/* <UserContext />   */}
      <WeatherWidget />
      {/* Other Widgets and Tools */}
    </div>
  );
}

export default Dashboard;
