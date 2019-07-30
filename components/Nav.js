import Link from 'next/link';


export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <ul className="navbar-nav mr-auto">
                <Link href="/"><a className="nav-link">Home</a></Link>
                <Link href="/about"><a className="nav-link">About</a></Link>
            </ul>
        </nav>
    )
}