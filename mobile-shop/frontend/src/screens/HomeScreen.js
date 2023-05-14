import { Link } from "react-router-dom"
import { Row, Col, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from "../components/Product"


const HomeScreen = ({ match }) => {
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, pages, page } = productList

    return (
        <>
            <Link to='/' className='btn btn-dark'>
                返回上一页
            </Link>
            <h1>最新产品</h1>
            <>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </>
        </>
    )
}

export default HomeScreen
