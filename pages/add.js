import { useSWRConfig } from "swr";
import { useState, useReducer } from "react";
import Header from "../components/Header";
import neighborhoods from "../lib/neighborhoods";

const fetcher = (...args) => fetch(...args).then((r) => r.json());

// Day of week enum mapping
const DayOfWeek = {
  Monday: "MO",
  Tuesday: "TU",
  Wednesday: "WE",
  Thursday: "TH",
  Friday: "FR",
  Saturday: "SA",
  Sunday: "SU",
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

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function AddPlace() {
  const { mutate } = useSWRConfig();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [password, updatePassword] = useState("");
  const [events, setEvents] = useState([]);

  // Add a new event
  const addEvent = () => {
    setEvents([
      ...events,
      {
        id: Date.now(), // temporary ID for form management
        name: "",
        description: "",
        keywords: "happyHour",
        days: [],
        startTime: "",
        endTime: "",
        menuItems: [],
      },
    ]);
  };

  // Update an event
  const updateEvent = (eventId, field, value) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, [field]: value } : event
      )
    );
  };

  // Remove an event
  const removeEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  // Add menu item to an event
  const addMenuItem = (eventId) => {
    updateEvent(eventId, "menuItems", [
      ...(events.find((e) => e.id === eventId)?.menuItems || []),
      { name: "", category: "Drink", price: 0 },
    ]);
  };

  // Update menu item
  const updateMenuItem = (eventId, itemIndex, field, value) => {
    const event = events.find((e) => e.id === eventId);
    const updatedItems = [...event.menuItems];
    updatedItems[itemIndex] = { ...updatedItems[itemIndex], [field]: value };
    updateEvent(eventId, "menuItems", updatedItems);
  };

  // Remove menu item
  const removeMenuItem = (eventId, itemIndex) => {
    const event = events.find((e) => e.id === eventId);
    const updatedItems = event.menuItems.filter(
      (_, index) => index !== itemIndex
    );
    updateEvent(eventId, "menuItems", updatedItems);
  };

  // Toggle day selection for an event
  const toggleDay = (eventId, day) => {
    const event = events.find((e) => e.id === eventId);
    const currentDays = event.days || [];
    const updatedDays = currentDays.includes(day)
      ? currentDays.filter((d) => d !== day)
      : [...currentDays, day];
    updateEvent(eventId, "days", updatedDays);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  const formatDataForSubmission = () => {
    return {
      name: formData.name,
      location: {
        streetAddress: formData.street_address,
        city: formData.city || "Chicago",
        state: formData.state || "IL",
        postalCode: formData.postal_code
          ? parseInt(formData.postal_code)
          : null,
      },
      neighborhood: formData.neighborhood,
      events: events.map((event) => ({
        name: event.name || "Happy Hour",
        description: event.description,
        keywords: event.keywords || "happyHour",
        eventSchedule: [
          {
            byDay: event.days.map((day) => DayOfWeek[day]),
            startTime: event.startTime.replace(":", ""), // Convert "15:00" to "1500"
            endTime: event.endTime.replace(":", ""), // Convert "18:00" to "1800"
          },
        ],
        menu: event.menuItems.map((item) => ({
          name: item.name,
          category: item.category,
          ...(item.price && { price: parseFloat(item.price) }),
        })),
        lastUpdated: new Date().toISOString(),
      })),
      enabled: formData.enabled || false,
      featured: formData.featured || false,
      lastUpdated: new Date().toISOString(),
      urls: {
        homepage: formData.homepage || "",
        eventListings: formData.event_listings || "",
        specials: formData.specials || "",
      },
    };
  };

  const submitPlace = async () => {
    const formattedData = formatDataForSubmission();

    try {
      await fetcher("/api/places/", {
        method: "POST",
        body: JSON.stringify(formattedData),
      });
      mutate("/api/places/");

      // Reset form
      setFormData({});
      setEvents([]);
      updatePassword("");
      alert("Place added successfully!");
    } catch (error) {
      console.error("Error adding place:", error);
      alert("Error adding place. Please try again.");
    }
  };

  return (
    <div>
      <Header title='Add a place' />
      <form
        className='px-4 flex flex-col max-w-4xl mx-auto'
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Basic Information */}
        <div className='mb-6 p-4 border border-gray-300 rounded'>
          <h3 className='text-lg font-semibold mb-4'>Basic Information</h3>

          <div className='mb-4'>
            <label className='block mb-2'>Name *</label>
            <input
              className='text-black w-full p-2 border rounded'
              type='text'
              name='name'
              placeholder='Restaurant/Bar Name'
              value={formData.name || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block mb-2'>Street Address *</label>
            <input
              className='text-black w-full p-2 border rounded'
              type='text'
              name='street_address'
              placeholder='123 Main St'
              value={formData.street_address || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
            <div>
              <label className='block mb-2'>City</label>
              <input
                className='text-black w-full p-2 border rounded'
                type='text'
                name='city'
                placeholder='Chicago'
                value={formData.city || "Chicago"}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block mb-2'>State</label>
              <input
                className='text-black w-full p-2 border rounded'
                type='text'
                name='state'
                placeholder='IL'
                value={formData.state || "IL"}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block mb-2'>Postal Code</label>
              <input
                className='text-black w-full p-2 border rounded'
                type='text'
                name='postal_code'
                placeholder='60601'
                value={formData.postal_code || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='mb-4'>
            <label className='block mb-2'>Neighborhood *</label>
            <select
              name='neighborhood'
              className='form-select text-black w-full p-2 border rounded'
              onChange={handleChange}
              required
            >
              <option value=''>Select Neighborhood</option>
              {neighborhoods.sort().map((neighborhood) => (
                <option key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* URLs */}
        <div className='mb-6 p-4 border border-gray-300 rounded'>
          <h3 className='text-lg font-semibold mb-4'>
            Website URLs (Optional)
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div>
              <label className='block mb-2'>Homepage</label>
              <input
                className='text-black w-full p-2 border rounded'
                type='url'
                name='homepage'
                placeholder='https://example.com'
                value={formData.homepage || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block mb-2'>Event Listings</label>
              <input
                className='text-black w-full p-2 border rounded'
                type='url'
                name='event_listings'
                placeholder='https://example.com/events'
                value={formData.event_listings || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='block mb-2'>Specials Page</label>
              <input
                className='text-black w-full p-2 border rounded'
                type='url'
                name='specials'
                placeholder='https://example.com/specials'
                value={formData.specials || ""}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className='mb-6 p-4 border border-gray-300 rounded'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-lg font-semibold'>Events &amp; Specials</h3>
            <button
              type='button'
              className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
              onClick={addEvent}
            >
              Add Event
            </button>
          </div>

          {events.map((event, eventIndex) => (
            <div
              key={event.id}
              className='mb-6 p-4 border border-gray-200 rounded bg-gray-50 dark:bg-gray-700'
            >
              <div className='flex justify-between items-center mb-4'>
                <h4 className='font-semibold'>Event {eventIndex + 1}</h4>
                <button
                  type='button'
                  className='text-red-500 hover:text-red-700'
                  onClick={() => removeEvent(event.id)}
                >
                  Remove Event
                </button>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block mb-2'>Event Name</label>
                  <input
                    className='text-black w-full p-2 border rounded'
                    type='text'
                    placeholder='Happy Hour'
                    value={event.name}
                    onChange={(e) =>
                      updateEvent(event.id, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className='block mb-2'>Keywords</label>
                  <input
                    className='text-black w-full p-2 border rounded'
                    type='text'
                    placeholder='happyHour'
                    value={event.keywords}
                    onChange={(e) =>
                      updateEvent(event.id, "keywords", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label className='block mb-2'>Description</label>
                <textarea
                  className='text-black w-full p-2 border rounded'
                  rows='3'
                  placeholder='Event description...'
                  value={event.description}
                  onChange={(e) =>
                    updateEvent(event.id, "description", e.target.value)
                  }
                />
              </div>

              {/* Day Selection */}
              <div className='mb-4'>
                <label className='block mb-2'>Days of the Week</label>
                <div className='flex flex-wrap gap-2'>
                  {daysOfTheWeek.map((day) => (
                    <label key={day} className='flex items-center'>
                      <input
                        type='checkbox'
                        className='mr-2'
                        checked={event.days.includes(day)}
                        onChange={() => toggleDay(event.id, day)}
                      />
                      <span className='text-sm'>{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block mb-2'>Start Time</label>
                  <input
                    className='text-black w-full p-2 border rounded'
                    type='time'
                    value={
                      event.startTime
                        ? `${event.startTime.slice(
                            0,
                            2
                          )}:${event.startTime.slice(2, 4)}`
                        : ""
                    }
                    onChange={(e) =>
                      updateEvent(
                        event.id,
                        "startTime",
                        e.target.value.replace(":", "")
                      )
                    }
                  />
                </div>
                <div>
                  <label className='block mb-2'>End Time</label>
                  <input
                    className='text-black w-full p-2 border rounded'
                    type='time'
                    value={
                      event.endTime
                        ? `${event.endTime.slice(0, 2)}:${event.endTime.slice(
                            2,
                            4
                          )}`
                        : ""
                    }
                    onChange={(e) =>
                      updateEvent(
                        event.id,
                        "endTime",
                        e.target.value.replace(":", "")
                      )
                    }
                  />
                </div>
              </div>

              {/* Menu Items */}
              <div className='mb-4'>
                <div className='flex justify-between items-center mb-2'>
                  <label className='block'>Menu Items & Specials</label>
                  <button
                    type='button'
                    className='bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600'
                    onClick={() => addMenuItem(event.id)}
                  >
                    Add Item
                  </button>
                </div>

                {event.menuItems.map((item, itemIndex) => (
                  <div key={itemIndex} className='flex gap-2 mb-2 items-end'>
                    <div className='flex-1'>
                      <input
                        className='text-black w-full p-2 border rounded'
                        type='text'
                        placeholder='Item name'
                        value={item.name}
                        onChange={(e) =>
                          updateMenuItem(
                            event.id,
                            itemIndex,
                            "name",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className='w-32'>
                      <select
                        className='text-black w-full p-2 border rounded'
                        value={item.category}
                        onChange={(e) =>
                          updateMenuItem(
                            event.id,
                            itemIndex,
                            "category",
                            e.target.value
                          )
                        }
                      >
                        <option value='Drink'>Drink</option>
                        <option value='Food'>Food</option>
                      </select>
                    </div>
                    <div className='w-24'>
                      <input
                        className='text-black w-full p-2 border rounded'
                        type='number'
                        step='0.01'
                        placeholder='Price'
                        value={item.price}
                        onChange={(e) =>
                          updateMenuItem(
                            event.id,
                            itemIndex,
                            "price",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <button
                      type='button'
                      className='text-red-500 hover:text-red-700 px-2 py-2'
                      onClick={() => removeMenuItem(event.id, itemIndex)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {events.length === 0 && (
            <div className='text-gray-500 text-center py-8'>
              No events added yet. Click &quot;Add Event&quot; to get started.
            </div>
          )}
        </div>

        {/* Settings */}
        <div className='mb-6 p-4 border border-gray-300 rounded'>
          <h3 className='text-lg font-semibold mb-4'>Settings</h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  name='enabled'
                  className='mr-2'
                  checked={formData.enabled || false}
                  onChange={handleChange}
                />
                <span>Enabled</span>
              </label>
            </div>
            <div>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  name='featured'
                  className='mr-2'
                  checked={formData.featured || false}
                  onChange={handleChange}
                />
                <span>Featured</span>
              </label>
            </div>
          </div>

          <div className='mb-4'>
            <label className='block mb-2'>Last Updated By</label>
            <input
              className='text-black w-full p-2 border rounded'
              type='text'
              name='updated_by'
              placeholder='Your name'
              value={formData.updated_by || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Password and Submit */}
        <div className='mb-6 p-4 border border-gray-300 rounded'>
          <div className='mb-4'>
            <label className='block mb-2'>Password *</label>
            <input
              className='text-black w-full p-2 border rounded'
              type='password'
              name='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
              required
            />
          </div>

          <button
            type='button'
            className='w-full bg-purple-500 text-white font-bold py-3 px-4 rounded hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={
              password !== process.env.NEXT_PUBLIC_PASS ||
              !formData.name ||
              !formData.street_address ||
              !formData.neighborhood ||
              events.length === 0
            }
            onClick={submitPlace}
          >
            Add Place
          </button>

          {(password !== process.env.NEXT_PUBLIC_PASS ||
            !formData.name ||
            !formData.street_address ||
            !formData.neighborhood ||
            events.length === 0) && (
            <div className='text-sm text-gray-500 mt-2'>
              Please fill in all required fields and add at least one event to
              submit.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
