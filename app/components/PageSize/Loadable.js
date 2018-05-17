/**
 *
 * Asynchronously loads the component for PageSize
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
