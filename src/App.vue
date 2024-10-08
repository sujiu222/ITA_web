<template>
    <div class="top">
        <el-menu :ellipsis=false class="el-menu-demo" mode="horizontal" background-color="black" text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1-1" @click="shouye">首页</el-menu-item>
            <el-menu-item index="1-2" @click="ymbhp">关于成理</el-menu-item>
            <el-menu-item index="1-3" @click="join">加入我们</el-menu-item>
            <el-menu-item index="1-4" @click="guanyuwomen">关于我们</el-menu-item>
        </el-menu>
    </div>
    <RouterView></RouterView>

    <footer class="footer">
        <div class="footer-container">
            <!-- 关于我们 -->
            <div class="footer-section">
                <h3>关于我们</h3>
                <p>智能物联协会（宜宾分社）致力于推动物联网技术的创新和应用，为广大同学提供学习与成长的平台。</p>
                <router-link to="/Intro">了解更多 >></router-link>
            </div>

            <!-- 联系信息 -->
            <div class="footer-section">
                <h3>联系信息</h3>
                <p>地址：四川省宜宾市成都理工大学</p>
                <p>电话：+86 </p>
                <p>邮箱：2994338151@qq.com</p>
            </div>

            <!-- 快速链接 -->
            <div class="footer-section">
                <h3>快速链接</h3>
                <ul>
                    <li><router-link to="/#">首页</router-link></li>
                    <li><router-link to="/Intro">关于我们</router-link></li>
                    <li><router-link to="" @click="join">加入我们</router-link></li>
                    <li><router-link to="">赛事活动</router-link></li>
                </ul>
            </div>

            <!-- 社交媒体 -->
            <div class="footer-section">
                <h3>关注我们</h3>
                <div class="social-links">
                    <!-- <a href="https://weibo.com" target="_blank">
                        <img src="@/assets/weibo-icon.png" alt="Weibo">
                    </a>
                    <a href="https://wechat.com" target="_blank">
                        <img src="@/assets/wechat-icon.png" alt="WeChat">
                    </a>
                    <a href="https://bilibili.com" target="_blank">
                        <img src="@/assets/bilibili-icon.png" alt="Bilibili">
                    </a> -->
                </div>
            </div>
        </div>

        <!-- 版权声明 -->
        <div class="footer-bottom">
            <p>© 2024 智能物联协会（宜宾分社）版权所有</p>
            <router-link to="" @click="join" class="cta-button">加入我们</router-link>
        </div>
    </footer>

</template>

<script setup>
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

</script>

<style lang="scss" scoped>
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



.footer {
    background-color: #333;
    color: white;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
}

.footer-section {
    flex: 1;
    margin: 0 20px;
}

.footer-section h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.footer-section p {
    font-size: 0.9rem;
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 8px;
}

.footer-section ul li a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
}

.footer-section ul li a:hover {
    text-decoration: underline;
}

.social-links a {
    margin-right: 15px;
}

.social-links img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
}

.footer-bottom {
    margin-top: 20px;
    text-align: center;
    font-size: 0.9rem;
}

.footer-bottom .cta-button {
    background-color: #007bff;
    color: white;
    padding: 8px 15px;
    text-decoration: none;
    border-radius: 5px;
    margin-left: 20px;
    transition: background-color 0.3s;
}

.footer-bottom .cta-button:hover {
    background-color: #0056b3;
}
</style>