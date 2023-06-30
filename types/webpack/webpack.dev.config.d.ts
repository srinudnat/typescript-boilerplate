declare const _exports: {
    entry: string[];
    output: {
        path: string;
        filename: string;
        publicPath: string;
    };
    plugins: (import("fork-ts-checker-webpack-plugin/lib/plugin").ForkTsCheckerWebpackPlugin | import("copy-webpack-plugin") | import("html-webpack-plugin") | import("webpack").DefinePlugin | import("webpack").ProgressPlugin)[];
    module: {
        rules: ({
            test: RegExp;
            use: string[];
            exclude: RegExp;
        } | {
            test: RegExp;
            loader: string;
            exclude: RegExp;
            options: {
                transpileOnly: boolean;
            };
        })[];
    };
    resolve: {
        extensions: string[];
    };
};
export = _exports;
