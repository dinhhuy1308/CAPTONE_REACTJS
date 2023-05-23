import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'
import { lazy } from 'react'
import './assets/scss/style.scss'



// import Home from "./pages/Home/Home"
// import Login from './pages/Login/Login'
// import Register from './pages/Register/Register'
// import Cart from './pages/Cart/Cart'
// import Detail from './pages/Detail/Detail'
// import Search from './pages/Search/Search'
// import Profile from './pages/Profile/Profile'

const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Detail = lazy(() => import('./pages/Detail/Detail'))
const Search = lazy(() => import('./pages/Search/Search'))
const Profile = lazy(() => import('./pages/Profile/Profile'))

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='' element={<HomeTemplate />} >
					<Route index element={<Home />}/>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='cart' element={<Cart />} />
					<Route path='detail' element={<Detail />} />
					<Route path='search' element={<Search />} />
					<Route path='profile' element={<Profile />} />
					<Route path='*' element={<Navigate to='' />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
