module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/include/' : '/',
  chainWebpack: (config) => {
    config
      .plugin('define')
      .tap((args) => {
        const prcs = args[0];
        prcs.LEAFLET_TOKEN = JSON
          .stringify('pk.eyJ1IjoicGhxdWVpcm96IiwiYSI6ImNpeTUybWw5ZjAwNWQzMnAyczh5bXh3Z3oifQ.3LEj4_da9KlKXCESvTvXKA');

        return args;
      });
  },
  devServer: {
    allowedHosts: [
      ".repl.it",
      ".repl.co",
      ".repl.run"
    ]
  }
};
