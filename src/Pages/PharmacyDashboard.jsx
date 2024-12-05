import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserMd, faCogs, faSignOutAlt,faCalendarCheck,faBoxes,faBookMedical, faClipboardList } from "@fortawesome/free-solid-svg-icons";

const PharmacyDashboard = () => {
  return (
    <div className="flex h-screen">
 
      <aside className="w-52 text-white p-6 text-center" style={{ backgroundColor: "#237fb7" }}>
        <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="#home" className="block hover:bg-orange-500 p-2 rounded cursor-pointer" aria-label="Go to Home">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
          </li>
          <li className="mb-4">
            <a href="#patients" className="block hover:bg-orange-500 p-2 rounded cursor-pointer" aria-label="Go to Patients">
              <FontAwesomeIcon icon={faUserMd} className="mr-2" />
              Patients
            </a>
          </li>
          <li className="mb-4">
            <a href="#inventory" className="block hover:bg-orange-500 p-2 rounded cursor-pointer" aria-label="Go to Inventory">
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
              Inventory
            </a>
          </li>
          <li className="mb-4">
            <a href="#reports" className="block hover:bg-orange-500 p-2 rounded cursor-pointer" aria-label="Go to Reports">
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
              Reports
            </a>
          </li>
          <li className="mb-4">
            <a href="#settings" className="block hover:bg-orange-500 p-2 rounded cursor-pointer" aria-label="Go to Settings">
              <FontAwesomeIcon icon={faCogs} className="mr-2" />
              Settings
            </a>
          </li>
          <li className="mb-4">
            <a href="#logout" className="block hover:bg-orange-500 p-2 rounded cursor-pointer" aria-label="Logout">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </a>
          </li>
        </ul>
      </aside>

 
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: "#f49e1e" }}>
         Dashboard
        </h1>
       
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 group transition-all cursor-pointer"
          >
            <div className="text-orange-500 text-5xl mb-4">
              <FontAwesomeIcon icon={faCalendarCheck} className="group-hover:text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600">
              Total Bookings
            </h3>
            <p className="mt-2 text-gray-700">
              30
            </p>
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 group transition-all cursor-pointer"
          >
            <div className="text-red-500 text-5xl mb-4">
              <FontAwesomeIcon icon={faBoxes} className="group-hover:text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600">
              Inventory Allert
            </h3>
            <p className="mt-2 text-gray-700">
              30
            </p>
          </div>

          <div
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 group transition-all cursor-pointer"
          >
            <div className="text-blue-500 text-5xl mb-4">
              <FontAwesomeIcon icon={faBookMedical} className="group-hover:text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600">
              Reports
            </h3>
            <p className="mt-2 text-gray-700">
              3
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PharmacyDashboard;
