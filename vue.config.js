const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    // pages:{
    //     index:{
    //         entry:['./src/main.js']
    //     }
    // },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"));
        config.entry('app')
            .clear()
            .add('./src/main.js')
            // .add('./src/aaa.js')  使用.add打包2个JS文件
    }
};
