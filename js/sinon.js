describe('sinon', function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('spy', function() {
    it('runs original function', function() {
      var obj = {
        method: function() {
          return 'hoge';
        }
      };
      var spy = sandbox.spy(obj, 'method');
      expect(spy()).to.be('hoge');
      sinon.assert.calledOnce(spy);
    });
  });
});
