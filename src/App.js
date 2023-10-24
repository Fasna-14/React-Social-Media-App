import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Nav from "./Nav";
import About from "./About";
import EditPost from "./EditPost"
import { Routes, Route} from "react-router-dom";
import { DataProvider } from "./context/DataContext";


function App() {


  return (
    <div className="App">
      <DataProvider>
        <Header title="My First Social Media App"/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post">
            <Route index
              element={<NewPost/>} />

            <Route path=":id" 
              element={<PostPage/>} />
          </Route>
          <Route path="/edit/:id" element={<EditPost/>} />
          <Route path="/about" element ={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;


{/* <nav>
<ul>
  <li><Link to="/"> Home </Link></li>
  <li><Link to="/about"> About </Link></li>
  <li><Link to="/newPost"> NewPost </Link></li>
  <li><Link to="/postPage"> PostPage </Link></li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/newPost" element={<NewPost />}/>
<Route path="/postPage" element={<PageLayout />}>
  <Route index element={<PostPage />}/>
  <Route path=":id" element={<Post />}/>
  <Route path="newPost" element={<NewPost />}/>
</Route>
<Route path="*" element={<Missing />}/>
</Routes> */}