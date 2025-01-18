import { createSlice } from "@reduxjs/toolkit";

const initialUsers = [
  {
    id: 1,
    username: "Bret",
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    company: {
      name: "Romaguera-Crona",
    },
  },
  {
    id: 2,
    username: "Antonette",
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
    company: {
      name: "Deckow-Crist",
    },
  },
  {
    id: 3,
    username: "Samantha",
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
    },
    company: {
      name: "Romaguera-Jacobson",
    },
  },
  {
    id: 4,
    username: "Karianne",
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
    },
    company: {
      name: "Robel-Corkery",
    },
  },
  {
    id: 5,
    username: "Kamren",
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
    },
    company: {
      name: "Keebler LLC",
    },
  },
  {
    id: 6,
    username: "Leopoldo_Corkery",
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
    },
    company: {
      name: "Considine-Lockman",
    },
  },
  {
    id: 7,
    username: "Elwyn.Skiles",
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    website: "elvis.io",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
    },
    company: {
      name: "Johns Group",
    },
  },
  {
    id: 8,
    username: "Maxime_Nienow",
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
    },
    company: {
      name: "Abernathy Group",
    },
  },
  {
    id: 9,
    username: "Delphine",
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
    },
    company: {
      name: "Yost and Sons",
    },
  },
  {
    id: 10,
    username: "Moriah.Stanton",
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "ambrose.net",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
    },
    company: {  
      name: "Hoeger LLC",
    },
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: initialUsers,
    likedUsers: [],
  },
  reducers: {
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      state.likedUsers = state.likedUsers.filter((id) => id !== action.payload);
    },
    toggleLike: (state, action) => {
      const userId = action.payload;
      if (state.likedUsers.includes(userId)) {
        state.likedUsers = state.likedUsers.filter((id) => id !== userId);
      } else {
        state.likedUsers.push(userId);
      }
    },
  },
});

export const { updateUser, deleteUser, toggleLike } = userSlice.actions;
export default userSlice.reducer;
