import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './components/Header/Layouts';
import Blogs from './components/Header/Blogs';
import Contact from './components/Header/Contact';
import Home from './components/Header/Home';
import NoPage from './components/Header/NoPage';
import CoursesNav from './components/Header/CoursesNav';
import "./App.css";
import CourseDetail from './components/Courses/CourseDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<CoursesNav />} />
          <Route exact path="course-detail/:id/:slug.html" element={<CourseDetail/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}