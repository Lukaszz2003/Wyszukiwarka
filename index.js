const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);

  console.log(users);
};

fetchUsers();
