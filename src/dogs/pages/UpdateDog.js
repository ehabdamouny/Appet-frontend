import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './DogForm.css';

const DUMMY_DOGS = [
    {
        id: 'd1',
        title: 'Empire ',
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
        title: 'State',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u2',
    },
];

const UpdateDog = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dogId = useParams().dogId;

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false,
            },
            description: {
                value: '',
                isValid: false,
            },
        },
        false
    );

    const identifiedDog = DUMMY_DOGS.find((d) => d.id === dogId);

    useEffect(() => {
        if (identifiedDog) {
            setFormData(
                {
                    title: {
                        value: identifiedDog.title,
                        isValid: true,
                    },
                    description: {
                        value: identifiedDog.description,
                        isValid: true,
                    },
                },
                true
            );
        }

        setIsLoading(false);
    }, [setFormData, identifiedDog]);

    const dogUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedDog) {
        return (
            <div className='center'>
                <Card>
                    <h2>Could not find Dog!</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className='center'>
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <form className='dog-form' onSubmit={dogUpdateSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title.'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid description (min. 5 characters).'
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type='submit' disabled={!formState.isValid}>
                UPDATE DOG
            </Button>
        </form>
    );
};

export default UpdateDog;