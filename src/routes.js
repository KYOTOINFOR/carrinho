import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import gabifeia from './carrinho';
import DetalheProduto from './detalheProduto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/carrinho" exact={true} component={gabifeia} />
                <Route path="/detalhe" exact={true} component={DetalheProduto} />
            </Switch>
        </BrowserRouter>
    )
}