/** @flow */

import Promise from 'bluebird';

/** Fetch data before server render */
export default function FetchComponentData(
  dispatch: Function,
  components: Array<Object>,
  params: Object
) :Promise {

  /** reduce components that has a static `needs` property */
  const needs: Array<Function> = components.reduce(
    (prev, current: {
      needs: Array<Function>,
      WrappedComponent: {
        needs: Array<Function>
      }
    }) :Array<Function> => {
      return (current.needs || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
      .concat(prev);
    }, []
  );

  /** Map and dispatch needs */
  const promises: Array<Function> = needs.map(
    (need: Function) :Function => dispatch(need(params))
  );

  return Promise.all(promises);
}
