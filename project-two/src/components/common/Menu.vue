<template>
    <div class="menu">
        <el-aside width="200px">
            <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#2578b5" text-color="#fff"
                active-text-color="#ffd04b" router>
                <template>
                    <el-submenu v-for="(item, index) in menus" :index="index + ''" :key="index" v-if="!item.hidden">
                        <template slot="title">
                            <i :class="item.iconClass"></i>
                            <!-- 这个i是字体图标，动态绑定 -->
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item-group v-for="(children, index) in item.children" :key="index">
                            <el-menu-item :index="children.path">
                                <i :class="children.iconClass"></i>
                                {{ children.name }}
                            </el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>

                </template>


            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: []
        };
    },
    created() {
        // console.log(this.$router.options.routes)
        this.menus = [...this.$router.options.routes]
    }

}
</script>

<style lang="less" scoped>
.menu {
    .el-aside {
        height: 100%;

        .el-menu {
            height: 100%;

            .fa {
                margin-right: 10px;
            }
        }

        // 以上为上下铺满不让有滚动条
        // .el-submenu{
        //     .el-menu-item{
        //         min-width: 0;
        //     }
        // }
    }


}
</style>