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
	const [post, setPost] = useState([
		{
			id : 1,
			name : "Vikram Kumar",
			email : "vikramkumaru28@gmail.com",
			mobile : 9514945463,
			message : "Recived"
		}
	])

    const handleSubmit = (e) => {
        e.preventDefault()
        const Id = post.length ? Number(post[post.length - 1].id) + 1 : 1;
		const Name = name;
		const Email = email;
		const Mobile = Number(mobile);
		const Message = message;
		const addPost = {id:Id, name:Name, email:Email, mobile:Mobile, message:Message}
		const newPost = [...post, addPost]
		setPost(newPost)
		console.log(post);
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
					handleSubmit = {handleSubmit}
				/>
				<Footer />
			</>
			}/>
		</Routes>
	)
}

export default App
