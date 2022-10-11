import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h3>Understand Something Important!!</h3>
            <div className='blog'>
                <h4>What is the purpose of React Router?</h4>
                <p>React Router allows us to build a dynamic single-page web application with navigation without the page refreshing as the user navigates. It works based on component structure, which display the appropriate information. React Router uses virtual dom to update only the changes happend to any components and update the actual website without rendering all the components over and over again.</p>
            </div>
            <div className='blog'>
                <h4>How does Context API work?</h4>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. By storing it in a central place and allowing access to any component that requests it</p>
            </div>
            <div className='blog'>
                <h4>What is the use of useRef hook?</h4>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;