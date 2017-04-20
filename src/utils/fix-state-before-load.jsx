
import Promise from 'bluebird';

/** Fetch data before server render */
export default function FixStateBeforeLoad(dispatch, component) {

  function componentWithRequired(prev, current) {
    return (current.required || [])
    .concat((current.WrappedComponent ? current.WrappedComponent.required : []) || [])
    .concat(prev);
  }

  /** reduce components that has a static `required` property */
  // const required = components.reduce(componentWithRequired, []);
  //
  // /** Map and dispatch required */
  // const promises = required.map(
  //   requiredAction => dispatch(requiredAction())
  // );

  const promises = [];
  return Promise.all(promises);
}
