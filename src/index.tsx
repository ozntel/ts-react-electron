import { render, hydrate } from 'react-dom';
import { App } from './App';
import { RecoilRoot } from 'recoil';

const root = document.getElementById('root');

const ReactRootComponent = () => {
    return (
        <RecoilRoot>
            <App />
        </RecoilRoot>
    );
};

if (root.hasChildNodes()) {
    hydrate(<ReactRootComponent />, root);
} else {
    render(<ReactRootComponent />, root);
}
