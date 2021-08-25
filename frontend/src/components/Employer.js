import React, { useEffect, useState } from 'react';

const Employer = (props) => {
    const [employer, setEmployer] = useState({
        id: 0,
        name: "",
        age: -1,
        profilePhoto: null,
        description: "",
        email: null,
        createdAt: null,
    });

    const id = props.match.params.id;

    useEffect(() => {
        getEmployerDetails();
    }, []);

    const getEmployerDetails = () => {
        fetch("/api/getEmployer" + "?id=" + id).then(response =>
            response.json()
        ).then(data => {
            setEmployer({
                name: data.name,
                age: data.age,
                profilePhoto: data.profile_photo,
                description: data.description,
                email: data.email,
                createdAt: data.created_at,
            });
        });
    };

    return (
        <div>
            <h3> {employer.name} {employer.age} </h3>
            <p> {employer.description} </p>
            <p> {employer.email} </p>
        </div>
    )
}

export default Employer
