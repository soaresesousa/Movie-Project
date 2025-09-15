import Search from '../SearchBar/Search';
import './index.scss';

interface Props {
    setNewMovieName: (name: string)
    => void;
}

export default function Navbar(props: Props){
    

    return (
        <nav className="navbar">
            <h1 className="page-title">Filmes</h1>
            <Search setNewMovieName={props.setNewMovieName} />
        </nav>
    )
}