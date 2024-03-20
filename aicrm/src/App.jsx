import { useState } from 'react'
import './App.css'
import './bg.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <h1 className="logo">AICRM</h1>
          <nav className="sidebar">
            <ul>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Tasks</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <div className="clerk">
            <SignedOut>
              <SignInButton className="btn">Sign In</SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="content">
          <h2>Welcome to AICRM</h2>
          <p>Manage your customer relationships with ease.</p>
          {/* Add your main content here */}
        </div>
      </main>

      <footer className="footer">
        &copy; 2023 AICRM. All rights reserved.
      </footer>
    </div>
  )
}

export default App