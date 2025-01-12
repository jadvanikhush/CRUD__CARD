import React, { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(' https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      console.log(users)
    };
    fetchUsers();
  }, []);

  // Handle like button
  const toggleLike = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, liked: !user.liked } : user
      )
    );
  };

  // Handle user edit
  const handleEdit = (user) => {
    setEditedUser(user);
    setIsModalOpen(true);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const saveEditedUser = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editedUser.id ? editedUser : user
      )
    );
    setIsModalOpen(false);
  };


  // Handle user removal
  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-lg shadow-md "
          >
            <div className='bg-gray-300 flex justify-center font-bold p-2 '>
              <h1>{user.username}</h1>
            </div>

            <div className='flex justify-center max-w-full max-h-full bg-gray-400 '>
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                alt={`${user.name}'s avatar`}
                className="w-28 h-28 rounded-full  "
              />
            </div>
            <div className='p-2 bg-gray-300'>
              <h2 className="font-semibold py-1">{user.name}</h2>
              <div className='pl-4'>
                <p className='pt-1 '>{user.email}</p>
                <p className='pt-1 '>{user.phone}</p>
                <p className='pt-1 '>{user.address.city}</p>
                <p className='pt-1 '>{user.website}</p>
                <p className='pt-1 '>{user.company.name}</p>
              </div>

            </div>
            <div className="flex justify-evenly gap-2 bg-gray-900">
              {/* Like Button with Heart Icon */}
              <button
                onClick={() => toggleLike(user.id)}
                className={`my-3 px-3 py-2 rounded ${user.liked ? 'bg-blue-500' : ''}`}
              >
                <i className={`fas fa-heart ${user.liked ? 'text-white' : 'text-white'}`} />
              </button>
 
            <p className='text-white mt-4'> | </p>

              {/* Edit Button with Pencil Icon */}
              <button
                onClick={() => handleEdit(user)}
                className="my-3 px-4 py-2 rounded"
              >
                <i className="fas fa-pencil-alt text-white" />
              </button>

              <p className='text-white mt-4'> | </p>

              {/* Remove Button with Trash Icon */}
              <button
                onClick={() => handleRemove(user.id)}
                className="my-3 px-4 py-2 rounded"
              >
                <i className="fas fa-trash text-white" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl mb-4">Edit User</h2>
            <div>
              <label className="block">Name:</label>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
              />
              <label className="block">Email:</label>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="border p-2 w-full mb-4"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEditedUser}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
