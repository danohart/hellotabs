import { useState, useEffect } from "react";

const DayOfWeek = {
  Sunday: "SU",
  Monday: "MO",
  Tuesday: "TU",
  Wednesday: "WE",
  Thursday: "TH",
  Friday: "FR",
  Saturday: "SA",
};

const DayOfWeekReverse = {
  SU: "Sunday",
  MO: "Monday",
  TU: "Tuesday",
  WE: "Wednesday",
  TH: "Thursday",
  FR: "Friday",
  SA: "Saturday",
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

export default function EditPlace({ isOpen, onClose, place, token, onUpdate }) {
  const [editData, setEditData] = useState({ events: [], enabled: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize form data when modal opens
  useEffect(() => {
    if (isOpen && place) {
      setEditData({
        enabled: place.enabled,
        events: place.events.map((event) => ({
          ...event,
          eventSchedule: event.eventSchedule.map((schedule) => ({
            ...schedule,
            // Convert time format for display
            startTime: schedule.startTime
              ? `${schedule.startTime.slice(0, 2)}:${schedule.startTime.slice(
                  2,
                  4
                )}`
              : "",
            endTime: schedule.endTime
              ? `${schedule.endTime.slice(0, 2)}:${schedule.endTime.slice(
                  2,
                  4
                )}`
              : "",
          })),
        })),
      });
      setError("");
    }
  }, [isOpen, place]);

  const updateEventSchedule = (eventIndex, scheduleIndex, field, value) => {
    const newEvents = [...editData.events];
    newEvents[eventIndex].eventSchedule[scheduleIndex][field] = value;
    setEditData({ ...editData, events: newEvents });
  };

  const updateMenuItem = (eventIndex, itemIndex, field, value) => {
    const newEvents = [...editData.events];
    newEvents[eventIndex].menu[itemIndex][field] = value;
    setEditData({ ...editData, events: newEvents });
  };

  const addMenuItem = (eventIndex) => {
    const newEvents = [...editData.events];
    newEvents[eventIndex].menu.push({
      name: "",
      category: "Drink",
      price: 0,
    });
    setEditData({ ...editData, events: newEvents });
  };

  const removeMenuItem = (eventIndex, itemIndex) => {
    const newEvents = [...editData.events];
    newEvents[eventIndex].menu.splice(itemIndex, 1);
    setEditData({ ...editData, events: newEvents });
  };

  // NEW: Add a new event
  const addNewEvent = () => {
    const newEvent = {
      name: "",
      description: "",
      keywords: "happyHour",
      eventSchedule: [
        {
          byDay: [],
          startTime: "",
          endTime: "",
        },
      ],
      menu: [],
      lastUpdated: new Date().toISOString(),
      lastUpdatedBy: "admin",
    };

    setEditData({
      ...editData,
      events: [...editData.events, newEvent],
    });
  };

  // NEW: Remove an event
  const removeEvent = (eventIndex) => {
    const newEvents = [...editData.events];
    newEvents.splice(eventIndex, 1);
    setEditData({ ...editData, events: newEvents });
  };

  // NEW: Update event basic info
  const updateEventInfo = (eventIndex, field, value) => {
    const newEvents = [...editData.events];
    newEvents[eventIndex][field] = value;
    setEditData({ ...editData, events: newEvents });
  };

  // NEW: Add a new schedule to an event
  const addEventSchedule = (eventIndex) => {
    const newEvents = [...editData.events];
    newEvents[eventIndex].eventSchedule.push({
      byDay: [],
      startTime: "",
      endTime: "",
    });
    setEditData({ ...editData, events: newEvents });
  };

  // NEW: Remove a schedule from an event
  const removeEventSchedule = (eventIndex, scheduleIndex) => {
    const newEvents = [...editData.events];
    newEvents[eventIndex].eventSchedule.splice(scheduleIndex, 1);
    setEditData({ ...editData, events: newEvents });
  };

  const toggleDay = (eventIndex, scheduleIndex, day) => {
    const newEvents = [...editData.events];
    const schedule = newEvents[eventIndex].eventSchedule[scheduleIndex];
    const dayCode = DayOfWeek[day];

    if (schedule.byDay.includes(dayCode)) {
      schedule.byDay = schedule.byDay.filter((d) => d !== dayCode);
    } else {
      schedule.byDay = [...schedule.byDay, dayCode];
    }

    setEditData({ ...editData, events: newEvents });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Convert times back to database format (remove colons)
      const formattedData = {
        ...editData,
        events: editData.events.map((event) => ({
          ...event,
          eventSchedule: event.eventSchedule.map((schedule) => ({
            ...schedule,
            startTime: schedule.startTime
              ? schedule.startTime.replace(":", "")
              : null,
            endTime: schedule.endTime
              ? schedule.endTime.replace(":", "")
              : null,
          })),
        })),
      };

      const response = await fetch("/api/places/update-limited", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: token,
          placeId: place._id,
          updates: formattedData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        onUpdate(); // Refresh the places data
        onClose();
      } else {
        setError(result.error || "Update failed");
      }
    } catch (error) {
      setError("Network error occurred");
    }

    setLoading(false);
  };

  if (!isOpen || !place) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white dark:bg-slate-800 rounded-lg shadow-lg w-full max-w-4xl max-h-screen overflow-y-auto'>
        <div className='sticky top-0 bg-white dark:bg-slate-800 p-4 border-b border-gray-200 dark:border-slate-600'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>Edit {place.name}</h3>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700 text-xl'
            >
              ×
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='p-4'>
          {/* Place Status */}
          <div className='mb-6 p-4 border border-gray-300 rounded'>
            <h4 className='font-semibold mb-3'>Place Status</h4>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={editData.enabled || false}
                onChange={(e) =>
                  setEditData({ ...editData, enabled: e.target.checked })
                }
                className='mr-2'
              />
              <span>Enabled (visible on site)</span>
            </label>
          </div>

          {/* Events Section */}
          <div className='mb-6'>
            <div className='flex justify-between items-center mb-4'>
              <h4 className='font-semibold'>Events</h4>
              <button
                type='button'
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2'
                onClick={addNewEvent}
              >
                <span>+</span> Add New Event
              </button>
            </div>

            {editData.events.map((event, eventIndex) => (
              <div
                key={eventIndex}
                className='mb-6 p-4 border border-gray-300 rounded relative'
              >
                <div className='flex justify-between items-start mb-4'>
                  <h5 className='font-semibold'>Event {eventIndex + 1}</h5>
                  {editData.events.length > 1 && (
                    <button
                      type='button'
                      className='text-red-500 hover:text-red-700 text-lg'
                      onClick={() => removeEvent(eventIndex)}
                      title='Remove this event'
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Event Basic Info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <label className='block mb-2 text-sm font-medium'>
                      Event Name
                    </label>
                    <input
                      className='text-black w-full p-2 border rounded'
                      type='text'
                      placeholder='e.g., Happy Hour, Brunch Special'
                      value={event.name || ""}
                      onChange={(e) =>
                        updateEventInfo(eventIndex, "name", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className='block mb-2 text-sm font-medium'>
                      Keywords
                    </label>
                    <input
                      className='text-black w-full p-2 border rounded'
                      type='text'
                      placeholder='e.g., happyHour, brunch, liveMusic'
                      value={event.keywords || ""}
                      onChange={(e) =>
                        updateEventInfo(eventIndex, "keywords", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className='mb-4'>
                  <label className='block mb-2 text-sm font-medium'>
                    Description
                  </label>
                  <textarea
                    className='text-black w-full p-2 border rounded'
                    rows='2'
                    placeholder='Optional event description'
                    value={event.description || ""}
                    onChange={(e) =>
                      updateEventInfo(eventIndex, "description", e.target.value)
                    }
                  />
                </div>

                {/* Event Schedules */}
                <div className='mb-4'>
                  <div className='flex justify-between items-center mb-3'>
                    <h6 className='font-medium'>Schedules</h6>
                    <button
                      type='button'
                      className='bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600'
                      onClick={() => addEventSchedule(eventIndex)}
                    >
                      Add Schedule
                    </button>
                  </div>

                  {event.eventSchedule.map((schedule, scheduleIndex) => (
                    <div
                      key={scheduleIndex}
                      className='mb-4 p-3 bg-gray-50 dark:bg-slate-700 rounded relative'
                    >
                      <div className='flex justify-between items-center mb-3'>
                        <h6 className='font-medium text-sm'>
                          Schedule {scheduleIndex + 1}
                        </h6>
                        {event.eventSchedule.length > 1 && (
                          <button
                            type='button'
                            className='text-red-500 hover:text-red-700 text-sm'
                            onClick={() =>
                              removeEventSchedule(eventIndex, scheduleIndex)
                            }
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      {/* Days Selection */}
                      <div className='mb-4'>
                        <label className='block mb-2 text-sm font-medium'>
                          Days of the Week
                        </label>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                          {daysOfTheWeek.map((day) => (
                            <label
                              key={day}
                              className='flex items-center text-sm'
                            >
                              <input
                                type='checkbox'
                                className='mr-2'
                                checked={schedule.byDay.includes(
                                  DayOfWeek[day]
                                )}
                                onChange={() =>
                                  toggleDay(eventIndex, scheduleIndex, day)
                                }
                              />
                              <span>{day.slice(0, 3)}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Times */}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='block mb-2 text-sm font-medium'>
                            Start Time
                          </label>
                          <input
                            className='text-black w-full p-2 border rounded'
                            type='time'
                            value={schedule.startTime || ""}
                            onChange={(e) =>
                              updateEventSchedule(
                                eventIndex,
                                scheduleIndex,
                                "startTime",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div>
                          <label className='block mb-2 text-sm font-medium'>
                            End Time
                          </label>
                          <input
                            className='text-black w-full p-2 border rounded'
                            type='time'
                            value={schedule.endTime || ""}
                            onChange={(e) =>
                              updateEventSchedule(
                                eventIndex,
                                scheduleIndex,
                                "endTime",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Menu Items */}
                <div className='mb-4'>
                  <div className='flex justify-between items-center mb-2'>
                    <label className='block text-sm font-medium'>
                      Menu Items & Specials
                    </label>
                    <button
                      type='button'
                      className='bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600'
                      onClick={() => addMenuItem(eventIndex)}
                    >
                      Add Item
                    </button>
                  </div>

                  {event.menu.map((item, itemIndex) => (
                    <div key={itemIndex} className='flex gap-2 mb-2 items-end'>
                      <div className='flex-1'>
                        <input
                          className='text-black w-full p-2 border rounded'
                          type='text'
                          placeholder='Item name'
                          value={item.name || ""}
                          onChange={(e) =>
                            updateMenuItem(
                              eventIndex,
                              itemIndex,
                              "name",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className='w-24'>
                        <select
                          className='text-black w-full p-2 border rounded'
                          value={item.category || "Drink"}
                          onChange={(e) =>
                            updateMenuItem(
                              eventIndex,
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
                      <div className='w-20'>
                        <input
                          className='text-black w-full p-2 border rounded'
                          type='number'
                          step='0.01'
                          placeholder='Price'
                          value={item.price || ""}
                          onChange={(e) =>
                            updateMenuItem(
                              eventIndex,
                              itemIndex,
                              "price",
                              parseFloat(e.target.value) || 0
                            )
                          }
                        />
                      </div>
                      <button
                        type='button'
                        className='text-red-500 hover:text-red-700 px-2 py-2'
                        onClick={() => removeMenuItem(eventIndex, itemIndex)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  {event.menu.length === 0 && (
                    <p className='text-gray-500 text-sm italic'>
                      No menu items yet. Click "Add Item" to get started.
                    </p>
                  )}
                </div>
              </div>
            ))}

            {editData.events.length === 0 && (
              <div className='text-center py-8 border border-dashed border-gray-300 rounded'>
                <p className='text-gray-500 mb-4'>
                  No events for this place yet.
                </p>
                <button
                  type='button'
                  className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                  onClick={addNewEvent}
                >
                  Add Your First Event
                </button>
              </div>
            )}
          </div>

          {error && (
            <div className='text-red-500 text-sm mb-4 p-3 bg-red-50 dark:bg-red-900 rounded'>
              {error}
            </div>
          )}

          <div className='flex gap-2 pt-4 border-t border-gray-200 dark:border-slate-600'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 bg-gray-500 text-white font-bold py-3 px-4 rounded hover:bg-gray-600'
            >
              Cancel
            </button>
            <button
              type='submit'
              disabled={loading}
              className='flex-1 bg-purple-500 text-white font-bold py-3 px-4 rounded hover:bg-purple-600 disabled:opacity-50'
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
