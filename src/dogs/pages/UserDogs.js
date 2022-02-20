import React from 'react';
import { useParams } from 'react-router-dom';

import DogList from '../components/DogList';

const DUMMY_DOGS = [
    {
        id: 'd1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u1',
    },
    {
        id: 'd2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/akita-detail.jpg?bust=1535565032&width=355',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u2',
    },
];

const UserDogs = () => {
    const userId = useParams().userId;
    const loadedDogs = DUMMY_DOGS.filter((dog) => dog.creator === userId);
    return <DogList items={loadedDogs} />;
};

export default UserDogs;
