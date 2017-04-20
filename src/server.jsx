
import 'rxjs';
import { matchRoutes }    from 'react-router-config';
import Koa                from 'koa';
import serve              from 'koa-static';
import path               from 'path';
import _                  from 'underscore';
import routes             from './routes';
import initialize         from './store';
import ViewHandler        from './utils/ssr-view-handler';
import FixStateBeforeLoad from './utils/fix-state-before-load';

const app = new Koa();

/** serve static files */
app.use(serve(__dirname + '/../static'));

const store = initialize();

app.use(async ctx => {

  const isMatched = matchRoutes(routes, ctx.request.originalUrl);

  if (_.isEmpty(isMatched)) {
    // 404
  }
  else {
    const componentToRender = isMatched[0].route.component;
    const viewHandler       = new ViewHandler();

    await FixStateBeforeLoad(store.dispatch, componentToRender);
    const html  = viewHandler.renderView(store, ctx, isMatched);
    ctx.body    = html;
  }
});

module.exports = app;
