export const getAllAthletes = async () => {
  try {
    const res = await fetch("http://localhost:8080/athlete/all");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  //  return mockSearchResult;
  }
};
export const searchAthlete = async (name, event, country, gender) => {
  try {
    const res = await fetch(
      `http://localhost:8080/athlete/all?name=${name}&&event=${event}&&country=${country}&&gender=${gender}`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    return mockSearchResult;
  }
};

export const createAthlete = async (athlete) => {
  try {
    const res = await fetch("http://localhost:8080/athlete/creation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(athlete),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);

    // Mock for test
    return {
      messages: "Successfully Created.",
      value: "4",
    };
  }
};

export const mockSearchResult = [
  {
    id: 2,
    age: 23,
    firstName: "Nadun",
    lastName: "Mekala",
    gender: "Male",
    country: "Sri-Lanka",
    image:
      "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    dateOfBirth: "1995-08-15T18:30:00.000+00:00",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: null,
    modifiedUser: null,
    modifiedDate: null,
    eventParticipationDetails: [
      {
        id: 1,
        result: 1,
        eventId: 2,
        eventName: "100x4",
        status: "ACTIVE",
        participation: "YES",
        createdUser: "Charuni Rathnayaka",
        createdDate: "2023-03-05T18:14:26.000+00:00",
        modifiedUser: null,
        modifiedDate: null,
      },
    ],
    photosImagePath: "/profile-image/2/pr.PNG",
  },
  {
    id: 3,
    firstName: "Nadun",
    lastName: "Mekala",
    gender: "Male",
    country: "Sri-Lanka",
    image:
      "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    dateOfBirth: "1995-08-15T18:30:00.000+00:00",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: null,
    modifiedUser: null,
    modifiedDate: null,
    eventParticipationDetails: [
      {
        id: 2,
        result: 2,
        eventId: 2,
        eventName: "100x4",
        status: "ACTIVE",
        participation: "YES",
        createdUser: "Charuni Rathnayaka",
        createdDate: "2023-03-05T18:14:32.000+00:00",
        modifiedUser: null,
        modifiedDate: null,
      },
    ],
    photosImagePath: null,
  },
];
