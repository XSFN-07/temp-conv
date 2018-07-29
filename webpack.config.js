module.exports = 
{
    entry: "./src/js/index.js",
    output:
    {
        //path: "/dist/js/",
        filename: "./js/bundle.js"
    },    
    module:
    {
        rules: 
        [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
};
