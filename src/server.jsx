
import 'rxjs';

import Koa                from 'koa';
import serve              from 'koa-static';
import path               from 'path';
import _                  from 'underscore';
import { matchRoutes }    from 'react-router-config';

import routes             from './routes';
import initialize         from './store';
import ViewHandler        from './utils/ssr-view-handler';
import FixStateBeforeLoad from './utils/fix-state-before-load';

const app = new Koa();

/** serve static files */
app.use(serve(__dirname + '/../static'));

app.use(async (ctx, next) => {
  const isMatched = matchRoutes(routes, ctx.request.originalUrl);

  if (_.isEmpty(isMatched)) {
    // 404
  }
  else {
    let componentsToRender = {};
    const store = initialize();

    isMatched.map(router => {
      const { route  } = router;

      const isValid   = _.isObject(route) && _.has(route, 'name') && _.has(route, 'component');
      const isMember  = -1 === _.indexOf(componentsToRender, route.name);

      /**
       * Make sure the component is & valid not yet a member
       * of `componentsToRender` to avoid duplication
       */
      if (isValid && isMember)
        componentsToRender[route.name] = route.component;
    })

    const viewHandler = new ViewHandler();

    await FixStateBeforeLoad(store.dispatch, componentsToRender)
    .then(res => {
      const html  = viewHandler.renderView(store, ctx);
      ctx.body    = html;
      next();
    })
  }
});

module.exports = app;
