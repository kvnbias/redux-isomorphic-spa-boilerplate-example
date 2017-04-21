
import Promise from 'bluebird';

/**
 * Fetch data before server render.
 * Since `componentWillMount` is not triggered in SSR
 * components with the static `required` is needed
 * to dispatch the actions that are need in the
 * server-side.
 */
export default function FixStateBeforeLoad(dispatch, components) {
  const prerequesites = Object.keys(components).reduce(
    (prev, current) => {
      return components[current] ?
        (components[current].required || []).concat(prev) : prev;
      },
    []
  );

  const promises = prerequesites.map(prerequesite => {
    const { action, params } = prerequesite;
    return dispatch(action(...params));
  });

  return Promise.all(promises);
}
