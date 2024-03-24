import './App.css'
import AuthorsList from './components /authorsList/AuthorsList'
import { Banner } from './components /banner/Banner'
import { BookList } from './components /bookList/BookList'
import { Form } from './components /form/Form'
import { Header } from './components /header/Header'
import { PhotoBanner } from './components /photoBanner/PhotoBanner'

function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <BookList/>
    <AuthorsList/>
    <PhotoBanner/>
    <Form/>
    </>
  )
}

export default App
