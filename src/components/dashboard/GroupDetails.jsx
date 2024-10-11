import { useEffect, useState } from 'react';
import { getGroupById } from '../services/groupService';
import { useParams } from 'react-router-dom';

const GroupDetails = () => {
    const [group, setGroup] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchGroup(id);
    }, [id]);

    const fetchGroup = async (groupId) => {
        const data = await getGroupById(groupId);
        setGroup(data);
    };

    if (!group) return <div>Loading...</div>;

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Group Details</h1>
            <p><strong>Name:</strong> {group.name}</p>
            <p><strong>Description:</strong> {group.description}</p>
        </div>
    );
};

export default GroupDetails;
