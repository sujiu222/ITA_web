<template>
    <div class="Intro">
        <div class="jiagou">
            <div class="content1">
                <h3 class="h3title">综合学习部</h3>
                <div class="jiagoucontent">
                    &nbsp;&nbsp;&nbsp;&nbsp;我们是一个以计算机技术为主题，以娱
                    乐为手段，以学习为目的的社团部门，在这里我们不
                    仅会举办有趣刺激的比赛活动，还会邀请学长学姐们
                    为我们授课和指导，组织同学们进行实际的项目开发
                    和管理，让同学们在实践中学习和成长。此外，我们
                    不仅是一个学习团体，也是一个友爱家庭。我们会组
                    织各种有益于增进感情和拓宽视野的活动如交流分享、
                    游戏娱乐、出游聚餐等，让同学们在享受计算机的乐
                    趣的同时，也能结识志同道合的队友和朋友。此时不加更待何时！！！综学部欢迎你
                </div>
            </div>
            <div class="content1">
                <h3 class="h3title">竞赛预备部
                </h3>
                <div class="jiagoucontent">
                    &nbsp;&nbsp;&nbsp;&nbsp;培养有一定计算机基础的同学的竞赛兴趣，将会针对计算机相关竞赛开展算法学习与赛前培训，
                    同时会邀请专业老师来为大家普及竞赛意义与传授竞赛经验，鼓励并辅助大家多多参加竞赛。
                    通过相互学习，提升能力，为实战竞赛打下坚实的基础。此处并非技术至上，只要你有兴趣、足
                    够努力，就一定能拥有意想不到的收获！
                </div>
            </div>
            <div class="content1">
                <h3 class="h3title">执行部

                </h3>
                <div class="jiagoucontent">
                    &nbsp;&nbsp;&nbsp;&nbsp;执行策划部分（多人负责）的主要任务是宣传编辑文案，推广和宣传协会，负责官号的运
                    营，制作海报以及活动的策划，与社服的对接，相当于协会的枢纽部分，可以很快的提升自己
                    的管理，事件处理与交流能力。
                </div>
            </div>
            <div class="content1">
                <h3 class="h3title">游研设计部

                </h3>
                <div class="jiagoucontent">
                    &nbsp;&nbsp;&nbsp;&nbsp;主要涉及游戏鉴赏与游戏制作，包括 3D 建模、绘画、程序设计等，通过学习以上知识，我们
                    能复刻一些游戏中的经典玩法如鬼泣五的次元斩，Control 的隔空抓取物体，仿真投影仪等有
                    趣的东西，如果你对前述感兴趣或是有精力学习甚至有志肝出属于自己的独立游戏，那就加入
                    我们!
                </div>
            </div>
        </div>



        <div class="awards-section">
            <h2>奖项与荣誉</h2>
            <div class="awards-grid">
                <div v-for="award in awards" :key="award.id" class="award-card">
                    <img :src="award.icon" :alt="award.title" class="award-icon" />
                    <h3>{{ award.title }}</h3>
                    <p>{{ award.description }}</p>
                </div>
            </div>
            <button class="learn-more-button">了解更多</button>
        </div>


    </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const guanyuwomen = () => {
    router.push('/Intro');
}
const shouye = () => {
    router.push('/#');
}
const join = () => {
    window.open(`https://qm.qq.com/q/9tPRlHXADS `, '_blank');
}


const ymbhp = () => {
    window.open('https://cdut.ymbhp.com/ ', '_blank');
}

const awards = ref([
    {
        id: 1,
        title: "中国大学生计算机博弈大赛",
        description: "1个冠军，1个全国一等奖，1个全国二等奖",
        icon: 'C:\\Users\\苏九\\Desktop\\code\\c\\c\\public\\ward1.jpg',
    },
    {
        id: 2,
        title: "中国计算机设计大赛",
        description: "1个全国三等奖",
        icon: "award-icon-2.png",
    },
    {
        id: 3,
        title: "蓝桥杯大赛",
        description: "2个全国优秀奖，1个省一等奖，2个省二等奖",
        icon: "award-icon-3.png",
    },
    {
        id: 4,
        title: "全国大学生物联网设计竞赛（华为杯）",
        description: "1个赛区二等奖",
        icon: "award-icon-4.png",
    },
    {
        id: 5,
        title: "团队程序设计天梯赛",
        description: "1个省三等奖",
        icon: "award-icon-5.png",
    },
]);

</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
    .awards-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        /* 调整列数 */
    }

    .award-card {
        padding: 15px;
        /* 减小卡片内边距 */
    }

    .award-card h3 {
        font-size: 1rem;
        /* 减小标题字体大小 */
    }

    .award-card p {
        font-size: 0.9rem;
        /* 减小描述字体大小 */
    }

    .learn-more-button {
        padding: 8px 15px;
        /* 调整按钮内边距 */
        font-size: 0.9rem;
        /* 减小按钮字体大小 */
    }
}

div.Intro {
    // background-color: #f0f0f0;
    // width: 100vw;
    // min-height: 100vh;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // font-size: 2rem;
    // font-weight: bold;
    // flex-direction: row;
    // color: #333;
    // padding-bottom: 20px;
    background-color: #f0f0f0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* 使内容垂直排列 */
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    padding-bottom: 20px;
}

div.jiagou {
    margin-top: 5%;
    height: auto;
    /* 固定高度 */
    width: 1300px;
    /* 宽度自动扩展 */
    background-color: #f0f0f0;
    white-space: nowrap;
    /* 防止内容换行，使宽度扩展 */
    padding: 10px;
    overflow: visible;
    /* 允许内容扩展，不隐藏 */
}

div.content1 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    padding: 24px 32px;
    background: white;
    margin: 0 5%;
    border-radius: 12px;
    line-height: 1.5;
    max-width: 1200px;
    width: auto;

    margin-top: 18px;
    border: 1px solid #e6e6ec;
    align-content: center;
    align-items: center;
    box-shadow: 2px #e6e6ec;
}

div.top {
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background-color: black;

    .el-menu--horizontal {
        border-bottom: none;
    }
}

h3.h3title {
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-right: auto;
}

div.jiagoucontent {
    height: auto;
    font-size: 21px;
    text-align: left;
    color: #333;
    display: flex;
    white-space: normal;
    line-height: 1.5;
    margin-top: 20px;
}


.awards-section {
    text-align: center;
    padding: 40px;

    max-width: 1200px;
    margin: 0 auto;
}

.awards-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
}

.awards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
}

.award-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
}

.award-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
}

.award-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.award-card p {
    font-size: 1rem;
    color: #666;
}

.learn-more-button {
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

div.jiagou,
.awards-section {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
}

.learn-more-button:hover {
    background-color: #0056b3;
}
</style>