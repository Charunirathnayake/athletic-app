import { useState } from "react";
import { createAthlete } from "../../apis/athlete";
import EventsTable from "./EventsTable";
import {getBase64} from "../../utils/image";

const CreateAthlete = ({ setPage, initialData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    country: "",
    dateOfBirth: "",
    createdUser:"Admin",
    eventParticipationList: [],
    image: null,  
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [imageKey, setImageKey] = useState("1");
  const [eventsList, setEventsList] = useState([]);

  const onChangeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const fileSelectHandler = async (e) => {
    const imageFile = e.target.files[0];
    const uploadImageData = new FormData();
    uploadImageData.append("file", imageFile, imageFile.name);
    uploadImageData.append("upload_preset", "Profile-Image");
try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dqtvujllk/upload", {
        method: "POST",
        body: uploadImageData,
      });
      const data = await res.json();
      console.log(data);
      setImagePreview(data.url);
      setFormData((prev) => ({ ...prev, image: data.url }));
     }
catch (error) {
      console.log(error);
      // Mock for test
      return {
        messages: "Successfully Created.",
        value: "4",
      };
    }
  };

  const eventSelectHandler = (event) => {
    console.log(event);
    setEventsList((prev) => {
      if (prev.indexOf(event) === -1) return [...prev, JSON.parse(event)];
      return prev;
    });
  };

  const attachEventHandler = () => {
    setFormData((prev) => ({ ...prev, eventParticipationList:eventsList }));
    console.log(formData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    createAthlete(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      dateOfBirth: "",
      image: null,
      eventParticipationList: [],
    });

    setEventsList([]);
    setImagePreview(null);
    setImageKey(Math.random());
    URL.revokeObjectURL();
  };

  return (
    <div className="container">
      <h1 className="my-3">Create Athlete</h1>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-md-8 col-xs-12">
            <div className="mb-3">
              <span className="form-label ">First Name</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Eg: John"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Eg: Doe"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={onChangeHandler}
                required
              >
                <option hidden value="">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={onChangeHandler}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <select
                className="form-select"
                name="country"
                value={formData.country}
                onChange={onChangeHandler}
                required
              >
                <option hidden value="">
                  Select Country
                </option>
                {initialData.countries?.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.countryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Upload an Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={fileSelectHandler}
                className="form-control"
                key={imageKey}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Events</label>
              <div className="row">
                <div className="col-10">
                  <select
                    className="form-select"
                    onChange={(e) => eventSelectHandler(e.target.value)}
                  >
                    <option hidden value="">
                      Select Events
                    </option>
                    {initialData.events?.map((event) => (
                      <option key={event.id} value={JSON.stringify({
                        eventId: event.id,
                        eventName: event.name,
                        status: event.status,
                        createdUser: event.createdUser,
                        createdDate: event.createdDate,
                        modifiedUser: null,
                        modifiedDate: null,
                      })}>
                        {event.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={attachEventHandler}
                  >
                    Attach
                  </button>
                </div>
              </div>
            </div>

            {formData.eventParticipationList.length > 0 && (
              <EventsTable events={formData.eventParticipationList} />
            )}
          </div>
          <div className="col-md-4 col-xs-12 position-relative">
            {imagePreview && (
              <div className="m-3 position-absolute end-0">
                <img
                  src={imagePreview}
                  className="img-thumbnail"
                  alt="Preview"
                  width="186"
                  height="146"
                />
                <p className="text-center">Image Preview</p>
              </div>
            )}
            <div className="m-3 position-absolute bottom-0 end-0">
              <button
                type="button"
                className="mx-3 btn btn-lg btn-dark"
                onClick={() => setPage("BROWSE")}
              >
                Back
              </button>
              <button type="submit" className="btn btn-lg btn-primary ">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAthlete;
