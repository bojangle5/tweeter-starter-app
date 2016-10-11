const Backbone = require('backbone');

const NavBarView = Backbone.View.extend({
  el: `
    <nav>
      <h1 id="title">
        <a href="/#">Anti_Tweeter</a>
      </h1>
      <a id="logout" href="/logout">
        <div>Logout</div>
      </a>
    </nav>
  `,

  render() {
    return this;
  }
});

module.exports = NavBarView;
