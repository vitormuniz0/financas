import './styles.css'
import Container from 'react-bootstrap/Container';

export const LayoutComponents = (props) =>{
    return (
        <Container fluid className='container-login'>
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </Container>
    )
}