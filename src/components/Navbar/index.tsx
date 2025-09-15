import Search from '../SearchBar/Search';
import './index.scss';


export default function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="page-title">Filmes</h1>
            <Search />
        </nav>
    )
}