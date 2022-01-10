import { useSWRConfig } from "swr";
import { useState, useReducer } from "react";
import Header from "../components/Header";

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
  const [formData, setFormData] = useReducer(formReducer, {});
  const [password, updatePassword] = useState("");
  const [formattedData, setFormattedData] = useState({});

  const submitData = () => {
    setFormattedData({
      name: formData.name,
      address: formData.neighborhood + " @ " + formData.address,
      day: [
        {
          name: "Sunday",
          drink_specials: formData.Sunday_drink || "None",
          food_specials: formData.Sunday_food || "None",
        },
        {
          name: "Monday",
          drink_specials: formData.Monday_drink || "None",
          food_specials: formData.Monday_food || "None",
        },
        {
          name: "Tuesday",
          drink_specials: formData.Tuesday_drink || "None",
          food_specials: formData.Tuesday_food || "None",
        },
        {
          name: "Wednesday",
          drink_specials: formData.Wednesday_drink || "None",
          food_specials: formData.Wednesday_food || "None",
        },
        {
          name: "Thursday",
          drink_specials: formData.Thursday_drink || "None",
          food_specials: formData.Thursday_food || "None",
        },
        {
          name: "Friday",
          drink_specials: formData.Friday_drink || "None",
          food_specials: formData.Friday_food || "None",
        },
        {
          name: "Saturday",
          drink_specials: formData.Saturday_drink || "None",
          food_specials: formData.Saturday_food || "None",
        },
      ],
      enabled: formData.enabled || false,
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
          <option>Logan Square</option>
          <option>Avondale</option>
        </select>
        <div>
          {daysOfTheWeek.map((day) => (
            <div className='flex mt-2' key={day}>
              <span>{day}: </span>
              <input
                type='text'
                className='text-black'
                name={day + "_drink"}
                value={formData[day]}
                onChange={handleChange}
              />
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
