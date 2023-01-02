import { useSWRConfig } from "swr";
import { useState, useReducer } from "react";
import Header from "../components/Header";
import neighborhoods from "../lib/neighborhoods";

const fetcher = (...args) => fetch(...args).then((r) => r.json());

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function AddPlace() {
  const { mutate } = useSWRConfig();
  let [formData, setFormData] = useReducer(formReducer, {});
  let [password, updatePassword] = useState("");
  let [formattedData, setFormattedData] = useState({});

  function daysObj() {
    const days = daysOfTheWeek.map((day) => ({
      name: day,
      drink_specials: formData[day + "_drink"] || "None",
      food_specials: formData[day + "_food"] || "None",
      timeOfDay: {
        startTime: formData[day + "_startTime"] || parseInt("0000", 32),
        endTime: formData[day + "_endTime"] || parseInt("0000", 32),
      },
    }));

    return days;
  }

  const submitData = () => {
    setFormattedData({
      name: formData.name,
      address: formData.neighborhood + " @ " + formData.address,
      day: daysObj(),
      enabled: formData.enabled || false,
      featured: false,
      lastUpdated: new Date(),
    });
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";

    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
    submitData();
  };

  return (
    <div>
      <Header title='Add a place' />
      <form className='px-4 flex flex-col'>
        <span>Name</span>
        <input
          className='text-black'
          type='text'
          name='name'
          placeholder={formData.name}
          value={formData.name || ""}
          onChange={handleChange}
        />
        <span>Address</span>
        <input
          className='text-black'
          type='text'
          name='address'
          placeholder={formData.address}
          value={formData.address}
          onChange={handleChange}
        />

        <span>Neighborhood</span>
        <select
          name='neighborhood'
          className='form-select text-black'
          onChange={handleChange}
        >
          <option>Select</option>
          {neighborhoods.sort().map((neighborhood) => (
            <option key={neighborhood}>{neighborhood}</option>
          ))}
        </select>
        <div className='flex flex-wrap justify-start'>
          {daysOfTheWeek.map((day) => (
            <div className='flex flex-row mt-2 w-full' key={day}>
              <div className='w-1/3 pr-4'>
                <span>{day}: </span>
                <br />
                <input
                  type='text'
                  className='text-black w-full'
                  name={day + "_drink"}
                  value={formData[day]}
                  onChange={handleChange}
                />
              </div>
              <div className='w-1/3 pr-4'>
                <span>Start Time - {day}: </span>
                <br />
                <input
                  type='text'
                  className='text-black w-full'
                  name={day + "_startTime"}
                  value={formData[day + "_startTime"]}
                  onChange={handleChange}
                />
              </div>
              <div className='w-1/3'>
                <span>End Time - {day}: </span>
                <br />
                <input
                  type='text'
                  className='text-black w-full'
                  name={day + "_endTime"}
                  value={formData[day + "_endTime"]}
                  onChange={handleChange}
                />
              </div>
            </div>
          ))}
        </div>
        <span>Password</span>
        <input
          className='text-black'
          type='text'
          name='password'
          placeholder={password}
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
        />
        <div>
          Enabled:{" "}
          <input type='checkbox' name='enabled' onChange={handleChange} />
        </div>
        <button
          className='m-1 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800 disabled:opacity-25'
          disabled={password === process.env.NEXT_PUBLIC_PASS ? false : true}
          onClick={async () => {
            await fetcher("/api/places/", {
              method: "POST",
              body: JSON.stringify(formattedData),
            });
            mutate("/api/places/");
          }}
        >
          Add Place
        </button>
      </form>
    </div>
  );
}
