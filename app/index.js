var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    prompting: function() {
        var done = this.async();

        var prompts = [{
            name: 'componentUrl',
            message: '组件路径:',
            default: 'modules/xxx'
        }, {
            name: 'componentName',
            message: '组件名称:',
            default: 'test'
        }];

        this.prompt(prompts, function (props) {
         
            this.componentUrl = props.componentUrl;
            this.componentName = props.componentName;
            this.componentDir = this.componentUrl;

            // this.templateFiles = {
            //     component: 'component.js',
            //     componentCtrl: 'componentCtrl.js',
            //     componentSer: 'componentService.js',
            //     componentTmpl: 'component.html',
            //     componentDirective: 'componentDirective.js',
            //     componentDirectiveTmpl: 'componentDirective.html'
            // };

            var that = this;
            var newComponent = this.componentName;
            var componentDir = this.componentDir;
            that.templateFiles = {
                component: 'component.js',
                componentCtrl: 'componentCtrl.js',
                componentService: 'componentService.js',
                componentTmpl: 'component.html',
                componentDirective: 'componentDirective.js',
                componentDirectiveTmpl: 'componentDirective.html'
            };

            for(var name in that.templateFiles){
                var file = that.templateFiles[name];
                var newFile = file.replace('component', newComponent);
                var index = newFile.indexOf('.');
                var fileName = newFile.substr(0, index);
                var newFilePath = componentDir + '/' + newFile;
               
// console.log(name)
                that[name + 'Name'] = fileName;
                that[name] = newFilePath;
                (function(file, newFilePath){
                    setTimeout(function(){
                        that.template(file, newFilePath);
                    });                    
                })(file, newFilePath);
            }
            console.log(that)


//             for(var name in that.templateFiles){
//                 var file = that.templateFiles[name];
//                 var index = file.indexOf('.');
//                 var fileName = file.substr(0, index);
//                 var newFile = file.replace('component', newComponent);
//                 var newFilePath = componentDir + '/' + newFile;
               
// // console.log(name)
//                 that[name + 'Name'] = fileName;
//                 that[name] = newFilePath;
//                 that.template(file, newFilePath);
//             }            
            


            // this.componentName = this.componentName + '.js';
            // this.componentCtrlName = this.componentName + 'Ctrl.js';
            // this.componentSerName = this.componentName + 'Service.js';
            // this.componentTmplName = this.componentName + '.html';
            // this.componentDirectiveName = this.componentName + 'Directive.js';
            // this.componentDirectiveTmplName = this.componentName + 'Directive.html';

            // this.component = componentDir + '/' + this.componentName + '.js';
            // this.componentCtrl = componentDir + '/' + this.componentName + 'Ctrl.js';
            // this.componentSer = componentDir + '/' + this.componentName + 'Service.js';
            // this.componentTmpl = componentDir + '/' + this.componentName + '.html';
            // this.componentDirective = componentDir + '/' + this.componentName + 'Directive.js';
            // this.componentDirectiveTmpl = componentDir + '/' + this.componentName + 'Directive.html';

            //创建组件目录
            this.mkdir(this.componentDir);

            // this.template('component.js', this.component);
            // this.template('componentCtrl.js', this.componentCtrl);
            // this.template('componentService.js', this.componentSer);
            // this.template('component.html', this.componentTmpl);
            // this.template('componentDirective.js', this.componentDirective);
            // this.template('componentDirective.html', this.componentDirectiveTmpl);

            done();

            // function generatorName(){
            //     var that = this;
            //     for(var name in that.templateFiles){
            //         var index = name.indexOf('.');
            //         that[name + Name] = index.substr(0, index);
            //         that[name] = componentDir + '/' + that[name + Name];

            //         that.template(that.templateFiles[name], that[name]);
            //     }
            // }
        }.bind(this));


    }
});