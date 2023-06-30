import ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin/lib/plugin");
import CopyWebpackPlugin = require("copy-webpack-plugin");
import HtmlWebpackPlugin = require("html-webpack-plugin");
import webpack = require("webpack");
export let entry: string[];
export namespace output {
    let path: string;
    let filename: string;
    let publicPath: string;
}
export let plugins: (ForkTsCheckerWebpackPlugin | CopyWebpackPlugin | HtmlWebpackPlugin | webpack.DefinePlugin | webpack.ProgressPlugin)[];
export namespace module {
    let rules: ({
        test: RegExp;
        use: string[];
        exclude: RegExp;
        loader?: undefined;
        options?: undefined;
    } | {
        test: RegExp;
        loader: string;
        exclude: RegExp;
        options: {
            transpileOnly: boolean;
        };
        use?: undefined;
    })[];
}
export namespace resolve {
    let extensions: string[];
}
