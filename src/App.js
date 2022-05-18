import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await axios.get("https://reqres.in/api/users");
            setPosts(response.data.data);
            setLoading(false);
        }

        // Call the function
        loadPost();
    }, []);




    return (
        <>
            <div className="App">
                {loading ?
                    (
                        <h4>Loading...</h4>
                    ) :
                    (posts.map((item) =>

                        <div className='border' >
                            <div>
                                <h4>{item.first_name}</h4>
                            </div>
                            <div >
                                <img src={item.avatar} style={{ maxHeight: '300px', maxWidth: '300px', borderRadius: '50%' }} />
                                <h4>Name: {item.first_name}   {item.last_name}</h4>
                                <h4>Email: {item.email}</h4>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default App;