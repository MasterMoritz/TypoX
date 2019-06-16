import { AuthGuard } from './auth.guard';

class MockRouter {
  parseUrl(path: string) { }
}
class MockNext {

}
class MockRouteState {

}

fdescribe('AuthGuard', () => {
  describe('canActivate', () => {
    let authGuard: AuthGuard;
    let router;
    let next;
    let state;

    it('should return true for a logged in user', () => {
      const store = jasmine.createSpyObj('store', ['selectSnapshot']);
      store.selectSnapshot.and.callFake((param) => true);

      //these are not needed yet
      next = new MockNext();
      state = new MockRouteState();

      router = new MockRouter();
      authGuard = new AuthGuard(store, router);

      expect(authGuard.canActivate(next, state)).toEqual(true);
    });

    it('should navigate to login page for a logged out user', () => {
      const store = jasmine.createSpyObj('store', ['selectSnapshot']);
      store.selectSnapshot.and.callFake((param) => false);

      next = new MockNext();
      state = new MockRouteState();

      router = new MockRouter();
      authGuard = new AuthGuard(store, router);

      spyOn(router, 'parseUrl');
      expect(authGuard.canActivate(next, state)).not.toEqual(true);
      expect(router.parseUrl).toHaveBeenCalledWith('/login');
    });
  });
});