/**
 *
 * Asynchronously loads the component for SelectRow
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
