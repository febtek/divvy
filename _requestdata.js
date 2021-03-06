// jshint undef: false

//
// USER ROUTES
//

// 'GET' /users
  //gets all users

// 'GET' /users/:username
  // gets user by username

// 'POST' /users
  // creates a new user

req.body = {
  "name": "optional",
  "username": "",
  "password": "",
  "email": "optional",
  "facebookId": "optional",
  "img_url": "optional"
};

// 'PUT' /users/username
// replace undefined with new data

req.body = {
  id: 'user id',
  username: undefined,
  password: undefined,
  name: undefined,
  email: undefined,
  facebookId: "optional",
  img_url: undefined,
};

//
// GROUPS ROUTES
//

// 'GET' /groups
  // gets all groups (prob a bad idea)

// 'GET' /groups/:user
  // gets all groups by user id

// 'GET' /groups/users/:group
  // get all users by group id

// 'GET' /groups/activity/:group
  // get all activity by group id

// 'POST' to /groups
  // creates a new group

req.body = {
  name: "string",
  desc: "text",
  members: ["id(number)", "id", "id"]
};

// 'POST' to /groups/expenses
  // creates a group expense

req.body = {
  title: "string",
  amount: "number with 2 decimals, max 8 digits",
  group_id: "number",
  paid_by: "logged in\'s user id number",
  img_url: "url string",
  note: "text",
  members: ["id(number)", "id", "id"]
};

// 'PUT' to /groups/expenses
  // updates the properties of an expense

req.body = {
  id: "expense id",
  title: undefined,
  amount: undefined,
  img_url: undefined,
  note: undefined,
  // members: undefined (possibly will add this at some point, discuss?)
};


// 'POST' to /groups/payments
  // creates a new payment

req.body = {
  group_id: 'group id number',
  payee: 'your user id number',
  recipient: 'recipients user id number',
  amount: 'number with 2 decimals, max 8 digits',
  note: 'text'
};

// 'PUT' to /groups/payments
// replace undefined with new data

req.body = {
  id: "payment id",
  amount: undefined,
  note: undefined
};
