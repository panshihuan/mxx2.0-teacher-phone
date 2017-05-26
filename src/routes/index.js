// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
// import Home from './Home'
import CounterRoute from './Counter'
import ZenRoute from './Zen'
import ElapseRoute from './Elapse'
import RouteRoute from './Route'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'
import noToken from './PageNotFound/noToken'

import LoginRoute from './login'
import Home from './MyHome'
import Students from './Students'
import Self from './Self'
import Blank from './Blank'
import Item1 from './Self/components/item1'
import Item2 from './Self/components/item2'
import Item3 from './Self/components/item3'
import Item4 from './Self/components/item4'
import Item5 from './Self/components/item5'
import Item6 from './Self/components/item6'
import Item7 from './Self/components/item7'
import SurePsw from './Self/components/surePsw'
import Address from './Self/components/address'
import ChangeAddress from './Self/components/changeAddress'
import Bangding from './Self/components/weixinbangding'
import AddStudents from './Students/addStudent'
// import LoginMultipleSchooles from './login/loginMultipleSchooles'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Blank(store),
  childRoutes: [
    CounterRoute(store),
    ZenRoute(store),
    ElapseRoute(store),
    RouteRoute(store),
    PageNotFound(),
    LoginRoute(store),
    // LoginMultipleSchooles(),
    Home(store),
    Students(store),
    AddStudents(store),
    Self(store),
    Item1(),
    Item2(),
    Item3(),
    Item4(),
    Item5(),
    Item6(),
    Item7(),
    SurePsw(),
    Address(store),
    ChangeAddress(store),
    Bangding(store),
    Redirect
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
