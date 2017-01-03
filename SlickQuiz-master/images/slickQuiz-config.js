var quizJSON = {
    "info": {
        "name":    "测测你的车商AQ，看看你是车神还是马路杀手。",
        "main":    "<p>老司机？AQ多少？敢不敢试一下？还是有点难度的哦。啥叫AQ？就是“Automobile Quotient”，翻译过来就是“车商”。</p>",
        "results": "<h5>温馨提醒</h5><p>欢迎关注我们，我们会为您提供更多有趣的测试题目哦。</p>",
        "level1":  "天才",
        "level2":  "非常优秀",
        "level3":  "优秀",
        "level4":  "平常",
        "level5":  "偏低"
    },
    "questions": [
        {
            "q": "当见到下图的时候，你第一个反应是：<br><img src='./images/Q-1.jpg'>",
            "a": [
                {"option": "人行道红灯，行人不能过", "correct": true, "score":3},
                {"option": "行车道红灯，车辆不能过", "correct": true, "score":7},
                {"option": "刚刚变灯，趁现在加速过去", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span> 红灯的时候哪怕再急也不能闯红灯，你做得非常好。</p>",
            "incorrect": "<p><span>回答错误。</span> 人行道红灯，行人不能过；行车道红灯，车辆不能过。</p>"
        },
        {
            "q": "当见到下图的时候，你觉得图里面所描述的是：<br><img src='./images/Q-2.jpg'>",
            "a": [
                {"option": "美国，前面路段有交通事故，所以塞车", "correct": false, "score":0},
                {"option": "英国，前面路段有花车巡游或嘉年华，所以塞车", "correct": true, "score":7},
                {"option": "泰国，前面路段有寺庙，车主经过都要朝拜，所以塞车", "correct": true, "score":3}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span> 看来你经常游览各国，这些完全难不倒你。</p>",
            "incorrect": "<p><span>回答错误。</span> 你确定看到图上有交通事故么？</p>"
        },
        {
            "q": "当见到下图的时候，你第一个能够想到的是：<br><img src='./images/Q-3.jpg'>",
            "a": [
                {"option": "自己忘了把钥匙取出来", "correct": false, "score":0},
                {"option": "自己正在开车",        "correct": true, "score":7}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "行驶在高速路上的时候见到一个受伤的动物在路中央，你会？",
            "a": [
                {"option": "果断采取损失小的避让措施", "correct": true, "score":7},
                {"option": "直接碾过动物，结束它的痛苦", "correct": false, "score":0},
                {"option": "停下车来，协助动物回到路边", "correct": true, "score":3}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "挑选润滑油，你认为使用哪种油对发动机最好？",
            "a": [
                {"option": "矿物油", "correct": false, "score":0},
                {"option": "半合成油", "correct": false, "score":0},
                {"option": "合成油", "correct": true, "score":7}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "当驾驶着汽车在塞车的路段中缓慢行驶，你会？",
            "a": [
                {"option": "在任何情况下都不变线，随大流而动", "correct": true, "score":7},
                {"option": "在没有交警和摄像头的情况下，变线行驶快车道", "correct": false, "score":0},
                {"option": "在没有交警和摄像头的情况下，变线行驶应急道", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "汽车以每小时80公里的速度在直道上行使，你认为突然拉手刹通常会出现以下哪种情况？",
            "a": [
                {"option": "发动机在剧烈抖动后，车会平稳地停下来", "correct": true, "score":3},
                {"option": "甩尾", "correct": true, "score":7},
                {"option": "完全没有效果", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "你认为发动机润滑油以下哪个作用最重要？",
            "a": [
                {"option": "清洁", "correct": true, "score":10},
                {"option": "抗磨", "correct": false, "score":0},
                {"option": "防腐蚀抗氧化", "correct": false, "score":0},
                {"option": "冷却", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "你和另外一辆汽车在一个没有红绿灯的十字路口会车，而且向同一个方向转向，谁应该先转向呢？",
            "a": [
                {"option": "我先转向", "correct": false, "score":0},
                {"option": "他/她先转向", "correct": true, "score":3},
                {"option": "拐右的车先转向", "correct": true, "score":7}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "发动机没有润滑油了，前方5公里有维修点，你会？",
            "a": [
                {"option": "停车等道路救援", "correct": true, "score":7},
                {"option": "不作任何的措施，行驶维修点", "correct": true, "score":3},
                {"option": "先灌些水滋润着发动机，然后开到维修点", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "你觉得在暴雨中行车驾驶什么时候会最危险？",
            "a": [
                {"option": "暴雨下得最大的时候", "correct": false, "score":0},
                {"option": "暴雨刚开始的时候", "correct": true, "score":7},
                {"option": "当路面出现坑坑洼洼的时候", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "你认为在统计全球的数据后，一个星期中哪一天发生车祸的频率会最高？",
            "a": [
                {"option": "周六", "correct": true, "score":7},
                {"option": "周日", "correct": false, "score":0},
                {"option": "周一", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "如果机油干了，你认为灌注以下哪种液体会让你的发动机稍微长寿一些？",
            "a": [
                {"option": "蓖麻油", "correct": true, "score":7},
                {"option": "97号汽油", "correct": true, "score":3},
                {"option": "矿泉水", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "法国人Nicolas Joseph Cugnot制造了世界上第一辆汽车，你认为这辆汽车是最先用于？",
            "a": [
                {"option": "农业", "correct": false, "score":0},
                {"option": "军事", "correct": true, "score":7},
                {"option": "建筑", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "你认为汽车润滑油同以下几个产品的作用最不相似的是？",
            "a": [
                {"option": "消毒洗手液", "correct": true, "score":7},
                {"option": "身体磨砂膏", "correct": true, "score":3},
                {"option": "能量型饮料", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "当汽车启动不了，你第一件会做的事情是？",
            "a": [
                {"option": "打电话给汽车协会或者爱车俱乐部", "correct": true, "score":3},
                {"option": "打电话给最亲的人", "correct": true, "score":3},
                {"option": "检查引擎和机油", "correct": true, "score":7},
                {"option": "踢一脚轮胎以舒缓自己内", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "为了不让你的爱车的常规保养变成昂贵的维修，你认为以下哪一个是最不可取的？",
            "a": [
                {"option": "更换最先进的车载音响系统", "correct": true, "score":3},
                {"option": "换机油时选择最贵的合成油", "correct": false, "score":0},
                {"option": "完全听取汽修公司的意见", "correct": true, "score":7}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "你认为美国警察在没有清洁剂的情况下，会使用什么饮料清洗汽车的引擎、电池或其他生锈和有污迹的部件呢？",
            "a": [
                {"option": "雪碧", "correct": false, "score":0},
                {"option": "可乐", "correct": true, "score":7},
                {"option": "红牛", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "你认为以下哪种物质可以最有效地清洁发动机内有害的油泥和积碳？",
            "a": [
                {"option": "纳米光动电流", "correct": false, "score":0},
                {"option": "动力清洁分散因子", "correct": true, "score":10},
                {"option": "超浮力磁化粒子", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
        {
            "q": "假如你是一辆汽车，使用了好的发动机润滑油后，你的感觉是？",
            "a": [
                {"option": "喝了很好的咖啡", "correct": false, "score":0},
                {"option": "洗了一个很清爽的澡", "correct": true, "score":11},
                {"option": "喝了很滋补的汤", "correct": false, "score":0}
            ],
			"select_any": true,
            "correct": "<p><span>回答正确。</span></p>",
            "incorrect": "<p><span>回答错误。</span></p>"
        },
		
    ]
};
