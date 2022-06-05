import React, { useEffect, useReducer } from "react";

const initialState = {
    posts: [],
    isPending: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                posts: action.payload,
                isPending: false,
                error: null,
            };
        case "ERROR":
            return {
                posts: null,
                isPending: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const GetPosts2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "SUCCESS", payload: data }))
            .catch((error) => dispatch({ type: "ERROR", payload: error.message }));
    }, []);

    // console.log(state.posts);

    return (
        <div>
            <h1>Fetching data and updating state using useReducer() hook</h1>

            {!state.isPending &&
                state.posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}

            {state.error && <p>{state.error}</p>}
        </div>
    );
};

export default GetPosts2;
