import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ella Loki',
            image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            dogs: 3,
        },
    ];

    return <UserList items={USERS} />;
};

export default Users;
