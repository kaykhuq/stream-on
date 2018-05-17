/**
 *
 * Asynchronously loads the component for TableNoData
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
