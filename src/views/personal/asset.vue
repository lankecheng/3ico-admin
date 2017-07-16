<template>
  <div>
    <div class="hd">
        <el-form :inline="true">
            <el-form-item label="变动类型">
                <el-select v-model="query.type">
                    <el-option label="类型1" value="1"></el-option>
                    <el-option label="类型2" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="项目编码">
                <el-input v-model="query.project"/>
            </el-form-item>
            <el-form-item label="项目名称">
                <el-input v-model="query.project"/>
            </el-form-item>
            <el-form-item label="变动额">
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
          width="120"
          prop="type"
          label="变动类型">
        </el-table-column>
        <el-table-column
          prop="project"
          label="项目编码">
        </el-table-column>
        <el-table-column
          prop="project"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="bdq"
          label="变动前">
        </el-table-column>
        <el-table-column
          prop="bde"
          label="变动额">
        </el-table-column>
        <el-table-column
          prop="bdh"
          label="变动后">
        </el-table-column>
        <el-table-column
          width="180"
          prop="created_at"
          label="变动日期">
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
    type: '1',
    project: '',
};

export default{
    title: '资产流水',
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
                    type: '类型',
                    project: '项目1',
                    bde: '10.00',
                    bdq: '0.00',
                    bdh: '10.00',
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
