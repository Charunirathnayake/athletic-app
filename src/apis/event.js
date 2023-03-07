export const getAllEvents = async () => {
  try {
    const res = await fetch("http://localhost:8080/event/all");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);

    // returns mock for tresting
  //  return eventsMock;
  }
};

export const eventsMock = [
  {
    id: 1,
    name: "100x4",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T04:34:22.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 2,
    name: "400x4",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:16:09.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 3,
    name: "100",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:16:18.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 4,
    name: "200m",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:16:27.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 5,
    name: "400m",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:16:33.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 6,
    name: "800m",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:17:26.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 7,
    name: "1000m",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:17:33.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 8,
    name: "1500m",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:17:45.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 9,
    name: "3000m",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:17:56.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 10,
    name: "5000m",
    status: "ACTIVE",
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-04T16:18:05.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
];
