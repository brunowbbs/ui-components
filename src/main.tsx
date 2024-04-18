import ReactDOM from 'react-dom/client';
import { ProviderUiComponents } from '../lib/layouts/provider-ui-components';
import App from './App';

import '../lib/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProviderUiComponents>
    <App />
  </ProviderUiComponents>,
);
