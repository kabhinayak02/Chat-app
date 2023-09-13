import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const { data } = await axios.get('api/chat');
            setChats(data);
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.length > 0 ? (
                chats.map((chat, index) => (
                    <div key={chat._id}>{chat.chatName}</div>
                ))
            ) : (
                <div>No chats available</div>
            )}
        </div>
    );
};

export default Chat;
