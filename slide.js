/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-03 16:12:49
 * @version $Id$
 */

Reveal.initialize({
	// 是否展示导航控制器
	controls:true,
	// 是否展示幻灯片进度条
    progress: true,
    // 是否使用鼠标滚轮进行幻灯片播放
    mouseWheel: true,
    // 幻灯片变换动画类型，可选值 default/cube/page/concave/zoom/linear/fade/none
    transition: 'default',
    // 变换动画速度，可选值 default/fast/slow
    transitionSpeed: 'default',
    // 幻灯片背景变换风格，可选值 default/none/slide/concave/convex/zoom
    backgroundTransition: 'default',

    dependencies:[

    	// 一个跨浏览器的获取classList的解决方案插件
        {
            src: 'revealjs/lib/js/classList.js',
            condition: function() {
                return !document.body.classList;
            }
        },
		// markdown解析支持插件
        {
            src: 'revealjs/plugin/markdown/marked.js',
            condition: function() {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: 'revealjs/plugin/markdown/markdown.js',
            condition: function() {
                return !!document.querySelector('[data-markdown]');
            }
        },

        // 代码高亮插件
        {
            src: 'revealjs/plugin/highlight/highlight.js',
            async: true,
            callback: function() {
                hljs.initHighlightingOnLoad();
            }
        }

	]

});