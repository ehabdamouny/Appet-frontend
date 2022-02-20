import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import DogItem from './DogItem';
import Button from '../../shared/components/FormElements/Button';
import './DogList.css';

const DogList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className='dog-list center'>
                <Card>
                    <h2>No dogs found.</h2>
                    <Button to='/dogs/new'>Share Dog</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className='dog-list'>
            {props.items.map((dog) => (
                <DogItem
                    key={dog.id}
                    id={dog.id}
                    image={dog.imageUrl}
                    title={dog.title}
                    description={dog.description}
                    address={dog.address}
                    creatorId={dog.creator}
                    coordinates={dog.location}
                />
            ))}
        </ul>
    );
};

export default DogList;
