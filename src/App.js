import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import TopicDetails from './components/TopicDetails/TopicDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
          element: <Home></Home>
        },
        {
          path: '/topic/:topicid',
          loader: async ({ params }) => { return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicid}`) },
          element: <TopicDetails></TopicDetails>
        },
        {
          path: '/statistics',
          loader: async () => { return fetch('https://openapi.programming-hero.com/api/quiz') },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <div> <h2>Opps!!! Sorry, This page is not available.</h2></div>
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
