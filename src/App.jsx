import { useState } from 'react'
import './App.css'
import { Home } from './Components/Pages/Home'
import { Navbar } from './Components/Features/Navbar'
import { Footer } from './Components/Features/Footer'
import { Route, Routes } from 'react-router-dom'
import { About } from './Components/Pages/About'
import { Skills } from './Components/Pages/Skills'
import { Contact } from './Components/Pages/Contact'
import { Project } from './Components/Pages/Project'
import { Experience } from './Components/Pages/Experience'

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState()
    const [message, setMessage] = useState('')
	const [fillError, setFillError] = useState(false)
	const [post, setPost] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
		setFillError(false)
        if (name && email && mobile && message) {
			const Id = post.length ? Number(post[post.length - 1].id) + 1 : 1;
			const Name = name;
			const Email = email;
			const Mobile = Number(mobile);
			const Message = message;
			const addPost = {id:Id, name:Name, email:Email, mobile:Mobile, message:Message}
			const newPost = [...post, addPost]
			setPost(newPost)
			localStorage.setItem('post', JSON.stringify(newPost))
			setName('')
			setEmail('')
			setMobile('')
			setMessage('')
		} else {
			setFillError(true)
		}
    }

	
	return (
		<Routes>
			<Route path='/' element={
			<>
				<Navbar />
				<Home />
				<About />
				<Skills />
				<Experience />
				<Project />
				<Contact
					name = {name}
					setName = {setName}
					email = {email}
					setEmail = {setEmail}
					mobile = {mobile}
					setMobile = {setMobile}
					message = {message}
					setMessage = {setMessage}
					fillError = {fillError}
					handleSubmit = {handleSubmit}
				/>
				<Footer />
			</>
			}/>
		</Routes>
	)
}

export default App
