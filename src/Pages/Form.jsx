import { useState } from "react";
import Header from "../Components/Header";

const Form = () => {
  const [gender, setGender] = useState("");

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: "#f49e1e" }}>
          Morning Sickness Questionnaire
        </h1>

        <form className="bg-white p-6 shadow rounded-lg space-y-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Please Fill Out the Form</h3>
            <div className="space-y-4">

              {/* Question 1 */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  How severe is your morning sickness?
                </label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Select an option</option>
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
              </div>

              {/* Question 2 */}
              <div>
  <label className="block text-gray-800 font-medium mb-2">
    Do you consume caffeine regularly?
  </label>
  <div className="flex space-x-4">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="caffeine"
        value="yes"
        className="form-radio text-orange-500"
        onChange={(e) => setGender(e.target.value)}
      />
      <span>Yes</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="caffeine"
        value="no"
        className="form-radio text-orange-500"
        onChange={(e) => setGender(e.target.value)}
      />
      <span>No</span>
    </label>
  </div>
</div>

{/* Caffeine-Specific Follow-Up Question */}
{gender === "yes" && (
  <div>
    <label className="block text-gray-800 font-medium mb-2">
      How many cups of caffeine do you consume per day?
    </label>
    <input
      type="number"
      min="0"
      className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
      placeholder="Enter the number of cups"
    />
  </div>
)}
{gender === "no" && (
  <div>
    <label className="block text-gray-800 font-medium mb-2">
      Have you ever consumed caffeine in the past?
    </label>
    <div className="flex space-x-4">
      <label className="flex items-center space-x-2">
        <input type="radio" name="past-caffeine" value="yes" className="form-radio text-orange-500" />
        <span>Yes</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="radio" name="past-caffeine" value="no" className="form-radio text-orange-500" />
        <span>No</span>
      </label>
    </div>
  </div>
)}

              {/* Question 3 */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  How long have you been experiencing morning sickness?
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter duration (e.g., 2 weeks)"
                />
              </div>

              {/* Question 4 */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  What time of day does it feel the worst?
                </label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Select an option</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="all-day">All day</option>
                </select>
              </div>

              {/* Question 5 */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Have you tried any remedies for morning sickness?
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="List any remedies you've tried"
                />
              </div>

              {/* Question 6 */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Are there any foods or smells that trigger your nausea?
                </label>
                <textarea
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  rows="3"
                  placeholder="Enter your response"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Form;
