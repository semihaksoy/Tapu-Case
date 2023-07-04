import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'; // <-- import this
import { addItem } from "../../features/user/userBasketSlice";

export interface Property {
    name: string;
    address: string;
    score: number;
    distance: number;
    price: number;
    photo: string;
}

const List: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const dispatch = useDispatch();
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3000/properties');
            setProperties(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Property List</h1>
            {properties && <ul>
                {properties.map((property, index) => (
                    <li key={index} style={{ marginBottom: '20px' }}>
                        <h2>{property.name}</h2>
                        <p>Address: {property.address}</p>
                        <p>Score: {property.score}/5</p>
                        <p>Distance: {property.distance}/10</p>
                        <p>Price: {property.price}</p>
                        <img src={property.photo} alt={property.name} width="200" />
                        <button onClick={() => dispatch(addItem(property))}>Add to basket</button>
                    </li>
                ))}
            </ul>}
        </div>
    );
};

export default List;
