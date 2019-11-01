module.exports = {
    module: {
        loaders: [
            { exclude: ['node_modules'], loader: 'babel', test: /\.tsx?$/ },
            { loader: 'style-loader!css-loader', test: /\.scss$/ },
            { loader: 'url-loader', test: /\.gif$/ },
            { loader: 'file-loader', test: /\.(woff|eot|svg)$/ },
        ],
    },
    resolve: {
        alias: {
            config$: './configs/app-config.js',
            react: './vendor/react-master',
        },
        extensions: ['', 'js', 'tsx'],
        modules: [
            'node_modules',
            'bower_components',
            'shared',
            '/shared/vendor/modules',
        ],
    },
};