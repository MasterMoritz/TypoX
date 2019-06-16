import { LoginGuard } from './login.guard';

class MockRouter {
  parseUrl(path: string) { }
}
class MockNext {

}
class MockRouteState {

}

describe('LoginGuard', () => {
  describe('canActivate', () => {
    let loginGuard: LoginGuard;
    let router;
    let next;
    let state;

    it('return true for a logged out user', () => {
      const store = jasmine.createSpyObj('store', ['selectSnapshot']);
      store.selectSnapshot.and.callFake((param) => false);

      //these are not needed yet
      next = new MockNext();
      state = new MockRouteState();

      router = new MockRouter();
      loginGuard = new LoginGuard(store, router);

      expect(loginGuard.canActivate(next, state)).toEqual(true);
    });

    it('should navigate to homepage for a logged in user', () => {
      const store = jasmine.createSpyObj('store', ['selectSnapshot']);
      store.selectSnapshot.and.callFake((param) => true);

      next = new MockNext();
      state = new MockRouteState();

      router = new MockRouter();
      loginGuard = new LoginGuard(store, router);

      spyOn(router, 'parseUrl');
      expect(loginGuard.canActivate(next, state)).not.toEqual(true);
      expect(router.parseUrl).toHaveBeenCalledWith('');
    });
  });
});