import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Card } from 'antd';

function Products() {
  
    return (
        <div className="App">
            <Card size="small" title="Default size card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            <Button type="primary" size="large" style={{ width: 270 }}>Add to Cart</Button>
            </Card>
        </div>
    ) 

  }

export default Products;