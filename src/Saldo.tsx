import { store } from './store';

export default () => <div>Saldo: {store.getState().saldo}</div>
