import UserList from "./redux/features/UserList";
import { Route, Routes } from "react-router-dom";
import AddUser from "./redux/features/AddUser";
import EditUser from "./redux/features/EditUser";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-2xl text-center font-bold text-rose-500">
        Todo List
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
