module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const sourceMapRule = webpackConfig.module.rules.find(
          (rule) => rule.enforce === 'pre' && rule.use?.loader?.includes('source-map-loader')
        );
        if (sourceMapRule) {
          sourceMapRule.exclude = [
            ...(sourceMapRule.exclude || []),
            /node_modules\/aleo-adapters/
          ];
        }
        return webpackConfig;
      },
    },
  };