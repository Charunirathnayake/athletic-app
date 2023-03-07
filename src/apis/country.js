export const getAllCountries = async () => {
  try {
    const res = await fetch("http://localhost:8080/country/all");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    
    // returns mock for tresting
   // return mockCountries;
  }
};

export const mockCountries = [
  {
    id: 1,
    countryName: "Sri Lanka",
    status: null,
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-05T18:05:58.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 2,
    countryName: "India",
    status: null,
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-05T18:06:09.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 3,
    countryName: "England",
    status: null,
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-05T18:06:20.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 4,
    countryName: "USA",
    status: null,
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-05T18:06:30.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
  {
    id: 5,
    countryName: "Canada",
    status: null,
    createdUser: "Charuni Rathnayaka",
    createdDate: "2023-03-05T18:06:41.000+00:00",
    modifiedUser: null,
    modifiedDate: null,
  },
];
