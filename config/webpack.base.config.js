var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var lib_dir = __dirname + '/public/libraries',
    node_dir = __dirname + '/node_modules',
    bower_dir = __dirname + '/bower_components',
    plugins_dir = __dirname + '/public/plugins';

module.exports = {
    resolve: {
        // alias: {
        //     react: node_dir + '/react',
        //     "react-dom": node_dir + '/react-dom',
        //     jquery: node_dir + '/jquery/dist/jquery.min.js',
        //     "velocity-animate": node_dir + '/velocity-animate',
        //     jqueryUi: plugins_dir + '/jQueryUI/jquery-ui.min.js',
        //     bootstrap: plugins_dir + '/bootstrap/js/bootstrap.min.js',
        //     //eve: node_dir + '/raphael/eve/eve.js',
        //     raphael: node_dir + '/webpack-raphael/raphael.js',
        //     morris: plugins_dir + '/morris/morris.js',
        //     //sparkline: plugins_dir + '/sparkline/jquery.sparkline.min.js',
        //     jvectormap: plugins_dir + '/jvectormap/jquery-jvectormap-1.2.2.min.js',
        //     jvectormapWorld: plugins_dir + '/jvectormap/jquery-jvectormap-world-mill-en.js',
        //     //knob: plugins_dir + '/knob/jquery.knob.js',
        //     moment: plugins_dir + '/moment/moment.js',
        //     //daterangepicker: plugins_dir + '/daterangepicker/daterangepicker.js',
        //     bootstrapDatepicker: plugins_dir + '/datepicker/bootstrap-datepicker.js',
        //     //bootstrapWysihtml5: plugins_dir + '/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.js',
        //     slimscroll: plugins_dir + '/slimScroll/jquery.slimscroll.min.js',
        //     fastclick: plugins_dir + '/fastclick/fastclick.min.js',
        // }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
}
