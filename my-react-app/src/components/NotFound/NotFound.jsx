import NotFoundImage from './../../assets/404.jpg'
import './NotFound.css'

const NotFound = () => {

    return (
        <div className="NotFound">
            <h1>404</h1>
            <img src={NotFoundImage} alt="404 error gif" className="page-img" />

        </div>
    )
}
export default NotFound




