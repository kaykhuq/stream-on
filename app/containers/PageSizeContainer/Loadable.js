/**
 *
 * Asynchronously loads the component for PageSizeContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
