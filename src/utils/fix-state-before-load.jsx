
import Promise from 'bluebird';

/**
 * Fetch data before server render.
 * If you always need to load some data upon mounting the component
 * dispatch the action in componentWillMount instead, it will
 * still be rendered server-side and you don't need to put
 * the action in the static `required`. But if you would
 * 'ONLY' want to load the data on the server-side and
 * the data 'SHOULD' not be loaded in the client-side
 * without the user's interaction, assign the action
 * on the static `required`.
 */
export default function FixStateBeforeLoad(dispatch, components) {
  const prerequesites = Object.keys(components).reduce(function(prev, current) {
    return components[current]?
      (components[current].required || []).concat(prev) : prev;
  }, []);

  const promises = prerequesites.map(prerequesite => {
    const { action, params } = prerequesite;
    return dispatch(action(...params));
  });

  return Promise.all(promises);
}
