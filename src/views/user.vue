<template>
  <div>
    <div class="hd">
        <el-form :inline="true">
            <el-form-item label="昵称">
                <el-input v-model="query.nickname"/>
            </el-form-item>
            <el-form-item label="手机">
                <el-input v-model="query.phone"/>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="query.name"/>
            </el-form-item>
            <el-form-item label="身份证">
                <el-input v-model="query.id"/>
            </el-form-item>
            <el-form-item label="余额">
                <el-input style="width: 60px;" v-model="query.id"/>
                -
                <el-input style="width: 60px;" v-model="query.id"/>
            </el-form-item>
            <el-form-item label="投资">
                <el-input style="width: 60px;" v-model="query.id"/>
                -
                <el-input style="width: 60px;" v-model="query.id"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">搜索</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table
        :data="data"
        stripe
        border>
        <el-table-column
          prop="nickname"
          label="昵称">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机">
        </el-table-column>
          <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
          <el-table-column
          prop="id"
          label="身份证">
        </el-table-column>
        <el-table-column
          prop="yue"
          label="余额">
        </el-table-column>
          <el-table-column
          prop="tz"
          label="投资">
        </el-table-column>
        <el-table-column
          width="180"
          prop="created_at"
          label="注册日期">
        </el-table-column>
        <el-table-column
        width="100"
        label="操作">
          <template scope="scope">
            <router-link to="/asset">资产流水</router-link>
          </template>
        </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script type="text/babel">
const DEFAULT_QUERY = {
    page: 1,
    pageSize: 10,
    nickname: '',
    phone: '',
    name: '',
    id: '',
};

export default{
    title: '用户列表',
    data () {
        return {
            query: Object.assign({}, DEFAULT_QUERY, this.$route.query),
        };
    },
    computed: {
        data() {
            return [
                {
                    nickname: 'nickname1',
                    phone: '11111111111',
                    name: '张三',
                    id: '333333333333333333',
                    yue: '22.2',
                    tz: '11.1',
                    created_at: '2017-12-12 12:00',
                },
                {
                    nickname: 'nickname1',
                    phone: '11111111111',
                    name: '张三',
                    id: '333333333333333333',
                    yue: '22.2',
                    tz: '11.1',
                    created_at: '2017-12-12 12:00',
                },
                {
                    nickname: 'nickname1',
                    phone: '11111111111',
                    name: '张三',
                    id: '333333333333333333',
                    yue: '22.2',
                    tz: '11.1',
                    created_at: '2017-12-12 12:00',
                },
            ];
        },
    },
    methods: {
        handleSizeChange() {},
        handleCurrentChange() {},
    }
};
</script>

<style lang="scss" scoped>
.hd{
    // margin-bottom: 20px;
}
.page{
    text-align: right;
    margin-top: 20px;
}
</style>
