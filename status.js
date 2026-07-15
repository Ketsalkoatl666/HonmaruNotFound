// state.js
// 全局状态管理器

// 物品字典：存放所有物品的名称和描述
const ItemDict = {
    "rusty_key": { name: "生锈的铜钥匙", desc: "一把古老的钥匙，上面沾着暗红色的污渍。" },
    "bento_box": { name: "冷掉的便当", desc: "大广间拿来的便当，务必在明天之前吃完或者处理掉。" },
    "fox_mask": { name: "狐狸面具", desc: "看着它，你总觉得有些不安..." }
};

const GameState = {
    day: 1,
    life: 3,          // 生命值
    pollution: 0,     // 污染度
    inventory: ["bento_box"],    // 背包内容，存放物品 ID
    flags: {},        // 剧情触发标记，例如：hasReadRedText: true

    // --- 物品管理方法 ---
    hasItem(itemId) {
        return this.inventory.includes(itemId);
    },
    
    addItem(itemId) {
        if (!this.hasItem(itemId)) {
            this.inventory.push(itemId);
            console.log(`获得物品: ${itemId}`);
            // 后续这里可以调用更新背包 UI 的函数
        }
    },
    
    removeItem(itemId) {
        const index = this.inventory.indexOf(itemId);
        if (index > -1) {
            this.inventory.splice(index, 1);
        }
    },

    // --- 属性管理方法 ---
    takeDamage(amount) {
        this.life -= amount;
        console.log(`失去 ${amount} 点生命，当前生命: ${this.life}`);
        if (this.life <= 0) {
            return true; // 返回 true 表示死亡，交给引擎处理
        }
        return false;
    }
};