import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from '../components/Header/Layouts';
import Blogs from '../components/Header/Blogs';
import Contact from '../components/Header/Contact';
import Home from '../components/Header/Home';
import NoPage from '../components/Header/NoPage';
import CoursesNav from '../components/Header/CoursesNav';
import "../App.css";
import CourseDetail from '../screens/Courses/CourseDetail';
import FavoriteCourse from '../screens/Courses/FavoriteCourse';
import Footer from '../components/Footer/Footer';
import Register from '../screens/RegisterScreen/Register';
import Login from '../screens/LoginScreen/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index path="/" element={<Home/>} />
          <Route path="courses" element={<CoursesNav />} />
          <Route exact path="course-detail/:id/:slug.html" element={<CourseDetail/>} />
          <Route path="favorite-course" element={<FavoriteCourse />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}