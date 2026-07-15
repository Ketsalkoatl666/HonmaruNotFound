// game.js

function startGame() {
    console.log("正在尝试启动游戏..."); // 测试用，可按 F12 查看
    
    const home = document.getElementById("home-screen");
    const game = document.getElementById("game-container");
    const status = document.getElementById("status-bar");
    const btns = document.getElementById("top-buttons");

    // 安全地操作 DOM，防止因为找不到元素而报错卡死
    if (home) home.style.display = "none";
    if (game) game.style.display = "block";
    if (status) status.style.display = "block";
    if (btns) btns.style.display = "flex";
    
    window.scrollTo(0, 0); 
    
    // 渲染第一个节点，确保 story.js 里面有 "node1"
    if (typeof storyNodes !== 'undefined' && storyNodes["node1"]) {
        renderNode("node1");
    } else {
        console.error("无法加载剧情！请检查 story.js 中是否存在 node1，或者 story.js 是否存在语法错误。");
        document.getElementById("story-text").innerHTML = "<span style='color:red;'>剧情加载失败，请按 F12 查看控制台报错。</span>";
    }
}

function updateHUD() {
    if(typeof GameState === 'undefined') return;
    const uiDay = document.getElementById("ui-day");
    const uiLife = document.getElementById("ui-life");
    const uiPollution = document.getElementById("ui-pollution");
    
    if(uiDay) uiDay.innerText = GameState.day;
    if(uiLife) uiLife.innerText = GameState.life + "/3";
    if(uiPollution) uiPollution.innerText = GameState.pollution;
}

function renderNode(nodeId) {
    const node = storyNodes[nodeId];
    const storyElement = document.getElementById("story-text");
    const choicesElement = document.getElementById("choices-container");
    
    updateHUD(); 

    storyElement.innerHTML = node.text;
    choicesElement.innerHTML = "";
    
    node.choices.forEach(choice => {
        if (choice.condition && choice.condition() === false) {
            return; 
        }

        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = choice.text;
        
        btn.onclick = () => {
            if (choice.action) choice.action();
            
            if (GameState.life <= 0 && storyNodes["death_node"]) {
                renderNode("death_node"); 
                return;
            }

            if (choice.target) {
                renderNode(choice.target);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
        choicesElement.appendChild(btn);
    });
}

function toggleRules() {
    const panel = document.getElementById('rule-panel');
    const overlay = document.getElementById('overlay');
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        document.getElementById('inventory-panel').style.display = 'none'; // 打开规则时关掉背包
        panel.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function toggleInventory() {
    const panel = document.getElementById('inventory-panel');
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('inventory-content');

    if (panel.style.display === 'block') {
        panel.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        document.getElementById('rule-panel').style.display = 'none'; // 打开背包时关掉规则
        
        content.innerHTML = "";
        if (!GameState || GameState.inventory.length === 0) {
            content.innerHTML = '<p style="color: #777;">背包空空如也...</p>';
        } else {
            GameState.inventory.forEach(itemId => {
                const itemData = ItemDict[itemId];
                if (itemData) {
                    content.innerHTML += `
                        <div class="item-row">
                            <div class="item-name">${itemData.name}</div>
                            <div class="item-desc">${itemData.desc}</div>
                        </div>
                    `;
                }
            });
        }
        panel.style.display = 'block';
        overlay.style.display = 'block';
    }
}