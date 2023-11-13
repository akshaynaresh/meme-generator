import head from '../images/Troll Face.png'

export default function Header() {
    return (
        <header className="app-header">
            <div className='header-name'>
                <img src={head} className="header-logo" alt="logo" />
                <h1 className="header-title">Meme Generator</h1>
            </div>
            <h3><span className='author'>By</span> Akshay Dwivedi</h3>
        </header>
    )
}