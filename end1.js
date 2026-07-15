// 剧情节点数据字典
const storyNodes = {
    "node1": {
        text: `第一日：\n\n应时之政府之邀，你通过了重重选拔，最后与定下的十四位同伴参与进此次救援计划。\n\n因该本丸坐标不稳定，传送阵散发一阵光芒之后，你从眩晕感消失后才反应过来其他同伴并没有出现在你的身旁。\n\n你看了看周围，发现自己正处于天守阁内，此刻你决定：`,
        choices: [
            { text: "⒈检查周围是否有可用的线索", target: "node2" },
            { text: "⒉直接出门", target: null } // target 为 null 代表占位，点击不跳转
        ]
    },
    "node2": {
        text: `你环顾四周，最后在书上找到了两本书，一本为《本丸日常规定守则》，另一本为《本丸规则怪谈》，你仔细想了想，决定还是先仔细阅读再做打算。\n\n阅读完毕之后，你决定接下来先做什么：`,
        choices: [
            { text: "⒈外出", target: null },
            { text: "⒉翻看书桌上的公文", target: "node3" },
            { text: "⒊选出一本空白本作为日记本", target: null }
        ]
    },
    "node3": {
        text: `你打开了桌子上的公文，上面写着密密麻麻的文字，甚至还覆盖着用红笔加上去的一些小字，此时你决定：`,
        choices: [
            { text: "⒈仔细阅读黑色的文字", target: null },
            { text: "⒉努力辨别红色的字", target: "node4" }
        ]
    },
    "node4": {
        text: `你睁大了眼睛，想要判别出写的到底是什么，在盯了三分钟之后你突然感觉头痛欲裂，像是什么东西正在阻止你继续阅读，此刻你决定：`,
        choices: [
            { text: "⒈把公文盖上，不再阅读", target: null },
            { text: "⒉忍着疼痛，仍然努力辨别", target: "node5" }
        ]
    },
    "node5": {
        text: `你忍着疼痛，努力看清楚了部分红色的字迹：“七”“晚上”“天守阁”“刀账”“危险”“回头”，你的头更痛了，此时你决定：`,
        choices: [
            { text: "⒈不再阅读，直接把公文盖上", target: "node6" },
            { text: "⒉忍着剧痛，仍然努力辨别", target: null }
        ]
    },
    // 新增的死亡结局节点
    "node5_badend": {
        text: `你一直查看规则漏洞，探查了部分的真实规则，这不符合祂们的意图，你感觉自己的认知被逐渐扭曲，最后眼前一黑，彻底昏死过去 \n\n<div class="achievement">【达成成就：出师未捷身先死】</div>`,
        choices: [
            { text: "返回起点", target: "node1" }
        ]
    },

    "node6": {
        text: `你直接盖上了公文，坐在地上缓了好久才睁开了眼睛，刚才剧烈的疼痛已经消失了，此刻你决定：`,
        choices: [
            { text: "⒈先出门", target: null },
            { text: "⒉在笔记本上记录线索", target: "node7" },
            { text: "⒊先看下时间再做打算", target: null }
        ]
    },
    "node7": {
        text: `你在空白的笔记本上写下零零碎碎的线索，写完之后你发现桌脚底下好像压着什么东西，此时你决定：`,
        choices: [
            { text: "⒈先捡起来仔细查看", target: "node8" },
            { text: "⒉置之不理，写完起身", target: null }
        ]
    },
    "node8": {
        text: `你把东西捡了起来，然后打开，发现正好是本丸的地图，大致了解了本丸的各个位置，此时你看向了时钟，摸了摸肚子，好像还不是很饿，此时你决定：`,
        choices: [
            { text: "⒈再仔细查看是否有遗漏的线索", target: null },
            { text: "⒉先出门查看情况", target: "node9" }
        ]
    },
    "node9": {
        text: `你最终还是出门了，整个本丸静悄悄的，你翻开了下地图，此时你决定：`,
        choices: [
            { text: "⒈前往大广间", target: "node10" },
            { text: "⒉前往厨房", target: null },
            { text: "⒊前往查看千叶樱状态", target: null }
        ]
    },
    "node10": {
        text: `你走到了大广间，主位上放了三个便当盒，你伸手一摸都还热乎着，此时你决定：`,
        choices: [
            { text: "⒈先吃完一份，剩下两份打包带回天守阁", target: null },
            { text: "⒉三份都各吃一部分，然后把便当盒都放在这里，迅速离开", target: null },
            { text: "⒊仔细检查周围是否有相关线索", target: "node11" }
        ]
    },
    "node11": {
        text: `你仔细搜查了一番，终于在盒子底下发现了小纸条，上面写着“这是今日份的三餐，可堂食，也可带回天守阁吃，但是第二日将无法食用，请在第二日吃第一餐之前把便当盒放到大广间或者自行去厨房清洗。”，此时你决定：`,
        choices: [
            { text: "⒈大快朵颐，打包另外两份便当盒，直接回天守阁", target: null },
            { text: "⒉先吃完一份，随身携带两份便当盒，然后接着探索本丸", target: "node12" }
        ]
    },
    "node12": {
        text: `您吃完之后带着两份便当盒离开了大广间，你看了一下地图，往前走了一些距离，突然你感觉好像有人在背后喊你的名字，此时你决定：`,
        choices: [
            { text: "⒈回头", target: "node13" },
            { text: "⒉装作没听见接着往前走", target: null }
        ]
    },
    "node13": {
        text: `你回头看向身后，一股毛骨悚然的紧迫感涌上心头，剧烈的疼痛再次刺激着你的大脑，视线也模糊不清，你根本分辨不出来到底是什么东西站在你背后，此刻你决定：`,
        choices: [
            { text: "⒈努力睁开眼看清楚对方", target: null },
            { text: "⒉忍着疼痛努力往前跑", target: "node14" }
        ]
    },
    "node14": {
        text: `你从来没想过自己会有这么强的爆发力，往前跑了许久许久直到疼痛感全部消失了你才停下来，你发现自己即将跑到千叶樱附近，天色也暗了下来，此时你决定：`,
        choices: [
            { text: "⒈索性直接去查看千叶樱状态", target: "node15" },
            { text: "⒉避免额外生端，回到天守阁", target: null }
        ]
    },
    "node15": {
        text: `你一步步地朝千叶樱走去，越往前走，樱花味越浓，只是为什么脚下的步伐越来越沉重了呢？你低头往下一看，自己的脚底下哪里还是绿草土地，明明就是一块块破碎的刀刃铺成的战场，你想逃跑，却只能一直往千叶樱走，最后你的手摁在了树干上，此时你才发现面前的这棵树是由无数的血手拼凑而成，祂们伸出手，把你的灵力全部汲取完，最后像撕裂布娃娃一样把你蹂躏殆尽，你在无尽的苦痛中失去了意识。\n\n<div class="achievement">【达成成就：不作死就不会死】</div>`,
        choices: [
            { text: "返回起点", target: "node1" }
        ]
    }
};

// 开始游戏：隐藏首页，显示游戏界面和规则按钮
function startGame() {
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("rule-btn").style.display = "block";
    
    // 强制回到顶部，防止在长页面点击后滚动条还在下方
    window.scrollTo(0, 0); 
    
    // 渲染第一个节点
    renderNode("node1");
}

// 页面渲染核心函数
function renderNode(nodeId) {
    const node = storyNodes[nodeId];
    const storyElement = document.getElementById("story-text");
    const choicesElement = document.getElementById("choices-container");
    
    // 渲染文本内容
    storyElement.innerHTML = node.text;
    
    // 清空并重新渲染当前节点的选项
    choicesElement.innerHTML = "";
    node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = choice.text;
        
        btn.onclick = () => {
            if (choice.target) {
                renderNode(choice.target);
                // 每次选择后自动滚动到页面顶部，增强阅读体验
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
        
        choicesElement.appendChild(btn);
    });
}
