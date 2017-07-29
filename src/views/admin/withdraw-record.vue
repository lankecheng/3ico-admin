<template>
  <div>
    <div class="hd">
        <el-form :inline="true">
            <el-form-item label="用户ID">
                <el-input v-model="query.code"/>
            </el-form-item>
            <el-form-item label="手机">
                <el-input v-model="query.mobile"/>
            </el-form-item>
            <el-form-item label="提现地址">
                <el-input v-model="query.address"/>
            </el-form-item>
            <el-form-item label="币种">
                <el-select v-model="query.currency">
                      <el-option v-for="c in currencies" :label="c.text" :value="c.val"></el-option>
                  </el-select>
            </el-form-item>
            <el-form-item label="状态">
                <el-select v-model="query.status">
                      <el-option label="全部" :value="-1"></el-option>
                      <el-option label="待处理" :value="0"></el-option>
                      <el-option label="审核通过" :value="1"></el-option>
                      <el-option label="转出成功" :value="2"></el-option>
                      <el-option label="撤销" :value="3"></el-option>
                  </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleSearch" type="primary">搜索</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table
    v-loading="loading"
        :data="adminWithdrawRecords"
        stripe
        border>
        <el-table-column
          prop="code"
          label="用户ID">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="手机">
        </el-table-column>
          <el-table-column
          label="币种">
          <template scope="scope">
            {{currencies[scope.row.currency].text}}
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="转出数量">
        </el-table-column>
        <el-table-column
          prop="commit_time"
          label="申请时间">
        </el-table-column>
        <el-table-column
          label="状态">
          <template scope="scope">
            {{status[scope.row.status]}}
          </template>
        </el-table-column>
        <el-table-column
        label="操作">
          <template scope="scope">
            <el-button-group>
            <el-button @click="handleCancel(scope.row)" size="small">撤销</el-button>
            <el-button @click="handleApprove(scope.row)" size="small">审核通过</el-button>
            <el-button @click="handleSuccess(scope.row)" size="small">转出成功</el-button>
            </el-button-group>
          </template>
        </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="query.page"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="query.count"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script type="text/babel">
import {
  mapState,
  mapActions,
} from 'vuex';

const DEFAULT_QUERY = {
    page: 1,
    count: 20,
    mobile: '',
    code: '',
    currency: 0,
    address: '',
    status: -1,
};

export default{
    title: '提现',
    data () {
        return {
          total: 0,
          loading: false,
          status: {
            0: '待处理',
            1: '审核通过',
            2: '转出成功',
            3: '撤销',
          },
          query: Object.assign({}, DEFAULT_QUERY, this.$route.query),
        };
    },
    computed: {
      ...mapState({
        adminWithdrawRecords: 'adminWithdrawRecords',
        currencies: 'currencies',
      }),
    },
    methods: {
      ...mapActions({
        getAdminWithdrawRecords: 'getAdminWithdrawRecords',
        cancelAdminWithdraw: 'cancelAdminWithdraw',
        approveAdminWithdraw: 'approveAdminWithdraw',
        successAdminWithdraw: 'successAdminWithdraw',
      }),
      handleCancel(item){
        this.cancelAdminWithdraw({
          record_id: item.id
        }).then((res) => {
          this.$message('操作成功');
          this.initList();
        });
      },
      handleApprove(item){
        this.approveAdminWithdraw({
          record_id: item.id
        }).then((res) => {
          this.$message('操作成功');
          this.initList();
        });
      },
      handleSuccess(item){
        this.successAdminWithdraw({
          record_id: item.id
        }).then((res) => {
          this.$message('操作成功');
          this.initList();
        });
      },
        handleSizeChange(val) {
          this.query.page = 1;
          this.query.count = val;
          this.initList();
        },
        handleCurrentChange(val) {
          this.query.page = val;
          this.initList();
        },
        initList() {
          this.loading = true;
          this.getAdminWithdrawRecords(this.query).then((res) => {
            this.total = res.total;
            // this.query.count = res.count;
            this.loading = false;
          }).catch(() => {
            this.loading = false;
          });
        },
        handleSearch() {
          this.initList();
        }
    },
    created() {
      this.initList();
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
