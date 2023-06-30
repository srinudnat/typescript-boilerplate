import NodemonPlugin = require("nodemon-webpack-plugin");
export let target: string;
export let entry: string;
export namespace output {
    let filename: string;
    let path: string;
}
export namespace resolve {
    let extensions: string[];
}
export namespace module {
    let rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
        };
    } | {
        test: RegExp;
        use: string;
        exclude: string;
    })[];
}
export let plugins: NodemonPlugin[];
export namespace performance {
    let hints: boolean;
}
export let externals: any[];
