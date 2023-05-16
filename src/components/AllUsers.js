import axios from "axios";
import { useEffect, useState } from "react";
import { serverPort } from "../constants";
import User from "./User";

const getAllUsers = async () => {
    const allUsersUrl = `http://localhost:${serverPort}/auth/users`;
    try {
        const response = await axios.get(allUsersUrl);
        const allUsers = response.data;
        console.log(allUsers);
        return allUsers;
    } catch (error) {
        console.log(error);
    }
};

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        const fetchAllUsers = async () => {
            const usersFromServer = await getAllUsers();
            setAllUsers(usersFromServer);
        };
        fetchAllUsers();
    }, []);

    // return <div>All Users</div>;
    return (
        <div >
            {allUsers.map((user, index) => (
                <User key={index} username={user.name} />
            ))}
        </div>
    );
};

export default AllUsers;
