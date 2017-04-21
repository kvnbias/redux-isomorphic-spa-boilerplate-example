
export default function promiseMiddleware() {
  return next => action => {
    const { promise, type, ...args } = action;

    if (!promise) return next(action);

    const ATTEMPT = type + '_ATTEMPT';
    const SUCCESS = type + '_SUCCESS';
    const FAILURE = type + '_ERROR';
    const DONE    = type + '_DONE';

    next({ ...args, type: ATTEMPT });

    return promise.then(res => {
      next({ ...args, res: res.data , type: SUCCESS });
      next({ type: DONE });
    }).catch(err => {
      next({ ...args, err: err.response.data, type: FAILURE });
      next({ type: DONE });
    });
  };
}
