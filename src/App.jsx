import { useSelector } from "react-redux";
import "./App.css";
import { Users } from "lucide-react";
import UserCard from "./components/UserCard";
import { useState } from "react";
import EditModal from "./components/EditModel";

function App() {
  const users = useSelector((state) => state.users.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-full bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-auto h-auto mx-auto">
        <div className="flex items-center justify-center mb-6">
          {/* heading */}
          <div className="flex justify-center items-center gap-2">
            <Users className="h-6 w-6 text-teal-600" />
            <h1 className="text-3xl font-sans font-semibold text-gray-800">
              User List
            </h1>
          </div>
        </div>

        {/* Usercard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onEdit={handleEdit} />
          ))}
        </div>

        {/* modal */}
        <EditModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }}
        />
      </div>
    </div>
  );
}

export default App;
