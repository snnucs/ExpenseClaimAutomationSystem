<template>
  <v-card>
    <v-card-title>
      <v-btn color="info" @click="addWorkflow">新增工作流</v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="搜索" single-line hide-details></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="workflows" sort-by="id" :search="search" :loading="loading">
        <template v-slot:item.action="{ item }">
          <v-btn small color="warning" @click="editWorkflow(item)">配置</v-btn>
          <v-btn class="ml-1" color="error" small @click="deleteWorkflow(item)">删除</v-btn>
        </template>
        <template v-slot:item.flowchart="{ item }">
          <v-btn color="info" @click="showChart(item)">查看</v-btn>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Manage",
  components: {},
  data() {
    return {
      headers: [
        { text: "ID", sortable: true, value: "id" },
        { text: "名称", value: "name" },
        { text: "描述", value: "description" },
        { text: "创建人", value: "creator" },
        { text: "创建时间", value: "created" },
        { text: "操作", value: "action", sortable: false },
        { text: "查看流程图", value: "flowchart" }
      ],
      workflows: [],
      search: "",
      workflow: {},
      loading: true
    };
  },
  mounted() {
    this.listWorkflow();
  },
  methods: {
    listWorkflow() {
      let self = this;
      self.loading = true;
      this.$api.ListWorkflow().then(function(response) {
        self.loading = false;
        self.workflows = response.result;
      });
    },
    addWorkflow() {
      this.$router.push("/workflow/new");
    },
    editWorkflow(item) {
      this.$router.push("/workflow/manage/" + item.id);
    },
    deleteWorkflow(item) {
      let self = this;
      const index = this.workflows.indexOf(item);
      confirm("确定要删除工作流'" + item.name + "'吗?") &&
        this.$api.DeleteWorkflow(item.id).then(function(response) {
          self.$message.success("删除工作流'" + item.name + "'成功!");
          self.listWorkflow();
        });
    },
    showChart(item) {
      this.$router.push("/workflow/" + item.id + "/flow-chart");
    }
  }
};
</script>

<style></style>
