import {
    Building2,
    Edit2,
    Globe,
    Heart,
    Mail,
    MapPin,
    Phone,
    Trash2,
  } from "lucide-react";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { deleteUser, toggleLike } from "../slice/userSlice";
  
  const UserCard = ({ user, onEdit }) => {
    const avatarUrl = "https://api.dicebear.com/9.x/lorelei/svg";
  
    const dispatch = useDispatch();
    const likedUsers = useSelector((state) => state.users.likedUsers);
    const isLiked = likedUsers.includes(user.id);
  
    return (
      <div className="bg-gray-300 rounded-lg shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow duration-300">
        
        {/* username */}
        <h2 className="text-lg text-center font-bold text-black-700">hey {user.username} !!</h2>
        
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="bg-gray-400 rounded-t-lg h-32 flex items-center justify-center">
            <img src={avatarUrl} alt="Avatar" className="w-32 h-32 -mb-16" />
          </div>
        </div>
  
        <div className="text-start mt-4">
          {/* name */}
          <h2 className="text-lg font-bold text-gray-700">{user.name}</h2>
  
          {/* mail */}
          <div className="flex items-center  gap-2 text-gray-600 mt-2">
            <Mail size={16} />
            <a
              href={`mailto:${user.email}`}
              className="text-sm hover:text-blue-600 transition-all duration-300"
            >
              {user.email}
            </a>
          </div>
  
          {/* phone number */}
          <div className="flex items-center  gap-2 text-gray-600 mt-1">
            <Phone size={16} />
            <span className="text-sm">{user.phone}</span>
          </div>
  
          {/* website name */}
          <div className="flex items-center  gap-2 text-gray-600 mt-1">
            <Globe size={16} />
            <a
              href={`https://${user.website}`}
              className="text-sm hover:text-teal-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </div>
  
          {/* address */}
          <div className="flex items-center  gap-2 text-gray-600 mt-1">
            <MapPin size={16} />
            <div className="text-sm text-left">
              {user.address.street}, {user.address.suite},<br />
              {user.address.city}, {user.address.zipcode}
            </div>
          </div>
  
          {/* company name */}
          <div className="flex items-center  gap-2 text-gray-600 mt-1">
            <Building2 size={16} />
            <div className="text-sm font-medium text-gray-600">
              {user.company.name}
            </div>
          </div>
        </div>
  
        {/* like, edit and delete section */}
        <div className="bg-gray-400 rounded-md flex justify-between items-center mt-4 p-2 border-t border-gray-200">
          {/* like button */}
          <button
            onClick={() => dispatch(toggleLike(user.id))}
            className={`p-2 rounded-full hover:bg-indigo-50 transition-colors ${
              isLiked ? "text-red-500" : "text-gray-600"
            }`}
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          </button>
  
          {/* edit button */}
            <button
              onClick={() => onEdit(user)}
              className="p-2 text-gray-800 hover:bg-indigo-100 rounded-full transition-colors"
            >
              <Edit2 size={20} />
            </button>

            {/* delete button */}
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              className="p-2 text-red-600 hover:bg-indigo-100 rounded-full transition-colors"
            >
              <Trash2 size={20} />
            </button>
        </div>
      </div>
    );
  };
  
  export default UserCard;
  